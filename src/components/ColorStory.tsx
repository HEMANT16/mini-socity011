import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colorStories = [
  {
    id: '01',
    name: 'Matcha Berry',
    description: 'Sun-ripened strawberries folded into ceremonial matcha. A quiet afternoon in Kyoto.',
    gradient: 'linear-gradient(180deg, #8B9B6B 0%, #C4A882 30%, #D4968A 70%, #B86B7A 100%)',
    circles: ['#8B9B6B', '#D4968A', '#F5F0EB'],
  },
  {
    id: '02',
    name: 'Ube Cloud',
    description: 'Purple yam ice cream dissolving into whipped clouds. Manila mornings reimagined.',
    gradient: 'linear-gradient(180deg, #C4B4D8 0%, #D5C8E6 40%, #E8DFF0 100%)',
    circles: ['#8B7DAF', '#C4B4D8', '#F0EBF5'],
  },
  {
    id: '03',
    name: 'Mint Latte',
    description: 'Fresh mint leaves over steamed oat milk. The first sip of a slow morning.',
    gradient: 'linear-gradient(180deg, #A8C5B0 0%, #C5D8C0 40%, #E8E5D8 100%)',
    circles: ['#7BA88A', '#C5D8C0', '#F5F3EC'],
  },
  {
    id: '04',
    name: 'Peach Sorbet',
    description: 'Stone fruit kissed by summer light. Golden hour in an Italian orchard.',
    gradient: 'linear-gradient(180deg, #E8C5A0 0%, #E8D0B0 40%, #F0E0C8 100%)',
    circles: ['#E0A878', '#E8D0B0', '#F5EDE0'],
  },
  {
    id: '05',
    name: 'Blueberry Yogurt',
    description: 'Wild berries swirled through Scandinavian skyr. Cool as a Nordic breeze.',
    gradient: 'linear-gradient(180deg, #95B4C8 0%, #B0C8D8 40%, #D0DDE8 100%)',
    circles: ['#6890A8', '#B0C8D8', '#F0F3F5'],
  },
  {
    id: '06',
    name: 'Cocoa Latte',
    description: 'Single-origin cocoa poured over warm oat. A Parisian café in every step.',
    gradient: 'linear-gradient(180deg, #A88B70 0%, #C4AB90 40%, #E0D0B8 100%)',
    circles: ['#8B7060', '#C4AB90', '#F0E8DC'],
  },
];

export default function ColorStory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2); // Default expanded: Mint Latte

  return (
    <section className="w-full bg-[#F8F7F3] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-charcoal/90 tracking-tight leading-none"
          >
            dessert hour.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-charcoal/50 max-w-xs leading-relaxed font-body italic"
          >
            Every shade is named after something worth slowing down for. Hover to taste the story.
          </motion.p>
        </div>

        {/* Desktop: Accordion Cards */}
        <div className="hidden md:flex gap-2 h-[420px] lg:h-[480px]">
          {colorStories.map((color, index) => {
            const isExpanded = hoveredIndex === index;
            return (
              <motion.div
                key={color.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: color.gradient }}
                animate={{
                  flex: isExpanded ? 3 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(2)}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute top-5 left-5 z-10"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-bold text-white/70 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full tracking-wider">
                    {color.id}
                  </span>
                </motion.div>

                {/* Palette Circles */}
                <div className="absolute bottom-20 left-5 flex gap-[-4px]">
                  {color.circles.map((circleColor, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white/40"
                      style={{
                        backgroundColor: circleColor,
                        marginLeft: i > 0 ? '-6px' : '0',
                        zIndex: 3 - i,
                      }}
                    />
                  ))}
                </div>

                {/* Name */}
                <div className="absolute bottom-5 left-5 right-5">
                  <motion.h3
                    className="text-lg font-heading font-semibold text-charcoal/80 whitespace-nowrap"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {color.name}
                  </motion.h3>

                  {/* Description - Only visible when expanded */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="text-sm text-charcoal/50 mt-2 leading-relaxed max-w-[250px] font-body"
                      >
                        {color.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle shine overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none"
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {colorStories.map((color) => (
            <motion.div
              key={color.id}
              className="relative rounded-2xl overflow-hidden flex-shrink-0 w-[200px] h-[320px] snap-center"
              style={{ background: color.gradient }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Number Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-bold text-white/70 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-wider">
                  {color.id}
                </span>
              </div>

              {/* Palette Circles */}
              <div className="absolute bottom-16 left-4 flex">
                {color.circles.map((circleColor, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white/40"
                    style={{
                      backgroundColor: circleColor,
                      marginLeft: i > 0 ? '-5px' : '0',
                      zIndex: 3 - i,
                    }}
                  />
                ))}
              </div>

              {/* Name */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-heading font-semibold text-charcoal/80">
                  {color.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
