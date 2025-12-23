import type { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import busboy from 'busboy';
import { Readable } from 'stream';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormFields {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    'bot-field'?: string;
}

interface FileAttachment {
    filename: string;
    content: Buffer;
    contentType: string;
}

const parseMultipartForm = (event: any): Promise<{ fields: FormFields; files: FileAttachment[] }> => {
    return new Promise((resolve, reject) => {
        const fields: FormFields = {};
        const files: FileAttachment[] = [];

        // Convert base64 body to buffer if needed
        const bodyBuffer = event.isBase64Encoded
            ? Buffer.from(event.body, 'base64')
            : Buffer.from(event.body);

        const bb = busboy({
            headers: {
                'content-type': event.headers['content-type'] || event.headers['Content-Type'],
            },
        });

        bb.on('field', (name: string, value: string) => {
            fields[name as keyof FormFields] = value;
        });

        bb.on('file', (name: string, file: Readable, info: { filename: string; mimeType: string }) => {
            const chunks: Buffer[] = [];

            file.on('data', (chunk: Buffer) => {
                chunks.push(chunk);
            });

            file.on('end', () => {
                files.push({
                    filename: info.filename,
                    content: Buffer.concat(chunks),
                    contentType: info.mimeType,
                });
            });
        });

        bb.on('finish', () => {
            resolve({ fields, files });
        });

        bb.on('error', (error: Error) => {
            reject(error);
        });

        // Write the buffer to busboy
        bb.write(bodyBuffer);
        bb.end();
    });
};

export const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        // Parse multipart form data
        const { fields, files } = await parseMultipartForm(event);
        const { name, email, subject, message, 'bot-field': botField } = fields;

        // Honeypot spam detection
        if (botField) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Spam detected' }),
            };
        }

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' }),
            };
        }

        // Prepare attachments for Resend
        const attachments = files.map(file => ({
            filename: file.filename,
            content: file.content,
        }));

        // Send email via Resend
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'your-email@example.com';

        await resend.emails.send({
            from: 'Quanheng Contact Form <onboarding@resend.dev>',
            to: recipientEmail,
            subject: `New Contact Form Submission${subject ? `: ${subject}` : ''}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s)</p>` : ''}
        <hr>
        <p><em>Reply to: ${email}</em></p>
      `,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Email sent successfully',
                attachmentCount: attachments.length,
            }),
        };
    } catch (error: any) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to send email',
                details: error.message
            }),
        };
    }
};
