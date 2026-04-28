'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award } from 'lucide-react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import MagneticButton from '@/components/MagneticButton';

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
            className="z-10"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full mb-10 border border-primary/10 shadow-sm"
            >
              <Award size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Director & HOD – Neurology</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-10 tracking-tight"
            >
              <span className="whitespace-nowrap">Excellence in</span> <br />
              <span className="italic text-gradient drop-shadow-sm font-bold">Neurological Care</span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6 mb-12"
            >
              <h2 className="text-3xl font-bold text-primary tracking-tight">Dr. (Prof.) Debashish Chowdhury</h2>
              <div className="h-1 w-20 bg-accent/20 rounded-full"></div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary/80 leading-relaxed max-w-md">
                MBBS, MD (Medicine), DM (Neurology), FIAN, FANA, FRCP (London)
              </p>
              <p className="text-xl text-secondary max-w-xl leading-relaxed font-medium">
                Dedicated to advancing the frontiers of Neurology with over 40 years of clinical expertise. 
                Specializing in complex headache disorders and academic leadership.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap gap-5"
            >
              <MagneticButton>
                <a href="#contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide flex items-center group transition-all hover:shadow-2xl hover:shadow-primary/20 hover:translate-y-[-2px]">
                  Book Consultation
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="/about" className="bg-white/40 backdrop-blur-sm border border-primary/10 px-10 py-5 rounded-full font-bold text-sm tracking-wide flex items-center hover:bg-white/80 transition-all shadow-sm">
                  Clinical Profile
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] z-10 border-[12px] border-white">
              <Image
                src="/images/dr/portrait.jpg"
                alt="Dr. Debashish Chowdhury"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 text-white z-20">
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Primary Affiliation</p>
                 <p className="text-lg font-serif">BLK-Max Super Speciality Hospital</p>
              </div>
            </div>
            
            {/* Experience Badge - Floating (Re-positioned) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 -bottom-12 p-8 bg-white rounded-[2.5rem] z-20 shadow-2xl border border-white/50 hidden md:block min-w-[180px]"
            >
              <p className="text-5xl font-serif italic text-primary leading-none">40<span className="text-accent">+</span></p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mt-3">Years of <br/> Clinical Mastery</p>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Affiliations - Auto Scroll Marquee */}
      <div className="mt-20 py-10 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-6 mb-8">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-secondary/50">Academic & Professional Affiliations</p>
        </div>
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <div className="flex items-center space-x-16 pr-16">
            {["BLK-Max Super Speciality", "GIPMER (GB Pant Hospital)", "Indian Academy of Neurology", "World Federation of Neurology", "American Academy of Neurology", "Movement Disorder Society", "International Headache Society", "Harvard Medical International"].map((name, i) => (
              <span key={i} className="text-sm font-bold text-primary/60 whitespace-nowrap uppercase tracking-widest">
                {name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
