'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mwvzkqol', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setStatus('succeeded');
        
        // Construct WhatsApp message
        const name = data.get('name');
        const phone = data.get('phone');
        const email = data.get('email');
        const service = data.get('service');
        const message = data.get('message');
        
        const whatsappText = `New Appointment Inquiry
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message: ${message}`;
        
        const whatsappUrl = `https://wa.me/918595814946?text=${encodeURIComponent(whatsappText)}`;
        window.open(whatsappUrl, '_blank');
        
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
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
              {status === 'succeeded' ? (
                <div className="bg-white/5 border border-accent/30 rounded-[2rem] p-10 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-accent w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Request Sent Successfully!</h3>
                  <p className="text-white/60 text-sm mb-8">
                    Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-xl font-bold uppercase tracking-wider text-xs transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-2">Select Service</label>
                    <select name="service" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all appearance-none">
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
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20 flex items-center justify-center space-x-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    {!status && <Calendar size={16} className="group-hover:rotate-12 transition-transform" />}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm font-medium mt-4">
                      Oops! There was a problem submitting your form. Please try again.
                    </p>
                  )}

                  <p className="text-center text-white/30 text-[10px] font-medium tracking-wide mt-6">
                    Typically responds within 24-48 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

