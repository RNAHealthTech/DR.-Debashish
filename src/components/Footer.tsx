import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl mb-6">
              <span className="text-primary font-bold tracking-tight">DR.</span> 
              <span className="text-accent ml-1 font-serif italic tracking-wide">Debashish Chowdhury</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-sm mb-8">
              Providing world-class neurological care with over 40 years of academic and clinical excellence. Specializing in chronic headache, stroke, and complex brain disorders.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-4 text-sm text-secondary">
              <a href="/academic" className="hover:text-accent transition-colors">Academic Profile</a>
              <a href="/publications" className="hover:text-accent transition-colors">Research & Publications</a>
              <a href="/resources" className="hover:text-accent transition-colors">Patient Resources</a>
              <a href="/contact" className="hover:text-accent transition-colors">Book Consultation</a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Location</h4>
            <p className="text-sm text-secondary leading-relaxed">
              BLK-Max Super Speciality Hospital<br />
              Pusa Road, New Delhi, India<br />
              110005
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-secondary font-bold uppercase tracking-widest">
            © 2026 Dr. (Prof.) Debashish Chowdhury. All rights reserved.
          </div>
          
          <div className="flex space-x-8 text-[10px] text-secondary font-bold uppercase tracking-widest">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms-conditions" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
