import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919100333355?text=${encodeURIComponent(
    "Hi Ravi Sankar Kilari Garu, I am visiting the Vijaya Sai Krishna Agencies website and would like to receive a custom B2B quotation for premium tiles and sanitaryware."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></span>
      <span className="absolute inset-1 rounded-full bg-emerald-500/30 animate-pulse"></span>
      
      {/* Tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
        Chat with Ravi Sankar
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 shadow-2xl hover:scale-108 active:scale-90 flex-shrink-0 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white text-emerald-500 stroke-2" />
      </a>
    </div>
  );
}
