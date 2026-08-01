import React, { useState } from 'react';
import { Building, CheckCircle2, RotateCw, ArrowRight, ShieldCheck, HeartHandshake, Landmark } from 'lucide-react';
import { PartnerSegment } from '../data/eternalData';

interface InstitutionalFlipCardProps {
  segment: PartnerSegment;
  index: number;
  onOpenB2BModal: (title?: string) => void;
}

export const InstitutionalFlipCard: React.FC<InstitutionalFlipCardProps> = ({ segment, index, onOpenB2BModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = (id: string) => {
    switch (id) {
      case 'hospitals': return <Building className="w-6 h-6 text-gold-400" />;
      case 'funeral-firms': return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case 'municipalities': return <Landmark className="w-6 h-6 text-gold-400" />;
      case 'ngos': return <HeartHandshake className="w-6 h-6 text-gold-400" />;
      default: return <Building className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <div
      className="perspective-1000 w-full min-h-[380px] sm:min-h-[400px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FRONT SIDE — MINIMAL & ELEGANT                                   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-obsidian-800 via-obsidian-800 to-brown-900/40 border border-gold-500/25 p-8 flex flex-col justify-between shadow-2xl backface-hidden group-hover:border-gold-400/60 transition-all duration-300">
          
          <div className="space-y-6">
            {/* Top Row: Icon Container (No Numbers) */}
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-400 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-all duration-300 shadow-inner">
                {getIcon(segment.id)}
              </div>
              <span className="text-[10px] font-mono text-gold-400/60 uppercase tracking-widest border border-gold-500/20 px-2.5 py-1 rounded-full bg-obsidian-900/60">
                PARTNER SEGMENT
              </span>
            </div>

            {/* Title & Subtitle Structure */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-gold-200 transition-colors leading-snug">
                {segment.title}
              </h3>
              <p className="text-xs font-mono text-gold-400 font-medium leading-relaxed tracking-wide pt-1">
                "{segment.subtitle}"
              </p>
            </div>
          </div>

          {/* Bottom Row: Clean Explore Details Link */}
          <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-mono text-gold-400 font-bold group-hover:text-gold-300">
            <span className="uppercase tracking-wider">Explore Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* BACK SIDE — FULL DETAILS & ACTION                                 */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-brown-900 via-obsidian-900 to-obsidian-800 border border-gold-400 p-7 flex flex-col justify-between shadow-2xl backface-hidden rotate-y-180">
          
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-3">
              <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest font-bold">
                INSTITUTIONAL OVERVIEW
              </span>
              <span className="text-xs font-mono text-gold-300/80 font-bold">0{index + 1}</span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {segment.description}
            </p>

            {/* Key Benefits List */}
            {segment.benefits && segment.benefits.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-bold block mb-1">
                  Key Institutional Benefits:
                </span>
                <div className="grid grid-cols-1 gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                  {segment.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTA Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenB2BModal(segment.title);
            }}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:from-gold-300 hover:to-gold-500 transition-all gold-shimmer"
          >
            <span>{segment.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
