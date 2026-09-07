import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Search, X } from "lucide-react";
import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

const Collection = () => {
  const [category, setCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Extract unique brands and categories dynamically
  const categories = ["All", ...new Set(watches.map((watch) => watch.category))];
  const brands = ["All", ...new Set(watches.map((watch) => watch.brand))];

  // Filter and Sort Logic
  const filteredWatches = useMemo(() => {
    return watches
      .filter((watch) => {
        const matchesCategory = category === "All" || watch.category === category;
        const matchesBrand = selectedBrand === "All" || watch.brand === selectedBrand;
        const matchesPrice = watch.price <= maxPrice;
        const matchesSearch =
          watch.name.toLowerCase().includes(search.toLowerCase()) ||
          watch.brand.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0; // 'featured' default
      });
  }, [category, selectedBrand, maxPrice, search, sortBy]);

  const clearAllFilters = () => {
    setCategory("All");
    setSelectedBrand("All");
    setMaxPrice(50000);
    setSearch("");
    setSortBy("featured");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-amber-400 font-medium">
          Curated Masterpieces
        </span>
        <h1 className="mt-3 font-serif text-4xl sm:text-6xl tracking-wide text-white">
          The Grand Collection
        </h1>
        <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
          Explore our exclusive vault of precision timepieces, embodying heritage craftsmanship, legendary complications, and timeless sophistication.
        </p>
      </motion.div>

      {/* Control Bar: Search, Sort & Mobile Filter Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
          <input
            type="text"
            placeholder="Search by model or brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-stone-900/80 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-stone-500 rounded-lg outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
          />
          {search && (
            <button 
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-white/10 bg-stone-900 px-4 py-3 rounded-lg text-xs tracking-widest uppercase text-stone-300 hover:border-amber-400 hover:text-amber-400 transition lg:hidden"
          >
            <SlidersHorizontal size={16} />
            <span>Filters</span>
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-stone-900 border border-white/10 text-stone-300 px-4 py-3 rounded-lg text-xs tracking-wider uppercase outline-none transition focus:border-amber-400 cursor-pointer"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block bg-stone-900/60 border border-white/10 p-6 rounded-2xl space-y-8 sticky top-28 backdrop-blur-md">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Filter Vault
            </h3>
            <button 
              onClick={clearAllFilters}
              className="text-[11px] text-stone-500 hover:text-amber-400 uppercase tracking-wider transition"
            >
              Reset All
            </button>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-serif text-white mb-3 tracking-wide">Category</h4>
            <div className="flex flex-col gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`text-left text-xs uppercase tracking-wider px-3 py-2 rounded-lg transition ${
                    category === item
                      ? "bg-amber-400/10 text-amber-400 font-medium border-l-2 border-amber-400"
                      : "text-stone-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-serif text-white mb-3 tracking-wide">Brand</h4>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`text-left text-xs uppercase tracking-wider px-3 py-2 rounded-lg transition ${
                    selectedBrand === brand
                      ? "bg-amber-400/10 text-amber-400 font-medium border-l-2 border-amber-400"
                      : "text-stone-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-serif text-white tracking-wide">Max Price</h4>
              <span className="text-xs font-mono text-amber-400">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-amber-400 bg-stone-800 cursor-pointer h-1.5 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-stone-500 mt-2">
              <span>$1,000</span>
              <span>$50,000+</span>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="lg:col-span-3">
          {/* Active filter summary tag bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-stone-500">Showing {filteredWatches.length} timepieces</span>
            {category !== "All" && (
              <span className="inline-flex items-center gap-1 bg-stone-900 border border-white/10 px-3 py-1 rounded-full text-xs text-amber-400">
                Category: {category} <X size={12} className="cursor-pointer" onClick={() => setCategory("All")} />
              </span>
            )}
            {selectedBrand !== "All" && (
              <span className="inline-flex items-center gap-1 bg-stone-900 border border-white/10 px-3 py-1 rounded-full text-xs text-amber-400">
                Brand: {selectedBrand} <X size={12} className="cursor-pointer" onClick={() => setSelectedBrand("All")} />
              </span>
            )}
          </div>

          {filteredWatches.length > 0 ? (
            <motion.div 
              layout
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredWatches.map((watch) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  key={watch.id}
                >
                  <WatchCard watch={watch} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="py-24 text-center bg-stone-900/30 border border-white/5 rounded-2xl">
              <p className="text-stone-400 font-serif text-lg">No timepieces match your precise specifications.</p>
              <button
                onClick={clearAllFilters}
                className="mt-4 px-6 py-2.5 bg-amber-400 text-black text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-amber-300 transition"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer Modal */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-xs bg-stone-950 border-l border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto z-10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-amber-400 font-semibold">
                    Filters
                  </h3>
                  <button 
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-stone-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-3">Category</h4>
                  <div className="flex flex-col gap-2">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => { setCategory(item); setMobileFiltersOpen(false); }}
                        className={`text-left text-xs uppercase tracking-wider px-3 py-2 rounded-lg transition ${
                          category === item ? "bg-amber-400 text-black font-semibold" : "text-stone-300 bg-stone-900"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-3">Brand</h4>
                  <div className="flex flex-col gap-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => { setSelectedBrand(brand); setMobileFiltersOpen(false); }}
                        className={`text-left text-xs uppercase tracking-wider px-3 py-2 rounded-lg transition ${
                          selectedBrand === brand ? "bg-amber-400 text-black font-semibold" : "text-stone-300 bg-stone-900"
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs uppercase tracking-wider text-stone-400">Max Price</h4>
                    <span className="text-xs font-mono text-amber-400">${maxPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-stone-800"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex gap-4">
                <button
                  onClick={clearAllFilters}
                  className="w-1/2 border border-white/20 py-3 text-xs uppercase tracking-widest text-stone-300 rounded-lg hover:border-amber-400 transition"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-1/2 bg-amber-400 text-black py-3 text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-amber-300 transition"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Collection;