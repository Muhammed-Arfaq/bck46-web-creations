import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Server, Monitor, Code, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const services = [
  { icon: Globe, title: "Static Websites", desc: "Clean, fast, and responsive websites that make a lasting impression." },
  { icon: Monitor, title: "Web Applications", desc: "Powerful web apps built with modern frameworks for seamless user experiences." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps tailored to your business needs." },
  { icon: Server, title: "Hosting Solutions", desc: "Reliable hosting with 99.9% uptime, SSL, and dedicated support." },
  { icon: Code, title: "Backend Development", desc: "Robust APIs and server-side architecture to power your applications." },
  { icon: Shield, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed with your users in mind." },
];

const testimonials = [
  { name: "Larklabs", location: "Kondotty, Kerala", text: "BCK46 delivered an outstanding mobile app and admin panel. Their attention to detail and technical expertise is exceptional." },
  { name: "Mohammed Shafeeq", location: "Calicut, Kerala", text: "Professional team that understands business needs. The website they built drives real results for our company." },
  { name: "Rahul Menon", location: "Thrissur, Kerala", text: "From concept to deployment, BCK46 handled everything. Highly recommend for any digital project." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              Trusted by 50+ Businesses
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              We Build Digital
              <br />
              <span className="text-gradient">Solutions That Work</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              From static websites to complex applications — BCK46 IT Solutions delivers end-to-end
              digital products that power your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-glow"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We <span className="text-gradient">Offer</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">End-to-end digital solutions tailored for your business</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our <span className="text-gradient">Clients Say</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl glass"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Start Your <span className="text-gradient">Project?</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">Get in touch for a free consultation and detailed quotation tailored to your needs.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
