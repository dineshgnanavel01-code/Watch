import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, RotateCcw, Sparkles } from "lucide-react";
import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

const formatINR = (price) =>
  `₹${Number(price).toLocaleString("en-IN")}`;

const Collection = () => {
  const [category, setCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(500000);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = ["All", ...new Set(watches.map((watch) => watch.category))];
  const brands = ["All", ...new Set(watches.map((watch) => watch.brand))];

  const filteredWatches = useMemo(() => {
    return [...watches]
      .filter((watch) => {
        const matchesCategory =
          category === "All" || watch.category === category;

        const matchesBrand =
          selectedBrand === "All" || watch.brand === selectedBrand;

        const matchesPrice = watch.price <= maxPrice;

        const searchValue = search.toLowerCase().trim();

        const matchesSearch =
          !searchValue ||
          watch.name.toLowerCase().includes(searchValue) ||
          watch.brand.toLowerCase().includes(searchValue) ||
          watch.category.toLowerCase().includes(searchValue);

        return (
          matchesCategory &&
          matchesBrand &&
          matchesPrice &&
          matchesSearch
        );
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "name") return a.name.localeCompare(b.name);

        return Number(b.featured) - Number(a.featured);
      });
  }, [category, selectedBrand, maxPrice, search, sortBy]);

  const clearAllFilters = () => {
    setCategory("All");
    setSelectedBrand("All");
    setMaxPrice(500000);
    setSearch("");
    setSortBy("featured");
  };

  const activeFilters =
    Number(category !== "All") +
    Number(selectedBrand !== "All") +
    Number(maxPrice < 500000);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-lg text-white">Category</h3>

          {category !== "All" && (
            <button
              type="button"
              onClick={() => setCategory("All")}
              className="text-[10px] uppercase tracking-widest text-stone-500 transition hover:text-amber-300"
            >
              Clear
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {categories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`group relative overflow-hidden rounded-lg border px-3 py-3 text-left text-xs transition-all ${
                  active
                    ? "border-amber-400/50 bg-amber-400/10 text-amber-300"
                    : "border-white/5 bg-white/[0.025] text-stone-400 hover:border-white/15 hover:bg-white/5 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-amber-400"
                  />
                )}

                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-lg text-white">Maison</h3>

        <div className="space-y-1">
          {brands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => setSelectedBrand(brand)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition ${
                selectedBrand === brand
                  ? "bg-amber-400/10 text-amber-300"
                  : "text-stone-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="normal-case">{brand}</span>

              {selectedBrand === brand && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h3 className="font-serif text-lg text-white">Price Range</h3>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-600">
              Maximum investment
            </p>
          </div>

          <span className="font-mono text-xs text-amber-300">
            {formatINR(maxPrice)}
          </span>
        </div>

        <input
          aria-label="Maximum price"
          type="range"
          min="1000"
          max="50000"
          step="1000"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          style={{
            background: `linear-gradient(to right, #fbbf24 ${
              ((maxPrice - 1000) / (50000 - 1000)) * 100
            }%, #292524 0%)`,
          }}
          className="h-1 w-full cursor-pointer appearance-none rounded-full accent-amber-400"
        />

        <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-stone-600">
          <span>₹1K</span>
          <span>₹50k</span>
        </div>
      </div>

      {activeFilters > 0 && (
        <button
          type="button"
          onClick={clearAllFilters}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 transition hover:border-amber-400/30 hover:text-amber-300"
        >
          <RotateCcw size={13} />
          Reset Collection
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <section className="relative border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-full text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-4 py-2">
              <Sparkles size={13} className="text-amber-400" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                The LUXE Archive
              </span>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl">
              A Collection of
              <span className="block italic text-amber-300">
                Timeless Icons
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-500 sm:text-base">
              Discover exceptional timepieces selected for those who
              appreciate precision, heritage, and uncompromising elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/[0.07] py-5"
          >
            <div className="text-center">
              <p className="font-serif text-xl text-white sm:text-2xl">
                {watches.length}
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-stone-600">
                Timepieces
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-xl text-white sm:text-2xl">
                {brands.length - 1}
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-stone-600">
                Maisons
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-xl text-white sm:text-2xl">
                100%
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-stone-600">
                Authentic
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search watches, brands..."
              className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] pl-11 pr-10 text-xs text-white outline-none transition placeholder:text-stone-600 focus:border-amber-400/40 focus:bg-white/[0.05]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 transition hover:text-white"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="relative flex h-11 flex-1 items-center justify-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 font-serif text-sm tracking-widest text-[#D4AF37] transition hover:border-[#D4AF37]/30 hover:text-[#e5c158] lg:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilters > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#D4AF37] px-1 font-sans text-[10px] font-bold text-black">
                  {activeFilters}
                </span>
              )}
            </button>

            <div className="relative flex h-11 flex-1 items-center rounded-lg border border-white/[0.08] bg-white/[0.03] sm:flex-none">
              <select
                aria-label="Sort watches"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-full w-full cursor-pointer appearance-none bg-transparent pl-4 pr-9 font-serif text-sm tracking-widest text-[#D4AF37] outline-none sm:w-52"
              >
                <option value="featured" className="bg-[#111] font-serif tracking-widest text-stone-200">
                  Featured
                </option>
                <option value="price-low" className="bg-[#111] font-serif tracking-widest text-stone-200">
                  Price: low to high
                </option>
                <option value="price-high" className="bg-[#111] font-serif tracking-widest text-stone-200">
                  Price: high to low
                </option>
                <option value="name" className="bg-[#111] font-serif tracking-widest text-stone-200">
                  Alphabetical
                </option>
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 text-stone-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
              <div className="mb-7 border-b border-white/[0.07] pb-5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-amber-400">
                  Curate
                </p>
                <h2 className="mt-2 font-serif text-2xl text-white">
                  Refine
                </h2>
              </div>

              <FilterContent />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-7 flex flex-col gap-3 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-lg text-white">
                  Curated Timepieces
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-stone-600">
                  {filteredWatches.length} pieces available
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category !== "All" && (
                  <button
                    type="button"
                    onClick={() => setCategory("All")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-wider text-amber-300"
                  >
                    {category}
                    <X size={10} />
                  </button>
                )}

                {selectedBrand !== "All" && (
                  <button
                    type="button"
                    onClick={() => setSelectedBrand("All")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-wider text-amber-300"
                  >
                    {selectedBrand}
                    <X size={10} />
                  </button>
                )}

                {maxPrice < 500000 && (
                  <button
                    type="button"
                    onClick={() => setMaxPrice(500000)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-wider text-amber-300"
                  >
                    Under {formatINR(maxPrice)}
                    <X size={10} />
                  </button>
                )}
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredWatches.length > 0 ? (
                <motion.div
                  layout
                  className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredWatches.map((watch, index) => (
                    <motion.div
                      layout
                      key={watch.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.04, 0.2),
                      }}
                    >
                      <WatchCard watch={watch} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-24 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/[0.05]">
                    <Search size={20} className="text-amber-400" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-white">
                    No timepiece found
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-stone-600">
                    Try adjusting your search or refining your collection
                    preferences.
                  </p>

                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
                  >
                    <RotateCcw size={13} />
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
              }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-[#0d0d0d] p-5 shadow-2xl sm:p-7"
            >
              <div className="mb-8 flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-amber-400">
                    Collection
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-white">
                    Refine
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filters"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-amber-400/30 hover:text-white"
                >
                  <X size={17} />
                </button>
              </div>

              <FilterContent />

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-10 w-full rounded-lg bg-amber-400 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 active:scale-[0.98]"
              >
                View {filteredWatches.length} Timepieces
              </button>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Collection;