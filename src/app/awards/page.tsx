'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, Medal } from 'lucide-react';

const AwardsPage = () => {
  const allAwards = [
    {
      title: "IAN Presidential Oration",
      org: "Indian Academy of Neurology",
      year: "2024",
      desc: "The highest academic honor bestowed by the Indian Academy of Neurology for outstanding contributions to the field."
    },
    {
      title: "Distinguished Alumnus Award",
      org: "Maulana Azad Medical College (MAMC)",
      year: "2022",
      desc: "Recognized for exemplary service in medical education and clinical leadership."
    },
    {
      title: "State Award for Healthcare Excellence",
      org: "Government of NCT of Delhi",
      year: "2016",
      desc: "Awarded by the Chief Minister for exceptional service in public healthcare at G.B. Pant Hospital."
    },
    {
      title: "Bhagirathi Samman",
      org: "National Social Forum",
      year: "2013",
      desc: "For pioneering work in establishing dedicated headache clinics in India."
    },
    {
      title: "Indira Gandhi Appreciation Award",
      org: "National Medical Forum",
      year: "2006",
      desc: "For excellence in Neurological sciences and clinical research."
    },
    {
      title: "WHO Fellowship",
      org: "World Health Organization",
      year: "2003",
      desc: "Fellowship in Stroke Medicine, Edinburgh, UK."
    }
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/5 px-4 py-2 rounded-full mb-6 border border-accent/10">
            <Trophy size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Honors & Recognition</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Global <span className="text-gradient">Recognition</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
            A lifetime of dedication to neurological sciences, recognized by national governments and international medical bodies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {allAwards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[4rem] border border-white/40 shadow-xl group hover:border-accent/30 transition-all relative overflow-hidden"
            >
              <Medal className="absolute -right-8 -top-8 text-accent/5 group-hover:text-accent/10 transition-colors" size={200} />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-5 bg-accent/10 rounded-[2rem] text-accent">
                   <Award size={32} />
                </div>
                <span className="text-3xl font-black text-primary/10 dark:text-white/10 group-hover:text-accent/20 transition-colors">{award.year}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-accent transition-colors">{award.title}</h3>
                <p className="text-xs font-black uppercase tracking-widest text-secondary mb-6">{award.org}</p>
                <div className="w-12 h-1 bg-accent/20 rounded-full mb-6"></div>
                <p className="text-lg text-secondary font-medium opacity-80 leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact */}
        <div className="p-20 glass rounded-[5rem] border border-accent/20 bg-accent/5 text-center">
            <div className="flex justify-center space-x-12 mb-12 opacity-50">
                <div className="text-center">
                    <div className="text-5xl font-black text-primary dark:text-white mb-2">40+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest">Years of Service</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-black text-primary dark:text-white mb-2">15+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest">National Awards</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-black text-primary dark:text-white mb-2">100+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest">Publications</div>
                </div>
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight">Contributing to Global Neurology</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
              Dr. Chowdhury continues to serve on various international advisory boards, shaping the future of headache and stroke medicine globally.
            </p>
        </div>
      </div>
    </main>
  );
};

export default AwardsPage;
