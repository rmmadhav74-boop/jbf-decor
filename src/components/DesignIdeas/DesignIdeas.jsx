import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { designIdeas } from "../../data/testimonials";

/* ─── Blog Card ─── */
function BlogCard({ idea, index, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 bg-white flex flex-col ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          featured ? "md:w-1/2 h-64 md:h-auto" : "h-56"
        }`}
        style={{
          background: getGradient(index),
        }}
      >
        <img
          src={idea.image}
          alt={idea.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
          {idea.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-muted-text text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {idea.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {idea.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-dark-text mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
          {idea.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-text text-sm leading-relaxed mb-5 line-clamp-2">
          {idea.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-muted-text">By {idea.author}</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-300">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function getGradient(i) {
  const g = [
    "linear-gradient(135deg, #2E1A47 0%, #4a2a6e 100%)",
    "linear-gradient(135deg, #1a2a4a 0%, #2a4a6e 100%)",
    "linear-gradient(135deg, #2a1a10 0%, #5a3a1a 100%)",
  ];
  return g[i % g.length];
}

/* ─── Section ─── */
export default function DesignIdeas() {
  return (
    <section id="magazine" className="py-24 bg-light-gray scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Design Inspiration</span>
            <h2 className="section-title">
              Latest Design
              <span className="block italic text-accent">Ideas & Trends</span>
            </h2>
            <div className="accent-divider mt-2" />
          </motion.div>
        </div>

        {/* Grid — magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designIdeas.map((idea, i) => (
            <BlogCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
