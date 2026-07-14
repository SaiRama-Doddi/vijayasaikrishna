import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProductCatalog from './components/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import BrandSlider from './components/BrandSlider';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryCartModal from './components/EnquiryCartModal';
import WhatsAppButton from './components/WhatsAppButton';
import { EnquiryItem, Product } from './types';

export default function App() {
  const [enquiryCart, setEnquiryCart] = useState<EnquiryItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  const handleAddToCart = (product: Product, change: number) => {
    setEnquiryCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        const newQty = existing.quantity + change;
        if (newQty <= 0) {
          return prev.filter((item) => item.product.id !== product.id);
        }
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setEnquiryCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setEnquiryCart([]);
  };

  const handleNavigate = (id: string) => {
    if (id.startsWith('category-')) {
      const categoryId = id.replace('category-', '');
      setSelectedCategoryFilter(categoryId);
      setTimeout(() => {
        const element = document.getElementById('products');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setSelectedCategoryFilter(null);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectBrand = (brandName: string) => {
    // If user clicks a brand card, trigger the product catalog to filter/search for that brand name
    // It automatically focuses on the search input or sets search state
    setSelectedCategoryFilter(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Top Header Area */}
      <Header
        enquiryCart={enquiryCart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Layout */}
      <main className="flex-grow overflow-x-hidden">
        
        {/* 1. Hero Sliders Carousel */}
        <HeroSlider onNavigate={handleNavigate} />

        {/* 2. About Corporate Story Profile */}
        <AboutUs />

        {/* 3. Services Matrices */}
        <Services />

        {/* 4. Interactive Product Cataloguing (Dynamic Search / Basket Addition) */}
        <ProductCatalog
          enquiryCart={enquiryCart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          selectedCategoryFilter={selectedCategoryFilter}
          onClearCategoryFilter={() => setSelectedCategoryFilter(null)}
        />

        {/* 5. Statistics, value proposition, Sectors served */}
        <WhyChooseUs />

        {/* 6. Live showroom, warehousing & logistics gallery */}
        <GallerySection />

        {/* 7. Partner Manufacturing Brands */}
        <BrandSlider onSelectBrand={handleSelectBrand} />

        {/* 8. Verified builders & dealers endorsements */}
        <Testimonials />

        {/* 9. Interactive Accordion FAQ */}
        <FAQ />

        {/* 10. Direct Contact details, B2B Quotation Form, Google Maps */}
        <ContactSection />

      </main>

      {/* Footer Area */}
      <Footer onNavigate={handleNavigate} />

      {/* Side quotation basket modal panel */}
      <EnquiryCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        enquiryCart={enquiryCart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Pulsating green WhatsApp Hotline badge */}
      <WhatsAppButton />

    </div>
  );
}
