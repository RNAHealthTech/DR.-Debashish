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

      {/* Extra floating blobs for more energy */}
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -150, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[20%] w-[40%] h-[40%] bg-blue-300/10 blur-[120px] rounded-full"
      />

      {/* Premium 3D Assets (Tridimensi style) - More dynamic rotation and floating */}
      <motion.div
        animate={{
          y: [0, -60, 20, 0],
          x: [0, 30, -20, 0],
          rotate: [0, 15, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[10%] w-[350px] h-[350px] opacity-[0.08] dark:opacity-20 grayscale-[0.1] brightness-110 pointer-events-none"
      >
        <Image 
          src="/bg-3d-1.png" 
          alt="Abstract 3D Shape" 
          width={350} 
          height={350}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 80, -40, 0],
          x: [0, -40, 30, 0],
          rotate: [0, -20, 15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] opacity-[0.08] dark:opacity-20 grayscale-[0.2] pointer-events-none"
      >
        <Image 
          src="/bg-3d-2.png" 
          alt="Abstract 3D Glass" 
          width={300} 
          height={300}
          className="object-contain"
        />
      </motion.div>

      {/* Subtle Light Accents - Also animated slightly */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" 
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" 
      />
    </div>
  );
};

export default FloatingBlobs;
