import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Monitor, Smartphone, Server, Code, Shield, ArrowRight, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: Globe,
    title: "Static Websites",
    desc: "Fast-loading, SEO-friendly websites perfect for portfolios, landing pages, and business sites.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Custom Design"],
  },
  {
    icon: Monitor,
    title: "Web Applications",
    desc: "Full-featured web apps with admin panels, dashboards, and complex business logic.",
    features: ["Admin Dashboards", "Real-time Features", "API Integration", "Scalable Architecture"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile apps for Android and iOS, from user-facing to admin applications.",
    features: ["Android & iOS", "User & Admin Apps", "Push Notifications", "Offline Support"],
  },
  {
    icon: Server,
    title: "Hosting Solutions",
    desc: "Managed hosting with monitoring, SSL certificates, backups, and dedicated support.",
    features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Monitoring"],
  },
  {
    icon: Code,
    title: "Backend Development",
    desc: "Robust server-side solutions, APIs, and database architecture for your applications.",
    features: ["REST & GraphQL APIs", "Database Design", "Authentication", "Cloud Deployment"],
  },
  {
    icon: Shield,
    title: "UI/UX Design",
    desc: "Research-driven design that puts users first and creates intuitive digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your requirements and understand your business goals." },
  { step: "02", title: "Quotation", desc: "Receive a detailed, transparent quote with timeline and deliverables." },
  { step: "03", title: "Development", desc: "Our team builds your project with regular updates and feedback loops." },
  { step: "04", title: "Delivery", desc: "Final handoff with source files, documentation, and ongoing support." },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Everything You Need to <span className="text-gradient">Go Digital</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From design to deployment, we handle every aspect of your digital journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-8 rounded-xl glass hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Simple, transparent, and efficient — from first call to final delivery.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="text-4xl font-heading font-bold text-gradient mb-3">{p.step}</div>
                <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Have a Project in <span className="text-gradient">Mind?</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">Get a free, no-obligation quotation for your project today.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
