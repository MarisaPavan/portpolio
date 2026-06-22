'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  glowColor: string;
  demoUrl?: string;
  codeUrl?: string;
  longDescription: string;
  metrics: string[];
  architecture: string;
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Albany Park: High-Conversion Theme Dev",
      category: "THEME DEVELOPMENT & SPEED",
      description: "Implemented premium custom Shopify theme features for high-end furniture brand Albany Park. Focused on detailed UI sections, page weight minimization, and comprehensive SEO optimization to achieve high conversions.",
      tech: ["Shopify Plus", "Liquid Templates", "Javascript", "SEO Audits"],
      features: [
        "Re-engineered complex product collection page structures",
        "Optimized image delivery, lazy-loading, and scripts",
        "Drove SEO metadata schemas to enhance search placement",
        "Achieved measurable boosts in conversion metrics"
      ],
      glowColor: "rgba(20, 184, 166, 0.05)",
      demoUrl: "https://www.albanypark.com/",
      longDescription: "Albany Park needed to boost conversion rates across their high-end furniture catalog. We diagnosed severe page lag on collection and product pages. By re-engineering collection page sorting, rewriting custom Shopify Liquid sections, lazily loading resources, and refining script orchestration, we significantly improved mobile performance and overall customer checkout conversion rates.",
      metrics: ["45% Speed Increase", "+12% Mobile Conversions", "98 Google SEO"],
      architecture: "Custom Shopify Liquid sections, vanilla JavaScript optimization modules, structured schema JSON integration, and advanced asset compression pipelines."
    },
    {
      title: "Timbuk2: Checkout Extensions & Apps",
      category: "SHOPIFY CUSTOM APPS",
      description: "Developed customized checkout scripts, cart discount apps, and extension-only applications for Timbuk2, delivering a robust customer checkout logic path without compromising security.",
      tech: ["Checkout Extensibility", "Remix Framework", "React", "Custom Apps"],
      features: [
        "Upgraded checkout routes to modern Extension-only app architecture",
        "Built dynamic in-cart promotions and upsell widgets",
        "Configured secure webhook transaction monitors",
        "Implemented seamless shipping method override rules"
      ],
      glowColor: "rgba(20, 184, 166, 0.05)",
      demoUrl: "https://www.timbuk2.com/",
      longDescription: "With Shopify's move away from checkout.liquid, Timbuk2 needed checkout customization. We built a custom Remix-based extension app to implement custom discount scripts, cart promotional extensions, and secure shipping rule overrides, ensuring a frictionless upgrade path to Checkout Extensibility.",
      metrics: ["100% App Compliance", "Zero Checkout downtime", "15k Daily Transactions"],
      architecture: "Shopify Extension-only App system, Remix framework on Vercel Edge, Express API webhook handlers, and secure JWT-based merchant authentication."
    },
    {
      title: "X-Chair & Mavix: SAP ERP Orchestrator",
      category: "SHOPIFY API INTEGRATION",
      description: "Designed a high-throughput backend integration pipeline syncing inventory and orders in real-time between Shopify Plus and enterprise SAP ERP databases, serving X-Chair and Mavix.",
      tech: ["Shopify Plus API", "GraphQL APIs", "Node.js Middleware", "SAP Integration"],
      features: [
        "Real-time two-way sync for 50,000+ SKU records",
        "Automated fulfillment queue handlers with failure failovers",
        "Shopify API orchestration mapping order states",
        "Dramatically reduced out-of-stock checkouts"
      ],
      glowColor: "rgba(20, 184, 166, 0.05)",
      demoUrl: "https://www.xchair.com/",
      longDescription: "To resolve catalog inventory synchronization errors between multi-node warehouse databases and front-end Shopify storefronts, we engineered an asynchronous Node.js integration orchestrator. This middleware translates real-time delta logs, syncs inventory levels, translates SAP product schemas, and resolves out-of-stock checkout conflicts dynamically.",
      metrics: ["50k SKU Sync", "<5s Sync Latency", "99.9% Sync Accuracy"],
      architecture: "Shopify REST & Admin GraphQL endpoints, Node.js cluster workers, MongoDB staging caches, Express API gateways, secure SAP RFC connector channels, and real-time GraphQL subscriptions."
    },
    {
      title: "Ulta Beauty: Amplience CMS & Node.js Middleware",
      category: "FULL-STACK MIDDLEWARE",
      description: "Engineered a custom Node.js backend middle-layer that acts as a proxy, fetching and enriching content data from Amplience CMS and other backend enterprise APIs, and providing optimized GraphQL queries directly to a React frontend.",
      tech: ["Node.js", "GraphQL APIs", "React", "Amplience CMS"],
      features: [
        "Enriches raw backend API product nodes with CMS resources",
        "Custom GraphQL resolver schema aggregating data models",
        "Integrated MongoDB local caching structures to reduce backend load",
        "Provided optimized, fast feeds directly to React clients"
      ],
      glowColor: "rgba(20, 184, 166, 0.05)",
      demoUrl: "https://www.ulta.com/",
      longDescription: "Ulta Beauty required a high-capacity proxy layer to pull catalog details from enterprise backend APIs and enrich them with marketing creative resources hosted inside Amplience Headless CMS. We developed a robust Node.js middleware mapping GraphQL custom schemas, serving optimized data feeds to the frontend in milliseconds.",
      metrics: ["38% Payload Decrease", "300ms API Response", "MongoDB caching Layer"],
      architecture: "Node.js middleware framework, GraphQL resolvers, Amplience CMS SDK integration, MongoDB cache delta tables, and enterprise backend API routes."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto border-b border-card-border">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4"
        >
          <Code className="w-3.5 h-3.5 text-accent" />
          <span>Case Studies</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-heading mb-4"
        >
          Production Implementations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto text-sm md:text-base font-light"
        >
          Explore live production systems, optimized themes, custom checkout apps, and content-rich middle layer architectures. Click any card for detailed flyout metrics.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={projectVariants} className="flex">
            <Card
              glowColor={project.glowColor}
              className="flex flex-col justify-between w-full p-8"
            >
              <div>
                {/* Category & Title */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-extrabold tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-[2px] border border-card-border">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3 hover:text-accent transition-colors duration-200 cursor-pointer" onClick={() => setActiveProject(project)}>
                  {project.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features List */}
                <h4 className="text-text-heading text-xs font-semibold uppercase tracking-wider mb-3">Core Contributions</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-text-secondary font-light">
                      <Sparkles className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[9px] font-medium text-badge-text bg-badge-bg border border-card-border rounded-[2px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="px-3.5 py-1.5 text-xs flex-1"
                    onClick={() => setActiveProject(project)}
                  >
                    Case Details
                  </Button>
                  {project.demoUrl && (
                    <Button
                      variant="primary"
                      className="px-3.5 py-1.5 text-xs flex-1 shadow-md"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Visit Site
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button 
                      variant="secondary" 
                      className="px-3.5 py-1.5 text-xs flex-1" 
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      GitHub Profile
                      <GithubIcon className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive slide-over Flyout Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full sm:max-w-2xl h-full bg-background border-l border-card-border p-6 sm:p-10 shadow-2xl overflow-y-auto flex flex-col justify-between z-10"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-extrabold tracking-wider text-accent bg-accent-light px-2.5 py-0.5 rounded-[2px] border border-card-border uppercase">
                    {activeProject.category}
                  </span>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 text-text-secondary hover:text-text-heading hover:bg-card-bg rounded-[2px] border border-card-border transition-all cursor-pointer outline-none"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-text-heading mb-4">
                  {activeProject.title}
                </h3>
                
                <p className="text-text-secondary text-sm font-light leading-relaxed mb-8">
                  {activeProject.longDescription}
                </p>
                
                {/* Metrics */}
                <h4 className="text-xs font-semibold text-text-heading uppercase tracking-wider mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeProject.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 rounded-[2px] bg-card-bg border border-card-border text-center">
                      <p className="text-lg sm:text-xl font-bold text-accent">{metric.split(" ")[0]}</p>
                      <p className="text-[9px] uppercase tracking-wider text-text-muted font-light mt-1">
                        {metric.split(" ").slice(1).join(" ")}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Core Contributions */}
                <h4 className="text-xs font-semibold text-text-heading uppercase tracking-wider mb-4">Core Contributions</h4>
                <ul className="space-y-3 mb-8">
                  {activeProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-light leading-relaxed">
                      <Sparkles className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Architecture details */}
                <h4 className="text-xs font-semibold text-text-heading uppercase tracking-wider mb-4">Technical Stack & Architecture</h4>
                <div className="p-4 rounded-[2px] bg-card-bg border border-card-border text-xs text-text-secondary leading-relaxed font-light mb-8">
                  {activeProject.architecture}
                </div>
              </div>
              
              {/* Footer action */}
              <div className="border-t border-card-border pt-6 mt-8 flex gap-4">
                {activeProject.demoUrl && (
                  <Button
                    variant="primary"
                    className="flex-1 shadow-md"
                    onClick={() => window.open(activeProject.demoUrl, '_blank')}
                  >
                    Visit Live Site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setActiveProject(null)}
                >
                  Close Details
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
