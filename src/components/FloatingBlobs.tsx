'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none mesh-gradient">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Primary Animated Mesh Blobs - Faster and more movement */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, 80, 120, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-10%] w-[80%] h-[80%] bg-accent/20 blur-[150px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 150, -80, 0],
          scale: [1, 1.4, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[90%] h-[90%] bg-indigo-500/15 blur-[180px] rounded-full"
      />

    </div>
  );
};

export default FloatingBlobs;
