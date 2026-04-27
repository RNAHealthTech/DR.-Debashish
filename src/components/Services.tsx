'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Activity, ShieldCheck, Microscope, ArrowUpRight, Waves } from 'lucide-react';

const Services = () => {
  const expertises = [
    {
      title: 'Resistant Migraine',
      desc: 'Recognized authority in the diagnosis and advanced management of complex and refractory headache disorders.',
      icon: Brain,
    },
    {
      title: 'Dizziness & Balance',
      desc: 'Advanced diagnostic and therapeutic approach to vestibular disorders, vertigo, and chronic imbalance.',
      icon: Waves,
    },
    {
      title: 'Stroke Intervention',
      desc: 'Acute stroke management including thrombolysis and mechanical thrombectomy to minimize damage.',
      icon: Zap,
    },
    {
      title: 'Complex Epilepsy',
      desc: 'State-of-the-art care for patients with drug-resistant forms of epilepsy through precise diagnosis.',
      icon: Microscope,
    },
    {
      title: 'Alzheimer’s Care',
      desc: 'Compassionate, holistic, and integrated management for Alzheimer’s disease and other dementias.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Advanced <span className="text-accent italic">Neurological</span> Services</h2>
          <p className="text-secondary text-lg leading-relaxed">
            Leveraging decades of experience and cutting-edge research to provide comprehensive diagnostic and therapeutic solutions for complex brain disorders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white border border-border group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                {item.title}
                <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-accent" size={18} />
              </h3>
              <p className="text-secondary leading-relaxed text-sm mb-6">
                {item.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-accent p-10 rounded-3xl text-white flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            <div>
              <h3 className="text-2xl font-serif italic mb-4">Patient-Centric Philosophy</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                &quot;My practice integrates the latest scientific advancements with personalized treatment strategies to empower patients in their recovery journey.&quot;
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-3 font-bold uppercase tracking-widest text-[10px]">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Brain size={16} />
              </div>
              <span>Clinical Excellence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
