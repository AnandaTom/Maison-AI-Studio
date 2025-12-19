import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const testimonials = [
  {
    stars: 5,
    author: "Lindsey",
    role: "CEO of Cosmic Palms",
    quote: "Maison IA Studio isn't just excellent — they're game-changers. From day one, they brought clarity, vision, and technical mastery I've never seen before. Every exchange moves the project forward ten times faster. Simple: if you're looking for someone reliable, brilliant, proactive, and genuinely invested in your success, Maison IA Studio is the best choice.",
  },
  {
    stars: 5,
    author: "Gabriel",
    role: "CEO of MidTouch Media",
    quote: "Maison IA Studio makes the extra effort to make things work. They will go the extra mile to solve your problems. As a business owner, it is extremely valuable.",
  }
];

const Counter = ({ value, className }: { value: string, className?: string }) => {
  return (
    <span className={className}>
      {value}
    </span>
  );
};

const SocialProof: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].socialProof;

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-forest/5"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Key Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 border-b border-forest/10 pb-16">
          {t.stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest mb-3">
                <Counter value={stat.val} />
              </div>
              <div className="text-sm md:text-base text-charcoal/70 font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((tr, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(45, 90, 74, 0.1)" }}
              className="p-6 md:p-10 bg-surface rounded-3xl border border-forest/5 shadow-sm transition-all duration-300 relative"
            >
              <div className="flex gap-1 text-terracotta mb-6">
                {[...Array(tr.stars)].map((_, starIndex) => <Star key={starIndex} size={18} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl md:text-2xl text-forest italic leading-relaxed mb-8">"{tr.quote}"</p>
              
              <div className="border-t border-forest/10 pt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-forest text-sm uppercase tracking-wider mb-0.5">{tr.author}</h4>
                  <div className="text-xs text-charcoal/50 font-medium">{tr.role}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest/40 italic font-serif">
                   {tr.author[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-forest/10 text-forest text-sm font-medium">
               <Award size={16} /> {t.trust.jobSuccess}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-forest/10 text-forest text-sm font-medium">
               <Star size={16} /> {t.trust.topRated}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-forest/10 text-forest text-sm font-medium">
               <img src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" className="w-4 h-4 object-contain" alt="n8n" /> 
               {t.trust.certified}
            </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-forest/10 text-forest text-sm font-medium">
               <CheckCircle size={16} /> {t.trust.maker}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;