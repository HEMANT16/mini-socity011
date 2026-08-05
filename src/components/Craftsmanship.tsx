import React from 'react';
import { motion } from 'framer-motion';

const materials = [
  {
    name: 'Suede',
    description: 'Hand-selected premium suede with a buttery soft touch',
    color: '#C4AB90',
  },
  {
    name: 'Knit Mesh',
    description: 'Breathable micro-knit for all-day airflow',
    color: '#A8C5B0',
  },
  {
    name: 'Vegan Leather',
    description: 'Durable plant-based leather, soft from day one',
    color: '#E8D0B0',
  },
  {
    name: 'Precision Stitching',
    description: 'Reinforced seams built to outlast the playground',
    color: '#B0C8D8',
  },
  {
    name: 'EVA Foam',
    description: 'Cloud-step cushioning that absorbs every landing',
    color: '#C4B4D8',
  },
  {
    name: 'Natural Rubber',
    description: 'Flexible, grippy outsoles from sustainable sources',
    color: '#8B9B6B',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Craftsmanship() {
  return (
    <section className="w-full bg-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-display text-[11px] tracking-[0.35em] uppercase text-mint font-medium block mb-4">
            CRAFTSMANSHIP
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream tracking-tight leading-none">
            Obsessed with detail.
          </h2>
          <p className="text-cream/50 text-base md:text-lg mt-4 max-w-lg font-body">
            Six materials, meticulously sourced. Each one chosen for how it feels,
            how it wears, and how it lasts.
          </p>
        </motion.div>

        {/* Material Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              variants={itemVariants}
              className="group relative rounded-[24px] overflow-hidden cursor-pointer"
              style={{ background: material.color }}
            >
              <div className="aspect-[4/3] flex flex-col justify-end p-8">
                {/* Number */}
                <span className="absolute top-6 left-6 text-[11px] font-display font-bold text-dark/40 tracking-[0.2em]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-dark/90">
                    {material.name}
                  </h3>
                  <p className="text-dark/50 text-sm mt-2 font-body leading-relaxed max-w-[260px]">
                    {material.description}
                  </p>
                </div>
              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
