import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle } from "lucide-react";
import { getItemsByCategory } from "../data/categoryItems";
import { categories } from "../data/categories";
import { generateQuoteLink } from "../utils/whatsapp";

/* ─── Item Card ─── */
function ItemCard({ item, index }) {
  const whatsappLink = generateQuoteLink(`I'm interested in: ${item.name} (${item.category})`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col"
    >
      <Link to={`/item/${item.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Info */}
        <div className="p-5 flex-1 flex flex-col">
          <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
            {item.category}
          </span>
          <h3 className="font-heading font-semibold text-lg text-dark-text mb-2 group-hover:text-accent transition-colors leading-snug">
            {item.name}
          </h3>
          <p className="text-muted-text text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {item.description}
          </p>
          {item.material && (
            <p className="text-xs text-muted-text mb-4 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {item.material}
            </p>
          )}
        </div>
      </Link>

      {/* Enquire Button */}
      <div className="px-5 pb-5">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-whatsapp justify-center py-3 text-sm"
        >
          <MessageCircle size={16} />
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Category Page ─── */
export default function CategoryPage() {
  const { slug } = useParams();
  const items = getItemsByCategory(slug);
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-5xl mb-4">😕</p>
          <h2 className="font-heading text-2xl text-dark-text mb-4">Category not found</h2>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light-gray pt-24 pb-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-text mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-dark-text font-medium">{category.name}</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">{category.name}</span>
          <h1 className="section-title">
            {category.name}
            <span className="italic text-accent"> Collection</span>
          </h1>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            {category.description}
          </p>
          <p className="text-sm text-accent font-semibold mt-2">{items.length} Items</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
