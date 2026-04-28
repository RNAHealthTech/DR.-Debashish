'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain } from 'lucide-react';
import { services } from '@/data/services';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Clinical Specializations</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif text-primary mb-10 leading-tight tracking-tight">Advanced <span className="text-accent italic">Neurological</span> Services</h2>
          <p className="text-secondary text-xl leading-relaxed font-medium">
            Leveraging decades of experience and cutting-edge research to provide comprehensive diagnostic and therapeutic solutions for complex brain disorders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <Link href={`/services/${item.id}`} className="block h-full p-10 rounded-[2.5rem] bg-white/60 dark:bg-card/40 backdrop-blur-xl border border-white/40 dark:border-white/10 group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-accent/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-5 flex items-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all tracking-tight">
                    {item.title}
                    <ArrowUpRight className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-accent" size={20} />
                  </h3>
                  <p className="text-secondary/90 leading-relaxed text-base font-medium mb-6">
                    {item.shortDesc}
                  </p>
                </Link>
              </TiltCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-primary p-12 rounded-[2.5rem] text-white flex flex-col justify-between group hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-colors"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif italic mb-6">Patient-Centric Philosophy</h3>
              <p className="text-white/70 leading-relaxed text-base font-medium">
                &quot;My practice integrates the latest scientific advancements with personalized treatment strategies to empower patients in their recovery journey.&quot;
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-4 font-bold uppercase tracking-[0.2em] text-[10px] relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                <Brain size={18} className="text-accent" />
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
