import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-xs font-medium uppercase tracking-[0.3em]',
            light ? 'text-gold' : 'text-gold'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-serif-display text-3xl font-medium leading-tight md:text-4xl lg:text-5xl',
          light ? 'text-cream' : 'text-maroon'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base font-light leading-relaxed',
            light ? 'text-cream/80' : 'text-muted-foreground'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-5 flex items-center gap-3',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-px w-12 bg-gold/60" />
        <span className="text-gold">◆</span>
        <span className="h-px w-12 bg-gold/60" />
      </div>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('section-padding', className)}>
      <div className="container-lux">{children}</div>
    </section>
  );
}
