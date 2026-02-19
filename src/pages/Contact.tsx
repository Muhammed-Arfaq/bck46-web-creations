import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 7598700502", href: "tel:+917598700502" },
  { icon: Phone, label: "Alternate", value: "+91 9567167619", href: "tel:+919567167619" },
  { icon: Mail, label: "Email", value: "bck46offical@gmail.com", href: "mailto:bck46offical@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kondotty, Calicut, Kerala 673638", href: undefined },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9:00 AM - 6:00 PM", href: undefined },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's Discuss Your <span className="text-gradient">Project</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Reach out for a free consultation. We'll provide a detailed quotation tailored to your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">Contact <span className="text-gradient">Information</span></h2>
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl glass">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-xl glass">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-primary text-sm font-medium hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-heading font-bold mb-2">Send Us a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Service Needed</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        >
                          <option value="">Select a service</option>
                          <option value="static-website">Static Website</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">App Development</option>
                          <option value="hosting">Hosting</option>
                          <option value="backend">Backend Development</option>
                          <option value="design">UI/UX Design</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Project Details *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
