import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard/ProductCard";

const STYLES = ["All", "Modern", "Minimal", "Classic", "Industrial"];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStyle, setActiveStyle] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [view, setView] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Style
    if (activeStyle !== "All") {
      result = result.filter((p) => p.style === activeStyle);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [search, activeCategory, activeStyle, sortBy]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* ── Page Hero ── */}
      <div className="bg-white pt-36 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3"
          >
            Furniture Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mt-4 max-w-xl mx-auto"
          >
            Discover {products.length}+ premium furniture pieces across {categories.length} categories
          </motion.p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-4 text-white/40 text-sm">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Catalog</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        {/* ── Search + Controls ── */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search furniture, materials…"
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-white outline-none focus:border-accent text-sm text-dark-text transition-colors shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-text hover:text-dark-text"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3.5 rounded-full border border-gray-200 bg-white outline-none focus:border-accent text-sm text-dark-text cursor-pointer shadow-sm"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          {/* View toggle */}
          <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 p-1 shadow-sm">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-full transition-colors ${view === "grid" ? "bg-accent text-white" : "text-muted-text"}`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-full transition-colors ${view === "list" ? "bg-accent text-white" : "text-muted-text"}`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>

        {/* ── Category Pills ── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-text border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Style Pills ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {STYLES.map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                activeStyle === style
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-muted-text border-gray-200 hover:border-accent hover:text-accent"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* ── Results count ── */}
        <p className="text-muted-text text-sm mb-6">
          Showing <span className="font-semibold text-dark-text">{filtered.length}</span> products
        </p>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`grid gap-6 ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-6xl mb-4">🛋️</p>
              <h3 className="font-heading text-2xl text-dark-text mb-2">No products found</h3>
              <p className="text-muted-text">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); setActiveStyle("All"); }}
                className="mt-6 btn-outline-accent"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
