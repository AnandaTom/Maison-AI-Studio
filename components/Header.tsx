import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.solutions, id: "solutions" },
    { name: t.nav.results, id: "results" },
    { name: t.nav.about, id: "about" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 ${
          isScrolled 
            ? 'py-4 bg-cream/80 backdrop-blur-md shadow-sm border-b border-forest/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="font-serif text-2xl lg:text-3xl font-medium text-forest tracking-tight flex items-center gap-3 group">
            <span className="w-3 h-3 rounded-full bg-terracotta group-hover:scale-125 transition-transform duration-300"></span>
            <span>Maison IA Studio</span>
            <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-forest/5 border border-forest/10 text-[10px] uppercase tracking-widest text-forest/70 font-sans font-bold">
              <MapPin size={10} className="text-terracotta" />
              Bali
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map(link => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.id)} 
                className="text-sm font-medium text-charcoal/80 hover:text-forest transition-colors uppercase tracking-widest text-[11px]"
              >
                {link.name}
              </button>
            ))}

            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-1 bg-forest/5 rounded-full p-1 border border-forest/10">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-lg transition-all ${
                    language === 'en' ? 'bg-white shadow-sm scale-110' : 'opacity-40 hover:opacity-100 grayscale'
                  }`}
                  aria-label="Switch to English"
                  title="English"
                >
                  🇬🇧
                </button>
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-lg transition-all ${
                    language === 'fr' ? 'bg-white shadow-sm scale-110' : 'opacity-40 hover:opacity-100 grayscale'
                  }`}
                  aria-label="Switch to French"
                  title="Français"
                >
                  🇫🇷
                </button>
            </div>
            
            <a 
              href={CAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-forest text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-forest/90 transition-all hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="text-2xl"
            >
              {language === 'en' ? '🇬🇧' : '🇫🇷'}
            </button>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-forest">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center p-6 md:hidden"
          >
             <div className="flex flex-col items-center gap-8">
                {navLinks.map(link => (
                  <button 
                    key={link.name}
                    onClick={() => scrollTo(link.id)} 
                    className="font-serif text-3xl text-forest hover:text-terracotta transition-colors"
                  >
                    {link.name}
                  </button>
                ))}

                <div className="flex items-center gap-6 py-4">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`text-4xl p-2 rounded-xl transition-all ${language === 'en' ? 'scale-110 drop-shadow-md' : 'opacity-40 grayscale'}`}
                  >
                    🇬🇧
                  </button>
                  <button 
                    onClick={() => setLanguage('fr')}
                     className={`text-4xl p-2 rounded-xl transition-all ${language === 'fr' ? 'scale-110 drop-shadow-md' : 'opacity-40 grayscale'}`}
                  >
                    🇫🇷
                  </button>
                </div>

                <a 
                  href={CAL_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-terracotta text-white px-8 py-4 rounded-full text-lg font-medium"
                >
                  {t.nav.cta}
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;