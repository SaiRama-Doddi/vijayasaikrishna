import React from 'react';
import { PARTNER_BRANDS } from '../data';
import { 
  Award, CheckCircle2, Droplet, ShowerHead, Grid, Bath, Layers, Hammer 
} from 'lucide-react';
import { motion } from 'motion/react';

interface BrandSliderProps {
  onSelectBrand: (brandName: string) => void;
}

export default function BrandSlider({ onSelectBrand }: BrandSliderProps) {
  
  const getBrandTheme = (name: string) => {
    switch (name.toLowerCase()) {
      case 'kohler':
        return {
          bgClass: 'bg-blue-50 text-blue-600 border-blue-100',
          textClass: 'text-blue-600',
          lineClass: 'bg-blue-100',
          icon: Droplet,
          isItalic: false,
          highlight: false
        };
      case 'jaquar':
        return {
          bgClass: 'bg-amber-50 text-amber-600 border-amber-100',
          textClass: 'text-amber-600',
          lineClass: 'bg-amber-100',
          icon: ShowerHead,
          isItalic: true,
          highlight: false
        };
      case 'kajaria':
        return {
          bgClass: 'bg-teal-50 text-teal-600 border-teal-100',
          textClass: 'text-teal-600',
          lineClass: 'bg-teal-100',
          icon: Grid,
          isItalic: false,
          highlight: false
        };
      case 'somany':
        return {
          bgClass: 'bg-violet-50 text-violet-600 border-violet-100',
          textClass: 'text-violet-600',
          lineClass: 'bg-violet-100',
          icon: Bath,
          isItalic: false,
          highlight: false
        };
      case 'hindware italian':
        return {
          bgClass: 'bg-orange-50 text-orange-600 border-orange-100',
          textClass: 'text-orange-600',
          lineClass: 'bg-orange-100',
          icon: Droplet,
          isItalic: false,
          highlight: false
        };
      case 'carysil':
        return {
          bgClass: 'bg-sky-50 text-sky-600 border-sky-100',
          textClass: 'text-sky-600',
          lineClass: 'bg-sky-100',
          icon: Layers,
          isItalic: false,
          highlight: false
        };
      case 'myk laticrete':
        return {
          bgClass: 'bg-red-50 text-red-600 border-red-100',
          textClass: 'text-red-600',
          lineClass: 'bg-red-100',
          icon: Hammer,
          isItalic: false,
          highlight: true
        };
      case 'johnson tiles':
        return {
          bgClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
          textClass: 'text-emerald-600',
          lineClass: 'bg-emerald-100',
          icon: Grid,
          isItalic: false,
          highlight: false
        };
      default:
        return {
          bgClass: 'bg-slate-50 text-slate-600 border-slate-100',
          textClass: 'text-slate-600',
          lineClass: 'bg-slate-100',
          icon: Award,
          isItalic: false,
          highlight: false
        };
    }
  };

  const handleBrandClick = (brandName: string) => {
    onSelectBrand(brandName);
    // Smooth scroll to product catalog
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="brands" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center space-x-2 text-red-600 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="font-extrabold text-xs uppercase tracking-widest">Our Brands</span>
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted Brands. Premium Quality.
          </h2>
          <div className="flex items-center justify-center space-x-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          </div>
          <p className="mt-5 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            We partner with world-class brands to bring you the finest range of tiles, sanitaryware, bath fittings, and hardware solutions.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pt-4">
          {PARTNER_BRANDS.map((brand, idx) => {
            const theme = getBrandTheme(brand.name);
            const IconComponent = theme.icon;
            
            return (
              <motion.div
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`bg-white rounded-2xl p-6 pt-9 border ${
                  theme.highlight 
                    ? 'border-red-500 shadow-md shadow-red-500/5' 
                    : 'border-slate-150'
                } hover:border-red-500 hover:shadow-xl transition-all duration-300 cursor-pointer text-center flex flex-col justify-between group relative h-[240px]`}
              >
                {/* Floating Icon Badge */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-md ${theme.bgClass}`}>
                  <IconComponent size={18} className="stroke-[2.5]" />
                </div>

                {/* Brand Name */}
                <div className="mt-1">
                  {theme.isItalic ? (
                    <h3 className="text-2xl font-bold font-serif italic text-red-600 tracking-wide py-0.5">Jaquar</h3>
                  ) : (
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">{brand.name}</h3>
                  )}
                </div>

                {/* Category Divider Line */}
                <div className="flex items-center justify-center space-x-2 my-2">
                  <div className={`h-px flex-grow ${theme.lineClass}`} />
                  <span className={`text-[9px] font-black tracking-wider uppercase ${theme.textClass}`}>{brand.category}</span>
                  <div className={`h-px flex-grow ${theme.lineClass}`} />
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-[210px] mx-auto line-clamp-2">
                  {brand.description}
                </p>

                {/* CTA Link */}
                <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center justify-center space-x-1.5 text-[9px] font-black uppercase tracking-wider ${theme.textClass} group-hover:scale-105 transition-transform`}>
                  <Grid size={11} />
                  <span>View Products →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-slate-950 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-slate-800 shadow-lg">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-10 h-10 rounded-full bg-red-600/10 text-red-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100">100% Verified Stock Guarantee</h4>
              <p className="text-[11px] text-slate-400">All materials shipped from our depot include original batch bar-codes and company warranty papers.</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest border border-red-600/20 px-3.5 py-1.5 rounded-full bg-red-600/5">
            Authorized Partner
          </span>
        </div>

      </div>
    </section>
  );
}
