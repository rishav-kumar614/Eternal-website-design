import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Counter } from '../components/Counter';
import heroTruckImg from '../assets/images/ChatGPT Image Jul 30, 2026, 04_57_42 PM.png';
import { Shield, Sparkles, VolumeX, ShieldCheck, ChevronRight, ArrowRight, Check, Building2, HeartHandshake, Landmark, Users } from 'lucide-react';

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

            {/* ─── RIGHT: Hero Truck Image with Premium Effects ─── */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="w-full relative z-20 flex items-end justify-center"
            >
              {/* ── Outer deep gold radial glow ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 45%, transparent 75%)', filter: 'blur(40px)' }}
              />

              {/* ── Inner bright highlight ring ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,220,100,0.12) 0%, transparent 70%)', filter: 'blur(20px)' }}
              />

              {/* ── Floating animated truck image ── */}
              <div
                className="relative z-10 w-full max-w-2xl"
                style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.55)) drop-shadow(0 0 50px rgba(212,175,55,0.12))' }}
              >
                {/* Shimmer sweep overlay */}
                <div className="absolute inset-0 z-20 overflow-hidden rounded-xl pointer-events-none">
                  <div
                    className="absolute top-0 -left-full h-full w-1/3 opacity-30"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,220,100,0.6) 50%, transparent 60%)',
                      animation: 'shimmerSweep 5s ease-in-out infinite',
                    }}
                  />
                </div>

                <img
                  src={heroTruckImg}
                  alt="Eternal Luxury Hearse — India's First Ultra-Premium Funeral Vehicle"
                  className="w-full"
                />
              </div>

              {/* ── Ground reflection strip ── */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.25) 0%, transparent 75%)', filter: 'blur(8px)' }}
              />

              {/* ── Decorative gold particle dots ── */}
              {[
                { top: '15%', left: '8%', size: 3, delay: '0s' },
                { top: '25%', right: '6%', size: 2, delay: '0.8s' },
                { top: '60%', left: '4%', size: 2, delay: '1.6s' },
                { top: '75%', right: '10%', size: 3, delay: '0.4s' },
                { top: '40%', right: '2%', size: 1.5, delay: '2s' },
                { top: '10%', right: '18%', size: 1.5, delay: '1.2s' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gold-400 pointer-events-none"
                  style={{
                    top: p.top,
                    left: (p as any).left,
                    right: (p as any).right,
                    width: p.size,
                    height: p.size,
                    opacity: 0.6,
                    animation: `particlePulse 3s ease-in-out ${p.delay} infinite`,
                  }}
                />
              ))}

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
      {/* 3 · WHY ETERNAL SECTION — Ultra-Luxury Redesign */}
      {/* ========================================================================= */}
      <section className="why-eternal-section py-24 bg-gradient-to-b from-obsidian-900 via-brown-900/40 to-obsidian-900 relative overflow-hidden">
        {/* Subtle Ambient Radial Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="why-eternal-eyebrow text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
                {ETERNAL_DATA.whyEternal.eyebrow}
              </span>
            </div>

            <h2 className="why-eternal-heading font-serif text-3xl sm:text-5xl font-bold text-slate-100 leading-tight">
              {ETERNAL_DATA.whyEternal.heading}
            </h2>

            {/* Gold Divider Line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />

            <p className="why-eternal-intro text-sm sm:text-base text-slate-300 leading-relaxed font-light pt-1">
              {ETERNAL_DATA.whyEternal.intro}
            </p>
          </motion.div>

          {/* 3 Key Differentiator Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ETERNAL_DATA.whyEternal.cards.map((card, idx) => {
              const renderIcon = () => {
                if (card.icon === 'VolumeX') return <VolumeX className="w-7 h-7 text-gold-400 group-hover:text-obsidian-950 transition-colors" />;
                if (card.icon === 'Sparkles') return <Sparkles className="w-7 h-7 text-gold-400 group-hover:text-obsidian-950 transition-colors" />;
                return <ShieldCheck className="w-7 h-7 text-gold-400 group-hover:text-obsidian-950 transition-colors" />;
              };

              return (
                <TiltCard key={card.id} className="rounded-2xl h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="why-eternal-card group relative p-8 rounded-2xl bg-obsidian-800/80 border border-gold-500/20 hover:border-gold-400/60 transition-all duration-500 shadow-xl hover:shadow-gold-glow h-full flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Gold Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      {/* Card Header: Icon + Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="why-eternal-icon-box p-3.5 rounded-xl bg-gold-400/10 border border-gold-500/25 group-hover:bg-gold-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
                          {renderIcon()}
                        </div>
                        <span className="why-eternal-num font-mono text-2xl font-bold text-gold-400/25 group-hover:text-gold-400/50 transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="why-eternal-card-title font-serif text-xl font-bold text-slate-100 mb-3 tracking-wider group-hover:text-gold-200 transition-colors">
                        {card.title}
                      </h3>

                      <p className="why-eternal-card-desc text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="why-eternal-card-footer mt-8 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                      <span className="font-mono text-[11px] uppercase tracking-wider">Azimuth Standard</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[11px] uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
                  {ETERNAL_DATA.vehicle.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-100 leading-tight">
                The Silent Journey, <br />
                <span className="gold-gradient-text">the Glass Sanctuary</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {ETERNAL_DATA.vehicle.leadParagraph}
              </p>

              {/* 10 Feature List Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {ETERNAL_DATA.vehicle.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-obsidian-800/80 border border-gold-500/15 hover:border-gold-400/40 hover:bg-obsidian-700/80 transition-all duration-300 group"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-gold-400/15 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-colors">
                      <Check className="w-2.5 h-2.5 text-gold-400 group-hover:text-obsidian-950" />
                    </span>
                    <span className="text-xs text-slate-300 group-hover:text-slate-100 leading-snug font-medium transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setActiveTab('vehicle');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center gap-2 gold-shimmer"
                >
                  <span className="relative z-10">Explore Interactive Vehicle Sanctuary</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>

                <button
                  onClick={onOpenBrochureModal}
                  className="px-6 py-3 rounded-full bg-obsidian-900 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:border-gold-400 hover:bg-obsidian-800 transition-all"
                >
                  Download Vehicle Specs PDF
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5 · INSTITUTIONAL TRUST BAR — Redesigned Luxury Showcase */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian-900 via-brown-900/60 to-obsidian-900 border-y border-gold-500/25 overflow-hidden">
        {/* Subtle Ambient Gold Glow in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Section Header & Eyebrow */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[11px] uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
                {ETERNAL_DATA.trustBar.eyebrow}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              {ETERNAL_DATA.trustBar.heading}
            </h3>
          </div>

          {/* Institutional Partner Categories Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto pt-2">
            {[
              { label: 'Premium Hospitals', icon: Building2, desc: 'NABH & JCI Accredited Medical Centers' },
              { label: 'Funeral Management', icon: HeartHandshake, desc: 'Turnkey Protocol Operators & Providers' },
              { label: 'Municipal Corporations', icon: Landmark, desc: 'Civic Mobility & Urban Health Bodies' },
              { label: 'Religious Trusts & NGOs', icon: Users, desc: 'Faith Foundations & Community Alliances' },
            ].map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-obsidian-800/70 border border-gold-500/20 hover:border-gold-400/50 hover:bg-obsidian-800/90 transition-all duration-300 shadow-xl text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-slate-100 group-hover:text-gold-200 transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gold-500/10 flex items-center justify-between text-[10px] font-mono text-gold-400">
                    <span>STANDARD COMPLIANCE</span>
                    <span className="group-hover:translate-x-1 transition-transform">➔</span>
                  </div>
                </div>
              );
            })}
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
