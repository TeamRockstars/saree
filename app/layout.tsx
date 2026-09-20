import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gajendrasilks.com'),
  title: 'Gajendra Silks — Handwoven Heritage Sarees',
  description:
    'Gajendra Silks crafts premium handwoven silk sarees celebrating Indian tradition, craftsmanship, and timeless beauty. Explore our collections of Kanchipuram, Banarasi, and bridal silk sarees.',
  keywords: ['silk sarees', 'Kanchipuram', 'Banarasi', 'bridal sarees', 'Indian silk', 'handwoven'],
  openGraph: {
    title: 'Gajendra Silks — Handwoven Heritage Sarees',
    description: 'Premium handwoven silk sarees celebrating Indian tradition and timeless beauty.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} font-body antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
