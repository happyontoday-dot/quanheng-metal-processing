import { Resend } from "resend";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const resend = new Resend(process.env.RESEND_API_KEY);

const s3Client = new S3Client({
    region: process.env.MY_AWS_REGION || "ap-northeast-1",
    credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY || "",
    },
    endpoint: process.env.S3_ENDPOINT || undefined,
    forcePathStyle: !!process.env.S3_ENDPOINT,
});

export default async (req: Request) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const body = await req.json();
        const { name, email, company, quantity, material, surface_finish, message, files } = body;

        // 为上传的文件生成有效期为 7 天的下载链接
        const fileLinks = await Promise.all((files || []).map(async (file: any) => {
            try {
                const command = new GetObjectCommand({
                    Bucket: process.env.S3_BUCKET_NAME || "qumetal.com",
                    Key: file.key,
                });
                const url = await getSignedUrl(s3Client, command, { expiresIn: 604800 });
                return { name: file.name, url, size: file.size };
            } catch (e) {
                console.error(`Error generating link for ${file.key}`, e);
                return { name: file.name, url: "#error", error: "Failed to generate link" };
            }
        }));

        // 构建邮件内容
        const fileHtml = fileLinks.map((f: any) =>
            `<li><a href="${f.url}">${f.name}</a> (${(f.size / 1024 / 1024).toFixed(2)} MB)</li>`
        ).join("");

        const emailHtml = `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Material:</strong> ${material}</p>
            <p><strong>Surface Finish:</strong> ${surface_finish}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">${message || "No message"}</blockquote>
            
            <h3>Attachments (Valid for 7 days):</h3>
            <ul>
                ${fileHtml || "<li>No files attached</li>"}
            </ul>
        `;

        const { data, error } = await resend.emails.send({
            from: "Quanheng Metal <info@qumetal.com>",
            to: [process.env.CONTACT_EMAIL || "happyontoday@gmail.com"],
            subject: `New Quote Request from ${name}`,
            html: emailHtml,
            replyTo: email,
        });

        if (error) {
            console.error("Resend Error:", error);
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(JSON.stringify({ message: "Quote submitted successfully", id: data?.id }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Submission Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
