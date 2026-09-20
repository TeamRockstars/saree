'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories, Category, Product } from '@/lib/products';
import { Section } from '@/components/ui/Section';
import ProductCard from '@/components/product/ProductCard';
import ProductModal from '@/components/product/ProductModal';
import { cn } from '@/lib/utils';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as Category | null;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>(
    initialCategory || 'All'
  );
  const [sortBy, setSortBy] = useState<'featured' | 'low' | 'high'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.colors.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (sortBy === 'low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
            alt="Silk sarees display"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-maroon/50" />
        </div>
        <div className="relative z-10 px-4 text-center text-cream">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Collection
          </p>
          <h1 className="font-serif-display text-4xl font-medium md:text-6xl">
            Shop Sarees
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-cream/80">
            Explore our handwoven silk sarees, each one a masterpiece of Indian
            craftsmanship.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        {/* Search & Controls */}
        <div className="mb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search sarees, fabric, origin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-border bg-card py-3 pl-12 pr-4 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as 'featured' | 'low' | 'high')
                }
                className="border border-border bg-card px-4 py-3 text-sm font-light text-maroon focus:border-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveCategory('All')}
              className={cn(
                'border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-200',
                activeCategory === 'All'
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-maroon hover:border-primary'
              )}
            >
              All Sarees
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-200',
                  activeCategory === cat
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-maroon hover:border-primary'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-light text-muted-foreground">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'saree' : 'sarees'} found
          </p>
          {(searchQuery || activeCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-maroon hover:text-gold"
            >
              <X className="h-3 w-3" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif-display text-2xl font-medium text-maroon">
              No sarees found
            </p>
            <p className="mt-2 text-sm font-light text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </Section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-cream pt-20">
          <p className="text-sm font-light text-muted-foreground">
            Loading...
          </p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
