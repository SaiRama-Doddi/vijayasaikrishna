import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY_DETAILS } from '../data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919100333355?text=${encodeURIComponent(
    "Hi Ravi Sankar Kilari Garu, I am visiting the Vijaya Sai Krishna Agencies website and would like to receive a custom B2B quotation for premium tiles and sanitaryware."
  )}`;

  const handleWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Sticky Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
        className="fixed bottom-6 right-8 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer border-4 border-white"
        aria-label="Call Us"
      >
        <Phone className="w-7 h-7 fill-white text-white" />
      </a>

      {/* Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={36} />
      </button>
    </>
  );
}
