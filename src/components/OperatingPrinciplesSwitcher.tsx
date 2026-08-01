import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

export const OperatingPrinciplesSwitcher: React.FC = () => {
  const principles = ETERNAL_DATA.operatingPrinciples.principles;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activePrinciple = principles[activeIndex] || principles[0];

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Shield className="w-4 h-4" />;
      case 1: return <Clock className="w-4 h-4" />;
      case 2: return <Eye className="w-4 h-4" />;
      case 3: return <Heart className="w-4 h-4" />;
      case 4: return <Award className="w-4 h-4" />;
      default: return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* LEFT COLUMN: Single Compact Container Box for all 5 Principles */}
      <div className="lg:col-span-4 flex flex-col justify-center">
        <div className="p-2 sm:p-3 rounded-3xl bg-obsidian-800/80 border border-gold-500/20 shadow-xl space-y-1.5 backdrop-blur-md">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400/70 font-bold px-3 py-1 block border-b border-gold-500/15 mb-1">
            Operating Standards
          </span>
          {principles.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl transition-all duration-300 text-left group ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold shadow-gold-glow scale-[1.02]'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-gold-400/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-obsidian-950' : 'text-gold-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-base font-bold">
                    {p.title}
                  </span>
                </div>

                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? 'bg-obsidian-950/20 text-obsidian-950' : 'text-slate-400 group-hover:text-gold-300'
                }`}>
                  {getIcon(idx)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Single Unified Showcase Card */}
      <div className="lg:col-span-8 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-800/95 via-obsidian-800/90 to-brown-900/40 border border-gold-500/25 shadow-2xl flex flex-col justify-between text-left backdrop-blur-xl relative overflow-hidden group hover:border-gold-400/50 transition-all"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-4">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-bold">
                  THE ETERNAL STANDARD · PRINCIPLE 0{activeIndex + 1}
                </span>
                <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-400">
                  {getIcon(activeIndex)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 pt-1">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                  {activePrinciple.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {activePrinciple.description}
                </p>
              </div>
            </div>

            {/* Bottom Commitment Tag */}
            <div className="pt-5 mt-6 border-t border-gold-500/15 flex items-center gap-2 text-xs font-mono text-gold-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Strict adherence guaranteed across all operations.</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
