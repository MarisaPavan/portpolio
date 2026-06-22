'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { MessageSquare, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-b border-card-border">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-card-border bg-card-bg text-text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4"
        >
          <MessageSquare className="w-3.5 h-3.5 text-accent" />
          <span>Connect</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-heading mb-4"
        >
          Let&apos;s Build Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto text-sm md:text-base font-light"
        >
          Available for remote full-time roles, contract engineering, and premium Shopify freelance development. Reach out to start your project.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col gap-6"
        >
          <Card glowColor="rgba(20, 184, 166, 0.05)" className="flex-1 flex flex-col justify-between p-8 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-heading mb-4 text-center">Hire Me / Contact Info</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Email</p>
                    <a href="mailto:venkatasatya70@gmail.com" className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium">
                      venkatasatya70@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Phone</p>
                    <a href="tel:+919542872635" className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium">
                      +91 9542872635
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border text-accent">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">WhatsApp</p>
                    <a href="https://wa.me/919542872635" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium">
                      +91 9542872635
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border text-accent">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">LinkedIn</p>
                    <a href="https://linkedin.com/in/venkatamarisa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium">
                      linkedin.com/in/venkatamarisa
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 md:col-span-2 justify-center border-t border-card-border/50 pt-4 mt-2">
                  <div className="p-3 bg-badge-bg rounded-[2px] border border-card-border text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-text-secondary text-sm font-medium">India (Remote Globally)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-card-border pt-6 mt-8">
              <p className="text-text-muted text-xs font-light leading-relaxed text-center">
                Currently booking contracts and architectural reviews. Specialized in Shopify Plus speed audits, custom checkouts, ERP middle-layers, and headless transitions.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Magical Gratitude closing copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto mt-20 text-center p-8 rounded-[2px] border border-card-border bg-card-bg/50 backdrop-blur-sm select-none"
      >
        <Sparkles className="w-6 h-6 text-accent mx-auto mb-4 animate-pulse" />
        <h3 className="text-xl font-bold text-text-heading mb-2">
          Thanks for visiting!
        </h3>
        <p className="text-accent font-semibold italic text-base md:text-lg mb-4 select-text">
          &ldquo;You bring the vision. I&apos;ll bring the code.&rdquo;
        </p>
        <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          I&apos;m always looking to connect with visionary brands, founders, and engineering teams to build the next generation of eCommerce. If you have an exciting project, need an SAP ERP sync, or want to double your storefront conversion rates—let&apos;s build it together.
        </p>
      </motion.div>
    </section>
  );
}
