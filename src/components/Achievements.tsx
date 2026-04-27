'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Book, Newspaper, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const publications = [
    { title: "Cluster Headache Consensus Publication", journal: "The Journal of Headache and Pain", year: "2025" },
    { title: "Migraine & Productivity in India", journal: "Scoping Review", year: "2025" },
    { title: "ANODYNE Study (Cluster Headache)", journal: "Cephalalagia", year: "2024" },
    { title: "Headache Burden in Delhi-NCR", journal: "Population-Based Assessment", year: "2025" },
    { title: "Validation of Hindi HARDSHIP Questionnaire", journal: "North India Research", year: "2024" },
  ];

  const roles = [
    { title: "President", org: "Indian Academy of Neurology (IAN)", period: "2023-2024" },
    { title: "Education Committee", org: "International Headache Society (IHS)", period: "Since 2022" },
    { title: "Associate Editor", org: "Cephalalgia (Official Journal, IHS)", period: "International" },
    { title: "Editorial Board", org: "CGRP Education & Research Forum", period: "Global" },
    { title: "Representative", org: "IHS South & Southeast Asia", period: "Regional" },
  ];

  return (
    <section id="media" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">Global Influence & <span className="text-accent italic">Research</span></h2>
            <p className="text-secondary text-lg mb-10 leading-relaxed">
              Dr. Chowdhury&apos;s leadership in international societies and prolific research output shape global standards. Current research interests include **trigeminal autonomic cephalalgias**, **migraine comorbidities**, and **cognitive functioning**.
            </p>
            
            <div className="space-y-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 bg-muted/50 rounded-2xl border border-border group transition-all hover:bg-white hover:shadow-lg">
                  <div className="w-10 h-10 bg-accent/5 rounded-xl flex items-center justify-center text-accent transition-transform group-hover:scale-110 shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary leading-tight">{role.title}</h4>
                    <p className="text-[11px] text-secondary mt-1">{role.org}</p>
                    <p className="text-[10px] font-bold text-accent mt-1 uppercase tracking-widest">{role.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] border border-border shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="p-8 lg:p-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <Newspaper />
                    </div>
                    <h3 className="text-2xl font-serif text-primary">Scientific Contributions</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-muted text-secondary px-6 py-2 rounded-full border border-border self-start md:self-auto">100+ Publications</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {publications.map((pub, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 bg-muted/30 rounded-2xl border border-border hover:bg-white hover:shadow-xl transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <FileText className="text-accent/30 group-hover:text-accent transition-colors" size={20} />
                          <span className="text-[10px] font-bold text-accent bg-accent/5 px-2 py-1 rounded-full">{pub.year}</span>
                        </div>
                        <h4 className="font-bold text-sm text-primary mb-2 leading-snug group-hover:text-accent transition-colors">
                          {pub.title}
                        </h4>
                        <p className="text-[11px] text-secondary italic mb-4">{pub.journal}</p>
                      </div>
                      <div className="flex items-center text-[10px] font-bold text-secondary group-hover:text-accent transition-colors uppercase tracking-widest">
                        View Research <ExternalLink size={10} className="ml-1" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-accent rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Book size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">International Author</h4>
                      <p className="text-xs text-white/70 italic leading-tight">9 Books Edited & Over 50 Research Abstracts Presented Globally</p>
                    </div>
                  </div>
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-muted shrink-0">
                    Full Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
