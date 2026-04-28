'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Trophy, Heart, ChevronRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const About = () => {
  const credentials = [
    { title: 'MBBS', institution: 'Maulana Azad Medical College (MAMC)', year: '1985' },
    { title: 'MD (Internal Medicine)', institution: 'MAMC, University of Delhi', year: '1993' },
    { title: 'DM (Neurology)', institution: 'G.B. Pant Hospital, Delhi', year: '1993' },
    { title: 'Diploma (Tuberculosis & Chest)', institution: 'Vallabhbhai Patel Chest Institute', year: '1990' },
    { title: 'Fellowship (Stroke Medicine)', institution: 'Edinburgh, UK', year: '2003' },
    { title: 'Training (Headache Disorders)', institution: 'Trinity College, Cambridge, UK', year: '2001' },
    { title: 'Training (GCP)', institution: 'Harvard Medical International', year: '2001' },
  ];

  const awards = [
    { name: 'IAN Presidential Oration', year: '2024' },
    { name: 'Distinguished Alumnus Award, MAMC', year: '2022' },
    { name: 'State Award for Healthcare, Govt. of Delhi', year: '2016' },
    { name: 'Bhagirathi Samman', year: '2013' },
    { name: 'Indira Gandhi Appreciation Award', year: '2006' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="relative">
            <div className="sticky top-32">
              <div className="inline-flex items-center space-x-2 text-accent font-black uppercase tracking-[0.2em] text-[10px] mb-8 bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
                <BookOpen size={14} />
                <span>Biography & Leadership</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif mb-10 leading-[0.95] text-primary tracking-tighter">
                A Distinguished <span className="text-gradient italic font-bold">Legacy</span> in Global Neurology
              </h2>
              <div className="space-y-8 text-secondary text-xl leading-relaxed font-medium">
                <p>
                  Dr. (Prof.) Debashish Chowdhury stands as a preeminent figure globally, recognized for his profound expertise in headache management, stroke medicine, and neurodegenerative disorders.
                </p>
                <p>
                  With a career spanning over four decades, he currently serves as the <strong className="text-primary font-bold">Vice Chairman & Academic Head – Neurology</strong> at BLK-Max Super Speciality Hospital. Previously, he led the Neurology department at <strong>G.B. Pant Hospital & Maulana Azad Medical College</strong> from 1996 to 2025 as Director Professor & Head.
                </p>
                
                <div className="pt-10 grid grid-cols-2 gap-8">
                  <TiltCard>
                    <div className="p-8 h-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl border border-border/50 transition-all hover:shadow-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                        <Heart className="text-accent" size={24} />
                      </div>
                      <h4 className="font-bold mb-3 text-primary text-lg">Patient-Centric</h4>
                      <p className="text-sm text-secondary/80 leading-relaxed">Integrating the latest scientific advancements with personalized evidence-based strategies.</p>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="p-8 h-full bg-primary shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl border border-primary/5 transition-all hover:shadow-2xl">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                        <Trophy className="text-white" size={24} />
                      </div>
                      <h4 className="font-bold mb-3 text-white text-lg">Pioneer</h4>
                      <p className="text-sm text-white/70 leading-relaxed">Established India&apos;s first dedicated Headache Clinic in a tertiary care institute.</p>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[4rem] shadow-2xl border border-white/40 bg-white/50 backdrop-blur-xl"
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-14 h-14 bg-accent rounded-[1.5rem] flex items-center justify-center text-white shadow-lg shadow-accent/20">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-serif text-primary">Academic Excellence</h3>
              </div>
              <div className="space-y-6">
                {credentials.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start group border-b border-slate-100 dark:border-white/5 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="pr-4">
                      <h4 className="font-bold group-hover:text-accent transition-colors text-lg text-primary">{item.title}</h4>
                      <p className="text-[11px] text-secondary font-bold uppercase tracking-widest mt-1">{item.institution}</p>
                    </div>
                    <span className="text-[11px] font-bold bg-muted text-accent px-4 py-1.5 rounded-full whitespace-nowrap border border-border">{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/10"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Trophy size={100} />
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Trophy size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Prestigious Recognition</h3>
              </div>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-6 py-1">
                    <p className="font-bold text-lg leading-snug">{award.name}</p>
                    <p className="text-sm text-white/60">{award.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ChevronRight is imported above

export default About;
