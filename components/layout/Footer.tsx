import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream">
      {/* Top decorative band */}
      <div className="h-2 gold-gradient" />

      <div className="container-lux px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-2xl font-semibold text-cream">
              Gajendra Silks
            </h3>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              Heritage Handwoven
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">
              Crafting timeless silk sarees since 1978. Each weave tells a story
              of tradition, devotion, and the hands that bring it to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/shop', label: 'Shop' },
                { href: '/craft', label: 'Our Craft' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Collections
            </h4>
            <ul className="space-y-2.5">
              {['Silk Sarees', 'Bridal Collection', 'Festive Specials', 'Kanchipuram', 'Banarasi'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/shop"
                      className="text-sm font-light text-cream/70 transition-colors hover:text-gold"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-light text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>123 Silk Weavers Lane, Kanchipuram, Tamil Nadu 631501, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-cream/70">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-cream/70">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>hello@gajendrasilks.com</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-cream/30 transition-colors hover:border-gold hover:bg-gold hover:text-maroon"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/20 pt-6 md:flex-row">
          <p className="text-xs font-light tracking-wide text-cream/50">
            © 2026 Gajendra Silks. All rights reserved. Handwoven with love in India.
          </p>
          <p className="text-xs font-light tracking-wide text-cream/50">
            Tradition • Craftsmanship • Elegance • Timeless Beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
