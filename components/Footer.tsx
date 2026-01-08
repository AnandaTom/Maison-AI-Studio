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
          <img 
            src="https://image.noelshack.com/fichiers/2026/02/4/1767870866-whatsapp-image-2026-01-08-at-12-13-39.jpeg" 
            alt="Maison IA Studio" 
            className="h-10 md:h-12 w-auto object-contain mb-4 mx-auto md:mx-0"
          />
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