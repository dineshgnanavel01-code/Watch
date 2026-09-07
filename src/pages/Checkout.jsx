import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "Card",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <CheckCircle
            size={65}
            className="mx-auto text-amber-400"
          />

          <h1 className="mt-7 font-serif text-5xl">
            Order Confirmed
          </h1>

          <p className="mt-5 leading-7 text-stone-400">
            Thank you for choosing LUXE. Your order has been
            successfully placed.
          </p>

          <Link
            to="/collection"
            className="mt-8 inline-block bg-amber-500 px-7 py-4 text-xs uppercase tracking-widest text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl">
            Your Cart is Empty
          </h1>

          <Link
            to="/collection"
            className="mt-6 inline-block text-amber-400"
          >
            Go to Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-serif text-5xl">
        Checkout
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_350px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
              Full Name
            </label>

            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
              Email
            </label>

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
              Address
            </label>

            <input
              required
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
                City
              </label>

              <input
                required
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
                Postal Code
              </label>

              <input
                required
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-stone-500">
              Payment Method
            </label>

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full border border-white/10 bg-stone-900 px-4 py-4 outline-none focus:border-amber-500"
            >
              <option>Card</option>
              <option>PayPal</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-amber-400"
          >
            Place Order
          </button>
        </form>

     
        <div className="h-fit border border-white/10 bg-stone-900 p-7">
          <h2 className="font-serif text-2xl">
            Your Order
          </h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 text-sm"
              >
                <span className="text-stone-400">
                  {item.name} × {item.quantity}
                </span>

                <span>
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="flex justify-between text-lg">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;