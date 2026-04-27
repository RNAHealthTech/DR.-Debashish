'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, MessageSquare } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      condition: "Chronic Migraine Patient",
      text: "Dr. Chowdhury's approach changed my life. I had been suffering for 15 years, and his specialized headache clinic provided the breakthrough I needed.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      condition: "Stroke Recovery",
      text: "Exceptional care and empathy. The team's expertise in stroke rehabilitation and Dr. Chowdhury's guidance were instrumental in my recovery journey.",
      rating: 5
    },
    {
      name: "Amitabh Gupta",
      condition: "Epilepsy Management",
      text: "Highly professional and knowledgeable. He takes the time to explain the condition and the rationale behind the treatment plan.",
      rating: 5
    },
    {
      name: "Meena Devi",
      condition: "Parkinson's Care",
      text: "The best neurologist in Delhi. His clinical insight is unmatched, and he treats patients with immense respect and care.",
      rating: 5
    }
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
            <MessageSquare size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Patient Voices</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Patient <span className="text-gradient">Experiences</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium opacity-80">
            Real stories from patients who have trusted Dr. Debashish Chowdhury with their neurological health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[4rem] border border-white/40 shadow-xl relative overflow-hidden group"
            >
              <Quote className="absolute -right-4 -top-4 text-accent/5 group-hover:text-accent/10 transition-colors" size={160} />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-2xl font-medium leading-relaxed mb-8 italic opacity-90 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-black">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-lg">{testimonial.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary">{testimonial.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="glass p-16 rounded-[4rem] border border-accent/20 bg-accent/5 text-center">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Share Your Experience</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto font-medium opacity-80 mb-10">
              Your feedback helps us improve and helps other patients find the care they need.
            </p>
            <a href="/contact" className="bg-primary text-white dark:bg-white dark:text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-transform inline-block">
              Leave a Review
            </a>
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
