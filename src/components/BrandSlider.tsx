import React from 'react';
import { PARTNER_BRANDS } from '../data';
import { Award, CheckCircle2 } from 'lucide-react';

interface BrandSliderProps {
  onSelectBrand: (brandName: string) => void;
}

export default function BrandSlider({ onSelectBrand }: BrandSliderProps) {
  
  // Custom stylistic typographic logo mockups representing premium style of each brand
  const getBrandLogoStyle = (name: string) => {
    switch (name.toLowerCase()) {
      case 'kohler':
        return { font: 'font-sans font-extrabold tracking-widest text-lg md:text-xl text-slate-900', style: 'border-slate-300' };
      case 'jaquar':
        return { font: 'font-serif italic font-extrabold tracking-wide text-lg md:text-xl text-red-600', style: 'border-red-100' };
      case 'kajaria':
        return { font: 'font-sans font-black tracking-normal text-lg md:text-xl text-slate-900 uppercase', style: 'border-slate-100' };
      case 'somany':
        return { font: 'font-sans font-bold tracking-tight text-lg md:text-xl text-slate-800 uppercase', style: 'border-slate-100' };
      case 'hindware italian':
        return { font: 'font-serif font-semibold tracking-wide text-md md:text-lg text-slate-700 uppercase', style: 'border-slate-100' };
      case 'carysil':
        return { font: 'font-mono font-bold tracking-tight text-md md:text-lg text-slate-800', style: 'border-slate-200' };
      case 'myk laticrete':
        return { font: 'font-sans font-black tracking-widest text-xs md:text-sm text-slate-900 uppercase', style: 'border-slate-200' };
      case 'johnson tiles':
        return { font: 'font-sans font-bold text-md md:text-lg text-red-700 uppercase', style: 'border-red-200' };
      default:
        return { font: 'font-sans font-bold text-slate-800', style: 'border-slate-100' };
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
    <section id="brands" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Authorized Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Brands We Trust &amp; Deal In
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            We source our collections directly from leading national and global manufacturers. Click any brand card to instantly view its premium product catalog.
          </p>
        </div>

        {/* Brands Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNER_BRANDS.map((brand) => {
            const logoTheme = getBrandLogoStyle(brand.name);
            return (
              <div
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-red-600/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md text-center flex flex-col justify-between group h-48"
              >
                {/* Brand Typographic Badge */}
                <div className="h-16 flex items-center justify-center border-b border-slate-150/50 pb-3 mb-3">
                  <span className={`${logoTheme.font} group-hover:scale-105 transition-transform duration-300`}>
                    {brand.name}
                  </span>
                </div>

                {/* Description & Metadata */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {brand.category}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Brand Selector CTA Indicator */}
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-red-600 transition-colors">
                  <Award size={10} />
                  <span>View Products →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate / Trust Banner */}
        <div className="mt-12 bg-slate-950 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-slate-800">
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
