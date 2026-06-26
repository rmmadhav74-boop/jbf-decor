import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { generateQuoteLink } from "../../utils/whatsapp";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">Limited Time Offer — Free Home Visit</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Home
            <span className="block italic text-accent">Starting Today</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8" />

          {/* Subheading */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Get a free design consultation, 3D renders, and a no-obligation quote for
            your dream home. Our experts are ready to make your vision a reality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-10 py-4 min-w-[200px] justify-center">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href={generateQuoteLink("I'd like a free home consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-10 py-4 min-w-[200px] justify-center"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-sm">
            <span>✓ No obligation</span>
            <span>✓ Free home visit</span>
            <span>✓ 10 year warranty</span>
            <span>✓ EMI available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
