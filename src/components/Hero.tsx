import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FDFDFB] via-[#FDFDFB] to-[#F1F6F2] pt-28 overflow-hidden flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full flex-1 flex flex-col justify-center mt-12 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text) */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-dark/40 font-medium mb-8"
            >
              <span className="w-8 h-[1px] bg-dark/20"></span>
              MINI SOCIETY — EST. 2024
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.9] font-medium tracking-tight text-dark relative"
            >
              FOR LITTLE <br className="hidden lg:block" /> EXPLORERS
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-sm md:text-base text-dark/50 font-body font-normal leading-relaxed max-w-[320px] mt-10"
            >
              Premium sneakers crafted for Generation Alpha. Designed like couture, built for the playground.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#collection"
                className="inline-flex justify-center items-center bg-mint/80 text-dark px-8 py-3.5 rounded-full font-display text-[11px] tracking-[0.1em] font-medium hover:bg-mint transition-colors duration-300"
              >
                Explore Collection
              </a>
              <a
                href="#story"
                className="inline-flex justify-center items-center border border-dark/10 bg-transparent text-dark px-8 py-3.5 rounded-full font-display text-[11px] tracking-[0.1em] font-medium hover:border-dark/30 transition-colors duration-300"
              >
                Our Story
              </a>
            </motion.div>
          </div>
          
          {/* Right Column (Card Shoe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative flex items-center justify-center h-[400px] md:h-[600px] w-full lg:-mt-10"
          >
            <div className="w-[85%] aspect-[4/3] bg-sand shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center p-8 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
              <img 
                src="/shoe-mint.jpg" 
                alt="Mint Green Sneaker" 
                className="w-full h-full object-contain animate-float"
                style={{ animationDuration: '6s' }}
              />
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Footer Area of Hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 pb-8 mt-12 flex justify-between items-center text-[9px] font-display tracking-[0.3em] uppercase text-dark/30 font-semibold"
      >
        <div>SCROLL</div>
        <div>GENERATION ALPHA</div>
        <div>PARENTS BUY — KIDS LOVE</div>
      </motion.div>
    </section>
  );
}
