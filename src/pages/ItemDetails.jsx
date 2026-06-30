import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, Truck, Shield, Package, RefreshCcw } from "lucide-react";
import { getItemById } from "../data/categoryItems";
import { generateQuoteLink } from "../utils/whatsapp";

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-5xl mb-4">😕</p>
          <h2 className="font-heading text-2xl text-dark-text mb-4">Item not found</h2>
          <button onClick={() => navigate(-1)} className="btn-primary">Go Back</button>
        </div>
      </div>
    );
  }

  const whatsappLink = generateQuoteLink(`I'm interested in: ${item.name} (${item.category})\n\nPlease share more details, pricing, and customization options.`);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-24 pb-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-text mb-8 flex-wrap">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/category/${item.categorySlug}`} className="hover:text-accent transition-colors">
            {item.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-dark-text font-medium truncate max-w-[200px]">{item.name}</span>
        </div>

        {/* ── Main Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* ── Image ── */}
          <div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[520px] bg-gradient-to-br from-light-gray to-gray-200 group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>

          {/* ── Info ── */}
          <div className="lg:sticky lg:top-24 space-y-6 self-start">
            {/* Category */}
            <span className="section-label">{item.category}</span>

            {/* Name */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-text leading-tight">
              {item.name}
            </h1>

            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-accent" />

            {/* Description */}
            <p className="text-muted-text leading-relaxed text-lg">
              {item.description}
            </p>

            {/* Material */}
            {item.material && (
              <div className="bg-light-gray rounded-xl p-5">
                <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">Material</p>
                <p className="text-base font-medium text-dark-text">{item.material}</p>
              </div>
            )}

            {/* Delivery info pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: Shield, label: "Quality Guaranteed" },
                { icon: Package, label: "Free Installation" },
                { icon: RefreshCcw, label: "Easy Returns" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-medium text-dark-text"
                >
                  <Icon size={14} className="text-accent" />
                  {label}
                </div>
              ))}
            </div>

            {/* Price note */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
              <p className="text-sm font-medium text-dark-text mb-1">💬 Get the Best Price</p>
              <p className="text-xs text-muted-text">
                We offer factory-direct pricing with full customization options. Reach out to us on WhatsApp for a personalized quote.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-whatsapp justify-center py-4 text-base"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
