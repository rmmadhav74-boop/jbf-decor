import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">See It Live</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Experience the
            <span className="italic text-accent"> JBF Decor</span> Difference
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Watch how we transform ordinary spaces into extraordinary homes — from concept to completion.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-card overflow-hidden shadow-2xl group cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          {/* Thumbnail */}
          <div className="relative h-[300px] md:h-[480px] bg-gradient-to-br from-primary-dark to-primary-light">
            {/* Placeholder thumbnail */}
            <img
              src="/images/video/video-thumbnail.jpg"
              alt="JBF Decor Showroom Tour"
              className="w-full h-full object-cover opacity-80"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Play Button */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Ripple rings */}
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                  <div className="absolute -inset-3 rounded-full bg-accent/20 animate-pulse" />

                  {/* Play circle */}
                  <div className="relative w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center border-2 border-accent shadow-accent">
                    <Play size={30} className="text-white ml-1" fill="white" />
                  </div>
                </motion.div>
              </div>
            )}

            {/* YouTube embed */}
            {playing && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="JBF Decor Showroom Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Bottom caption */}
            {!playing && (
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                  ▶ Showroom Tour
                </p>
                <h3 className="text-white font-heading text-2xl font-bold">
                  Inside JBF Decor's World-Class Manufacturing Facility
                </h3>
              </div>
            )}
          </div>
        </motion.div>

        {/* Stats below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-3xl mx-auto text-center"
        >
          {[
            { num: "2 Lakh+", label: "Sq. Ft. Factory" },
            { num: "500+", label: "Skilled Craftsmen" },
            { num: "12+", label: "Awards Won" },
            { num: "15+", label: "Years of Excellence" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-heading font-bold text-2xl md:text-3xl text-accent">{s.num}</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
