import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA, BlogArticle } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { BookOpen, X, Clock, ArrowRight, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <div className="pt-28 pb-20 space-y-16 bg-obsidian-900 overflow-hidden">
      
      {/* Title */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center space-y-4"
      >
        <span className="text-xs uppercase font-mono tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-500/20">
          Thought Leadership & Industry Insights
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          <TextReveal text="Eternal Journal" highlightWords={["Eternal", "Journal"]} />
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          <TextReveal mode="fade-up" text="Perspectives on end-of-life care standards, institutional continuum care, and dignified funeral mobility in India." />
        </p>
      </motion.section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ETERNAL_DATA.blog.map((article, idx) => (
            <TiltCard key={article.id} className="rounded-3xl h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-obsidian-800 border border-gold-500/20 space-y-6 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 shadow-xl h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 border border-gold-500/30 font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-100 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User className="w-3.5 h-3.5 text-gold-400" />
                    <span>{article.author}</span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 rounded-3xl bg-obsidian-800 border border-gold-500/30 space-y-6 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-obsidian-900 text-slate-400 hover:text-gold-300 border border-gold-500/20"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
              {selectedArticle.category} · {selectedArticle.date}
            </span>

            <h2 className="font-serif text-3xl font-bold text-slate-100">
              {selectedArticle.title}
            </h2>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light border-t border-gold-500/15 pt-6">
              {selectedArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-gold-500/15 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};
