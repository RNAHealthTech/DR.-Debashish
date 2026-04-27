'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Book, Globe, Award, ExternalLink, Library, Newspaper, Presentation } from 'lucide-react';

const PublicationsPage = () => {
  const categories = [
    { name: "Research Papers", count: "100+", icon: <FileText className="text-blue-500" /> },
    { name: "Books Edited", count: "09", icon: <Book className="text-purple-500" /> },
    { name: "Global Abstracts", count: "50+", icon: <Presentation className="text-orange-500" /> },
    { name: "H-Index", count: "25+", icon: <Library className="text-green-500" /> },
  ];

  const recentPapers = [
    {
      title: "Cluster Headache Consensus Publication",
      journal: "The Journal of Headache and Pain",
      year: "2025",
      type: "Consensus Paper"
    },
    {
      title: "Migraine & Productivity in India: A Scoping Review",
      journal: "Indian Journal of Medical Research",
      year: "2025",
      type: "Review"
    },
    {
      title: "ANODYNE Study: Efficacy in Cluster Headache",
      journal: "Cephalalgia",
      year: "2024",
      type: "Original Research"
    },
    {
      title: "Population Based Assessment of Headache Burden in Delhi-NCR",
      journal: "North India Medical Press",
      year: "2025",
      type: "Population Study"
    }
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 mb-32 items-end">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/5 px-4 py-2 rounded-full mb-8">
              <Globe size={16} className="text-indigo-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Academic Output</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-tight">
              Advancing Science to <span className="text-gradient">Heal</span> the Brain
            </h1>
            <p className="text-2xl text-secondary font-medium opacity-80 leading-relaxed max-w-2xl">
              Dr. Chowdhury's research is cited globally, shaping international guidelines for headache management and stroke prevention.
            </p>
          </div>
          <div className="lg:w-1/3 grid grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="glass p-6 rounded-[2.5rem] border border-white/40 shadow-xl text-center">
                <div className="w-10 h-10 mx-auto bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <div className="text-2xl font-black text-primary">{cat.count}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-1">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="flex items-center justify-between mb-16 border-b border-primary/5 pb-8">
            <h2 className="text-4xl font-black tracking-tight flex items-center">
              <Newspaper className="mr-4 text-accent" /> Recent Journal Articles
            </h2>
            <button className="text-xs font-black uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-8">Download Bibliography</button>
          </div>
          
          <div className="grid gap-6">
            {recentPapers.map((paper, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 lg:p-12 rounded-[3.5rem] border border-white/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10 hover:border-accent/30 transition-all group"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest py-1.5 px-4 bg-accent/5 text-accent rounded-full border border-accent/10">{paper.type}</span>
                    <span className="text-xs text-secondary font-bold tracking-widest">{paper.year}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black leading-tight group-hover:text-accent transition-colors tracking-tight">{paper.title}</h3>
                  <p className="text-secondary italic mt-4 font-medium opacity-70">{paper.journal}</p>
                </div>
                <button className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <ExternalLink size={24} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
           <div className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <Book className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 group-hover:scale-110 transition-transform" size={300} />
              <h3 className="text-4xl font-black mb-8 tracking-tight">Edited Books</h3>
              <p className="text-lg opacity-70 mb-10 font-medium leading-relaxed">
                Editor of 9 specialized books on Headache and Neurology, used by medical residents across Asia and Europe.
              </p>
              <ul className="space-y-4 mb-12">
                {["Clinical Neurology", "Headache Management Guide", "Neuro-ophthalmology in Practice"].map((book, i) => (
                   <li key={i} className="flex items-center space-x-3 text-sm font-bold opacity-90 underline decoration-white/20 underline-offset-4">
                      <span>{book}</span>
                   </li>
                ))}
              </ul>
              <button className="bg-accent text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
                Browse Publications
              </button>
           </div>

           <div className="glass p-12 lg:p-20 rounded-[4rem] border border-white/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <Award className="text-accent mb-10" size={60} />
                <h3 className="text-3xl font-black mb-8 tracking-tight">International Societies</h3>
                <p className="text-lg text-secondary opacity-80 mb-10 font-medium leading-relaxed">
                  Representative for IHS South & Southeast Asia, ensuring regional research is integrated into global consensus papers.
                </p>
              </div>
              <div className="p-8 bg-accent/5 rounded-[2.5rem] border border-accent/10">
                <p className="text-sm font-black text-accent uppercase tracking-widest leading-loose">
                  "Research is not just data, it is a roadmap for clinicians to provide hope to patients with incurable conditions."
                </p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default PublicationsPage;
