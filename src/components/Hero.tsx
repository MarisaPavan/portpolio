'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowUpRight, ShoppingBag, Sparkles, FileText } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 overflow-hidden py-20 border-b border-card-border">
      {/* Premium animated drifting background light blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-accent/5 dark:bg-accent/10 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [40, -40, 40],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent/5 dark:bg-accent/10 blur-[120px]"
        />
        {/* Global grid background overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Interactive floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particle 1 */}
          <motion.div
            initial={{ opacity: 0.08, y: "10vh", x: "12vw", scale: 0.8 }}
            animate={{
              y: ["10vh", "32vh", "10vh"],
              x: ["12vw", "14vw", "12vw"],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-8 h-8 border border-accent/30 rounded-[4px]"
          />
          {/* Floating particle 2 */}
          <motion.div
            initial={{ opacity: 0.12, y: "65vh", x: "82vw", scale: 1 }}
            animate={{
              y: ["65vh", "48vh", "65vh"],
              x: ["82vw", "79vw", "82vw"],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-12 h-12 border border-accent/20 rounded-full"
          />
          {/* Floating particle 3 */}
          <motion.div
            initial={{ opacity: 0.15, y: "20vh", x: "78vw", scale: 0.9 }}
            animate={{
              y: ["20vh", "10vh", "20vh"],
              x: ["78vw", "80vw", "78vw"],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-6 h-6 border-t-2 border-l-2 border-accent/25"
          />
          {/* Floating particle 4 */}
          <motion.div
            initial={{ opacity: 0.08, y: "72vh", x: "8vw", scale: 1.1 }}
            animate={{
              y: ["72vh", "82vh", "72vh"],
              x: ["8vw", "6vw", "8vw"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-10 h-10 border border-dashed border-accent/30 rounded-md"
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Shopify Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold tracking-wide mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Shopify Freelancer & Senior Full-Time Developer</span>
        </motion.div>

        {/* Impactful Headline with premium theme colors */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-text-heading mb-6 leading-[1.1]"
        >
          Crafting High-Performance <br className="hidden md:block" />
          <span className="font-semibold text-accent">
            eCommerce Solutions
          </span>
        </motion.h1>

        {/* Sub-headline / Professional Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-light text-center"
        >
          Venkata Marisa is a Senior Shopify Plus Freelance Developer & Full-Stack Engineer with 5+ years of experience, available for custom contract integrations, remote freelance projects, and full-time engineering roles. Specializing in high-performance Liquid themes, custom Remix apps, checkout extensibility, and 3rd-party ERP (SAP) sync pipelines. Developed backend middle-layers aggregating Amplience CMS datasets and backend Spring Boot APIs to serve optimized GraphQL queries directly to React frontends on production storefronts like Albany Park, Timbuk2, X-Chair, Mavix, and Ulta Beauty.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center w-full sm:w-auto px-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <Button
              variant="primary"
              onClick={() => scrollToSection('projects')}
              className="group shadow-md transition-all duration-300 w-full"
            >
              View Projects
              <ShoppingBag className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-110" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <a
              href="/VenkataMarisa_ShopifyDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                className="w-full group"
              >
                View Resume
                <FileText className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-110" />
              </Button>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="group backdrop-blur-sm w-full"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - relative flow layout to prevent overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-20 flex flex-col items-center gap-2 cursor-pointer z-10 select-none relative"
        onClick={() => scrollToSection('services')}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Scroll down</span>
        <div className="w-[18px] h-[30px] rounded-[2px] border border-card-border flex justify-center p-[4px] bg-card-bg/40 backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="w-[4px] h-[6px] rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
