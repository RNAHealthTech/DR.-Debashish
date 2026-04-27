'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Shield, Info, ExternalLink, HelpCircle } from 'lucide-react';

const ResourcesPage = () => {
  const guides = [
    {
      title: "Understanding Your Migraine",
      type: "PDF Guide",
      size: "1.2 MB",
      category: "Headache"
    },
    {
      title: "FAST: Stroke Warning Signs",
      type: "Infographic",
      size: "800 KB",
      category: "Emergency"
    },
    {
      title: "Living with Parkinson's",
      type: "E-Booklet",
      size: "2.4 MB",
      category: "Patient Care"
    },
    {
      title: "Epilepsy: Safety at Home",
      type: "PDF Guide",
      size: "1.5 MB",
      category: "Neurology"
    }
  ];

  const faqs = [
    {
      q: "How do I book a follow-up appointment?",
      a: "You can book follow-up appointments through the BLK-Max portal or by calling our clinic coordinator."
    },
    {
      q: "What should I bring for my first consultation?",
      a: "Please bring all previous prescriptions, MRI/CT scans (films and reports), and a list of current medications."
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
            <Info size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Patient Support</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Patient <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
            Educational materials, downloadable guides, and frequently asked questions to help you manage your health.
          </p>
        </motion.div>

        {/* Downloads Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {guides.map((guide, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-10 rounded-[3rem] border border-white/40 shadow-xl flex items-center justify-between group"
            >
              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-accent/10 rounded-[2rem] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <FileText size={28} />
                </div>
                <div>
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-1 block">{guide.category}</span>
                  <h3 className="text-2xl font-black tracking-tight mb-1">{guide.title}</h3>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest opacity-60">{guide.type} • {guide.size}</p>
                </div>
              </div>
              <button className="p-4 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all">
                <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <HelpCircle className="text-accent" size={32} />
            <h2 className="text-4xl font-black tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass p-12 rounded-[3.5rem] border border-white/40 shadow-lg">
                <h3 className="text-2xl font-black mb-4 tracking-tight flex items-start space-x-4">
                   <span className="text-accent">Q.</span>
                   <span>{faq.q}</span>
                </h3>
                <p className="text-xl text-secondary font-medium opacity-80 leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Library Link */}
        <div className="p-20 glass rounded-[5rem] border border-accent/20 bg-accent/5 text-center relative overflow-hidden">
          <Shield className="absolute -left-10 -bottom-10 text-accent/5" size={300} />
          <h2 className="text-4xl font-black mb-6 tracking-tight relative z-10">Medical Library</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-medium opacity-80 mb-10 relative z-10">
            Access thousands of medical articles and the latest neurology research from trusted global medical journals.
          </p>
          <a href="/publications" className="bg-primary text-white dark:bg-white dark:text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-transform inline-block relative z-10">
            Visit Health Library
          </a>
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;
