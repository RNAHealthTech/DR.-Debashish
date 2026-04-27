'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Camera, ZoomIn } from 'lucide-react';

const GalleryPage = () => {
  const images = [
    { title: "Clinical Consultations", category: "Clinic", aspect: "aspect-square" },
    { title: "Academic Lecture at MAMC", category: "Teaching", aspect: "aspect-video" },
    { title: "With the Neurosurgery Team", category: "Hospital", aspect: "aspect-square" },
    { title: "International Headache Congress", category: "Conferences", aspect: "aspect-video" },
    { title: "Neurology Ward Rounds", category: "Hospital", aspect: "aspect-video" },
    { title: "DNB Training Session", category: "Teaching", aspect: "aspect-square" },
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
            <Camera size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Visual Journey</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Clinical <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
            Glimpses of academic lectures, clinical practice, and international medical conferences.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-32">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group rounded-[3rem] overflow-hidden cursor-pointer border border-white/20 shadow-2xl ${img.aspect} bg-primary/5`}
            >
              {/* Placeholder for images */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                 <ImageIcon className="text-accent/20" size={64} />
              </div>

              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-2 block">{img.category}</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">{img.title}</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <ZoomIn className="text-white/40" size={48} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about private practice */}
        <div className="text-center p-16 glass rounded-[4rem] border border-accent/10">
            <p className="text-secondary font-medium italic opacity-60">
              * Note: To respect patient privacy, we do not publish clinical photos involving patients.
            </p>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
