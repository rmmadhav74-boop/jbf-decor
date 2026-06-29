import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Menu, ChevronDown, User, ArrowRight,
  Sofa, BedDouble, UtensilsCrossed, Building2, TreePine, Archive,
  MapPin, BookOpen, Lightbulb, Compass, Store
} from "lucide-react";

/* ─────────────────────────────────────────────
   Navigation data
───────────────────────────────────────────── */

const offeringCategories = [
  {
    label: "Living Room",
    href: "/catalog?cat=living-room",
    icon: Sofa,
    desc: "Sofas, coffee tables & more",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400",
    count: "148 Items",
    color: "from-purple-600 to-indigo-700",
  },
  {
    label: "Bedroom",
    href: "/catalog?cat=bedroom",
    icon: BedDouble,
    desc: "Beds, wardrobes & nightstands",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400",
    count: "122 Items",
    color: "from-blue-600 to-cyan-700",
  },
  {
    label: "Dining",
    href: "/catalog?cat=dining",
    icon: UtensilsCrossed,
    desc: "Dining tables & chairs",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=400",
    count: "86 Items",
    color: "from-amber-600 to-orange-700",
  },
  {
    label: "Office",
    href: "/catalog?cat=office",
    icon: Building2,
    desc: "Desks, chairs & storage",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
    count: "64 Items",
    color: "from-slate-600 to-gray-700",
  },
  {
    label: "Outdoor",
    href: "/catalog?cat=outdoor",
    icon: TreePine,
    desc: "Garden & balcony sets",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=400",
    count: "45 Items",
    color: "from-green-600 to-emerald-700",
  },
  {
    label: "Storage",
    href: "/catalog?cat=storage",
    icon: Archive,
    desc: "Cabinets, shelves & racks",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
    count: "93 Items",
    color: "from-rose-600 to-pink-700",
  },
];

const magazineArticles = [
  {
    label: "The Luxury Home Issue",
    tag: "Lifestyle",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "Opulent interiors & exclusive homes revealed",
    image: "/magazine/living-luxury.png",
    href: "#",
  },
  {
    label: "Bedroom Sanctuary",
    tag: "Bedroom",
    tagColor: "bg-amber-100 text-amber-700",
    desc: "Craft your perfect sleep retreat with layered textures",
    image: "/magazine/bedroom-elegance.png",
    href: "#",
  },
  {
    label: "Dining in Style",
    tag: "Dining",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "Set the stage for unforgettable meals",
    image: "/magazine/dining-warmth.png",
    href: "#",
  },
  {
    label: "Work From Luxury",
    tag: "Office",
    tagColor: "bg-green-100 text-green-700",
    desc: "Premium home offices that inspire productivity",
    image: "/magazine/office-workspace.png",
    href: "#",
  },
  {
    label: "2025 Colour Trends",
    tag: "Trends",
    tagColor: "bg-rose-100 text-rose-700",
    desc: "Terracotta, sage & warm neutrals define the year",
    image: "/magazine/trend-colors.png",
    href: "#",
  },
  {
    label: "Al Fresco Living",
    tag: "Outdoor",
    tagColor: "bg-teal-100 text-teal-700",
    desc: "Transform your garden into a luxury retreat",
    image: "/magazine/outdoor-living.png",
    href: "#",
  },
];

const cities = [
  {
    name: "Bikaner",
    state: "Rajasthan",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Bikaner/@28.0229,73.3119,13z",
    stores: 2,
    highlight: true,
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Jaipur/@26.9124,75.7873,13z",
    stores: 3,
  },
  {
    name: "Jodhpur",
    state: "Rajasthan",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Jodhpur/@26.2389,73.0243,13z",
    stores: 2,
  },
  {
    name: "Delhi",
    state: "Delhi NCR",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Delhi/@28.6139,77.2090,12z",
    stores: 4,
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Mumbai/@19.0760,72.8777,12z",
    stores: 3,
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Bangalore/@12.9716,77.5946,12z",
    stores: 2,
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Hyderabad/@17.3850,78.4867,12z",
    stores: 2,
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    mapUrl: "https://www.google.com/maps/search/JBF+Decor+Chennai/@13.0827,80.2707,12z",
    stores: 1,
  },
];

const designIdeas = [
  { label: "Living Room Ideas", href: "/catalog?cat=living-room", icon: Sofa },
  { label: "Bedroom Inspiration", href: "/catalog?cat=bedroom", icon: BedDouble },
  { label: "Modern Minimalist", href: "/catalog", icon: Lightbulb },
  { label: "Browse All Designs", href: "/catalog", icon: Compass },
];

/* ─────────────────────────────────────────────
   Variants
───────────────────────────────────────────── */
const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
};

const dropVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

/* ─────────────────────────────────────────────
   Offerings Mega Menu
───────────────────────────────────────────── */
function OfferingsMega() {
  return (
    <motion.div
      variants={dropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      <div 
        className="bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-0 overflow-hidden pointer-events-auto"
        style={{ width: '780px' }}
      >
        {/* Header strip */}
        <div className="px-7 pt-5 pb-3 flex items-center justify-between border-b border-gray-50">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Browse by Room</p>
          <Link to="/catalog" className="text-[11px] text-gray-400 hover:text-accent transition-colors flex items-center gap-1">
            View All <ArrowRight size={11} />
          </Link>
        </div>

        {/* 3 × 2 image cards */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {offeringCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                to={cat.href}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[130px] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-80`} />
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* count badge */}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {cat.count}
                  </span>
                  {/* icon */}
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Icon size={14} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label row */}
                <div className="bg-gray-50 group-hover:bg-accent/5 transition-colors px-3 py-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-dark-text group-hover:text-accent transition-colors leading-none">{cat.label}</p>
                    <p className="text-[11px] text-muted-text mt-1 leading-none">{cat.desc}</p>
                  </div>
                  <ArrowRight size={13} className="text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA footer */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-t border-gray-100 px-7 py-3 flex items-center justify-between">
          <p className="text-[12px] text-muted-text">Factory-direct pricing • 10-year warranty • Free delivery</p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-accent hover:text-accent-dark transition-colors group"
          >
            Explore All Offerings
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Magazine Mega Menu
───────────────────────────────────────────── */
function MagazineMega() {
  return (
    <motion.div
      variants={dropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      <div 
        className="bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-0 overflow-hidden pointer-events-auto"
        style={{ width: '860px' }}
      >
        {/* Header */}
        <div className="px-7 pt-5 pb-3 flex items-center justify-between border-b border-gray-50">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">JBF Design Magazine</p>
            <p className="text-[11px] text-muted-text mt-0.5">Interior inspiration, trends & expert stories</p>
          </div>
          <Link to="#" className="text-[11px] text-gray-400 hover:text-accent transition-colors flex items-center gap-1">
            All Articles <ArrowRight size={11} />
          </Link>
        </div>

        {/* 3 × 2 article photo cards */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {magazineArticles.map((art) => (
            <Link
              key={art.label}
              to={art.href}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-[120px] overflow-hidden bg-gray-100">
                <img
                  src={art.image}
                  alt={art.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Tag */}
                <span className={`absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${art.tagColor}`}>
                  {art.tag}
                </span>
              </div>

              {/* Text */}
              <div className="p-3 bg-white">
                <p className="text-[12px] font-bold text-dark-text group-hover:text-accent transition-colors leading-tight line-clamp-1">
                  {art.label}
                </p>
                <p className="text-[10px] text-muted-text mt-1 leading-snug line-clamp-2">{art.desc}</p>
                <p className="text-[10px] text-accent font-semibold mt-1.5 flex items-center gap-0.5">
                  Read More <ArrowRight size={9} className="group-hover:translate-x-0.5 transition-transform" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-7 py-3 flex items-center justify-between">
          <p className="text-[11px] text-muted-text italic">New articles every week — design tips, trend reports & client stories</p>
          <Link to="#" className="text-[11px] font-bold text-accent hover:text-accent-dark flex items-center gap-1 group transition-colors">
            Subscribe to Magazine <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Cities Mega Menu
───────────────────────────────────────────── */
function CitiesMega() {
  return (
    <motion.div
      variants={dropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      <div 
        className="bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-0 overflow-hidden pointer-events-auto"
        style={{ width: '640px' }}
      >
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">JBF Showrooms</p>
            <p className="text-[11px] text-muted-text mt-0.5">Visit us in your city — click to open on Google Maps</p>
          </div>
          <MapPin size={16} className="text-accent" />
        </div>

        {/* City grid — 4 cols */}
        <div className="grid grid-cols-4 gap-2 p-4">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-300 cursor-pointer text-center
                ${city.highlight
                  ? "border-accent/30 bg-accent/5 hover:bg-accent hover:border-accent"
                  : "border-gray-100 bg-gray-50 hover:bg-accent hover:border-accent"
                }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                ${city.highlight ? "bg-accent/20 group-hover:bg-white/20" : "bg-white group-hover:bg-white/20"}`}>
                <MapPin size={14} className={`transition-colors duration-300 ${city.highlight ? "text-accent group-hover:text-white" : "text-gray-400 group-hover:text-white"}`} />
              </div>
              <div>
                <p className={`text-[12px] font-bold leading-none transition-colors duration-300
                  ${city.highlight ? "text-accent group-hover:text-white" : "text-dark-text group-hover:text-white"}`}>
                  {city.name}
                  {city.highlight && <span className="ml-1 text-[8px] bg-accent text-white px-1 py-0.5 rounded-full group-hover:bg-white group-hover:text-accent transition-colors">★</span>}
                </p>
                <p className={`text-[9px] mt-1 transition-colors duration-300 ${city.highlight ? "text-accent/70 group-hover:text-white/80" : "text-muted-text group-hover:text-white/80"}`}>
                  {city.state}
                </p>
                <p className={`text-[9px] font-semibold mt-0.5 transition-colors duration-300 ${city.highlight ? "text-accent group-hover:text-white/90" : "text-gray-400 group-hover:text-white/90"}`}>
                  {city.stores} {city.stores === 1 ? "Store" : "Stores"}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between">
          <p className="text-[11px] text-muted-text">All showrooms open Mon–Sat, 9AM–7PM IST</p>
          <a
            href="https://www.google.com/maps/search/JBF+Decor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-accent hover:text-accent-dark flex items-center gap-1 group transition-colors"
          >
            Find All Stores <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Design Ideas Dropdown
───────────────────────────────────────────── */
function DesignIdeasDrop() {
  return (
    <motion.div
      variants={dropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 mt-0 bg-white rounded-b-xl shadow-xl border border-gray-100 z-50 overflow-hidden py-2 pointer-events-auto"
      style={{ width: '240px' }}
    >
      {designIdeas.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 group transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
              <Icon size={14} className="text-gray-400 group-hover:text-accent transition-colors" strokeWidth={1.5} />
            </div>
            <span className="text-sm text-gray-700 group-hover:text-accent transition-colors font-medium">{item.label}</span>
          </Link>
        );
      })}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Top-nav item wrapper with dropdown
───────────────────────────────────────────── */
function TopNavItem({ link, activeDropdown, setActiveDropdown }) {
  const isActive = activeDropdown === link.label;
  const dropKey = link.label;

  const renderDrop = () => {
    if (link.label === "Magazine") return <MagazineMega />;
    if (link.label === "Cities") return <CitiesMega />;
    if (link.label === "Design Ideas") return <DesignIdeasDrop />;
    return null;
  };

  const dropContent = renderDrop();
  const isMega = link.label === "Magazine" || link.label === "Cities";

  if (!link.hasDropdown || !dropContent) {
    if (link.label === "Store Locator") {
      return (
        <a
          href="https://www.google.com/maps/search/JBF+Decor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors"
        >
          <Store size={13} className="text-gray-400" />
          {link.label}
        </a>
      );
    }
    return (
      <Link
        to={link.href}
        className="flex items-center gap-1 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className={`${isMega ? "" : "relative"} flex items-center h-full`}
      onMouseEnter={() => setActiveDropdown(dropKey)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className={`flex items-center gap-1 text-[13px] font-semibold transition-colors ${isActive ? "text-accent" : "text-dark-text hover:text-accent"}`}>
        {link.label}
        <ChevronDown size={13} className={`transition-transform duration-200 ${isActive ? "rotate-180 text-accent" : "text-gray-400"}`} />
      </button>
      <AnimatePresence>{isActive && dropContent}</AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Navbar Component
───────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const topNavLinks = [
    { label: "Design Ideas", href: "/catalog", hasDropdown: true },
    { label: "Magazine", href: "#", hasDropdown: true },
    { label: "Cities", href: "#", hasDropdown: true },
    { label: "Projects", href: "/#projects", hasDropdown: false },
    { label: "Store Locator", href: "#", hasDropdown: false },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">

        {/* ── TOP ROW ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
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

            {/* Desktop Top Nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {topNavLinks.map((link) => (
                <TopNavItem
                  key={link.label}
                  link={link}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}

              <div className="w-px h-6 bg-gray-200 mx-1" />

              <Link to="/catalog" className="flex items-center gap-2 text-[13px] font-semibold text-dark-text hover:text-accent transition-colors">
                Shop Furnishings
                <span className="bg-[#5CB85C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">New</span>
              </Link>

              <button className="flex items-center gap-1 text-gray-500 hover:text-dark-text ml-2">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                  <User size={14} />
                </div>
                <ChevronDown size={13} />
              </button>
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

        {/* ── BOTTOM ROW ── */}
        <div className="hidden lg:block border-t border-gray-100 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-14">
            <nav className="flex items-center gap-8 h-full">

              {/* How it Works */}
              <Link
                to="/about#process"
                className="text-[14px] font-medium text-gray-700 hover:text-accent transition-colors h-full flex items-center"
              >
                How it works
              </Link>

              {/* Offerings — image mega menu */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => setOfferingsOpen(true)}
                onMouseLeave={() => setOfferingsOpen(false)}
              >
                <Link
                  to="/catalog"
                  className={`flex items-center gap-1 text-[14px] font-medium transition-colors h-full ${offeringsOpen ? "text-accent" : "text-gray-700 hover:text-accent"}`}
                >
                  Offerings
                  <ChevronDown size={14} className={`transition-transform duration-200 ${offeringsOpen ? "rotate-180 text-accent" : "text-gray-400"}`} />
                </Link>
                <AnimatePresence>
                  {offeringsOpen && <OfferingsMega />}
                </AnimatePresence>
              </div>

              {/* The Modular Journey */}
              <Link
                to="#"
                className="text-[14px] font-medium text-gray-700 hover:text-accent transition-colors h-full flex items-center"
              >
                The Modular Journey
              </Link>

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

      {/* ── MOBILE DRAWER ── */}
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
                {/* Top nav links */}
                <div className="p-4 space-y-1 border-b border-gray-100">
                  {topNavLinks.map(link => (
                    link.label === "Store Locator" ? (
                      <a
                        key={link.label}
                        href="https://www.google.com/maps/search/JBF+Decor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg"
                      >
                        <Store size={14} className="text-accent" /> {link.label}
                      </a>
                    ) : (
                      <Link key={link.label} to={link.href} className="block px-4 py-3 text-sm font-semibold text-dark-text hover:bg-gray-50 rounded-lg">
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>

                {/* Bottom nav + Offerings accordion */}
                <div className="p-4 space-y-1">
                  <Link to="/about#process" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                    How it works
                  </Link>

                  {/* Offerings accordion */}
                  <div>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === "offerings" ? null : "offerings")}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Offerings
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "offerings" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === "offerings" && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden ml-4">
                          {offeringCategories.map(cat => (
                            <Link key={cat.label} to={cat.href} className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-500 hover:text-accent rounded-lg">
                              <img src={cat.image} alt={cat.label} className="w-8 h-8 rounded-md object-cover" />
                              <div>
                                <p className="font-medium text-dark-text">{cat.label}</p>
                                <p className="text-[10px] text-muted-text">{cat.count}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Magazine accordion */}
                  <div>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === "magazine" ? null : "magazine")}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Magazine
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "magazine" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === "magazine" && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden ml-4">
                          {magazineArticles.map(art => (
                            <Link key={art.label} to={art.href} className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-500 hover:text-accent rounded-lg">
                              <img src={art.image} alt={art.label} className="w-8 h-8 rounded-md object-cover flex-shrink-0" />
                              <div>
                                <p className="font-medium text-dark-text leading-none">{art.label}</p>
                                <p className="text-[10px] text-muted-text mt-0.5">{art.tag}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Cities accordion */}
                  <div>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === "cities" ? null : "cities")}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Cities
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "cities" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === "cities" && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden ml-4">
                          {cities.map(city => (
                            <a
                              key={city.name}
                              href={city.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-500 hover:text-accent rounded-lg"
                            >
                              <MapPin size={13} className="text-accent flex-shrink-0" />
                              <span className={`font-medium ${city.highlight ? "text-accent" : "text-dark-text"}`}>
                                {city.name} {city.highlight && "★"} — <span className="text-muted-text font-normal">{city.state}</span>
                              </span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="#" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                    The Modular Journey
                  </Link>
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
