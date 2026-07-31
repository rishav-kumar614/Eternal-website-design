// Real vehicle images (from Eternal by Azimuth design documents)
import vehicle360DarkImg from '../assets/images/eternal_vehicle_360_dark.jpg';
import vehicle360LightImg from '../assets/images/eternal_vehicle_360_light.jpg';
import vehicleDarkViewsImg from '../assets/images/eternal_vehicle_dark_views.jpg';
import vehicleRearGlassImg from '../assets/images/eternal_vehicle_rear_glass.jpg';
import vehicleGoldTrimImg from '../assets/images/eternal_vehicle_gold_trim.jpg';
import vehicleSageViewsImg from '../assets/images/eternal_vehicle_sage_views.jpg';
import overviewSheetImg from '../assets/images/eternal_overview_sheet.jpg';
import colourOptionsIvoryImg from '../assets/images/eternal_colour_options_ivory.jpg';
import colourVariantsImg from '../assets/images/eternal_colour_variants.jpg';

import bierSanctuaryImg from '../assets/images/eternal_bier_sanctuary.png';
import floralProcessionImg from '../assets/images/eternal_floral_procession.png';
import glassSanctuaryImg from '../assets/images/eternal_glass_sanctuary.png';
import hearseExteriorImg from '../assets/images/eternal_hearse_exterior.png';
import hearseLightThemeImg from '../assets/images/eternal_hearse_light_theme.png';
import featuresRoofImg from '../assets/images/vehicle_features_roof.png';
import viewFront34Img from '../assets/images/vehicle_view_front_34.png';
import viewRearImg from '../assets/images/vehicle_view_rear.png';
import viewRear34Img from '../assets/images/vehicle_view_rear_34.png';
import viewSideLeftImg from '../assets/images/vehicle_view_side_left.png';
import viewSideOppositeImg from '../assets/images/vehicle_view_side_opposite.png';
import viewSideRightImg from '../assets/images/vehicle_view_side_right.png';
import viewTopImg from '../assets/images/vehicle_view_top.png';
import ceremonialExt1Img from '../assets/images/eternal_ceremonial_exterior_1.png';
import ceremonialExt2Img from '../assets/images/eternal_ceremonial_exterior_2.png';
import luxuryInt1Img from '../assets/images/eternal_luxury_interior_1.png';
import luxuryInt2Img from '../assets/images/eternal_luxury_interior_2.png';
import ceremonialHearse3Img from '../assets/images/eternal_ceremonial_hearse_3.png';
import ceremonialHearse4Img from '../assets/images/eternal_ceremonial_hearse_4.png';
import ceremonialHearse5Img from '../assets/images/eternal_ceremonial_hearse_5.png';

export interface VehicleHotspot {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'tech' | 'hygiene';
  description: string;
  iconName: string;
  position: { x: number; y: number };
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PartnerSegment {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'in_service' | 'ceremonial';
  image: string;
  caption: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
}

export const ETERNAL_DATA = {
  brand: {
    name: 'Eternal Repos',
    tagline: 'From Utility to Legacy. From Transport to Tribute.',
    company: 'Azimuth Business on Wheels',
    promise: 'Every farewell deserves dignity.',
    philosophy: '“We don\'t build vehicles. We create experiences that honour life and respect every goodbye.”',
    location: 'Established in Dignity · Delhi NCR',
    copyright: '© 2026 Azimuth Business on Wheels. All Rights Reserved.',
    sla: 'We respond within 24 business hours',
    phone: '+91 98765 43210',
    email: 'contact@eternalazimuth.com',
    address: 'Azimuth Design Studio, Sector 62, Noida, Delhi NCR, India',
    whatsapp: 'https://wa.me/919876543210?text=Hello%20Eternal%20Repos%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20ceremonial%20vehicle%20services.'
  },

  hero: {
    eyebrow: 'Established in Dignity · Delhi NCR',
    headline: "India's First Ultra-Premium Luxury Funeral Mobility",
    subtagline: 'From Utility to Legacy. From Transport to Tribute.',
    primaryCta: 'View Our Vehicle',
    secondaryCta: 'Partner With Us',
    heroImage: vehicle360DarkImg,
    heroImageLight: vehicle360LightImg
  },

  whyEternal: {
    eyebrow: 'Why Eternal Repos',
    heading: 'A farewell worthy of every life',
    intro: "India's funeral mobility has long meant modified utility vehicles — cold, unbranded, purely functional. Eternal Repos was created to change that, with one purpose-built ceremonial hearse designed to the standard families and institutions deserve.",
    cards: [
      {
        id: 'silent-luxury',
        title: 'SILENT LUXURY',
        description: 'Acoustic-insulated interiors, warm ambient lighting, and climate-controlled calm — free of engine noise and clinical starkness. A peaceful space for reflection and prayer.',
        icon: 'VolumeX'
      },
      {
        id: 'premium-design',
        title: 'PREMIUM DESIGN',
        description: 'Champagne gold detailing, panoramic reinforced glass, and hospitality-grade textures — ceremonial craftsmanship that signals respect and quality at every touchpoint.',
        icon: 'Sparkles'
      },
      {
        id: 'institutional-trust',
        title: 'INSTITUTIONAL TRUST',
        description: 'Built to the standards hospitals, NGOs, and municipal bodies require — hospital-grade antimicrobial surfaces, reliable engineering, and consistently professional presentation.',
        icon: 'ShieldCheck'
      }
    ]
  },

  vehicle: {
    eyebrow: 'One Vehicle · One Promise',
    heading: 'The Silent Journey, the Glass Sanctuary',
    leadParagraph: 'Not two variants, not a range — a single, fully-loaded ceremonial hearse built from the ground up on a wide-body chassis, engineered for comfort, dignity, and grace.',
    chassis: 'Force Urbania XL Wide-Body Architecture',
    mainImage: vehicleDarkViewsImg,
    features: [
      'Panoramic side glass — 360° ceremonial viewing',
      'Precision hydraulic bier platform',
      'Warm ambient lighting & calm interiors',
      'Hospital-grade antimicrobial surfaces',
      'Aromatic air purification throughout',
      'High-fidelity surround sound',
      'External LED memorial displays',
      'Integrated floral mounting systems',
      'Multi-zone precision climate management',
      'Acoustic noise reduction barrier'
    ],
    hotspots: [
      {
        id: 'bier',
        title: 'Precision Hydraulic Bier Platform',
        category: 'tech',
        description: 'Smooth, motorized height adjustments with velvet ceremonial lining and secure soft-lock clamps for dignified placement.',
        iconName: 'Sliders',
        position: { x: 50, y: 58 }
      },
      {
        id: 'glass',
        title: 'Panoramic Reinforced Glass Sanctuary',
        category: 'exterior',
        description: 'Double-glazed UV-protected 360° glass allowing respectful family visibility during ceremonial processions.',
        iconName: 'Eye',
        position: { x: 35, y: 38 }
      },
      {
        id: 'air',
        title: 'Aromatic Air Purification System',
        category: 'hygiene',
        description: 'Continuous HEPA air filtration blended with subtle natural floral essences to ensure a serene atmosphere.',
        iconName: 'Wind',
        position: { x: 68, y: 30 }
      },
      {
        id: 'sound',
        title: 'High-Fidelity Surround Sound System',
        category: 'tech',
        description: 'Discreet interior & exterior acoustic speakers configured for soft devotional chants, prayers, or quiet tribute music.',
        iconName: 'Music',
        position: { x: 78, y: 45 }
      },
      {
        id: 'surfaces',
        title: 'Hospital-Grade Antimicrobial Surfaces',
        category: 'hygiene',
        description: 'Seam-sealed stainless steel and non-porous medical-grade upholstery for seamless sanitization and pristine hygiene.',
        iconName: 'Shield',
        position: { x: 22, y: 65 }
      },
      {
        id: 'led',
        title: 'External Memorial LED Displays',
        category: 'exterior',
        description: 'Weatherproof high-contrast LED screens customizable with the deceased person\'s name, family tribute, or institutional logo.',
        iconName: 'Tv',
        position: { x: 12, y: 48 }
      }
    ] as VehicleHotspot[]
  },

  trustBar: {
    eyebrow: 'Trusted by Institutions Across Delhi NCR',
    heading: 'Built for the partners who set the standard',
    categories: [
      'Premium Hospitals',
      'Funeral Management Companies',
      'Municipal Corporations',
      'Religious Trusts & NGOs'
    ]
  },

  pullQuotes: {
    eyebrow: 'Designed for Respect · Built for Remembrance',
    heading: 'Where trust meets tribute',
    quotes: [
      {
        id: 'hospitals',
        audience: 'FOR HOSPITALS',
        quote: '“Your patients\' families deserve the same care at departure as at admission.”',
        sub: 'Elevate your healthcare institution\'s end-of-life continuum with uncompromised dignity.'
      },
      {
        id: 'funeral-mgmt',
        audience: 'FOR FUNERAL MANAGEMENT COMPANIES',
        quote: '“Upgrade your fleet. Upgrade your brand. Elevate every farewell you serve.”',
        sub: 'Position your business as Delhi NCR\'s premier provider with bespoke ceremonial mobility.'
      },
      {
        id: 'families',
        audience: 'FOR FAMILIES',
        quote: '“Your loved one lived with dignity. Their final journey deserves nothing less.”',
        sub: 'A peaceful, quiet, and honored tribute for life\'s most sacred moment.'
      }
    ]
  },

  closingCta: {
    eyebrow: 'Partner With Eternal Repos',
    heading: 'Bring dignified farewell mobility to those you serve',
    subtext: 'We work with hospitals, funeral firms, municipal bodies, and religious trusts across Delhi NCR. Let\'s discuss a partnership built on trust and tribute.',
    primaryBtn: 'Request a Partnership',
    secondaryBtn: 'Schedule a Vehicle Demonstration'
  },

  services: [
    {
      id: 'fabrication',
      title: 'Vehicle Fabrication',
      subtitle: 'Bespoke Ceremonial Conversions',
      description: 'Turnkey fabrication of wide-body vehicle chassis into ultra-luxury ceremonial hearse vehicles crafted with champagne gold detailing, panoramic glass, and hydraulic bier systems.',
      icon: 'Wrench',
      features: [
        'Custom interior wood & leather finish',
        'Hydraulic bier platform installation',
        'Acoustic insulation & floral mounting',
        'Custom exterior livery & memorial screens'
      ]
    },
    {
      id: 'leasing',
      title: 'Vehicle Leasing',
      subtitle: 'Flexible Institutional Fleet Contracts',
      description: 'Long-term leasing models designed for hospitals, funeral management firms, and municipal bodies seeking instant fleet upgrades without high capital expenditure.',
      icon: 'KeyRound',
      features: [
        'Short & long-term institutional leases',
        'Dedicated driver & operator training',
        'Standardized maintenance inclusions',
        '24/7 priority replacement guarantee'
      ]
    },
    {
      id: 'maintenance',
      title: 'Fleet Maintenance (AMC)',
      subtitle: 'Continuous Operation & Hygiene Guarantee',
      description: 'Comprehensive annual maintenance contracts covering mechanical health, hydraulic systems calibration, climate unit servicing, and hospital-grade sanitization.',
      icon: 'Activity',
      features: [
        'Quarterly hydraulic bier calibration',
        'Antimicrobial deep-clean protocols',
        'HVAC & aromatic filter replacement',
        '24/7 Delhi NCR roadside assistance'
      ]
    },
    {
      id: 'refrigeration',
      title: 'Refrigeration Systems',
      subtitle: 'Precision Temperature Management',
      description: 'State-of-the-art climate and mortuary refrigeration technology integrated into chassis to ensure reliable preservation across Delhi NCR weather conditions.',
      icon: 'ThermometerSnowflake',
      features: [
        'Precision digital temperature control',
        'Dual-compressor redundant backup',
        'Low-noise silent cooling technology',
        'Seamless integration with bier platform'
      ]
    },
    {
      id: 'branding',
      title: 'Branding & Customisation',
      subtitle: 'Institutional Identity & Ceremonial Livery',
      description: 'Tailored branding packages for hospitals and NGOs, embedding subtle crests, heraldic logos, and external digital display programming into the vehicle design.',
      icon: 'Palette',
      features: [
        'Subtle laser-etched institutional logos',
        'Customized ambient lighting hues',
        'Digital LED message customization',
        'Coordinated ceremonial drapes & mounts'
      ]
    }
  ] as ServiceItem[],

  institutions: {
    eyebrow: 'B2B Institutional Portal',
    heading: 'Transforming End-of-Life Mobility for Professional Partners',
    subheading: 'We partner with healthcare systems, municipal bodies, NGOs, and funeral directors to deliver uncompromised dignity.',
    segments: [
      {
        id: 'hospitals',
        title: 'Premium Hospitals & Health Systems',
        description: 'Extend your hospital\'s compassionate patient care through dignified departure transport services.',
        benefits: ['Hygienic protocol compliance', 'Seamless transfer from mortuary to vehicle', 'Enhances hospital reputation and family trust'],
        ctaText: 'Hospital Partnership Inquiry'
      },
      {
        id: 'funeral-firms',
        title: 'Funeral Management Companies',
        description: 'Differentiate your fleet with Delhi NCR\'s premier ceremonial hearse, serving high-profile and discerning clients.',
        benefits: ['Instant fleet elevation', 'High client satisfaction', 'Flexible leasing or purchase options'],
        ctaText: 'Fleet Upgrade Inquiry'
      },
      {
        id: 'municipalities',
        title: 'Municipal Corporations',
        description: 'Standardize municipal mortuary transport with modern, reliable, and respectful vehicles built to highest civic standards.',
        benefits: ['Long-term AMC maintenance', 'Public service dignity', 'Robust wide-body fleet reliability'],
        ctaText: 'Civic Tender Inquiry'
      },
      {
        id: 'ngos',
        title: 'Religious Trusts & NGOs',
        description: 'Provide dignified final journeys for community members with philanthropic and heavily subsidized fleet models.',
        benefits: ['Customized branding options', 'Community service impact', 'Durable, low-maintenance design'],
        ctaText: 'Trust Partnership Inquiry'
      }
    ] as PartnerSegment[]
  },

  gallery: [
    {
      id: 'g1',
      title: 'Eternal Repos — 360° Exterior View',
      category: 'exterior',
      image: vehicle360DarkImg,
      caption: 'India\'s first ultra-premium ceremonial hearse — ivory & maroon with panoramic glass and gold accents.'
    },
    {
      id: 'g2',
      title: 'Full Design Overview — All Angles',
      category: 'exterior',
      image: overviewSheetImg,
      caption: 'Complete vehicle design sheet — front, side, rear, 3/4 views and interior of the Eternal ceremonial hearse.'
    },
    {
      id: 'g3',
      title: 'Dark Theme — Multi-Angle Views',
      category: 'exterior',
      image: vehicleDarkViewsImg,
      caption: '3/4 front view with detailed interior visible through panoramic glass in premium ambient lighting.'
    },
    {
      id: 'g4',
      title: 'Glass Sanctuary — Interior View',
      category: 'interior',
      image: vehicleRearGlassImg,
      caption: 'Panoramic gold-trimmed glass viewing area with ceremonial bier and family seating.'
    },
    {
      id: 'g5',
      title: 'Gold Trim Ceremonial Variant',
      category: 'in_service',
      image: vehicleGoldTrimImg,
      caption: 'Premium gold ornate trim ceremonial hearse with crystal glass and LED memorial lighting.'
    },
    {
      id: 'g6',
      title: 'Exterior Colour Variants',
      category: 'ceremonial',
      image: colourVariantsImg,
      caption: 'Five custom colour options — Midnight Pearl, Sandstone Beige, Sage Green, Navy Blue, Pearl Grey Silver.'
    },
    {
      id: 'g7',
      title: 'Ivory + Champagne Bronze — 360° View',
      category: 'exterior',
      image: vehicle360LightImg,
      caption: 'Ivory white with satin champagne bronze accents — warm, timeless and institutional luxury.'
    },
    {
      id: 'g8',
      title: 'Sage Green Colour Option',
      category: 'exterior',
      image: vehicleSageViewsImg,
      caption: 'Natural calm sage green — earthy dignity and contemporary serenity in every angle.'
    },
    {
      id: 'g9',
      title: 'Premium Colour Options Catalogue',
      category: 'ceremonial',
      image: colourOptionsIvoryImg,
      caption: 'Five curated exterior finishes — ivory beige, brushed titanium, pearl white, champagne gold, deep ivory brown.'
    },
    {
      id: 'g10',
      title: 'Precision Hydraulic Bier Sanctuary',
      category: 'interior',
      image: bierSanctuaryImg,
      caption: 'Motorized hydraulic bier platform with ambient golden cove lighting and hospital-grade antimicrobial surfaces.'
    },
    {
      id: 'g11',
      title: 'Floral Procession & Mounts',
      category: 'ceremonial',
      image: floralProcessionImg,
      caption: 'Integrated floral mounting systems with ceremonial drapes and respectful tribute lighting.'
    },
    {
      id: 'g12',
      title: 'Glass Sanctuary — Panoramic View',
      category: 'interior',
      image: glassSanctuaryImg,
      caption: 'Reinforced 360° glass viewing chamber with climate control and acoustic noise reduction.'
    },
    {
      id: 'g13',
      title: 'Eternal Hearse Exterior Profile',
      category: 'exterior',
      image: hearseExteriorImg,
      caption: 'Wide-body Urbania XL chassis with champagne gold trim and panoramic ceremonial viewing glass.'
    },
    {
      id: 'g14',
      title: 'Ivory Pearl — Light Theme Render',
      category: 'exterior',
      image: hearseLightThemeImg,
      caption: 'Ivory pearl finish with warm gold detailing for day-time ceremonial processions.'
    },
    {
      id: 'g15',
      title: 'Panoramic Glass Roof & Rails',
      category: 'exterior',
      image: featuresRoofImg,
      caption: 'Toughened glass roof ceiling with champagne gold roof rails and external memorial lighting.'
    },
    {
      id: 'g16',
      title: 'Front 3/4 Perspective Profile',
      category: 'exterior',
      image: viewFront34Img,
      caption: 'Commanding front 3/4 profile featuring gold-embossed Eternal crest and LED headlights.'
    },
    {
      id: 'g17',
      title: 'Direct Rear View — Glass Chamber',
      category: 'exterior',
      image: viewRearImg,
      caption: 'Rear viewing window showcasing internal ceremonial drapes and gold logo branding.'
    },
    {
      id: 'g18',
      title: 'Rear 3/4 Perspective View',
      category: 'exterior',
      image: viewRear34Img,
      caption: 'Rear quarter angle highlighting wide-body stance, step ladder access, and side panoramic glass.'
    },
    {
      id: 'g19',
      title: 'Side Profile View — Full Length',
      category: 'exterior',
      image: viewSideLeftImg,
      caption: 'Full-length side profile displaying seamless glass sanctuary and gold coachlines.'
    },
    {
      id: 'g20',
      title: 'Opposite Side Profile View',
      category: 'exterior',
      image: viewSideOppositeImg,
      caption: 'Complete driver side profile with integrated side entrance door and gold metallic trim.'
    },
    {
      id: 'g21',
      title: 'Right Side Elevation Angle',
      category: 'exterior',
      image: viewSideRightImg,
      caption: 'Right elevation showing passenger side panoramic window and gold wheel arches.'
    },
    {
      id: 'g22',
      title: 'Bird\'s Eye Top Perspective',
      category: 'exterior',
      image: viewTopImg,
      caption: 'Top-down aerial view revealing full panoramic roof glass structure and chassis width.'
    },
    {
      id: 'g23',
      title: 'Ceremonial Hearse — Studio Render 1',
      category: 'ceremonial',
      image: ceremonialExt1Img,
      caption: 'High-detail studio ceremonial render with gold ornamentation and crystal glass.'
    },
    {
      id: 'g24',
      title: 'Ceremonial Hearse — Studio Render 2',
      category: 'ceremonial',
      image: ceremonialExt2Img,
      caption: 'Custom luxury hearse variant with warm interior illumination.'
    },
    {
      id: 'g25',
      title: 'Luxury Interior Sanctuary — Angle 1',
      category: 'interior',
      image: luxuryInt1Img,
      caption: 'Spacious interior cabin with hospitality-grade seating and acoustic dampening.'
    },
    {
      id: 'g26',
      title: 'Luxury Interior Sanctuary — Angle 2',
      category: 'interior',
      image: luxuryInt2Img,
      caption: 'Calm ambient lit interior chamber with motorized bier platform.'
    },
    {
      id: 'g27',
      title: 'Ceremonial Hearse — Special Edition 1',
      category: 'in_service',
      image: ceremonialHearse3Img,
      caption: 'Bespoke ceremonial hearse designed for institutional B2B fleets.'
    },
    {
      id: 'g28',
      title: 'Ceremonial Hearse — Special Edition 2',
      category: 'in_service',
      image: ceremonialHearse4Img,
      caption: 'Ornate gold trim ceremonial hearse in evening lighting.'
    },
    {
      id: 'g29',
      title: 'Ceremonial Hearse — Special Edition 3',
      category: 'in_service',
      image: ceremonialHearse5Img,
      caption: 'Full-spec ceremonial mobility vehicle crafted for high-profile tributes.'
    }
  ] as GalleryItem[],

  blog: [
    {
      id: 'dignified-mobility-standard',
      title: 'Redefining Funeral Mobility: Why Dignity Matters at Every Journey Stage',
      category: 'Industry Insights',
      date: 'July 15, 2026',
      readTime: '4 min read',
      excerpt: 'For decades, end-of-life transport in India relied on modified utility vans. Discover how purpose-built ceremonial vehicles are restoring respect and peace for families.',
      content: [
        'The transition from life is a moment deserving of profound respect. Yet for many years, families across Indian metropolitan cities faced cold, clinical, and poorly presented utility transport.',
        'Azimuth Business on Wheels launched Eternal to solve this critical gap in India\'s healthcare and funeral ecosystem. By designing a vehicle specifically built for ceremonial honor—complete with acoustic insulation, panoramic glass, and climate control—we ensure that every farewell honors the legacy of the individual.',
        'Hospitals and funeral providers who adopt high standards of departure care report significantly higher trust and emotional gratitude from grieving families.'
      ],
      author: 'Azimuth Research Team'
    },
    {
      id: 'b2b-hospital-continuum-care',
      title: 'The Unspoken Dimension of Hospital Quality: End-of-Life Continuum Care',
      category: 'Healthcare B2B',
      date: 'June 28, 2026',
      readTime: '5 min read',
      excerpt: 'How leading private hospitals in Delhi NCR are integrating premium ceremonial mobility into their patient departure protocols.',
      content: [
        'When a hospital provides state-of-the-art medical care, that commitment to excellence should not end at the mortuary door.',
        'Institutional partners across Delhi NCR are realizing that the final impression left on a patient\'s family occurs during vehicle departure. Eternal provides hospitals with dedicated, hygienic, and dignified fleet leasing solutions that align with international hospital accreditation standards.'
      ],
      author: 'Strategic Partnerships Division'
    }
  ] as BlogArticle[]
};
