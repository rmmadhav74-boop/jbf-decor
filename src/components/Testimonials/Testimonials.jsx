import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ─── Testimonial Card ─── */
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-card shadow-card p-7 flex flex-col gap-5 relative overflow-hidden h-full">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-[100px]" />

      {/* Quote icon */}
      <Quote
        size={36}
        className="text-accent/20 absolute top-5 left-5"
        fill="currentColor"
      />

      {/* Stars */}
      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-dark-text text-sm leading-relaxed relative z-10 flex-1 italic">
        "{testimonial.quote}"
      </p>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-accent/30" />

      {/* Profile */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 border-2 border-accent/20">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.parentElement.innerHTML = `<span class="w-full h-full flex items-center justify-center text-primary font-bold text-lg">${testimonial.name[0]}</span>`;
            }}
          />
        </div>

        <div>
          <p className="font-semibold text-dark-text text-sm">{testimonial.name}</p>
          <p className="text-muted-text text-xs">{testimonial.location}</p>
          <p className="text-accent text-xs font-medium mt-0.5">{testimonial.project}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label">Real Stories</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What Our Customers
              <span className="block italic text-accent"> Are Saying</span>
            </h2>
            <div className="accent-divider mt-2" />
          </div>

          {/* Custom nav */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto pb-2">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="testimonial-pagination flex justify-center gap-2 mt-8" />
      </div>
    </section>
  );
}
