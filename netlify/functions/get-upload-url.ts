import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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
        const { filename, filetype } = await req.json();

        if (!filename || !filetype) {
            return new Response(JSON.stringify({ error: "Filename and filetype are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // 规范化文件名并添加时间戳防止冲突
        const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, "_");
        const uniqueFilename = `${Date.now()}-${sanitizedFilename}`;
        const key = `uploads/${uniqueFilename}`;

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME || "qumetal.com",
            Key: key,
            ContentType: filetype,
        });

        const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        return new Response(JSON.stringify({
            uploadUrl,
            key
        }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error generating signed URL:", error);
        return new Response(JSON.stringify({ error: "Failed to generate upload URL" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
