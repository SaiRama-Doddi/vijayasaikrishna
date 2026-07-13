import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, Star, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from '../data';
import VSKLogo from './VSKLogo';
import logoImg from '../assets/logo.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  const quickLinks = [
    { name: "Home Dashboard", id: "home" },
    { name: "About Corporate Profile", id: "about" },
    { name: "Services Portfolio", id: "services" },
    { name: "Browse Products", id: "products" },
    { name: "Media Gallery", id: "gallery" },
    { name: "Trusted Brands", id: "brands" },
    { name: "Frequently Asked Questions", id: "faq" },
    { name: "Submit Enquiry Form", id: "contact" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 relative z-10">
        
        {/* Company Column */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <img src={logoImg} alt="Vijaya Sai Krishna Agencies" className="h-12 w-auto object-contain drop-shadow-sm opacity-95" />
            <div className="space-y-1">
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-extrabold tracking-tight text-white">Vijaya Sai Krishna</span>
                <span className="text-red-500 font-medium text-xs tracking-wider uppercase">Agencies</span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider">TILES & SANITARY • Visakhapatnam</p>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Authorized trading and distribution agency based in Visakhapatnam. Offering the region's finest glazed vitrified tiles, designer sanitaryware, and premium bath wellness collections.
          </p>

          <p className="text-xs text-slate-500 italic font-medium">
            &ldquo;We fulfill your Interior aspirations&rdquo;
          </p>

          {/* Socials Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href={COMPANY_DETAILS.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href={COMPANY_DETAILS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href={COMPANY_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="WhatsApp"
            >
              <Send size={14} />
            </a>
          </div>
        </div>

        {/* Categories column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2">
            Product Ranges
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {PRODUCT_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleLinkClick(`category-${cat.id}`)}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 bg-red-500/60 rounded-full"></span>
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2">
            Quick Sitemap
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Headquarters Details Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2">
            Headquarters Office
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{COMPANY_DETAILS.address}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={15} className="text-red-500 flex-shrink-0" />
              <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-red-500 transition-colors">
                {COMPANY_DETAILS.phone}
              </a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={15} className="text-red-500 flex-shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-red-500 transition-colors">
                {COMPANY_DETAILS.email}
              </a>
            </li>
          </ul>
          
          <div className="pt-3">
            <a
              href="https://wa.me/919100333355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-red-600 text-white font-bold px-4 py-2 rounded-xl text-[10px] uppercase tracking-wider transition-all hover:bg-red-700 cursor-pointer shadow-md"
            >
              <Send size={11} />
              <span>Instant WhatsApp quote</span>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 border-t border-slate-900 relative z-10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
        
        <div className="text-center md:text-left space-y-1">
          <p>© {new Date().getFullYear()} Vijaya Sai Krishna Agencies. All Rights Reserved.</p>
          <p className="text-[10px] text-slate-600">
            #9-17-16/1, GF-1, Payila Palace, Amar Nagar, CBM Compound, Visakhapatnam - 530 003.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-slate-400">
          <span className="flex items-center space-x-1 font-mono text-[10px] uppercase text-slate-500">
            <ShieldCheck size={11} className="text-emerald-500" />
            <span>Authorized B2B Channel Partner</span>
          </span>
          <span className="text-slate-800">|</span>
          <span className="text-[10px]">Proprietor: Ravi Sankar Kilari</span>
        </div>

      </div>
    </footer>
  );
}
