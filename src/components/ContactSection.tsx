import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2, Award, Calendar } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide at least a name and contact number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save query locally to simulate dynamic processing
      const savedEnquiries = JSON.parse(localStorage.getItem('vsk_web_contacts') || '[]');
      savedEnquiries.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('vsk_web_contacts', JSON.stringify(savedEnquiries));

      // Clear Form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  const contactDetails = [
    {
      title: "Call Direct Hotline",
      desc: COMPANY_DETAILS.phone,
      info: "Speak directly with Ravi Sankar (Proprietor)",
      icon: Phone,
      action: `tel:${COMPANY_DETAILS.phoneRaw}`
    },
    {
      title: "Official Email Desk",
      desc: COMPANY_DETAILS.email,
      info: "Expect a detailed quotation in 12 hours",
      icon: Mail,
      action: `mailto:${COMPANY_DETAILS.email}`
    },
    {
      title: "Corporate Headquarters",
      desc: "Payila Palace, CBM Compound",
      info: "Visakhapatnam, Andhra Pradesh, 530003",
      icon: MapPin,
      action: COMPANY_DETAILS.mapsLink
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our B2B Desk
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            Have an ongoing building project, sub-dealer enquiry, or retail interior requirement? Submit this rapid form and our procurement manager will call you back.
          </p>
        </motion.div>

        {/* Main Grid: Left details, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* LEFT COLUMN: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-lg font-extrabold text-slate-900 mb-4">
              Direct Contact Information
            </h3>

            {contactDetails.map((det, idx) => {
              const Icon = det.icon;
              return (
                <a
                  key={idx}
                  href={det.action}
                  target={det.icon === MapPin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm hover:shadow-md hover:border-red-600/20 transition-all flex items-start space-x-4 group block"
                >
                  <div className="p-3 bg-red-600/10 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{det.title}</h4>
                    <p className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">{det.desc}</p>
                    <p className="text-[11px] text-slate-500">{det.info}</p>
                  </div>
                </a>
              );
            })}

            {/* Business hours card */}
            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest font-mono flex items-center space-x-2">
                <Clock size={14} />
                <span>Showroom Business Hours</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-200">Monday - Saturday</span>
                  <span>{COMPANY_DETAILS.businessHours.weekdays}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-slate-200">Sundays</span>
                  <span className="text-red-500 font-bold">{COMPANY_DETAILS.businessHours.sundays}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal pt-2 border-t border-slate-800">
                *We welcome walk-in dealers, construction engineers, and individual project home-owners during office hours.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl border border-slate-150 p-6 md:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest text-slate-400">
                      Submit Online Enquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Ramesh Kumar"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Company / Project Name</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="RK Builders Vizag"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="ramesh@rkbuilders.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Your Procurement Requirements / Messages *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="I require a quotation for 500 boxes of Statuario Vitrified floor tiles (800x1600mm) and 15 wall-hung closets for our upcoming luxury villa project in PM Palem, Vizag."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-red-600/10 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin text-white" />
                          <span>Submitting Query...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} className="text-white" />
                          <span>Send Procurement Enquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="text-center py-10 px-4 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-extrabold text-slate-900">Enquiry Transmitted Successfully</h3>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out to us. Your requirement details have been registered on our central B2B portal. Ravi Sankar Garu or our sales supervisor will contact you shortly.
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1">
                      <p className="font-bold text-slate-800 uppercase text-[10px]">What is Next?</p>
                      <p>• Our team will check ready stock levels in the Visakhapatnam depot.</p>
                      <p>• We will draft a custom proforma quotation with active B2B volume discounts.</p>
                      <p>• We will coordinate with your site manager for delivery schedules.</p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 px-5 rounded-lg cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Integrated Map & Regional Transport Fleet Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-sm grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Iframe Column */}
          <div className="lg:col-span-7 h-80 md:h-[400px] bg-slate-100 relative">
            <iframe
              title="VSK Agencies Office Location"
              src={COMPANY_DETAILS.googleMapsEmbed}
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Regional coverage list Column */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-slate-950 text-white flex flex-col justify-between">
            <div className="space-y-5">
              <span className="text-red-500 font-mono text-[9px] uppercase tracking-widest block">Logistics Delivery</span>
              <h3 className="text-lg font-extrabold tracking-tight">
                Serving Coastal Andhra Pradesh with Care &amp; Precision
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our Visakhapatnam central shipping yard manages heavy truck dispatches daily. We coordinate seamless drop-offs directly to structural sites.
              </p>

              <div className="space-y-2.5">
                <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Primary Dispatch Corridors:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Visakhapatnam (Vizag)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Anakapalle &amp; Gajuwaka</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Vizianagaram</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Srikakulam</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-slate-400">
                <Calendar size={14} className="text-red-500" />
                <span>Dispatch Days: Mon-Sat</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest">
                Transit Insured
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
