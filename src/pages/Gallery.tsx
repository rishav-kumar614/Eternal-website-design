import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { ETERNAL_DATA, GalleryItem } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';

interface GalleryProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'exterior', label: 'Exterior Sanctuary' },
    { id: 'interior', label: 'Bier Interior' },
    { id: 'tech', label: 'Tech & Air Hygiene' },
    { id: 'ceremonial', label: 'Floral & Procession' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? ETERNAL_DATA.gallery
    : ETERNAL_DATA.gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-36 pb-32 space-y-20 bg-obsidian-900 overflow-hidden">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-8 h-px bg-gold-400" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">Visual Showcase</span>
          <span className="w-8 h-px bg-gold-400" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-100">
          <TextReveal text="Designed with Purpose. Presented with Dignity." highlightWords={["Purpose", "Dignity"]} />
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
          <TextReveal mode="fade-up" text="Explore the Eternal Repos vehicle, ceremonial interiors, design details, and moments from our journey." />
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-900 shadow-gold-glow font-bold scale-105'
                : 'filter-tab-inactive'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <TiltCard key={item.id} className="rounded-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onSelectItem(item)}
                className="group relative rounded-2xl overflow-hidden border border-gold-500/20 bg-obsidian-800 cursor-pointer shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.id === 'g2' ? 'object-top' : ''} group-hover:scale-110 transition-transform duration-700 filter contrast-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-900/50 to-transparent opacity-90 transition-opacity" />
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-900/80 text-gold-300 border border-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md z-10">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="gallery-card-text absolute bottom-0 left-0 right-0 p-6 space-y-1 z-10">
                  <span className="text-[10px] font-mono uppercase text-gold-300 tracking-widest block font-bold">
                    {item.category.replace('_', ' ')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

    </div>
  );
};
