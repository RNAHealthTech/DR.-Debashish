'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { services } from '@/data/services';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServiceDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Service Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="text-accent flex items-center justify-center space-x-2 mx-auto"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link
            href="/#services"
            className="inline-flex items-center space-x-2 text-secondary hover:text-accent mb-12 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-widest">Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mb-8">
                <service.icon size={40} />
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-8 leading-tight tracking-tighter">
                {service.title}
              </h1>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-xl text-secondary leading-relaxed font-medium whitespace-pre-line">
                  {service.fullDesc}
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 p-5 bg-white rounded-2xl border border-border/50 shadow-sm"
                  >
                    <CheckCircle2 size={24} className="text-accent shrink-0" />
                    <span className="font-bold text-primary text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-serif italic mb-8 relative z-10">Schedule a Consultation</h3>
                <p className="text-white/70 mb-10 text-lg relative z-10">
                  Discuss your symptoms with Dr. Chowdhury and get a personalized treatment plan backed by decades of expertise.
                </p>

                <div className="space-y-6 relative z-10">
                  <a 
                    href="https://www.blkmaxhospital.com/doctor/debashish-chowdhury" 
                    target="_blank"
                    className="flex items-center justify-between bg-white text-primary px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all group"
                  >
                    <span>Book via BLK-Max</span>
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  </a>
                  
                  <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone size={20} className="text-accent" />
                      <span className="font-bold text-sm uppercase tracking-widest">Direct Contact</span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight">+91 11-30403040</p>
                    <p className="text-xs text-white/40 mt-2 font-medium">Extension: Neurology Department</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 bg-accent/5 border border-accent/10 rounded-3xl">
                <p className="text-secondary font-medium leading-relaxed italic text-sm">
                  &quot;Early diagnosis and targeted therapy are crucial in managing neurological disorders effectively. We provide evidence-based care tailored to your unique needs.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
