'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import LuxeButton from '@/components/ui/LuxeButton';

const weavingSteps = [
  {
    step: '01',
    title: 'Sourcing the Silk',
    description:
      'We begin with the finest mulberry silk from Karnataka, carefully selected for its strength, luster, and natural sheen. Each batch is hand-inspected for quality.',
    image:
      'https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    step: '02',
    title: 'Dyeing the Threads',
    description:
      'Silk threads are dyed using traditional techniques with vibrant natural colors. The dyeing process ensures the colors remain rich and fade-resistant for generations.',
    image:
      'https://images.pexels.com/photos/33433875/pexels-photo-33433875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    step: '03',
    title: 'Preparing the Loom',
    description:
      'The warp threads are carefully strung on the handloom, a process that takes 2-3 days. Each thread must be perfectly tensioned for a flawless weave.',
    image:
      'https://images.pexels.com/photos/6332015/pexels-photo-6332015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    step: '04',
    title: 'The Weaving',
    description:
      'The master weaver begins the sacred process of interlacing warp and weft, creating motifs and patterns from memory. A single saree takes 15-20 days to complete.',
    image:
      'https://images.pexels.com/photos/28382914/pexels-photo-28382914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    step: '05',
    title: 'Zari & Embellishment',
    description:
      'Gold zari threads are woven into the borders and pallu, creating the shimmering motifs that define Kanchipuram and Banarasi sarees.',
    image:
      'https://images.pexels.com/photos/6167463/pexels-photo-6167463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    step: '06',
    title: 'Quality & Finishing',
    description:
      'Each completed saree is inspected thread by thread, then washed, starched, and pressed to perfection before it reaches you.',
    image:
      'https://images.pexels.com/photos/23749436/pexels-photo-23749436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const techniques = [
  {
    title: 'Korvai Weaving',
    description:
      'A traditional technique where the border and body are woven separately and interlocked by hand, creating the distinctive contrast borders of Kanchipuram sarees.',
  },
  {
    title: 'Jamdani',
    description:
      'A supplementary weft technique where motifs are woven by hand, creating patterns that appear to float on the surface of the fabric.',
  },
  {
    title: 'Brocade (Kadhua)',
    description:
      'Each motif is woven individually, thread by thread, creating the rich, textured patterns characteristic of Banarasi sarees.',
  },
  {
    title: 'Kuttu Joining',
    description:
      'The ancient art of joining the pallu to the body of the saree without stitches, using only the interlocking of threads.',
  },
];

export default function CraftPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
            alt="Master weaver at loom"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-maroon/50" />
        </div>
        <div className="relative z-10 px-4 text-center text-cream">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            The Art Behind the Saree
          </p>
          <h1 className="font-serif-display text-4xl font-medium md:text-6xl">
            Our Craft
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-cream/80">
            From silk cocoon to finished masterpiece — discover the journey of
            a Gajendra saree.
          </p>
        </div>
      </section>

      {/* Weaving Process */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Step by Step"
          title="The Weaving Process"
          subtitle="Each saree passes through six sacred stages, each requiring years of mastery."
        />
        <div className="mt-12 space-y-12">
          {weavingSteps.map((item, index) => (
            <div
              key={item.step}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`img-zoom relative aspect-[4/3] overflow-hidden ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 bg-maroon px-4 py-2 font-serif-display text-2xl font-medium text-cream">
                  {item.step}
                </span>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-serif-display text-2xl font-medium text-maroon md:text-3xl">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-12 bg-gold/60" />
                  <span className="text-gold">◆</span>
                  <span className="h-px w-12 bg-gold/60" />
                </div>
                <p className="mt-5 text-base font-light leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Artisans Section */}
      <section className="relative overflow-hidden bg-maroon py-20">
        <div className="container-lux px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="img-zoom relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/31508152/pexels-photo-31508152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Artisan and child weaving"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="The Human Touch"
                title="Our Artisans"
                align="left"
                light
              />
              <p className="mt-6 text-base font-light leading-relaxed text-cream/80">
                Behind every Gajendra saree is a master artisan — a keeper of
                knowledge passed from parent to child. Many of our weavers
                learned their craft as children, watching their parents at the
                loom, just as their grandparents did before them.
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-cream/80">
                We are proud to support over 200 weaving families, providing
                fair wages, healthcare, and education for their children. When
                you wear a Gajendra saree, you wear the hopes and dreams of an
                entire family.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { number: '200+', label: 'Weaving Families' },
                  { number: '45', label: 'Years of Heritage' },
                  { number: '15-20', label: 'Days per Saree' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif-display text-3xl font-medium text-gold">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-cream/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silk & Zari */}
      <Section className="bg-ivory">
        <SectionHeading
          eyebrow="The Materials"
          title="Silk &amp; Zari"
          subtitle="The two sacred elements that give our sarees their soul — pure silk and gold zari."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <div className="img-zoom mb-6 aspect-[16/10] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7676347/pexels-photo-7676347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Silk fabric"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-serif-display text-2xl font-medium text-maroon">
              The Silk
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-foreground/80">
              We use only pure mulberry silk, prized for its natural luster,
              strength, and ability to hold rich colors. The silk is sourced
              directly from sericulture farmers in Karnataka, ensuring fair
              prices and sustainable practices. Each thread is a testament to
              nature&apos;s finest work.
            </p>
          </div>
          <div className="border border-border bg-card p-8">
            <div className="img-zoom mb-6 aspect-[16/10] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7232843/pexels-photo-7232843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Gold zari fabric"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-serif-display text-2xl font-medium text-maroon">
              The Zari
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-foreground/80">
              Our zari is made from pure silver threads electroplated with
              gold, creating the shimmering borders and motifs that define our
              sarees. This ancient technique produces a zari that lasts
              generations, its glow deepening with time rather than fading.
            </p>
          </div>
        </div>
      </Section>

      {/* Traditional Techniques */}
      <section className="bg-cream py-20">
        <div className="container-lux px-4 md:px-8">
          <SectionHeading
            eyebrow="Ancient Wisdom"
            title="Traditional Techniques"
            subtitle="The weaving methods that have defined Indian silk for centuries."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {techniques.map((tech) => (
              <div
                key={tech.title}
                className="border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-serif-display text-xl font-medium text-maroon">
                  {tech.title}
                </h3>
                <div className="mt-2 h-px w-12 bg-gold/60" />
                <p className="mt-4 text-sm font-light leading-relaxed text-foreground/80">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon py-20 text-center">
        <div className="container-lux px-4">
          <h2 className="font-serif-display text-3xl font-medium text-cream md:text-4xl">
            Wear the Art of Centuries
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-cream/70">
            Every saree in our collection is a testament to the craft you just
            discovered.
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
    </>
  );
}
