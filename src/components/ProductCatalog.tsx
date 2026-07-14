import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShoppingCart, Info, Check, Plus, Minus, HelpCircle, ChevronRight, RefreshCw, X } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS_LIST } from '../data';
import { Product, EnquiryItem } from '../types';

interface ProductCatalogProps {
  enquiryCart: EnquiryItem[];
  onAddToCart: (product: Product, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  selectedCategoryFilter: string | null;
  onClearCategoryFilter: () => void;
}

export default function ProductCatalog({
  enquiryCart,
  onAddToCart,
  onRemoveFromCart,
  selectedCategoryFilter,
  onClearCategoryFilter
}: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);
  const [remarksInput, setRemarksInput] = useState<Record<string, string>>({});

  // Sync state if category was filtered from Header menu
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setSelectedCategory(selectedCategoryFilter);
      // scroll to product catalog smoothly
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedCategoryFilter]);

  // Unique status tags present in list
  const availableTags = ['all', 'Premium', 'Fast Moving', 'In Stock', 'New'];

  // Filtered Products Memo
  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesTag = selectedTag === 'all' || product.status === selectedTag;

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag]);

  // Check if item is already in enquiry cart
  const getCartQuantity = (productId: string) => {
    const item = enquiryCart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCartClick = (product: Product) => {
    onAddToCart(product, 1);
  };

  const handleQuantityChange = (product: Product, change: number) => {
    const currentQty = getCartQuantity(product.id);
    const newQty = currentQty + change;
    if (newQty <= 0) {
      onRemoveFromCart(product.id);
    } else {
      onAddToCart(product, change);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedTag('all');
    onClearCategoryFilter();
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-12"
        >
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-600/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Product Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Premium Product Ranges
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed lg:whitespace-nowrap">
            Select premium products for your B2B quotation basket with full manufacturer warranty.
          </p>
        </motion.div>

        {/* Interactive Category Quick Cards Slider */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <button
            onClick={() => { setSelectedCategory('all'); onClearCategoryFilter(); }}
            className={`p-4 rounded-xl text-center border transition-all flex flex-col items-center justify-center cursor-pointer group ${
              selectedCategory === 'all'
                ? 'bg-slate-950 border-slate-950 text-white shadow-lg'
                : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2.5 transition-colors ${selectedCategory === 'all' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-red-100 group-hover:text-red-700'}`}>
              <ShoppingCart size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider block">All Categories</span>
            <span className="text-[10px] opacity-70 mt-1 block">{PRODUCTS_LIST.length} Items</span>
          </button>

          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); onClearCategoryFilter(); }}
              className={`p-4 rounded-xl text-center border transition-all flex flex-col items-center justify-center cursor-pointer group ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 border-slate-950 text-white shadow-lg'
                  : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2.5 transition-colors ${selectedCategory === cat.id ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-red-100 group-hover:text-red-700'}`}>
                <span className="text-xs font-bold">VSK</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider block line-clamp-1">{cat.name}</span>
              <span className="text-[10px] opacity-70 mt-1 block">
                {PRODUCTS_LIST.filter(p => p.category === cat.id).length} Products
              </span>
            </button>
          ))}
        </div>

        {/* Filter / Search Bar Panel */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-10 shadow-sm flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by name, brand (Kohler, Jaquar) or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>

          {/* Tag Status Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Filter size={13} />
              <span>Label:</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide capitalize transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-red-600 text-white font-bold shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tag === 'all' ? 'Show All' : tag}
                </button>
              ))}
            </div>

            {/* Clear Filters Button if anything active */}
            {(searchTerm || selectedCategory !== 'all' || selectedTag !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="flex items-center space-x-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Catalog Query Stats */}
        <div className="flex justify-between items-center mb-6 text-xs font-mono text-slate-500">
          <span>Showing {filteredProducts.length} premium products</span>
          {selectedCategory !== 'all' && (
            <span className="text-slate-800 font-bold uppercase">
              Category: {PRODUCT_CATEGORIES.find(c => c.id === selectedCategory)?.name}
            </span>
          )}
        </div>

        {/* Catalog Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-200 py-16 px-4 text-center max-w-md mx-auto">
            <HelpCircle size={44} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-base font-bold text-slate-800">No matching items found</h3>
            <p className="text-xs text-slate-500 mt-1.5">
              Try adjusting your search keywords, clearing filters, or selecting a different main product category.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center space-x-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              <span>Reset Search Filters</span>
            </button>
          </div>
        )}

        {/* Dynamic Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const cartQty = getCartQuantity(product.id);
            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image Panel */}
                <div className="relative h-56 bg-slate-50 overflow-hidden group">
                  {/* Status Badge */}
                  {product.status && (
                    <span className={`absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm ${
                      product.status === 'Premium' ? 'bg-red-800 text-white' :
                      product.status === 'Fast Moving' ? 'bg-red-600 text-white' :
                      product.status === 'New' ? 'bg-red-500 text-white' :
                      'bg-slate-800 text-slate-200'
                    }`}>
                      {product.status}
                    </span>
                  )}
                  
                  {/* Brand Tag */}
                  {product.brand && (
                    <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-100">
                      {product.brand}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay Specs button */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button
                      onClick={() => setSelectedProductDetails(product)}
                      className="bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold py-2 px-4 rounded-lg flex items-center space-x-1.5 shadow-md cursor-pointer"
                    >
                      <Info size={14} className="text-red-600" />
                      <span>Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold font-mono text-red-600 uppercase tracking-widest">
                      {PRODUCT_CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-1 hover:text-red-600 cursor-pointer" onClick={() => setSelectedProductDetails(product)}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights Bullet mini list */}
                  <div className="mt-4 space-y-1 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                    {product.features.slice(0, 2).map((feat, index) => (
                      <div key={index} className="flex items-center space-x-1.5 text-[11px] text-slate-600">
                        <Check size={12} className="text-red-600 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-[9px] text-slate-400 font-mono block pl-4">+{product.features.length - 2} more features</span>
                    )}
                  </div>

                  {/* Interactive Cart Addition footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Order Status</p>
                      <p className="text-xs font-bold text-slate-700 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        <span>Available Bulk</span>
                      </p>
                    </div>

                    {cartQty === 0 ? (
                      <button
                        onClick={() => handleAddToCartClick(product)}
                        className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer hover:scale-[1.02]"
                      >
                        <ShoppingCart size={13} className="text-red-500" />
                        <span>Add To Enquiry</span>
                      </button>
                    ) : (
                      <div className="flex items-center bg-red-600 text-white rounded-lg p-1 font-bold shadow-sm ring-1 ring-red-600/20">
                        <button
                          onClick={() => handleQuantityChange(product, -1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-red-700 rounded-md transition-colors cursor-pointer"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-xs font-extrabold">{cartQty}</span>
                        <button
                          onClick={() => handleQuantityChange(product, 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-red-700 rounded-md transition-colors cursor-pointer"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Product Details Technical Modal Popup */}
      <AnimatePresence>
        {selectedProductDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-5 bg-slate-950 text-white flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold font-mono text-red-500 uppercase tracking-widest">
                    Technical Specifications
                  </span>
                  <h3 className="text-base md:text-lg font-extrabold tracking-tight mt-0.5">
                    {selectedProductDetails.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProductDetails(null)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Visual Preview Side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={selectedProductDetails.image}
                      alt={selectedProductDetails.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {selectedProductDetails.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProductDetails.brand && (
                        <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Brand: {selectedProductDetails.brand}
                        </span>
                      )}
                      {selectedProductDetails.status && (
                        <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Class: {selectedProductDetails.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Key Advantages */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 border-b pb-1">
                    Key Features &amp; Quality Advantages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProductDetails.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check size={13} className="text-red-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Specs Data Table */}
                {selectedProductDetails.specs && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 border-b pb-1">
                      Technical Properties Table
                    </h4>
                    <div className="border border-slate-100 rounded-xl overflow-hidden text-xs">
                      {Object.entries(selectedProductDetails.specs).map(([key, value], idx) => (
                        <div
                          key={idx}
                          className={`grid grid-cols-3 p-2.5 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100 last:border-0`}
                        >
                          <span className="font-bold text-slate-600 col-span-1">{key}</span>
                          <span className="text-slate-800 col-span-2">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end space-x-2">
                <button
                  onClick={() => setSelectedProductDetails(null)}
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold py-2 px-4 rounded-lg cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    handleAddToCartClick(selectedProductDetails);
                    setSelectedProductDetails(null);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-5 rounded-lg cursor-pointer"
                >
                  Add to Quotation Basket
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
