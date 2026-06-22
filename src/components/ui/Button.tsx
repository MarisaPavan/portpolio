'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold outline-none cursor-pointer select-none rounded-[2px] overflow-hidden group";
  
  let variantStyle = "";
  if (variant === 'primary') {
    // Primary has a transparent solid layer, as the liquid-gradient-flow span renders the background
    variantStyle = "text-white dark:text-slate-950 border-none shadow-md hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300";
  } else if (variant === 'secondary') {
    variantStyle = "bg-badge-bg text-text-secondary border border-card-border hover:bg-badge-bg/85 active:bg-badge-bg transition-all duration-300";
  } else if (variant === 'outline') {
    variantStyle = "bg-transparent text-text-secondary border border-card-border hover:border-card-hover-border hover:text-text-heading hover:shadow-[0_0_15px_var(--accent-light)] transition-all duration-300";
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {/* Primary Button Flowing Liquid Layer */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent via-[#6366f1] to-accent bg-[length:200%_auto] animate-liquid-flow z-0" />
      )}
      
      {/* Outline Button Sliding Liquid Refraction Wave */}
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-accent-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
