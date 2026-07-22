import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ETERNAL_DATA, VehicleHotspot } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { Sliders, Eye, Wind, Music, Shield, Tv, Sparkles, Check, ChevronRight, FileText } from 'lucide-react';

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
    <div className="pt-28 pb-20 space-y-20 bg-obsidian-900 overflow-hidden">
      
      {/* Page Title */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center space-y-4"
      >
        <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
          {ETERNAL_DATA.vehicle.eyebrow}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          The Silent Journey, <br />
          <span className="gold-gradient-text">the Glass Sanctuary</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          {ETERNAL_DATA.vehicle.leadParagraph}
        </p>
      </motion.section>

      {/* Interactive 360 / Hotspot Vehicle Inspector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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

      {/* Specifications Breakdown Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-gold-400 tracking-widest">
            TECHNICAL ENGINEERING MATRIX
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-100">
            Purpose-Built Ceremonial Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ETERNAL_DATA.vehicle.features.map((feature, idx) => (
            <TiltCard key={idx} className="rounded-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-obsidian-800 border border-gold-500/20 flex items-start gap-3 hover:border-gold-400/40 transition-colors h-full"
              >
                <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200 mb-1">Standard Equipment</h4>
                  <p className="text-xs text-slate-400">{feature}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
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
