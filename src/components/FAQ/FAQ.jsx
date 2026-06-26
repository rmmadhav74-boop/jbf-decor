import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../data/testimonials";

/* ─── FAQ Item ─── */
function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-accent/40 transition-colors duration-300 shadow-sm"
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold border border-accent/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Text */}
          <span className={`font-heading font-semibold text-base md:text-lg leading-snug transition-colors duration-200 ${open ? "text-primary" : "text-dark-text"}`}>
            {faq.question}
          </span>
        </div>

        {/* Icon */}
        <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-accent text-white" : "bg-light-gray text-muted-text hover:bg-accent/10 hover:text-accent"}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 ml-12">
              <p className="text-muted-text text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label">Got Questions?</span>
            <h2 className="section-title mb-6">
              Frequently
              <span className="block italic text-accent">Asked Questions</span>
            </h2>
            <div className="accent-divider" />
            <p className="text-muted-text text-base leading-relaxed mt-6 mb-8">
              Can't find the answer you're looking for? Our team is happy to help.
              Chat with us on WhatsApp or give us a call.
            </p>

            {/* CTA */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
              <br />
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors mt-4"
              >
                📞 +91 99999 99999
              </a>
            </div>

            {/* Decorative */}
            <div className="mt-10 p-6 rounded-card bg-white text-white">
              <p className="font-heading text-lg font-bold mb-2">Still not sure?</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Book a free home consultation and let our experts guide you through the entire process.
              </p>
              <a
                href="https://wa.me/919999999999?text=I'd%20like%20to%20book%20a%20free%20consultation"
                className="inline-block mt-4 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                Book Free Visit →
              </a>
            </div>
          </motion.div>

          {/* Right — FAQ list */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
