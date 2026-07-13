import React from 'react';
import { motion } from 'motion/react';
import tilesHero from '../assets/tiles_hero.png';
import { 
  Award, Tag, ShieldCheck, Warehouse, Package, ArrowRight, 
  PhoneCall, Users, MapPin, Layers, Headphones, Building2 
} from 'lucide-react';

interface HeroSliderProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  
  const bottomCards = [
    {
      title: "Wide Product Range",
      description: "Plumbing, Sanitary, Tiles, Electricals & more.",
      icon: Layers
    },
    {
      title: "Top Global Brands",
      description: "Authorized dealer for leading global brands.",
      icon: Award
    },
    {
      title: "Reliable Logistics",
      description: "Timely delivery with complete safety.",
      icon: ShieldCheck
    },
    {
      title: "Dedicated Support",
      description: "Expert assistance for all your business needs.",
      icon: Headphones
    },
    {
      title: "Strong Infrastructure",
      description: "Spacious warehouses & efficient management.",
      icon: Building2
    }
  ];

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .hero-clip-image {
            clip-path: polygon(22% 0, 100% 0, 100% 100%, 18% 100%, 10% 70%, 3% 45%, 10% 20%);
          }
          .hero-clip-border {
            clip-path: polygon(22% 0, 100% 0, 100% 100%, 18% 100%, 10% 70%, 3% 45%, 10% 20%);
          }
        }
      `}</style>

      <div id="home" className="relative w-full bg-slate-50 border-b border-slate-100 overflow-hidden">
        
        {/* World map watermark on the left bg */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
          alt="Map Watermark" 
          className="absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-[0.03] pointer-events-none mix-blend-multiply object-cover object-center z-0"
        />
        
        {/* Main Hero Container Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:h-[560px] relative z-10">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-start px-4 md:px-6 pt-6 lg:pt-10 pb-10 space-y-6 relative z-10">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="self-start inline-flex items-center space-x-2 border border-red-200 bg-red-50/40 text-red-600 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm"
            >
              <Award size={13} className="stroke-[2.5]" />
              <span>Authorized Trading &amp; Distribution Agency</span>
            </motion.div>

            {/* Slogan & Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-[36px] lg:text-[36px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]"
              >
                Reliable Supply. <br className="hidden lg:block" /> <span className="text-red-600">Trusted Quality.</span> <br className="hidden lg:block" /> Lasting Partnerships.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium max-w-xl"
              >
                Empowering businesses with premium products, seamless distribution, and exceptional service across Andhra Pradesh. Your success is our commitment.
              </motion.p>
            </div>

            {/* Inline Feature Blocks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-red-600/10">
                  <Tag size={16} className="stroke-[2]" />
                </div>
                <div className="text-[11px] font-extrabold text-slate-800 leading-tight">
                  Factory-Direct<br />Pricing
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-red-600/10">
                  <ShieldCheck size={16} className="stroke-[2]" />
                </div>
                <div className="text-[11px] font-extrabold text-slate-800 leading-tight">
                  Zero-Breakage<br />Secured Delivery
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-red-600/10">
                  <Warehouse size={16} className="stroke-[2]" />
                </div>
                <div className="text-[11px] font-extrabold text-slate-800 leading-tight">
                  Vast Warehouse<br />Reserves
                </div>
              </div>
            </motion.div>

            {/* Navigation Call-to-actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3"
            >
              <button
                onClick={() => onNavigate('products')}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200 shadow-md shadow-red-600/15 hover:shadow-lg hover:shadow-red-600/25 active:scale-95 cursor-pointer"
              >
                <Package size={15} />
                <span>View Our Products</span>
                <ArrowRight size={13} />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider border border-slate-200 flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
              >
                <PhoneCall size={15} className="text-red-600" />
                <span>Contact Our Team</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column Content - Diagonal Image & Stats */}
          <div className="lg:col-span-5 xl:col-span-6 relative h-[280px] sm:h-[350px] lg:h-full overflow-hidden">
            
            {/* Red Diagonal Border Backdrop */}
            <div className="absolute inset-0 bg-red-600 hero-clip-border hidden lg:block" />
            
            {/* Image Container with Diagonal Clip */}
            <div className="absolute inset-y-0 right-0 left-0 lg:left-[12px] bg-slate-900 hero-clip-image">
              <img
                src={tilesHero}
                alt="Luxury Tiles and Sanitaryware Showroom"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Statistics Strip Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-16 lg:bottom-20 right-4 z-20 bg-slate-950/95 text-white py-2.5 px-5 rounded-xl flex items-center space-x-5 shadow-xl border border-slate-800/60 hidden sm:flex max-w-full"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Users size={14} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-tight">500+</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Happy Partners</div>
                </div>
              </div>
              
              <div className="h-6 w-px bg-slate-800" />
              
              <div className="flex items-center space-x-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-tight">Coastal AP</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Strong Network</div>
                </div>
              </div>
              
              <div className="h-6 w-px bg-slate-800" />
              
              <div className="flex items-center space-x-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Package size={14} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-tight">10K+</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Products Delivered</div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* 5 Bottom Card Columns */}
      <div className="relative z-30 -mt-6 lg:-mt-10 max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {bottomCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-150 p-5 shadow-md hover:shadow-xl hover:border-red-500/20 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <card.icon size={20} className="stroke-[2]" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 mb-1.5 uppercase tracking-wide">{card.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
