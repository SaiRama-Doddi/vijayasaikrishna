import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            Quickly resolve your concerns regarding our order placements, showroom consultations, custom project transportations, and B2B pricing.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="border border-slate-150 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="text-red-600 flex-shrink-0">
                      <HelpCircle size={18} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-slate-900 pr-4 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className="text-slate-400">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1.5 text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
