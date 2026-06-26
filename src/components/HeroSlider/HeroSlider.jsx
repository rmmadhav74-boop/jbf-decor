import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, ArrowRight, MessageCircle, Star, CheckCircle } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const STATS = [
  { value: "500+", label: "Projects Done" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Happy Clients" },
];

const FEATURES = [
  "Premium Interior Design",
  "Custom Furniture & Furnishing",
  "Turnkey Home Solutions",
];

export default function HeroSlider() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    projectType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", city: "", projectType: "" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0d0d0d]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      {/* Multi-layer overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col text-white max-w-xl">
            {/* Tag */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm w-max mb-6">
              <Star size={13} className="text-accent fill-accent" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/90">Premium Interior Design</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-heading font-bold leading-[1.08] mb-6 text-shadow"
            >
              Transforming<br />
              Spaces Into{" "}
              <span className="text-accent italic font-light">Timeless</span>
              <br />
              Experiences
            </motion.h1>

            {/* Feature list */}
            <motion.ul {...fadeUp(0.2)} className="space-y-3 text-white/85 text-base mb-10">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle size={17} className="text-accent flex-shrink-0" />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons — mobile only (desktop uses the form) */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4 mb-10 lg:hidden">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-all flex items-center gap-2 shadow-accent text-sm"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/catalog"
                className="px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold rounded-full hover:bg-white/20 transition-all text-sm"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-8 md:gap-10 pt-4 border-t border-white/10"
            >
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-accent text-xl md:text-2xl font-bold leading-none">{value}</div>
                  <div className="text-white/60 text-xs font-medium mt-1">{label}</div>
                </div>
              ))}
              <div className="flex items-center gap-2 ml-auto lg:ml-0">
                <a
                  href="https://wa.me/917597710533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <MessageCircle size={18} className="text-white" />
                </a>
                <span className="text-white/60 text-xs font-medium">WhatsApp Us</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Glow decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/15 rounded-full blur-[60px] pointer-events-none" />

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[11px] font-bold tracking-[0.22em] uppercase">Quick Enquiry</span>
                  <div className="h-px w-8 bg-accent" />
                </div>
                <h3 className="text-2xl sm:text-[28px] font-heading font-bold text-white leading-tight mb-1.5">
                  Get a Free Consultation
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Tell us about your dream space. We'll make it reality.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Thank you!</p>
                  <p className="text-white/60 text-sm mt-1">We'll reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
                    { key: "city", label: "City", type: "text", placeholder: "Your city" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-[10px] font-bold text-white/45 uppercase tracking-widest mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        value={formData[key]}
                        onChange={(e) => setFormData((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none focus:border-accent focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] font-bold text-white/45 uppercase tracking-widest mb-1.5">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData((p) => ({ ...p, projectType: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 appearance-none outline-none focus:border-accent transition-all cursor-pointer text-sm"
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="living-room">Living Room</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="full-home">Full Home Interiors</option>
                        <option value="kitchen">Modular Kitchen</option>
                        <option value="office">Office</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                        <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-2 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-all flex items-center justify-center gap-2.5 shadow-accent text-sm tracking-wide"
                  >
                    Book Free Consultation <ArrowRight size={17} />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-white/35 text-[11px]">
                    <Lock size={11} />
                    <span>Your information is 100% private & secure</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
