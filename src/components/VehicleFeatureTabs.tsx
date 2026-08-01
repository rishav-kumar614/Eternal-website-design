import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, Eye, Wind, Music } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

export const VehicleFeatureTabs: React.FC = () => {
  const allFeatures = ETERNAL_DATA.vehicle.features;

  const categories = [
    {
      id: 'platform',
      label: 'Platform & Tech',
      icon: <Shield className="w-3.5 h-3.5" />,
      items: allFeatures.slice(0, 4)
    },
    {
      id: 'sanctuary',
      label: 'Sanctuary & Comfort',
      icon: <Wind className="w-3.5 h-3.5" />,
      items: allFeatures.slice(4, 8)
    },
    {
      id: 'ceremonial',
      label: 'Ceremonial & Media',
      icon: <Music className="w-3.5 h-3.5" />,
      items: allFeatures.slice(8, 12)
    }
  ];

  const [activeTabId, setActiveTabId] = useState(categories[0].id);
  const activeCategory = categories.find(c => c.id === activeTabId) || categories[0];

  return (
    <div className="space-y-4 pt-2">
      {/* Category Pills Selector */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gold-500/15 pb-3">
        {categories.map((cat) => {
          const isActive = cat.id === activeTabId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTabId(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-gold-400/20 text-gold-300 border border-gold-400/50 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-obsidian-800 border border-transparent'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category 4-Feature Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
        >
          {activeCategory.items.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-obsidian-800/90 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 group shadow-sm"
            >
              <span className="w-4 h-4 rounded-full bg-gold-400/15 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-colors">
                <Check className="w-2.5 h-2.5 text-gold-400 group-hover:text-obsidian-950" />
              </span>
              <span className="text-xs text-slate-200 font-medium leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
