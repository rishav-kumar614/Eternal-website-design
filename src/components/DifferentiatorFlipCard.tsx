import React, { useState } from 'react';
import { VolumeX, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
export interface WhyEternalCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface DifferentiatorFlipCardProps {
  card: WhyEternalCard;
  index: number;
  onOpenStoryModal: () => void;
}

export const DifferentiatorFlipCard: React.FC<DifferentiatorFlipCardProps> = ({ card, onOpenStoryModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const renderIcon = (iconName: string) => {
    if (iconName === 'VolumeX') return <VolumeX className="w-6 h-6 text-gold-400" />;
    if (iconName === 'Sparkles') return <Sparkles className="w-6 h-6 text-gold-400" />;
    return <ShieldCheck className="w-6 h-6 text-gold-400" />;
  };

  return (
    <div
      className="perspective-1000 w-full min-h-[320px] cursor-pointer group"
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
            {/* Top Row: Icon Container */}
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-400 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-all duration-300 shadow-inner">
                {renderIcon(card.icon)}
              </div>
              <span className="text-[10px] font-mono text-gold-400/60 uppercase tracking-widest border border-gold-500/20 px-2.5 py-1 rounded-full bg-obsidian-900/60">
                ETERNAL PROMISE
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2 pt-1">
              <h3 className="font-serif text-2xl font-bold text-slate-100 group-hover:text-gold-200 transition-colors leading-snug">
                {card.title}
              </h3>
              <p className="text-xs font-mono text-gold-400 font-medium tracking-wide">
                "{card.subtitle}"
              </p>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-mono text-gold-400 font-bold group-hover:text-gold-300">
            <span className="uppercase tracking-wider">Explore Standard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* BACK SIDE — FULL DETAILS                                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-brown-900 via-obsidian-900 to-obsidian-800 border border-gold-400 p-8 flex flex-col justify-between shadow-2xl backface-hidden rotate-y-180">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-3">
              <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest font-bold">
                {card.title}
              </span>
              <span className="text-xs font-mono text-gold-300/80">ETERNAL SPEC</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {card.description}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenStoryModal();
            }}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:from-gold-300 hover:to-gold-500 transition-all gold-shimmer"
          >
            <span>Read Full Genesis Story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
