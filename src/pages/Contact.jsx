import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronRight, Send, CheckCircle } from "lucide-react";
import { generateQuoteLink } from "../utils/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with a form service (Formspree, EmailJS, etc.)
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, title: "Visit Our Showroom", value: "Plot No. 42, Industrial Area Phase 1, Mumbai — 400001", href: "#" },
    { icon: Phone, title: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
    { icon: Mail, title: "Email Us", value: "hello@jbfdecor.com", href: "mailto:hello@jbfdecor.com" },
    { icon: Clock, title: "Working Hours", value: "Mon–Sat: 9:00 AM – 7:00 PM IST", href: null },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* ── Hero ── */}
      <div className="bg-white pt-36 pb-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Contact</span>
          </div>
          <span className="section-label">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 leading-tight">
            Let's Build Your
            <span className="block italic text-accent">Dream Home</span>
          </h1>
          <div className="w-16 h-0.5 bg-accent mt-4 mb-6" />
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Our design experts are ready to help you create the perfect space. Get in touch for a free
            consultation — no obligation, no pressure.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl font-bold text-dark-text mb-8">
              Request a Free Quote
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 bg-light-gray rounded-card"
              >
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="font-heading text-2xl font-bold text-dark-text mb-2">Thank You!</h3>
                <p className="text-muted-text mb-6">
                  We've received your enquiry and will get back to you within 24 hours.
                </p>
                <a
                  href={generateQuoteLink(`${form.service} — from ${form.city}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Raj Kumar" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "raj@email.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                    { name: "city", label: "Your City", type: "text", placeholder: "Mumbai" },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-dark-text mb-1.5">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white outline-none focus:border-accent text-sm text-dark-text placeholder-muted-text transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-1.5">Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white outline-none focus:border-accent text-sm text-dark-text cursor-pointer transition-colors"
                  >
                    <option value="">Select a service…</option>
                    <option>Full Home Interior</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Dining Room</option>
                    <option>Kitchen</option>
                    <option>Office Interior</option>
                    <option>Custom Furniture</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-1.5">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, budget, timeline…"
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white outline-none focus:border-accent text-sm text-dark-text placeholder-muted-text resize-none transition-colors"
                  />
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="flex-1 btn-primary py-4 justify-center text-base">
                    <Send size={16} />
                    Send Enquiry
                  </button>
                  <a
                    href={generateQuoteLink(form.message || "I'd like a free consultation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-whatsapp py-4 justify-center text-base"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── Info + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div
                  key={title}
                  className="bg-white p-5 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3 border border-accent/20">
                    <Icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">{title}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-dark-text hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-dark-text">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-card overflow-hidden h-72 border border-gray-200 shadow-card">
              <iframe
                title="JBF Decor Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995742416!3d19.08204869540748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c55%3A0xe05d307f9e6f7eed!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Showroom CTA */}
            <div className="bg-white rounded-card p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-3">Visit a Showroom</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Experience our furniture in person. We have 15+ showrooms across India.
                Book a visit to see, touch, and feel the quality before you buy.
              </p>
              <a
                href={generateQuoteLink("I'd like to visit the showroom")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Showroom Visit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
