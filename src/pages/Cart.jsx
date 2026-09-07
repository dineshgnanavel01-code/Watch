import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  const shipping = cartTotal === 0 || cartTotal >= 500 ? 0 : 25;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[72vh] items-center justify-center px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl border border-white/10 bg-stone-900/80 p-8 text-center shadow-2xl sm:p-14"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
            <ShoppingBag size={26} strokeWidth={1.4} />
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-amber-400">Your Collection Awaits</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Your Cart is Empty</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-400">
            Discover a timepiece worthy of your collection, crafted for moments that last.
          </p>
          <Link to="/collection" className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-amber-500 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-amber-400 sm:px-8">
            Explore Collection <ArrowRight size={16} />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 sm:mb-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-amber-400">Private Selection</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl">Shopping Cart</h1>
        <p className="mt-3 text-sm text-stone-400">{cart.length} {cart.length === 1 ? "timepiece" : "timepieces"} selected.</p>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        <div className="min-w-0 space-y-4">
          {cart.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="flex min-w-0 gap-3 border border-white/10 bg-stone-900 p-3 transition hover:border-amber-400/30 sm:gap-5 sm:p-4"
            >
              <Link to={`/watch/${item.id}`} className="h-24 w-24 shrink-0 overflow-hidden bg-stone-800 sm:h-36 sm:w-36">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col py-0.5">
                <p className="truncate text-[9px] uppercase tracking-[0.25em] text-amber-400">{item.brand}</p>
                <Link to={`/watch/${item.id}`} className="mt-1 line-clamp-2 font-serif text-base leading-tight hover:text-amber-400 sm:text-xl">{item.name}</Link>
                <p className="mt-2 text-sm sm:text-lg">${item.price.toLocaleString()}</p>

                <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                  <div className="flex h-9 items-center border border-white/10 bg-black/20">
                    <button aria-label={`Decrease ${item.name}`} onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-full px-2.5 text-stone-400 transition hover:text-amber-400 sm:px-3"><Minus size={13} /></button>
                    <span className="w-7 text-center text-xs">{item.quantity}</span>
                    <button aria-label={`Increase ${item.name}`} onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-full px-2.5 text-stone-400 transition hover:text-amber-400 sm:px-3"><Plus size={13} /></button>
                  </div>
                  <button aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)} className="rounded-lg p-2 text-stone-500 transition hover:bg-red-400/10 hover:text-red-400"><Trash2 size={17} /></button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="h-fit border border-white/10 bg-stone-900 p-5 sm:p-7 lg:sticky lg:top-28">
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400">Order Summary</p>
          <h2 className="mt-2 font-serif text-2xl">Your Selection</h2>

          <div className="mt-7 space-y-4 text-sm">
            <div className="flex justify-between gap-4"><span className="text-stone-400">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-stone-400">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between gap-4"><span className="text-stone-400">Tax</span><span>${tax.toFixed(2)}</span></div>
            <div className="my-5 h-px bg-white/10" />
            <div className="flex justify-between gap-4 text-lg"><span>Total</span><span className="text-amber-400">${total.toFixed(2)}</span></div>
          </div>

          <Link to="/checkout" className="mt-7 flex min-h-12 items-center justify-center gap-3 bg-amber-500 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:-translate-y-1 hover:bg-amber-400">
            Proceed to Checkout <ArrowRight size={16} />
          </Link>
          <Link to="/collection" className="mt-3 flex min-h-11 items-center justify-center border border-white/10 text-xs uppercase tracking-[0.14em] text-stone-400 transition hover:border-amber-400/40 hover:text-white">Continue Shopping</Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
