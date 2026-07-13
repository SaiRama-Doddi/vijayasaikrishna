import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Users, Tag, Building2, Landmark, Hotel, GraduationCap, HardHat } from 'lucide-react';
import { WHY_CHOOSE_US_STATS, INDUSTRIES_SERVED } from '../data';

export default function WhyChooseUs() {
  const [counts, setCounts] = useState<number[]>(WHY_CHOOSE_US_STATS.map(() => 0));

  // Run the counting animation when component loads
  useEffect(() => {
    const duration = 2000; // 2 seconds total animation time
    const steps = 40;
    const intervalMs = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setCounts(prev => {
        return WHY_CHOOSE_US_STATS.map((stat, idx) => {
          const target = stat.numeric;
          const currentVal = Math.floor((target / steps) * stepCount);
          return currentVal >= target ? target : currentVal;
        });
      });

      if (stepCount >= steps) {
        clearInterval(timer);
        // Ensure final state exactly matches target
        setCounts(WHY_CHOOSE_US_STATS.map(s => s.numeric));
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  const valueProps = [
    { title: "100% Genuine Materials", desc: "No second-grade copies. We deal strictly with original factory batches containing authorized warranty slips.", icon: ShieldCheck },
    { title: "Direct Wholesale Pricing", desc: "Our massive turnover status allows us to secure unmatched discount rates directly from factory sources.", icon: Tag },
    { title: "Rapid In-House Transport", desc: "Equipped with dedicated, padded flatbed logistics ensuring secure and breakage-free delivery inside Vizag region.", icon: Truck },
    { title: "Expert Technical Advisors", desc: "Our staff is highly trained on technical material physical properties, adhesive curing, and smart plumbing specs.", icon: Users }
  ];

  const industryIcons: Record<string, any> = {
    "Residential Projects": Building2,
    "Commercial Buildings": Building2,
    "Industrial Facilities": HardHat,
    "Retail Showrooms": Building2,
    "Contractors": HardHat,
    "Architects & Designers": Users,
    "Government Projects": Landmark,
    "Educational Institutions": GraduationCap,
    "Hotels & Luxury Resorts": Hotel
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Top Feature Grid: Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Value Proposition
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Corporate Developers Choose Us
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We understand that procurement is one of the most critical stages in real estate and construction. Any delay or compromise in material quality can escalate project costs.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              That is why our distribution network is built entirely on three pillars: **absolute reliability, factory-direct pricing, and safe on-schedule delivery.**
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center space-x-6 text-xs text-slate-500 font-mono">
              <div>
                <p className="text-slate-900 font-extrabold text-base">Vizag Core</p>
                <p>Strategic Hub</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-slate-900 font-extrabold text-base">GST Verified</p>
                <p>Tax Transparent</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-red-600/30 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{prop.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{prop.desc}</p>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Animated Statistics Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden mb-20 border border-slate-800"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -mt-48"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {WHY_CHOOSE_US_STATS.map((stat, idx) => {
              // Format count for display (append +, etc)
              const displayVal = stat.value.includes('+') 
                ? `${counts[idx]}+` 
                : counts[idx];

              return (
                <div key={idx} className="pt-6 md:pt-0 md:px-4 first:pt-0 first:border-0">
                  <p className="text-3.5xl md:text-4.5xl font-extrabold text-red-500 tracking-tight font-mono">
                    {displayVal}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Industries We Serve Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors &amp; Industries We Serve
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
              Our high stock capacity and comprehensive collections allow us to supply diverse sectors with extreme efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 text-center">
            {INDUSTRIES_SERVED.map((ind, idx) => {
              const IndIcon = industryIcons[ind] || Building2;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col items-center justify-center hover:bg-slate-100 hover:border-slate-200 transition-colors cursor-pointer group shadow-sm col-span-1"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center shadow-sm mb-2 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <IndIcon size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight group-hover:text-slate-950">
                    {ind}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
