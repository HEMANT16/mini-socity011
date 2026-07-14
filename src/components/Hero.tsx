import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#F8F7F3] overflow-hidden pt-20">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-12">
        
        {/* Elegant Typography Left Side */}
        <div className="flex flex-col items-start gap-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sage-green font-serif italic text-2xl md:text-3xl mb-4">The New Standard</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight tracking-tight text-charcoal mb-6">
              Elevated <br/>
              <span className="font-serif italic font-normal text-charcoal/70">Everyday</span> <br/>
              Footwear.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl text-charcoal/70 font-medium max-w-md leading-relaxed">
              Premium, organic materials crafted into modern silhouettes. Because childhood styling shouldn't mean compromising on aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-charcoal text-white px-8 py-4 font-bold tracking-wide hover:bg-sage-green transition-colors duration-300">
                Explore Collection
              </button>
              <button className="border border-charcoal/20 text-charcoal px-8 py-4 font-bold tracking-wide hover:border-charcoal transition-colors duration-300">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Editorial Collage Right Side */}
        <div className="relative h-[500px] md:h-[700px] w-full mt-12 lg:mt-0">
          {/* Main Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="absolute right-0 top-0 w-4/5 h-[75%] z-10"
          >
            <div className="w-full h-full p-3 bg-white shadow-2xl rounded-sm transform transition-transform hover:scale-105 duration-500 hover:z-30">
              <img src="/hero.png" alt="Toddler in streetwear" className="w-full h-full object-cover rounded-sm" />
            </div>
          </motion.div>

          {/* Overlapping Product Shot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10, x: -50 }}
            animate={{ opacity: 1, scale: 1, rotate: 6, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="absolute left-0 bottom-10 w-3/5 h-[55%] z-20"
          >
             <div className="w-full h-full p-3 bg-white shadow-2xl rounded-sm transform transition-transform hover:scale-105 duration-500 hover:z-30">
              <img src="/shoe.png" alt="Premium kid sneaker" className="w-full h-full object-cover rounded-sm" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
