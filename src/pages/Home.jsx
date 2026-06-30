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
import AboutSection from "../components/AboutSection/AboutSection";
import ContactFormSection from "../components/ContactFormSection/ContactFormSection";
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
      {/* ═══ HERO ═══ */}
      <div id="hero">
        <HeroSlider />
      </div>

      {/* ═══ Trust / Stats ═══ */}
      <TrustBar />

      {/* ═══════════════════════════════════════
         LOWER NAV SECTIONS (come first)
         Offerings → Design Ideas → Magazine → Projects
      ═══════════════════════════════════════ */}

      {/* Offerings — Featured Collections */}
      <FeaturedCollection />

      {/* Design Ideas — Browse by Room */}
      <CategorySection />

      {/* Why Choose JBF */}
      <WhyChooseUs />

      {/* Magazine — Design Inspiration */}
      <DesignIdeas />

      {/* Projects — Client Showcase */}
      <ShowcaseSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Product Collections (tabbed) */}
      <ProductCollections />

      {/* Video Section */}
      <VideoSection />

      {/* ═══════════════════════════════════════
         UPPER NAV SECTIONS (come after)
         How it works → Contact Us → Own a franchise
      ═══════════════════════════════════════ */}

      {/* How it works — About JBF Decor */}
      <AboutSection />

      {/* Contact Us — How We Work / 5-Step Process */}
      <Process />

      {/* Awards & Certifications */}
      <Awards />

      {/* FAQs */}
      <FAQ />

      {/* Own a franchise — Request a Free Quote */}
      <ContactFormSection />

      {/* CTA Banner */}
      <CTABanner />
    </motion.main>
  );
}
