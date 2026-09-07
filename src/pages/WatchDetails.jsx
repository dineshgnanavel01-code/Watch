import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Zap, Star, ShieldCheck, Truck } from "lucide-react";
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

  if (!watch) return <div className="flex min-h-[70vh] items-center justify-center text-center"><div><h1 className="font-display text-4xl text-white">Watch Not Found</h1><Link to="/collection" className="mt-6 inline-block text-amber-400">Back to Collection</Link></div></div>;

  const gallery = [watch.image, watch.image, watch.image];
  const related = watches.filter((w) => w.id !== watch.id && (w.category === watch.category || w.brand === watch.brand)).slice(0, 3);
  const addQuantity = () => { for (let i = 0; i < quantity; i += 1) addToCart(watch); };

  return <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
    <Link to="/collection" className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 transition hover:text-amber-400"><ArrowLeft size={15} /> Back to Collection</Link>
    <div className="grid gap-12 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden border border-white/10 bg-stone-900"><motion.img key={activeImage} initial={{ opacity: 0.5, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }} src={gallery[activeImage]} alt={watch.name} className="aspect-square w-full object-cover" /></div>
        <div className="mt-4 grid grid-cols-3 gap-3">{gallery.map((image, index) => <button key={`${image}-${index}`} onClick={() => setActiveImage(index)} className={`overflow-hidden border ${activeImage === index ? "border-amber-400" : "border-white/10"}`}><img src={image} alt={`${watch.name} view ${index + 1}`} className="aspect-square w-full object-cover transition duration-500 hover:scale-105" /></button>)}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
        <p className="section-label !text-amber-400">{watch.brand}</p><h1 className="heading-lg mt-5 text-white">{watch.name}</h1>
        <div className="mt-5 flex items-center gap-3"><div className="flex gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" className="text-amber-400" />)}</div><span className="text-xs text-stone-500">{watch.rating} · Collector rated</span></div>
        <div className="mt-7 flex items-end gap-4"><p className="font-display text-4xl text-white">${watch.price.toLocaleString()}</p><span className="mb-1 text-xs uppercase tracking-widest text-stone-500">Complimentary insured delivery</span></div>
        <div className="my-8 h-px bg-white/10" /><p className="leading-8 text-stone-400">{watch.description}</p>
        <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{[["Case Material", watch.case], ["Strap Material", "Premium Leather"], ["Movement", watch.movement], ["Water Resistance", watch.waterResistance], ["Dial Color", "Obsidian Black"], ["Warranty", "2 Years"]].map(([label, value]) => <div key={label} className="bg-stone-950 p-5"><p className="text-[10px] uppercase tracking-widest text-stone-500">{label}</p><p className="mt-2 text-sm text-white">{value}</p></div>)}</div>
        <div className="mt-8 flex items-center gap-5"><span className="text-xs uppercase tracking-widest text-stone-500">Quantity</span><div className="flex items-center border border-white/10"><button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 hover:text-amber-400"><Minus size={15} /></button><span className="w-10 text-center">{quantity}</span><button onClick={() => setQuantity((q) => q + 1)} className="p-3 hover:text-amber-400"><Plus size={15} /></button></div></div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2"><button onClick={addQuantity} className="btn-gold"><ShoppingBag size={16} className="mr-3" /> Add to Cart</button><button onClick={() => { addQuantity(); navigate("/checkout"); }} className="btn-outline !border-white/20 !text-white hover:!border-amber-400 hover:!bg-amber-400 hover:!text-black"><Zap size={16} className="mr-3" /> Buy Now</button></div>
        <div className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5">{[[ShieldCheck, "Authentic"], [Truck, "Insured"], [Zap, "Fast Dispatch"]].map(([Icon, text]) => <div key={text} className="text-center"><Icon size={18} className="mx-auto text-amber-400" /><p className="mt-2 text-[9px] uppercase tracking-widest text-stone-500">{text}</p></div>)}</div>
      </motion.div>
    </div>
    <section className="mt-28 border-t border-white/10 pt-20"><div className="text-center"><p className="section-label">Collector Reviews</p><h2 className="heading-md mt-5 text-white">A timepiece worth talking about.</h2></div><div className="mx-auto mt-10 max-w-3xl border border-white/10 bg-stone-900 p-8 text-center sm:p-12"><div className="flex justify-center gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={15} fill="currentColor" className="text-amber-400" />)}</div><p className="mt-6 font-display text-2xl leading-relaxed text-white">“A beautifully considered piece with the presence and precision you expect from a serious luxury watch.”</p><p className="mt-6 text-xs uppercase tracking-widest text-stone-500">Verified Collector · Private Client</p></div></section>
    {related.length > 0 && <section className="mt-28"><div className="mb-10"><p className="section-label">You May Also Like</p><h2 className="heading-md mt-5 text-white">Related Timepieces</h2></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <Link to={`/watch/${item.id}`} key={item.id} className="group border border-white/10 bg-stone-900 p-4"><div className="overflow-hidden"><img src={item.image} alt={item.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="mt-5 text-[10px] uppercase tracking-widest text-amber-400">{item.brand}</p><h3 className="mt-2 font-display text-2xl text-white group-hover:text-amber-400">{item.name}</h3><p className="mt-2 text-sm text-stone-400">${item.price.toLocaleString()}</p></Link>)}</div></section>}
  </main>;
};
export default WatchDetails;