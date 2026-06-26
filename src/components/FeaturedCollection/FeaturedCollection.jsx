import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedCollection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Curated for You</span>
            <h2 className="section-title">
              Featured
              <span className="block italic text-accent">Collections</span>
            </h2>
            <div className="accent-divider mt-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {/* Custom nav buttons */}
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
            <Link to="/catalog" className="btn-outline-accent ml-2">
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
