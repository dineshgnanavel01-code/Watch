import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Search, X, ArrowUpDown, RotateCcw } from "lucide-react";
import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

const Collection = () => {
  const [category, setCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const categories = ["All", ...new Set(watches.map((w) => w.category))];
  const brands = ["All", ...new Set(watches.map((w) => w.brand))];

  const filteredWatches = useMemo(() => [...watches]
    .filter((watch) =>
      (category === "All" || watch.category === category) &&
      (selectedBrand === "All" || watch.brand === selectedBrand) &&
      watch.price <= maxPrice &&
      (watch.name.toLowerCase().includes(search.toLowerCase()) || watch.brand.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => sortBy === "price-low" ? a.price - b.price : sortBy === "price-high" ? b.price - a.price : sortBy === "name" ? a.name.localeCompare(b.name) : Number(b.featured) - Number(a.featured)),
    [category, selectedBrand, maxPrice, search, sortBy]
  );

  const clearAllFilters = () => { setCategory("All"); setSelectedBrand("All"); setMaxPrice(50000); setSearch(""); setSortBy("featured"); };
  const FilterPanel = () => <div className="space-y-7"><div className="flex items-center justify-between border-b border-white/10 pb-4"><h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Filter Vault</h3><button type="button" onClick={clearAllFilters} className="text-[10px] uppercase tracking-widest text-stone-500 transition hover:text-amber-400">Reset All</button></div><div><h4 className="mb-3 font-display text-lg text-white">Category</h4><div className="flex flex-wrap gap-2 lg:flex-col">{categories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={`rounded-sm px-3 py-2 text-left text-xs uppercase tracking-wider transition ${category === item ? "bg-amber-400/10 text-amber-400" : "text-stone-400 hover:bg-white/5 hover:text-white"}`}>{item}</button>)}</div></div><div><h4 className="mb-3 font-display text-lg text-white">Brand</h4><div className="flex flex-wrap gap-2 lg:flex-col">{brands.map((brand) => <button type="button" key={brand} onClick={() => setSelectedBrand(brand)} className={`rounded-sm px-3 py-2 text-left text-xs uppercase tracking-wider transition ${selectedBrand === brand ? "bg-amber-400/10 text-amber-400" : "text-stone-400 hover:bg-white/5 hover:text-white"}`}>{brand}</button>)}</div></div><div><div className="mb-2 flex justify-between"><h4 className="font-display text-lg text-white">Max Price</h4><span className="text-xs text-amber-400">${maxPrice.toLocaleString()}</span></div><input aria-label="Maximum price" type="range" min="1000" max="50000" step="1000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-amber-400" /></div></div>;

  return <main className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"><p className="section-label">Curated Masterpieces</p><h1 className="heading-lg mt-5 text-white">The Grand Collection</h1><p className="mt-5 text-sm leading-7 text-stone-400 sm:text-base">Explore an exclusive vault of precision timepieces, embodying heritage craftsmanship, legendary complications, and timeless sophistication.</p></motion.div>

    <div className="mb-7 flex flex-col gap-3 border-b border-white/10 pb-5 sm:mb-10 sm:gap-4 sm:pb-6 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by model or brand..." className="h-12 w-full border border-white/10 bg-stone-900 px-11 pr-10 text-sm text-white outline-none transition focus:border-amber-400" />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white"><X size={16}/></button>}</div>
      <div className="flex w-full gap-2 sm:gap-3 md:w-auto"><button type="button" onClick={() => setMobileFiltersOpen(true)} className="flex min-h-12 flex-1 items-center justify-center gap-2 border border-white/10 bg-stone-900 px-4 text-xs uppercase tracking-widest text-stone-300 transition hover:border-amber-400/30 hover:text-amber-400 lg:hidden"><SlidersHorizontal size={16}/> Filters</button><label className="flex min-h-12 flex-1 items-center border border-white/10 bg-stone-900 px-3 sm:flex-none"><ArrowUpDown size={14} className="mr-2 shrink-0 text-amber-400"/><select aria-label="Sort watches" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-transparent py-3 text-xs uppercase tracking-wider text-stone-300 outline-none sm:w-auto"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="name">Alphabetical</option></select></label></div>
    </div>

    <div className="grid min-w-0 items-start gap-8 lg:grid-cols-4"><aside className="sticky top-28 hidden min-w-0 border border-white/10 bg-stone-900/70 p-6 backdrop-blur lg:block"><FilterPanel /></aside><div className="min-w-0 lg:col-span-3"><div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-stone-500"><span>Showing {filteredWatches.length} timepieces</span>{category !== "All" && <button type="button" onClick={() => setCategory("All")} className="inline-flex items-center gap-1 border border-amber-400/20 px-3 py-1 text-amber-400">{category}<X size={11}/></button>}{selectedBrand !== "All" && <button type="button" onClick={() => setSelectedBrand("All")} className="inline-flex items-center gap-1 border border-amber-400/20 px-3 py-1 text-amber-400">{selectedBrand}<X size={11}/></button>}{maxPrice < 50000 && <button type="button" onClick={() => setMaxPrice(50000)} className="inline-flex items-center gap-1 border border-amber-400/20 px-3 py-1 text-amber-400">Under ${maxPrice.toLocaleString()}<X size={11}/></button>}</div>{filteredWatches.length ? <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredWatches.map((watch) => <motion.div layout key={watch.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}><WatchCard watch={watch}/></motion.div>)}</motion.div> : <div className="border border-white/10 bg-stone-900 px-5 py-20 text-center"><p className="font-display text-xl text-stone-300">No timepieces match your specifications.</p><button type="button" onClick={clearAllFilters} className="btn-gold mt-5"><RotateCcw size={14} className="mr-2"/> Clear Filters</button></div>}</div></div>

    <AnimatePresence>{mobileFiltersOpen && <div className="fixed inset-0 z-[70] lg:hidden"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileFiltersOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"/><motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 280, damping: 30 }} className="absolute right-0 h-full w-[92%] max-w-sm overflow-y-auto border-l border-white/10 bg-stone-950 p-5 sm:p-6"><div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs uppercase tracking-[0.25em] text-amber-400">Filters</span><button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-stone-400 hover:text-white"><X /></button></div><FilterPanel/><button type="button" onClick={() => setMobileFiltersOpen(false)} className="mt-8 w-full bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black">View {filteredWatches.length} Watches</button></motion.aside></div>}</AnimatePresence>
  </main>;
};
export default Collection;
