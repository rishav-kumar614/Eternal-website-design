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
  subtitle: string;
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
    promise: 'To bring dignity, care, and professionalism to every final journey.',
    philosophy: '“Dignity should not be an upgrade. It should be the standard.”',
    location: 'Delhi NCR Operations · Azimuth Design Studio',
    copyright: '© 2026 Eternal Repos, an initiative of Azimuth Business on Wheels. All Rights Reserved.',
    sla: 'We respond within one business day.',
    phone: '+91 XXXXX XXXXX',
    email: 'contact@eternalrepos.in',
    address: 'Azimuth Design Studio, Sector 62, Noida, Delhi NCR, India',
    whatsapp: 'https://wa.me/919876543210?text=Hello%20Eternal%20Repos%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20ceremonial%20vehicle%20services.'
  },

  hero: {
    eyebrow: 'Eternal Repos — Tribute in Motion',
    headline: 'Every Final Journey Deserves Dignity.',
    subtagline: 'Eternal Repos is creating a new standard for funeral mobility in India through a purpose-built ceremonial vehicle designed for dignity, comfort, reliability, and respect.',
    badge: 'From Utility to Legacy. From Transport to Tribute.',
    primaryCta: 'Explore Our Vehicle',
    secondaryCta: 'Partner With Us',
    heroImage: vehicle360DarkImg,
    heroImageLight: vehicle360LightImg,
    highlights: [
      { stat: '360°', label: 'Panoramic Ceremonial Viewing' },
      { stat: '24-Hour', label: 'Institutional Response Commitment' },
      { stat: '100%', label: 'Purpose-Built for Final Journeys' }
    ]
  },

  whyEternal: {
    eyebrow: 'The Eternal Promise',
    heading: 'Why Eternal Repos Exists',
    intro: 'For years, funeral transportation in India has largely depended on modified utility vehicles. They fulfil a basic purpose, but they are rarely designed around the emotional needs of families, the expectations of institutions, or the dignity of the person being carried.\n\nEternal Repos was created to change that. We believe the final journey should not feel like an arrangement made at the last moment. It should feel organised, peaceful, respectful, and worthy of the life being remembered.\n\nOur purpose is simple:\nTo bring dignity, care, and professionalism to every final journey.',
    cards: [
      {
        id: 'designed-for-peace',
        title: 'DESIGNED FOR PEACE',
        subtitle: 'Calm over noise and confusion',
        description: 'Grieving families need calm, not noise and confusion. The Eternal Repos vehicle is designed with acoustic insulation, warm lighting, controlled temperature, clean interiors, and thoughtful detailing to create a peaceful environment throughout the journey.',
        icon: 'VolumeX'
      },
      {
        id: 'designed-with-purpose',
        title: 'DESIGNED WITH PURPOSE',
        subtitle: 'Specifically for ceremonial use',
        description: 'Every part of the vehicle serves a clear purpose. From the panoramic glass and hydraulic platform to floral arrangements, climate control, and interior finishes, each element has been designed specifically for ceremonial use. Nothing feels temporary. Nothing feels improvised.',
        icon: 'Sparkles'
      },
      {
        id: 'built-for-trust',
        title: 'BUILT FOR TRUST',
        subtitle: 'Dependable operational standards',
        description: 'Institutions need more than a well-designed vehicle. They need reliability, hygiene, operational discipline, trained presentation, and consistent service standards. Eternal Repos is built to support hospitals, funeral service providers, municipal bodies, trusts, and community organisations with dependable ceremonial mobility.',
        icon: 'ShieldCheck'
      }
    ]
  },

  vehicle: {
    eyebrow: 'One Vehicle · One Standard · One Promise',
    heading: 'The Eternal Ceremonial Vehicle',
    subheading: 'One Vehicle. One Standard. One Promise.',
    leadParagraph: 'Eternal Repos does not offer multiple basic and premium variants. We have created one fully equipped ceremonial vehicle designed to deliver the same standard of dignity, comfort, and professionalism for every family.\n\nBuilt on the Force Urbania XL wide-body platform, the vehicle combines modern engineering with thoughtful ceremonial design.',
    chassis: 'Force Urbania XL Wide-Body Architecture',
    mainImage: vehicleDarkViewsImg,
    calmSpaceTitle: 'A Calm Space for the Final Journey',
    calmSpaceDescription: 'The vehicle has been designed to help families remain close to their loved one in a peaceful and respectful setting. Warm lighting, noise reduction, climate control, air purification, and carefully selected materials help create an atmosphere suitable for prayer, reflection, and remembrance.',
    thoughtfulTitle: 'Thoughtfully Designed for Ceremony',
    thoughtfulDescription: 'Every ceremony has its own traditions, emotions, and requirements. The vehicle supports these moments through panoramic side glass, a precision hydraulic bier platform, integrated floral mounting, external memorial displays, warm interior lighting, multi-zone climate management, high-quality sound support, and clean antimicrobial surfaces.\n\nThe result is a vehicle that is not only visually refined but also practical, reliable, and respectful.',
    downloadCta: 'Download Vehicle Specifications',
    features: [
      'Force Urbania XL wide-body platform',
      '360° panoramic ceremonial viewing',
      'Precision hydraulic bier platform',
      'Warm ambient lighting',
      'Acoustic noise reduction',
      'Multi-zone climate control',
      'Aromatic air purification',
      'Hospital-grade antimicrobial surfaces',
      'Integrated floral mounting system',
      'External LED memorial displays',
      'High-fidelity audio system',
      'Professional ceremonial presentation'
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
        title: '360° Panoramic Ceremonial Viewing Glass',
        category: 'exterior',
        description: 'Double-glazed UV-protected 360° panoramic side glass allowing respectful family visibility during ceremonial processions.',
        iconName: 'Eye',
        position: { x: 35, y: 38 }
      },
      {
        id: 'air',
        title: 'Aromatic Air Purification System',
        category: 'hygiene',
        description: 'Continuous HEPA air filtration blended with subtle natural floral essences to ensure a serene, clean atmosphere.',
        iconName: 'Wind',
        position: { x: 68, y: 30 }
      },
      {
        id: 'sound',
        title: 'High-Fidelity Audio System',
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
        title: 'External LED Memorial Displays',
        category: 'exterior',
        description: 'Weatherproof high-contrast LED screens customizable with the deceased person\'s name, family tribute, or institutional logo.',
        iconName: 'Tv',
        position: { x: 12, y: 48 }
      }
    ] as VehicleHotspot[]
  },

  trustBar: {
    eyebrow: 'Built for Organisations That Care About Every Family',
    heading: 'Partnerships Across Healthcare & Community',
    categories: [
      'Hospitals & Healthcare Institutions',
      'Funeral Management Companies',
      'Municipal Corporations',
      'Religious Trusts & NGOs'
    ]
  },

  forFamilies: {
    eyebrow: 'For Families',
    heading: 'A Peaceful and Respectful Final Journey',
    lead: 'No family should have to compromise on dignity while saying goodbye.',
    body: 'Eternal Repos provides a calm, clean, and thoughtfully designed environment for families to accompany their loved one during the final journey.\n\nIt is not about luxury for display. It is about comfort during grief. Order during uncertainty. And respect during one of life\'s most personal moments.\n\nBecause every life deserves to be remembered with dignity.'
  },

  operatingPrinciples: {
    eyebrow: 'The Eternal Standard',
    heading: 'More Than a Vehicle',
    subheading: 'A dignified final journey depends on more than design. It requires trained people, clear processes, punctuality, hygiene, reliability, and sensitivity. The Eternal Standard brings all these elements together.',
    principles: [
      {
        title: 'Respect',
        description: 'Every person and every family is treated with dignity.'
      },
      {
        title: 'Reliability',
        description: 'The service is delivered with discipline and clear coordination.'
      },
      {
        title: 'Presentation',
        description: 'The vehicle and team maintain professional standards at all times.'
      },
      {
        title: 'Sensitivity',
        description: 'Communication is calm, respectful, and appropriate to the situation.'
      },
      {
        title: 'Consistency',
        description: 'Every family receives the same standard of care.'
      }
    ]
  },

  partnershipSection: {
    eyebrow: 'Partnership Section',
    heading: 'Let Us Raise the Standard Together.',
    subheading: 'Eternal Repos is building partnerships with hospitals, funeral management companies, municipal organisations, NGOs, religious trusts, and institutions across Delhi NCR.',
    body: 'We are looking to work with organisations that share one belief:\nEvery final journey should be handled with dignity.\n\nWhether you want to improve the experience offered to families, upgrade your existing funeral mobility service, or explore an institutional partnership, our team would be pleased to speak with you.',
    primaryCta: 'Request a Partnership Discussion',
    secondaryCta: 'Schedule a Vehicle Demonstration'
  },

  aboutUsPage: {
    eyebrow: 'About Us',
    heading: 'Our Story',
    story: 'Eternal Repos was founded after recognising a clear gap in India\'s end-of-life care ecosystem. While hospitals, funeral professionals, and families make every effort to manage final rites respectfully, the transportation experience has often remained overlooked.\n\nMost available vehicles are adapted for the purpose rather than designed for it. Eternal Repos was created to address this gap.\n\nWe are developing a purpose-built ceremonial mobility solution that brings together thoughtful design, professional service standards, institutional reliability, and genuine sensitivity.\n\nOur aim is not simply to introduce a new vehicle. Our aim is to improve how the final journey is experienced in India.',
    visionHeading: 'Our Vision',
    vision: 'To establish a dignified and dependable standard for ceremonial mobility across India.',
    missionHeading: 'Our Mission',
    mission: 'To support families and institutions with purpose-built funeral mobility that is respectful, reliable, professionally managed, and designed around real human needs.',
    beliefHeading: 'Our Brand Belief',
    belief: 'Dignity should not be an upgrade. It should be the standard.'
  },

  insightsPage: {
    eyebrow: 'Eternal Insights',
    heading: 'Conversations That Matter',
    intro: 'The subject of death is often avoided, even though every family eventually has to face it. Through Eternal Insights, we aim to create more open and useful conversations around:',
    topics: [
      'Dignity in end-of-life care',
      'Funeral planning and preparedness',
      'Support for grieving families',
      'Institutional protocols and standards',
      'Funeral service quality and standards',
      'Religious and community practices',
      'The future of ceremonial mobility in India'
    ],
    closing: 'Our purpose is to help families and institutions make informed, respectful, and thoughtful decisions.'
  },

  pullQuotes: {
    eyebrow: 'Designed for Respect · Built for Remembrance',
    heading: 'Where trust meets tribute',
    quotes: [
      {
        id: 'hospitals',
        audience: 'FOR HOSPITALS',
        quote: '“Care Should Not End at the Hospital Door.”',
        sub: 'Extend your healthcare institution\'s compassionate continuum of care with a dignified, professionally managed departure experience.'
      },
      {
        id: 'funeral-mgmt',
        audience: 'FOR FUNERAL MANAGEMENT COMPANIES',
        quote: '“Upgrade the Experience You Deliver.”',
        sub: 'Enable your firm to offer a purpose-built ceremonial vehicle that reflects professionalism, care, and brand distinction.'
      },
      {
        id: 'families',
        audience: 'FOR FAMILIES',
        quote: '“Comfort during grief. Order during uncertainty. Respect during life\'s most personal moment.”',
        sub: 'A calm, clean, and thoughtsfully designed environment to accompany your loved one with dignity.'
      }
    ]
  },

  closingCta: {
    eyebrow: 'Partner With Eternal Repos',
    heading: 'Let Us Raise the Standard Together',
    subtext: 'Eternal Repos is building partnerships with hospitals, funeral management companies, municipal organisations, NGOs, religious trusts, and institutions across Delhi NCR.',
    primaryBtn: 'Request a Partnership Discussion',
    secondaryBtn: 'Schedule a Vehicle Demonstration'
  },

  services: [
    {
      id: 'ceremonial-mobility',
      title: 'Ceremonial Hearse Mobility',
      subtitle: 'Purpose-Built Departure Transport',
      description: 'Structured, dignified, and professionally managed ceremonial hearse mobility across Delhi NCR for families and institutional partners.',
      icon: 'Truck',
      features: [
        '360° panoramic ceremonial viewing',
        'Precision hydraulic bier platform',
        'Climate-controlled acoustic sanctuary',
        'Professional ceremonial presentation'
      ]
    },
    {
      id: 'hospital-coordination',
      title: 'Hospital Departure Coordination',
      subtitle: 'Seamless End-of-Life Care Continuum',
      description: 'Defined departure protocols and hygienic, compassionate transport coordination extending healthcare care beyond admission.',
      icon: 'Building2',
      features: [
        'Mortuary to vehicle transfer coordination',
        'Hospital-grade antimicrobial sanitization',
        'Punctual 24-hour response commitment',
        'Consistent operational support'
      ]
    },
    {
      id: 'funeral-partnerships',
      title: 'Funeral Management Partnerships',
      subtitle: 'Elevated Fleet & Service Offering',
      description: 'Enabling funeral service providers to strengthen their service offering through a purpose-built ceremonial vehicle.',
      icon: 'Handshake',
      features: [
        'Differentiated premium ceremonial fleet',
        'Improved family satisfaction & trust',
        'Stronger brand positioning',
        'Opportunity to serve institutional clients'
      ]
    },
    {
      id: 'institutional-mobility',
      title: 'Institutional Mobility Support',
      subtitle: 'Reliable Fleet Operational Discipline',
      description: 'Dependable ceremonial mobility services tailored for organisations, healthcare systems, and municipal bodies.',
      icon: 'ShieldCheck',
      features: [
        'Defined service & hygiene protocols',
        'Trained ceremonial presentation staff',
        'High reliability and punctuality',
        'Flexible institutional engagement models'
      ]
    },
    {
      id: 'community-support',
      title: 'Religious & Community Support',
      subtitle: 'Respecting Traditions & Rituals',
      description: 'Accommodating traditional practices, floral arrangements, prayers, and ceremonial requirements with sensitivity.',
      icon: 'HeartHandshake',
      features: [
        'Integrated floral mounting systems',
        'High-fidelity audio for prayers/chants',
        'Respectful ceremonial presentation',
        'Community trust and accessibility'
      ]
    },
    {
      id: 'municipal-partnerships',
      title: 'Municipal & Civic Partnerships',
      subtitle: 'Modern Funeral Mobility for Cities',
      description: 'Supporting municipal organisations in improving public funeral mobility standards with reliability and hygiene.',
      icon: 'Landmark',
      features: [
        'Efficient civic mobility standards',
        'Hygiene-focused vehicle operations',
        'Public trust & accessibility',
        'Wide-body Urbania XL platform reliability'
      ]
    }
  ] as ServiceItem[],

  institutions: {
    eyebrow: 'For Institutions',
    heading: 'Built for Organisations That Care About Every Family',
    subheading: 'Eternal Repos partners with organisations that understand that care should continue until the very end. Our ceremonial mobility solution supports hospitals, funeral service providers, municipal organisations, religious trusts, NGOs, and community institutions.',
    segments: [
      {
        id: 'hospitals',
        title: 'Hospitals and Healthcare Institutions',
        subtitle: 'Care Should Not End at the Hospital Door.',
        description: 'Hospitals support families through some of the most difficult moments of their lives. Eternal Repos helps healthcare institutions extend that care by providing a dignified and professionally managed departure experience.',
        benefits: [
          'A more respectful experience for families',
          'Reliable and professional presentation',
          'Hygiene-focused vehicle interiors',
          'Defined service protocols',
          'Consistent operational support',
          'Stronger continuity of care'
        ],
        ctaText: 'Hospital Partnership Inquiry'
      },
      {
        id: 'funeral-firms',
        title: 'Funeral Management Companies',
        subtitle: 'Upgrade the Experience You Deliver.',
        description: 'Families today expect funeral service providers to offer more organised, transparent, and dignified services. Eternal Repos enables funeral management companies to strengthen their service offering through a purpose-built ceremonial vehicle that reflects professionalism and care.',
        benefits: [
          'A differentiated premium service',
          'Improved family experience',
          'Stronger brand positioning',
          'Professional ceremonial presentation',
          'Reliable operational support',
          'Opportunity to serve institutional clients'
        ],
        ctaText: 'Fleet Upgrade Inquiry'
      },
      {
        id: 'municipalities',
        title: 'Municipal Bodies',
        subtitle: 'Modern Funeral Mobility for Modern Cities.',
        description: 'Public funeral services should be efficient, respectful, accessible, and professionally managed. Eternal Repos can support municipal organisations in improving funeral mobility standards while maintaining reliability, hygiene, and public trust.',
        benefits: [
          'Efficient civic mobility standards',
          'Public service dignity and accessibility',
          'Reliable wide-body vehicle operations',
          'Hygiene-focused vehicle operations'
        ],
        ctaText: 'Civic Partnership Inquiry'
      },
      {
        id: 'ngos',
        title: 'Religious Trusts and NGOs',
        subtitle: 'Respecting Traditions. Supporting Communities.',
        description: 'Religious and community organisations often support families during deeply emotional moments. Our vehicle is designed to accommodate traditional practices, floral arrangements, prayers, and ceremonial requirements while maintaining dignity and operational discipline.',
        benefits: [
          'Accommodates traditional practices & rituals',
          'Integrated floral mounting & sound support',
          'Dignified community departure service',
          'Dependable community partnership'
        ],
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
      caption: 'India\'s first purpose-built ceremonial hearse — ivory & maroon with panoramic glass and gold accents.'
    },
    {
      id: 'g2',
      title: 'Full Design Overview — All Angles',
      category: 'exterior',
      image: overviewSheetImg,
      caption: 'Complete vehicle design sheet — front, side, rear, 3/4 views and interior of the Eternal Repos ceremonial hearse.'
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
      id: 'dignity-in-the-final-journey',
      title: 'Dignity in the Final Journey: Why Every Life Deserves Respect',
      category: 'Industry Insights',
      date: 'July 25, 2026',
      readTime: '4 min read',
      excerpt: 'For years, funeral transportation in India depended on modified utility vehicles. Discover how purpose-built ceremonial mobility brings peace, order, and respect to families.',
      content: [
        'The transition from life is a moment deserving of profound respect. Yet for many years, families across Indian metropolitan cities faced cold, clinical, and poorly presented utility transport.',
        'Eternal Repos was created to address this gap. By designing a vehicle specifically built for ceremonial honor—complete with acoustic noise reduction, 360° panoramic glass, and climate control—we ensure that every final journey feels organized, peaceful, and respectful.',
        'Hospitals, funeral directors, and municipal bodies that adopt high standards of departure care report significantly higher trust and emotional gratitude from grieving families.'
      ],
      author: 'Eternal Repos Insights Team'
    },
    {
      id: 'institutional-end-of-life-protocols',
      title: 'Care Should Not End at the Hospital Door: Institutional End-of-Life Protocols',
      category: 'Healthcare & B2B',
      date: 'July 10, 2026',
      readTime: '5 min read',
      excerpt: 'How leading private healthcare institutions in Delhi NCR extend their continuum of care through dignified departure transport.',
      content: [
        'When a hospital provides compassionate medical care, that commitment should not end at the mortuary door.',
        'Institutional partners across Delhi NCR are realizing that the final impression left on a patient\'s family occurs during vehicle departure. Eternal Repos provides healthcare institutions with dedicated, hygienic, and dignified departure solutions that align with institutional excellence.'
      ],
      author: 'Institutional Partnerships Division'
    }
  ] as BlogArticle[]
};
