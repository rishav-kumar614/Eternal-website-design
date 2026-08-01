import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Shield, Heart } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const storyParagraphs = ETERNAL_DATA.aboutUsPage.story.split('\n\n').filter(Boolean);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-obsidian-800 via-obsidian-900 to-brown-950 border border-gold-500/30 space-y-8 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-obsidian-900/80 text-slate-400 hover:text-gold-300 border border-gold-500/20 hover:border-gold-400 transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 border-b border-gold-500/20 pb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-500/25 text-gold-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ETERNAL GENESIS STORY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
              {ETERNAL_DATA.aboutUsPage.heading}
            </h2>
          </div>

          {/* Story Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {storyParagraphs.map((para, idx) => (
              <p key={idx} className="border-l-2 border-gold-500/20 pl-4">
                {para}
              </p>
            ))}
          </div>

          {/* Brand Belief Callout */}
          <div className="p-6 rounded-2xl bg-brown-900/60 border border-gold-500/30 space-y-2">
            <span className="text-[10px] uppercase font-mono text-gold-400 font-bold tracking-widest block">
              OUR BRAND BELIEF
            </span>
            <p className="font-serif italic text-xl text-gold-200 leading-relaxed">
              "{ETERNAL_DATA.aboutUsPage.belief}"
            </p>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-gold-500/15 flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer"
            >
              Close Story
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
