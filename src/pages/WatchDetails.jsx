import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Zap, Star, ShieldCheck, Truck, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { watches } from "../data/watches";
import { useCart } from "../context/CartContext";

const WatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const watch = watches.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!watch) return <main className="flex min-h-[70vh] items-center justify-center px-4"><div className="text-center"><h1 className="font-display text-4xl text-white">Watch Not Found</h1><Link to="/collection" className="mt-6 inline-block text-amber-400">Back to Collection</Link></div></main>;

  const gallery = [watch.image, watch.image, watch.image];
  const related = watches.filter((w) => w.id !== watch.id && (w.category === watch.category || w.brand === watch.brand)).slice(0, 3);
  const addQuantity = () => {
    for (let i = 0; i < quantity; i += 1) addToCart(watch);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return <main className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
    <Link to="/collection" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-400 transition hover:text-amber-400"><ArrowLeft size={15} /> Back to Collection</Link>
    <div className="grid min-w-0 gap-9 lg:grid-cols-2 lg:gap-14">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <div className="group relative overflow-hidden border border-white/10 bg-stone-900">
          <motion.img key={activeImage} initial={{ opacity: .4, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .45 }} src={gallery[activeImage]} alt={watch.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
          <span className="absolute left-4 top-4 border border-amber-400/30 bg-black/60 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-amber-400 backdrop-blur">LUXE Certified</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">{gallery.map((image, index) => <button key={`${image}-${index}`} type="button" onClick={() => setActiveImage(index)} aria-label={`View ${index + 1}`} className={`overflow-hidden border transition ${activeImage === index ? "border-amber-400" : "border-white/10 hover:border-white/30"}`}><img src={image} alt={`${watch.name} view ${index + 1}`} className="aspect-square w-full object-cover transition duration-500 hover:scale-105" /></button>)}</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="min-w-0">
        <p className="section-label !text-amber-400">{watch.brand}</p>
        <h1 className="heading-lg mt-5 break-words text-white">{watch.name}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-3"><div className="flex gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" className="text-amber-400" />)}</div><span className="text-xs text-stone-500">{watch.rating} · Collector rated</span></div>
        <div className="mt-7 flex flex-wrap items-end gap-3"><p className="font-display text-3xl text-white sm:text-4xl">${watch.price.toLocaleString()}</p><span className="mb-1 text-[10px] uppercase tracking-widest text-amber-400/80">Complimentary insured delivery</span></div>
        <div className="my-7 h-px bg-white/10" />
        <p className="text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">{watch.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {[["Case Material", watch.case], ["Strap Material", "Premium Leather"], ["Movement", watch.movement], ["Water Resistance", watch.waterResistance], ["Dial Color", "Obsidian Black"], ["Warranty", "2 Years"]].map(([label, value]) => <div key={label} className="min-w-0 bg-stone-950 p-4 sm:p-5"><p className="text-[9px] uppercase tracking-[0.16em] text-stone-500">{label}</p><p className="mt-2 break-words text-xs leading-5 text-white sm:text-sm">{value}</p></div>)}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4"><span className="text-xs uppercase tracking-widest text-stone-500">Quantity</span><div className="flex h-11 items-center border border-white/10"><button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-full px-3 text-stone-400 transition hover:text-amber-400"><Minus size={15} /></button><span className="w-9 text-center text-sm">{quantity}</span><button type="button" onClick={() => setQuantity((q) => q + 1)} className="h-full px-3 text-stone-400 transition hover:text-amber-400"><Plus size={15} /></button></div><span className="text-xs text-stone-600">${(watch.price * quantity).toLocaleString()} total</span></div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2"><button type="button" onClick={addQuantity} className="btn-gold w-full"><ShoppingBag size={16} className="mr-3" /> {added ? "Added to Cart" : "Add to Cart"} {added && <Check size={15} className="ml-2" />}</button><button type="button" onClick={() => { addQuantity(); navigate("/checkout"); }} className="btn-outline w-full !border-white/20 !text-white hover:!border-amber-400 hover:!bg-amber-400 hover:!text-black"><Zap size={16} className="mr-3" /> Buy Now</button></div>

        <div className="mt-7 grid grid-cols-3 gap-2 border-y border-white/10 py-5 sm:gap-3">{[[ShieldCheck, "Authentic"], [Truck, "Insured"], [Zap, "Fast Dispatch"]].map(([Icon, text]) => <div key={text} className="text-center"><Icon size={18} className="mx-auto text-amber-400" /><p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-stone-500 sm:text-[9px]">{text}</p></div>)}</div>
      </motion.div>
    </div>

    <section className="mt-20 border-t border-white/10 pt-16 sm:mt-28 sm:pt-20"><div className="text-center"><p className="section-label">Collector Reviews</p><h2 className="heading-md mt-5 text-white">A timepiece worth talking about.</h2></div><div className="mx-auto mt-9 max-w-3xl border border-white/10 bg-stone-900 p-7 text-center sm:p-12"><div className="flex justify-center gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={15} fill="currentColor" className="text-amber-400" />)}</div><p className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">“A beautifully considered piece with the presence and precision you expect from a serious luxury watch.”</p><p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-stone-500">Verified Collector · Private Client</p></div></section>
    {related.length > 0 && <section className="mt-20 sm:mt-28"><div className="mb-8 sm:mb-10"><p className="section-label">You May Also Like</p><h2 className="heading-md mt-5 text-white">Related Timepieces</h2></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <Link to={`/watch/${item.id}`} key={item.id} className="group border border-white/10 bg-stone-900 p-3.5 sm:p-4"><div className="overflow-hidden"><img src={item.image} alt={item.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="mt-4 text-[9px] uppercase tracking-widest text-amber-400">{item.brand}</p><h3 className="mt-2 font-display text-xl text-white group-hover:text-amber-400 sm:text-2xl">{item.name}</h3><p className="mt-2 text-sm text-stone-400">${item.price.toLocaleString()}</p></Link>)}</div></section>}
  </main>;
};
export default WatchDetails;
