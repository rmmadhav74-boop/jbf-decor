import { motion } from "framer-motion";
import {
  MessageCircle,
  PenTool,
  Factory,
  CheckCircle,
  Truck,
} from "lucide-react";
import { processSteps } from "../../data/testimonials";

const iconMap = {
  MessageCircle,
  PenTool,
  Factory,
  CheckCircle,
  Truck,
};

/* ─── Step Card ─── */
function StepCard({ step, index, total }) {
  const Icon = iconMap[step.icon] || MessageCircle;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10 z-0" />
      )}

      {/* Step number + Icon */}
      <div className="relative z-10 mb-6">
        {/* Outer ring */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-card group-hover:shadow-accent transition-shadow duration-300"
        >
          <Icon size={32} className="text-accent" strokeWidth={1.5} />
        </motion.div>
        {/* Step badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center border-2 border-white shadow-md">
          <span className="text-white text-xs font-bold">{step.step}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-semibold text-lg text-dark-text mb-3 group-hover:text-primary transition-colors">
        {step.title}
      </h3>
      <p className="text-muted-text text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Process() {
  return (
    <section id="contact-us" className="py-24 bg-light-gray relative overflow-hidden scroll-mt-32">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Our Simple
            <span className="italic text-accent"> 5-Step Process</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            From your first consultation to the final installation — we make
            creating your dream home effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {processSteps.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              index={i}
              total={processSteps.length}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-text text-base mb-6">
            Ready to start your transformation journey?
          </p>
          <a
            href="https://wa.me/917597710533?text=Hello%20JBF%20Decor!%20I'd%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
