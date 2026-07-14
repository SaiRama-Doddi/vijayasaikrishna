import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919100333355?text=${encodeURIComponent(
    "Hi Ravi Sankar Kilari Garu, I am visiting the Vijaya Sai Krishna Agencies website and would like to receive a custom B2B quotation for premium tiles and sanitaryware."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-4">
      
      {/* Call Sticky Button */}
      <div className="relative group">
        {/* Glow rings */}
        <span className="absolute inset-0 rounded-full bg-blue-500/25 animate-ping"></span>
        <span className="absolute inset-1 rounded-full bg-blue-500/30 animate-pulse"></span>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Call Ravi Sankar
        </div>

        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="relative w-14 h-14 bg-[#0a2540] text-white rounded-full flex items-center justify-center hover:bg-slate-900 transition-all duration-300 shadow-2xl hover:scale-108 active:scale-90 flex-shrink-0 cursor-pointer border-4 border-amber-500/40"
          aria-label="Call Us"
        >
          <Phone size={22} className="text-white stroke-[2.5]" />
        </a>
      </div>

      {/* WhatsApp Sticky Button */}
      <div className="relative group">
        {/* Glow rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></span>
        <span className="absolute inset-1 rounded-full bg-emerald-500/30 animate-pulse"></span>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Chat on WhatsApp
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#20ba5a] transition-all duration-300 shadow-2xl hover:scale-108 active:scale-90 flex-shrink-0 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.758.459 3.474 1.33 4.988L2 22l5.139-1.348c1.469.8 3.123 1.22 4.861 1.22 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.7 13.914c-.276.772-1.385 1.4-2.222 1.49-.576.062-1.328.093-2.12-.187-1.184-.417-2.617-1.425-3.805-2.613-1.188-1.188-2.196-2.62-2.613-3.804-.28-.793-.25-1.545-.187-2.121.09-.838.718-1.947 1.49-2.222.257-.092.518-.088.7.075.182.162.59 1.258.675 1.458.085.2.062.457-.075.63l-.478.6c-.138.175-.15.42-.025.626.478.788 1.112 1.422 1.9 1.9.206.125.45.113.626-.025l.6-.478c.172-.137.43-.16.63-.075.2.085 1.296.493 1.458.675.163.182.167.443.075.7z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
