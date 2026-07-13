import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Send, CheckCircle2, ShoppingCart, MessageCircle, AlertCircle, Plus, Minus } from 'lucide-react';
import { EnquiryItem, EnquiryDetails } from '../types';
import { COMPANY_DETAILS } from '../data';

interface EnquiryCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiryCart: EnquiryItem[];
  onAddToCart: (product: any, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export default function EnquiryCartModal({
  isOpen,
  onClose,
  enquiryCart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart
}: EnquiryCartModalProps) {
  const [details, setDetails] = useState<EnquiryDetails>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    address: '',
    gstNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDetails, setSuccessDetails] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityAdjust = (item: EnquiryItem, change: number) => {
    onAddToCart(item.product, change);
  };

  const handleItemRemarks = (productId: string, remarks: string) => {
    // Locate the product in our cart and set custom remarks via onAddToCart override
    const item = enquiryCart.find(c => c.product.id === productId);
    if (item) {
      item.remarks = remarks;
      // Triggers component update
      onAddToCart(item.product, 0);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enquiryCart.length === 0) return;
    if (!details.name || !details.phone) {
      alert("Please enter at least your name and phone number to request a quotation.");
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newQuote = {
        id: `QT-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toISOString(),
        details: { ...details },
        items: enquiryCart.map(item => ({
          productId: item.product.id,
          name: item.product.name,
          brand: item.product.brand,
          category: item.product.category,
          quantity: item.quantity,
          remarks: item.remarks || ''
        }))
      };

      // Save to local history
      const quotesHistory = JSON.parse(localStorage.getItem('vsk_web_quotes') || '[]');
      quotesHistory.push(newQuote);
      localStorage.setItem('vsk_web_quotes', JSON.stringify(quotesHistory));

      setIsSubmitting(false);
      setSuccessDetails(newQuote);
      onClearCart();
    }, 1500);
  };

  // Build specialized B2B WhatsApp format for submitting quotations
  const getWhatsAppSubmitUrl = (quoteData: any) => {
    let text = `*VIJAYA SAI KRISHNA AGENCIES - QUOTE REQUEST*\n`;
    text += `*Enquiry ID:* ${quoteData.id}\n`;
    text += `*Buyer Name:* ${quoteData.details.name}\n`;
    if (quoteData.details.company) text += `*Company:* ${quoteData.details.company}\n`;
    text += `*Phone:* ${quoteData.details.phone}\n`;
    if (quoteData.details.gstNumber) text += `*GST:* ${quoteData.details.gstNumber}\n`;
    if (quoteData.details.address) text += `*Project Site:* ${quoteData.details.address}\n\n`;
    
    text += `*SELECTED MATERIALS BUNDLE:*\n`;
    quoteData.items.forEach((item: any, idx: number) => {
      text += `${idx + 1}. [${item.brand || 'VSK'}] ${item.name} x ${item.quantity} units\n`;
      if (item.remarks) text += `   _Notes: ${item.remarks}_\n`;
    });

    if (quoteData.details.message) {
      text += `\n*Additional Details:* ${quoteData.details.message}\n`;
    }

    text += `\n_Submitted via B2B Web Portal_`;

    return `https://wa.me/919100333355?text=${encodeURIComponent(text)}`;
  };

  const handleCloseAndReset = () => {
    setSuccessDetails(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/85 backdrop-blur-sm">
          {/* Overlay click close click-through prevention */}
          <div className="absolute inset-0" onClick={handleCloseAndReset} />

          {/* Sliding Side panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="relative bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between z-10 border-l border-slate-100"
          >
            {/* Modal Header */}
            <div className="p-5 bg-slate-950 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingCart size={18} className="text-red-500" />
                <h3 className="text-sm font-extrabold uppercase tracking-widest">
                  Quote Basket / Enquiry Cart
                </h3>
              </div>
              <button
                onClick={handleCloseAndReset}
                className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Contents */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {!successDetails ? (
                /* CURRENT ACTIVE CART ITEMS LIST */
                enquiryCart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <ShoppingCart size={48} className="text-slate-200 mx-auto" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">Basket is Empty</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        Browse our product categories and click &ldquo;Add to Enquiry&rdquo; to build your wholesale quotation list.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Item List */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono border-b pb-1">
                        Materials Selected ({enquiryCart.length})
                      </h4>
                      {enquiryCart.map((item) => (
                        <div
                          key={item.product.id}
                          className="bg-slate-50 rounded-xl p-3 border border-slate-150 relative space-y-2.5 shadow-sm"
                        >
                          <div className="flex items-start space-x-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-12 h-12 rounded-lg object-cover bg-white border border-slate-100 flex-shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 pr-6">
                              <span className="text-[9px] font-bold text-red-600 block leading-tight">
                                {item.product.brand || 'VSK'}
                              </span>
                              <h5 className="text-xs font-bold text-slate-900 leading-snug">
                                {item.product.name}
                              </h5>
                              <p className="text-[10px] text-slate-400 line-clamp-1">
                                {item.product.description}
                              </p>
                            </div>

                            {/* Delete single item */}
                            <button
                              onClick={() => onRemoveFromCart(item.product.id)}
                              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-slate-100 cursor-pointer"
                              title="Delete Item"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>

                          {/* Editable notes & adjustments */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center pt-2.5 border-t border-slate-200/50">
                            {/* Notes Input */}
                            <input
                              type="text"
                              placeholder="Add special notes (e.g. Size, Color, Batch)"
                              value={item.remarks || ''}
                              onChange={(e) => handleItemRemarks(item.product.id, e.target.value)}
                              className="col-span-8 bg-white text-slate-700 px-2.5 py-1 text-[10px] rounded-md border border-slate-250 focus:outline-none focus:border-red-600"
                            />
                            
                            {/* Quantity buttons */}
                            <div className="col-span-4 flex items-center justify-end bg-red-600 rounded-md p-0.5 font-bold">
                              <button
                                onClick={() => handleQuantityAdjust(item, -1)}
                                className="w-5 h-5 flex items-center justify-center hover:bg-red-750 rounded-md text-white transition-colors cursor-pointer"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="px-2 text-[10px] text-white">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityAdjust(item, 1)}
                                className="w-5 h-5 flex items-center justify-center hover:bg-red-750 rounded-md text-white transition-colors cursor-pointer"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* B2B Contact Parameters Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-4 border-t border-slate-150 pt-4">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono border-b pb-1">
                        Procurement Information
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Srinivas Rao"
                            value={details.name}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            placeholder="SBR Developers"
                            value={details.company}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">Active Mobile Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="91000 00000"
                            value={details.phone}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="srinivas@sbr.com"
                            value={details.email}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">Project Delivery Site Address</label>
                          <input
                            type="text"
                            name="address"
                            placeholder="MVP Colony, Visakhapatnam"
                            value={details.address || ''}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-600">GST Registration Number</label>
                          <input
                            type="text"
                            name="gstNumber"
                            placeholder="37AAAAA0000A1Z"
                            value={details.gstNumber || ''}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white uppercase"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-600">Specific Project Scope / Messages</label>
                        <textarea
                          name="message"
                          rows={2}
                          placeholder="Include additional parameters or loading/unloading instructions."
                          value={details.message}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 focus:bg-white resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg disabled:opacity-50"
                      >
                        <Send size={13} className="text-white" />
                        <span>{isSubmitting ? 'Registering Quotation...' : 'Transmit B2B quotation request'}</span>
                      </button>
                    </form>
                  </div>
                )
              ) : (
                /* SUCCESS SCREEN */
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      ID: {successDetails.id}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                      B2B Quote Request Registered
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      We have compiled your materials list and registered your B2B inquiry. Our pricing team will crosscheck our depot inventory balances.
                    </p>
                  </div>

                  {/* Summary Block */}
                  <div className="border border-slate-100 rounded-2xl bg-slate-50/50 p-4 text-left text-xs space-y-3 max-w-sm mx-auto">
                    <p className="font-bold text-slate-800 uppercase text-[9px] border-b pb-1 font-mono">Quotes Summary</p>
                    <div className="space-y-1.5 font-medium text-slate-600 max-h-32 overflow-y-auto">
                      {successDetails.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center text-[11px]">
                          <span className="truncate pr-4">• {item.name}</span>
                          <span className="font-bold text-slate-900">Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Push - HUGE B2B VALUE */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center space-x-2 text-slate-500 text-xs justify-center font-semibold">
                      <AlertCircle size={14} className="text-red-500" />
                      <span>Speed Up Response Time:</span>
                    </div>
                    
                    <a
                      href={getWhatsAppSubmitUrl(successDetails)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-xs mx-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                    >
                      <MessageCircle size={15} />
                      <span>Forward Basket via WhatsApp</span>
                    </a>
                    
                    <p className="text-[10px] text-slate-400 max-w-xs mx-auto">
                      Sends your complete registered items bundle straight to Ravi Sankar (Proprietor) for a near-instant price proposal.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Close Panel */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleCloseAndReset}
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold py-2 px-5 rounded-lg cursor-pointer"
              >
                {successDetails ? 'Finished' : 'Keep Browsing'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
