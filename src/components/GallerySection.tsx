import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Eye, X, Send, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { value: 'all', label: 'All Photos' },
    { value: 'showroom', label: 'Showroom Displays' },
    { value: 'products', label: 'Material Collections' },
    { value: 'warehouse', label: 'Stock Warehouse' },
    { value: 'delivery', label: 'Safe Logistics' },
    { value: 'team', label: 'Corporate Team' }
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-y border-slate-150">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Media Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Showroom, Stock &amp; Operations
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed lg:whitespace-nowrap">
            Explore our premium interior fittings display, massive warehouse depots, and delivery fleet.
          </p>
        </div>

        {/* Filter Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm group hover:shadow-lg transition-all"
              >
                {/* Photo Stage */}
                <div className="relative h-60 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setSelectedItem(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover magnifying glass effect */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-slate-950 flex items-center justify-center shadow-md">
                      <Eye size={18} className="text-red-600" />
                    </div>
                  </div>

                  <span className="absolute bottom-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Column */}
              <div className="relative flex-1 bg-slate-900 flex items-center justify-center max-h-[50vh] md:max-h-full overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close floating button on small screens */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 md:hidden p-2 bg-black/60 rounded-full text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Information Column */}
              <div className="p-6 md:w-80 bg-slate-900 text-white flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-bold font-mono text-red-500 uppercase tracking-widest">
                        Image Detail View
                      </span>
                      <h3 className="text-base font-extrabold tracking-tight mt-0.5">
                        {selectedItem.title}
                      </h3>
                    </div>
                    {/* Close button on desktop */}
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="hidden md:block p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[10px] bg-red-600/10 text-red-500 font-bold px-2.5 py-1 rounded-full border border-red-600/20 uppercase tracking-widest inline-block mb-3">
                      {selectedItem.category}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-[10px] text-slate-400 space-y-1">
                    <p className="font-bold text-slate-300 uppercase">Operational Guarantee</p>
                    <p>All showroom products are certified and mapped with full vendor warranties.</p>
                  </div>
                  
                  <a
                    href={`https://wa.me/919100333355?text=Hi%20Ravi%20Sankar,%20I'm%20interested%20in%20inquiring%20about:%20${encodeURIComponent(selectedItem.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <Send size={13} />
                    <span>Inquire About This Section</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
