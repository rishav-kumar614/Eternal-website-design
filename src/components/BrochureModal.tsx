import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `ETERNAL BY AZIMUTH BUSINESS ON WHEELS
PARTNERSHIP BROCHURE 2026

Tagline: From Utility to Legacy. From Transport to Tribute.
Region: Delhi NCR Operations

SPECIFICATIONS SUMMARY:
- Wide-Body Force Urbania XL Chassis Foundation
- Panoramic Double-Glazed 360° Viewing Sanctuary
- Precision Hydraulic Bier Platform with Velvet Finish
- Hospital-Grade Antimicrobial Seam-Sealed Surfaces
- Aromatic Air Purification & HEPA Filtration System
- High-Fidelity Ceremonial Surround Sound System
- External Synchronized LED Memorial Screens

INSTITUTIONAL LEASING & FABRICATION CONTACT:
Phone: ${ETERNAL_DATA.brand.phone}
Email: ${ETERNAL_DATA.brand.email}
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Eternal_Institutional_Partnership_Brochure_2026.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="modal-content relative w-full max-w-lg bg-obsidian-800 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="modal-header bg-gradient-to-r from-brown-800 to-obsidian-900 p-6 border-b border-gold-500/20 relative">
          <button
            onClick={onClose}
            className="modal-close-btn absolute top-5 right-5 p-1 rounded-full bg-obsidian-800/80 border border-gold-500/20 text-slate-400 hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-300">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-gold-400 tracking-widest">DIGITAL BROCHURE DOWNLOAD</span>
              <h3 className="font-serif text-xl font-bold text-slate-100">Institutional Vehicle Guide (PDF)</h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {downloaded ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400 text-gold-300 flex items-center justify-center mx-auto shadow-gold-glow">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-100">Brochure Downloaded</h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                The official specification document has been saved to your device.
              </p>
              <button
                onClick={() => { setDownloaded(false); onClose(); }}
                className="px-6 py-2 rounded-full bg-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gold-500/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-300">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Brochure Highlights Included:</span>
                </div>
                <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                  <li>Full Force Urbania XL wide-body chassis specifications</li>
                  <li>Hydraulic bier & panoramic glass engineering diagrams</li>
                  <li>Hospital B2B leasing and fleet AMC pricing guidelines</li>
                </ul>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Enter Email Address to Access PDF *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="modal-input w-full px-4 py-2.5 rounded-xl bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow gold-shimmer"
              >
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Download PDF Specification Guide</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
