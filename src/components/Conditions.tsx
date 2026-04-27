'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, Wind, Activity, Zap, 
  HelpCircle, Eye, ShieldAlert, Thermometer 
} from 'lucide-react';

const Conditions = () => {
  const conditions = [
    { name: "Chronic Migraine", icon: Activity },
    { name: "Vertigo & Dizziness", icon: Wind },
    { name: "Epileptic Seizures", icon: Zap },
    { name: "Memory Loss", icon: HelpCircle },
    { name: "Vision Changes", icon: Eye },
    { name: "Numbness & Tingling", icon: ShieldAlert },
    { name: "Sleep Disorders", icon: Headphones },
    { name: "Walking Issues", icon: Activity },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight mb-6">
              Expert care for <br />
              <span className="text-accent italic">Neurological Conditions</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Identifying the root cause of complex symptoms through advanced diagnostic protocols and personalized therapeutic plans.
            </p>
          </div>
          <div className="hidden lg:block">
             <a href="/services" className="px-8 py-4 rounded-full border border-primary/10 font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                View Specialized Clinics
             </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {conditions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl border border-border bg-card flex flex-col items-center text-center group cursor-pointer transition-all hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-accent w-7 h-7" />
              </div>
              <p className="font-bold text-sm text-primary group-hover:text-accent transition-colors">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
