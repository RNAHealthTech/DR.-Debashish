"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <main className="min-h-screen pt-32 pb-16 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 p-8 md:p-12 shadow-sm"
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 tracking-tight">
              Terms & Conditions
            </h1>
            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary">
              Last updated: April 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-secondary space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Medical Disclaimer</h2>
              <p>
                The information provided on this website is for educational and informational purposes only and does not constitute medical advice. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p className="mt-4 font-semibold text-primary">
                Never disregard professional medical advice or delay in seeking it because of something you have read on this website. In case of a medical emergency, call your doctor or local emergency services immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Appointment Booking</h2>
              <p>
                While we strive to honor all appointment requests made through this website, submission of a request does not guarantee an appointment. All appointments are subject to availability and confirmation by our staff. We reserve the right to cancel or reschedule appointments as necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p>
                The Site and its original content, features, and functionality are owned by Dr. Debashish Chowdhury and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party sites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party sites or services. We strongly advise you to read the terms and conditions and privacy policy of any third-party site that you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Dr. Debashish Chowdhury, nor his staff, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsConditions;
