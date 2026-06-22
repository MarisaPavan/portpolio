'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Read cached theme or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vm.dev/#person",
        "name": "Venkata Marisa",
        "jobTitle": "Senior Shopify Plus Developer & Full-Stack eCommerce Engineer",
        "url": "https://vm.dev/",
        "sameAs": [
          "https://github.com/MarisaPavan",
          "https://linkedin.com/in/venkatamarisa"
        ],
        "email": "venkatasatya70@gmail.com",
        "telephone": "+919542872635",
        "description": "Senior Shopify Plus Developer, Freelance eCommerce Engineer, and Full-Stack Consultant available for remote full-time opportunities, contract integrations, and freelance projects.",
        "knowsAbout": [
          "Shopify Plus",
          "Shopify Freelance Development",
          "eCommerce Consulting",
          "Shopify Headless Storefronts",
          "Remix Framework App Development",
          "Node.js & Express middleware",
          "React.js",
          "GraphQL APIs",
          "SAP ERP Integrations",
          "eCommerce Speed Optimization",
          "Checkout Extensibility",
          "Amplience CMS"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Venkata Marisa | Shopify Freelancer & eCommerce Consultant",
        "image": "https://vm.dev/avatar.png",
        "url": "https://vm.dev/",
        "telephone": "+919542872635",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "description": "Premium Shopify Plus theme engineering, custom app development, SAP ERP inventory synchronization, and headless storefront consulting available worldwide.",
        "provider": {
          "@id": "https://vm.dev/#person"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Shopify Plus Theme Engineering & Customization",
            "description": "Premium, responsive custom liquid/slate Shopify Plus theme development with speed audits."
          },
          {
            "@type": "Offer",
            "name": "Shopify App Development (Remix & Node.js)",
            "description": "Custom extensions and app integrations linking warehousing, custom logic, and checkout extensibility."
          },
          {
            "@type": "Offer",
            "name": "eCommerce Full-Time and Contract Consulting",
            "description": "Available for remote full-time architectural leads and full-stack contract consulting."
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-indigo-500/20 selection:text-indigo-300 transition-colors duration-300">
      {/* Structured SEO Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Scroll-Spy Floating Header with theme controls */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main className="flex flex-col">
        <Hero />
        <Services />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
