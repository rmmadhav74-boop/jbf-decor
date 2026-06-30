import { motion } from "framer-motion";
import { Award, Users, Globe, Leaf, Heart, Gem, Factory, Shield } from "lucide-react";

const values = [
  { icon: Award, title: "Uncompromising Quality", description: "Every piece goes through 23-point quality checks before leaving our factory." },
  { icon: Users, title: "Customer First", description: "Over 50,000 families trust us. Their satisfaction is our ultimate measure of success." },
  { icon: Globe, title: "Pan-India Presence", description: "15+ showrooms and delivery to every corner of India — from Kashmir to Kanyakumari." },
  { icon: Leaf, title: "Sustainable Crafting", description: "FSC-certified woods, eco-friendly finishes, and responsible sourcing practices." },
];

const stats = [
  { num: "15+", label: "Years of Excellence" },
  { num: "500+", label: "Skilled Craftsmen" },
  { num: "50K+", label: "Happy Customers" },
  { num: "15+", label: "Showrooms" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            About
            <span className="italic text-accent"> JBF Decor</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Born from a passion for craftsmanship, JBF Decor has been transforming Indian homes since 2010 with factory-direct luxury furniture.
          </p>
        </motion.div>

        {/* Story + Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-3xl text-dark-text mb-6">
              A Factory Built on
              <span className="italic text-accent"> Passion</span>
            </h3>
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p>
                Founded in 2010 in the furniture heartland of India, JBF Decor started
                as a small workshop with 12 craftsmen and a big dream. Today, we operate
                from a 2-lakh sq. ft. state-of-the-art manufacturing facility with over
                500 skilled artisans.
              </p>
              <p>
                Our factory-direct model means you pay for the furniture, not the markup.
                We design, manufacture, deliver, and install — all under one roof. This
                gives us complete control over quality at every step.
              </p>
              <p>
                From solid teak beds to Italian leather sofas, every piece is crafted with
                the same obsession for detail that has earned us the trust of 50,000+
                families across India.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800"
                alt="JBF Decor Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="grid grid-cols-4 gap-4 text-center">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading font-bold text-2xl text-accent">{s.num}</p>
                    <p className="text-muted-text text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">What Drives Us</span>
            <h3 className="section-title">
              Our Core
              <span className="italic text-accent"> Values</span>
            </h3>
            <div className="accent-divider mx-auto mt-2" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-light-gray p-8 rounded-2xl hover:shadow-lg transition-all duration-400 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                    <Icon size={26} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-dark-text mb-3">{v.title}</h4>
                  <p className="text-muted-text text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
