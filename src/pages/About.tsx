import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Shield, Sparkles, Award, MapPin, CheckCircle } from 'lucide-react';

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
          Established in Dignity · Delhi NCR
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          <TextReveal text="About Eternal by Azimuth" highlightWords={["Eternal", "Azimuth"]} />
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          <TextReveal mode="fade-up" text="Pioneering India's first ultra-premium luxury funeral mobility standard with purpose-built engineering and compassionate design." />
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
              <TextReveal text="The Origin of Eternal" highlightWords={["Origin"]} />
            </h2>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              <TextReveal mode="fade-up" text="For decades, ceremonial funeral mobility across Indian metropolitan cities remained an overlooked utility. Modified commercial vans—cold, unbranded, and purely functional—were standard." />
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              <strong>Azimuth Business on Wheels</strong>, a premier vehicular design and customization unit, recognized the urgent need for change. We established <strong>Eternal</strong> with a singular mission: to design and engineer a purpose-built ceremonial hearse that elevates every farewell into a peaceful, honored tribute.
            </p>

            <div className="p-6 rounded-2xl bg-brown-800/80 border border-gold-500/30 space-y-2">
              <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">The Core Philosophy</span>
              <p className="font-serif italic text-lg text-gold-100">
                <TextReveal mode="fade-up" text={ETERNAL_DATA.brand.philosophy} />
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
                  alt="Azimuth Engineering Unit - The Eternal Hearse"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
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
              <h3 className="font-serif text-2xl font-bold text-slate-100">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <TextReveal mode="fade-up" text="To redefine funeral mobility standards across India by crafting purpose-built luxury hearse sanctuaries that prioritize silent luxury, acoustic peace, and hospital-grade hygiene for families and healthcare institutions." />
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
              <h3 className="font-serif text-2xl font-bold text-slate-100">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <TextReveal mode="fade-up" text="To make dignified ceremonial departure mobility an accessible and non-negotiable benchmark across hospitals, municipal systems, and funeral providers nationwide." />
              </p>
            </motion.div>
          </TiltCard>

        </div>
      </section>

      {/* Institutional Partnership Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-brown-900 via-obsidian-800 to-brown-900 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <span className="text-xs uppercase font-mono text-gold-400 tracking-widest">AZIMUTH BUSINESS ON WHEELS</span>
          <h2 className="font-serif text-3xl font-bold text-slate-100">
            <TextReveal text="Ready to Elevate Your Institution's Fleet?" highlightWords={["Elevate", "Institution"]} />
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Partner with Delhi NCR's premier vehicle customization unit for bespoke fabrication, long-term leasing, and fleet maintenance contracts.
          </p>
          <button
            onClick={onOpenB2BModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer"
          >
            Inquire for Institutional Partnership
          </button>
        </div>
      </section>

    </div>
  );
};
