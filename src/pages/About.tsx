import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Shield, Sparkles, BookOpen, ArrowRight, HeartHandshake } from 'lucide-react';
import { StoryModal } from '../components/StoryModal';
import luxuryInteriorImg from '../assets/images/eternal_luxury_interior_1.png';
import bierSanctuaryImg from '../assets/images/eternal_bier_sanctuary.png';

interface AboutProps {
  onOpenB2BModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenB2BModal }) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  return (
    <div className="pt-36 pb-32 space-y-28 sm:space-y-36 bg-obsidian-900 overflow-hidden">
      
      {/* Title */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center space-y-4"
      >
        <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
          {ETERNAL_DATA.brand.location}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          <TextReveal text={`About ${ETERNAL_DATA.brand.name}`} highlightWords={["Eternal", "Repos"]} />
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          <TextReveal mode="fade-up" text={ETERNAL_DATA.aboutUsPage.vision} />
        </p>
      </motion.section>

      {/* Brand Genesis Story — Visual Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Story Teaser */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
                BRAND GENESIS & PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
              {ETERNAL_DATA.aboutUsPage.heading}
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {ETERNAL_DATA.aboutUsPage.story.split('\n\n')[0]}
            </p>

            <div className="pt-1">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:from-gold-300 hover:to-gold-500 transition-all gold-shimmer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Genesis Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-brown-900/60 to-obsidian-800 border border-gold-500/25 space-y-2">
              <span className="text-[10px] uppercase font-mono text-gold-400 font-bold block">{ETERNAL_DATA.aboutUsPage.beliefHeading}</span>
              <p className="font-serif italic text-lg text-gold-100">
                "{ETERNAL_DATA.aboutUsPage.belief}"
              </p>
            </div>
          </motion.div>

          {/* Right Luxury Interior Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <TiltCard className="rounded-3xl">
              <div className="rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl relative group">
                <img
                  src={luxuryInteriorImg}
                  alt="Eternal Luxury Sanctuary Interior"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-3.5 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                  ARCHITECTURAL SANCTUARY INTERIOR
                </span>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <TiltCard className="rounded-3xl h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-800/90 via-obsidian-800/80 to-brown-900/30 border border-gold-500/25 space-y-4 hover:border-gold-400/50 transition-colors h-full text-left"
            >
              <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-400 w-fit">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">{ETERNAL_DATA.aboutUsPage.missionHeading}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.aboutUsPage.mission}
              </p>
            </motion.div>
          </TiltCard>

          <TiltCard className="rounded-3xl h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-800/90 via-obsidian-800/80 to-brown-900/30 border border-gold-500/25 space-y-4 hover:border-gold-400/50 transition-colors h-full text-left"
            >
              <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">{ETERNAL_DATA.aboutUsPage.visionHeading}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.aboutUsPage.vision}
              </p>
            </motion.div>
          </TiltCard>

        </div>
      </section>

      {/* Institutional Partnership Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-brown-900/80 via-obsidian-800 to-brown-900/80 border border-gold-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img src={bierSanctuaryImg} alt="Sanctuary Ambience" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 w-12 h-12 rounded-full bg-gold-400/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mx-auto">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <span className="relative z-10 text-xs uppercase font-mono text-gold-400 tracking-widest block">{ETERNAL_DATA.partnershipSection.eyebrow}</span>
          
          <h2 className="relative z-10 font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            <TextReveal text={ETERNAL_DATA.partnershipSection.heading} highlightWords={["Standard", "Together"]} />
          </h2>

          <p className="relative z-10 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Partnering with hospitals, funeral firms, municipal bodies, and community organisations to establish dignified ceremonial mobility across India.
          </p>

          <div className="relative z-10 pt-2">
            <button
              onClick={onOpenB2BModal}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all inline-flex items-center gap-2.5 gold-shimmer"
            >
              <span>{ETERNAL_DATA.partnershipSection.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

    </div>
  );
};
