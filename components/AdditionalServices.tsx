import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, PenTool, Database, Receipt, Workflow, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AdditionalServices = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const icons = [<Users size={24} />, <CheckCircle2 size={24} />, <PenTool size={24} />, <Database size={24} />, <Receipt size={24} />, <Workflow size={24} />];

  return (
    <section className="py-24 bg-cream">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">{t.headline}</h2>
          <p className="text-charcoal/70">{t.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(45, 90, 74, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-8 rounded-2xl border border-forest/5 cursor-default group"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-forest mb-6 group-hover:scale-110 transition-transform duration-300">
                {icons[i]}
              </div>
              <h3 className="font-serif text-xl text-forest mb-2">{s.title}</h3>
              <p className="text-charcoal/60 text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-forest font-medium hover:text-terracotta transition-colors inline-flex items-center gap-2 group">
            {t.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AdditionalServices;