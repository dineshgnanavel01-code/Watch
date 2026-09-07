
import { Link, useSearchParams } from "react-router-dom";
import {Minus, Plus,Trash2,ArrowRight,ArrowLeft,ShoppingBag,ShieldCheck,CreditCard,Smartphone,Banknote,Check,} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const paymentMethods = [
  {
    id: "card",
    name: "Credit / Debit Card",
    description: "Visa, Mastercard, Amex",
    icon: CreditCard,
  },
  {
    id: "upi",
    name: "UPI",
    description: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: Banknote,
  },
];

const formatINR = (amount) =>
  `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const Cart = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  const [searchParams] = useSearchParams();
  const initialPayment = searchParams.get("payment");

  const [paymentMethod, setPaymentMethod] = useState(
    paymentMethods.some((method) => method.id === initialPayment)
      ? initialPayment
      : "card"
  );

  const shipping =
    cartTotal === 0 || cartTotal >= 500 ? 0 : 25;

  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[72vh] w-full items-center justify-center px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-xl border border-white/10 bg-stone-900/80 p-8 text-center shadow-2xl sm:p-14"
        >
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400"
          >
            <ShoppingBag size={26} strokeWidth={1.4} />
          </motion.div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-amber-400">
            Your Collection Awaits
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Your Cart is Empty
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-400">
            Discover a timepiece worthy of your collection,
            crafted for moments that last.
          </p>

          <Link
            to="/collection"
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-amber-500 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_12px_35px_rgba(245,158,11,.18)] sm:px-8"
          >
            Explore Collection

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 sm:mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-amber-400">
          Private Selection
        </p>

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl">
          Shopping Cart
        </h1>

        <p className="mt-3 text-sm text-stone-400">
          {cart.length}{" "}
          {cart.length === 1 ? "timepiece" : "timepieces"} selected.
        </p>
      </motion.div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-12">
        {/* Cart Items */}
        <div className="min-w-0 space-y-4">
          {cart.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
              }}
              whileHover={{ y: -3 }}
              className="flex min-w-0 gap-3 border border-white/10 bg-stone-900 p-3 transition duration-300 hover:border-amber-400/30 hover:shadow-[0_15px_45px_rgba(0,0,0,.2)] sm:gap-5 sm:p-4"
            >
              <Link
                to={`/watch/${item.id}`}
                className="h-24 w-24 shrink-0 overflow-hidden bg-stone-800 sm:h-36 sm:w-36"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col py-0.5">
                <p className="truncate text-[9px] uppercase tracking-[0.25em] text-amber-400">
                  {item.brand}
                </p>

                <Link
                  to={`/watch/${item.id}`}
                  className="mt-1 line-clamp-2 font-serif text-base leading-tight transition hover:text-amber-400 sm:text-xl"
                >
                  {item.name}
                </Link>

                {/* Indian Rupee Price */}
                <p className="mt-2 text-sm sm:text-lg">
                  {formatINR(item.price)}
                </p>

                <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                  {/* Quantity */}
                  <div className="flex h-9 items-center border border-white/10 bg-black/20">
                    <button
                      aria-label={`Decrease ${item.name}`}
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="h-full px-2.5 text-stone-400 transition hover:bg-amber-400/10 hover:text-amber-400 sm:px-3"
                    >
                      <Minus size={13} />
                    </button>

                    <span className="w-7 text-center text-xs">
                      {item.quantity}
                    </span>

                    <button
                      aria-label={`Increase ${item.name}`}
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="h-full px-2.5 text-stone-400 transition hover:bg-amber-400/10 hover:text-amber-400 sm:px-3"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg p-2 text-stone-500 transition hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Order Summary */}
        <motion.aside
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="h-fit border border-white/10 bg-stone-900 p-5 shadow-xl sm:p-7 lg:sticky lg:top-28"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400">
            Order Summary
          </p>

          <h2 className="mt-2 font-serif text-2xl">
            Your Selection
          </h2>

          <div className="mt-7 space-y-4 text-sm">
            {/* Subtotal */}
            <div className="flex justify-between gap-4">
              <span className="text-stone-400">
                Subtotal
              </span>

              <span>
                {formatINR(cartTotal)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between gap-4">
              <span className="text-stone-400">
                Shipping
              </span>

              <span>
                {shipping === 0
                  ? "Free"
                  : formatINR(shipping)}
              </span>
            </div>

            {/* Tax */}
            <div className="flex justify-between gap-4">
              <span className="text-stone-400">
                Tax
              </span>

              <span>
                {formatINR(tax)}
              </span>
            </div>

            <div className="my-5 h-px bg-white/10" />

            {/* Total */}
            <div className="flex justify-between gap-4 text-lg">
              <span>Total</span>

              <span className="text-amber-400">
                {formatINR(total)}
              </span>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-8 border-t border-white/10 pt-7">
            <div className="flex items-center gap-2">
              <CreditCard
                size={17}
                className="text-amber-400"
              />

              <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                Payment Details
              </h3>
            </div>

            <p className="mt-2 text-xs leading-5 text-stone-500">
              Choose your preferred payment method before
              continuing.
            </p>

            <div className="mt-5 space-y-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const selected = paymentMethod === method.id;

                return (
                  <motion.button
                    key={method.id}
                    type="button"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setPaymentMethod(method.id)
                    }
                    className={`flex w-full items-center gap-3 border p-3 text-left transition duration-300 ${
                      selected
                        ? "border-amber-400/60 bg-amber-400/10 shadow-[0_0_25px_rgba(245,158,11,.06)]"
                        : "border-white/10 bg-black/10 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                        selected
                          ? "border-amber-400/50 text-amber-400"
                          : "border-white/10 text-stone-500"
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-medium ${
                          selected
                            ? "text-amber-400"
                            : "text-white"
                        }`}
                      >
                        {method.name}
                      </p>

                      <p className="mt-1 text-[10px] text-stone-500">
                        {method.description}
                      </p>
                    </div>

                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        selected
                          ? "border-amber-400 bg-amber-400 text-black"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Secure Checkout */}
          <div className="mt-6 flex items-start gap-3 border border-emerald-400/10 bg-emerald-400/5 p-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-emerald-400"
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
                Secure Checkout
              </p>

              <p className="mt-1 text-[10px] leading-5 text-stone-500">
                Payment details are handled securely during
                checkout.
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <Link
            to={`/checkout?payment=${paymentMethod}`}
            className="group relative mt-7 flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden bg-amber-500 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_16px_40px_rgba(245,158,11,.2)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
              <ShoppingBag size={15} />
            </span>

            <span className="relative">
              Secure Checkout
            </span>

            <ArrowRight
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <div className="mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-stone-500">
            <ShieldCheck
              size={13}
              className="text-amber-400"
            />
            Secure & insured purchase
          </div>

          {/* Continue Shopping */}
          <Link
            to="/collection"
            className="group mt-4 flex min-h-11 items-center justify-center gap-2 border border-white/10 text-xs uppercase tracking-[0.14em] text-stone-400 transition hover:border-amber-400/40 hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />

            Continue Shopping
          </Link>

          <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-stone-600">
            Payment:{" "}
            {
              paymentMethods.find(
                (method) => method.id === paymentMethod
              )?.name
            }
          </p>
        </motion.aside>
      </div>
    </main>
  );
};

export default Cart;
