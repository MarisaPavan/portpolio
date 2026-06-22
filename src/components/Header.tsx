'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['services', 'tech-stack', 'experience', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'tech-stack', label: 'Skills' },
    { id: 'experience', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Brand logo - VM.dev */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-text-heading hover:text-accent transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="font-bold tracking-tight text-base select-none">VM.dev</span>
        </a>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-1 transition-colors duration-300 select-none ${
                activeSection === item.id
                  ? 'text-accent font-semibold'
                  : 'text-text-secondary hover:text-text-heading'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Resume link */}
          <a
            href="/VenkataMarisa_ShopifyDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-card-border bg-card-bg text-text-secondary hover:text-text-heading transition-all duration-300 select-none cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-[2px] border border-card-border bg-card-bg text-text-secondary hover:text-text-heading transition-all duration-300 select-none cursor-pointer outline-none"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </nav>

        {/* Mobile controls (theme + hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-[2px] border border-card-border bg-card-bg text-text-secondary hover:text-text-heading transition-all duration-300 select-none cursor-pointer outline-none"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-[2px] border border-card-border bg-card-bg text-text-secondary hover:text-text-heading transition-all duration-300 cursor-pointer outline-none"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-card-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-3 font-medium text-sm">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    // Slight timeout to let layout settle as the drawer starts closing
                    setTimeout(() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 50);
                  }}
                  className={`py-2.5 px-3 rounded-[2px] transition-colors select-none ${
                    activeSection === item.id
                      ? 'text-accent bg-accent-light font-semibold'
                      : 'text-text-secondary hover:text-text-heading hover:bg-card-bg'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/VenkataMarisa_ShopifyDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-[2px] border border-card-border bg-card-bg text-text-secondary hover:text-text-heading transition-all duration-300 font-semibold select-none cursor-pointer"
              >
                <FileText className="w-4.5 h-4.5" />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
