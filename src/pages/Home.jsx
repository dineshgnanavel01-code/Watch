import { Link } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { ArrowRight, ShieldCheck, Truck, Sparkles, Star, ChevronLeft, ChevronRight, Quote, Mail, Crown, Timer, Gem } from "lucide-react";
=======
import { ArrowRight, ShieldCheck, Truck, Sparkles, Star, ChevronLeft, ChevronRight, Quote, Mail, Crown, Timer, Gem, MousePointer2 } from "lucide-react";
>>>>>>> dc0c48381bee186a542d9083e187f17e10773db7
import { useEffect, useState } from "react";
import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

<<<<<<< HEAD
const reveal = { hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
=======
const ease = [0.22, 1, 0.36, 1];
const reveal = { hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
>>>>>>> dc0c48381bee186a542d9083e187f17e10773db7

const Home = () => {
  const featured = watches.filter((w) => w.featured).slice(0, 4);
  const newArrivals = watches.slice(8, 12);
  const bestSellers = [...watches].sort((a, b) => b.rating - a.rating || b.price - a.price).slice(0, 4);
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const heroSlides = [
    { eyebrow: "The Art of Time", title: "Time, perfected.", copy: "Discover exceptional timepieces crafted for those who appreciate precision, heritage, and timeless design.", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=2200&q=90" },
    { eyebrow: "A New Era of Luxury", title: "Wear your legacy.", copy: "Mechanical excellence, sculpted materials, and enduring design — selected for the modern collector.", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=2200&q=90" },
    { eyebrow: "The Collector's Vault", title: "Made to endure.", copy: "From heritage-inspired classics to contemporary icons, find the watch that defines your next chapter.", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=2200&q=90" },
  ];
  const hero = heroSlides[slide];
  const testimonials = [
    ["Exceptional from first click to delivery. The watch arrived beautifully presented and exactly as described.", "Daniel R.", "Verified Collector"],
    ["LUXE has the rare combination of taste, service, and an incredible selection. I will certainly return.", "Amelia K.", "Private Client"],
    ["A genuinely premium buying experience. Their attention to detail makes every part of the journey feel special.", "Marcus T.", "Watch Enthusiast"],
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
<<<<<<< HEAD
    <div className="overflow-hidden bg-stone-950">
      {/* Cinematic hero / Slider Revolution-inspired motion */}
      <section className="relative min-h-[calc(100vh-96px)] overflow-hidden">
        {heroSlides.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: index === slide ? 1 : 0, scale: index === slide ? 1 : 1.08 }} transition={{ duration: 1.35, ease: "easeInOut" }} className="absolute inset-0">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </motion.div>
        ))}
        <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-24 lg:px-10">
          <motion.div key={hero.title} initial="hidden" animate="visible" variants={reveal} className="max-w-3xl">
            <motion.p initial={{ opacity: 0, letterSpacing: "0em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ delay: 0.25, duration: 0.8 }} className="section-label !text-amber-400">{hero.eyebrow}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }} className="mt-7 font-display text-6xl font-medium leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-[8.5rem]">{hero.title}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="mt-8 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">{hero.copy}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/collection" className="btn-gold group">Explore Collection <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/collection" className="border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:border-amber-400 hover:text-amber-400">Discover More</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((_, i) => <button key={i} onClick={() => setSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1 transition-all duration-500 ${i === slide ? "w-12 bg-amber-400" : "w-5 bg-white/30"}`} />)}
        </div>
        <div className="absolute bottom-7 right-6 hidden gap-2 sm:flex">
          <button onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous slide" className="border border-white/20 p-3 text-white transition hover:border-amber-400 hover:text-amber-400"><ChevronLeft size={16} /></button>
          <button onClick={() => setSlide((slide + 1) % 3)} aria-label="Next slide" className="border border-white/20 p-3 text-white transition hover:border-amber-400 hover:text-amber-400"><ChevronRight size={16} /></button>
        </div>
      </section>

      <section className="border-y border-white/10 bg-stone-900">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[{ icon: ShieldCheck, title: "Authenticity Guaranteed", copy: "Every timepiece is carefully authenticated." }, { icon: Truck, title: "Insured Worldwide", copy: "Secure, tracked delivery wherever you are." }, { icon: Sparkles, title: "Lifetime Care", copy: "Expert service for your treasured watch." }].map(({ icon: Icon, title, copy }) => <motion.div whileHover={{ y: -5 }} key={title} className="p-8 text-center transition"><Icon className="mx-auto mb-4 text-amber-400" /><h3 className="font-display text-lg text-white">{title}</h3><p className="mt-2 text-sm text-stone-500">{copy}</p></motion.div>)}
        </div>
      </section>

      <WatchSection eyebrow="Curated Selection" title="Featured Timepieces" watches={featured} />
      <WatchSection eyebrow="Just Arrived" title="New Arrivals" watches={newArrivals} />
      <WatchSection eyebrow="Most Desired" title="Best Selling Watches" watches={bestSellers} />

      {/* Promotional banner */}
      <section className="relative mx-6 overflow-hidden border border-amber-400/20 bg-[#15120b] sm:mx-10 lg:mx-auto lg:max-w-7xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,39,.16),transparent_45%)]" />
        <div className="relative grid items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-16">
          <div><p className="section-label !text-amber-400">Private Collector Event</p><h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Complimentary insured delivery<br className="hidden sm:block" /> on orders over $5,000.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-stone-400">A limited invitation to experience the LUXE collection with white-glove delivery and collector support.</p></div>
          <Link to="/collection" className="btn-gold group whitespace-nowrap">Shop the Private Edit <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-full items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden"><img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1400&q=90" alt="LUXE timepiece" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /></motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="section-label">The LUXE Philosophy</p><h2 className="heading-lg mt-5 text-white">More than a watch.<br /><span className="italic text-amber-400">A legacy.</span></h2><p className="mt-7 leading-8 text-stone-400">A watch is more than an instrument for measuring time. It is an expression of character, craftsmanship, and individuality.</p><p className="mt-5 leading-8 text-stone-400">Our collection brings together exceptional timepieces chosen for their design, precision, and enduring value.</p><Link to="/collection" className="mt-8 inline-flex items-center gap-3 border-b border-amber-500 pb-2 text-xs uppercase tracking-widest text-amber-400">Discover Our Collection <ArrowRight size={15} /></Link></motion.div>
        </div>
      </section>

      {/* Brand / collection */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-12 text-center"><p className="section-label">The House Edit</p><h2 className="heading-lg mt-5 text-white">Explore by Collection</h2></div><div className="grid gap-5 md:grid-cols-3">{[{ name: "Heritage", sub: "Timeless classics", icon: Crown, image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=1000&q=85" }, { name: "Chronograph", sub: "Precision in motion", icon: Timer, image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=85" }, { name: "Luxury", sub: "Uncompromising elegance", icon: Gem, image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=1000&q=85" }].map(({ name, sub, icon: Icon, image }) => <Link to="/collection" key={name} className="group relative h-[420px] overflow-hidden"><img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><div className="absolute bottom-8 left-8"><Icon size={20} className="mb-4 text-amber-400" /><p className="text-xs uppercase tracking-[0.25em] text-amber-400">{sub}</p><h3 className="mt-2 font-display text-4xl text-white">{name}</h3><span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 group-hover:text-amber-400">Shop edit <ArrowRight size={14} /></span></div></Link>)}</div></section>

      <section className="bg-stone-900 py-24"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="grid gap-8 text-center sm:grid-cols-3">{[["12+", "Curated timepieces"], ["8", "Global collections"], ["99%", "Client satisfaction"]].map(([value, label]) => <motion.div whileHover={{ scale: 1.02 }} key={label} className="border border-white/10 p-10"><p className="font-display text-5xl text-amber-400">{value}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-400">{label}</p></motion.div>)}</div></div></section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10"><Quote className="mx-auto text-amber-400" size={34} strokeWidth={1} /><motion.div key={testimonials[slide][1]} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-7"><p className="font-display text-2xl leading-relaxed text-white sm:text-4xl">“{testimonials[slide][0]}”</p><div className="mt-7 flex justify-center gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" className="text-amber-400" />)}</div><p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">{testimonials[slide][1]} · {testimonials[slide][2]}</p></motion.div><div className="mt-8 flex justify-center gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setSlide(i)} aria-label={`Show testimonial ${i + 1}`} className={`h-1 ${i === slide ? "w-10 bg-amber-400" : "w-4 bg-white/20"}`} />)}</div></section>

      <section className="border-y border-white/10 bg-gradient-to-r from-[#17140c] to-stone-900"><div className="mx-auto max-w-5xl px-6 py-20 text-center"><Mail className="mx-auto text-amber-400" /><p className="mt-5 text-xs uppercase tracking-[0.3em] text-amber-400">Private Access</p><h2 className="heading-md mt-4 text-white">Enter the world of LUXE.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-400">Join our private list for new arrivals, collector stories, and exclusive access to exceptional timepieces.</p>{subscribed ? <p className="mt-8 text-sm text-amber-400">Thank you — you are now on the private list.</p> : <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your email address" className="min-h-12 flex-1 border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-stone-600 focus:border-amber-400" /><button className="btn-gold">Subscribe</button></form>}</div></section>
=======
    <div className="w-full overflow-hidden bg-stone-950">
      <section className="relative min-h-[calc(100vh-96px)] w-full overflow-hidden">
        {heroSlides.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: index === slide ? 1 : 0, scale: index === slide ? 1 : 1.1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0">
            <motion.img src={item.image} alt={item.title} className="h-full w-full object-cover" animate={index === slide ? { scale: [1.05, 1] } : { scale: 1.1 }} transition={{ duration: 6, ease: "easeOut" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </motion.div>
        ))}

        <div className="relative flex min-h-[calc(100vh-96px)] w-full items-center px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
          <motion.div key={hero.title} initial="hidden" animate="visible" variants={reveal} className="w-full max-w-7xl mx-auto">
            <motion.p initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7, ease }} className="section-label !text-amber-400">{hero.eyebrow}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 45, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.3, duration: 1, ease }} className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-[8.5rem]">{hero.title}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8, ease }} className="mt-8 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">{hero.copy}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.7, ease }} className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/collection" className="btn-gold group">Explore Collection <ArrowRight size={16} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" /></Link>
              <Link to="/collection" className="border border-white/30 px-6 py-4 text-xs uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-white/5 hover:text-amber-400 sm:px-7">Discover More</Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 7, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.2, repeat: Infinity }} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/50 md:flex"><MousePointer2 size={13} /> Scroll to explore</motion.div>
        <div className="absolute bottom-8 left-5 flex items-center gap-2 sm:left-8 lg:left-14">{heroSlides.map((_, i) => <button key={i} onClick={() => setSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-12 bg-amber-400" : "w-5 bg-white/30 hover:bg-white/60"}`} />)}</div>
        <div className="absolute bottom-7 right-5 hidden gap-2 sm:right-8 sm:flex lg:right-14">
          <button onClick={() => setSlide((slide + heroSlides.length - 1) % heroSlides.length)} aria-label="Previous slide" className="border border-white/20 bg-black/20 p-3 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"><ChevronLeft size={16} /></button>
          <button onClick={() => setSlide((slide + 1) % heroSlides.length)} aria-label="Next slide" className="border border-white/20 bg-black/20 p-3 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"><ChevronRight size={16} /></button>
        </div>
      </section>

      <section className="w-full border-y border-white/10 bg-stone-900">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mx-auto grid w-full max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[{ icon: ShieldCheck, title: "Authenticity Guaranteed", copy: "Every timepiece is carefully authenticated." }, { icon: Truck, title: "Insured Worldwide", copy: "Secure, tracked delivery wherever you are." }, { icon: Sparkles, title: "Lifetime Care", copy: "Expert service for your treasured watch." }].map(({ icon: Icon, title, copy }) => (
            <motion.div variants={reveal} whileHover={{ y: -7 }} key={title} className="group p-8 text-center transition duration-300 sm:p-10">
              <Icon className="mx-auto mb-4 text-amber-400 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,.35)]" />
              <h3 className="font-display text-lg text-white">{title}</h3><p className="mt-2 text-sm text-stone-500">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <WatchSection eyebrow="Curated Selection" title="Featured Timepieces" watches={featured} />
      <WatchSection eyebrow="Just Arrived" title="New Arrivals" watches={newArrivals} />
      <WatchSection eyebrow="Most Desired" title="Best Selling Watches" watches={bestSellers} />

      <section className="relative w-full overflow-hidden border-y border-amber-400/20 bg-[#15120b]">
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }} transition={{ duration: 7, repeat: Infinity }} className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,39,.2),transparent_55%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-20">
          <div><p className="section-label !text-amber-400">Private Collector Event</p><h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Complimentary insured delivery<br className="hidden sm:block" /> on orders over $5,000.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-stone-400">A limited invitation to experience the LUXE collection with white-glove delivery and collector support.</p></div>
          <Link to="/collection" className="btn-gold group whitespace-nowrap">Shop the Private Edit <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="relative w-full border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-14 lg:py-28">
          <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease }} className="relative overflow-hidden">
            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1400&q=90" alt="LUXE timepiece" className="aspect-[4/5] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease, delay: 0.1 }}><p className="section-label">The LUXE Philosophy</p><h2 className="heading-lg mt-5 text-white">More than a watch.<br /><span className="italic text-amber-400">A legacy.</span></h2><p className="mt-7 leading-8 text-stone-400">A watch is more than an instrument for measuring time. It is an expression of character, craftsmanship, and individuality.</p><p className="mt-5 leading-8 text-stone-400">Our collection brings together exceptional timepieces chosen for their design, precision, and enduring value.</p><Link to="/collection" className="group mt-8 inline-flex items-center gap-3 border-b border-amber-500 pb-2 text-xs uppercase tracking-widest text-amber-400">Discover Our Collection <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></motion.div>
        </div>
      </section>

      <section className="w-full bg-stone-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-14 lg:py-28"><div className="mb-12 text-center"><p className="section-label">The House Edit</p><h2 className="heading-lg mt-5 text-white">Explore by Collection</h2></div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 md:grid-cols-3">
            {[{ name: "Heritage", sub: "Timeless classics", icon: Crown, image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=1000&q=85" }, { name: "Chronograph", sub: "Precision in motion", icon: Timer, image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=85" }, { name: "Luxury", sub: "Uncompromising elegance", icon: Gem, image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=1000&q=85" }].map(({ name, sub, icon: Icon, image }) => (
              <motion.div variants={reveal} key={name}><Link to="/collection" className="group relative block h-[390px] overflow-hidden sm:h-[420px]"><motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }} src={image} alt={name} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><div className="absolute bottom-8 left-7 sm:left-8"><Icon size={20} className="mb-4 text-amber-400 transition group-hover:scale-110" /><p className="text-xs uppercase tracking-[0.25em] text-amber-400">{sub}</p><h3 className="mt-2 font-display text-4xl text-white">{name}</h3><span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 transition group-hover:translate-x-1 group-hover:text-amber-400">Shop edit <ArrowRight size={14} /></span></div></Link></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-stone-900 py-20 lg:py-24"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14"><motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 text-center sm:grid-cols-3">{[["12+", "Curated timepieces"], ["8", "Global collections"], ["99%", "Client satisfaction"]].map(([value, label]) => <motion.div variants={reveal} whileHover={{ y: -6, scale: 1.02 }} key={label} className="border border-white/10 p-10 transition duration-300 hover:border-amber-400/30"><motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="font-display text-5xl text-amber-400">{value}</motion.p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-400">{label}</p></motion.div>)}</motion.div></div></section>

      <section className="w-full bg-stone-950"><div className="mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28"><Quote className="mx-auto text-amber-400" size={34} strokeWidth={1} /><motion.div key={testimonials[slide][1]} initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, ease }} className="mt-7"><p className="font-display text-2xl leading-relaxed text-white sm:text-4xl">“{testimonials[slide][0]}”</p><div className="mt-7 flex justify-center gap-1">{[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" className="text-amber-400" />)}</div><p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">{testimonials[slide][1]} · {testimonials[slide][2]}</p></motion.div><div className="mt-8 flex justify-center gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setSlide(i)} aria-label={`Show testimonial ${i + 1}`} className={`h-1 rounded-full transition-all duration-500 ${i === slide ? "w-10 bg-amber-400" : "w-4 bg-white/20 hover:bg-white/40"}`} />)}</div></div></section>

      <section className="w-full border-y border-white/10 bg-gradient-to-r from-[#17140c] to-stone-900"><div className="mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-24"><Mail className="mx-auto text-amber-400" /><p className="mt-5 text-xs uppercase tracking-[0.3em] text-amber-400">Private Access</p><h2 className="heading-md mt-4 text-white">Enter the world of LUXE.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-400">Join our private list for new arrivals, collector stories, and exclusive access to exceptional timepieces.</p>{subscribed ? <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-sm text-amber-400">Thank you — you are now on the private list.</motion.p> : <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your email address" className="min-h-12 flex-1 border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition focus:border-amber-400" /><button className="btn-gold">Subscribe</button></form>}</div></section>
>>>>>>> dc0c48381bee186a542d9083e187f17e10773db7
    </div>
  );
};

const WatchSection = ({ eyebrow, title, watches }) => (
<<<<<<< HEAD
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <div className="mb-12 flex items-end justify-between"><div><p className="section-label">{eyebrow}</p><h2 className="heading-lg mt-5 text-white">{title}</h2></div><Link to="/collection" className="hidden items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-amber-400 sm:flex">View All <ArrowRight size={15} /></Link></div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{watches.map((watch) => <WatchCard key={`${title}-${watch.id}`} watch={watch} />)}</div>
  </motion.section>
);

export default Home;
=======
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="w-full bg-stone-950">
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mb-12 flex items-end justify-between gap-5"><div><p className="section-label">{eyebrow}</p><h2 className="heading-lg mt-5 text-white">{title}</h2></div><Link to="/collection" className="hidden items-center gap-2 text-xs uppercase tracking-widest text-stone-400 transition hover:translate-x-1 hover:text-amber-400 sm:flex">View All <ArrowRight size={15} /></Link></div>
      <motion.div variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{watches.map((watch) => <motion.div key={`${title}-${watch.id}`} variants={reveal}><WatchCard watch={watch} /></motion.div>)}</motion.div>
      <Link to="/collection" className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-widest text-stone-400 transition hover:text-amber-400 sm:hidden">View All <ArrowRight size={15} /></Link>
    </div>
  </motion.section>
);

export default Home;
>>>>>>> dc0c48381bee186a542d9083e187f17e10773db7
