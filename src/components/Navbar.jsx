import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, Menu, X, Watch, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full px-0 pt-0 sm:px-3 sm:pt-3 lg:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
<<<<<<< HEAD
        className="navbar-3d navbar-floating relative mx-auto w-full max-w-full overflow-visible rounded-none border-x-0 border-y border-white/10 bg-[#111111]/95 backdrop-blur-xl sm:rounded-2xl sm:border"
=======
        className="navbar-3d navbar-floating relative mx-auto w-full max-w-7xl overflow-visible rounded-none border-x-0 border-y border-white/10 bg-[#111111]/95 backdrop-blur-xl sm:rounded-2xl sm:border"
>>>>>>> dc0c48381bee186a542d9083e187f17e10773db7
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-[rgba(201,162,39,0.10)] blur-2xl" />
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,162,39,0.40)] to-transparent sm:inset-x-8" />

        <div className="relative flex min-h-[64px] w-full items-center justify-between px-3 sm:min-h-[76px] sm:px-7 lg:px-9">
          {/* LUXE LOGO - visible on mobile */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label="Luxe Timepieces Home"
          >
            <motion.div
              className="logo-3d relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(201,162,39,0.50)] bg-gradient-to-br from-[#292929] to-[#070707] shadow-[inset_0_0_15px_rgba(201,162,39,0.12),0_8px_20px_rgba(0,0,0,0.45)] sm:h-11 sm:w-11"
              whileHover={{ rotateY: 180, rotateX: 8, scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="absolute inset-1 rounded-full border border-[rgba(201,162,39,0.20)]" />
              <span className="absolute inset-2 rounded-full border border-white/5" />
              <Watch className="relative z-10 h-4 w-4 text-[#c9a227] sm:h-5 sm:w-5" strokeWidth={1.4} />
              <span className="absolute left-2 top-1 h-2 w-2 rounded-full bg-white/20 blur-[1px]" />
            </motion.div>

            <div className="min-w-0">
              <h1 className="font-display whitespace-nowrap text-[15px] font-semibold leading-none tracking-[0.18em] text-white sm:text-lg sm:tracking-[0.24em] lg:text-xl">
                LUXE
              </h1>
              <p className="mt-1 hidden whitespace-nowrap text-[8px] font-medium tracking-[0.38em] text-[#c9a227] sm:block">
                TIMEPIECES
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-3d group relative rounded-xl px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] ${
                    isActive ? "text-[#c9a227]" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 rounded-xl border border-[rgba(201,162,39,0.20)] bg-[rgba(201,162,39,0.10)]"
                      />
                    )}
                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                      {link.name}
                    </span>
                    <span className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-[#c9a227] transition-all duration-300 ${isActive ? "w-5" : "w-0 group-hover:w-5"}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              to="/login"
              className="nav-icon-3d hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 sm:flex"
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </Link>

            <Link
              to="/cart"
              className="nav-icon-3d relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 sm:h-10 sm:w-10"
              aria-label={`Shopping Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#111] bg-[#c9a227] px-1 text-[9px] font-bold text-[#111]"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="nav-icon-3d flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 sm:h-10 sm:w-10 md:hidden"
              aria-label={menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-2 px-3 py-4 sm:px-5 sm:py-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl border px-4 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                        isActive
                          ? "border-[rgba(201,162,39,0.20)] bg-[rgba(201,162,39,0.10)] text-[#c9a227]"
                          : "border-white/5 bg-white/[0.02] text-white/70 hover:border-[rgba(201,162,39,0.20)] hover:text-[#c9a227]"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronRight size={15} />
                  </NavLink>
                ))}
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-all hover:border-[rgba(201,162,39,0.20)] hover:text-[#c9a227]"
                >
                  Account / Login
                  <User size={15} />
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
