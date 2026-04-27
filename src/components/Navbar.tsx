'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Academic', href: '/academic' },
    { name: 'Publications', href: '/publications' },
    { name: 'Media', href: '/media' },
    { 
      name: 'More', 
      dropdown: [
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Resources', href: '/resources' },
        { name: 'Awards', href: '/awards' },
      ] 
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-8 py-3 rounded-full flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-white/50 backdrop-blur-2xl' : 'border-white/20 backdrop-blur-xl'}`}>
          <Link href="/" className="text-xl flex items-center group">
            <span className="text-primary font-bold tracking-tight">DR.</span> 
            <span className="text-accent ml-1 font-serif italic tracking-wide group-hover:text-primary transition-colors">Debashish</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/item" ref={link.dropdown ? dropdownRef : null}>
                {link.dropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="flex items-center space-x-1 text-[11px] font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl p-4 shadow-2xl border border-border z-50"
                      >
                        <div className="flex flex-col space-y-1">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-accent hover:bg-muted rounded-xl transition-all"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all ml-4"
            >
              Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden mt-4 glass rounded-[2.5rem] p-8 absolute w-[calc(100%-3rem)] left-6 shadow-2xl border border-white/20 overflow-hidden"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between text-lg font-black tracking-tight"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={20} className={activeDropdown === link.name ? 'rotate-180' : ''} />
                        </button>
                        {activeDropdown === link.name && (
                          <div className="flex flex-col mt-4 ml-4 space-y-4 border-l-2 border-accent/20 pl-4">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-sm font-bold text-secondary hover:text-accent"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-lg font-black tracking-tight"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="https://www.blkmaxhospital.com/doctor/debashish-chowdhury"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent text-white text-center py-5 rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl shadow-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
