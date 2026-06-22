'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Code } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  description: string;
  glowColor: string;
  icon: React.ReactNode;
}

export function TechStack() {
  const skills: Skill[] = [
    {
      name: "Shopify Plus",
      category: "eCOMMERCE CORE",
      description: "Custom themes (Liquid/Slate), app development (Custom & Extension-only apps), checkout extensibility, custom checkout rules, and high-performance pixel integrations.",
      glowColor: "rgba(0, 103, 184, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.78 8.87l-2.52-5.74A1 1 0 0016.34 2.5H7.66a1 1 0 00-.92.63L4.22 8.87A1.5 1.5 0 003.5 10v9.5A2.5 2.5 0 006 22h12a2.5 2.5 0 002.5-2.5V10a1.5 1.5 0 00-.72-1.13zM8.34 4.5h7.32l1.64 3.75H6.7l1.64-3.75zM18.5 19.5a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V10.25h13v9.25z" />
        </svg>
      )
    },
    {
      name: "Remix",
      category: "FRAMEWORK",
      description: "Utilized for modern, fast Shopify App development, leveraging web-standards, edge caching, and server-side routes to construct fast Shopify integrations.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "FRONTEND FRAMEWORK",
      description: "Architecting decoupled, high-performance headless Shopify storefronts using the App Router, ISR (Incremental Static Regeneration), and Server Components.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: <Code className="w-8 h-8 text-accent" />
    },
    {
      name: "React.js",
      category: "FRONTEND LIBRARY",
      description: "Developing robust client modules, complex state layouts, and dynamic shopping carts (optimistic states) utilizing React 19.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "BACKEND DESIGNS",
      description: "Building fast backend middleware, high-traffic webhook ingestion queues, custom ERP synchronization integrations, and middleware systems.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 14l-6.5 3.8L5.5 16V8l6.5-3.8 6.5 3.8v8z" />
        </svg>
      )
    },
    {
      name: "Express.js",
      category: "BACKEND MIDDLEWARE",
      description: "Developing custom REST and GraphQL APIs to facilitate real-time inventory checks, webhooks logic, and high-performance middleware sync.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "DATABASE ENGINE",
      description: "Designing optimized, high-performance schemas to cache Shopify metadata, keep local product indexes, sync catalog delta tables, and handle transaction logs.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-.6 0-1 .4-1 1v2.1c-2.3.8-4 2.8-4 5.3C7 14 10.1 19 12 22c1.9-3 5-8 5-11.6 0-2.5-1.7-4.5-4-5.3V3c0-.6-.4-1-1-1z" />
          <path d="M12 6.5v12.2" />
        </svg>
      )
    },
    {
      name: "Cursor MCP / AI",
      category: "DEVELOPER TOOLING & AI",
      description: "Implementing advanced AI agent workflows, Cursor Model Context Protocol (MCP) integrations, and developer environments to automate builds.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const marqueeSkills = [
    "Shopify Plus", "Remix Framework", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Cursor MCP",
    "Liquid", "GraphQL APIs", "SAP Integration", "Tailwind CSS", "TypeScript", "JavaScript"
  ];

  return (
    <section id="tech-stack" className="py-24 px-4 w-full max-w-7xl mx-auto border-b border-card-border overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4"
        >
          <span>Skills & Tooling</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-heading mb-4"
        >
          Technical Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto text-sm md:text-base font-light"
        >
          An integrated stack optimized for building fast Shopify themes, custom Remix/Node integrations, and advanced headless checkouts.
        </motion.p>
      </div>

      {/* Infinite running marquee animation */}
      <div className="relative w-full overflow-hidden py-3 mb-16 border-y border-card-border bg-card-bg/25 backdrop-blur-sm">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee gap-8 items-center py-1 flex">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-card-bg border border-card-border text-text-secondary font-mono text-xs tracking-wider select-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card glowColor={skill.glowColor} className="h-full flex flex-col justify-between p-6 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-badge-bg rounded-[2px] border border-card-border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[9px] font-extrabold tracking-widest text-text-muted uppercase mt-1">
                    {skill.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-heading mb-2">{skill.name}</h3>
                  <p className="text-text-secondary text-xs font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
