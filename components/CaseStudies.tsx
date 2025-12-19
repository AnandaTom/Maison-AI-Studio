import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudies;

  return (
    <section id="results" className="py-32 bg-surface relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="mb-20 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-forest/5 text-forest text-xs font-bold uppercase tracking-widest rounded-full mb-6">
             PROVEN RESULTS
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-forest mb-8 leading-tight">
            {t.headline}
          </h2>
          <p className="text-charcoal/60 text-xl font-light leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {t.items.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-white p-10 md:p-14 rounded-[3rem] border border-forest/5 shadow-[0_30px_60px_-15px_rgba(45,90,74,0.08)] flex flex-col justify-between group relative overflow-hidden ${i === 0 ? 'lg:row-span-2' : ''}`}
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-terracotta/5 transition-colors duration-500"></div>

              <div>
                <div className="flex flex-wrap gap-2 mb-10">
                  {c.tags.map(t => (
                    <span key={t} className="text-[11px] uppercase font-black tracking-[0.15em] px-3 py-1.5 bg-forest/5 text-forest/60 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className={`font-serif text-forest mb-6 leading-tight group-hover:text-terracotta transition-colors duration-300 ${i === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                  {c.title}
                </h3>
                
                <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                  {c.detail}
                </p>
              </div>

              <div className="pt-8 border-t border-forest/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-charcoal/40 mb-1">Impact Achieved</div>
                    <div className="text-2xl font-serif text-forest font-bold tracking-tight">
                      {c.result}
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex w-12 h-12 rounded-full border border-forest/10 items-center justify-center text-forest group-hover:border-terracotta group-hover:text-terracotta transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;