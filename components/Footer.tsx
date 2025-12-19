import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-cream py-16 border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-serif text-2xl font-medium text-forest tracking-tight mb-2">
            Maison IA Studio
          </div>
          <p className="text-charcoal/50 text-sm">{t.copyright}</p>
        </div>
        
        <div className="flex gap-8 items-center">
          <a href="mailto:mathieu@maisoniastudio.com" className="text-charcoal/60 hover:text-forest transition-colors flex items-center gap-2 text-sm">
             <Mail size={16} /> mathieu@maisoniastudio.com
          </a>
          <div className="flex gap-4">
             <a href="#linkedin" className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all">
               <Linkedin size={18} />
             </a>
             <a href="#instagram" className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all">
               <Instagram size={18} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;