import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface LuxeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost' | 'overlay';
  size?: 'sm' | 'md' | 'lg';
}

const LuxeButton = forwardRef<HTMLButtonElement, LuxeButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary:
        'bg-maroon text-ivory hover:bg-maroon-dark shadow-md',
      gold:
        'bg-gold text-ivory hover:bg-gold/90 shadow-md',
      outline:
        'border-2 border-maroon text-maroon hover:bg-maroon hover:text-ivory',
      ghost: 'text-maroon hover:bg-maroon/10',
      overlay:
        'overlay-btn border-2 border-ivory text-ivory hover:bg-maroon-dark hover:border-maroon-dark',
    };
    const sizes = {
      sm: 'px-4 py-2 text-xs tracking-widest',
      md: 'px-8 py-3 text-sm tracking-widest',
      lg: 'px-10 py-4 text-sm tracking-widest',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-body font-medium uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
LuxeButton.displayName = 'LuxeButton';

export default LuxeButton;
