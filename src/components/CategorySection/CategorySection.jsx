import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

/* ─── Gradient helper ─── */
const gradients = [
  "linear-gradient(135deg, #2E1A47 0%, #4a2a6e 100%)",
  "linear-gradient(135deg, #1a2a4a 0%, #2a4a6e 100%)",
  "linear-gradient(135deg, #2a1a10 0%, #5a3a1a 100%)",
  "linear-gradient(135deg, #1a2a1a 0%, #2a5a2a 100%)",
  "linear-gradient(135deg, #1a1a2a 0%, #3a2a5a 100%)",
  "linear-gradient(135deg, #2a2a1a 0%, #5a5a2a 100%)",
];

/* ─── Card ─── */
function CategoryCard({ category, index, isFeatured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 cursor-pointer"
    >
      <Link to={`/catalog?cat=${category.slug}`} className="block">
        {/* Image area */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "h-80 md:h-96 lg:h-[420px]" : "h-64 md:h-72 lg:h-80"
          }`}
        >
          {/* Fallback gradient */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ background: gradients[index % gradients.length] }}
          />
          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Item count badge */}
          <div className="absolute top-5 right-5 glass rounded-full px-3.5 py-1.5 border border-white/20 backdrop-blur-md">
            <span className="text-xs text-white font-semibold">
              {category.count} Items
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <h3
              className={`font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 ${
                isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
              }`}
            >
              {category.name}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category.description}
            </p>
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Explore {category.name}
              </span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function CategorySection() {
  // Split categories: first 2 featured (large), remaining 4 compact
  const featured = categories.slice(0, 2);
  const compact = categories.slice(2);

  return (
    <section id="design-ideas" className="py-20 bg-light-gray scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Browse by Room</span>
            <h2 className="section-title">
              Furniture for
              <span className="block italic text-accent"> Every Space</span>
            </h2>
            <div className="accent-divider mt-2" />
          </motion.div>
        </div>

        {/* Featured row — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              isFeatured={true}
            />
          ))}
        </div>

        {/* Compact row — 4 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compact.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i + 2}
              isFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
