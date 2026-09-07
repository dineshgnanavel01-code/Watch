import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Menu,
  X,
  Watch,
  ChevronRight,
} from "lucide-react";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper sticky top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <motion.nav
        initial={{
          opacity: 0,
          y: -35,
          rotateX: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          navbar-3d navbar-floating
          relative mx-auto max-w-7xl
          overflow-visible
          rounded-2xl
          border border-white/10
          bg-[#111111]/95
          backdrop-blur-xl
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* ================= GOLD GLOW ================= */}
        <div
          className="
            pointer-events-none
            absolute -inset-1 -z-10
            rounded-2xl
            bg-[rgba(201,162,39,0.10)]
            blur-2xl
          "
        />

        {/* ================= TOP REFLECTION ================= */}
        <div
          className="
            pointer-events-none
            absolute inset-x-8 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[rgba(201,162,39,0.40)]
            to-transparent
          "
        />

        {/* ================= MAIN NAV ================= */}
        <div className="relative flex h-[70px] items-center justify-between px-4 sm:h-[76px] sm:px-7 lg:px-9">
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Luxe Timepieces Home"
          >
            <motion.div
              className="
                logo-3d
                relative flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[rgba(201,162,39,0.50)]
                bg-gradient-to-br
                from-[#292929]
                to-[#070707]
                shadow-[inset_0_0_15px_rgba(201,162,39,0.12),0_8px_20px_rgba(0,0,0,0.45)]
                sm:h-11 sm:w-11
              "
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
              }}
            >
              {/* Outer Ring */}
              <span className="absolute inset-1 rounded-full border border-[rgba(201,162,39,0.20)]" />

              {/* Inner Ring */}
              <span className="absolute inset-2 rounded-full border border-white/5" />

              {/* Watch Icon */}
              <Watch
                className="relative z-10 h-5 w-5 text-[#c9a227]"
                strokeWidth={1.4}
              />

              {/* Highlight */}
              <span className="absolute left-2 top-1 h-2 w-2 rounded-full bg-white/20 blur-[1px]" />
            </motion.div>

            {/* Brand */}
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-semibold tracking-[0.24em] text-white lg:text-xl">
                LUXE
              </h1>

              <p className="mt-0.5 text-[8px] font-medium tracking-[0.38em] text-[#c9a227]">
                TIMEPIECES
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  [
                    "nav-3d group relative rounded-xl px-5 py-3",
                    "text-[11px] font-medium uppercase tracking-[0.22em]",
                    isActive
                      ? "text-[#c9a227]"
                      : "text-white/60 hover:text-white",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active Background */}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="
                          absolute inset-0
                          rounded-xl
                          border border-[rgba(201,162,39,0.20)]
                          bg-[rgba(201,162,39,0.10)]
                          shadow-[inset_0_0_20px_rgba(201,162,39,0.06)]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Navigation Text */}
                    <span
                      className="
                        relative z-10
                        inline-block
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                      "
                    >
                      {link.name}
                    </span>

                    {/* Active Underline */}
                    {isActive && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: 20 }}
                        className="
                          absolute bottom-1 left-1/2
                          h-px
                          -translate-x-1/2
                          bg-[#c9a227]
                        "
                      />
                    )}

                    {/* Hover Underline */}
                    {!isActive && (
                      <span
                        className="
                          absolute bottom-1 left-1/2
                          h-px w-0
                          -translate-x-1/2
                          bg-[#c9a227]
                          transition-all duration-300
                          group-hover:w-5
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Account */}
            <Link
              to="/login"
              className="
                nav-icon-3d group relative hidden
                h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-white/60
                sm:flex
              "
              aria-label="Account"
            >
              <User
                size={18}
                strokeWidth={1.5}
                className="transition-all duration-300 group-hover:scale-110"
              />

              <span
                className="
                  absolute bottom-0 left-1/2
                  h-px w-0
                  -translate-x-1/2
                  bg-[#c9a227]
                  transition-all duration-300
                  group-hover:w-5
                "
              />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="
                nav-icon-3d group relative
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-white/60
              "
              aria-label={`Shopping Cart${
                cartCount > 0 ? `, ${cartCount} items` : ""
              }`}
            >
              <ShoppingBag
                size={19}
                strokeWidth={1.5}
                className="
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:-rotate-3
                "
              />

              {/* Cart Badge */}
              <AnimatePresence mode="popLayout">
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{
                      opacity: 0,
                      scale: 0.4,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                    className="
                      absolute -right-1.5 -top-1.5
                      flex h-5 min-w-5
                      items-center justify-center
                      rounded-full
                      border border-[#111]
                      bg-[#c9a227]
                      px-1
                      text-[9px]
                      font-bold
                      text-[#111]
                      shadow-[0_4px_14px_rgba(201,162,39,0.45)]
                    "
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                nav-icon-3d group
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-white/60
                md:hidden
              "
              aria-label={
                menuOpen
                  ? "Close Navigation Menu"
                  : "Open Navigation Menu"
              }
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.6,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={21} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.6,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={21} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-2 px-4 py-4 sm:px-5 sm:py-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        [
                          "group flex items-center justify-between",
                          "rounded-xl border px-4 py-3.5",
                          "text-xs font-medium uppercase tracking-[0.2em]",
                          "transition-all duration-300",
                          isActive
                            ? "border-[rgba(201,162,39,0.20)] bg-[rgba(201,162,39,0.10)] text-[#c9a227]"
                            : "border-white/5 bg-white/[0.02] text-white/60",
                          !isActive &&
                            "hover:border-[rgba(201,162,39,0.20)] hover:bg-[rgba(201,162,39,0.05)] hover:text-[#c9a227]",
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      {link.name}

                      <ChevronRight
                        size={15}
                        strokeWidth={1.5}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Account */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.16,
                    duration: 0.3,
                  }}
                >
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="
                      group flex items-center justify-between
                      rounded-xl
                      border border-white/5
                      bg-white/[0.02]
                      px-4 py-3.5
                      text-xs font-medium
                      uppercase tracking-[0.2em]
                      text-white/60
                      transition-all duration-300
                      hover:border-[rgba(201,162,39,0.20)]
                      hover:bg-[rgba(201,162,39,0.05)]
                      hover:text-[#c9a227]
                    "
                  >
                    Account / Login

                    <User
                      size={15}
                      strokeWidth={1.5}
                      className="
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;