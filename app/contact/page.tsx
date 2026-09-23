'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import LuxeButton from '@/components/ui/LuxeButton';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    detail: 'Mon–Sat, 10 AM – 7 PM IST',
  href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@gajendrasilks.com',
    detail: 'We reply within 24 hours',
    href: 'mailto:hello@gajendrasilks.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Silk Weavers Lane, Kanchipuram',
    detail: 'Tamil Nadu 631501, India',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Store Hours',
    value: 'Monday – Saturday: 10 AM – 7 PM',
    detail: 'Sunday: By appointment only',
    href: '#',
  },
];

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/gajendrasilks?stkn=eXk1N2VtaHBjeW5m&utm_source=qr',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/Gajendrasilks/',
  },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38796456/pexels-photo-38796456.png?auto=compress&cs=tinysrgb&h=800&w=1200"
            alt="Woman in colorful saree"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-maroon/50" />
        </div>
        <div className="relative z-10 px-4 text-center text-cream">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="font-serif-display text-4xl font-medium md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-cream/80">
            Whether you have a question about our sarees or need help choosing
            the perfect one — we&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="group border border-border bg-card p-8 text-center transition-all hover:border-gold hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold/40 transition-colors group-hover:bg-gold group-hover:text-maroon">
                <info.icon className="h-6 w-6 text-gold transition-colors group-hover:text-maroon" />
              </div>
              <h3 className="mt-5 text-xs font-medium uppercase tracking-widest text-gold">
                {info.label}
              </h3>
              <p className="mt-2 font-serif-display text-lg font-medium text-maroon">
                {info.value}
              </p>
              <p className="mt-1 text-xs font-light text-muted-foreground">
                {info.detail}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Form + Map */}
      <section className="bg-ivory py-20">
        <div className="container-lux px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Form */}
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="Get in Touch"
                align="left"
              />
              {status === 'success' ? (
                <div className="mt-8 flex flex-col items-center justify-center border border-border bg-card p-12 text-center animate-fade-in-up">
                  <CheckCircle className="h-12 w-12 text-gold" />
                  <h3 className="mt-4 font-serif-display text-2xl font-medium text-maroon">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm font-light text-muted-foreground">
                    Your message has been sent. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-border bg-cream px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-border bg-cream px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-border bg-cream px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-border bg-cream px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-border bg-cream px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm font-light text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}
                  <LuxeButton
                    type="submit"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </LuxeButton>
                </form>
              )}
            </div>

            {/* Store Info + Social */}
            <div>
              <SectionHeading
                eyebrow="Visit Our Store"
                title="Store Information"
                align="left"
              />
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif-display text-lg font-medium text-maroon">
                        Gajendra Silks Flagship Store
                      </h3>
                      <p className="mt-1 text-sm font-light text-foreground/70">
                        123 Silk Weavers Lane
                        <br />
                        Kanchipuram, Tamil Nadu 631501
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif-display text-lg font-medium text-maroon">
                        Opening Hours
                      </h3>
                      <div className="mt-2 space-y-1 text-sm font-light text-foreground/70">
                        <div className="flex justify-between">
                          <span>Monday – Friday</span>
                          <span>10:00 AM – 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM – 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>By appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>

                {/* Social */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href !== '#' ? '_blank' : undefined}
                        rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center border border-border bg-card transition-all hover:border-gold hover:bg-gold hover:text-maroon"
                      >
                        <social.icon className="h-5 w-5 text-maroon" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]" />
        </span>
      </a>
    </>
  );
}
