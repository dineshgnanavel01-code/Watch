import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Watch,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#070707] text-stone-400 overflow-hidden">
      {/* Background Glow Accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[rgba(201,162,39,0.04)] blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-9">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="group inline-flex items-center gap-3">
              <motion.div
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-[#292929] shadow-[inset_0_0_15px_rgba(201,162,39,0.12),0_8px_20px_rgba(0,0,0,0.45)]"
                whileHover={{
                  rotateY: 180,
                  rotateX: 8,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundImage: "linear-gradient(to bottom right, #292929, #070707)",
                }}
              >
                <span className="absolute inset-1 rounded-full border border-gold/20" />
                <span className="absolute inset-2 rounded-full border border-white/5" />
                <Watch
                  className="relative z-10 h-5 w-5 text-gold"
                  strokeWidth={1.4}
                />
              </motion.div>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-[0.24em] text-white">
                  LUXE
                </h2>
                <p className="text-[8px] font-medium tracking-[0.38em] text-gold">
                  TIMEPIECES
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-stone-500">
              Exceptional watches for exceptional moments. Discover timeless craftsmanship and refined elegance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-400 transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-400 transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
              >
                <Globe size={18} strokeWidth={1.8} />
              </a>

              <a
                href="mailto:hello@luxewatches.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-400 transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
              >
                <Mail size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Shop
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-stone-500">
              <Link
                to="/collection"
                className="transition-colors duration-200 hover:text-white"
              >
                All Watches
              </Link>

              <Link
                to="/collection"
                className="transition-colors duration-200 hover:text-white"
              >
                New Arrivals
              </Link>

              <Link
                to="/collection"
                className="transition-colors duration-200 hover:text-white"
              >
                Best Sellers
              </Link>

              <Link
                to="/cart"
                className="transition-colors duration-200 hover:text-white"
              >
                Shopping Cart
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-stone-500">
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Our Story
              </Link>

              <Link
                to="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Craftsmanship
              </Link>

              <Link
                to="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Warranty
              </Link>

              <Link
                to="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm text-stone-500">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-gold" />
                <a href="mailto:hello@luxewatches.com" className="transition-colors hover:text-white">
                  hello@luxewatches.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-gold" />
                <a href="tel:+18005550199" className="transition-colors hover:text-white">
                  +1 800 555 0199
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} LUXE Timepieces. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;