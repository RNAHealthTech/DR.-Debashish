'use client';

import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="bg-primary text-white rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <span className="text-accent font-bold uppercase tracking-widest text-[11px] mb-6 block">Clinical Consultations</span>
              <h2 className="text-4xl lg:text-5xl font-serif mb-10 leading-tight">Begin Your <br /> <span className="italic text-accent">Recovery Journey</span></h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">BLK-Max Hospital</h4>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                      Pusa Road, New Delhi - 110005, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Direct Inquiries</h4>
                    <p className="text-white/60 text-base mb-1">011-3040 3040</p>
                    <p className="text-white/30 text-[11px] uppercase tracking-wider">Professional Referrals & Appointments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Academic Inquiry</h4>
                    <p className="text-white/60 text-sm">office@drdebashish.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-10 text-primary shadow-xl">
                <h3 className="text-2xl font-serif italic mb-6 text-center">Online Booking</h3>
                <p className="text-center text-secondary text-sm mb-10 leading-relaxed">
                  Schedule your appointment securely through the hospital&apos;s digital portal.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.blkmaxhospital.com/doctor/debashish-chowdhury" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-accent text-white py-5 rounded-xl font-bold flex items-center justify-center group hover:bg-primary transition-all shadow-lg"
                  >
                    Visit Hospital Portal
                    <Calendar size={18} className="ml-2" />
                  </a>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold text-secondary/60 mt-8 px-2 gap-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      <span className="uppercase tracking-widest">MON - SAT: 10:00 AM - 05:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="mr-2" size={14} />
                      <span className="uppercase tracking-widest">Secure Portal</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center">
                  <p className="text-[10px] text-secondary/40 mb-4 font-bold uppercase tracking-[0.2em]">Professional Networks</p>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'ResearchGate', 'Google Scholar'].map((platform) => (
                      <button key={platform} className="px-5 py-2 border border-border rounded-full text-[11px] font-bold text-secondary hover:bg-muted transition-colors">
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

