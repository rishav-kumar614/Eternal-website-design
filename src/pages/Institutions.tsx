import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { InstitutionalTabSwitcher } from '../components/InstitutionalTabSwitcher';
import { FileText, Download, Calendar } from 'lucide-react';

interface InstitutionsProps {
  onOpenB2BModal: (segmentTitle?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Institutions: React.FC<InstitutionsProps> = ({ onOpenB2BModal, onOpenBrochureModal }) => {
  return (
    <div className="pt-36 pb-32 space-y-28 sm:space-y-36 bg-obsidian-900 overflow-hidden">
      
      {/* Title */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-8 h-px bg-gold-400" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">{ETERNAL_DATA.institutions.eyebrow}</span>
          <span className="w-8 h-px bg-gold-400" />
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          {ETERNAL_DATA.institutions.heading}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
          {ETERNAL_DATA.institutions.subheading}
        </p>
      </motion.section>

      {/* Segmented Tab Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstitutionalTabSwitcher onOpenB2BModal={onOpenB2BModal} />
      </section>

      {/* Download Brochure Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-3xl bg-gradient-to-r from-brown-900 via-obsidian-800 to-brown-900 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-300 shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest">OFFICIAL PARTNERSHIP BROCHURE</span>
              <h3 className="font-serif text-2xl font-bold text-slate-100">Download Institutional Guide (PDF)</h3>
              <p className="text-xs text-slate-300">Complete fleet specifications, SLA frameworks, and B2B pricing matrices.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenBrochureModal}
              className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center gap-2 gold-shimmer"
            >
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Download PDF Brochure</span>
            </button>

            <button
              onClick={() => onOpenB2BModal('Vehicle Demonstration')}
              className="px-6 py-3 rounded-full bg-obsidian-900 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:border-gold-400 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Vehicle Demo</span>
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
