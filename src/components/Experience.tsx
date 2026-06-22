'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Briefcase, TrendingUp } from 'lucide-react';

interface Achievement {
  text: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: Achievement[];
  tags: string[];
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const experiences: ExperienceItem[] = [
    {
      role: "Lead Shopify & Frontend Architect",
      company: "Enterprise Storefront Devs",
      period: "2024 - PRESENT",
      description: "Driving storefront architecture, performance scaling, and conversion rate optimizations for high-traffic Shopify brands including Albany Park, Timbuk2, X-Chair, and Mavix.",
      achievements: [
        { text: "Architected customized checkout rules, checkout extensibility, and custom extension-only apps, elevating checkout conversion rates." },
        { text: "Engineered 3rd-party ERP integrations (SAP) to synchronize inventory levels, fulfillment pipelines, and pricing data dynamically." },
        { text: "Led comprehensive SEO and page-speed audits, reducing Time to Interactive (TTI) by 45% and optimizing Google Core Web Vitals across major sites." }
      ],
      tags: ["Shopify Plus", "SAP ERP", "Remix", "Custom Apps", "Theme Dev", "SEO"]
    },
    {
      role: "Senior Backend & Middle-Layer Engineer",
      company: "Modern Retail Systems (Ulta Beauty)",
      period: "2022 - 2024",
      description: "Spearheaded backend middleware solutions to manage catalog synchronization and content enrichment across headless CMS networks.",
      achievements: [
        { text: "Built a robust Node.js/Express middle-layer to aggregate and enrich catalog assets sourced from Amplience CMS and enterprise backend APIs." },
        { text: "Designed custom GraphQL APIs serving unified schema models directly to React frontends, reducing page payload weight by 38%." },
        { text: "Implemented high-performance MongoDB data schemas to log and cache dynamic product nodes and webhook updates." }
      ],
      tags: ["Node.js", "GraphQL", "Amplience CMS", "MongoDB", "React"]
    },
    {
      role: "Shopify Theme & Custom App Engineer",
      company: "eCommerce Solutions Group",
      period: "2021 - 2022",
      description: "Developed customized eCommerce frontends and back-office integration pipelines for high-growth direct-to-consumer businesses.",
      achievements: [
        { text: "Developed high-end custom Shopify themes from scratch using Liquid, custom layouts, and modern responsive CSS grid designs." },
        { text: "Created custom private apps using Remix and Node.js to solve unique warehouse fulfillment and shipping logic constraints." },
        { text: "Integrated checkout webhooks and custom script fields to support bulk B2B purchase routes and automated pricing rules." }
      ],
      tags: ["Shopify Liquid", "Remix", "Node.js", "Express.js", "Javascript"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto border-b border-card-border">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4"
        >
          <Briefcase className="w-3.5 h-3.5 text-accent" />
          <span>Professional Timeline</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-heading mb-4"
        >
          Professional Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto text-sm md:text-base font-light"
        >
          Detailed timeline of theme engineering, custom checkouts, ERP syncing, and Amplience CMS backend architectures.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Timeline main bar */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-card-border transform md:-translate-x-1/2" />
        
        {/* Animated timeline bar filler */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-accent transform md:-translate-x-1/2"
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-stretch">
                {/* Timeline node circle: Interactive number step */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-4 md:left-1/2 top-5 w-8 h-8 rounded-full bg-background border-2 border-accent text-text-heading flex items-center justify-center text-xs font-bold font-mono z-20 transform -translate-x-[15px] md:-translate-x-4 shadow select-none"
                >
                  {`0${index + 1}`}
                </motion.div>

                {/* Left/Right layouts */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? -20 : 20), y: isMobile ? 20 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="p-6 rounded-[2px] bg-card-bg border border-card-border hover:border-card-hover-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01]"
                  >
                    {/* Period badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] text-[10px] font-bold tracking-wider text-accent bg-accent-light border border-card-border mb-4 uppercase">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>

                    {/* Role Header */}
                    <h3 className="text-xl font-bold text-text-heading mb-1 leading-snug">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-text-secondary mb-4">{exp.company}</h4>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed font-light">{exp.description}</p>

                    {/* Bullet Accomplishments */}
                    <div className="space-y-3 mb-6 text-left">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5">
                          <TrendingUp className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-text-secondary text-xs leading-relaxed">{ach.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.tags.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 text-[10px] font-medium text-badge-text bg-badge-bg border border-card-border rounded-[2px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty side for layout centering */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
