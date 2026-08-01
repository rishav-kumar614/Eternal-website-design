import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ETERNAL_DATA, BlogArticle } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { X, Clock, ArrowRight, User, BookOpen } from 'lucide-react';
import hearseImg from '../assets/images/eternal_hearse_exterior.png';
import interiorImg from '../assets/images/eternal_luxury_interior_1.png';
import floralImg from '../assets/images/eternal_floral_procession.png';
import glassSanctuaryImg from '../assets/images/eternal_glass_sanctuary.png';

const ARTICLE_IMAGES = [hearseImg, interiorImg, floralImg, glassSanctuaryImg, hearseImg, interiorImg];

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <div className="pt-36 pb-32 space-y-24 bg-obsidian-900 overflow-hidden">

      {/* ── Hero Header ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 text-center space-y-5"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-gold-400" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
            {ETERNAL_DATA.insightsPage.eyebrow}
          </span>
          <span className="w-8 h-px bg-gold-400" />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100 leading-[1.12]">
          Conversations{' '}
          <span className="gold-gradient-text italic">That</span>{' '}
          Matter
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-light leading-relaxed">
          {ETERNAL_DATA.insightsPage.intro}
        </p>
      </motion.section>

      {/* ── Articles Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {ETERNAL_DATA.blog.map((article, idx) => (
            <TiltCard key={article.id} className="rounded-3xl h-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-obsidian-800 to-brown-900/30 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl group h-full"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ARTICLE_IMAGES[idx] ?? hearseImg}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent" />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 border border-gold-500/30 text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest backdrop-blur-sm">
                    {article.category}
                  </span>
                  {/* Read time */}
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-slate-300 bg-obsidian-950/70 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex-1 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-100 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gold-500/15 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <User className="w-3.5 h-3.5 text-gold-400/60" />
                      <span>{article.author}</span>
                    </div>
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 transition-colors group/btn"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── Topics Line (minimal) ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold-400/50" />
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold-400/60">Topics We Cover</span>
          <span className="w-8 h-px bg-gold-400/50" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {ETERNAL_DATA.insightsPage.topics.map((topic, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full border border-gold-500/20 text-[11px] text-slate-400 font-light tracking-wide hover:border-gold-400/40 hover:text-gold-300 transition-all cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-500 font-light italic pt-2">
          {ETERNAL_DATA.insightsPage.closing}
        </p>
      </motion.section>

      {/* ── Article Detail Modal ── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl bg-obsidian-800 border border-gold-500/30 shadow-2xl relative"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={ARTICLE_IMAGES[ETERNAL_DATA.blog.indexOf(selectedArticle)] ?? hearseImg}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-800 via-obsidian-800/30 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-900/80 text-slate-400 hover:text-gold-300 border border-gold-500/20 backdrop-blur-sm transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    {selectedArticle.category} · {selectedArticle.date}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light border-t border-gold-500/15 pt-6">
                  {selectedArticle.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-gold-500/15 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-7 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 transition-all"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
