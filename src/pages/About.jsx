import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Award, Users, Globe, Leaf } from "lucide-react";
import CTABanner from "../components/CTA/CTABanner";
import Process from "../components/Process/Process";

const values = [
  { icon: Award, title: "Uncompromising Quality", description: "Every piece goes through 23-point quality checks before leaving our factory." },
  { icon: Users, title: "Customer First", description: "Over 50,000 families trust us. Their satisfaction is our ultimate measure of success." },
  { icon: Globe, title: "Pan-India Presence", description: "15+ showrooms and delivery to every corner of India — from Kashmir to Kanyakumari." },
  { icon: Leaf, title: "Sustainable Crafting", description: "FSC-certified woods, eco-friendly finishes, and responsible sourcing practices." },
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* ── Hero ── */}
      <div className="bg-white pt-36 pb-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent">About</span>
          </div>
          <div className="max-w-2xl">
            <span className="section-label">Our Story</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 leading-tight">
              Crafting Luxury
              <span className="block italic text-accent">Since 2010</span>
            </h1>
            <div className="w-16 h-0.5 bg-accent mt-4 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed">
              JBF Decor was born from a simple belief — that every Indian home deserves
              world-class furniture without the world-class markup. We cut out the middlemen,
              built our own factory, and brought luxury to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mb-6">
                A Factory Built on
                <span className="italic text-accent"> Passion</span>
              </h2>
              <div className="space-y-4 text-muted-text leading-relaxed">
                <p>
                  Founded in 2010 in the furniture heartland of Mumbai, JBF Decor started
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
              <div className="h-[500px] rounded-card overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
                <img
                  src="/images/about/about-factory.jpg"
                  alt="JBF Decor Factory"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6 border border-white/20 backdrop-blur-md bg-white/80">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { num: "15+", label: "Years" },
                    { num: "500+", label: "Craftsmen" },
                    { num: "50K+", label: "Customers" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-heading font-bold text-2xl text-primary">{s.num}</p>
                      <p className="text-muted-text text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">
              Our Core
              <span className="italic text-accent"> Values</span>
            </h2>
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
                  className="bg-white p-8 rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 border border-accent/20">
                    <Icon size={26} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-dark-text mb-3">{v.title}</h3>
                  <p className="text-muted-text text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />

      {/* CTA */}
      <CTABanner />
    </motion.main>
  );
}
