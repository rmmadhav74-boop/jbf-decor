import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RefreshCcw,
  Package,
  Check,
} from "lucide-react";
import products from "../data/products";
import { generateWhatsAppLink } from "../utils/whatsapp";
import ProductCard from "../components/ProductCard/ProductCard";

const TABS = ["Description", "Dimensions", "Material", "Delivery", "Warranty"];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Description");
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-5xl mb-4">😕</p>
          <h2 className="font-heading text-2xl text-dark-text mb-4">Product not found</h2>
          <button onClick={() => navigate("/catalog")} className="btn-primary">
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = product.images || [product.image];
  const whatsappLink = generateWhatsAppLink(product.name, product.category, product.priceDisplay);

  const tabContent = {
    Description: product.description,
    Dimensions: `Length: ${product.dimensions.L} | Width: ${product.dimensions.W} | Height: ${product.dimensions.H}`,
    Material: product.material,
    Delivery: `Estimated delivery: ${product.deliveryDays}. Free delivery across India with professional installation included.`,
    Warranty: `${product.warrantyYears} Year Structural Warranty. Covers manufacturing defects and structural integrity. Does not cover normal wear and tear.`,
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-24 pb-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-text mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/catalog" className="hover:text-accent transition-colors">Catalog</Link>
          <ChevronRight size={14} />
          <Link to={`/catalog?cat=${product.categorySlug}`} className="hover:text-accent transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-dark-text font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* ── Main Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* ── Gallery ── */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative rounded-card overflow-hidden h-[400px] md:h-[520px] bg-gradient-to-br from-light-gray to-gray-200 group">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {product.badge && (
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-accent text-white text-sm font-semibold">
                  {product.badge}
                </div>
              )}
              {/* Wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
                  wishlist ? "bg-red-500 text-white" : "bg-white text-muted-text hover:text-red-500"
                }`}
              >
                <Heart size={18} fill={wishlist ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-accent shadow-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="lg:sticky lg:top-24 space-y-6 self-start">
            {/* Category */}
            <span className="section-label">{product.category}</span>

            {/* Name */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-text leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-dark-text">{product.rating}</span>
              <span className="text-sm text-muted-text">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-bold text-4xl text-primary">{product.priceDisplay}</span>
              <span className="text-muted-text text-sm">onwards</span>
            </div>

            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-accent" />

            {/* Description */}
            <p className="text-muted-text leading-relaxed">{product.description}</p>

            {/* Key specs */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Material", value: product.material },
                { label: "Dimensions", value: `${product.dimensions.L} × ${product.dimensions.W} × ${product.dimensions.H}` },
                { label: "Delivery", value: product.deliveryDays },
                { label: "Warranty", value: `${product.warrantyYears} Years` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-light-gray rounded-xl p-4">
                  <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-sm font-medium text-dark-text">{value}</p>
                </div>
              ))}
            </div>

            {/* Delivery info pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: Shield, label: `${product.warrantyYears}yr Warranty` },
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

            <button className="w-full btn-outline-accent py-4 text-base justify-center">
              Request Callback
            </button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="mb-16">
          <div className="flex gap-1 border-b border-gray-200 mb-6 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  activeTab === tab
                    ? "border-accent text-primary"
                    : "border-transparent text-muted-text hover:text-dark-text"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-text text-sm leading-relaxed p-6 bg-light-gray rounded-2xl"
          >
            {tabContent[activeTab]}
          </motion.div>
        </div>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="section-title mb-8">
              You May Also <span className="italic text-accent">Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.main>
  );
}
