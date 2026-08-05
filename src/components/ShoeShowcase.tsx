import React from 'react';
import { motion } from 'framer-motion';

const shoes = [
  { name: 'Matcha Berry', story: 'Kyoto afternoons', image: '/shoe-matcha.jpg' },
  { name: 'Mint Green', story: 'Morning dew', image: '/shoe-mint.jpg' },
  { name: 'Ube Cloud', story: 'Manila mornings', image: '/shoe-ube.jpg' },
  { name: 'Lavender Grey', story: 'Misty dawn', image: '/shoe-lavender.jpg' },
  { name: 'Peach Sorbet', story: 'Golden hour', image: '/shoe-peach.jpg' },
  { name: 'Blueberry Yogurt', story: 'Nordic breeze', image: '/shoe-blueberry.jpg' },
  { name: 'Cocoa Latte', story: 'Parisian café', image: '/shoe-cocoa.jpg' },
  { name: 'Pistachio Cream', story: 'Tuscan garden', image: '/shoe-pistachio.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
};

const ShoeShowcase: React.FC = () => {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[11px] tracking-[0.35em] uppercase text-deep-green font-medium mb-4">
            THE COLLECTION
          </h3>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-dark/90 tracking-tight leading-none">
            Eight stories. Eight shades.
          </h2>
          <p className="text-warm-grey text-base md:text-lg mt-4 max-w-lg">
            Every colour is named after something worth slowing down for.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 mt-16 pb-12"
      >
        {shoes.map((shoe, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex-shrink-0 w-[280px] md:w-[340px] rounded-[24px] overflow-hidden bg-sand cursor-pointer group hover:shadow-[0_24px_50px_-30px_rgba(26,26,26,0.28)] hover:-translate-y-2 transition-all duration-500 snap-center"
          >
            <div className="aspect-[4/3] p-6 flex items-center justify-center bg-sand">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-auto object-contain group-hover:scale-[1.08] transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-sand">
              <h4 className="font-display text-lg font-semibold text-dark">
                {shoe.name}
              </h4>
              <p className="text-sm text-warm-grey mt-1">
                {shoe.story}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ShoeShowcase;
