'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Presentation, Microscope, Award } from 'lucide-react';

const AcademicPage = () => {
  const lectures = [
    {
      title: "Presidential Oration: Headache Management in India",
      event: "IANCON 2024",
      location: "Madurai, India",
      date: "2024"
    },
    {
      title: "Recent Advances in Migraine Therapeutics",
      event: "World Congress of Neurology",
      location: "Dubai, UAE",
      date: "2023"
    },
    {
      title: "Approach to Refractory Chronic Migraine",
      event: "International Headache Congress",
      location: "Seoul, South Korea",
      date: "2023"
    }
  ];

  const academicRoles = [
    {
      role: "Academic Head",
      institution: "BLK-Max Super Speciality Hospital",
      description: "Leading the DNB Neurology program and clinical research initiatives."
    },
    {
      role: "Director Professor",
      institution: "Maulana Azad Medical College (MAMC)",
      description: "Over 25 years of teaching postgraduate and doctoral students."
    },
    {
      role: "Examiner",
      institution: "National Board of Examinations (NBE)",
      description: "External examiner for DM Neurology across various prestigious universities in India."
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
            <GraduationCap size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Education & Leadership</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Academic <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
            Dedicated to advancing neurological science through rigorous teaching, international lectures, and clinical mentorship.
          </p>
        </motion.div>

        {/* Roles Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {academicRoles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[3rem] border border-white/40 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                {i === 0 ? <Users size={24} /> : i === 1 ? <Presentation size={24} /> : <Award size={24} />}
              </div>
              <h3 className="text-2xl font-black mb-2">{role.role}</h3>
              <p className="text-accent font-bold text-xs uppercase tracking-wider mb-4">{role.institution}</p>
              <p className="text-secondary font-medium leading-relaxed opacity-80">{role.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Lectures & Presentations */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <Presentation className="text-accent" size={32} />
            <h2 className="text-4xl font-black tracking-tight">Key Lectures & Orations</h2>
          </div>
          <div className="space-y-6">
            {lectures.map((lecture, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] border border-white/40 shadow-lg flex flex-col md:flex-row md:items-center justify-between group"
              >
                <div>
                  <h3 className="text-xl font-black group-hover:text-accent transition-colors mb-2">{lecture.title}</h3>
                  <div className="flex items-center space-x-4 text-secondary font-bold text-[10px] uppercase tracking-widest">
                    <span>{lecture.event}</span>
                    <span>•</span>
                    <span>{lecture.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-accent font-black text-2xl opacity-20">
                  {lecture.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mentorship Section */}
        <div className="glass p-16 rounded-[4rem] border border-accent/20 bg-accent/5 relative overflow-hidden">
          <BookOpen className="absolute -right-20 -bottom-20 text-accent/5" size={400} />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tight">Mentoring the Next Generation</h2>
              <p className="text-xl text-secondary font-medium opacity-80 leading-relaxed">
                As a teacher for over three decades, Dr. Chowdhury has mentored hundreds of neurologists who are now serving across India and globally. His commitment to academic medicine continues at BLK-Max.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 dark:bg-primary/20 p-8 rounded-[2rem] text-center">
                <div className="text-4xl font-black text-accent mb-2">100+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">DM Students</div>
              </div>
              <div className="bg-white/50 dark:bg-primary/20 p-8 rounded-[2rem] text-center">
                <div className="text-4xl font-black text-accent mb-2">30+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Years Teaching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AcademicPage;
