import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-cream min-h-[90vh] flex items-center">
      
      {/* Background Image - Bali Rice Terraces */}
      <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=2000" 
            alt="Bali Rice Terraces" 
            className="w-full h-full object-cover opacity-[0.07] blur-[4px] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-transparent to-cream/90"></div>
      </div>

      {/* Background Organic Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-sand/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-forest/20 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-8 bg-white/40 backdrop-blur-sm mx-auto lg:mx-0 shadow-sm">
            {t.badge}
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.2] text-forest mb-10">
            <span className="block mb-2 font-medium">{t.title}</span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 italic">
              <span className="text-terracotta">{t.titleSpan1}</span>,
              <span className="text-terracotta">{t.titleSpan2}</span>
              <span className="text-forest">&</span>
              <span className="text-terracotta">{t.titleSpan3}</span>
            </div>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#D4A574] transition-all shadow-xl shadow-terracotta/20 hover:-translate-y-1 group w-full sm:w-auto"
            >
              {t.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative hidden lg:block"
        >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-sand/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-terracotta/20 rounded-full blur-2xl"></div>
                
                {/* Main Image Container */}
                <div className="relative h-full w-full">
                    {/* Back Shape */}
                    <div className="absolute inset-0 bg-forest rounded-tl-[120px] rounded-br-[120px] transform rotate-3 translate-x-4 translate-y-4 opacity-10"></div>
                    
                    {/* Image */}
                    <div className="absolute inset-0 rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white/50">
                        <img 
                          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000" 
                          alt="Bali Tropical Atmosphere" 
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent mix-blend-multiply"></div>
                    </div>
                </div>

                {/* Floating Leaf Graphic (SVG) */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 text-forest drop-shadow-lg opacity-90"
                >
                   <svg viewBox="0 0 100 100" fill="currentColor">
                     <path d="M50 95 C 20 95 5 50 5 50 C 5 50 20 5 50 5 C 80 5 95 50 95 50 C 95 50 80 95 50 95 Z" />
                   </svg>
                </motion.div>
                
                 {/* Floating Label */}
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1 }}
                   className="absolute top-10 -left-6 bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-forest/5"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
                       </div>
                       <div>
                          <div className="text-[10px] uppercase tracking-wider text-charcoal/50 font-bold">{t.cardLabel}</div>
                          <div className="text-sm font-serif text-forest font-bold">{t.cardValue}</div>
                       </div>
                    </div>
                 </motion.div>
            </div>
        </motion.div>
      </div>
      
      {/* Decorative bottom leaf */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.1 }} 
        transition={{ delay: 1, duration: 2 }}
        className="absolute left-0 bottom-0 pointer-events-none mix-blend-multiply"
      >
        <svg width="400" height="400" viewBox="0 0 100 100" className="fill-forest">
           <path d="M50 100 C 20 100 0 50 0 50 C 0 50 20 0 50 0 C 80 0 100 50 100 50 C 100 50 80 100 50 100 Z" opacity="0.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;