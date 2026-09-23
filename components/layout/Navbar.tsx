'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/shop', label: 'Shop' },
  { href: '/craft', label: 'Our Craft' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-cream/95 shadow-md backdrop-blur-sm'
            : 'bg-cream/80 backdrop-blur-sm'
        )}
      >
        {/* Top announcement bar */}
        <div className="bg-maroon text-cream">
          <div className="container-lux flex items-center justify-center px-4 py-1.5 text-center text-[11px] font-light tracking-widest">
            <span>FREE SHIPPING ACROSS INDIA • HANDWOVEN WITH LOVE</span>
          </div>
        </div>

        <nav className="container-lux flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif-display text-xl font-semibold text-maroon md:text-2xl">
                Gajendra Silks
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gold">
                Heritage Handwoven
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium uppercase tracking-widest transition-colors duration-200 hover:text-gold',
                    pathname === link.href ? 'text-gold' : 'text-maroon'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 text-maroon transition-colors hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-maroon">
                  {itemCount}
                </span>
              )}
            </button>
            <Link
              href="/shop"
              className="hidden bg-maroon px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-maroon lg:flex"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-maroon lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-cream transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-serif-display text-2xl font-medium transition-colors hover:text-gold',
                pathname === link.href ? 'text-gold' : 'text-maroon'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="mt-4 bg-maroon px-8 py-3 text-sm font-medium uppercase tracking-widest text-cream"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
