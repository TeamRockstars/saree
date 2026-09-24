'use client';

import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  className?: string;
}

export default function ProductCard({ product, onClick, className }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className={cn(
        'group cursor-pointer bg-card',
        className
      )}
    >
      {/* Image */}
      <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-maroon">
            Bestseller
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute right-3 top-3 bg-sale px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-ivory">
            Sale
          </span>
        )}
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-5 border border-ivory/50 px-6 py-2 text-xs font-medium uppercase tracking-widest text-ivory backdrop-blur-sm">
            Quick View
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="px-1 py-4 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-maroon">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-serif-display text-lg font-medium text-maroon transition-colors group-hover:text-maroon-dark">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-base font-medium text-maroon">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-sm font-light text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
