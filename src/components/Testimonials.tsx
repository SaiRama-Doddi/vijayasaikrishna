import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-16"
        >
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Client Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted By Elite Builders &amp; Architects
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed lg:whitespace-nowrap">
            Hear from our premier building partners, architects, and corporate developers.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-150 p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-red-600/20 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-slate-100 flex-shrink-0">
                <Quote size={40} className="stroke-[1.5]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Star Ratings */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-red-600 text-red-600" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 mt-6">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{test.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{test.role}</p>
                  <p className="text-[11px] text-red-600 font-bold">{test.company}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
