"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary">
              Last updated: April 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-secondary space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you use our website, such as when you fill out a contact form, book a consultation, or subscribe to our newsletter. This information may include your name, email address, phone number, and any health-related information you choose to share.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Communicate with you regarding your appointments and inquiries</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                <li>Comply with legal obligations and medical regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Data Protection and Security</h2>
              <p>
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
              <p className="mt-4">
                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request that we correct any personal information that is inaccurate</li>
                <li>The right to request the deletion of your personal information</li>
                <li>The right to object to the processing of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at the details provided on our Contact page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
