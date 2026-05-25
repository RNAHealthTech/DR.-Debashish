'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Generous delay to prevent accidental closing
  };

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
      const isOutsideDesktop = desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node);
      const isOutsideMobile = !mobileMenuRef.current || !mobileMenuRef.current.contains(event.target as Node);

      if (isOutsideDesktop && isOutsideMobile) {
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
    {
      name: 'Media',
      dropdown: [
        { name: 'All Media', href: '/media' },
        { name: 'TV/Media', href: '/media?category=TV/Media Public Awareness' },
        { name: 'Patient Counseling', href: '/media?category=Patient Counseling' },
        { name: 'Conference Talks', href: '/media?category=Conference Talks' },
      ]
    },
    {
      name: 'More',
      dropdown: [
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Resources', href: '/resources' },
        { name: 'Awards & Honors', href: '/awards' },
        { name: 'For Doctors', href: '/for-doctors' },
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-10 py-4 rounded-full flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-md border-white/30 backdrop-blur-3xl' : 'border-white/20 backdrop-blur-2xl'}`}>
          <Link href="/" className="text-2xl flex items-center group">
            <span className="text-primary font-black tracking-tighter">DR.</span>
            <span className="text-accent ml-1.5 font-serif italic font-medium tracking-tight group-hover:text-primary transition-colors">Debashish</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12" ref={desktopMenuRef}>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group/dropdown"
              >
                {link.dropdown ? (
                  <button className="flex items-center space-x-1 text-[11px] font-extrabold uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors py-4">
                    <span>{link.name}</span>
                    <ChevronDown size={12} className="transition-transform duration-300 group-hover/dropdown:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors py-4 block"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu - Pure CSS */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 z-50 opacity-0 invisible translate-y-4 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 pointer-events-none group-hover/dropdown:pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20">
                      <div className="flex flex-col space-y-1">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-primary hover:text-accent hover:bg-accent/5 rounded-2xl transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="bg-primary text-white px-9 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all ml-4"
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
              ref={mobileMenuRef}
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
                          className="flex items-center justify-between text-lg font-black tracking-tight text-primary hover:text-accent transition-colors"
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
                                className="text-sm font-bold text-primary hover:text-accent transition-colors"
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
                        className="text-lg font-black tracking-tight text-primary hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white text-center py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Consult
                  </Link>
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
