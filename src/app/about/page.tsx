'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Award, GraduationCap, Building2, MapPin, 
  Calendar, Heart, ShieldCheck, Microscope, History,
  CheckCircle2, Globe, Users
} from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const leadershipRoles = [
    {
      title: "Vice Chairman & Academic Head",
      org: "Department of Neurology, BLK-Max Super Speciality Hospital, New Delhi",
      period: "Current",
    },
    {
      title: "Director Professor & Head",
      org: "Department of Neurology, G.B. Pant Hospital & Maulana Azad Medical College",
      period: "1996 - 2025",
    },
    {
      title: "President",
      org: "Indian Academy of Neurology (IAN)",
      period: "2023 - 2024",
    },
    {
      title: "Executive Committee Member",
      org: "International Headache Society (IHS)",
      period: "Global Leadership",
    }
  ];

  const awards = [
    { title: "IAN Presidential Oration", org: "Indian Academy of Neurology", year: "2024" },
    { title: "Distinguished Alumnus Award", org: "Maulana Azad Medical College", year: "2022" },
    { title: "State Award for Healthcare", org: "Government of Delhi", year: "2016" },
    { title: "Bhagirathi Samman", org: "Bhagirathi Samajik Saanskritik Manch", year: "2013" },
    { title: "Indira Gandhi Appreciation Award", org: "National Medical Forum", year: "2006" },
  ];

  const memberships = [
    "American Academy of Neurology (AAN)",
    "International Headache Society (IHS)",
    "Neurological Society of India (NSI)",
    "Indian Academy of Neurology (Life Member)",
    "Indian Epilepsy Society (IES)",
    "National Medical Commission (NMC)",
  ];

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white dark:border-white/5">
              <Image 
                src="/images/dr/portrait.jpg" 
                alt="Dr. Debashish Chowdhury" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[3rem] shadow-2xl border border-white/50 max-w-xs hidden md:block">
              <History className="text-accent mb-4" size={32} />
              <p className="text-sm font-bold text-secondary italic">"Over 40 years of clinical excellence and academic leadership in global neurology."</p>
            </div>
          </motion.div>

          <div>
             <div className="inline-flex items-center space-x-2 bg-accent/5 px-4 py-2 rounded-full mb-8 border border-accent/10">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Academic Excellence</span>
              </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-tight">
              A Global Authority in <span className="text-gradient">Neurology</span>
            </h1>
            <div className="space-y-6 text-xl text-secondary leading-relaxed font-medium opacity-80">
              <p>
                Dr. (Prof.) Debashish Chowdhury is the Vice Chairman and Academic Head of Neurology at BLK-Max Super Speciality Hospital. With a career spanning over four decades, he is recognized as a premier expert in Headache Disorders, Stroke, and complex neurological conditions.
              </p>
              <p>
                Previously, he served as the Director Professor and Head of Neurology at the prestigious G.B. Pant Hospital (MAMC). He established India&apos;s first dedicated Headache Clinic and has been a pioneer in integrating international research standards with clinical practice in India.
              </p>
            </div>
          </div>
        </div>

        {/* Roles & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <section>
            <div className="flex items-center space-x-4 mb-12">
               <Building2 className="text-accent" size={32} />
               <h2 className="text-4xl font-black tracking-tight">Leadership Roles</h2>
            </div>
            <div className="space-y-6">
              {leadershipRoles.map((role, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="glass p-8 rounded-[2.5rem] border border-white/40 shadow-lg group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black group-hover:text-accent transition-colors">{role.title}</h3>
                    <span className="text-[10px] font-black bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-widest">{role.period}</span>
                  </div>
                  <p className="text-secondary font-bold text-xs uppercase tracking-wider">{role.org}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-4 mb-12">
               <GraduationCap className="text-accent" size={32} />
               <h2 className="text-4xl font-black tracking-tight">Education & Training</h2>
            </div>
            <div className="glass p-10 rounded-[3rem] border border-white/50 shadow-2xl space-y-8">
               <div className="flex gap-6">
                 <div className="w-1 bg-accent/20 rounded-full h-auto"></div>
                 <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-primary dark:text-white">Fellowship in Stroke Medicine</h4>
                      <p className="text-sm text-secondary font-medium italic">Edinburgh, UK, 2003</p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary dark:text-white">Headache Disorders Training</h4>
                      <p className="text-sm text-secondary font-medium italic">Trinity College, Cambridge University, UK</p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary dark:text-white">DM in Neurology</h4>
                      <p className="text-sm text-secondary font-medium italic">G.B. Pant Hospital, Delhi University</p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary dark:text-white">MD in Internal Medicine</h4>
                      <p className="text-sm text-secondary font-medium italic">Maulana Azad Medical College (MAMC)</p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary dark:text-white">MBBS</h4>
                      <p className="text-sm text-secondary font-medium italic">Maulana Azad Medical College, 1985</p>
                    </div>
                 </div>
               </div>
            </div>
          </section>
        </div>

        {/* Awards & Memberships */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2">
             <div className="flex items-center space-x-4 mb-12">
                <Award className="text-accent" size={32} />
                <h2 className="text-4xl font-black tracking-tight">Awards & Honors</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                {awards.map((award, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-primary/5 dark:bg-white/5 border border-primary/5">
                    <p className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-2">{award.year}</p>
                    <h4 className="text-lg font-black mb-1">{award.title}</h4>
                    <p className="text-xs text-secondary font-bold uppercase">{award.org}</p>
                  </div>
                ))}
             </div>
          </div>

          <div>
             <div className="flex items-center space-x-4 mb-12">
                <Users className="text-accent" size={32} />
                <h2 className="text-4xl font-black tracking-tight">Memberships</h2>
             </div>
             <div className="glass p-8 rounded-[3rem] border border-white/40 space-y-4">
                {memberships.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-bold text-secondary">
                    <CheckCircle2 size={16} className="text-accent/60" />
                    <span>{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Academic Foundation Link */}
        <div className="p-16 glass rounded-[4rem] border border-accent/20 bg-accent/5 relative overflow-hidden text-center">
            <Microscope className="absolute -left-10 -bottom-10 text-accent/5" size={300} />
            <h3 className="text-4xl font-black mb-6 relative z-10 tracking-tight">Research & Publications</h3>
            <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80 mb-12 relative z-10">
              With over 100 research papers published in indexed journals and multiple textbooks, Dr. Chowdhury remains at the forefront of neurological research globally.
            </p>
            <a href="/publications" className="bg-primary text-white dark:bg-white dark:text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs relative z-10 inline-block shadow-2xl hover:scale-105 transition-transform">
              View All Publications
            </a>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
