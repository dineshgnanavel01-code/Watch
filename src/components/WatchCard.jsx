import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const WatchCard = ({ watch }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_15px_35px_rgba(245,158,11,0.12)]"
    >
      {/* Ambient background glow on card hover */}
      <div className="absolute -inset-px -z-10 bg-gradient-to-b from-amber-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image Container */}
      <Link to={`/watch/${watch.id}`} className="block overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-stone-950">
          <img
            src={watch.image}
            alt={watch.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Featured Badge */}
          {watch.featured && (
            <span className="absolute right-4 top-4 rounded-md bg-gradient-to-r from-amber-500 to-amber-400 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-black shadow-lg">
              Featured
            </span>
          )}

          {/* Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
        </div>
      </Link>

      {/* Details Container */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400">
            {watch.brand}
          </p>
          <span className="font-serif text-lg font-medium text-white">
            ${watch.price.toLocaleString()}
          </span>
        </div>

        <Link to={`/watch/${watch.id}`} className="mt-2 block">
          <h3 className="font-serif text-xl font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-amber-400">
            {watch.name}
          </h3>
        </Link>

        <p className="mt-2.5 line-clamp-2 text-xs font-light leading-relaxed text-stone-400">
          {watch.description}
        </p>

        {/* Action Button Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          {/* Details Link */}
          <Link
            to={`/watch/${watch.id}`}
            className="group/link flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 transition-colors duration-300 hover:text-white"
          >
            <span>Details</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-amber-400"
            />
          </Link>

          {/* Compact Add to Cart Button */}
          <div className="group/container relative p-[2px] rounded-[0.7em] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] transition-all duration-400 active:scale-95">
            <div className="absolute inset-0 m-auto rounded-[0.7em] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] blur-0 transition-all duration-400 group-hover/container:blur-[0.8em] group-active/container:blur-[0.2em] -z-10" />
            <button
              onClick={() => addToCart(watch)}
              className="group/btn relative flex items-center gap-1.5 rounded-[0.5em] bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[1px_1px_2px_rgba(0,0,0,0.7)] cursor-pointer border-none transition-all"
            >
              <ShoppingBag
                size={12}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover/btn:-rotate-12"
              />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WatchCard;