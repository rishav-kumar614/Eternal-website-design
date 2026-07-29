import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Truck, 
  Armchair, 
  Grid, 
  ShieldCheck, 
  Wind, 
  Eye, 
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Real Vehicle Assets
import front34Img from '../assets/images/vehicle_view_front_34.png';
import sideLeftImg from '../assets/images/vehicle_view_side_left.png';
import rear34Img from '../assets/images/vehicle_view_rear_34.png';
import rearImg from '../assets/images/vehicle_view_rear.png';
import topImg from '../assets/images/vehicle_view_top.png';
import sideRightImg from '../assets/images/vehicle_view_side_right.png';
import featuresRoofImg from '../assets/images/vehicle_features_roof.png';
import sideOppositeImg from '../assets/images/vehicle_view_side_opposite.png';

// Dark / Light 360 overview backups
import dark360Img from '../assets/images/eternal_vehicle_360_dark.jpg';
import darkViewsImg from '../assets/images/eternal_vehicle_dark_views.jpg';
import rearGlassImg from '../assets/images/eternal_vehicle_rear_glass.jpg';

export interface VehicleViewItem {
  id: string;
  label: string;
  category: 'exterior' | 'interior' | 'features';
  dayImage: string;
  nightImage: string;
  description: string;
}

const VEHICLE_VIEWS: VehicleViewItem[] = [
  {
    id: 'front-34',
    label: 'FRONT 3/4',
    category: 'exterior',
    dayImage: front34Img,
    nightImage: dark360Img,
    description: '3/4 Front profile showing wide-body urbania chassis with champagne gold trim and panoramic glass.'
  },
  {
    id: 'side',
    label: 'SIDE',
    category: 'exterior',
    dayImage: sideLeftImg,
    nightImage: sideRightImg,
    description: 'Full lateral profile highlighting 360° viewing window and ornate gold ceremonial door.'
  },
  {
    id: 'rear-34',
    label: 'REAR 3/4',
    category: 'exterior',
    dayImage: rear34Img,
    nightImage: darkViewsImg,
    description: 'Rear 3/4 angle showing continuous panoramic glass and custom floral rail mounting system.'
  },
  {
    id: 'rear',
    label: 'REAR',
    category: 'exterior',
    dayImage: rearImg,
    nightImage: rearGlassImg,
    description: 'Direct rear view featuring ceremonial drapes and gold-embossed Eternal logo.'
  },
  {
    id: 'top',
    label: 'TOP',
    category: 'exterior',
    dayImage: topImg,
    nightImage: topImg,
    description: 'Bird-eye top perspective revealing toughened panoramic glass ceiling and gold roof rails.'
  },
  {
    id: 'side-opp',
    label: 'FRONT',
    category: 'exterior',
    dayImage: sideOppositeImg,
    nightImage: dark360Img,
    description: 'Opposite front side angle showcasing symmetric LED memorial lighting and gold bumper trim.'
  },
  {
    id: 'sanctuary',
    label: 'GLASS SANCTUARY',
    category: 'interior',
    dayImage: rearGlassImg,
    nightImage: darkViewsImg,
    description: 'Climate-controlled glass sanctuary with warm ambient cove lighting and motorized hydraulic bier.'
  },
  {
    id: 'roof-features',
    label: 'ROOF SPECS',
    category: 'features',
    dayImage: featuresRoofImg,
    nightImage: featuresRoofImg,
    description: 'Interactive breakdown of roof features including ventilation hatch, shark-fin antenna & LED light strip.'
  }
];

const EXTERIOR_ANGLE_SEQUENCE = ['front-34', 'side', 'rear-34', 'rear', 'top', 'side-opp'];

export const VehicleInteractiveViewer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'exterior' | 'interior' | 'features'>('exterior');
  const [activeViewId, setActiveViewId] = useState<string>('front-34');
  const [isNightMode, setIsNightMode] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter views for active category
  const categoryViews = VEHICLE_VIEWS.filter(v => v.category === activeCategory);
  const currentView = VEHICLE_VIEWS.find(v => v.id === activeViewId) || VEHICLE_VIEWS[0];

  // Rotate angle handler
  const handleRotate = (direction: 'next' | 'prev') => {
    const currentIndex = EXTERIOR_ANGLE_SEQUENCE.indexOf(activeViewId);
    if (currentIndex === -1) {
      setActiveViewId(EXTERIOR_ANGLE_SEQUENCE[0]);
      return;
    }
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= EXTERIOR_ANGLE_SEQUENCE.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = EXTERIOR_ANGLE_SEQUENCE.length - 1;
    setActiveViewId(EXTERIOR_ANGLE_SEQUENCE[nextIndex]);
  };

  // Drag start
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };

  // Drag end
  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = clientX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleRotate('prev');
      } else {
        handleRotate('next');
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl border ${
        isFullscreen 
          ? 'fixed inset-0 z-50 rounded-none bg-obsidian-900 flex flex-col justify-center' 
          : 'bg-[#111216] border-gold-500/30'
      }`}
    >
      {/* Container Box */}
      <div className="relative w-full p-4 sm:p-6 flex flex-col justify-between min-h-[550px] lg:min-h-[640px] select-none">
        
        {/* ─── TOP BAR ─── */}
        <div className="relative z-20 flex items-center justify-between gap-4 pb-3 border-b border-gold-500/20">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-300 font-serif font-bold text-sm">
              E
            </div>
            <div>
              <span className="font-serif font-bold tracking-wider text-xs sm:text-sm text-slate-100 block">
                ETERNAL <span className="text-[10px] text-gold-400 font-sans font-normal ml-1">BY AZIMUTH</span>
              </span>
              <span className="text-[10px] font-sans text-slate-400 block tracking-wide">
                India's First Ultra-Premium Funeral Mobility
              </span>
            </div>
          </div>

          {/* Center Interactive Hint */}
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900/80 border border-gold-500/30 text-gold-300 text-xs font-mono tracking-widest shadow-gold-glow">
            <ChevronLeft className="w-3.5 h-3.5 animate-pulse" />
            <RotateCw className="w-3.5 h-3.5 text-gold-400" />
            <span>DRAG OR CLICK TO ROTATE</span>
            <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRotate('next')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-mono font-semibold transition-all"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>360° VIEW</span>
            </button>
          </div>
        </div>

        {/* ─── MAIN VIEW CANVAS WITH SIDEBAR OVERLAYS ─── */}
        <div 
          className="relative flex-1 my-4 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl bg-obsidian-950/60"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {/* Main Image Render */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activeViewId}-${isNightMode ? 'night' : 'day'}`}
              src={isNightMode ? currentView.nightImage : currentView.dayImage}
              alt={currentView.label}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full h-full max-h-[480px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-105 contrast-105"
            />
          </AnimatePresence>

          {/* Interactive Navigation Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleRotate('prev'); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-obsidian-900/80 border border-gold-500/30 text-gold-300 hover:bg-gold-500/20 hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
            title="Previous Angle"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Interactive Navigation Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleRotate('next'); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-obsidian-900/80 border border-gold-500/30 text-gold-300 hover:bg-gold-500/20 hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
            title="Next Angle"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* ─── LEFT CATEGORY NAV BUTTONS (Floating Overlay) ─── */}
          <div className="absolute left-4 top-4 z-20 flex flex-col gap-2.5">
            <button
              onClick={() => { setActiveCategory('exterior'); setActiveViewId('front-34'); }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeCategory === 'exterior'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-bold border-gold-300 shadow-gold-glow'
                  : 'bg-obsidian-900/85 text-slate-300 border-gold-500/20 hover:border-gold-500/50 hover:bg-obsidian-800'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>EXTERIOR</span>
            </button>

            <button
              onClick={() => { setActiveCategory('interior'); setActiveViewId('sanctuary'); }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeCategory === 'interior'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-bold border-gold-300 shadow-gold-glow'
                  : 'bg-obsidian-900/85 text-slate-300 border-gold-500/20 hover:border-gold-500/50 hover:bg-obsidian-800'
              }`}
            >
              <Armchair className="w-4 h-4" />
              <span>INTERIOR</span>
            </button>

            <button
              onClick={() => { setActiveCategory('features'); setActiveViewId('roof-features'); }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeCategory === 'features'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-bold border-gold-300 shadow-gold-glow'
                  : 'bg-obsidian-900/85 text-slate-300 border-gold-500/20 hover:border-gold-500/50 hover:bg-obsidian-800'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>FEATURES</span>
            </button>
          </div>

          {/* ─── RIGHT LIGHTING CONTROLS (Floating Overlay) ─── */}
          <div className="absolute right-4 top-4 z-20 flex flex-col gap-2.5">
            <button
              onClick={() => setIsNightMode(false)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] font-mono tracking-wider transition-all border ${
                !isNightMode
                  ? 'bg-gold-400 text-obsidian-900 font-bold border-gold-300 shadow-gold-glow'
                  : 'bg-obsidian-900/85 text-slate-300 border-gold-500/20 hover:border-gold-500/50'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-gold-400" />
              <span>DAY VIEW</span>
            </button>

            <button
              onClick={() => setIsNightMode(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] font-mono tracking-wider transition-all border ${
                isNightMode
                  ? 'bg-gold-400 text-obsidian-900 font-bold border-gold-300 shadow-gold-glow'
                  : 'bg-obsidian-900/85 text-slate-300 border-gold-500/20 hover:border-gold-500/50'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-gold-400" />
              <span>NIGHT VIEW</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-900/85 text-slate-300 border border-gold-500/20 hover:border-gold-500/50 text-[11px] font-mono tracking-wider transition-all"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-gold-400" /> : <Maximize2 className="w-3.5 h-3.5 text-gold-400" />}
              <span>FULLSCREEN</span>
            </button>
          </div>

          {/* Active View Caption Card */}
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-obsidian-900/90 border border-gold-500/30 p-3 rounded-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-gold-300 tracking-wider block">
                VIEW: {currentView.label}
              </span>
              <p className="text-xs text-slate-300 font-light leading-snug">
                {currentView.description}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {activeCategory} mode
              </span>
            </div>
          </div>

        </div>

        {/* ─── BOTTOM THUMBNAIL STRIP ─── */}
        <div className="relative z-20 pt-2 pb-1">
          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 scrollbar-none">
            {categoryViews.map((item) => {
              const isSelected = activeViewId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveViewId(item.id)}
                  className={`group relative flex flex-col items-center gap-1.5 p-1.5 rounded-xl border transition-all duration-300 shrink-0 ${
                    isSelected
                      ? 'border-gold-400 bg-gold-500/15 shadow-gold-glow scale-105'
                      : 'border-gold-500/20 bg-obsidian-900/60 hover:border-gold-500/50 hover:bg-obsidian-800'
                  }`}
                >
                  <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden relative bg-obsidian-950">
                    <img
                      src={isNightMode ? item.nightImage : item.dayImage}
                      alt={item.label}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-transform duration-300"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 border-2 border-gold-400 rounded-lg pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider uppercase ${
                    isSelected ? 'text-gold-300 font-bold' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── BOTTOM FEATURE HIGHLIGHTS BAR ─── */}
        <div className="relative z-20 pt-3 border-t border-gold-500/15 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] font-mono text-slate-300">
          <div className="p-2 rounded-xl bg-obsidian-900/70 border border-gold-500/15 flex items-center justify-center gap-1.5 hover:border-gold-400/40 transition-colors">
            <Eye className="w-3.5 h-3.5 text-gold-400" />
            <span>PANORAMIC GLASS</span>
          </div>
          <div className="p-2 rounded-xl bg-obsidian-900/70 border border-gold-500/15 flex items-center justify-center gap-1.5 hover:border-gold-400/40 transition-colors">
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span>HYDRAULIC BIER</span>
          </div>
          <div className="p-2 rounded-xl bg-obsidian-900/70 border border-gold-500/15 flex items-center justify-center gap-1.5 hover:border-gold-400/40 transition-colors">
            <RotateCw className="w-3.5 h-3.5 text-gold-400" />
            <span>360° VIEWING</span>
          </div>
          <div className="p-2 rounded-xl bg-obsidian-900/70 border border-gold-500/15 flex items-center justify-center gap-1.5 hover:border-gold-400/40 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>HOSPITAL GRADE</span>
          </div>
          <div className="p-2 rounded-xl bg-obsidian-900/70 border border-gold-500/15 flex items-center justify-center gap-1.5 hover:border-gold-400/40 transition-colors col-span-2 sm:col-span-1">
            <Wind className="w-3.5 h-3.5 text-gold-400" />
            <span>AIR PURIFICATION</span>
          </div>
        </div>

      </div>
    </div>
  );
};
