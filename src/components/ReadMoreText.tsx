import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReadMoreTextProps {
  text: string;
  previewLines?: number;
  className?: string;
  buttonLabel?: string;
}

export const ReadMoreText: React.FC<ReadMoreTextProps> = ({
  text,
  className = '',
  buttonLabel = 'Read Full Context'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = text.split('\n\n').filter(Boolean);

  if (paragraphs.length <= 1) {
    return <p className={className}>{text}</p>;
  }

  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="space-y-3">
      <p className={className}>{firstParagraph}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="space-y-3 overflow-hidden pt-1"
          >
            {remainingParagraphs.map((para, idx) => (
              <p key={idx} className={className}>
                {para}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-500/25 text-gold-300 text-xs font-mono tracking-wider hover:bg-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
      >
        <span>{isExpanded ? 'Show Less' : buttonLabel}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
