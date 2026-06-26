import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

/* ─── Card ─── */
function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-card overflow-hidden shadow-card cursor-pointer"
    >
      <Link to={`/catalog?cat=${category.slug}`} className="block">
        {/* Image area */}
        <div className="relative h-72 md:h-80 lg:h-[360px] bg-gradient-to-br from-primary/80 to-primary-dark overflow-hidden">
          {/* Image placeholder with gradient */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              background: getGradient(index),
            }}
          />
          {/* Actual image (will be loaded when available) */}
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

          {/* Item count badge */}
          <div className="absolute top-5 right-5 glass rounded-full px-3 py-1.5 border border-white/20">
            <span className="text-xs text-white font-medium">{category.count} Items</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
              {category.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
              {category.description}
            </p>
            <motion.div
              initial={{ width: "0%" }}
              className="flex items-center gap-2 text-accent font-semibold text-sm"
            >
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                Explore {category.name}
              </span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Gradient helper ─── */
function getGradient(i) {
  const gradients = [
    "linear-gradient(135deg, #2E1A47 0%, #4a2a6e 100%)",
    "linear-gradient(135deg, #1a2a4a 0%, #2a4a6e 100%)",
    "linear-gradient(135deg, #2a1a10 0%, #5a3a1a 100%)",
    "linear-gradient(135deg, #1a2a1a 0%, #2a5a2a 100%)",
    "linear-gradient(135deg, #1a1a2a 0%, #3a2a5a 100%)",
    "linear-gradient(135deg, #2a2a1a 0%, #5a5a2a 100%)",
  ];
  return gradients[i % gradients.length];
}

/* ─── Section ─── */
export default function CategorySection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/catalog" className="btn-outline-accent">
              View All Categories <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
