import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { B2BModal } from './components/B2BModal';
import { BrochureModal } from './components/BrochureModal';
import { LightboxModal } from './components/LightboxModal';
import { ScrollProgress } from './components/ScrollProgress';
import { GoldParticles } from './components/GoldParticles';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vehicle } from './pages/Vehicle';
import { Services } from './pages/Services';
import { Institutions } from './pages/Institutions';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';

import { GalleryItem } from './data/eternalData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [b2bModalOpen, setB2bModalOpen] = useState(false);
  const [b2bSegment, setB2bSegment] = useState<string | undefined>(undefined);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Persistent Light / Dark Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('eternal_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('eternal_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenB2BModal = (segment?: string) => {
    setB2bSegment(segment);
    setB2bModalOpen(true);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            setActiveTab={setActiveTab}
            onOpenB2BModal={handleOpenB2BModal}
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
          />
        );
      case 'about':
        return <About onOpenB2BModal={() => handleOpenB2BModal('Institutional Partner')} />;
      case 'vehicle':
        return (
          <Vehicle
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
            onOpenB2BModal={() => handleOpenB2BModal('Vehicle Demonstration')}
          />
        );
      case 'services':
        return <Services onOpenB2BModal={handleOpenB2BModal} />;
      case 'institutions':
        return (
          <Institutions
            onOpenB2BModal={handleOpenB2BModal}
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
          />
        );
      case 'gallery':
        return <Gallery onSelectItem={(item) => setSelectedGalleryItem(item)} />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      default:
        return (
          <Home
            setActiveTab={setActiveTab}
            onOpenB2BModal={handleOpenB2BModal}
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-obsidian-900 text-slate-100 selection:bg-gold-500/30 selection:text-gold-200 relative transition-colors duration-300">
      {/* Top Animated Gold Scroll Progress Line */}
      <ScrollProgress />

      {/* Floating Gold Dust Background Ambient Particles */}
      <GoldParticles />

      {/* Navigation Bar with Theme Switcher */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenB2BModal={handleOpenB2BModal}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Area with Smooth AnimatePresence */}
      <main className="flex-grow relative z-[10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenB2BModal={() => handleOpenB2BModal('Institutional Partner')}
        isLightMode={theme === 'light'}
      />

      {/* Global Interactive Modals */}
      <B2BModal
        isOpen={b2bModalOpen}
        onClose={() => setB2bModalOpen(false)}
        defaultSegment={b2bSegment}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
