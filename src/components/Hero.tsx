'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award } from 'lucide-react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="inline-flex items-center space-x-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-accent/10 shadow-sm"
            >
              <Award size={14} className="text-accent" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Director & HOD – Neurology</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8 tracking-tight"
            >
              Excellence in <br />
              <span className="italic text-accent">Neurological Care</span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary/80">Dr. (Prof.) Debashish Chowdhury</h2>
              <p className="text-sm font-bold uppercase tracking-tighter text-secondary/60">MBBS, MD (Medicine), DM (Neurology), FIAN, FANA, FRCP (London)</p>
              <p className="text-lg text-secondary max-w-xl leading-relaxed">
                Dedicated to advancing the frontiers of Neurology with over 40 years of clinical expertise. 
                Specializing in complex headache disorders, stroke management, and academic leadership 
                at BLK-Max Super Speciality Hospital.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide flex items-center group transition-all hover:shadow-xl hover:translate-y-[-2px]">
                Book Consultation
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/about" className="border border-primary/10 px-10 py-5 rounded-full font-bold text-sm tracking-wide flex items-center hover:bg-muted transition-all">
                Clinical Profile
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image
                src="/images/dr/portrait.jpg"
                alt="Dr. Debashish Chowdhury"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Experience Badge - More Subtle */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-6 p-8 bg-white rounded-2xl z-20 shadow-xl border border-border hidden md:block"
            >
              <p className="text-3xl font-serif italic text-accent leading-none">40+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Affiliations - Cleaner */}
      <div className="mt-20 py-8 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40 mb-8">Academic & Professional Affiliations</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {["BLK-Max Super Speciality", "GIPMER (GB Pant Hospital)", "Indian Academy of Neurology", "World Federation of Neurology", "American Academy of Neurology"].map((name, i) => (
              <span key={i} className="text-xs font-bold text-primary/70">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
