import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  mode?: 'words' | 'fade-up';
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
  as = 'span',
  mode = 'words',
  once = false
}) => {
  if (mode === 'fade-up') {
    const Component = motion[as] || motion.span;
    return (
      <Component
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.15 }}
        transition={{ duration: 0.5, delay }}
        className={`inline-block will-change-transform ${className}`}
      >
        {text}
      </Component>
    );
  }

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      className={`inline-flex flex-wrap items-center justify-center gap-x-[0.28em] will-change-transform ${className}`}
    >
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some((h) =>
          word.toLowerCase().includes(h.toLowerCase())
        );
        return (
          <span key={idx} className="inline-block overflow-hidden py-0.5">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${
                isHighlighted ? 'gold-gradient-text font-bold' : ''
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};
