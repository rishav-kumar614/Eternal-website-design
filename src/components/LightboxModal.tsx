import React from 'react';
import { X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { GalleryItem } from '../data/eternalData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/95 backdrop-blur-xl animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-obsidian-800 border border-gold-500/30 text-slate-300 hover:text-white hover:border-gold-400 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Buttons */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-obsidian-800/80 border border-gold-500/30 text-slate-200 hover:text-gold-300 hover:scale-110 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-obsidian-800/80 border border-gold-500/30 text-slate-200 hover:text-gold-300 hover:scale-110 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Card */}
      <div className="max-w-4xl w-full bg-obsidian-800 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-900/80 border border-gold-500/30 text-[10px] font-mono uppercase tracking-widest text-gold-300">
            ETERNAL GALLERY SHOWCASE
          </div>
        </div>

        <div className="p-6 bg-obsidian-800 flex items-center justify-between gap-4 border-t border-gold-500/20">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
            <p className="text-xs text-slate-400">{item.caption}</p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-400/10 border border-gold-500/20 text-gold-300 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>Azimuth Quality Standard</span>
          </div>
        </div>
      </div>
    </div>
  );
};
