import React from 'react';
import { ETERNAL_DATA } from '../data/eternalData';
import { Shield, Phone, Mail, MapPin, Linkedin, Instagram, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenB2BModal: () => void;
  isLightMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenB2BModal, isLightMode = false }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Eternal' },
    { id: 'vehicle', label: 'Our Vehicle' },
    { id: 'services', label: 'Services' },
    { id: 'institutions', label: 'For Institutions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Insights & Care' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLink = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-900 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold-500/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isLightMode
                    ? 'bg-gradient-to-tr from-amber-300 via-amber-200 to-gold-400 border border-gold-500/70 shadow-md'
                    : 'bg-gradient-to-tr from-brown-800 via-gold-500/40 to-gold-400/20 border border-gold-400/50 shadow-gold-glow'
                }`}
              >
                <span
                  className={`font-serif font-bold text-xl tracking-widest ${
                    isLightMode ? 'text-obsidian-950 font-black' : 'text-gold-300'
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
                        ? 'bg-amber-100 border-gold-500/50 text-gold-800 font-extrabold'
                        : 'bg-gold-400/10 border-gold-500/30 text-gold-400'
                    }`}
                  >
                    BY AZIMUTH
                  </span>
                </div>
              </div>
            </div>

            <p className={`font-serif italic text-lg ${isLightMode ? 'text-gold-700 font-semibold' : 'text-gold-300'}`}>
              {ETERNAL_DATA.brand.tagline}
            </p>

            <p className={`text-xs leading-relaxed max-w-md ${isLightMode ? 'text-slate-700' : 'text-slate-400'}`}>
              Eternal by Azimuth Business on Wheels is Delhi NCR’s premier luxury ceremonial mobility provider. We partner with healthcare institutions, funeral directors, municipal bodies, and families to honor life with uncompromised dignity.
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`p-2 rounded-full border transition-colors ${isLightMode ? 'bg-white border-gold-500/40 text-slate-700 hover:text-gold-700 hover:border-gold-500' : 'bg-obsidian-800 border-gold-500/20 text-slate-300 hover:text-gold-300 hover:border-gold-400'}`} title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`p-2 rounded-full border transition-colors ${isLightMode ? 'bg-white border-gold-500/40 text-slate-700 hover:text-gold-700 hover:border-gold-500' : 'bg-obsidian-800 border-gold-500/20 text-slate-300 hover:text-gold-300 hover:border-gold-400'}`} title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={ETERNAL_DATA.brand.whatsapp} target="_blank" rel="noreferrer" className={`p-2 rounded-full border transition-colors ${isLightMode ? 'bg-white border-gold-500/40 text-slate-700 hover:text-gold-700 hover:border-gold-500' : 'bg-obsidian-800 border-gold-500/20 text-slate-300 hover:text-gold-300 hover:border-gold-400'}`} title="WhatsApp Business">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLink(link.id)}
                    className="text-xs text-slate-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Delhi NCR Operations</h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{ETERNAL_DATA.brand.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${ETERNAL_DATA.brand.phone}`} className="hover:text-gold-300 transition-colors">{ETERNAL_DATA.brand.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${ETERNAL_DATA.brand.email}`} className="hover:text-gold-300 transition-colors">{ETERNAL_DATA.brand.email}</a>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-400/10 border border-gold-500/20 text-[11px] text-gold-300 font-medium">
                  ⚡ {ETERNAL_DATA.brand.sla}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenB2BModal}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-brown-800 to-obsidian-800 border border-gold-500/40 text-gold-300 text-xs font-semibold hover:border-gold-300 transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Institutional RFP & Partnerships</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{ETERNAL_DATA.brand.copyright}</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLink('contact')} className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <button onClick={() => handleLink('contact')} className="hover:text-slate-400 transition-colors">Terms of Use</button>
            <span className="text-gold-500/50">•</span>
            <span className="text-slate-400 font-medium">Azimuth Business on Wheels</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
