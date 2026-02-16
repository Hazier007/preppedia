import type { Item } from "@/lib/types";

export const ITEMS: Item[] = [
  // Water filtration
  {
    slug: "sawyer-squeeze-water-filter",
    title: "Sawyer Squeeze Water Filter",
    brand: "Sawyer",
    categorySlug: "water-filtration",
    description: "The gold standard for backcountry water filtration. Removes 99.99999% of bacteria and 99.9999% of protozoa from water sources up to 100,000 gallons.",
    price: "$37.95",
    rating: 4.5,
    amazonUrl: "https://www.amazon.com/dp/B00B1OSU4W?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Sawyer+Squeeze",
    features: [
      "Filters up to 100,000 gallons",
      "Weighs only 3 ounces",
      "Fast flow rate - 1.7 liters per minute",
      "Backwashes for extended use"
    ]
  },
  {
    slug: "lifestraw-personal-water-filter",
    title: "LifeStraw Personal Water Filter",
    brand: "LifeStraw",
    categorySlug: "water-filtration",
    description: "Ultra-lightweight personal water filter perfect for emergency kits and bug-out bags. Filters up to 4,000 liters of contaminated water without chemicals or batteries.",
    price: "$19.95",
    rating: 4.3,
    amazonUrl: "https://www.amazon.com/dp/B006QF3TW4?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=LifeStraw",
    features: [
      "Filters up to 4,000 liters",
      "No batteries or electrical power required",
      "Removes 99.999999% of bacteria",
      "Weighs only 2 ounces"
    ]
  },
  {
    slug: "katadyn-befree-water-filter",
    title: "Katadyn BeFree Water Filter",
    brand: "Katadyn",
    categorySlug: "water-filtration",
    description: "Fast-flowing collapsible water filter with exceptional flow rate. Perfect for hikers and preppers who need quick access to clean water without the wait.",
    price: "$44.95",
    rating: 4.2,
    amazonUrl: "https://www.amazon.com/dp/B075X3MKNX?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Katadyn+BeFree",
    features: [
      "Ultra-fast flow rate - 2L per minute",
      "Collapsible for compact storage",
      "Easy to clean membrane",
      "Compatible with hydration packs"
    ]
  },
  {
    slug: "grayl-geopress-purifier",
    title: "GRAYL GeoPress Water Purifier",
    brand: "GRAYL",
    categorySlug: "water-filtration",
    description: "All-in-one water purifier bottle that removes viruses, bacteria, protozoa, and chemicals. Simply fill, press, and drink clean water in 15 seconds.",
    price: "$89.95",
    rating: 4.4,
    amazonUrl: "https://www.amazon.com/dp/B078J47K3Z?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=GRAYL+GeoPress",
    features: [
      "Purifies 24oz in 15 seconds",
      "Removes viruses, bacteria, chemicals",
      "No setup required",
      "Durable borosilicate glass inner"
    ]
  },
  {
    slug: "survivor-filter-pro",
    title: "Survivor Filter PRO",
    brand: "Survivor Filter",
    categorySlug: "water-filtration",
    description: "Military-grade water filter with triple filtration system. Removes bacteria, protozoa, viruses, and heavy metals from any freshwater source.",
    price: "$69.99",
    rating: 4.1,
    amazonUrl: "https://www.amazon.com/dp/B01M8GK0SS?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Survivor+Filter+PRO",
    features: [
      "Triple filtration system",
      "Removes viruses and heavy metals",
      "Self-cleaning pre-filter",
      "100,000+ gallon capacity"
    ]
  },
  {
    slug: "aquatainer-water-container",
    title: "Reliance Aquatainer 7-Gallon Water Container",
    brand: "Reliance",
    categorySlug: "water-filtration",
    description: "Durable water storage container designed for emergency preparedness. Features easy-pour spigot and comfortable grip design for transport.",
    price: "$24.99",
    rating: 4.3,
    amazonUrl: "https://www.amazon.com/dp/B001QC31G6?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Aquatainer+7gal",
    features: [
      "7-gallon capacity",
      "Built-in spigot for easy pouring",
      "Stackable design",
      "BPA-free construction"
    ]
  },

  // First aid
  {
    slug: "adventure-medical-kits-mountain-series",
    title: "Adventure Medical Kits Mountain Series Mountaineer",
    brand: "Adventure Medical Kits",
    categorySlug: "first-aid",
    description: "Comprehensive first aid kit designed for serious outdoor adventures. Contains medical supplies for 4+ people for up to 14 days in remote locations.",
    price: "$189.95",
    rating: 4.6,
    amazonUrl: "https://www.amazon.com/dp/B000G7WRBC?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=AMK+Mountaineer",
    features: [
      "Covers 4+ people for 14 days",
      "Waterproof DryFlex bags",
      "Comprehensive medication selection",
      "Professional medical guide included"
    ]
  },
  {
    slug: "mymedic-myfak-first-aid-kit",
    title: "MyMedic MyFAK First Aid Kit",
    brand: "MyMedic",
    categorySlug: "first-aid",
    description: "Military-style trauma kit with premium medical supplies. Organized in clear compartments for quick access during emergencies.",
    price: "$149.99",
    rating: 4.7,
    amazonUrl: "https://www.amazon.com/dp/B075QBQZPX?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=MyMedic+MyFAK",
    features: [
      "MOLLE compatible design",
      "Clear organization system",
      "Premium hemostatic agents",
      "Trauma shears included"
    ]
  },
  {
    slug: "israeli-bandage-emergency-dressing",
    title: "Israeli Bandage Emergency Dressing",
    brand: "First Care",
    categorySlug: "first-aid",
    description: "Military field dressing used by armies worldwide. Provides immediate direct pressure and controls bleeding from traumatic wounds.",
    price: "$12.95",
    rating: 4.8,
    amazonUrl: "https://www.amazon.com/dp/B003DPVERM?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Israeli+Bandage",
    features: [
      "One-handed application",
      "Built-in pressure applicator",
      "Sterile and latex-free",
      "10-year shelf life"
    ]
  },
  {
    slug: "sam-splint-36",
    title: "SAM Splint 36-Inch",
    brand: "SAM Medical",
    categorySlug: "first-aid",
    description: "Lightweight, reusable splint that provides structural support for fractures and sprains. Moldable aluminum core with foam padding.",
    price: "$17.50",
    rating: 4.5,
    amazonUrl: "https://www.amazon.com/dp/B000VXELKU?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=SAM+Splint",
    features: [
      "Lightweight aluminum construction",
      "Infinitely reusable",
      "Waterproof and x-ray translucent",
      "Can be cut to custom sizes"
    ]
  },
  {
    slug: "quikclot-combat-gauze",
    title: "QuikClot Combat Gauze",
    brand: "QuikClot",
    categorySlug: "first-aid",
    description: "Combat-proven hemostatic gauze that stops bleeding fast. Used by military and first responders worldwide for severe trauma situations.",
    price: "$42.99",
    rating: 4.6,
    amazonUrl: "https://www.amazon.com/dp/B004CJZERG?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=QuikClot+Gauze",
    features: [
      "Stops bleeding in minutes",
      "Safe and effective hemostatic agent",
      "Easy to use under pressure",
      "5-year shelf life"
    ]
  },

  // Food storage
  {
    slug: "mountain-house-3-day-emergency-kit",
    title: "Mountain House 3-Day Emergency Food Kit",
    brand: "Mountain House",
    categorySlug: "food-storage",
    description: "Complete 3-day emergency food supply with 9 pouches of freeze-dried meals. Just add water for restaurant-quality meals with 30-year shelf life.",
    price: "$79.95",
    rating: 4.4,
    amazonUrl: "https://www.amazon.com/dp/B004OVARY6?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Mountain+House+3Day",
    features: [
      "30-year shelf life",
      "Just add water preparation",
      "9 full meals included",
      "Lightweight and portable"
    ]
  },
  {
    slug: "wise-company-emergency-food-supply",
    title: "Wise Company 1-Month Emergency Food Supply",
    brand: "Wise Company",
    categorySlug: "food-storage",
    description: "Complete 1-month food supply providing 1,440 calories per day. Includes breakfast, lunch, dinner, and snacks with 25-year shelf life.",
    price: "$199.99",
    rating: 4.2,
    amazonUrl: "https://www.amazon.com/dp/B00IRY9ZGS?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Wise+1Month",
    features: [
      "1,440 calories per day",
      "25-year shelf life",
      "120 servings total",
      "Stackable storage buckets"
    ]
  },
  {
    slug: "augason-farms-5-gallon-kit",
    title: "Augason Farms 30-Day Emergency Food Storage Kit",
    brand: "Augason Farms",
    categorySlug: "food-storage",
    description: "Comprehensive 30-day food supply in convenient 5-gallon bucket. Provides balanced nutrition with variety of meals and sides.",
    price: "$159.99",
    rating: 4.1,
    amazonUrl: "https://www.amazon.com/dp/B004FYMPB2?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Augason+30Day",
    features: [
      "30-day food supply",
      "Convenient 5-gallon bucket",
      "2,000+ calories per day",
      "Up to 20-year shelf life"
    ]
  },
  {
    slug: "gamma2-vittles-vault",
    title: "Gamma2 Vittles Vault Food Storage Container",
    brand: "Gamma2",
    categorySlug: "food-storage",
    description: "Airtight food storage container that keeps pests out and freshness in. Perfect for storing bulk rice, beans, flour, and other dry goods.",
    price: "$34.95",
    rating: 4.5,
    amazonUrl: "https://www.amazon.com/dp/B0002H3S5K?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Vittles+Vault",
    features: [
      "Airtight gamma seal lid",
      "Pest and moisture proof",
      "BPA-free construction",
      "Easy pour design"
    ]
  },
  {
    slug: "mylar-bags-oxygen-absorbers",
    title: "5-Gallon Mylar Bags with Oxygen Absorbers",
    brand: "PackFreshUSA",
    categorySlug: "food-storage",
    description: "Professional-grade mylar bags with oxygen absorbers for long-term food storage. Creates oxygen-free environment to preserve food for decades.",
    price: "$29.99",
    rating: 4.6,
    amazonUrl: "https://www.amazon.com/dp/B00B5EIQWC?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Mylar+Bags",
    features: [
      "7-mil thick mylar material",
      "Includes 500cc oxygen absorbers",
      "Heat sealable",
      "Blocks light and moisture"
    ]
  },
  {
    slug: "freeze-dried-vegetable-variety-pack",
    title: "Freeze Dried Vegetable Variety Pack",
    brand: "Harmony House",
    categorySlug: "food-storage",
    description: "Complete assortment of freeze-dried vegetables for long-term storage. Retains original nutrition and flavor when rehydrated.",
    price: "$49.99",
    rating: 4.3,
    amazonUrl: "https://www.amazon.com/dp/B07QR4QF8N?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Freeze+Dried+Veggies",
    features: [
      "20+ year shelf life",
      "Retains full nutrition",
      "No artificial preservatives",
      "Quick rehydration time"
    ]
  },

  // Emergency radio
  {
    slug: "midland-er310-emergency-radio",
    title: "Midland ER310 Emergency Crank Weather Radio",
    brand: "Midland",
    categorySlug: "emergency-radio",
    description: "Ultra-rugged emergency weather radio with multiple power sources. Features NOAA weather alerts, AM/FM radio, and can charge your phone.",
    price: "$59.99",
    rating: 4.3,
    amazonUrl: "https://www.amazon.com/dp/B018HGFJBE?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Midland+ER310",
    features: [
      "Solar, crank, and battery power",
      "NOAA weather alerts",
      "USB phone charging port",
      "Bright LED flashlight"
    ]
  },
  {
    slug: "eton-frx5-bt-emergency-radio",
    title: "Eton FRX5-BT Emergency Weather Radio",
    brand: "Eton",
    categorySlug: "emergency-radio",
    description: "Premium emergency radio with Bluetooth connectivity and smartphone integration. Multiple power sources ensure you stay connected when it matters most.",
    price: "$99.99",
    rating: 4.2,
    amazonUrl: "https://www.amazon.com/dp/B00OOQLGPU?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Eton+FRX5-BT",
    features: [
      "Bluetooth smartphone connectivity",
      "Solar panel and hand crank",
      "NOAA weather band reception",
      "Red LED emergency beacon"
    ]
  },
  {
    slug: "kaito-ka500-survival-radio",
    title: "Kaito KA500 5-Way Emergency Radio",
    brand: "Kaito",
    categorySlug: "emergency-radio",
    description: "Versatile survival radio with 5 different power sources. Compact design with essential emergency features including weather alerts and phone charging.",
    price: "$49.95",
    rating: 4.1,
    amazonUrl: "https://www.amazon.com/dp/B00176T9OY?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Kaito+KA500",
    features: [
      "5 power source options",
      "Compact and lightweight",
      "Weather band with alerts",
      "Reading lamp function"
    ]
  },
  {
    slug: "sangean-mmr-88-emergency-radio",
    title: "Sangean MMR-88 Emergency Radio",
    brand: "Sangean",
    categorySlug: "emergency-radio",
    description: "Compact emergency radio with exceptional reception quality. Features dual power sources and essential emergency functions in a pocket-sized design.",
    price: "$39.95",
    rating: 4.4,
    amazonUrl: "https://www.amazon.com/dp/B00B3MJD3E?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Sangean+MMR-88",
    features: [
      "Superior reception quality",
      "Compact pocket size",
      "Solar and crank charging",
      "LED flashlight built-in"
    ]
  },
  {
    slug: "weather-radio-noaa-alert",
    title: "Midland WR120B Weather Alert Radio",
    brand: "Midland",
    categorySlug: "emergency-radio",
    description: "Desktop weather radio specifically designed for home emergency preparedness. Automatic alerts wake you up for severe weather warnings.",
    price: "$29.99",
    rating: 4.5,
    amazonUrl: "https://www.amazon.com/dp/B00176T9T6?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Midland+WR120B",
    features: [
      "Automatic weather alerts",
      "SAME programming for local area",
      "Battery backup",
      "25-county memory"
    ]
  },

  // Flashlights
  {
    slug: "streamlight-protac-1l-1aa",
    title: "Streamlight ProTac 1L-1AA",
    brand: "Streamlight",
    categorySlug: "flashlights",
    description: "Versatile tactical flashlight that accepts both CR123A and AA batteries. Perfect balance of size, brightness, and reliability for EDC use.",
    price: "$59.00",
    rating: 4.6,
    amazonUrl: "https://www.amazon.com/dp/B003GXF9MW?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Streamlight+ProTac",
    features: [
      "Dual fuel - CR123A or AA battery",
      "350 lumens max output",
      "IPX7 waterproof rating",
      "TEN-TAP programmable switch"
    ]
  },
  {
    slug: "olight-warrior-mini-2",
    title: "Olight Warrior Mini 2",
    brand: "Olight",
    categorySlug: "flashlights",
    description: "High-performance tactical flashlight with proximity sensor and magnetic charging. Compact design with incredible 1,750-lumen output.",
    price: "$89.95",
    rating: 4.7,
    amazonUrl: "https://www.amazon.com/dp/B08L3JZGNZ?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Olight+Warrior",
    features: [
      "1,750 lumens maximum output",
      "Proximity sensor prevents overheating",
      "Magnetic tail cap",
      "USB-C magnetic charging"
    ]
  },
  {
    slug: "fenix-pd36r-rechargeable",
    title: "Fenix PD36R Rechargeable Flashlight",
    brand: "Fenix",
    categorySlug: "flashlights",
    description: "Premium rechargeable tactical flashlight with exceptional beam distance. Military-grade construction with multiple brightness levels.",
    price: "$109.95",
    rating: 4.5,
    amazonUrl: "https://www.amazon.com/dp/B07VQZQN6X?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Fenix+PD36R",
    features: [
      "1,600 lumens with 1,312ft beam",
      "USB-C rechargeable",
      "IP68 waterproof rating",
      "A6061-T6 aluminum construction"
    ]
  },
  {
    slug: "thrunite-tn12-v4",
    title: "ThruNite TN12 V4 Neutral White",
    brand: "ThruNite",
    categorySlug: "flashlights",
    description: "Affordable high-performance flashlight with neutral white LED for better color rendering. Excellent runtime and build quality.",
    price: "$39.95",
    rating: 4.4,
    amazonUrl: "https://www.amazon.com/dp/B01EWJ7ZB4?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=ThruNite+TN12",
    features: [
      "1,100 lumens neutral white LED",
      "132-hour maximum runtime",
      "IPX8 waterproof",
      "Memory mode function"
    ]
  },
  {
    slug: "maglite-mini-pro-2aa",
    title: "Maglite Mini PRO+ 2AA LED",
    brand: "Maglite",
    categorySlug: "flashlights",
    description: "Classic American-made flashlight with modern LED technology. Durable aluminum construction with adjustable beam focus.",
    price: "$34.99",
    rating: 4.3,
    amazonUrl: "https://www.amazon.com/dp/B009TC5XTI?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Maglite+Mini+PRO",
    features: [
      "245 lumens LED output",
      "Adjustable beam focus",
      "Aircraft-grade aluminum",
      "Water and shock resistant"
    ]
  },
  {
    slug: "coast-px1r-rechargeable",
    title: "Coast PX1R Rechargeable Flashlight",
    brand: "Coast",
    categorySlug: "flashlights",
    description: "Compact rechargeable flashlight with dual power sources. Features Coast's Pure Beam focusing optics for versatile lighting.",
    price: "$54.99",
    rating: 4.2,
    amazonUrl: "https://www.amazon.com/dp/B07Q2KXQZN?tag=preppedia-20",
    imageUrl: "https://placehold.co/400x400/1a1a1a/22c55e?text=Coast+PX1R",
    features: [
      "460 lumens with Pure Beam optics",
      "Rechargeable with backup AA battery",
      "Twist focus beam adjustment",
      "Impact and weather resistant"
    ]
  }
];
