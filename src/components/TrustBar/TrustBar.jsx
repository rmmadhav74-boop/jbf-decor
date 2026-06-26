import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

/* ─── Counter Item ─── */
function CounterItem({ end, suffix = "+", prefix = "", label, icon, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(isInView ? end : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-2xl border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300"
      >
        {icon}
      </motion.div>

      {/* Number */}
      <div className="flex items-baseline gap-1 mb-2">
        {prefix && <span className="font-heading font-bold text-3xl md:text-4xl text-primary">{prefix}</span>}
        <span className="font-heading font-bold text-3xl md:text-4xl text-primary">
          {count.toLocaleString("en-IN")}
        </span>
        <span className="font-heading font-bold text-2xl md:text-3xl text-accent">{suffix}</span>
      </div>

      {/* Label */}
      <p className="text-muted-text text-sm font-medium">{label}</p>
    </motion.div>
  );
}

/* ─── Trust Bar ─── */
const stats = [
  { end: 50000, suffix: "+", label: "Happy Customers", icon: "😊", delay: 0 },
  { end: 10, suffix: " Years", label: "Warranty on All Products", icon: "🛡️", delay: 0.1 },
  { end: 200, suffix: "+", label: "Expert Designers", icon: "🎨", delay: 0.2 },
  { end: 15, suffix: "+", label: "Showrooms Pan-India", icon: "🏬", delay: 0.3 },
  { end: 98, suffix: "%", label: "Customer Satisfaction", icon: "⭐", delay: 0.4 },
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Trusted by Thousands</span>
          <h2 className="section-title">
            India's Most Trusted
            <span className="block text-accent italic">Furniture Brand</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat) => (
            <CounterItem key={stat.label} {...stat} />
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6"
        >
          {[
            "🏭 Factory Direct — No Middleman",
            "✅ ISO 9001 Certified",
            "🚚 Free Pan-India Delivery",
            "🔧 Professional Installation",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 text-sm font-medium text-dark-text"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
