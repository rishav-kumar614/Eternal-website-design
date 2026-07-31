import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Shield, Sparkles, HeartHandshake } from 'lucide-react';

interface AboutProps {
  onOpenB2BModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenB2BModal }) => {
  return (
    <div className="pt-28 pb-20 space-y-20 bg-obsidian-900 overflow-hidden">
      
      {/* Title */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center space-y-4"
      >
        <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
          {ETERNAL_DATA.brand.location}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          <TextReveal text={`About ${ETERNAL_DATA.brand.name}`} highlightWords={["Eternal", "Repos"]} />
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          <TextReveal mode="fade-up" text={ETERNAL_DATA.aboutUsPage.vision} />
        </p>
      </motion.section>

      {/* Brand Genesis Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              <TextReveal text={ETERNAL_DATA.aboutUsPage.heading} highlightWords={["Story"]} />
            </h2>
            
            {ETERNAL_DATA.aboutUsPage.story.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}

            <div className="p-6 rounded-2xl bg-brown-800/80 border border-gold-500/30 space-y-2">
              <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">{ETERNAL_DATA.aboutUsPage.beliefHeading}</span>
              <p className="font-serif italic text-lg text-gold-100">
                "{ETERNAL_DATA.aboutUsPage.belief}"
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <TiltCard className="rounded-2xl">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <img
                  src={ETERNAL_DATA.hero.heroImage}
                  alt="Eternal Repos Ceremonial Vehicle"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <TiltCard className="rounded-2xl h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-obsidian-800 border border-gold-500/20 space-y-4 hover:border-gold-400/50 transition-colors h-full"
            >
              <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 w-fit">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">{ETERNAL_DATA.aboutUsPage.missionHeading}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.aboutUsPage.mission}
              </p>
            </motion.div>
          </TiltCard>

          <TiltCard className="rounded-2xl h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-obsidian-800 border border-gold-500/20 space-y-4 hover:border-gold-400/50 transition-colors h-full"
            >
              <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">{ETERNAL_DATA.aboutUsPage.visionHeading}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.aboutUsPage.vision}
              </p>
            </motion.div>
          </TiltCard>

        </div>
      </section>

      {/* Institutional Partnership Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-brown-900 via-obsidian-800 to-brown-900 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <span className="text-xs uppercase font-mono text-gold-400 tracking-widest">{ETERNAL_DATA.partnershipSection.eyebrow}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            <TextReveal text={ETERNAL_DATA.partnershipSection.heading} highlightWords={["Standard", "Together"]} />
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
            {ETERNAL_DATA.partnershipSection.body}
          </p>
          <button
            onClick={onOpenB2BModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer"
          >
            {ETERNAL_DATA.partnershipSection.primaryCta}
          </button>
        </div>
      </section>

    </div>
  );
};
