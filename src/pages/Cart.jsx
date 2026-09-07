import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const shipping = cartTotal >= 500 || cartTotal === 0 ? 0 : 25;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-5xl">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-stone-400">
            Discover a timepiece worthy of your collection.
          </p>

          <Link
            to="/collection"
            className="mt-8 inline-flex items-center gap-3 bg-amber-500 px-7 py-4 text-xs uppercase tracking-widest text-black"
          >
            Explore Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-serif text-5xl">
        Shopping Cart
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
        {/* Items */}
        <div className="space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border border-white/10 bg-stone-900 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 object-cover sm:h-36 sm:w-36"
              />

              <div className="flex flex-1 flex-col">
                <p className="text-xs uppercase tracking-widest text-amber-400">
                  {item.brand}
                </p>

                <h2 className="mt-1 font-serif text-xl">
                  {item.name}
                </h2>

                <p className="mt-2 text-lg">
                  ${item.price.toLocaleString()}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-white/10">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="p-2 hover:text-amber-400"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="p-2 hover:text-amber-400"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone-500 transition hover:text-red-400"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit border border-white/10 bg-stone-900 p-7">
          <h2 className="font-serif text-2xl">
            Order Summary
          </h2>

          <div className="mt-7 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-400">
                Subtotal
              </span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-stone-400">
                Shipping
              </span>
              <span>
                {shipping === 0
                  ? "Free"
                  : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-stone-400">
                Tax
              </span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="my-5 h-px bg-white/10" />

            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-8 flex items-center justify-center gap-3 bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-amber-400"
          >
            Proceed to Checkout
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;