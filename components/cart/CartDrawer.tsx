'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, itemCount, clearCart } = useCart();
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    clearCart();
    setTimeout(() => {
      setStatus('idle');
      setCheckoutMode(false);
      setForm({ name: '', email: '', phone: '', address: '' });
      closeCart();
    }, 3500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-maroon-dark px-6 py-4">
          <div className="flex items-center gap-2 text-ivory">
            <ShoppingBag className="h-5 w-5 text-gold" />
            <h2 className="font-serif-display text-xl font-medium">
              Shopping Cart
            </h2>
            {itemCount > 0 && (
              <span className="ml-1 rounded-full bg-gold px-2 py-0.5 text-xs font-medium text-maroon">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-ivory/80 transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        {status === 'success' ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <CheckCircle className="h-16 w-16 text-gold" />
            <h3 className="mt-4 font-serif-display text-2xl font-medium text-maroon">
              Order Placed!
            </h3>
            <p className="mt-2 text-sm font-light text-muted-foreground">
              Thank you for your order. We&apos;ll contact you shortly to confirm
              payment and delivery details.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-16 w-16 text-gold/40" />
            <h3 className="mt-4 font-serif-display text-xl font-medium text-maroon">
              Your cart is empty
            </h3>
            <p className="mt-2 text-sm font-light text-muted-foreground">
              Browse our collection and add your favorite sarees.
            </p>
            <button
              onClick={closeCart}
              className="mt-6 border-2 border-maroon px-8 py-3 text-xs font-medium uppercase tracking-widest text-maroon transition-all hover:bg-maroon hover:text-ivory"
            >
              Continue Shopping
            </button>
          </div>
        ) : checkoutMode ? (
          /* Checkout Form */
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex items-center gap-2 border-b border-border px-6 py-3">
              <button
                onClick={() => setCheckoutMode(false)}
                className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-maroon"
              >
                &larr; Back to Cart
              </button>
            </div>
            <form onSubmit={handleCheckout} className="flex flex-1 flex-col">
              <div className="flex-1 space-y-4 px-6 py-6">
                <h3 className="font-serif-display text-lg font-medium text-maroon">
                  Checkout Details
                </h3>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border bg-card px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border bg-card px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-border bg-card px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-maroon">
                    Shipping Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={3}
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-border bg-card px-4 py-3 text-sm font-light text-maroon placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                    placeholder="Full shipping address"
                  />
                </div>
                <div className="border border-border bg-card p-4">
                  <div className="flex justify-between text-sm font-light text-muted-foreground">
                    <span>Subtotal</span>
                    <span>&#8377;{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="mt-1 flex justify-between text-sm font-light text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-serif-display text-lg font-medium text-maroon">
                    <span>Total</span>
                    <span>&#8377;{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border px-6 py-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center bg-maroon px-6 py-4 text-xs font-medium uppercase tracking-widest text-ivory transition-colors hover:bg-maroon-dark disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Placing Order...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
                <p className="mt-3 text-center text-xs font-light text-muted-foreground">
                  Cash on delivery available &bull; Free shipping across India
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Cart Items */
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex-1 px-4 py-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="mb-4 flex gap-4 border border-border bg-card p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-28 w-20 shrink-0 object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <h4 className="font-serif-display text-base font-medium leading-tight text-maroon">
                      {item.product.name}
                    </h4>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-maroon">
                      {item.product.category}
                    </p>
                    <p className="mt-1 text-sm font-medium text-maroon">
                      &#8377;{item.product.price.toLocaleString('en-IN')}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-maroon transition-colors hover:bg-maroon hover:text-cream"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm font-medium text-maroon">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-maroon transition-colors hover:bg-maroon hover:text-cream"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border bg-card px-6 py-4">
              <div className="flex justify-between font-serif-display text-lg font-medium text-maroon">
                <span>Subtotal</span>
                <span>&#8377;{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <p className="mt-1 text-xs font-light text-muted-foreground">
                Shipping calculated at checkout &bull; Free shipping across India
              </p>
              <button
                onClick={() => setCheckoutMode(true)}
                className="mt-4 w-full bg-maroon px-6 py-4 text-xs font-medium uppercase tracking-widest text-ivory transition-colors hover:bg-maroon-dark"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
