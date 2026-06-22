'use client';

import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

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

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-card-border py-12 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2 text-text-secondary transition-colors duration-300">
          <span className="font-bold tracking-tight text-sm select-none">VM.dev</span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MarisaPavan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-card-bg rounded-[2px] border border-card-border text-text-secondary hover:text-accent hover:border-card-hover-border transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/venkatamarisa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-card-bg rounded-[2px] border border-card-border text-text-secondary hover:text-accent hover:border-card-hover-border transition-all duration-300"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:venkatasatya70@gmail.com"
            className="p-2 bg-card-bg rounded-[2px] border border-card-border text-text-secondary hover:text-accent hover:border-card-hover-border transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-text-muted text-xs font-light select-none">
            &copy; {new Date().getFullYear()} VM.dev. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 bg-card-bg text-text-secondary rounded-[2px] border border-card-border hover:text-accent hover:border-card-hover-border hover:bg-badge-bg transition-all duration-300 cursor-pointer outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
