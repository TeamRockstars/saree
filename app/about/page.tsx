'use client';

import Link from 'next/link';
import { ArrowRight, Heart, Award, Leaf, Users } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import LuxeButton from '@/components/ui/LuxeButton';

const values = [
  {
    icon: Heart,
    title: 'Tradition',
    description:
      'We preserve centuries-old weaving techniques passed down through generations of master artisans.',
  },
  {
    icon: Award,
    title: 'Craftsmanship',
    description:
      'Every saree is a labor of love, taking weeks to complete with meticulous attention to every motif.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We use natural silk and dyes, supporting eco-friendly practices and fair wages for our weavers.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We empower weaving communities, ensuring their art thrives and their families prosper.',
  },
];

const artisans = [
  {
    name: 'Ramanathan',
    role: 'Master Weaver',
    experience: '45 years',
    image:
      'https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Lakshmi',
    role: 'Zari Specialist',
    experience: '30 years',
    image:
      'https://images.pexels.com/photos/38556299/pexels-photo-38556299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Murugan',
    role: 'Dyeing Expert',
    experience: '35 years',
    image:
      'https://images.pexels.com/photos/28382914/pexels-photo-28382914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9419023/pexels-photo-9419023.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
            alt="Indian woman in traditional saree"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-maroon/50" />
        </div>
        <div className="relative z-10 px-4 text-center text-cream">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            About Gajendra Silks
          </p>
          <h1 className="font-serif-display text-4xl font-medium md:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-cream/80">
            A journey of silk, devotion, and the hands that weave dreams into
            reality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <Section className="bg-cream">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="img-zoom relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14953193/pexels-photo-14953193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Traditional handloom weaving"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Since 1978"
              title="A Legacy Woven in Silk"
              align="left"
            />
            <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-foreground/80">
              <p>
                Gajendra Silks was born in the temple town of Kanchipuram, where
                the sound of looms has echoed through centuries. Our founder,
                Mr. Gajendra Iyer, began with a simple vision — to bring the
                finest handwoven silk sarees to women who appreciate true
                craftsmanship.
              </p>
              <p>
                What started as a small weaving workshop has grown into a brand
                trusted by thousands of families across India. Yet, our core
                remains unchanged — every saree is still woven by hand, every
                motif still tells a story, and every thread still carries the
                warmth of its maker.
              </p>
              <p>
                Today, three generations later, we continue to honor the
                traditions that define Indian silk weaving, while bringing the
                beauty of our heritage to a new generation of women.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Heritage & Craftsmanship */}
      <section className="relative overflow-hidden bg-ivory py-20">
        <div className="container-lux px-4 md:px-8">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Heritage &amp; Craftsmanship"
            subtitle="The art of Kanchipuram silk weaving is a sacred tradition, protected by generations of devoted artisans."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'The Silk',
                text: 'We source the finest mulberry silk from Karnataka, known for its strength, luster, and durability. Each thread is tested for quality before it reaches the loom.',
              },
              {
                number: '02',
                title: 'The Zari',
                text: 'Our gold zari is drawn from pure silver threads coated in gold, creating the shimmering borders and motifs that define our sarees.',
              },
              {
                number: '03',
                title: 'The Weave',
                text: 'Master weavers spend 15-20 days on a single saree, interlocking the warp and weft with precision that machines cannot replicate.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-border bg-card p-8 text-center"
              >
                <p className="font-serif-display text-4xl font-medium text-gold/40">
                  {item.number}
                </p>
                <h3 className="mt-3 font-serif-display text-xl font-medium text-maroon">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Artisans */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="The Hands Behind the Magic"
          title="Our Artisans"
          subtitle="Meet the master weavers whose skill and devotion bring every Gajendra saree to life."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {artisans.map((artisan) => (
            <div key={artisan.name} className="group">
              <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-cream">
                  <h3 className="font-serif-display text-xl font-medium">
                    {artisan.name}
                  </h3>
                  <p className="text-xs font-light uppercase tracking-widest text-gold">
                    {artisan.role}
                  </p>
                  <p className="mt-1 text-xs font-light text-cream/70">
                    {artisan.experience} of devotion
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Brand Values */}
      <section className="bg-maroon py-20">
        <div className="container-lux px-4 md:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Brand Values"
            subtitle="The principles that guide every thread we weave."
            light
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-cream/20 p-8 text-center transition-colors hover:border-gold"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold/40">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-serif-display text-xl font-medium text-cream">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-cream/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="bg-cream">
        <div className="text-center">
          <h2 className="font-serif-display text-3xl font-medium text-maroon md:text-4xl">
            Experience Our Craft
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-muted-foreground">
            Discover the meticulous process behind every Gajendra saree.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/craft">
              <LuxeButton variant="primary" size="lg">
                Explore Our Craft
                <ArrowRight className="ml-2 h-4 w-4" />
              </LuxeButton>
            </Link>
            <Link href="/shop">
              <LuxeButton variant="outline" size="lg">
                Browse Collection
              </LuxeButton>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
