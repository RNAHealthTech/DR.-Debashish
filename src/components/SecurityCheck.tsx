"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Loader2 } from 'lucide-react';

const SecurityCheck = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Only run on client and check session storage
    const verified = sessionStorage.getItem('security_verified');
    if (!verified) {
      setIsVerified(false);
      
      // Simulate network delay before showing checkbox
      const timer1 = setTimeout(() => {
        setShowCheckbox(true);
      }, 1000);
      
      return () => clearTimeout(timer1);
    }
  }, []);

  const handleVerify = () => {
    if (isChecked) return;
    setIsChecked(true);
    // Simulate verification delay
    setTimeout(() => {
      sessionStorage.setItem('security_verified', 'true');
      setIsVerified(true);
    }, 1500);
  };

  if (isVerified) return null;

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          key="security-check"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-4"
        >
          <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-primary mb-2 text-center">
              Security Verification
            </h2>
            <p className="text-secondary text-center text-sm mb-8">
              Please verify you are human to access drdebashishchowdhury.com
            </p>
            
            <div className="h-20 flex items-center justify-center w-full">
              {!showCheckbox ? (
                <div className="flex flex-col items-center text-accent">
                  <Loader2 className="w-6 h-6 animate-spin mb-3 text-accent" />
                  <span className="text-xs font-medium uppercase tracking-wider text-accent/80">Checking connection...</span>
                </div>
              ) : (
                <button
                  onClick={handleVerify}
                  disabled={isChecked}
                  className={`w-full max-w-[280px] h-16 rounded border ${
                    isChecked 
                      ? 'border-green-500/50 bg-green-500/10' 
                      : 'border-border bg-background hover:bg-muted/50 hover:border-primary/30'
                  } flex items-center px-4 transition-all duration-300`}
                >
                  <div className={`w-7 h-7 rounded-[4px] border mr-4 flex items-center justify-center transition-colors ${
                    isChecked 
                      ? 'bg-green-500 border-green-500' 
                      : 'bg-card border-secondary/50'
                  }`}>
                    {isChecked && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                  </div>
                  <span className={`font-medium ${isChecked ? 'text-green-500' : 'text-primary'}`}>
                    {isChecked ? 'Verification complete' : 'I am human'}
                  </span>
                  
                  {isChecked && <Loader2 className="w-5 h-5 animate-spin text-green-500 ml-auto" />}
                </button>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border w-full flex justify-between items-center text-[10px] text-secondary/40 uppercase tracking-wider">
              <span>Secure Connection</span>
              <div className="flex space-x-3">
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecurityCheck;
