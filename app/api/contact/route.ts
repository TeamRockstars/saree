import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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

    // Save to Supabase — this is the reliable path
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({ name, email, phone: phone || null, subject: subject || null, message });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return NextResponse.json(
        { error: 'Something went wrong. Please try again or email us directly.' },
        { status: 500 }
      );
    }

    // Attempt email delivery as best-effort (don't fail the request if it errors)
    try {
      const smtpPass = (process.env.SMTP_PASS || '').replace(/\s/g, '');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: subject
          ? `Gajendra Silks Contact: ${subject}`
          : `Gajendra Silks Contact: New message from ${name}`,
        text: `New contact form submission from Gajendra Silks website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'Not provided'}\n\nMessage:\n${message}`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ee;padding:30px;border:1px solid #e8d8c0;">
  <div style="text-align:center;padding-bottom:20px;border-bottom:2px solid #a9772f;">
    <h1 style="font-family:Georgia,serif;color:#5e1423;margin:0;font-size:26px;">Gajendra Silks</h1>
    <p style="color:#a9772f;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:5px 0 0 0;">New Contact Form Submission</p>
  </div>
  <div style="padding:25px 0;">
    <table style="width:100%;font-size:14px;color:#2a1e1a;">
      <tr><td style="padding:8px 0;font-weight:600;color:#5e1423;width:100px;">Name:</td><td>${name}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#5e1423;">Email:</td><td><a href="mailto:${email}" style="color:#a9772f;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#5e1423;">Phone:</td><td>${phone || 'Not provided'}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#5e1423;">Subject:</td><td>${subject || 'Not provided'}</td></tr>
    </table>
    <div style="margin-top:20px;padding:15px;background:#fff;border-left:3px solid #a9772f;">
      <p style="font-weight:600;color:#5e1423;margin:0 0 8px 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
      <p style="margin:0;line-height:1.6;color:#2a1e1a;">${message.replace(/\n/g, '<br>')}</p>
    </div>
  </div>
  <div style="text-align:center;padding-top:15px;border-top:1px solid #e8d8c0;font-size:11px;color:#999;">
    Sent from the Gajendra Silks website contact form.
  </div>
</div>`,
      });
    } catch (emailErr) {
      // Email failed — submission is already saved to Supabase, so this is non-fatal
      console.error('Email delivery failed (submission saved to DB):', emailErr);
    }

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
