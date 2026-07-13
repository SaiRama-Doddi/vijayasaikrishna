import { ProductCategory, Product, Service, Testimonial, FAQItem, GalleryItem, PartnerBrand } from './types';
import galImg1 from './assets/gallery/1.webp';
import galImg2 from './assets/gallery/2.webp';
import galImg3 from './assets/gallery/3.webp';
import galImg5 from './assets/gallery/5.webp';
import galImg6 from './assets/gallery/6.webp';
import galImg7 from './assets/gallery/7.webp';
import galImg8 from './assets/gallery/8.webp';

export const COMPANY_DETAILS = {
  name: "Vijaya Sai Krishna Agencies",
  legalName: "Vijaya Sai Krishna Agencies",
  founder: "Ravi Sankar Kilari",
  phone: "+91 91003 33355",
  phoneRaw: "9100333355",
  email: "vijayasaikrishnaagencies@gmail.com",
  address: "#9-17-16/1, GF-1, Payila Palace, Amar Nagar, CBM Compound, Visakhapatnam, Andhra Pradesh - 530003",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6725359703477!2d83.308253!3d17.717646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433db9b89693%3A0xc3418579ca3fb5db!2sCBM%20Compound%20Rd%2C%20Asilmetta%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  mapsLink: "https://maps.google.com/?q=Payila+Palace,+CBM+Compound,+Visakhapatnam",
  slogan: "We fulfill your Interior aspirations",
  businessHours: {
    weekdays: "09:30 AM - 08:30 PM",
    sundays: "10:30 AM - 02:00 PM"
  },
  socials: {
    facebook: "https://facebook.com/vijayasaikrishnaagencies",
    instagram: "https://instagram.com/vijayasaikrishnaagencies",
    whatsapp: "https://wa.me/919100333355"
  }
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "tiles",
    name: "Premium Tiles",
    shortDesc: "Vitrified, Ceramic & Wooden Plank Tiles",
    description: "Explore an exquisite collection of luxury floor and wall tiles. Crafted using cutting-edge technology for remarkable durability and high aesthetic appeal.",
    iconName: "Grid",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sanitaryware",
    name: "Luxury Sanitaryware",
    shortDesc: "Water Closets, basins & designer sinks",
    description: "Upgrade your spaces with our sleek, elegant, and highly functional sanitaryware. Engineered for hygienic performance and modern interior layouts.",
    iconName: "Droplet",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "bath-fittings",
    name: "Designer Bath Fittings",
    shortDesc: "Premium faucets, shower systems & mixers",
    description: "Precision-engineered faucets, multi-flow showers, and therapeutic thermostatic mixers that deliver absolute water control and everlasting chrome luster.",
    iconName: "ShowerHead",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "kitchen-sinks",
    name: "Kitchen Sinks & Quartz",
    shortDesc: "High-grade stainless steel & luxury quartz",
    description: "Make your kitchen functional and gorgeous with luxury quartz sinks, noise-insulated commercial steel bowls, and designer pull-out faucets.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "adhesives",
    name: "Tile Adhesives & Grouts",
    shortDesc: "Heavy-duty adhesives, epoxy & resin grouts",
    description: "Ensure lifelong bonding for tiles and stones with leading polymer adhesives, waterproof epoxy grouts, and specialized tile care sealants.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "wellness",
    name: "Wellness & Bathtubs",
    shortDesc: "Freestanding bathtubs, jacuzzis & panels",
    description: "Turn your bathroom into a luxury private spa with state-of-the-art acrylic bathtubs, hydro-massage jacuzzis, and therapeutic shower panels.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS_LIST: Product[] = [
  // Tiles
  {
    id: "tile-1",
    name: "Statuario Imperial Glazed Vitrified Tile",
    category: "tiles",
    description: "A premium 800x1600mm luxury glazed vitrified tile replicating Italian Statuario marble with clean gray veins and a high-gloss polished finish.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800",
    features: ["800 x 1600 mm Large Format", "Ultra-High Gloss Polished Finish", "Scratch & Stain Resistant", "Double Charge Durability"],
    specs: {
      "Dimensions": "800 x 1600 mm",
      "Material": "Glazed Vitrified (GVT)",
      "Finish": "High Gloss / Polished",
      "Thickness": "9.5 mm",
      "Application": "Living Room, Lobby, Commercial Areas"
    },
    brand: "Kajaria Premium",
    status: "Premium"
  },
  {
    id: "tile-2",
    name: "Royal Oak Wooden Plank Tile",
    category: "tiles",
    description: "Richly detailed 200x1200mm tile mimicking natural timber. Delivers the cozy warmth of wooden flooring with the zero-maintenance benefits of ceramic.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    features: ["Natural Timber Wood Texture", "Slip-Resistant Matte Finish", "Rectified Edges for Seamless Joints", "Waterproof & Fireproof"],
    specs: {
      "Dimensions": "200 x 1200 mm",
      "Material": "Porcelain Ceramic",
      "Finish": "Rustic Matte Texture",
      "Thickness": "9.0 mm",
      "Application": "Bedrooms, Balconies, Accents"
    },
    brand: "Somany",
    status: "Fast Moving"
  },
  {
    id: "tile-3",
    name: "Basalt Dark Heavy-Duty Outdoor Tile",
    category: "tiles",
    description: "An incredibly resilient 600x600mm vitrified tile with highly slip-resistant basalt stone texture, designed for heavy footfalls and vehicle parking load.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    features: ["Extremely High Breaking Strength", "Puncture-Resistant (12mm Thickness)", "V4 Anti-skid Grip rating", "Weather & Frost Proof"],
    specs: {
      "Dimensions": "600 x 600 mm",
      "Material": "Vitrified Parking Tiles",
      "Finish": "Rough Anti-Skid Matte",
      "Thickness": "12.0 mm",
      "Application": "Driveways, Parking, Commercial Outdoors"
    },
    brand: "Johnson Tiles",
    status: "In Stock"
  },
  {
    id: "tile-4",
    name: "Crema Marfil Classic Glazed GVT",
    category: "tiles",
    description: "Elegant 600x1200mm polished tile in warm beige and cream hues, perfect for creating smooth, bright and expansive looking interior environments.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    features: ["Uniform Crema Veins", "Easy to Clean & Dust-proof", "Excellent Light Reflection", "Low Water Absorption (<0.05%)"],
    specs: {
      "Dimensions": "600 x 1200 mm",
      "Material": "Glazed Vitrified (GVT)",
      "Finish": "Super Polish Glossy",
      "Thickness": "9.0 mm",
      "Application": "Living Spaces, Bedrooms, Hotel Lobbies"
    },
    brand: "Varmora Granito",
    status: "New"
  },

  // Sanitaryware
  {
    id: "sanitary-1",
    name: "Verde Tornado Silent Rimless Wall-Hung Closet",
    category: "sanitaryware",
    description: "A premium wall-mounted closet featuring a powerful, silent double-cyclone Tornado Flush, sleek rimless design, and a soft-closing UF slim seat cover.",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=800",
    features: ["Tornado Silent Flushing", "Rimless Hygienic Bowl Design", "Soft-Close UF Slim Seat", "Easy-Clean Glaze Surface"],
    specs: {
      "Dimensions": "540 x 365 x 350 mm",
      "Type": "Wall-Hung / Mounted",
      "Flushing System": "Tornado Dual Flush (3L / 4.5L)",
      "Material": "Premium Vitreous China",
      "Outlet Siphon": "Fully Glazed P-Trap"
    },
    brand: "Hindware Italian",
    status: "Premium"
  },
  {
    id: "sanitary-2",
    name: "Amalfi Matte Black Table-Top Basin",
    category: "sanitaryware",
    description: "An ultra-thin rimmed designer wash basin in elegant matte black finish. Fired at 1280°C for superior strength, stain resistance, and premium luster.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    features: ["Sleek Slim-Rim 5mm Architecture", "Resilient Matte Black Glaze", "Stain & Chemical Resistant", "Easy Countertop Installation"],
    specs: {
      "Dimensions": "480 x 370 x 130 mm",
      "Type": "Table-Top Counter Basin",
      "Finish": "Matte Black Satin Finish",
      "Material": "Vitreous Ceramic",
      "Overflow": "Not Included"
    },
    brand: "Kohler",
    status: "Premium"
  },
  {
    id: "sanitary-3",
    name: "Aura Smart One-Piece Intelligent WC",
    category: "sanitaryware",
    description: "A luxury one-piece smart toilet featuring auto flush, heated seat, multi-function spray wand, warm air dryer, deodorizer, and a wireless remote controller.",
    image: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&q=80&w=800",
    features: ["Automatic Sensing Lid & Flush", "Heated Seat with Temp Controls", "Warm Air Dryer & Integrated Deodorizer", "Wireless Touchpad Remote"],
    specs: {
      "Type": "Floor Standing Intelligent WC",
      "Flushing": "Siphon Jet Power Flush",
      "Voltage": "220-240V / 50Hz",
      "Material": "Self-Cleaning Glaze Vitreous China",
      "Safety": "IPX4 Waterproof Rated"
    },
    brand: "Kohler Premium",
    status: "New"
  },

  // Bath Fittings
  {
    id: "fittings-1",
    name: "Signia Gold Single Lever Basin Mixer",
    category: "bath-fittings",
    description: "A gorgeous luxury tall-boy single-lever basin tap in physical vapor deposition (PVD) gold finish, guaranteeing lifetime tarnish resistance.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
    features: ["Advanced PVD Royal Gold Finish", "Ceramic Cartridge Tested for 500k Cycles", "Honey-Comb Water Aerator", "Lead-Free Solid Brass Body"],
    specs: {
      "Material": "Lead-Free Virgin Brass",
      "Finish": "PVD Brushed Gold",
      "Cartridge": "Ceramic Disc",
      "Type": "Single Lever High Neck (Tall Boy)",
      "Flow Rate": "8.3 LPM at 3 Bar"
    },
    brand: "Jaquar Luxury",
    status: "Premium"
  },
  {
    id: "fittings-2",
    name: "Cascade Air-Infused Overhead Rain Shower",
    category: "bath-fittings",
    description: "An expansive 300x300mm overhead rain shower in mirror-polished stainless steel, featuring smart air-induction that makes every droplet feel heavy and soft.",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800",
    features: ["300 x 300 mm Expansive Coverage", "Air-Injection Technology (30% Water Saving)", "Self-Cleaning Rub-Clean Nozzles", "Anti-Lime Limescale Protection"],
    specs: {
      "Material": "SS304 Premium Stainless Steel",
      "Finish": "Mirror Chrome",
      "Shape": "Square",
      "Mounting": "Ceiling / Wall Arm",
      "Operating Pressure": "1.5 Bar to 5 Bar"
    },
    brand: "Jaquar / Grohe",
    status: "Fast Moving"
  },

  // Kitchen Sinks & Quartz
  {
    id: "sink-1",
    name: "Titanium Black Quartz Double-Bowl Sink",
    category: "kitchen-sinks",
    description: "An incredibly robust double-bowl kitchen sink molded with 80% natural granite quartz and 20% acrylic resin. Unmatched heat and scratch resistance.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    features: ["80% Pure Quartz Formulation", "Heat Resistant up to 280°C", "Soundproof Heavy-Duty Structure", "Antibacterial Stain-Free Shield"],
    specs: {
      "Dimensions": "45 x 20 x 9 Inches",
      "Material": "Granite Quartz Composite",
      "Type": "Double Bowl Under-Mount/Top",
      "Color": "Titanium Metallic Black",
      "Warranty": "5 Years Manufacturer Warranty"
    },
    brand: "Carysil",
    status: "Premium"
  },

  // Adhesives
  {
    id: "adhesive-1",
    name: "Laticrete 290 Premium Polymer Tile Adhesive",
    category: "adhesives",
    description: "High-strength polymer-modified cementitious tile adhesive designed specially for fixing vitrified and large-format ceramic tiles on interior and exterior walls.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
    features: ["Excellent Shear Bond Strength", "Zero Vertical Slip for Wall Application", "Extended Open Time for Adjustable Laying", "Internal & External Waterproof Properties"],
    specs: {
      "Weight": "20 Kg Bag",
      "Classification": "C2TE Classified under EN 12004",
      "Coverage": "approx. 50-60 sq.ft at 3mm thickness",
      "Pot Life": "approx. 3-4 Hours",
      "Curing Time": "24 Hours"
    },
    brand: "MYK Laticrete",
    status: "In Stock"
  },

  // Wellness
  {
    id: "wellness-1",
    name: "Orion Premium Acrylic Freestanding Tub",
    category: "wellness",
    description: "A stunning double-ended freestanding acrylic bathtub featuring ergonomic slopes, integrated chrome pop-up waste, and reinforced fiberglass base support.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
    features: ["Double-Ended Seamless Design", "Lucite High-Grade Acrylic Sheet", "High Heat Retention Barrier", "Sturdy SS Base Support Frames"],
    specs: {
      "Dimensions": "1700 x 750 x 580 mm",
      "Water Capacity": "220 Liters",
      "Weight Empty": "45 Kgs",
      "Overflow System": "Integrated Chrome Pop-up",
      "Material": "Reinforced Sanitary-Grade Acrylic"
    },
    brand: "Jaquar / Kohler",
    status: "Premium"
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: "serv-1",
    title: "Product Distribution",
    description: "Authorized distribution partner for national and international brands. We supply to an extensive network of dealers across Coastal Andhra Pradesh.",
    iconName: "Truck"
  },
  {
    id: "serv-2",
    title: "Wholesale Supply",
    description: "Highly competitive, factory-direct bulk pricing for builders, commercial developers, and massive real-estate projects.",
    iconName: "Layers"
  },
  {
    id: "serv-3",
    title: "Retail Consultations",
    description: "Visit our state-of-the-art Visakhapatnam showroom to experience materials firsthand with advice from design experts.",
    iconName: "Store"
  },
  {
    id: "serv-4",
    title: "Dealer Support Program",
    description: "Supporting local retailers with flexible credit systems, immediate stock availability, product samples, and displays.",
    iconName: "ShieldCheck"
  },
  {
    id: "serv-5",
    title: "Project Procurement",
    description: "Tailored procurement strategies to secure specific custom tiles, marble slabs, or sanitaryware models on tight project deadlines.",
    iconName: "Briefcase"
  },
  {
    id: "serv-6",
    title: "Logistics & Delivery",
    description: "Equipped with our own transport fleet ensuring zero-breakage transit and on-schedule site drop-offs across Vizag and nearby districts.",
    iconName: "Compass"
  },
  {
    id: "serv-7",
    title: "After-Sales Support",
    description: "Direct liaison with brand manufacturing centers for technical installation support, warranty assistance, and post-purchase spares.",
    iconName: "Users"
  }
];

export const WHY_CHOOSE_US_STATS = [
  { value: "12+", label: "Years of Trust", numeric: 12 },
  { value: "1200+", label: "Happy Customers", numeric: 1200 },
  { value: "800+", label: "Premium Products", numeric: 800 },
  { value: "35+", label: "Dealers in Network", numeric: 35 },
  { value: "15+", label: "Trusted Brands", numeric: 15 }
];

export const INDUSTRIES_SERVED = [
  "Residential Projects",
  "Commercial Buildings",
  "Industrial Facilities",
  "Retail Showrooms",
  "Contractors",
  "Architects & Designers",
  "Government Projects",
  "Educational Institutions",
  "Hotels & Luxury Resorts"
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Premium Ceramic & GVT Showcase",
    category: "showroom",
    image: galImg1,
    description: "Interactive mock displays in our Visakhapatnam showroom for viewing tile sizes and surface finishes."
  },
  {
    id: "gal-2",
    title: "High-End Bath Fittings Array",
    category: "showroom",
    image: galImg2,
    description: "Live-running faucet display zone featuring modern premium chrome, PVD Gold, and sanitaryware collections."
  },
  {
    id: "gal-3",
    title: "Vitrified Tile Pallet Inventory",
    category: "warehouse",
    image: galImg3,
    description: "A glimpse of our massive, weather-proof stock warehouse in Visakhapatnam ready for rapid dispatch."
  },
  {
    id: "gal-4",
    title: "Heavy-Duty Flatbed Dispatch",
    category: "delivery",
    image: galImg5,
    description: "Secure pallet-loading on delivery vehicles ensuring risk-free and breakage-free product transportation."
  },
  {
    id: "gal-5",
    title: "Consultant Architect Briefing",
    category: "team",
    image: galImg6,
    description: "Our dedicated B2B sales consultants presenting our technical catalogs and samples to builders and designers."
  },
  {
    id: "gal-6",
    title: "Sanitaryware Closet Rack Area",
    category: "products",
    image: galImg7,
    description: "Wide collection of Rimless closets, smart WCs, and table-top basins from top-tier luxury manufacturers."
  },
  {
    id: "gal-7",
    title: "Premium Showroom Display",
    category: "showroom",
    image: galImg8,
    description: "Elegant layout displays showcasing premium collections of vitrified tiles and luxury bathware."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Srinivas Raju M.",
    role: "Managing Director",
    company: "SBR Infrastructure Vizag",
    text: "Vijaya Sai Krishna Agencies has been our primary sanitary and tiles vendor for over five luxury apartment projects in MVP Colony. Their consistency, genuine brand products, and exact on-time deliveries have significantly speeded up our project completions.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "K. Anuradha",
    role: "Principal Interior Architect",
    company: "Visual Spatia Studios",
    text: "My clients expect nothing short of excellence. The team at VSK Agencies understands this perfectly. They have the most updated collections of high-end PVD bath fittings and Statuario slab tiles, with highly personalized B2B consultant pricing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Prakash Rao Kilari",
    role: "Proprietor",
    company: "Prakash Hardware & Sanitary, Anakapalle",
    text: "As a sub-dealer, we rely on immediate product dispatch. Ravi Sankar Garu and his team maintain impressive stock reserves in their warehouse, which enables us to meet our customers' demands in Anakapalle without delay. Outstanding support!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  { id: "b1", name: "Kohler", category: "Sanitaryware & Bath Fittings", description: "Premium American kitchen and bath faucets, luxury intelligent closets." },
  { id: "b2", name: "Jaquar", category: "Bath Fittings & Showers", description: "India's leading sanitary fittings brand with stunning PVD colors." },
  { id: "b3", name: "Kajaria", category: "Vitrified & Ceramic Tiles", description: "The largest manufacturer of premium ceramic, vitrified, and polished tiles." },
  { id: "b4", name: "Somany", category: "Tiles & Bathware", description: "Renowned slip-resistant wooden plank tiles and elegant sanitary collections." },
  { id: "b5", name: "Hindware Italian", category: "Sanitaryware", description: "Vitreous china wall closets, tornado flushes, and durable sinks." },
  { id: "b6", name: "Carysil", category: "Kitchen Sinks", description: "Premium German technology Quartz sinks with granite composite structures." },
  { id: "b7", name: "MYK Laticrete", category: "Tile Adhesives & Grouts", description: "International tile fixing standards, epoxy grouts, and sealers." },
  { id: "b8", name: "Johnson Tiles", category: "Heavy Duty Tiles", description: "Excellent industrial parking tiles and highly resilient vitrified floor slabs." }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you supply bulk orders for major real estate and commercial projects?",
    answer: "Yes, wholesale project supply is our core specialty. We provide factory-direct bulk pricing, personalized project support, specialized material packaging, and credit/consignment facilities for recognized construction builders, commercial builders, and government projects."
  },
  {
    id: "faq-2",
    question: "What leading brands do you deal with in Visakhapatnam?",
    answer: "We are authorized trading and distribution partners for top-tier national and global brands including Kohler, Jaquar, Kajaria, Somany, Hindware, Johnson, Carysil, and MYK Laticrete, guaranteeing 100% authentic and warrantied products."
  },
  {
    id: "faq-3",
    question: "Do you provide safe transport and delivery services across Andhra Pradesh?",
    answer: "Absolutely. We operate a dedicated logistics fleet in Visakhapatnam, ensuring safe, padded, and damage-free transit to construction sites or retail stores across Vizag, Gajuwaka, Anakapalle, Vizianagaram, Srikakulam, and surrounding coastal districts."
  },
  {
    id: "faq-4",
    question: "How can I request a customized quotation for our B2B project?",
    answer: "You can request a quotation directly through this website by browsing our catalog, adding items to your virtual 'Enquiry Cart', and submitting your request. Alternatively, you can click the floating WhatsApp button to chat directly with Ravi Sankar Kilari (Proprietor) or call us at +91 91003 33355."
  },
  {
    id: "faq-5",
    question: "Can we visit your showroom to see physical samples before finalizing?",
    answer: "Yes! We welcome builders, architects, dealers, and retail homeowners to visit our showroom located at Payila Palace, Amar Nagar, CBM Compound, Visakhapatnam. Our sales consultants will walk you through live displays of bath wellness, running faucets, and large format marble vitrified tiles."
  }
];
