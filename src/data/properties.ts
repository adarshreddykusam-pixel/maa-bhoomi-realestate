export interface Property {
  id: string;
  title: string;
  type: 'plot' | 'farmland' | 'apartment' | 'house';
  typeLabel: string;
  price: string;
  priceNumeric: number; // in lakhs
  location: string;
  subRegion: string;
  size: string;
  facing: 'East' | 'West' | 'North' | 'South' | 'East Corner' | 'North-East Corner' | 'Other';
  amenities: string[];
  description: string;
  bankLoanAvailable: boolean;
  featured: boolean;
  images: string[]; // SVGs or Unsplash placeholders
  video?: string; // Optional local video path
  specifications?: Record<string, string>;
}

export const properties: Property[] = [
  {
    id: 'prop-3',
    title: 'Modern 3 BHK Luxury Apartment in Gorantla',
    type: 'apartment',
    typeLabel: 'Apartment',
    price: '₹70 Lakhs',
    priceNumeric: 70,
    location: 'Gorantla VIP Road, Guntur',
    subRegion: 'Gorantla',
    size: '1650 Sq. Ft.',
    facing: 'East',
    amenities: [
      '100% Power Backup',
      'Covered Car Parking',
      'High-Speed Elevators',
      'Intercom & 24/7 Security Cameras',
      'Municipal Water (Manjeera/Krishna)',
      'Equipped Gym & Community Hall'
    ],
    description: 'An elegant, spacious 3 BHK apartment in the premium residential hub of Gorantla, Guntur. This flat offers modern architecture, top-tier sanitary fittings, modular kitchen provisions, and huge balconies with an unobstructed view of the surrounding greenery. Ready to occupy.',
    bankLoanAvailable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Bedrooms': '3 BHK',
      'Bathrooms': '3 Attached',
      'Floor No': '3rd of 5 Floors',
      'Super Built-up Area': '1650 Sq. Ft.',
      'Age of Property': 'Brand New (Completed)'
    }
  },
  {
    id: 'prop-4',
    title: 'Gated Community Independent House/Villa',
    type: 'house',
    typeLabel: 'Independent House',
    price: '₹40 - 70 Lakhs',
    priceNumeric: 55,
    location: 'Tadepalli, Guntur-Vijayawada Highway',
    subRegion: 'Tadepalli',
    size: '2400 Sq. Ft. (Plot: 200 Sq. Yds)',
    facing: 'West',
    amenities: [
      'Gated Community Security',
      'Individual Borewell & Overhead Tank',
      'Private Garden & Balcony',
      'Teakwood Main Doors & UPVC Windows',
      'Solar Water Heater Installed',
      '100% Vastu Compliant'
    ],
    description: 'A beautiful double-storey (G+1) independent house in a secure gated community at Tadepalli. Positioned in the middle of Guntur and Vijayawada, making it ideal for families working in either city. Built with premium materials, marble flooring, and spacious modular designs.',
    bankLoanAvailable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Configuration': '4 BHK Villa',
      'Built-up Area': '2400 Sq. Ft.',
      'Land Area': '200 Sq. Yards',
      'Flooring': 'Premium Italian Marble',
      'Furnishing Status': 'Semi-Furnished (Wardrobes & Kitchen Cabinets)'
    }
  },
  {
    id: 'prop-5',
    title: 'CRDA Approved Plot near Rayapudi (Video Tour Available)',
    type: 'plot',
    typeLabel: 'CRDA Plot',
    price: '₹55 Lakhs',
    priceNumeric: 55,
    location: 'Rayapudi Seed Access Road, Amaravati',
    subRegion: 'Rayapudi',
    size: '180 Sq. Yards',
    facing: 'East Corner',
    amenities: [
      'Underground Cables (Power & Fiber)',
      'Footpaths with Paver Blocks',
      'Central overhead water reservoir',
      'Gated archway entrance',
      'LED Street Lighting',
      'Water connection to every plot'
    ],
    description: 'Invest in the heart of Andhra Pradesh proposed capital city. This plot is situated in a high-profile layout near the Seed Access Road at Rayapudi. It has fully completed development work and is ready for immediate home construction. Approved for bank loans from leading public sector banks.',
    bankLoanAvailable: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    video: '/VIDEO-2026-07-04-12-08-28.mp4',
    specifications: {
      'Layout Approval No': 'L.P. NO: 4/2025 (CRDA Approved)',
      'Plot Dimensions': '30 x 54 Feet',
      'Road Width': '60 Feet (Main Entrance)',
      'Zone Type': 'Residential Zone R1',
      'Distance to Secretariat': '4 KM'
    }
  },
  {
    id: 'prop-6',
    title: 'Scenic Farm Land Plots for Agro-Investment',
    type: 'farmland',
    typeLabel: 'Farm Land',
    price: '₹35 Lakhs',
    priceNumeric: 35,
    location: 'Near Venkatapalem, Amaravati',
    subRegion: 'Venkatapalem',
    size: '500 Sq. Yards',
    facing: 'North-East Corner',
    amenities: [
      'Drip Irrigation Installed',
      '12ft wide internal pathways',
      'Sandalwood trees planted (Maintenance contract)',
      'Security fencing',
      'Shared farmhouse clubhouse access',
      'Main road connectivity'
    ],
    description: 'Mini farmland plot plots (each 500 sq yards) inside a managed sandalwood plantation scheme near Venkatapalem, Guntur. Perfect for small investors looking to own a piece of green land with guaranteed timber yields. The plantation is managed by a professional agronomy team.',
    bankLoanAvailable: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Layout Size': '15 Acres Gated Estate',
      'Ownership': 'Individual Registration (Passbook issued)',
      'Plantation': '15 Sandalwood & 5 Fruit Trees per plot',
      'Maintenance Fee': 'Free for initial 3 Years',
      'Distance to Vijayawada': '18 KM'
    }
  },
  {
    id: 'prop-7',
    title: 'Budget 2 BHK Flat near Guntur Inner Ring Road',
    type: 'apartment',
    typeLabel: 'Apartment',
    price: '₹40 Lakhs',
    priceNumeric: 40,
    location: 'Inner Ring Road, Guntur',
    subRegion: 'Inner Ring Road',
    size: '1150 Sq. Ft.',
    facing: 'West',
    amenities: [
      'Lift Facility',
      'Borewell & Panchayat water',
      'Car Parking space',
      'CCTV Surveillance',
      'Intercom connectivity',
      'Generator for common lights'
    ],
    description: 'Perfect budget home for nuclear families. Situated very close to schools, hospitals, and supermarkets near the Guntur Inner Ring Road. Built by a reputed local builder with absolute focus on quality, ventilation, and vastu correctness. Low maintenance charges.',
    bankLoanAvailable: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Bedrooms': '2 BHK',
      'Bathrooms': '2 (1 Indian, 1 Western)',
      'Super Built-up Area': '1150 Sq. Ft.',
      'Floor No': '2nd of 5 Floors',
      'Age of Property': 'Ready to move in'
    }
  },
  {
    id: 'prop-8',
    title: 'Brand New 3 BHK Independent House at Mangalagiri',
    type: 'house',
    typeLabel: 'Independent House',
    price: '₹70 Lakhs',
    priceNumeric: 70,
    location: 'Nidamarru Road, Mangalagiri',
    subRegion: 'Mangalagiri',
    size: '1800 Sq. Ft. (Plot: 150 Sq. Yds)',
    facing: 'East',
    amenities: [
      'Independent Plot & Borewell',
      'Separate Car Parking Port',
      'Spacious Open Terrace',
      'Marble Flooring & Pop Ceilings',
      'Municipal Drinking Water connection',
      'Completely Vaastu Compliant'
    ],
    description: 'Beautifully designed East-facing individual house built on 150 square yards of plot. Features a grand ground floor hall, kitchen, master bedroom with attached bath, and double bedrooms with attached baths on the first floor. Modern false ceiling work, premium bathroom tiles, and excellent ventilation throughout.',
    bankLoanAvailable: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Configuration': '3 BHK Double Storey',
      'Plot Area': '150 Sq. Yards',
      'Built-up Area': '1800 Sq. Ft.',
      'Road Facing': '30 Feet Concrete Road',
      'Water Connection': 'Yes (Municipal + Ground Bore)'
    }
  },
  {
    id: 'prop-9',
    title: 'Premium Highway-Facing Plot (Video Tour Available)',
    type: 'plot',
    typeLabel: 'CRDA Plot',
    price: '₹9,999 / Sq. Yd',
    priceNumeric: 14.99,
    location: 'Kaza NH-16 Access Corridor, Near Mangalagiri',
    subRegion: 'Kaza',
    size: '150 Sq. Yards',
    facing: 'East',
    amenities: [
      'Site Video Walkthrough',
      'Immediate Registration',
      '33ft Concrete Roads',
      'Electricity Connections Ready',
      'Clear Title & Red Soil',
      'Compound Wall Boundary'
    ],
    description: 'A premium 150 Sq. Yards residential plot with a complete video tour. Located close to Kaza and the main Mangalagiri region, with quick access to NH-16. This plot features a secure boundary wall, level red soil, and is ready for immediate home construction or long-term agricultural usage. Clear documentation and fast processing.',
    bankLoanAvailable: true,
    featured: true,
    video: '/VIDEO-2026-07-04-12-09-10.mp4',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Plot Size': '150 Sq. Yards',
      'Price per Sq. Yard': '₹9,999/-',
      'Facing': 'East facing',
      'Road Width': '33 Feet Road',
      'L.P. Number': 'Applied (Clear Title)'
    }
  },
  {
    id: 'prop-10',
    title: 'Scenic Managed Farmland Plots (Video Tour Available)',
    type: 'farmland',
    typeLabel: 'Farm Land',
    price: '₹2.5 Lakhs (Total)',
    priceNumeric: 2.5,
    location: 'Adjacent to Proposed Amaravati ORR Region',
    subRegion: 'Amaravati ORR',
    size: 'Custom sizes available',
    facing: 'North-East Corner',
    amenities: [
      'Managed Sandalwood Plantation',
      'Full Drone Walkthrough Video',
      'Drip Irrigation system installed',
      'Individual boundary poles',
      'Secure gated estate layout',
      '24/7 caretaker security'
    ],
    description: 'Take a virtual tour of this managed agricultural layout, selling at only ₹2.5 Lakhs. Ideal for farmland buyers wanting high-yielding commercial plantations (sandalwood & organic fruit trees) with full maintenance services included. Perfectly placed next to the upcoming Amaravati Outer Ring Road region.',
    bankLoanAvailable: false,
    featured: true,
    video: '/0002-1.mp4',
    images: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      'Price total': '₹2,50,000/-',
      'Plot Type': 'Agricultural/Managed Plantation',
      'Facing': 'North-East Corner',
      'Water Supply': 'Dual source (Drip & Borewell)',
      'Minimum Plot Size': '100 Sq. Yards'
    }
  }
];
