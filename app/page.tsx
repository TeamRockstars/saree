'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { products, Product } from '@/lib/products';
import { Section, SectionHeading } from '@/components/ui/Section';
import ProductCard from '@/components/product/ProductCard';
import ProductModal from '@/components/product/ProductModal';
import LuxeButton from '@/components/ui/LuxeButton';

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'My bridal Kanjivaram saree from Gajendra Silks was beyond my dreams. The zari work, the colors, the fall of the silk — everything was perfect. I felt like a queen on my wedding day.',
    rating: 5,
  },
  {
    name: 'Ananya Iyer',
    location: 'Bangalore',
    text: 'I have been buying sarees from Gajendra Silks for over a decade. The quality never wavers. Each saree is a piece of art that I will pass down to my daughter.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    location: 'Hyderabad',
    text: 'The craftsmanship is unmatched. You can feel the love and tradition woven into every thread. Their festive collection is my go-to for every celebration.',
    rating: 5,
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredSarees = products.filter((p) => p.featured).slice(0, 4);
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/27575104/pexels-photo-27575104.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
            alt="Woman in luxury silk saree"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon/50 via-maroon/30 to-maroon/60" />
        </div>

        <div className="relative z-10 px-4 text-center text-cream">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold animate-fade-in-up">
            Heritage Handwoven Since 1978
          </p>
          <h1 className="font-serif-display text-4xl font-medium leading-tight md:text-6xl lg:text-7xl animate-fade-in-up">
            The Art of
            <br />
            <span className="gold-text">Silk &amp; Tradition</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-cream/85 md:text-lg animate-fade-in-up">
            Each Gajendra saree is woven by master artisans, carrying centuries
            of Indian heritage in every thread of silk and gold.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
            <Link href="/shop">
              <LuxeButton variant="gold" size="lg">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </LuxeButton>
            </Link>
            <Link href="/about">
              <LuxeButton
                variant="outline"
                size="lg"
                className="border-cream text-cream hover:bg-cream hover:text-maroon"
              >
                Our Story
              </LuxeButton>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-12 w-px bg-cream/40" />
          </div>
        </div>
      </section>

      {/* Featured Sarees */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Curated Selection"
          title="Featured Sarees"
          subtitle="Handpicked masterpieces that represent the pinnacle of Indian silk weaving."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featuredSarees.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/shop">
            <LuxeButton variant="outline">
              View All Sarees
              <ArrowRight className="ml-2 h-4 w-4" />
            </LuxeButton>
          </Link>
        </div>
      </Section>

      {/* Collections Banner */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-3">
          {[
            {
              title: 'Silk',
              subtitle: 'Pure Mulberry & Kanjivaram',
              image:
                'https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              href: '/shop?category=Silk',
            },
            {
              title: 'Bridal',
              subtitle: 'For Your Sacred Day',
              image:
                'https://images.pexels.com/photos/35108778/pexels-photo-35108778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              href: '/shop?category=Bridal',
            },
            {
              title: 'Festive',
              subtitle: 'Celebrate in Color',
              image:
                'https://images.pexels.com/photos/6045294/pexels-photo-6045294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              href: '/shop?category=Festive',
            },
          ].map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative block aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
              <img
                src={col.image}
                alt={col.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-cream">
                <h3 className="font-serif-display text-2xl font-medium md:text-3xl">
                  {col.title}
                </h3>
                <p className="mt-1 text-xs font-light uppercase tracking-widest text-cream/80">
                  {col.subtitle}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <Section className="bg-ivory">
        <SectionHeading
          eyebrow="Loved by Many"
          title="Bestsellers"
          subtitle="The sarees our customers return for — timeless favorites that never go out of style."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </Section>

      {/* Brand Story */}
      <section className="relative overflow-hidden bg-maroon">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&h=800&w=900"
              alt="Master weaver at work"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 text-cream md:p-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>
            <h2 className="font-serif-display text-3xl font-medium leading-tight md:text-4xl">
              Three Generations of
              <br />
              Weaving Devotion
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold">◆</span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <p className="mt-6 text-base font-light leading-relaxed text-cream/80">
              Since 1978, Gajendra Silks has been weaving more than just sarees —
              we weave stories, blessings, and the dreams of every woman who
              drapes our creations. From the looms of Kanchipuram to your
              wardrobe, every thread carries the warmth of human hands.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-cream/80">
              Our master weavers spend weeks on a single saree, ensuring each
              motif is perfect, each border is precise, and each pallu tells a
              story of its own.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <LuxeButton variant="gold">
                  Discover Our Heritage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LuxeButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Words of Love"
          title="Customer Stories"
          subtitle="Real experiences from women who chose Gajendra Silks for their special moments."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg"
            >
              <Quote className="mx-auto h-8 w-8 text-gold/40" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-foreground/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-serif-display text-lg font-medium text-maroon">
                  {review.name}
                </p>
                <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-maroon py-20 text-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/10317113/pexels-photo-10317113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <h2 className="font-serif-display text-3xl font-medium text-cream md:text-4xl">
            Drape Yourself in Heritage
          </h2>
          <p className="mt-4 text-base font-light text-cream/70">
            Explore our full collection of handwoven silk sarees, each one a
            masterpiece of Indian craftsmanship.
          </p>
          <div className="mt-8">
            <Link href="/shop">
              <LuxeButton variant="gold" size="lg">
                Shop the Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </LuxeButton>
            </Link>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
