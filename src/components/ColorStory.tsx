import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colorData = [
  { id: '01', name: 'Matcha Berry', description: 'Sun-ripened strawberries folded into ceremonial matcha. A quiet afternoon in Kyoto.', gradient: 'linear-gradient(180deg, #8B9B6B 0%, #C4A882 30%, #D4968A 70%, #B86B7A 100%)', circles: ['#8B9B6B', '#D4968A', '#F5F0EB'] },
  { id: '02', name: 'Ube Cloud', description: 'Purple yam ice cream dissolving into whipped clouds. Manila mornings reimagined.', gradient: 'linear-gradient(180deg, #C4B4D8 0%, #D5C8E6 40%, #E8DFF0 100%)', circles: ['#8B7DAF', '#C4B4D8', '#F0EBF5'] },
  { id: '03', name: 'Mint Latte', description: 'Fresh mint leaves over steamed oat milk. The first sip of a slow morning.', gradient: 'linear-gradient(180deg, #A8C5B0 0%, #C5D8C0 40%, #E8E5D8 100%)', circles: ['#7BA88A', '#C5D8C0', '#F5F3EC'] },
  { id: '04', name: 'Peach Sorbet', description: 'Stone fruit kissed by summer light. Golden hour in an Italian orchard.', gradient: 'linear-gradient(180deg, #E8C5A0 0%, #E8D0B0 40%, #F0E0C8 100%)', circles: ['#E0A878', '#E8D0B0', '#F5EDE0'] },
  { id: '05', name: 'Blueberry Yogurt', description: 'Wild berries swirled through Scandinavian skyr. Cool as a Nordic breeze.', gradient: 'linear-gradient(180deg, #95B4C8 0%, #B0C8D8 40%, #D0DDE8 100%)', circles: ['#6890A8', '#B0C8D8', '#F0F3F5'] },
  { id: '06', name: 'Cocoa Latte', description: 'Single-origin cocoa poured over warm oat. A Parisian café in every step.', gradient: 'linear-gradient(180deg, #A88B70 0%, #C4AB90 40%, #E0D0B8 100%)', circles: ['#8B7060', '#C4AB90', '#F0E8DC'] },
  { id: '07', name: 'Pistachio Cream', description: 'Crushed pistachios folded into Sicilian gelato. A summer that never ends.', gradient: 'linear-gradient(180deg, #A8B89A 0%, #C0CDB0 40%, #DDE5D0 100%)', circles: ['#7A8B6A', '#C0CDB0', '#F0F0E8'] },
];

export default function ColorStory() {
  const [expandedIndex, setExpandedIndex] = useState(2);

  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[11px] tracking-[0.35em] uppercase text-deep-green font-medium mb-4">
              COLOUR PALETTE
            </h2>
            <p className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-dark/90 tracking-tight leading-none">
              dessert hour.
            </p>
          </div>
          <p className="text-warm-grey text-sm md:text-base max-w-xs leading-relaxed italic md:text-right">
            Every shade is named after something worth slowing down for.
          </p>
        </div>

        {/* Desktop Accordion */}
        <div className="hidden md:flex gap-2 h-[420px] lg:h-[480px]">
          {colorData.map((color, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <motion.div
                key={color.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ background: color.gradient }}
                animate={{ flex: isExpanded ? 3 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setExpandedIndex(index)}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                
                <div className="absolute top-5 left-5 text-xs font-bold text-white/70 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {color.id}
                </div>

                <div className="absolute bottom-20 left-5 flex -space-x-2">
                  {color.circles.map((c, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white/40"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-lg font-semibold text-dark/80 whitespace-nowrap">
                    {color.name}
                  </h3>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-dark/50 max-w-[250px] mt-2 whitespace-normal">
                          {color.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
          {colorData.map((color) => (
            <div
              key={color.id}
              className="relative w-[200px] h-[320px] shrink-0 rounded-2xl snap-center"
              style={{ background: color.gradient }}
            >
              <div className="absolute top-5 left-5 text-xs font-bold text-white/70 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {color.id}
              </div>

              <div className="absolute bottom-20 left-5 flex -space-x-2">
                {color.circles.map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white/40"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <div className="absolute bottom-5 left-5 pr-5">
                <h3 className="font-display text-lg font-semibold text-dark/80">
                  {color.name}
                </h3>
                <p className="text-sm text-dark/50 mt-2">
                  {color.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
