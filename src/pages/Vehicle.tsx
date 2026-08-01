import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ETERNAL_DATA, VehicleHotspot } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { VehicleInteractiveViewer } from '../components/VehicleInteractiveViewer';
import { VehicleFeatureTabs } from '../components/VehicleFeatureTabs';
import { Sliders, Eye, Wind, Music, Shield, Tv, Sparkles, ChevronRight, FileText, Check } from 'lucide-react';
import ceremonialExteriorImg from '../assets/images/eternal_ceremonial_exterior_1.png';

interface VehicleProps {
  onOpenBrochureModal: () => void;
  onOpenB2BModal: () => void;
}

export const Vehicle: React.FC<VehicleProps> = ({ onOpenBrochureModal, onOpenB2BModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<VehicleHotspot>(ETERNAL_DATA.vehicle.hotspots[0]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sliders': return <Sliders className="w-5 h-5 text-gold-300" />;
      case 'Eye': return <Eye className="w-5 h-5 text-gold-300" />;
      case 'Wind': return <Wind className="w-5 h-5 text-gold-300" />;
      case 'Music': return <Music className="w-5 h-5 text-gold-300" />;
      case 'Shield': return <Shield className="w-5 h-5 text-gold-300" />;
      case 'Tv': return <Tv className="w-5 h-5 text-gold-300" />;
      default: return <Sparkles className="w-5 h-5 text-gold-300" />;
    }
  };

  return (
    <div className="pt-36 pb-32 space-y-28 sm:space-y-36 bg-obsidian-900 overflow-hidden">
      
      {/* ═══ PREMIUM HERO HEADER SECTION ═══ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Headline + Description + CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
                {ETERNAL_DATA.vehicle.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-[3.25rem] font-bold text-slate-100 leading-[1.1]">
                The Silent Journey,{' '}
                <br />
                <span className="gold-gradient-text italic">the Glass Sanctuary</span>
              </h1>
            </div>

            {/* Lead Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
              {ETERNAL_DATA.vehicle.leadParagraph}
            </p>

            {/* Chassis Badge */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-gold-300 bg-obsidian-800/80 border border-gold-500/20 rounded-full px-4 py-2 w-fit">
              <span className="text-gold-400">◈</span>
              <span>CHASSIS:</span>
              <span className="text-slate-100 font-semibold">{ETERNAL_DATA.vehicle.chassis}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <button
                onClick={onOpenBrochureModal}
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer hover:from-gold-300 hover:to-gold-500 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Vehicle Specs (PDF)</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenB2BModal}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-obsidian-800/90 border border-gold-500/30 text-gold-200 text-xs font-semibold hover:border-gold-400 hover:bg-obsidian-800 transition-all"
              >
                Schedule Live Demonstration
              </button>
            </div>
          </div>

          {/* RIGHT: High-Res Studio Exterior Photo Card */}
          <div className="lg:col-span-6 relative">
            <TiltCard className="rounded-3xl">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src={ceremonialExteriorImg}
                  alt="The Eternal Ceremonial Vehicle"
                  className="w-full h-[400px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-3.5 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                  FORCE URBANIA XL CEREMONIAL SPEC
                </span>
              </div>
            </TiltCard>
          </div>

        </div>
      </motion.section>

      {/* 360-Degree Interactive Vehicle Showcase Viewer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-gold-400 tracking-widest bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
            360° INTERACTIVE VEHICLE SHOWCASE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Explore Every Angle, Interior & Feature
          </h2>
        </div>

        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-gold-400 tracking-widest">
            INTERACTIVE FEATURE SHOWCASE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            Click Hotspots Below to Inspect Sanctuary Innovations
          </h2>
        </div>

        {/* Vehicle Graphic & Hotspots Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas with Interactive Radar Pins */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-gold-500/30 bg-obsidian-800 shadow-2xl">
            
            <div className="relative aspect-video">
              <img
                src={ETERNAL_DATA.vehicle.mainImage}
                alt="Force Urbania XL Hearse Exterior"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 via-transparent to-obsidian-900/30" />

              {/* Hotspot Pins Overlay with Radar Ring Animation */}
              {ETERNAL_DATA.vehicle.hotspots.map((spot) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.position.x}%`, top: `${spot.position.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group p-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gold-400 text-obsidian-900 ring-4 ring-gold-400/40 scale-125 z-20 shadow-gold-glow radar-ring'
                        : 'bg-obsidian-900/90 text-gold-300 border border-gold-500/40 hover:scale-110 z-10'
                    }`}
                    title={spot.title}
                  >
                    <span className="relative flex items-center justify-center">
                      {renderIcon(spot.iconName)}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-200 animate-ping" />
                      )}
                    </span>
                  </button>
                );
              })}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-gold-300 bg-obsidian-900/80 p-2.5 rounded-xl border border-gold-500/20 backdrop-blur-md">
                <span>MODEL: FORCE URBANIA XL ETERNAL SPEC</span>
                <span>AZIMUTH ENGINEERING</span>
              </div>
            </div>

          </div>

          {/* Right Selected Hotspot Card with 3D TiltCard */}
          <div className="lg:col-span-4">
            <TiltCard className="rounded-3xl">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-obsidian-800 to-brown-900/40 border border-gold-500/30 space-y-6 shadow-2xl">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4">
                      <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30">
                        {renderIcon(activeHotspot.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-gold-400">SELECTED INNOVATION</span>
                        <h3 className="font-serif text-xl font-bold text-slate-100">{activeHotspot.title}</h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeHotspot.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Quick List of Hotspots to Select */}
                <div className="space-y-2 pt-2 border-t border-gold-500/15">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Select Feature:</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {ETERNAL_DATA.vehicle.hotspots.map((spot) => (
                      <button
                        key={spot.id}
                        onClick={() => setActiveHotspot(spot)}
                        className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                          activeHotspot.id === spot.id
                            ? 'bg-gold-500/20 text-gold-300 border border-gold-400/40 font-semibold'
                            : 'text-slate-400 hover:bg-obsidian-700 hover:text-slate-200'
                        }`}
                      >
                        <span>{spot.title}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </section>

      {/* Colour Options — Brand Palette */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl border border-gold-500/20 bg-obsidian-800/60 backdrop-blur-sm space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">COLOUR</span>
            <span className="text-[10px] font-mono text-slate-500">EXTERIOR OPTIONS</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Deep Ivory', hex: '#FDF8F0', label: 'Cream' },
              { name: 'Champagne Gold', hex: '#8B6914', label: 'Gold' },
              { name: 'Rich Dark Brown', hex: '#2C1810', label: 'Brown' },
              { name: 'Charcoal Dark', hex: '#1A1A1A', label: 'Charcoal' },
              { name: 'Warm White', hex: '#FFFFFF', label: 'White' },
            ].map((colour) => (
              <div key={colour.hex} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-xl border border-gold-500/30 shadow-md"
                  style={{ backgroundColor: colour.hex }}
                />
                <span className="text-[10px] font-mono text-slate-400 text-center leading-tight">{colour.label}</span>
                <span className="text-[9px] font-mono text-slate-600">{colour.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Breakdown Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-gold-400 tracking-widest bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
            TECHNICAL ENGINEERING MATRIX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Purpose-Built Ceremonial Specifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Every Eternal Repos ceremonial vehicle is equipped to the exact same uncompromising standard.
          </p>
        </div>

        {/* 12 Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ETERNAL_DATA.vehicle.features.map((feature, idx) => {
            // Determine category badge for visual hierarchy
            let category = "CHASSIS & TECH";
            if (idx === 1 || idx === 3 || idx === 4 || idx === 5) category = "SANCTUARY & AMBIENCE";
            else if (idx === 6 || idx === 7) category = "HYGIENE & HEALTH";
            else if (idx >= 8) category = "CEREMONIAL & MEDIA";

            return (
              <TiltCard key={idx} className="rounded-2xl h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-obsidian-800/90 border border-gold-500/20 flex flex-col justify-between hover:border-gold-400/50 hover:bg-obsidian-800 transition-all duration-300 h-full shadow-lg group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-colors">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase text-gold-400/80 tracking-widest font-semibold block">
                        {category}
                      </span>
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-gold-200 transition-colors leading-snug">
                        {feature}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBrochureModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center gap-2 gold-shimmer"
          >
            <FileText className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Download Detailed Specification Sheet (PDF)</span>
          </button>

          <button
            onClick={onOpenB2BModal}
            className="px-8 py-3.5 rounded-full bg-obsidian-800 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:border-gold-400"
          >
            Schedule Live Vehicle Demonstration
          </button>
        </div>

      </section>

    </div>
  );
};
