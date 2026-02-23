import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>BCK46 IT Solutions ("we", "us", "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our services or visit our website.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and business details provided through our contact forms or during project discussions.</li>
                <li><strong className="text-foreground">Project Data:</strong> Content, assets, and materials provided by clients for project development.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected automatically through standard web technologies.</li>
                <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence including emails, calls, and messages exchanged during the course of business.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>To provide, deliver, and manage our IT services.</li>
                <li>To communicate with you regarding project updates, quotations, and support.</li>
                <li>To respond to your inquiries and requests submitted through our contact form.</li>
                <li>To improve our website and services based on usage patterns.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">4. Data Storage & Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Client project data is stored securely and access is limited to authorized team members only.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">5. Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>With trusted third-party service providers (e.g., hosting providers) necessary for project delivery, under strict confidentiality agreements.</li>
                <li>When required by law or to comply with legal proceedings.</li>
                <li>To protect our rights, safety, or property.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">6. Cookies</h2>
              <p>Our website may use cookies and similar technologies to enhance your browsing experience. These are used solely for functionality and analytics purposes. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies independently.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">8. Data Retention</h2>
              <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Project data is retained for a reasonable period after project completion for support and reference purposes, unless the Client requests deletion.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">9. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your personal data, subject to legal obligations.</li>
                <li>Withdraw consent for data processing at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">10. Children's Privacy</h2>
              <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last updated" date. Continued use of our services constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">12. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:bck46offical@gmail.com" className="text-foreground hover:underline">bck46offical@gmail.com</a> or call <a href="tel:+917598700502" className="text-foreground hover:underline">+91 7598700502</a>.</p>
              <p className="mt-2">Address: Kondotty, Calicut, Kerala 673638</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Privacy;
