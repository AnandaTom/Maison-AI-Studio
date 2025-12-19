import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 bg-surface overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="order-2 lg:order-1">
          <h2 className="font-serif text-4xl lg:text-5xl text-forest mb-8">{t.headline}</h2>
          <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed mb-10">
            <p>
              {t.p1}
            </p>
            <p>
              {t.p2}
            </p>
            
            <ul className="space-y-4 pt-4">
              {t.list.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>
                  <span className="font-medium text-forest">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="italic text-base opacity-80 pt-4">
              {t.p3}
            </p>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2 flex justify-center items-center">
           {/* Decorative Back Glow */}
           <div className="absolute inset-0 bg-terracotta/10 rounded-full blur-3xl scale-125 -z-10"></div>
           
           <div className="flex gap-6 relative z-10">
               {/* Team Member 1 - Mathieu */}
               <motion.div 
                 whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                 transition={{ duration: 0.5 }}
                 className="relative w-44 sm:w-52 aspect-[3/4] bg-cream rounded-2xl overflow-hidden shadow-xl border-2 border-white transform -rotate-3 mt-12"
               >
                   <img 
                     src="https://image.noelshack.com/fichiers/2025/51/2/1765905201-mathieu.jpg" 
                     alt="Mathieu"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-forest/95 to-transparent pt-12">
                      <p className="text-white font-serif text-lg font-medium leading-none mb-1">Mathieu</p>
                      <p className="text-white/80 text-[10px] uppercase tracking-wider font-medium">CEO</p>
                   </div>
               </motion.div>

               {/* Team Member 2 - Tom */}
               <motion.div 
                 whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                 transition={{ duration: 0.5 }}
                 className="relative w-44 sm:w-52 aspect-[3/4] bg-cream rounded-2xl overflow-hidden shadow-xl border-2 border-white transform rotate-2 mb-12"
               >
                   <img 
                     src="https://image.noelshack.com/fichiers/2025/51/2/1765905756-moi-improved.jpg" 
                     alt="Tom"
                     className="w-full h-full object-cover"
                   />
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-forest/95 to-transparent pt-12">
                      <p className="text-white font-serif text-lg font-medium leading-none mb-1">Tom</p>
                      <p className="text-white/80 text-[10px] uppercase tracking-wider font-medium">CTO</p>
                   </div>
               </motion.div>
           </div>
           
           {/* Map Pin Badge */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-forest/10 flex items-center gap-2 z-30"
           >
               <MapPin size={16} className="text-terracotta" />
               <span className="text-xs font-bold text-forest uppercase tracking-wider">Bali, Indonesia</span>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;