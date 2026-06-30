import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { collections } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

const TABS = ["Modern", "Minimal", "Classic", "Industrial"];

export default function ProductCollections() {
  const [activeTab, setActiveTab] = useState("Modern");
  const products = collections[activeTab] || [];

  return (
    <section id="shop-by-style" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-label">Shop by Style</span>
          <h2 className="section-title">
            Luxury
            <span className="italic text-accent"> Product Collections</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            Explore our curated collections across four timeless design philosophies.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-card"
                  : "bg-white text-muted-text border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-primary -z-10"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-muted-text text-lg">
                  Coming soon — more {activeTab} pieces being crafted.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
      </div>
    </section>
  );
}
