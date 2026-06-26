import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TrustBar from "../components/TrustBar/TrustBar";
import CategorySection from "../components/CategorySection/CategorySection";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ShowcaseSection from "../components/ShowcaseSection/ShowcaseSection";
import Testimonials from "../components/Testimonials/Testimonials";
import Process from "../components/Process/Process";
import ProductCollections from "../components/ProductCollections/ProductCollections";
import VideoSection from "../components/VideoSection/VideoSection";
import DesignIdeas from "../components/DesignIdeas/DesignIdeas";
import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import CTABanner from "../components/CTA/CTABanner";


/* ─── Page transition variants ─── */
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* 1 — Hero */}
      <HeroSlider />

      {/* 2 — Trust / Stats */}
      <TrustBar />

      {/* 3 — Furniture Categories */}
      <CategorySection />

      {/* 4 — Featured Collection Slider */}
      <FeaturedCollection />

      {/* 5 — Why Choose JBF */}
      <WhyChooseUs />

      {/* 6 — Project Showcase (client portfolio) */}
      <ShowcaseSection />

      {/* 7 — Testimonials */}
      <Testimonials />

      {/* 8 — Process */}
      <Process />

      {/* 9 — Product Collections (tabbed) */}
      <ProductCollections />

      {/* 10 — Video Section */}
      <VideoSection />

      {/* 11 — Design Ideas / Blog */}
      <DesignIdeas />

      {/* 12 — Awards & Certifications */}
      <Awards />

      {/* 13 — FAQs */}
      <FAQ />

      {/* 14 — CTA Banner */}
      <CTABanner />
    </motion.main>
  );
}
