'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Lock, Unlock, Mail, User, Phone } from 'lucide-react';

const ForDoctorsPage = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile) {
      setHasAccess(true);
    }
  };

  const publications = [
    "Clinical utility of EEG in headache: A retrospective study",
    "Stroke Management Guidelines for Developing Nations",
    "The Role of Telemedicine in Neurological Follow-ups",
    "Advancements in the Treatment of Migraine",
    "Parkinson's Disease: Early Diagnosis and Intervention"
  ];

  const books = [
    "Essentials of Neurology in Practice (Editor)",
    "Contemporary Approaches to Headache Disorders",
    "Clinical Handbook of Stroke Protocols"
  ];

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full mb-6 border border-primary/10">
            <BookOpen size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Academic Portal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            For <span className="text-gradient">Doctors</span>
          </h1>
          <p className="text-xl text-secondary font-medium">
            Exclusive access to Dr. Debashish Chowdhury's research, publications, and edited medical literature.
          </p>
        </motion.div>

        {!hasAccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-10 md:p-12 rounded-[3rem] border border-black/5 dark:border-white/10 shadow-2xl max-w-lg mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Lock size={32} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Request Access</h2>
            <p className="text-center text-secondary text-sm mb-8">Please provide your details to view the medical resources.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50" size={18} />
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50" size={18} />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50" size={18} />
                  <input 
                    type="tel" 
                    required
                    placeholder="Mobile Number"
                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <Unlock size={18} />
                <span>Grant Access</span>
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="bg-green-500/10 text-green-600 dark:text-green-400 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold mb-10">
              <Unlock size={20} />
              Access Granted
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Publications */}
              <div className="glass p-8 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Latest Publications</h3>
                </div>
                <div className="space-y-4">
                  {publications.map((pub, idx) => (
                    <div key={idx} className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-black/5 dark:border-white/5 flex gap-3 items-start group hover:border-primary/30 transition-colors">
                      <div className="mt-1 text-primary"><FileText size={16} /></div>
                      <div>
                        <p className="font-bold text-sm text-primary group-hover:text-accent transition-colors">{pub}</p>
                        <p className="text-xs text-secondary mt-1">Research Paper</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Books */}
              <div className="glass p-8 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Books Edited</h3>
                </div>
                <div className="space-y-4">
                  {books.map((book, idx) => (
                    <div key={idx} className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-black/5 dark:border-white/5 flex gap-3 items-start group hover:border-accent/30 transition-colors">
                      <div className="mt-1 text-accent"><BookOpen size={16} /></div>
                      <div>
                        <p className="font-bold text-sm text-primary group-hover:text-accent transition-colors">{book}</p>
                        <p className="text-xs text-secondary mt-1">Edited Volume</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default ForDoctorsPage;
