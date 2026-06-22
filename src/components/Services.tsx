'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Users, ShoppingBag, Layers, CheckCircle2 } from 'lucide-react';

interface ServiceHighlight {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  glowColor: string;
  highlights: string[];
}

export function Services() {
  const services: ServiceHighlight[] = [
    {
      title: "B2B Wholesale Implementations",
      category: "ENTERPRISE B2B",
      description: "Re-engineering wholesale channels with multi-store environments, customer portals, custom checkout validations, and automated price engines.",
      glowColor: "rgba(20, 184, 166, 0.06)",
      icon: <Users className="w-8 h-8 text-accent" />,
      highlights: [
        "Multi-tiered volume discount rules",
        "Company account portals & purchasing approvals",
        "Custom checkout validations for bulk order routes",
        "Direct SAP/ERP warehouse stock syncing"
      ]
    },
    {
      title: "B2C High-Conversion Frontends",
      category: "DTC B2C PLATFORMS",
      description: "Crafting blazing fast consumer storefronts using Shopify Plus, optimized Liquid templates, and page-weight minimization for maximum sales throughput.",
      glowColor: "rgba(99, 102, 241, 0.06)",
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      highlights: [
        "TTI speed improvement of up to 45%",
        "Shopify Checkout Extensibility app migrations",
        "Structured SEO microdata schemas",
        "Custom web pixel tracking events mapping"
      ]
    },
    {
      title: "Full-Stack Custom Middleware",
      category: "END-TO-END DEVELOPMENT",
      description: "Developing robust API orchestrations, custom Remix checkouts, database storage arrays, and middleware caches linking CMS systems.",
      glowColor: "rgba(236, 72, 153, 0.06)",
      icon: <Layers className="w-8 h-8 text-accent" />,
      highlights: [
        "Headless Amplience CMS product resolvers",
        "Node/Express GraphQL inventory sync middleware",
        "High-performance MongoDB data caches",
        "Remix framework edge router deployments"
      ]
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto border-b border-card-border">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4"
        >
          <span>Services & Capabilities</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-heading mb-4"
        >
          Specialized eCommerce Engineering
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base font-light"
        >
          Custom end-to-end B2B/B2C implementations built to achieve faster load times, seamless backend operations, and high checkouts conversions.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants} className="flex">
            <Card
              glowColor={service.glowColor}
              className="flex flex-col justify-between w-full p-8 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest text-text-muted uppercase mt-2">
                    {service.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-text-heading mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              <div>
                {/* Custom Highlight Sub-Section */}
                <div className="border-t border-card-border pt-6 mt-2">
                  <h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-4">Features Overview</h4>
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-text-secondary font-light">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
