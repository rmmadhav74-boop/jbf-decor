import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu, ChevronDown, User, MapPin, Briefcase, Box, Layout, ArrowRight } from "lucide-react";
import { generateQuoteLink } from "../../utils/whatsapp";

/* ─── Navigation Data ─── */
const topNavLinks = [
  { label: "Design Ideas", href: "/catalog", hasDropdown: true },
  { label: "Magazine", href: "#", hasDropdown: true },
  { label: "Cities", href: "#", hasDropdown: true },
  { label: "Projects", href: "/#projects", hasDropdown: false },
  { label: "Store Locator", href: "#", hasDropdown: false },
  { label: "More", href: "#", hasDropdown: true },
];

const bottomNavLinks = [
  { label: "How it works", href: "/about#process", hasDropdown: false },
  { 
    label: "Offerings", 
    href: "/catalog", 
    hasDropdown: true,
    mega: true,
    children: [
      { label: "Living Room", href: "/catalog?cat=living-room", icon: Layout },
      { label: "Bedroom", href: "/catalog?cat=bedroom", icon: Box },
      { label: "Dining", href: "/catalog?cat=dining", icon: Layout },
      { label: "Office", href: "/catalog?cat=office", icon: Briefcase },
      { label: "Outdoor", href: "/catalog?cat=outdoor", icon: MapPin },
      { label: "Storage", href: "/catalog?cat=storage", icon: Box },
    ]
  },
  { label: "Price Calculators", href: "#", hasDropdown: true },
  { label: "The Modular Journey", href: "#", hasDropdown: false },
  { label: "Own a franchise", href: "#", hasDropdown: false },
];

/* ─── Variants ─── */
const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
};

const megaMenuVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.15 } },
};

/* ─── Component ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  /* ─── Close mobile on route change ─── */
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  /* ─── Lock body scroll when mobile menu open ─── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        {/* ── Top Row ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            
            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              {/* Hexagon Logo mimic */}
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
            </Link>

            {/* ── Top Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-6">
              {topNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-1 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
                </Link>
              ))}
              
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              
              <Link to="/catalog" className="flex items-center gap-2 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors">
                Shop Furnishings
                <span className="bg-[#5CB85C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">New</span>
              </Link>
              
              <button className="flex items-center gap-1 text-gray-500 hover:text-dark-text ml-4">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                  <User size={14} />
                </div>
                <ChevronDown size={14} />
              </button>
            </nav>

            {/* ── Mobile Menu Toggle ── */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-dark-text hover:bg-gray-100 p-2 rounded-md"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* ── Bottom Row ── */}
        <div className="hidden lg:block border-t border-gray-100 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-14">
            <nav className="flex items-center gap-8">
              {bottomNavLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.mega && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-[14px] font-medium text-gray-700 hover:text-accent transition-colors h-full"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180 text-accent" : "text-gray-400"}`} />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {link.mega && activeDropdown === link.label && (
                      <motion.div
                        variants={megaMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-0 w-[500px] bg-white rounded-b-xl shadow-xl border border-gray-100 p-6 z-50"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {link.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="text-gray-400 group-hover:text-accent transition-colors">
                                  <Icon size={20} />
                                </div>
                                <span className="text-sm font-medium text-dark-text group-hover:text-accent transition-colors">
                                  {child.label}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                          <Link
                            to="/catalog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                          >
                            Explore All Offerings <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-accent text-white text-[13px] font-bold uppercase tracking-wide rounded-full hover:bg-accent-dark shadow-sm transition-colors"
            >
              Consult Online Now
            </Link>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
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
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-1 border-b border-gray-100">
                  {topNavLinks.map(link => (
                    <Link key={link.label} to={link.href} className="block px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="p-4 space-y-1">
                  {bottomNavLinks.map(link => (
                    <div key={link.label}>
                      {link.mega ? (
                        <>
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                          >
                            {link.label}
                            <ChevronDown size={16} className={`transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === link.label && (
                              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden ml-4">
                                {link.children.map(child => (
                                  <Link key={child.label} to={child.href} className="block px-4 py-2.5 text-[13px] text-gray-500 hover:text-accent">
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link to={link.href} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 border-t border-gray-100">
                <Link to="/contact" className="w-full py-3 bg-accent text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-accent-dark flex justify-center items-center">
                  Consult Online Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
