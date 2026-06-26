import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";

/* ─── Footer Links Data ─── */
const footerLinks = {
  Products: [
    { label: "Living Room", href: "/catalog?cat=living-room" },
    { label: "Bedroom", href: "/catalog?cat=bedroom" },
    { label: "Dining", href: "/catalog?cat=dining" },
    { label: "Office", href: "/catalog?cat=office" },
    { label: "Outdoor", href: "/catalog?cat=outdoor" },
    { label: "Storage", href: "/catalog?cat=storage" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/#projects" },
    { label: "Design Process", href: "/about#process" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
  ],
  Services: [
    { label: "Interior Design", href: "#" },
    { label: "Space Planning", href: "#" },
    { label: "3D Visualization", href: "#" },
    { label: "Installation", href: "#" },
    { label: "After-Sales Support", href: "#" },
  ],
  "Quick Links": [
    { label: "Get Free Quote", href: "/contact" },
    { label: "EMI Calculator", href: "#" },
    { label: "Find a Showroom", href: "#" },
    { label: "Care Instructions", href: "#" },
    { label: "Warranty Policy", href: "#" },
  ],
};

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

/* ─── Component ─── */
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed to JBF Decor updates.`);
    setEmail("");
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* ── Main Footer ── */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-accent/30">
                <span className="text-accent font-heading font-bold text-lg">J</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white block leading-tight">
                  JBF Decor
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent/70">
                  Luxury Furniture
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              India's premier factory-direct luxury furniture brand. Crafting dream homes
              since 2010 with premium materials, master craftsmanship, and unmatched design excellence.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white font-semibold text-sm mb-3">
                Subscribe for Design Inspiration
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dark transition-colors flex-shrink-0"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-1">
              <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-accent" />
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/50 text-sm hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact & Map Row ── */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>
                  JBF Decor Pvt. Ltd.,<br />
                  Plot No. 42, Industrial Area Phase 1,<br />
                  Mumbai, Maharashtra — 400001
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-accent transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:hello@jbfdecor.com" className="hover:text-accent transition-colors">
                  hello@jbfdecor.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Clock size={16} className="text-accent flex-shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM IST</span>
              </li>
            </ul>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/917597710533"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fb855] transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-48 md:h-56 bg-white/5 border border-white/10">
            <iframe
              title="JBF Decor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995742416!3d19.08204869540748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c55%3A0xe05d307f9e6f7eed!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} JBF Decor Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
          <p>Crafted with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
