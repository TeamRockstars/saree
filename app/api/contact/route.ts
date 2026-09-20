import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: subject
        ? `Gajendra Silks Contact: ${subject}`
        : `Gajendra Silks Contact: New message from ${name}`,
      text: `
New contact form submission from Gajendra Silks website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: 'Jost', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f5; padding: 30px; border: 1px solid #e8e0d0;">
  <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #c9a227;">
    <h1 style="font-family: 'Cormorant Garamond', serif; color: #6b1d2e; margin: 0; font-size: 28px;">Gajendra Silks</h1>
    <p style="color: #c9a227; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 5px 0 0 0;">New Contact Form Submission</p>
  </div>
  <div style="padding: 25px 0;">
    <table style="width: 100%; font-size: 14px; color: #3a2a2a;">
      <tr><td style="padding: 8px 0; font-weight: 600; color: #6b1d2e; width: 100px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #6b1d2e;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c9a227;">${email}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #6b1d2e;">Phone:</td><td style="padding: 8px 0;">${phone || 'Not provided'}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #6b1d2e;">Subject:</td><td style="padding: 8px 0;">${subject || 'Not provided'}</td></tr>
    </table>
    <div style="margin-top: 20px; padding: 15px; background: #fff; border-left: 3px solid #c9a227;">
      <p style="font-weight: 600; color: #6b1d2e; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
      <p style="margin: 0; line-height: 1.6; color: #3a2a2a;">${message.replace(/\n/g, '<br>')}</p>
    </div>
  </div>
  <div style="text-align: center; padding-top: 15px; border-top: 1px solid #e8e0d0; font-size: 11px; color: #999;">
    This email was sent from the Gajendra Silks website contact form.
  </div>
</div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
