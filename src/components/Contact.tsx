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
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Select Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all appearance-none">
                    <option className="bg-primary">General Consultation</option>
                    <option className="bg-primary">Migraine & Headache</option>
                    <option className="bg-primary">Stroke Management</option>
                    <option className="bg-primary">Memory Disorders</option>
                    <option className="bg-primary">Epilepsy Care</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-accent text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20 flex items-center justify-center space-x-3 group">
                  <span>Send Message</span>
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
                </button>

                <p className="text-center text-white/30 text-[10px] font-medium tracking-wide">
                  Typically responds within 24-48 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

