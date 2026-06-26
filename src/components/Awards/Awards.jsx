import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { awards } from "../../data/testimonials";

import "swiper/css";

/* ─── Award Logo ─── */
function AwardLogo({ award }) {
  return (
    <div className="flex items-center justify-center h-24 px-8 grayscale hover:grayscale-0 transition-all duration-500 group">
      <img
        src={award.image}
        alt={award.name}
        className="max-h-16 max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
        onError={(e) => {
          // Fallback text logo
          e.currentTarget.parentElement.innerHTML = `
            <div class="flex flex-col items-center justify-center text-center px-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 border border-primary/20 group-hover:border-accent/50 transition-colors">
                <span class="text-primary font-bold text-lg">🏆</span>
              </div>
              <span class="text-xs font-medium text-muted-text">${award.name}</span>
            </div>
          `;
        }}
      />
    </div>
  );
}

/* ─── Section ─── */
export default function Awards() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-title">
            Awards &amp;
            <span className="italic text-accent"> Certifications</span>
          </h2>
          <div className="accent-divider mx-auto mt-2" />
          <p className="section-subtitle max-w-xl mx-auto">
            Recognized by India's leading industry bodies for our commitment to quality,
            innovation, and customer satisfaction.
          </p>
        </motion.div>

        {/* Award logos — infinite scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={0}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            allowTouchMove={false}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="awards-swiper"
          >
            {[...awards, ...awards].map((award, i) => (
              <SwiperSlide key={`${award.id}-${i}`}>
                <AwardLogo award={award} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {[
            "🏅 ISO 9001:2015 Certified",
            "🌿 FSC Certified Wood",
            "♻️ GREENGUARD Certified",
            "🔒 BIS Compliant",
          ].map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-dark-text hover:border-accent hover:bg-accent/5 transition-colors duration-300"
            >
              {cert}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
