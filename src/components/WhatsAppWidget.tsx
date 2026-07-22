import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="whatsapp-card mb-3 w-80 bg-obsidian-800 border border-gold-500/30 rounded-2xl shadow-2xl p-4 backdrop-blur-xl animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between border-b border-gold-500/20 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 font-bold text-sm">
                💬
              </div>
              <div>
                <h4 className="whatsapp-title text-xs font-bold text-slate-100">Eternal Care Desk</h4>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">● Online | Delhi NCR</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="whatsapp-close-btn text-slate-400 hover:text-slate-200 p-1 rounded-full border border-transparent hover:border-gold-500/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="whatsapp-chat-bubble text-xs text-slate-300 mb-4 p-3.5 rounded-xl border border-gold-500/15 leading-relaxed font-medium">
            Welcome to Eternal by Azimuth. How can our team assist your family or institution today?
          </p>

          <a
            href={ETERNAL_DATA.brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-action-btn w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>Start WhatsApp Chat</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-trigger-btn group relative flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl border border-emerald-400/40 transition-all hover:scale-105"
        aria-label="WhatsApp Business Chat"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline tracking-wider font-mono">WhatsApp Support</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200"></span>
        </span>
      </button>

    </div>
  );
};
