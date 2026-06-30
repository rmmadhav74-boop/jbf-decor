import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ZoomIn } from "lucide-react";

const showcaseProjects = [
  {
    id: "s-01",
    title: "Modern 4BHK Penthouse",
    subtitle: "Full Home Interior",
    location: "South Mumbai",
    category: "Full Home",
    budget: "₹45L+",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    accent: "#EB595F",
  },
  {
    id: "s-02",
    title: "Contemporary Bedroom Suite",
    subtitle: "Master Bedroom Design",
    location: "Bandra, Mumbai",
    category: "Bedroom",
    budget: "₹12L",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
    accent: "#9333ea",
  },
  {
    id: "s-03",
    title: "Luxury Living Room",
    subtitle: "Living Space Makeover",
    location: "Gurgaon, Delhi NCR",
    category: "Living Room",
    budget: "₹18L",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    accent: "#EB595F",
  },
  {
    id: "s-04",
    title: "Minimal Modular Kitchen",
    subtitle: "Kitchen Redesign",
    location: "Bengaluru",
    category: "Kitchen",
    budget: "₹9L",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200",
    accent: "#9333ea",
  },
  {
    id: "s-05",
    title: "Executive Office Space",
    subtitle: "Commercial Interior",
    location: "Hyderabad",
    category: "Office",
    budget: "₹22L",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    accent: "#EB595F",
  },
  {
    id: "s-06",
    title: "Classic Dining Experience",
    subtitle: "Dining Room Design",
    location: "Pune",
    category: "Dining",
    budget: "₹8L",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200",
    accent: "#9333ea",
  },
  {
    id: "s-07",
    title: "Scandinavian Studio Apartment",
    subtitle: "Complete Home Interior",
    location: "Kochi, Kerala",
    category: "Full Home",
    budget: "₹15L",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
    accent: "#EB595F",
  },
  {
    id: "s-08",
    title: "Heritage Villa Restoration",
    subtitle: "Luxury Renovation",
    location: "Jaipur, Rajasthan",
    category: "Full Home",
    budget: "₹65L+",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    accent: "#9333ea",
  },
  {
    id: "s-09",
    title: "Boutique Hotel Lobby",
    subtitle: "Hospitality Interior",
    location: "Udaipur, Rajasthan",
    category: "Commercial",
    budget: "₹35L",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200",
    accent: "#EB595F",
  },
  {
    id: "s-10",
    title: "Penthouse Terrace Garden",
    subtitle: "Outdoor Living",
    location: "Noida, Delhi NCR",
    category: "Outdoor",
    budget: "₹11L",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200",
    accent: "#9333ea",
  },
];

/* ── Lightbox ── */
function Lightbox({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow"
        >
          <X size={18} />
        </button>
        <div className="aspect-video w-full bg-gray-100">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{project.subtitle}</p>
              <h3 className="font-heading text-2xl font-bold text-dark-text mb-1">{project.title}</h3>
              <div className="flex items-center gap-2 text-muted-text text-sm">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-text font-medium uppercase tracking-wide">Project Value</p>
              <p className="text-2xl font-heading font-bold text-dark-text">{project.budget}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card ── */
function ShowcaseCard({ project, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-card hover:shadow-card-hover"
      onClick={() => onView(project)}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
          <span className="text-xs text-white font-semibold">{project.category}</span>
        </div>

        {/* Zoom icon on hover */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ZoomIn size={15} className="text-white" />
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider mb-1">
            <MapPin size={11} />
            {project.location}
          </div>
          <h3 className="font-heading text-white font-bold text-lg leading-tight mb-2">{project.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-xs font-medium">{project.subtitle}</span>
            <span className="text-white font-bold text-sm bg-accent/80 px-2.5 py-0.5 rounded-full">{project.budget}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function ShowcaseSection() {
  const [lightboxProject, setLightboxProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 md:py-28 bg-white scroll-mt-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Our Work</span>
            <h2 className="section-title">
              Client{" "}
              <span className="italic text-accent">Showcase</span>
            </h2>
            <div className="accent-divider mx-auto mt-2 mb-4" />
            <p className="section-subtitle max-w-xl mx-auto">
              Every project is a unique story of transformation. Explore our portfolio of
              luxury interior design projects across India.
            </p>
          </motion.div>

          {/* Grid — no filter, all 10 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {showcaseProjects.map((project, i) => (
              <ShowcaseCard key={project.id} project={project} index={i} onView={setLightboxProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
