import { motion } from "framer-motion";

const Terms = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>By engaging BCK46 IT Solutions ("we", "us", "our") for any services, you ("Client") agree to be bound by these Terms and Conditions. These terms apply to all services including but not limited to website development, web application development, mobile app development, and hosting solutions.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">2. Services</h2>
              <p>We provide IT services as outlined in individual project quotations. Each quotation will detail the scope of work, deliverables, timeline, and pricing specific to the project. A quotation becomes binding once accepted by the Client in writing or via digital confirmation.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">3. Quotations & Pricing</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>All prices quoted are in Indian Rupees (INR) unless stated otherwise.</li>
                <li>Quotations are valid for 15 days from the date of issue unless otherwise specified.</li>
                <li>Pricing may vary based on project complexity, features, and client requirements.</li>
                <li>Hosting charges are billed separately and may be recurring (monthly or annually).</li>
                <li>Additional features or changes requested after project commencement may incur extra charges.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">4. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>An advance payment (typically 50%) is required before project commencement.</li>
                <li>The remaining balance is due upon project completion and before final delivery.</li>
                <li>Payment methods accepted include bank transfer, UPI, and other agreed methods.</li>
                <li>Late payments may attract additional charges at our discretion.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">5. Project Timeline</h2>
              <p>Estimated timelines are provided in each project quotation. Delays caused by the Client (such as delayed content submission, late feedback, or scope changes) may extend the project timeline. We will communicate any changes promptly.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Upon full payment, all custom-developed work becomes the intellectual property of the Client.</li>
                <li>Third-party components, libraries, or assets used in the project remain under their respective licenses.</li>
                <li>We reserve the right to showcase completed projects in our portfolio unless the Client requests otherwise.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">7. Revisions & Modifications</h2>
              <p>Each project includes a reasonable number of revision rounds as specified in the quotation. Additional revisions beyond the agreed scope will be billed at an hourly or per-change rate communicated in advance.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">8. Hosting & Maintenance</h2>
              <p>Hosting services are provided as a separate agreement. We are not responsible for downtime caused by third-party hosting providers. Maintenance and support plans are available and billed separately.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
              <p>BCK46 IT Solutions shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability is limited to the amount paid by the Client for the specific project in question.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">10. Termination</h2>
              <p>Either party may terminate the agreement with written notice. In the event of termination, the Client is responsible for payment of all work completed up to the termination date. Advance payments are non-refundable once work has commenced.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Calicut, Kerala.</p>
            </section>

            <section>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-3">12. Contact</h2>
              <p>For questions regarding these terms, reach us at <a href="mailto:bck46offical@gmail.com" className="text-foreground hover:underline">bck46offical@gmail.com</a> or call <a href="tel:+917598700502" className="text-foreground hover:underline">+91 7598700502</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Terms;
