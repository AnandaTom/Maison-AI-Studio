import React from 'react';
import { motion } from 'framer-motion';
import { TECH_LOGOS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const TechStack = () => {
  const { language } = useLanguage();
  const t = translations[language].techStack;

  return (
    <section className="py-32 bg-cream border-b border-forest/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">{t.headline}</h2>
          <p className="text-charcoal/60 text-xl max-w-2xl mx-auto font-light">{t.subheadline}</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center max-w-6xl mx-auto">
          {TECH_LOGOS.map((logo, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05, duration: 0.5 }}
               whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
               className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 p-2"
             >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const span = document.createElement('span');
                    span.innerText = logo.name;
                    span.className = "text-base font-bold text-forest/40 uppercase tracking-widest";
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
             </motion.div>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-forest/5">
          <p className="text-[11px] font-black text-charcoal/40 uppercase tracking-[0.3em]">
            {t.note}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;