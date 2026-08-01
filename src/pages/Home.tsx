import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Counter } from '../components/Counter';
import { GoldParticles } from '../components/GoldParticles';
import { DifferentiatorFlipCard } from '../components/DifferentiatorFlipCard';
import { InstitutionalFlipCard } from '../components/InstitutionalFlipCard';
import { InstitutionalTabSwitcher } from '../components/InstitutionalTabSwitcher';
import { OperatingPrinciplesSwitcher } from '../components/OperatingPrinciplesSwitcher';
import { ReadMoreText } from '../components/ReadMoreText';
import { StoryModal } from '../components/StoryModal';
import { VehicleFeatureTabs } from '../components/VehicleFeatureTabs';
import luxuryInteriorImg from '../assets/images/eternal_luxury_interior_1.png';
import luxuryInterior2Img from '../assets/images/eternal_luxury_interior_2.png';
import ceremonialExterior2Img from '../assets/images/eternal_ceremonial_exterior_2.png';
import glassSanctuaryImg from '../assets/images/eternal_glass_sanctuary.png';
import bierSanctuaryImg from '../assets/images/eternal_bier_sanctuary.png';
import ceremonialExteriorImg from '../assets/images/eternal_ceremonial_exterior_1.png';
import { Shield, ShieldCheck, ChevronRight, ArrowRight, Check, Building2, HeartHandshake, Landmark, Users, Heart, Award, Eye, Clock, BookOpen, ChevronLeft } from 'lucide-react';

// ── Hero Carousel — 1 Steering Wheel, 1 Tyre, 1 Internal Sanctuary ──
const HERO_SLIDES = [
  { img: luxuryInterior2Img,     label: 'Steering Wheel & Cockpit Sanctuary' },
  { img: ceremonialExterior2Img, label: 'Custom Ceremonial Tyre & Gold Detailing' },
  { img: ceremonialExteriorImg,  label: 'Internal Ceremonial Sanctuary' },
];

const KenBurnsDirections = [
  { initial: { scale: 1.1, x: '2%',  y: '1%'  }, animate: { scale: 1,    x: '0%', y: '0%' } },
  { initial: { scale: 1.1, x: '-2%', y: '-1%' }, animate: { scale: 1.02, x: '0%', y: '0%' } },
  { initial: { scale: 1.1, x: '0%',  y: '2%'  }, animate: { scale: 1,    x: '0%', y: '-1%' } },
];

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenB2BModal: (segment?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onOpenB2BModal, onOpenBrochureModal }) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (next: number) => {
    setHeroSlide((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    heroTimerRef.current = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => { if (heroTimerRef.current) clearInterval(heroTimerRef.current); };
  }, []);

  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1 · HERO SECTION — Fullscreen Cinematic Ken Burns Carousel (Option A) */}
      {/* ========================================================================= */}
      <section className="hero-section relative min-h-screen flex items-end overflow-hidden bg-obsidian-950">

        {/* ── Fullscreen Ken Burns Background ── */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={heroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <motion.img
                src={HERO_SLIDES[heroSlide].img}
                alt={HERO_SLIDES[heroSlide].label}
                initial={KenBurnsDirections[heroSlide].initial}
                animate={KenBurnsDirections[heroSlide].animate}
                transition={{ duration: 5.5, ease: 'linear' }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* ── Layer 1: Bottom-to-top gradient ── */}
          <div className="hero-overlay-bottom absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/55 to-obsidian-950/10" />

          {/* ── Layer 2: Left-to-right gradient ── */}
          <div className="hero-overlay-left absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

          {/* ── Layer 3: Light blur ── */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              maskImage: 'linear-gradient(to right, black 0%, black 25%, rgba(0,0,0,0.3) 50%, transparent 65%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 25%, rgba(0,0,0,0.3) 50%, transparent 65%)',
            }}
          />
        </div>


        {/* Gold Particles on top */}
        <GoldParticles />

        {/* ── Content Overlay ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32 pt-28 lg:pt-36">
          <div className="max-w-3xl space-y-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
                {ETERNAL_DATA.hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
              className="font-serif tracking-tight leading-[1.08]"
            >
              <span className="hero-title-text text-5xl sm:text-7xl lg:text-7xl xl:text-[5.5rem] font-bold text-white block drop-shadow-2xl">
                Every Final Journey
              </span>
              <span className="text-3xl sm:text-5xl lg:text-5xl xl:text-[3.75rem] gold-gradient-text italic font-bold pt-1.5 pb-2 inline-block">
                Deserves Dignity.
              </span>
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="hero-subtext text-sm sm:text-base lg:text-lg max-w-xl tracking-wide leading-relaxed font-light text-slate-300/90"
            >
              {ETERNAL_DATA.hero.subtagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setActiveTab('vehicle'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow gold-shimmer flex items-center gap-2"
              >
                <span>{ETERNAL_DATA.hero.primaryCta}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenB2BModal('Institutional Partner')}
                className="hero-secondary-btn px-8 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 hover:border-gold-400/60 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Shield className="w-4 h-4 text-gold-400" />
                <span>{ETERNAL_DATA.hero.secondaryCta}</span>
              </motion.button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {ETERNAL_DATA.hero.highlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-serif font-bold text-xl sm:text-2xl block text-gold-300">
                    {item.stat}
                  </span>
                  <span className="hero-metric-label text-[10px] uppercase tracking-wider font-mono text-slate-400 leading-tight block">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── Bottom Controls: Dots + Slide label + Prev/Next ── */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-6 px-6">

          {/* Prev */}
          <button
            onClick={() => goToSlide(heroSlide - 1)}
            className="hero-ctrl-btn p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gold-500 hover:text-obsidian-950 hover:border-gold-400 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots + Slide label */}
          <div className="flex flex-col items-center gap-2">
            <motion.span
              key={`label-${heroSlide}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-slide-label text-[10px] font-mono text-gold-300/80 uppercase tracking-widest px-2.5 py-0.5 rounded-full"
            >
              {HERO_SLIDES[heroSlide].label}
            </motion.span>
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    i === heroSlide ? 'bg-gold-400 w-8' : 'hero-dot-inactive bg-white/30 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => goToSlide(heroSlide + 1)}
            className="hero-ctrl-btn p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gold-500 hover:text-obsidian-950 hover:border-gold-400 transition-all backdrop-blur-sm"
          >
          </button>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2 · BRAND PHILOSOPHY STRIP — Editorial Monogram */}
      {/* ========================================================================= */}

      <section className="bg-gradient-to-r from-obsidian-950 via-brown-950 to-obsidian-950 border-y border-gold-500/20 py-16 px-4 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-4 relative z-10"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold-400 font-bold block">
            CORE PHILOSOPHY
          </span>
          <p className="font-serif italic text-2xl sm:text-4xl text-gold-100 leading-relaxed font-normal">
            "{ETERNAL_DATA.brand.philosophy}"
          </p>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3 · WHY ETERNAL REPOS EXISTS — Visual Split Intro & Cards */}
      {/* ========================================================================= */}
      <section className="why-eternal-section py-32 sm:py-40 bg-gradient-to-b from-obsidian-900 via-brown-900/40 to-obsidian-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* Visual Intro Split Card (Left Luxury Interior Image + Right Copy) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl bg-obsidian-800/80 border border-gold-500/25 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Image Graphic */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-gold-500/25 shadow-xl group">
                <img
                  src={luxuryInteriorImg}
                  alt="Eternal Luxury Sanctuary Interior"
                  className="w-full h-[320px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-3 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                  PURPOSE-BUILT SANCTUARY
                </span>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-gold-400" />
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
                    BRAND GENESIS & MISSION
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-100 leading-tight">
                  {ETERNAL_DATA.whyEternal.heading}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {ETERNAL_DATA.whyEternal.intro.split('\n\n')[0]}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setIsStoryModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:from-gold-300 hover:to-gold-500 transition-all gold-shimmer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Brand Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 3 Key Differentiator Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ETERNAL_DATA.whyEternal.cards.map((card, idx) => (
              <DifferentiatorFlipCard
                key={card.id}
                card={card}
                index={idx}
                onOpenStoryModal={() => setIsStoryModalOpen(true)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CINEMATIC VISUAL BANNER — SANCTUARY EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-y border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <img
            src={glassSanctuaryImg}
            alt="Eternal Sanctuary Interior"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-obsidian-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[11px] uppercase font-mono tracking-widest text-gold-400 bg-obsidian-900/90 px-4 py-1.5 rounded-full border border-gold-500/30">
            PURPOSE-BUILT DIGNITY
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-gold-100 leading-tight">
            "Care should not end at the hospital door. Every journey deserves dignity."
          </h2>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 · THE ETERNAL VEHICLE SHOWCASE — Teaser to Dedicated Page */}
      {/* ========================================================================= */}
      <section className="py-32 sm:py-40 bg-gradient-to-b from-brown-900/30 via-obsidian-900 to-obsidian-900 border-t border-gold-500/15 relative overflow-hidden">
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
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src={ceremonialExteriorImg}
                  alt="The Eternal Ceremonial Vehicle"
                  className="w-full h-[400px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 bg-obsidian-950/80 px-3 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                  FORCE URBANIA XL WIDE-BODY PLATFORM
                </span>
              </div>
            </motion.div>

            {/* Right Teaser Copy & Highlights */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
                  FLAGSHIP CEREMONIAL FLEET
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-100 leading-tight">
                The Eternal Ceremonial Vehicle
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Purpose-engineered for dignity, comfort, and institutional reliability. Built on the Force Urbania XL wide-body platform with precision hydraulic bier elevation, 360° panoramic viewing, and medical-grade air purification.
              </p>

              {/* 3 Key Teaser Highlight Pills */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-800/80 border border-gold-500/15 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>360° Panoramic Viewing & Ambient Ceremonial Lighting</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-800/80 border border-gold-500/15 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Precision Hydraulic Bier Platform & Family Accommodations</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-800/80 border border-gold-500/15 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Hospital-Grade HEPA & Aromatic Air Purification System</span>
                </div>
              </div>

              {/* Direct CTA to Dedicated Vehicle Page */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab('vehicle');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center gap-2.5 gold-shimmer"
                >
                  <span>Explore Full Vehicle Specifications & 360° Sanctuary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5 · FOR FAMILIES — Peaceful & Respectful Journey */}
      {/* ========================================================================= */}
      <section className="py-32 sm:py-40 bg-obsidian-900 border-t border-gold-500/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-brown-900/70 via-obsidian-800/90 to-brown-900/50 border border-gold-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Ambient Background Image Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
              <img
                src={bierSanctuaryImg}
                alt="Sanctuary Ambience"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 w-12 h-12 rounded-full bg-gold-400/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mx-auto">
              <Heart className="w-6 h-6" />
            </div>

            <span className="relative z-10 text-xs uppercase font-mono tracking-widest text-gold-400 block">
              {ETERNAL_DATA.forFamilies.eyebrow}
            </span>

            <h2 className="relative z-10 font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              {ETERNAL_DATA.forFamilies.heading}
            </h2>

            <p className="relative z-10 font-serif italic text-xl text-gold-200 max-w-2xl mx-auto">
              "{ETERNAL_DATA.forFamilies.lead}"
            </p>

            <ReadMoreText
              text={ETERNAL_DATA.forFamilies.body}
              className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-light text-center"
              buttonLabel="Read Full Family Care Promise"
            />

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 mx-auto gold-shimmer"
              >
                <span>Speak With Our Care Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 · FOR INSTITUTIONS */}
      {/* ========================================================================= */}
      <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian-900 via-brown-900/60 to-obsidian-900 border-y border-gold-500/25 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[11px] uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-500/20">
                {ETERNAL_DATA.institutions.eyebrow}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              {ETERNAL_DATA.institutions.heading}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
              Empowering healthcare, municipal, and community institutions with dignified ceremonial mobility solutions.
            </p>
          </div>

          <div className="pt-2">
            <InstitutionalTabSwitcher onOpenB2BModal={onOpenB2BModal} />
          </div>

          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setActiveTab('institutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:border-gold-400 hover:bg-obsidian-800 transition-all flex items-center gap-2"
            >
              <span>Explore All Institutional SLA Frameworks</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7 · THE ETERNAL STANDARD — OPERATING PRINCIPLES */}
      {/* ========================================================================= */}
      <section className="py-32 sm:py-40 bg-obsidian-900 border-b border-gold-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
              {ETERNAL_DATA.operatingPrinciples.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              {ETERNAL_DATA.operatingPrinciples.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {ETERNAL_DATA.operatingPrinciples.subheading}
            </p>
          </div>

          <div className="pt-2">
            <OperatingPrinciplesSwitcher />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8 · TESTIMONIAL / PULL-QUOTES */}
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
      {/* 9 · CLOSING PARTNERSHIP CALL-TO-ACTION */}
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

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed whitespace-pre-line font-light">
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

      {/* Brand Story Modal Disclosure */}
      <StoryModal isOpen={isStoryModalOpen} onClose={() => setIsStoryModalOpen(false)} />

    </div>
  );
};
