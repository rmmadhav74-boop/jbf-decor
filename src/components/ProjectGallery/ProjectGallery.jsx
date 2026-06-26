import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/testimonials";

const FILTERS = ["All", "Full Home", "Bedroom", "Living Room", "Kitchen", "Office", "Dining"];

/* ─── Project Card ─── */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-card overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${index === 0 ? "h-[480px]" : "h-64"}`}>
        {/* Gradient placeholder */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${getProjectGradient(index)} )`,
          }}
        />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 border border-white/20">
          <span className="text-xs text-white font-medium">{project.category}</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
            {project.location}
          </p>
          <h3 className="font-heading text-white font-bold text-xl md:text-2xl mb-3">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Project</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getProjectGradient(i) {
  const g = [
    "#1a0f2e 0%, #3d2460 100%",
    "#0f1520 0%, #1a2a4a 100%",
    "#1a1008 0%, #3a2010 100%",
    "#081510 0%, #102a18 100%",
    "#0f0f1a 0%, #1a1a3a 100%",
    "#1a1508 0%, #302a10 100%",
  ];
  return g[i % g.length];
}

/* ─── Section ─── */
export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Project
            <span className="italic text-accent"> Showcase</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            Every project is a unique story of transformation. Explore our portfolio of
            luxury interior design projects across India.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === f
                  ? "bg-accent text-white border-accent shadow-accent"
                  : "bg-transparent text-muted-text border-gray-200 hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline-accent">
            View All Projects <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
