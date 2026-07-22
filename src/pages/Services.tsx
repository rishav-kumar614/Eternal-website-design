import React from 'react';
import { motion } from 'framer-motion';
import { ETERNAL_DATA } from '../data/eternalData';
import { TiltCard } from '../components/TiltCard';
import { Wrench, KeyRound, Activity, ThermometerSnowflake, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenB2BModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenB2BModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-gold-400" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-gold-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-gold-400" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-6 h-6 text-gold-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-gold-400" />;
      default: return <Wrench className="w-6 h-6 text-gold-400" />;
    }
  };

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
          Institutional & Fleet Solutions
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-100">
          Comprehensive <br />
          <span className="gold-gradient-text">Ceremonial Mobility Services</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Azimuth Business on Wheels provides end-to-end vehicle engineering, fleet leasing, AMC maintenance contracts, and mortuary refrigeration integration.
        </p>
      </motion.section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ETERNAL_DATA.services.map((service, idx) => (
            <TiltCard key={service.id} className="rounded-3xl h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-obsidian-800 to-brown-900/30 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-xl group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-gold-400/10 border border-gold-500/30 group-hover:scale-110 transition-transform">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest bg-obsidian-900 px-2.5 py-1 rounded-full border border-gold-500/20">
                      AZIMUTH SERVICE
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-100 mb-1">{service.title}</h3>
                    <span className="text-xs text-gold-300 font-mono">{service.subtitle}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gold-500/15">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenB2BModal(service.title)}
                  className="w-full py-3 rounded-xl bg-obsidian-900 hover:bg-gold-500 hover:text-obsidian-900 border border-gold-500/30 text-gold-300 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire For {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

    </div>
  );
};
