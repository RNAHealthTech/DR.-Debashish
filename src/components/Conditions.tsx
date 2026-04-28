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
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-[0.95] mb-10 tracking-tighter">
              Expert care for <br />
              <span className="text-accent italic">Neurological Conditions</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed font-medium">
              Identifying the root cause of complex symptoms through advanced diagnostic protocols and personalized therapeutic plans.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
             <a href="/services" className="px-10 py-5 rounded-full border-2 border-primary/5 bg-primary/5 font-black text-[10px] uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                View Specialized Clinics
             </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {conditions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-10 rounded-[2.5rem] border border-border/50 bg-white flex flex-col items-center text-center group cursor-pointer transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon size={30} />
              </div>
              <p className="font-bold text-base text-primary group-hover:text-accent transition-colors tracking-tight">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
