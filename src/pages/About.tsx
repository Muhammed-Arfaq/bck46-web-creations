import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Target, title: "Client-Focused", desc: "Every project is built around your goals, ensuring solutions that actually drive results." },
  { icon: Lightbulb, title: "Innovation First", desc: "We leverage the latest technologies and best practices to deliver cutting-edge solutions." },
  { icon: Users, title: "Transparent Process", desc: "Clear communication, honest pricing, and regular updates throughout the project lifecycle." },
  { icon: Award, title: "Quality Assured", desc: "Rigorous testing and attention to detail ensure every product meets the highest standards." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                About BCK46
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Building the Digital <span className="text-gradient">Backbone</span> of Businesses
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BCK46 IT Solutions is a software development company based in Kondotty, Calicut, Kerala. 
                We specialize in building high-quality digital products — from simple static websites to 
                full-scale mobile and web applications with robust backend infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl font-heading font-bold mb-5">Our <span className="text-gradient">Story</span></h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small team with a passion for building great software has grown into a 
                  trusted partner for over 50 businesses across Kerala and beyond.
                </p>
                <p>
                  We believe in delivering real value — not just code. Every project we take on is treated 
                  with the same level of care and professionalism, whether it's a single-page website or a 
                  complex enterprise application.
                </p>
                <p>
                  Our transparent approach to pricing, clear communication, and commitment to deadlines 
                  has earned us a reputation that our clients trust and recommend.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "Kerala", label: "Based & Growing" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl glass text-center">
                  <div className="text-2xl font-heading font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Drives <span className="text-gradient">Us</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl glass text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Let's Work <span className="text-gradient">Together</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">Ready to turn your idea into reality? Reach out and let's get started.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
