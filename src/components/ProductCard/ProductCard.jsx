import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { generateWhatsAppLink } from "../../utils/whatsapp";

/* ─── ProductCard Component ─── */
export default function ProductCard({ product, hidePrice = false }) {
  const [wishlist, setWishlist] = useState(false);

  const whatsappLink = generateWhatsAppLink(
    product.name,
    product.category,
    !hidePrice ? product.priceDisplay : undefined
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden group flex flex-col"
    >
      {/* ── Image ── */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden h-64 md:h-72 bg-gradient-to-br from-light-gray to-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.parentElement.style.background =
                "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)";
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold shadow-md">
              {product.badge}
            </div>
          )}

          {/* Quick view overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="flex items-center justify-center gap-2 w-full py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
              <Eye size={14} /> Quick View
            </span>
          </div>
        </div>
      </Link>

      {/* Wishlist button */}
      <button
        onClick={() => setWishlist(!wishlist)}
        className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md z-10 ${
          wishlist ? "bg-red-500 text-white" : "bg-white text-muted-text hover:bg-red-50 hover:text-red-500"
        }`}
        aria-label="Add to wishlist"
      >
        <Heart size={16} fill={wishlist ? "currentColor" : "none"} />
      </button>

      {/* ── Info ── */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </span>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading font-semibold text-lg text-dark-text mb-2 hover:text-primary transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Material */}
        <p className="text-muted-text text-xs mb-3 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {product.material}
        </p>

        {/* Description */}
        <p className="text-muted-text text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {!hidePrice ? (
          <>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.round(product.rating) ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-text">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="font-heading font-bold text-2xl text-primary">
                  {product.priceDisplay}
                </span>
                <span className="text-muted-text text-xs ml-2">onwards</span>
              </div>
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                {product.inStock ? "In Stock" : "On Order"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-auto">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 btn-outline-accent text-center justify-center py-2.5 text-sm flex items-center"
              >
                View Details
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-whatsapp justify-center py-2.5 text-sm flex items-center"
              >
                <MessageCircle size={14} className="mr-1" />
                Enquire
              </a>
            </div>
          </>
        ) : (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp justify-center py-2.5 text-sm mt-auto flex items-center"
          >
            <MessageCircle size={14} className="mr-1" />
            Enquire on WhatsApp
          </a>
        )}
      </div>
    </motion.div>
  );
}
