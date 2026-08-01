import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { Truck, Building2, Handshake, ShieldCheck, HeartHandshake, Landmark, ArrowRight } from 'lucide-react';
import ceremonialExteriorImg from '../assets/images/eternal_ceremonial_exterior_1.png';
import hearseExteriorImg from '../assets/images/eternal_hearse_exterior.png';
import floralProcessionImg from '../assets/images/eternal_floral_procession.png';
import luxuryInteriorImg from '../assets/images/eternal_luxury_interior_1.png';
import glassSanctuaryImg from '../assets/images/eternal_glass_sanctuary.png';
import bierSanctuaryImg from '../assets/images/eternal_bier_sanctuary.png';

interface ServicesProps {
  onOpenB2BModal: (serviceName?: string) => void;
}

// Map each service to a contextual image
const SERVICE_IMAGES: Record<string, string> = {
  'ceremonial-hearse': ceremonialExteriorImg,
  'hospital-departure': hearseExteriorImg,
  'funeral-management': luxuryInteriorImg,
  'institutional-mobility': glassSanctuaryImg,
  'religious-community': floralProcessionImg,
  'municipal-civic': bierSanctuaryImg,
};

export const Services: React.FC<ServicesProps> = ({ onOpenB2BModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-5 h-5 text-gold-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-gold-400" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-gold-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gold-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-gold-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-gold-400" />;
      default: return <Truck className="w-5 h-5 text-gold-400" />;
    }
  };

  const serviceImages = [
    ceremonialExteriorImg,
    hearseExteriorImg,
    luxuryInteriorImg,
    glassSanctuaryImg,
    floralProcessionImg,
    bierSanctuaryImg,
  ];

  return (
    <div className="pt-36 pb-32 space-y-28 sm:space-y-36 bg-obsidian-900 overflow-hidden">
      
      {/* ── Hero Visual Split Header ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Title */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">Ceremonial Services</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold text-slate-100 leading-[1.1]">
              Ceremonial Mobility <br />
              <span className="gold-gradient-text italic">Services Across Delhi NCR</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light leading-relaxed">
              Structured, professionally managed funeral mobility for families and institutions across Delhi NCR.
            </p>
            <button
              onClick={() => onOpenB2BModal()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer hover:from-gold-300 hover:to-gold-500 transition-all"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: High-res vehicle image */}
          <div className="lg:col-span-6">
            <TiltCard className="rounded-3xl">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src={ceremonialExteriorImg}
                  alt="Eternal Ceremonial Service Vehicle"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-3.5 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                  ETERNAL REPOS CEREMONIAL FLEET
                </span>
              </div>
            </TiltCard>
          </div>

        </div>
      </motion.section>

      {/* ── Services Grid — Minimal Image Cards ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ETERNAL_DATA.services.map((service, idx) => (
            <TiltCard key={service.id} className="rounded-3xl h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-obsidian-800/90 via-obsidian-800/80 to-brown-900/30 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl group h-full"
              >
                {/* Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={serviceImages[idx] ?? ceremonialExteriorImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-obsidian-950/20 to-transparent" />
                  {/* Icon badge over image */}
                  <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-obsidian-950/80 border border-gold-500/30 backdrop-blur-sm">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-serif text-xl font-bold text-slate-100 leading-snug">{service.title}</h3>
                    <span className="text-[11px] text-gold-300/80 font-mono tracking-wider block">{service.subtitle}</span>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => onOpenB2BModal(service.title)}
                    className="w-full py-3 rounded-full bg-obsidian-900/80 hover:bg-gold-500 hover:text-obsidian-950 border border-gold-500/25 hover:border-gold-400 text-gold-300 text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

    </div>
  );
};

