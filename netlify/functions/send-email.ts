import type { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        // Parse form data
        const body = JSON.parse(event.body || '{}');
        const { name, email, subject, message, 'bot-field': botField } = body;

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
        <hr>
        <p><em>Reply to: ${email}</em></p>
      `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Email sent successfully'
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
