import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { watches } from "../data/watches";
import { useCart } from "../context/CartContext";

const WatchDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const watch = watches.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!watch) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl">
            Watch Not Found
          </h1>

          <Link
            to="/collection"
            className="mt-6 inline-block text-amber-400"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(watch);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        to="/collection"
        className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-amber-400"
      >
        <ArrowLeft size={15} />
        Back to Collection
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="bg-stone-900">
          <img
            src={watch.image}
            alt={watch.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            {watch.brand}
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            {watch.name}
          </h1>

          <p className="mt-6 text-3xl">
            ${watch.price.toLocaleString()}
          </p>

          <div className="my-8 h-px bg-white/10" />

          <p className="leading-8 text-stone-400">
            {watch.description}
          </p>

          {/* Specifications */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Movement
              </p>
              <p className="mt-2 text-sm">
                {watch.movement || "Automatic"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Case
              </p>
              <p className="mt-2 text-sm">
                {watch.case || "Stainless Steel"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Water Resistance
              </p>
              <p className="mt-2 text-sm">
                {watch.waterResistance || "100m"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Warranty
              </p>
              <p className="mt-2 text-sm">
                2 Years
              </p>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-stone-500">
              Quantity
            </span>

            <div className="flex items-center border border-white/10">
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                className="p-3 hover:text-amber-400"
              >
                <Minus size={15} />
              </button>

              <span className="w-10 text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3 hover:text-amber-400"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 flex items-center justify-center gap-3 bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-amber-400"
          >
            <ShoppingBag size={17} />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default WatchDetails;