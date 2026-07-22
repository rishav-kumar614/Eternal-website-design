import React, { useState } from 'react';
import { X, Shield, Calendar, Send, CheckCircle2, Building, User, Mail, Phone, MapPin } from 'lucide-react';
import { ETERNAL_DATA } from '../data/eternalData';

interface B2BModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSegment?: string;
}

export const B2BModal: React.FC<B2BModalProps> = ({ isOpen, onClose, defaultSegment }) => {
  const [formType, setFormType] = useState<'partnership' | 'demo'>('partnership');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    role: '',
    email: '',
    phone: '',
    city: 'Delhi NCR',
    serviceRequired: defaultSegment || 'Vehicle Leasing',
    preferredDate: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="modal-content relative w-full max-w-2xl bg-obsidian-800 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="modal-header bg-gradient-to-r from-brown-800 via-obsidian-900 to-brown-800 p-6 border-b border-gold-500/20 relative">
          <button
            onClick={onClose}
            className="modal-close-btn absolute top-5 right-5 p-2 rounded-full border border-gold-500/30 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-500/30 text-gold-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">B2B Institutional Portal</span>
              <h3 className="font-serif text-2xl font-bold text-slate-100">
                {formType === 'partnership' ? 'Institutional Partnership Request' : 'Schedule Vehicle Demonstration'}
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 font-serif italic">
            "Where trust meets tribute. Dedicated mobility solutions for hospitals, funeral directors, municipal bodies, and NGOs."
          </p>

          {/* Toggle Tabs */}
          <div className="flex gap-2 mt-4 pt-3 border-t border-gold-500/15">
            <button
              onClick={() => setFormType('partnership')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all border border-gold-500/20 ${
                formType === 'partnership'
                  ? 'bg-gold-500 text-obsidian-900 font-bold shadow-gold-glow border-gold-400'
                  : 'modal-tab-inactive'
              }`}
            >
              Institutional Partnership
            </button>
            <button
              onClick={() => setFormType('demo')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all border border-gold-500/20 ${
                formType === 'demo'
                  ? 'bg-gold-500 text-obsidian-900 font-bold shadow-gold-glow border-gold-400'
                  : 'modal-tab-inactive'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Vehicle Demonstration</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-400/10 border-2 border-gold-400 text-gold-300 flex items-center justify-center mx-auto shadow-gold-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-100">Inquiry Submitted Successfully</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your inquiry. An Azimuth B2B Representative will contact your institution within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-full bg-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Org Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Organisation Name *
                  </label>
                  <div className="relative">
                    <Building className="modal-input-icon absolute left-3 top-2.5 w-4 h-4 text-gold-400" />
                    <input
                      type="text"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Max Healthcare / St. Jude Trust"
                      className="modal-input w-full pl-9 pr-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                {/* Contact Person */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="modal-input-icon absolute left-3 top-2.5 w-4 h-4 text-gold-400" />
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="modal-input w-full pl-9 pr-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Designation */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Designation / Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Medical Superintendent / Director"
                    className="modal-input w-full px-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    City / Region *
                  </label>
                  <div className="relative">
                    <MapPin className="modal-input-icon absolute left-3 top-2.5 w-4 h-4 text-gold-400" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="modal-input w-full pl-9 pr-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                    >
                      <option>Delhi NCR (Primary Launch Region)</option>
                      <option>Delhi City</option>
                      <option>Noida / Greater Noida</option>
                      <option>Gurugram</option>
                      <option>Faridabad / Ghaziabad</option>
                      <option>Other Metropolitan Location</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Work Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="modal-input-icon absolute left-3 top-2.5 w-4 h-4 text-gold-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="administrator@hospital.org"
                      className="modal-input w-full pl-9 pr-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Phone / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="modal-input-icon absolute left-3 top-2.5 w-4 h-4 text-gold-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="modal-input w-full pl-9 pr-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              {formType === 'demo' ? (
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Preferred Demonstration Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="modal-input w-full px-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Service / Solution Required
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="modal-input w-full px-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none"
                  >
                    <option>Long-Term Fleet Leasing</option>
                    <option>Turnkey Vehicle Fabrication</option>
                    <option>Fleet Maintenance Contract (AMC)</option>
                    <option>Mortuary Refrigeration Integration</option>
                    <option>Institutional Branding & Livery Customization</option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Message / Institutional Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your hospital bed capacity, fleet requirements, or timeline..."
                  className="modal-input w-full px-3 py-2 rounded-lg bg-obsidian-900/50 border border-gold-500/20 text-xs text-slate-100 focus:border-gold-400 outline-none resize-none"
                />
              </div>

              {/* Footer Buttons */}
              <div className="pt-3 border-t border-gold-500/15 flex items-center justify-between">
                <span className="text-[10px] text-gold-400 font-mono">
                  🔒 Strictly Confidential B2B Communication
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow gold-shimmer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 relative z-10" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
