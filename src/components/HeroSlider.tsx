import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface HeroSliderProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600",
      tagline: "Premium Tiles & Sanitaryware Showroom",
      heading: "We Fulfill Your Interior Aspirations",
      description: "Direct importer and distributor of luxury glazed vitrified tiles, designer sanitaryware, and premium bath wellness products in Visakhapatnam.",
      bullets: ["Genuine Brand Warranty", "1000+ Premium Designs", "Wholesale & Project Supply"]
    },
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
      tagline: "Authorized Trading & Distribution Agency",
      heading: "Trusted B2B Supply & Logistics Partner",
      description: "Partnering with global giants like Kohler, Jaquar, and Kajaria to supply contractors, builders, and sub-dealers across Coastal Andhra Pradesh.",
      bullets: ["Factory-Direct Pricing", "Vast Warehouse Reserves", "Zero-Breakage Secured Delivery"]
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
      tagline: "Luxury Bath Fittings & Quartz Kitchen Sinks",
      heading: "Elegance Engineered For Modern Homes",
      description: "Upgrade your living spaces with high-end PVD gold faucets, silent wall-hung closets, and composite quartz kitchen sinks.",
      bullets: ["Lead-Free Brass Fittings", "Stain-Free Composite Quartz", "Eco-Friendly Intelligent Flushing"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="home" className="relative h-[550px] md:h-[650px] w-full overflow-hidden bg-slate-900">
      {/* Slide Carousels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0.7, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Overlay gradient for premium readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/40 z-10" />
          
          <img
            src={slides[currentSlide].image}
            alt="Hero Slide Banner"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Interactive Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full text-white">
          <div className="max-w-2xl space-y-6">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 text-red-500 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>{slides[currentSlide].tagline}</span>
            </motion.div>

            {/* Slogan & Heading */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3.5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
              >
                {slides[currentSlide].heading}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base text-slate-300 leading-relaxed font-normal"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1.5"
            >
              {slides[currentSlide].bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-slate-200 text-xs md:text-sm">
                  <CheckCircle2 size={16} className="text-red-600 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>

            {/* Navigation Call-to-actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4"
            >
              <button
                onClick={() => onNavigate('products')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg shadow-red-600/25 cursor-pointer"
              >
                <span>Explore Catalog</span>
                <ArrowRight size={16} />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <PhoneCall size={16} className="text-red-600" />
                <span>Contact B2B Desk</span>
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Manual Left/Right Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white flex items-center justify-center transition-all border border-white/5 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white flex items-center justify-center transition-all border border-white/5 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-red-600 w-8' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
