import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, ShieldCheck, Gem, UserCheck, Star, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import VSKLogo from './VSKLogo';
import logoImg from '../assets/logo.png';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'story' | 'vision-mission' | 'values'>('story');

  const coreValues = [
    { title: "Integrity", desc: "Honesty and crystal-clear transparency in every bulk quotation and transaction.", icon: ShieldCheck },
    { title: "Trust", desc: "Building lifelong business bonds with sub-dealers, retailers, and architects.", icon: UserCheck },
    { title: "Quality First", desc: "Sourcing strictly verified and warrantied sanitaryware and tile materials.", icon: Gem },
    { title: "Customer Centric", desc: "Adapting our inventory and logistics to exactly match builder timelines.", icon: Users },
    { title: "Reliability", desc: "A resilient Visakhapatnam distribution warehouse with consistent stock.", icon: Star },
    { title: "Innovation", desc: "Supplying cutting-edge smart closets, PVD taps, and high-performance adhesives.", icon: Target }
  ];

  const highlights = [
    { text: "Quality Products", label: "Selected only from tested manufacturers" },
    { text: "Trusted Brands", label: "Kohler, Jaquar, Kajaria, Somany & more" },
    { text: "Competitive Pricing", label: "Direct-to-builder project discounts" },
    { text: "On-Time Delivery", label: "In-house heavy flatbed delivery fleet" },
    { text: "Customer Satisfaction", label: "Post-purchase warranty liaison support" },
    { text: "Long-Term Relationships", label: "A legacy built on trust and honor" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Legacy of Quality &amp; Trust in Visakhapatnam
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            For years, {COMPANY_DETAILS.name} has been the preferred corporate partner for premium interior finishes.
            We specialize in bridging the gap between top global manufactures and local building developers.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center border-b border-slate-200 mb-10 max-w-lg mx-auto">
          {(['story', 'vision-mission', 'values'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 pb-3 text-sm font-semibold tracking-wide border-b-2 capitalize transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'border-red-600 text-slate-950 font-bold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'story' ? 'Our Story' : tab === 'vision-mission' ? 'Vision & Mission' : 'Core Values'}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Illustrative Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl -mr-6 -mt-6"></div>
              
              {/* Dynamic corporate brand vector logo stamp */}
              <div className="mb-6 pb-6 border-b border-slate-800/80 flex justify-center">
                <img src={logoImg} alt="Vijaya Sai Krishna Agencies" className="max-h-20 w-auto object-contain drop-shadow-md" />
              </div>
              
              <span className="text-red-500 font-mono text-[11px] uppercase tracking-widest block mb-2">Our Foundation Slogan</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight italic mb-6 text-slate-100">
                &ldquo;{COMPANY_DETAILS.slogan}&rdquo;
              </h3>

              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-800">
                  <p className="text-xs text-slate-400">FOUNDER &amp; PROPRIETOR</p>
                  <p className="text-base font-bold text-red-600">{COMPANY_DETAILS.founder}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">HEADQUARTERS</p>
                  <p className="text-sm font-medium text-slate-200">CBM Compound, Visakhapatnam, AP</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>GST Registered</span>
                <span className="text-red-500 font-bold">Authorized Distributor</span>
              </div>
            </div>

            {/* Visual Mini Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Genuine Brand Guarantee</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">Immediate</p>
                <p className="text-xs text-slate-500 font-medium">Bulk Stock Availability</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Tab Contents */}
          <div className="lg:col-span-7">
            {activeTab === 'story' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                    <Award className="text-red-600" size={20} />
                    <span>The Vijaya Sai Krishna Legacy</span>
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Based in the core commercial hub of Visakhapatnam, {COMPANY_DETAILS.name} began with a simple mission: 
                    to offer the finest quality ceramic tiles and sanitaryware with absolute transparency. Under the leadership 
                    of **{COMPANY_DETAILS.founder}**, we have expanded into a reliable B2B supplier catering to individual 
                    architects, bulk housing projects, and a trusted dealer network.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                    By keeping massive inventory reserves, maintaining our own delivery trucks, and directly representing major brand 
                    warranties, we ensure that you receive exactly what you need when you need it.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {highlights.map((hl, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 shadow-sm flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✔</div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{hl.text}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{hl.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'vision-mission' && (
              <div className="space-y-8">
                {/* Vision Box */}
                <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex items-start space-x-5">
                  <div className="p-3 bg-red-50 rounded-xl text-red-600 flex-shrink-0">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Our Strategic Vision</h3>
                    <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                      To emerge as Coastal Andhra Pradesh's most preferred B2B distribution channel for architectural tiles and bathware 
                      by setting unparalleled standards in material authenticity, cost efficiency, and fast delivery timelines.
                    </p>
                  </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex items-start space-x-5">
                  <div className="p-3 bg-red-50 rounded-xl text-red-600 flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Our Day-to-Day Mission</h3>
                    <ul className="text-slate-600 text-xs md:text-sm mt-3 space-y-2 list-disc pl-4 leading-relaxed">
                      <li><strong>Premium Quality Only:</strong> Zero compromise on chemical and physical testing of tiles and faucets.</li>
                      <li><strong>Absolute Transaction Honesty:</strong> Transparent commercial bulk discounting structures with no hidden taxes.</li>
                      <li><strong>Consistent Fleet Scheduling:</strong> Fast secure delivery to projects in and around Vizag within committed slots.</li>
                      <li><strong>Broader Product Selection:</strong> Constantly expanding catalog to include modern eco-smart solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-150 shadow-sm hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center mb-3">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{val.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
