'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, ShieldCheck, Map, CreditCard, ChevronRight, Hospital } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 bg-accent/5 px-4 py-2 rounded-full mb-8">
            <Calendar size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Appointment Portal</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Consult <span className="text-gradient">Globally</span>
          </h1>
          <p className="text-xl text-secondary font-medium opacity-60 leading-relaxed">
            Leading consultations at BLK-Max Super Speciality Hospital. International patients can book via tele-consultation or in-person visits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-32">
          {/* Main Hospital Contact */}
          <div className="glass p-12 lg:p-20 rounded-[4rem] border border-white/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                <Hospital size={250} />
            </div>
            <h2 className="text-4xl font-black mb-12 tracking-tight text-primary">Clinical Practice</h2>
            
            <div className="space-y-12 mb-16">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent rounded-[1.5rem] flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/20">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-accent mb-2">Location</h4>
                  <p className="text-xl font-bold text-primary leading-snug">
                    BLK-Max Super Speciality Hospital, <br />
                    Pusa Road, Rajinder Nagar, New Delhi, 110005
                  </p>
                </div>
              </div>

               <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-secondary mb-2">OPD Days</h4>
                  <p className="text-xl font-bold text-primary leading-snug">
                    Monday - Saturday <br />
                    <span className="text-sm text-secondary font-medium italic">(Prior Appointment Recommended)</span>
                  </p>
                </div>
              </div>

               <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent/5 rounded-[1.5rem] flex items-center justify-center text-accent shrink-0 shadow-lg shadow-accent/5 border border-accent/10">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-secondary mb-2">Contact</h4>
                  <p className="text-xl font-bold text-primary leading-snug">
                    +91-11-30403040 <br />
                    <span className="text-lg opacity-60">appointments@drdebashish.com</span>
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.blkmaxhospital.com/doctor/debashish-chowdhury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-primary text-white py-8 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center group hover:bg-accent transition-all shadow-2xl"
            >
              Confirm Appointment
              <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="space-y-10">
              <div className="glass p-10 lg:p-14 rounded-[3.5rem] border border-white/40 shadow-xl overflow-hidden relative bg-white/40 backdrop-blur-3xl">
                  <h3 className="text-3xl font-black mb-8 tracking-tight text-primary">Direct Inquiry Form</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 ml-2">Your Name</label>
                        <input type="text" className="w-full bg-white border border-border rounded-2xl px-6 py-4 text-primary focus:outline-none focus:border-accent transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 ml-2">Phone Number</label>
                        <input type="tel" className="w-full bg-white border border-border rounded-2xl px-6 py-4 text-primary focus:outline-none focus:border-accent transition-all" placeholder="+91..." />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 ml-2">Email Address</label>
                      <input type="email" className="w-full bg-white border border-border rounded-2xl px-6 py-4 text-primary focus:outline-none focus:border-accent transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 ml-2">Message</label>
                      <textarea rows={4} className="w-full bg-white border border-border rounded-2xl px-6 py-4 text-primary focus:outline-none focus:border-accent transition-all resize-none" placeholder="Describe your inquiry..."></textarea>
                    </div>
                    <button className="w-full bg-accent text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-xl shadow-accent/20">
                      Send Inquiry
                    </button>
                  </form>
              </div>

              <div className="glass p-12 rounded-[3.5rem] border border-white/40 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10 bg-accent/5 rounded-bl-[4rem]">
                    <ShieldCheck size={40} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-black mb-6">Patient Instructions</h3>
                  <ul className="space-y-4">
                    {[
                      "Carry all previous MRI/CT scans",
                      "Keep a 3-day headache diary",
                      "List of current medications",
                      "Arrive 15 mins early"
                    ].map((step, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm font-bold text-secondary">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-[10px]">
                          {i+1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
