import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    inquiryType: 'Hospital Partnership Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          24/7 Response Guaranteed
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          <TextReveal text="Connect With Eternal" highlightWords={["Eternal"]} />
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          <TextReveal mode="fade-up" text="We partner with healthcare systems, funeral companies, municipal bodies, and families across Delhi NCR." />
        </p>
      </motion.section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <TiltCard className="rounded-3xl">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-obsidian-800 to-brown-900/40 border border-gold-500/20 space-y-8 shadow-2xl">
                <div>
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">AZIMUTH DESIGN STUDIO</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-100 mt-1">Dignified Mobility Division</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Design & Fabrication Hub</h4>
                      <p className="text-xs text-slate-400">{ETERNAL_DATA.brand.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">24/7 Priority Hotline</h4>
                      <p className="text-xs text-slate-400">{ETERNAL_DATA.brand.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Institutional Inquiries</h4>
                      <p className="text-xs text-slate-400">{ETERNAL_DATA.brand.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-500/30 text-gold-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Response SLA Guarantee</h4>
                      <p className="text-xs text-slate-400">{ETERNAL_DATA.brand.sla}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-500/15">
                  <a
                    href={ETERNAL_DATA.brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <TiltCard className="rounded-3xl">
              <div className="p-8 rounded-3xl bg-obsidian-800 border border-gold-500/25 shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400 text-gold-300 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-100">Inquiry Received with Honor</h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you for contacting Eternal by Azimuth. Our Institutional Relations team will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-gold-500/15 pb-4">
                      <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest">OFFICIAL INQUIRY FORM</span>
                      <h3 className="font-serif text-2xl font-bold text-slate-100">Partner & Client Communication</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none"
                          placeholder="e.g. Dr. Rajesh Sharma"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium">Organization / Hospital Name</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none"
                          placeholder="e.g. Max Healthcare NCR"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none"
                          placeholder="name@organization.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium">Nature of Inquiry</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none"
                      >
                        <option>Hospital Partnership Inquiry</option>
                        <option>Funeral Management Fleet Upgrade</option>
                        <option>Municipal Corporation Tender</option>
                        <option>Religious Trust & NGO Subsidy Model</option>
                        <option>Vehicle Purchase & Custom Fabrication</option>
                        <option>Family Ceremonial Service Booking</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium">Message / Requirement Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 text-xs focus:border-gold-400 outline-none resize-none"
                        placeholder="Please describe your fleet requirement, timeline, or location in Delhi NCR..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 gold-shimmer"
                    >
                      <Send className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Submit Official Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

    </div>
  );
};
