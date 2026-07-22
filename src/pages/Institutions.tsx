import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { Building, FileText, CheckCircle2, ChevronRight, Download, Calendar } from 'lucide-react';

interface InstitutionsProps {
  onOpenB2BModal: (segmentTitle?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Institutions: React.FC<InstitutionsProps> = ({ onOpenB2BModal, onOpenBrochureModal }) => {
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
          {ETERNAL_DATA.institutions.eyebrow}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          {ETERNAL_DATA.institutions.heading}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          {ETERNAL_DATA.institutions.subheading}
        </p>
      </motion.section>

      {/* 4 Partner Segment Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ETERNAL_DATA.institutions.segments.map((segment, idx) => (
            <TiltCard key={segment.id} className="rounded-3xl h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-obsidian-800 via-obsidian-800 to-brown-900/40 border border-gold-500/25 space-y-6 flex flex-col justify-between shadow-2xl hover:border-gold-400 transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-500/30 text-gold-300">
                      <Building className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-100">{segment.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {segment.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gold-500/15">
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Key Institutional Benefits:</span>
                    {segment.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenB2BModal(segment.title)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:shadow-gold-500/40 transition-all gold-shimmer"
                >
                  <span className="relative z-10">{segment.ctaText}</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </button>
              </motion.div>
            </TiltCard>
          ))}
        </div>
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
