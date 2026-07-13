export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specs?: Record<string, string>;
  brand?: string;
  status?: 'In Stock' | 'Fast Moving' | 'Premium' | 'New';
}

export interface ProductCategory {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  iconName: string; // Lucide icon mapping
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'showroom' | 'products' | 'warehouse' | 'delivery' | 'team';
  image: string;
  description: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  logoUrl?: string;
  category: string;
  description: string;
}

export interface EnquiryItem {
  product: Product;
  quantity: number;
  remarks?: string;
}

export interface EnquiryDetails {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  address?: string;
  gstNumber?: string;
}
