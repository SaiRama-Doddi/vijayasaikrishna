import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES_LIST } from '../data';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-900/10 rounded-full blur-3xl -ml-20"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-red-600/20">
            What We Excel At
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Trade &amp; Distribution Services
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
            From bulk B2B procurement to on-site custom logistics and official brand warranty assistance, we manage the complete lifecycle of premium interior surface sourcing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            // Dynamically resolve the icon from lucide-react
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 hover:border-red-600/45 transition-all duration-300 hover:shadow-xl hover:shadow-slate-950/40 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Indicator */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-red-500 flex items-center justify-center border border-slate-800 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Styled Card Margin Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Service Code: VSK-0{index + 1}</span>
                  <span className="text-red-500 group-hover:underline cursor-pointer">Inquire Now →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-red-600 text-white flex flex-col md:flex-row items-center justify-between shadow-xl"
        >
          <div className="mb-6 md:mb-0 space-y-1.5 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-extrabold tracking-tight">
              Need a Custom Product Specification or Bulk Delivery?
            </h3>
            <p className="text-xs md:text-sm font-medium text-slate-250 leading-relaxed max-w-xl">
              We coordinate directly with brand engineers for personalized tiles finishes or specialized concealed valves. Let us assist your architect or builder.
            </p>
          </div>
          <a
            href="https://wa.me/919100333355"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex-shrink-0 cursor-pointer"
          >
            <Icons.PhoneCall size={14} className="text-red-500" />
            <span>Chat with Ravi Sankar</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
