import { motion } from "framer-motion";

/* ─── Gallery Photos ─── */
const galleryPhotos = [
  {
    id: "g1",
    src: "/images/design-ideas/luxury_living_room_1782855839726.png",
    alt: "Luxury Living Room with Gold Accents",
    span: "col-span-2 row-span-2",
    height: "h-[420px]",
  },
  {
    id: "g2",
    src: "/images/design-ideas/minimalist_bedroom_1782855849194.png",
    alt: "Minimalist Bedroom in Warm Tones",
    span: "",
    height: "h-[200px]",
  },
  {
    id: "g3",
    src: "/images/design-ideas/modern_penthouse_1782855858091.png",
    alt: "Modern Penthouse Interior",
    span: "",
    height: "h-[200px]",
  },
  {
    id: "g4",
    src: "/images/design-ideas/outdoor_lounge_1782855867476.png",
    alt: "Contemporary Outdoor Lounge",
    span: "",
    height: "h-[200px]",
  },
  {
    id: "g5",
    src: "/images/design-ideas/elegant_kitchen_1782855876410.png",
    alt: "Elegant Kitchen Design",
    span: "",
    height: "h-[200px]",
  },
  {
    id: "g6",
    src: "/images/design-ideas/dreamy_bedroom_1782855892698.png",
    alt: "Dreamy Bedroom Sanctuary",
    span: "col-span-2",
    height: "h-[280px]",
  },
  {
    id: "g7",
    src: "/images/design-ideas/rustic_dining_1782855901047.png",
    alt: "Rustic Dining Room",
    span: "",
    height: "h-[280px]",
  },
  {
    id: "g8",
    src: "/images/design-ideas/scandi_living_1782855910057.png",
    alt: "Scandinavian Living Space",
    span: "",
    height: "h-[280px]",
  },
  {
    id: "g9",
    src: "/images/design-ideas/art_deco_interior_1782855918921.png",
    alt: "Art Deco Inspired Interior",
    span: "col-span-2",
    height: "h-[280px]",
  },
];

/* ─── Photo Card ─── */
function PhotoCard({ photo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${photo.span} ${photo.height}`}
    >
      {/* Image */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Caption on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <p className="text-white font-heading font-semibold text-lg leading-tight drop-shadow-md">
          {photo.alt}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

/* ─── Section ─── */
export default function DesignIdeas() {
  return (
    <section id="magazine" className="py-24 bg-light-gray scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Design Inspiration</span>
          <h2 className="section-title">
            Latest Design
            <span className="block italic text-accent">Ideas & Trends</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            Explore our curated gallery of stunning interior designs — from luxury living rooms to serene bedrooms and modern kitchens.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryPhotos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
