import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, ShieldCheck, Landmark, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

import hospitalImg from '../assets/images/eternal_ceremonial_exterior_1.png';
import funeralImg from '../assets/images/eternal_hearse_exterior.png';
import municipalImg from '../assets/images/eternal_ceremonial_hearse_3.png';
import ngosImg from '../assets/images/eternal_floral_procession.png';

interface InstitutionalTabSwitcherProps {
  onOpenB2BModal: (title?: string) => void;
}

export const InstitutionalTabSwitcher: React.FC<InstitutionalTabSwitcherProps> = ({ onOpenB2BModal }) => {
  const segments = ETERNAL_DATA.institutions.segments;
  const [activeTabId, setActiveTabId] = useState<string>(segments[0].id);

  const activeSegment = segments.find(s => s.id === activeTabId) || segments[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'hospitals': return <Building className="w-5 h-5 text-gold-400" />;
      case 'funeral-firms': return <ShieldCheck className="w-5 h-5 text-gold-400" />;
      case 'municipalities': return <Landmark className="w-5 h-5 text-gold-400" />;
      case 'ngos': return <HeartHandshake className="w-5 h-5 text-gold-400" />;
      default: return <Building className="w-5 h-5 text-gold-400" />;
    }
  };

  const getSegmentImage = (id: string) => {
    switch (id) {
      case 'hospitals': return hospitalImg;
      case 'funeral-firms': return funeralImg;
      case 'municipalities': return municipalImg;
      case 'ngos': return ngosImg;
      default: return hospitalImg;
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Segmented Tab Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full bg-obsidian-800/80 border border-gold-500/20 backdrop-blur-md max-w-3xl mx-auto">
        {segments.map((seg) => {
          const isActive = seg.id === activeTabId;
          return (
            <button
              key={seg.id}
              onClick={() => setActiveTabId(seg.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold shadow-gold-glow scale-105'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-obsidian-700/60'
              }`}
            >
              <span>{getIcon(seg.id)}</span>
              <span>{seg.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Segment Visual Split Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSegment.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-obsidian-800/95 via-obsidian-800/90 to-brown-900/40 border border-gold-500/25 shadow-2xl backdrop-blur-xl group hover:border-gold-400/50 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Graphic */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-xl h-full min-h-[260px]">
              <img
                src={getSegmentImage(activeSegment.id)}
                alt={activeSegment.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-2.5 py-1 rounded-md border border-gold-500/20 uppercase tracking-widest">
                {activeSegment.subtitle}
              </span>
            </div>

            {/* Right Copy & Capabilities */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400">
                  {getIcon(activeSegment.id)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gold-400/80 uppercase tracking-widest font-bold block">
                    INSTITUTIONAL PARTNER
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
                    {activeSegment.title}
                  </h3>
                </div>
              </div>

              {/* Capabilities Bullet List */}
              {activeSegment.benefits && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {activeSegment.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-obsidian-900/60 border border-gold-500/15 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <div className="pt-3 border-t border-gold-500/15 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-slate-400">
                  Dedicated fleet & SLA support.
                </span>
                <button
                  onClick={() => onOpenB2BModal(activeSegment.title)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center gap-2 hover:from-gold-300 hover:to-gold-500 transition-all gold-shimmer"
                >
                  <span>Inquire Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
