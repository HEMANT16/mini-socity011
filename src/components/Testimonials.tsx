import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Finally, shoes that look as good as they feel. My daughter refuses to wear anything else now.', name: 'Priya Sharma', location: 'Mumbai' },
  { quote: 'The quality is unmatched. We\'ve been through every brand — this is the one we\'re staying with.', name: 'Arjun Mehta', location: 'Bangalore' },
  { quote: 'I bought these as a gift and now every parent in our group wants a pair. The mint green is stunning.', name: 'Sneha Reddy', location: 'Hyderabad' },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-[11px] tracking-[0.35em] uppercase text-deep-green font-medium mb-4">
            WHAT PARENTS SAY
          </h2>
          <p className="font-display text-4xl md:text-6xl font-light text-dark tracking-tight">
            Trusted by families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-sand rounded-[24px] p-8 md:p-10 flex flex-col justify-between"
            >
              <p className="font-body text-dark/80 text-base md:text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint/40 flex items-center justify-center font-display text-sm font-semibold text-deep-green shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-warm-grey text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
