import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Store } from "lucide-react";

/* ─────────────────────────────────────────────
   Smooth scroll helper
───────────────────────────────────────────── */
function useScrollTo() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback((hash) => {
    const scrollToEl = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToEl, 300);
    } else {
      scrollToEl();
    }
  }, [navigate, location.pathname]);
}

/* ─────────────────────────────────────────────
   ScrollLink component
───────────────────────────────────────────── */
function ScrollLink({ hash, children, className, onClick }) {
  const scrollTo = useScrollTo();

  const handleClick = (e) => {
    e.preventDefault();
    scrollTo(hash);
    if (onClick) onClick();
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────
   Variants
───────────────────────────────────────────── */
const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
};

/* ─────────────────────────────────────────────
   Main Navbar Component
───────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => { setMobileOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Lower Header: 4 buttons ── */
  const lowerNavLinks = [
    { label: "Offerings", hash: "#offerings" },
    { label: "Design Ideas", hash: "#design-ideas" },
    { label: "Magazine", hash: "#magazine" },
    { label: "Projects", hash: "#projects" },
  ];

  /* ── Upper Header: 4 buttons ── */
  const upperNavLinks = [
    { label: "How it works", hash: "#about" },
    { label: "Contact Us", hash: "#contact-us" },
    { label: "Store Locator", href: "https://www.google.com/maps/search/JBF+Decor", isExternal: true, icon: Store },
    { label: "Own a franchise", hash: "#franchise" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">

        {/* ── UPPER HEADER ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo — scrolls to hero */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent drop-shadow-md">
                  <polygon fill="currentColor" points="50,5 95,25 95,75 50,95 5,75 5,25" />
                  <polygon fill="white" points="50,15 85,32 85,68 50,85 15,68 15,32" />
                </svg>
                <span className="absolute text-accent font-bold text-xs">JBF</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-wide text-dark-text uppercase">
                JBF Decor
              </span>
            </a>

            {/* Desktop Upper Nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {upperNavLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors"
                    >
                      {link.icon && <link.icon size={13} className="text-gray-400" />}
                      {link.label}
                    </a>
                  );
                }
                return (
                  <ScrollLink
                    key={link.label}
                    hash={link.hash}
                    className="text-[13px] font-semibold text-dark-text hover:text-accent transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                );
              })}

              <div className="w-px h-6 bg-gray-200 mx-1" />

              <ScrollLink hash="#shop-by-style" className="flex items-center gap-2 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors">
                Shop Furnishings
                <span className="bg-[#5CB85C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">New</span>
              </ScrollLink>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-dark-text hover:bg-gray-100 p-2 rounded-md"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* ── LOWER HEADER ── */}
        <div className="hidden lg:block border-t border-gray-100 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-14">

            <nav className="flex items-center gap-8 h-full">
              {lowerNavLinks.map((link) => (
                <ScrollLink
                  key={link.label}
                  hash={link.hash}
                  className="text-[14px] font-medium text-gray-700 hover:text-accent transition-colors h-full flex items-center"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </nav>

            <ScrollLink
              hash="#franchise"
              className="px-6 py-2.5 bg-accent text-white text-[13px] font-bold uppercase tracking-wide rounded-full hover:bg-accent-dark shadow-sm transition-colors"
            >
              Consult Online Now
            </ScrollLink>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={closeMobile}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] z-[70] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <span className="font-heading font-bold text-xl text-dark-text uppercase">Menu</span>
                <button
                  onClick={closeMobile}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Lower nav links first */}
                <div className="p-4 space-y-1 border-b border-gray-100">
                  <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-text">Explore</p>
                  {lowerNavLinks.map(link => (
                    <ScrollLink
                      key={link.label}
                      hash={link.hash}
                      className="block px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg"
                      onClick={closeMobile}
                    >
                      {link.label}
                    </ScrollLink>
                  ))}
                </div>

                {/* Upper nav links */}
                <div className="p-4 space-y-1">
                  <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-text">More</p>
                  {upperNavLinks.map(link => {
                    if (link.isExternal) {
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg"
                        >
                          {link.icon && <link.icon size={14} className="text-accent" />} {link.label}
                        </a>
                      );
                    }
                    return (
                      <ScrollLink
                        key={link.label}
                        hash={link.hash}
                        className="block px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </ScrollLink>
                    );
                  })}
                </div>
              </div>

              <div className="p-5 border-t border-gray-100">
                <ScrollLink
                  hash="#franchise"
                  className="w-full py-3 bg-accent text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-accent-dark flex justify-center items-center"
                  onClick={closeMobile}
                >
                  Consult Online Now
                </ScrollLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
