'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Activity, Microscope, HeartPulse, 
  ChevronRight, Stethoscope, Waves, Eye, 
  ActivitySquare, ShieldCheck, Thermometer,
  Clock, MapPin, Phone
} from 'lucide-react';
import Image from 'next/image';

const ServicesPage = () => {
  const treatments = [
    {
      title: "Headache & Migraine Disorders",
      desc: "Comprehensive management for chronic migraines, cluster headaches, and trigeminal autonomic cephalalgias using the latest therapeutic protocols.",
      symptoms: ["Pulsating Pain", "Light Sensitivity", "Visual Aura", "Chronic Nausea"],
      features: ["India's First Dedicated Clinic", "CGRP Antagonist Therapy", "Botox for Migraine", "Nerve Blocks"],
      icon: <Brain size={40} className="text-accent" />,
      color: "bg-blue-500/10",
      image: "/images/abstract-brain.png"
    },
    {
      title: "Dizziness & Balance Center",
      desc: "Advanced diagnostic and therapeutic approach to vestibular disorders, vertigo, and chronic imbalance using international standards.",
      symptoms: ["Spinning Sensation", "Lightheadedness", "Loss of Balance", "Motion Sensitivity"],
      features: ["Video Nystagmography", "Vestibular Rehabilitation", "Epley Maneuvers", "BPPV Specialized Care"],
      icon: <Waves size={40} className="text-accent" />,
      color: "bg-cyan-500/10",
      image: "/images/services-hero.png"
    },
    {
      title: "Stroke & Vascular Neurology",
      desc: "Comprehensive intervention for acute stroke management, advanced aneurysm treatment, and secondary prevention strategies.",
      symptoms: ["Sudden Numbness", "Speech Difficulty", "Vision Loss", "Coordination Issues"],
      features: ["Acute Thrombolysis", "Aneurysm Management", "Rehabilitation Planning", "Vascular Diagnostics"],
      icon: <Zap size={40} className="text-accent" />,
      color: "bg-yellow-500/10"
    },
    {
      title: "Epilepsy & Seizure Care",
      desc: "Detailed evaluation and treatment of refractory epilepsy, offering hope through precision medicine and specialized monitoring. ",
      symptoms: ["Involuntary Movements", "Loss of Consciousness", "Staring Spells", "Confusion"],
      features: ["Video EEG Monitoring", "Drug-Resistant Protocols", "Pediatric Transitions", "Neuro-modulations"],
      icon: <Activity size={40} className="text-accent" />,
      color: "bg-purple-500/10"
    }
  ];

  const procedures = [
    { name: "Video EEG", icon: <ActivitySquare size={24} />, desc: "Monitoring brain electrical activity for epilepsy diagnosis." },
    { name: "NCV / EMG", icon: <Zap size={24} />, desc: "Assessing nerve and muscle function for neuropathies." },
    { name: "VNG Testing", icon: <Eye size={24} />, desc: "Diagnostic testing for vertigo and balance disorders." },
    { name: "Botox Therapy", icon: <ShieldCheck size={24} />, desc: "Therapeutic injections for chronic migraine & dystonia." },
  ];

  return (
    <main className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden mb-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services-hero.png" 
            alt="Modern Neurology Clinic" 
            fill 
            className="object-cover brightness-[0.3] dark:brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-xl px-4 py-2 rounded-full mb-8 border border-accent/30">
              <HeartPulse size={16} className="text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Clinical Excellence</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-primary dark:text-white">
              Specialized <br />
              <span className="text-gradient">Neurological</span> <br />
              Care
            </h1>
            <p className="text-2xl text-secondary font-medium opacity-80 leading-relaxed max-w-2xl italic border-l-4 border-accent/40 pl-8">
              "We integrate global evidence-based protocols with compassionate care to ensure the best possible neurological outcomes."
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Core Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-40">
          {treatments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[4rem] border border-white/40 shadow-2xl relative overflow-hidden group hover:shadow-accent/10 transition-all"
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 ${item.color} blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-white/5 flex items-center justify-center shadow-xl shadow-black/5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent/60">Neurology Service 0{i+1}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-black mb-6 tracking-tight">{item.title}</h2>
                <p className="text-secondary text-xl mb-10 font-medium opacity-80 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mb-10">
                  <p className="text-xs font-black uppercase tracking-widest text-secondary/40 mb-4">Symptoms We Treat</p>
                  <div className="flex flex-wrap gap-3">
                    {item.symptoms.map((symptom, j) => (
                      <span key={j} className="px-4 py-2 bg-primary/5 dark:bg-white/5 rounded-full text-xs font-bold border border-primary/5">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {item.features.map((feature, j) => (
                    <div key={j} className="flex items-center space-x-3 text-sm font-bold text-primary dark:text-white/80">
                      <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 flex items-center space-x-2 text-accent font-black uppercase tracking-[0.2em] text-xs hover:tracking-[0.3em] transition-all group">
                  <span>View Clinical Protocols</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagnostic Procedures */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black tracking-tighter mb-6">Diagnostic Investigations</h3>
            <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">Equipped with state-of-the-art neuro-diagnostic tools for precise identification of complex disorders.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedures.map((proc, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 glass rounded-[3rem] border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  {proc.icon}
                </div>
                <h4 className="text-xl font-black mb-3">{proc.name}</h4>
                <p className="text-sm text-secondary font-medium leading-relaxed">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Academic Insight Banner */}
        <div className="mt-32 p-16 glass rounded-[4rem] border border-accent/20 bg-accent/5 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative z-10">
              <Microscope className="mb-8 text-accent" size={60} />
              <h3 className="text-5xl font-black mb-6 tracking-tighter">Academic Lead Insights</h3>
              <p className="text-xl text-secondary font-medium opacity-80 mb-12 leading-relaxed">
                As the Academic Head at G.B. Pant Hospital, Dr. Chowdhury ensures that the clinical department follows the latest Global Evidence-Based Medicine (EBM) protocols for all neurological emergencies.
              </p>
              <a href="/contact" className="bg-primary text-white dark:bg-white dark:text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs relative z-10 inline-block shadow-2xl hover:scale-105 transition-transform">
                Book a Consultation
              </a>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-[3rem] overflow-hidden">
               <Image 
                src="/images/abstract-brain.png" 
                alt="Neural Connectivity" 
                fill 
                className="object-cover"
               />
               <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
            </div>
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-40 grid lg:grid-cols-3 gap-8">
          {[
            { icon: <Clock />, title: "Clinic Hours", detail: "Mon - Sat: 9:00 AM - 6:00 PM" },
            { icon: <MapPin />, title: "Location", detail: "Delhi Neurological Association, ND" },
            { icon: <Phone />, title: "Appointments", detail: "+91 11 2323 1234" }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-6 p-8 rounded-[2.5rem] bg-primary/5 dark:bg-white/5 border border-primary/5">
              <div className="text-accent">{item.icon}</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-1">{item.title}</p>
                <p className="font-bold">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
