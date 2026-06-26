import { motion } from "framer-motion";
import {
  Factory,
  Gem,
  Settings,
  UserCheck,
  Wrench,
  Shield,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Factory Direct",
    description:
      "No middlemen, no markups. Get premium furniture straight from our factory at honest prices.",
    color: "from-purple-500/20 to-primary/20",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description:
      "Only the finest hardwoods, fabrics, and metals — carefully selected for longevity and beauty.",
    color: "from-accent/20 to-yellow-500/20",
  },
  {
    icon: Settings,
    title: "100% Customizable",
    description:
      "Choose your dimensions, materials, colors, and finishes. Every piece tailored to your vision.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: UserCheck,
    title: "Expert Designers",
    description:
      "Our in-house design team brings over 15 years of luxury interior expertise to every project.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our trained installation team ensures every piece is set up perfectly in your home.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Shield,
    title: "10 Year Warranty",
    description:
      "We stand behind every product with a comprehensive 10-year structural warranty.",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "White-glove delivery across all major cities in India — at absolutely no extra charge.",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

/* ─── Feature Card ─── */
function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group p-7 rounded-card bg-white shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 border border-accent/20 group-hover:border-accent/40 transition-colors duration-300"
        >
          <Icon size={26} className="text-accent" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-xl text-dark-text mb-3 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-muted-text text-sm leading-relaxed">{feature.description}</p>

        {/* Bottom accent */}
        <div className="mt-5 w-8 h-0.5 bg-accent/30 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-light-gray relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Advantage</span>
          <h2 className="section-title">
            Why Choose
            <span className="italic text-accent"> JBF Decor</span>?
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-2xl mx-auto">
            We combine factory-direct pricing with world-class craftsmanship to deliver an
            unmatched furniture buying experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
