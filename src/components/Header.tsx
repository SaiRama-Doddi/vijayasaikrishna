import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, MapPin, ShoppingBag, Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from '../data';
import { EnquiryItem } from '../types';
import VSKLogo from './VSKLogo';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  enquiryCart: EnquiryItem[];
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ enquiryCart, onOpenCart, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const totalCartItems = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLinkClick = (id: string) => {
    const wasMobileOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);

    if (wasMobileOpen) {
      setTimeout(() => {
        onNavigate(id);
      }, 300);
    } else {
      onNavigate(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Products', id: 'products', hasDropdown: true },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Brands', id: 'brands' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <Clock size={13} className="text-red-600" />
              <span>Mon-Sat: {COMPANY_DETAILS.businessHours.weekdays} | Sun: {COMPANY_DETAILS.businessHours.sundays}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <MapPin size={13} className="text-red-600" />
              <span>Visakhapatnam, AP</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
              <Phone size={13} className="text-red-600" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
              <Mail size={13} className="text-red-600" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
          
          {/* Brand Logo */}
          <div className="relative flex items-center cursor-pointer h-16 w-32" onClick={() => handleLinkClick('home')}>
            <img src={logoImg} alt="Vijaya Sai Krishna Agencies" className="absolute left-0 top-1/2 -translate-y-1/2 h-24 max-w-none w-auto object-contain drop-shadow-md hover:scale-105 transition-transform" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors rounded-lg hover:bg-slate-50">
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-white rounded-xl shadow-xl border border-slate-100 p-5 grid grid-cols-2 gap-4"
                        >
                          <div className="col-span-2 pb-2 border-b border-slate-100 mb-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Browse Product Categories</span>
                          </div>
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => handleLinkClick(`category-${cat.id}`)}
                              className="flex items-start text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-md bg-red-50 flex items-center justify-center text-red-600 mr-3 group-hover:bg-red-100 transition-colors">
                                <ShoppingBag size={15} />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-slate-900 group-hover:text-red-600">{cat.name}</h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1">{cat.shortDesc}</p>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors rounded-lg hover:bg-slate-50"
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Area: Cart and Quick Inquiry */}
          <div className="flex items-center space-x-3">
            {/* Quote Action CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-600/15 hover:shadow-lg hover:shadow-red-600/25 active:scale-95 cursor-pointer"
            >
              <MessageSquare size={14} />
              <span>Contact Us</span>
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white w-full overflow-y-auto max-h-[calc(100vh-4rem)]"
            >
              <div className="p-4 space-y-1.5">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.id} className="space-y-1">
                        <div className="px-3 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                          {link.name} Categories
                        </div>
                        <div className="pl-3 grid grid-cols-1 gap-1">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => handleLinkClick(`category-${cat.id}`)}
                              className="flex items-center space-x-2 py-2 px-3 text-sm text-slate-700 hover:text-red-600 text-left rounded-md hover:bg-slate-50"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                              <span>{cat.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="block w-full text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      {link.name}
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
                  <div className="flex flex-col space-y-1 text-xs text-slate-500 px-3">
                    <span className="font-bold text-slate-800">Direct Hotline:</span>
                    <span>{COMPANY_DETAILS.phone}</span>
                    <span className="mt-2 font-bold text-slate-800">Office Email:</span>
                    <span>{COMPANY_DETAILS.email}</span>
                  </div>
                  <button
                    onClick={() => handleLinkClick('contact')}
                    className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                  >
                    <MessageSquare size={16} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
