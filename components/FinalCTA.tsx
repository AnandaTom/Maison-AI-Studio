import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const FinalCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].finalCTA;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Organic shapes overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-terracotta rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-sand rounded-full blur-[100px]"
          />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
          {t.headline}
        </h2>
        <p className="text-xl text-cream/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t.text}
        </p>
        <motion.a 
          href={CAL_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-terracotta text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#D4A574] transition-colors shadow-2xl shadow-black/20 w-full sm:w-auto justify-center"
        >
          {t.button} <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FinalCTA;