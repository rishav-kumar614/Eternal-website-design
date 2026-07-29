import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Counter } from '../components/Counter';
import { VehicleInteractiveViewer } from '../components/VehicleInteractiveViewer';
import { Shield, Sparkles, VolumeX, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenB2BModal: (segment?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onOpenB2BModal, onOpenBrochureModal }) => {
  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1 · HERO SECTION — Template 3: Editorial Split Layout */}
      {/* ========================================================================= */}
      <section className="hero-section relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-obsidian-900">
        
        {/* Subtle ambient background glow (dark mode only) */}
        <div className="hero-ambient-glow absolute inset-0 pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* ─── LEFT: Content Column ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full hero-eyebrow-badge text-[11px] uppercase font-sans font-medium tracking-[0.15em]"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span>{ETERNAL_DATA.hero.eyebrow}</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] leading-[1.16]">
                <span className="text-slate-100 dark:text-slate-100 font-normal">
                  India's First{' '}
                </span>
                <span className="gold-gradient-text italic font-bold">
                  Ultra-Premium
                </span>
                <br />
                <span className="text-slate-200 dark:text-slate-200 font-semibold tracking-normal">
                  Luxury Funeral Mobility
                </span>
              </h1>

              {/* Sub-Tagline */}
              <p className="hero-subtagline text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 tracking-wide leading-relaxed font-light text-slate-300 dark:text-slate-300">
                "From Utility to Legacy. <span className="gold-gradient-text font-medium not-italic">From Transport to Tribute.</span>"
              </p>

              {/* Thin Gold Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-px w-24 mx-auto lg:mx-0 origin-left bg-gradient-to-r from-gold-400 to-gold-400/0"
              />

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                {/* Primary Gold CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActiveTab('vehicle');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-obsidian-900 font-bold text-sm tracking-wider uppercase shadow-gold-glow gold-shimmer flex items-center gap-3"
                >
                  <span className="relative z-10">{ETERNAL_DATA.hero.primaryCta}</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </motion.button>

                {/* Secondary Outlined CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenB2BModal('Institutional Partner')}
                  className="hero-secondary-btn px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase transition-all flex items-center gap-3 backdrop-blur-md"
                >
                  <Shield className="w-4 h-4" />
                  <span>{ETERNAL_DATA.hero.secondaryCta}</span>
                </motion.button>
              </div>

              {/* Trust Metrics */}
              <div className="pt-4 grid grid-cols-3 gap-6 text-center lg:text-left w-full mx-auto lg:mx-0 hero-trust-bar">
                <div>
                  <Counter to={360} suffix="°" className="hero-metric-value font-bold text-lg block" />
                  <span className="hero-metric-label text-[10px] uppercase tracking-wider font-mono">Glass Sanctuary</span>
                </div>
                <div>
                  <Counter to={24} suffix="hr" className="hero-metric-value font-bold text-lg block" />
                  <span className="hero-metric-label text-[10px] uppercase tracking-wider font-mono">Response SLA</span>
                </div>
                <div>
                  <Counter to={100} suffix="%" className="hero-metric-value font-bold text-lg block" />
                  <span className="hero-metric-label text-[10px] uppercase tracking-wider font-mono">Purpose Built</span>
                </div>
              </div>

            </motion.div>

            {/* ─── RIGHT: Interactive Vehicle Showcase Viewer ─── */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="w-full relative z-20"
            >
              <VehicleInteractiveViewer />
            </motion.div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2 · BRAND INTRODUCTION STRIP */}
      {/* ========================================================================= */}
      <section className="bg-brown-800 border-y border-gold-500/20 py-12 px-4 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-3 relative z-10"
        >
          <p className="font-serif italic text-2xl sm:text-3xl text-gold-100 leading-relaxed">
            {ETERNAL_DATA.brand.philosophy}
          </p>
          <div className="pt-2">
            <span className="inline-block px-4 py-1 rounded-full bg-gold-400/10 border border-gold-500/30 text-xs font-mono uppercase tracking-widest text-gold-400">
              The Eternal Promise
            </span>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3 · WHY ETERNAL SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 bg-obsidian-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
              {ETERNAL_DATA.whyEternal.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              {ETERNAL_DATA.whyEternal.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {ETERNAL_DATA.whyEternal.intro}
            </p>
          </motion.div>

          {/* 3 Key Differentiator Cards with 3D TiltCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ETERNAL_DATA.whyEternal.cards.map((card, idx) => {
              const renderIcon = () => {
                if (card.icon === 'VolumeX') return <VolumeX className="w-8 h-8 text-gold-400" />;
                if (card.icon === 'Sparkles') return <Sparkles className="w-8 h-8 text-gold-400" />;
                return <ShieldCheck className="w-8 h-8 text-gold-400" />;
              };

              return (
                <TiltCard key={card.id} className="rounded-2xl h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="group relative p-8 rounded-2xl bg-gradient-to-b from-obsidian-800 to-brown-900/40 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 shadow-xl hover:shadow-gold-glow h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-6 p-4 rounded-xl bg-gold-400/10 border border-gold-500/20 w-fit group-hover:scale-110 transition-transform">
                        {renderIcon()}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 tracking-wide">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                      <span>Azimuth Standard</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 · THE ETERNAL VEHICLE SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-brown-900/30 via-obsidian-900 to-obsidian-900 border-t border-gold-500/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src={ETERNAL_DATA.vehicle.mainImage}
                  alt="The Eternal Luxury Hearse"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-md">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400">CHASSIS FOUNDATION</span>
                  <h4 className="font-serif text-lg font-bold text-slate-100">{ETERNAL_DATA.vehicle.chassis}</h4>
                </div>
              </div>
            </motion.div>

            {/* Right Copy & Feature Highlights */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
                {ETERNAL_DATA.vehicle.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 leading-tight">
                {ETERNAL_DATA.vehicle.heading}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.vehicle.leadParagraph}
              </p>

              {/* 8 Feature List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ETERNAL_DATA.vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-gold-400 rotate-45 shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActiveTab('vehicle');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center gap-2 gold-shimmer"
                >
                  <span className="relative z-10">Explore Interactive Vehicle Sanctuary</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>

                <button
                  onClick={onOpenBrochureModal}
                  className="px-6 py-3 rounded-full bg-obsidian-800 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:border-gold-400 transition-colors"
                >
                  Download Vehicle Specs PDF
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5 · INSTITUTIONAL TRUST BAR */}
      {/* ========================================================================= */}
      <section className="bg-brown-800 py-12 px-4 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400">
            {ETERNAL_DATA.trustBar.eyebrow}
          </span>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            {ETERNAL_DATA.trustBar.heading}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-4">
            {ETERNAL_DATA.trustBar.categories.map((cat, index) => (
              <React.Fragment key={index}>
                <span className="font-serif text-lg font-semibold text-gold-200 tracking-wide">
                  {cat}
                </span>
                {index < ETERNAL_DATA.trustBar.categories.length - 1 && (
                  <span className="hidden sm:inline text-gold-500/40 text-xl font-light">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 · TESTIMONIAL / PULL-QUOTES */}
      {/* ========================================================================= */}
      <section className="py-24 bg-obsidian-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
              {ETERNAL_DATA.pullQuotes.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              {ETERNAL_DATA.pullQuotes.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ETERNAL_DATA.pullQuotes.quotes.map((q, idx) => (
              <TiltCard key={q.id} className="rounded-2xl h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="p-8 rounded-2xl bg-obsidian-800 border-t-2 border-gold-400 border-x border-b border-gold-500/20 space-y-4 flex flex-col justify-between shadow-xl h-full"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold block">
                      {q.audience}
                    </span>
                    <p className="font-serif italic text-xl text-slate-100 leading-relaxed">
                      {q.quote}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 pt-4 border-t border-gold-500/10">
                    {q.sub}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7 · CLOSING CALL-TO-ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-brown-900 via-obsidian-900 to-brown-900 border-t border-gold-500/30 text-center px-4 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400">
            {ETERNAL_DATA.closingCta.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            {ETERNAL_DATA.closingCta.heading}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {ETERNAL_DATA.closingCta.subtext}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenB2BModal('Institutional Partner')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer"
            >
              <span className="relative z-10">{ETERNAL_DATA.closingCta.primaryBtn}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenB2BModal('Vehicle Demonstration')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-obsidian-800 border border-gold-500/40 text-gold-200 font-semibold text-xs uppercase tracking-wider hover:border-gold-300 hover:bg-gold-500/10 transition-all"
            >
              {ETERNAL_DATA.closingCta.secondaryBtn}
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
