'use client';

import { Product } from '@/lib/products';
import { X, ShoppingBag, Heart } from 'lucide-react';
import LuxeButton from '@/components/ui/LuxeButton';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-cream/80 text-maroon transition-colors hover:bg-maroon hover:text-cream"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden bg-muted md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              {product.category}
            </p>
            <h2 className="mt-2 font-serif-display text-2xl font-medium text-maroon md:text-3xl">
              {product.name}
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-medium text-maroon">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-base font-light text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="mt-5 h-px w-full bg-border" />

            <p className="mt-5 text-sm font-light leading-relaxed text-foreground/80">
              {product.description}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Fabric:
                </span>
                <span className="text-sm font-light text-maroon">
                  {product.fabric}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Origin:
                </span>
                <span className="text-sm font-light text-maroon">
                  {product.origin}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Colors:
                </span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="border border-border px-3 py-1 text-xs font-light text-maroon"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LuxeButton className="flex-1">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </LuxeButton>
              <LuxeButton variant="outline" className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </LuxeButton>
            </div>

            <p className="mt-4 text-center text-xs font-light text-muted-foreground">
              Free shipping across India • Handwoven with love
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
