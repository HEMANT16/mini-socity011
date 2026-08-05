import React from 'react';
import { motion } from 'framer-motion';

const leftFeatures = [
  {
    title: 'Breathable Knit Mesh',
    desc: 'Air moves, feet stay cool.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    position: 'top-[15%] -left-[10%] md:-left-[25%]'
  },
  {
    title: 'Premium Vegan Leather',
    desc: 'Buttery structure, zero compromise.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    position: 'top-[45%] -left-[15%] md:-left-[35%]'
  },
  {
    title: 'Soft Suede',
    desc: 'Hand-brushed, cloud-touch panels.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
    position: 'bottom-[15%] -left-[5%] md:-left-[15%]'
  }
];

const rightFeatures = [
  {
    title: 'Microfiber Lining',
    desc: 'A hug for every heel.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
      </svg>
    ),
    position: 'top-[20%] -right-[10%] md:-right-[25%]'
  },
  {
    title: 'EVA Midsole',
    desc: 'Featherlight cushion for big jumps.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    position: 'top-[55%] -right-[15%] md:-right-[35%]'
  },
  {
    title: 'Rubber Outsole',
    desc: 'Grip for every sudden idea.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    position: 'bottom-[10%] -right-[5%] md:-right-[20%]'
  }
];

export default function ProductDetail() {
  return (
    <section className="bg-[#FDFDFB] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[70rem] mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 text-[9px] tracking-[0.4em] uppercase text-dark/40 font-medium mb-6">
            <span className="w-8 h-[1px] bg-dark/20"></span>
            02 — ANATOMY OF A MINI
            <span className="w-8 h-[1px] bg-dark/20"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-dark tracking-tight">
            Built like the big ones.
          </h2>
        </motion.div>

        {/* Interactive Image Container */}
        <div className="relative max-w-2xl mx-auto w-full mt-24">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-[4/3] md:aspect-[16/10] bg-sand rounded-[32px] overflow-hidden shadow-2xl relative z-0 flex items-center justify-center"
          >
            <img 
              src="/shoe-mint.jpg" 
              alt="Anatomy of a Mini Society Sneaker" 
              className="w-full h-full object-cover" 
            />
          </motion.div>

          {/* Left Features */}
          {leftFeatures.map((feature, i) => (
            <motion.div
              key={`left-${i}`}
              initial={{ opacity: 0, x: 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              className={`absolute z-10 ${feature.position}`}
            >
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-full pr-5 pl-2 py-2 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-mint/30 flex items-center justify-center text-deep-green shrink-0">
                  {feature.icon}
                </div>
                <div className="text-left flex flex-col justify-center">
                  <span className="font-display text-sm font-semibold text-dark leading-tight">{feature.title}</span>
                  <span className="text-[10px] text-dark/50 leading-tight">{feature.desc}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Right Features */}
          {rightFeatures.map((feature, i) => (
            <motion.div
              key={`right-${i}`}
              initial={{ opacity: 0, x: -30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
              className={`absolute z-10 ${feature.position}`}
            >
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-full pr-5 pl-2 py-2 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-mint/30 flex items-center justify-center text-deep-green shrink-0">
                  {feature.icon}
                </div>
                <div className="text-left flex flex-col justify-center">
                  <span className="font-display text-sm font-semibold text-dark leading-tight">{feature.title}</span>
                  <span className="text-[10px] text-dark/50 leading-tight">{feature.desc}</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
