import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, PhoneCall, Sun, Moon } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenB2BModal: (defaultRole?: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenB2BModal,
  theme,
  toggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Eternal' },
    { id: 'vehicle', label: 'Our Vehicle' },
    { id: 'services', label: 'Services' },
    { id: 'institutions', label: 'For Institutions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLightMode = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `header-scrolled py-3 shadow-xl backdrop-blur-md border-b ${
              isLightMode
                ? 'bg-white/95 border-gold-500/30'
                : 'bg-obsidian-900/90 border-gold-500/20'
            }`
          : `header-transparent py-5 bg-gradient-to-b ${
              isLightMode
                ? 'from-amber-100/40 via-amber-50/20 to-transparent'
                : 'from-obsidian-900/90 via-obsidian-900/60 to-transparent'
            }`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 xl:gap-8">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none shrink-0 mr-2 xl:mr-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isLightMode
                  ? 'bg-gradient-to-tr from-amber-200 via-amber-100 to-gold-300 border border-gold-500/60 shadow-md group-hover:border-gold-600'
                  : 'bg-gradient-to-tr from-brown-800 via-gold-500/40 to-gold-400/20 border border-gold-400/50 shadow-gold-glow group-hover:border-gold-300'
              }`}
            >
              <span
                className={`font-serif font-bold text-xl tracking-widest ${
                  isLightMode ? 'text-obsidian-900' : 'text-gold-300'
                }`}
              >
                E
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-serif text-2xl font-bold tracking-wider transition-colors ${
                    isLightMode ? 'text-slate-900' : 'text-slate-100'
                  }`}
                >
                  ETERNAL
                </span>
                <span
                  className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md border ${
                    isLightMode
                      ? 'bg-amber-100/90 border-gold-500/40 text-gold-700'
                      : 'bg-gold-400/10 border-gold-500/30 text-gold-400'
                  }`}
                >
                  BY AZIMUTH
                </span>
              </div>
              <p
                className={`text-[10px] tracking-widest uppercase font-mono ${
                  isLightMode ? 'text-slate-700 font-semibold' : 'text-slate-300'
                }`}
              >
                Luxury Funeral Mobility
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full border backdrop-blur-md transition-all shrink-0 ${
              isLightMode
                ? 'bg-white/80 border-gold-500/35 shadow-sm'
                : 'bg-obsidian-800/70 border-gold-500/20'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-900 font-bold shadow-gold-glow'
                      : isLightMode
                      ? 'text-slate-800 hover:text-gold-700 hover:bg-gold-500/15'
                      : 'text-slate-200 hover:text-gold-200 hover:bg-gold-500/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center shadow-md ${
                isLightMode
                  ? 'bg-white/90 border-gold-500/40 text-gold-700 hover:bg-amber-50'
                  : 'bg-obsidian-800 border-gold-500/30 text-gold-300 hover:bg-gold-500/10'
              }`}
              title={isLightMode ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              aria-label="Toggle Theme"
            >
              {isLightMode ? (
                <Moon className="w-4 h-4 text-gold-700 hover:-rotate-12 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 text-gold-300 hover:rotate-45 transition-transform" />
              )}
            </button>

            <button
              onClick={() => onOpenB2BModal('Institutional Partner')}
              className="relative group px-4 py-2 rounded-full overflow-hidden text-xs font-bold tracking-wider text-obsidian-900 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-gold-glow hover:shadow-gold-500/40 transition-all flex items-center gap-2 gold-shimmer"
            >
              <Shield className="w-3.5 h-3.5 text-obsidian-900 relative z-10" />
              <span className="relative z-10">PARTNER WITH US</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform relative z-10" />
            </button>
          </div>

          {/* Mobile Toggle & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg border ${
                isLightMode
                  ? 'bg-white border-gold-500/40 text-gold-700'
                  : 'bg-obsidian-800 border-gold-500/20 text-gold-300'
              }`}
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-lg border ${
                isLightMode
                  ? 'bg-white border-gold-500/30 text-slate-800'
                  : 'bg-obsidian-800 border-gold-500/20 text-slate-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden backdrop-blur-xl border-b border-gold-500/20 px-4 pt-4 pb-6 mt-3 space-y-2 ${
            isLightMode ? 'bg-white/95 text-slate-900' : 'bg-obsidian-900/95 text-slate-100'
          }`}
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-gold-500/20 text-gold-600 border-l-2 border-gold-500 font-bold'
                    : isLightMode
                    ? 'text-slate-800 hover:bg-amber-50'
                    : 'text-slate-300 hover:bg-gold-500/10'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gold-500/15 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenB2BModal('Institutional Partner');
              }}
              className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <Shield className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>
            <a
              href={`tel:${ETERNAL_DATA.brand.phone}`}
              className="w-full py-2.5 rounded-xl border border-gold-500/30 text-gold-600 text-xs font-bold flex items-center justify-center gap-2 hover:bg-gold-500/10"
            >
              <PhoneCall className="w-4 h-4 text-gold-500" />
              <span>Direct Hotline: {ETERNAL_DATA.brand.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
