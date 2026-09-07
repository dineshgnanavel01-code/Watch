import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe, Watch, ArrowUpRight, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    { title: "Shop", links: [["All Watches", "/collection"], ["New Arrivals", "/collection"], ["Best Sellers", "/collection"], ["Shopping Cart", "/cart"]] },
    { title: "Maison", links: [["Our Story", "/"], ["Craftsmanship", "/"], ["Warranty", "/"], ["Private Access", "/login"]] },
  ];

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "X / Twitter", href: "https://x.com/", icon: Twitter },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#070707] text-stone-400">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[90vw] -translate-x-1/2 rounded-full bg-amber-400/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="min-w-0">
            <Link to="/" className="inline-flex max-w-full items-center gap-3">
              <motion.span whileHover={{ rotateY: 180, scale: 1.06 }} transition={{ duration: 0.6 }} className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-gradient-to-br from-[#292929] to-[#070707] shadow-[inset_0_0_18px_rgba(201,162,39,.12),0_8px_25px_rgba(0,0,0,.45)]">
                <span className="absolute inset-1 rounded-full border border-amber-400/20" />
                <Watch className="relative z-10 h-5 w-5 text-amber-400" strokeWidth={1.4} />
              </motion.span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap font-display text-lg font-semibold tracking-[0.18em] text-white sm:text-xl sm:tracking-[0.24em]">LUXE</span>
                <span className="mt-0.5 block whitespace-nowrap text-[7px] font-medium tracking-[0.32em] text-amber-400 sm:text-[8px] sm:tracking-[0.38em]">TIMEPIECES</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-500">Exceptional watches for exceptional moments. Discover timeless craftsmanship, precision and refined elegance.</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400">
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              ))}
              <a href="mailto:hello@luxewatches.com" aria-label="Email" title="Email" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400"><Mail size={17} /></a>
              <a href="#" aria-label="Website" title="Website" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400"><Globe size={17} /></a>
            </div>
          </motion.div>

          {columns.map((column, index) => (
            <motion.div key={column.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="min-w-0">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400">{column.title}</h3>
              <div className="mt-5 flex flex-col gap-3.5">
                {column.links.map(([label, path]) => (
                  <Link key={label} to={path} className="group flex min-w-0 items-center gap-1 text-sm text-stone-500 transition hover:text-white">
                    <span className="truncate">{label}</span><ArrowUpRight size={12} className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="min-w-0">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400">Concierge</h3>
            <div className="mt-5 space-y-4 text-sm text-stone-500">
              <div className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-amber-400" /><span>New York, NY</span></div>
              <a href="mailto:hello@luxewatches.com" className="flex min-w-0 items-center gap-3 transition hover:text-white"><Mail size={17} className="shrink-0 text-amber-400" /><span className="break-all">hello@luxewatches.com</span></a>
              <a href="tel:+18005550199" className="flex items-center gap-3 transition hover:text-white"><Phone size={17} className="shrink-0 text-amber-400" /><span className="whitespace-nowrap">+1 800 555 0199</span></a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex w-full flex-col gap-3 border-t border-white/10 pt-6 text-center text-[9px] uppercase tracking-[0.12em] text-stone-600 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-[10px] sm:tracking-[0.14em]">
          <span>© {year} LUXE Timepieces. All rights reserved.</span>
          <span>Precision • Heritage • Eternity</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;