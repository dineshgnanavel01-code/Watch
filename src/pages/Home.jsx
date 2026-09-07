import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";

import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

const Home = () => {
  const featuredWatches = watches
    .filter((watch) => watch.featured)
    .slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury watch"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
              Timeless Elegance
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">
              Time,
              <br />
              <span className="italic text-amber-400">
                perfected.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-stone-300 sm:text-lg">
              Discover exceptional timepieces crafted for those
              who appreciate precision, heritage, and timeless
              design.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/collection"
                className="flex items-center gap-3 bg-amber-500 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-amber-400"
              >
                Explore Collection
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/collection"
                className="border border-white/30 px-7 py-4 text-xs uppercase tracking-widest transition hover:border-amber-400 hover:text-amber-400"
              >
                View Watches
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-white/10 bg-stone-900">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          <div className="bg-stone-900 p-8 text-center">
            <ShieldCheck className="mx-auto mb-4 text-amber-400" />
            <h3 className="font-serif text-lg">
              Authenticity Guaranteed
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Every timepiece is carefully authenticated.
            </p>
          </div>

          <div className="bg-stone-900 p-8 text-center">
            <Truck className="mx-auto mb-4 text-amber-400" />
            <h3 className="font-serif text-lg">
              Insured Worldwide
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Secure delivery wherever you are.
            </p>
          </div>

          <div className="bg-stone-900 p-8 text-center">
            <Sparkles className="mx-auto mb-4 text-amber-400" />
            <h3 className="font-serif text-lg">
              Lifetime Care
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Expert service for your treasured watch.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Curated Selection
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Featured Timepieces
            </h2>
          </div>

          <Link
            to="/collection"
            className="hidden items-center gap-2 text-xs uppercase tracking-widest text-stone-400 transition hover:text-amber-400 sm:flex"
          >
            View All
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWatches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-stone-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury timepiece"
              className="h-550px w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              The Luxe Philosophy
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              More than a watch.
              <br />
              <span className="italic text-amber-400">
                A legacy.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-stone-400">
              At LUXE, we believe a watch is more than an
              instrument for measuring time. It is an expression
              of character, craftsmanship, and individuality.
            </p>

            <p className="mt-5 leading-8 text-stone-400">
              Our collection brings together exceptional
              timepieces chosen for their design, precision, and
              enduring value.
            </p>

            <Link
              to="/collection"
              className="mt-8 inline-flex items-center gap-3 border-b border-amber-500 pb-2 text-xs uppercase tracking-widest text-amber-400"
            >
              Discover Our Collection
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;