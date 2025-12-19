import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe, Key, Coffee, ShieldCheck, Zap, Laptop, MessageSquare, MapPin } from 'lucide-react';
import { CAL_LINK } from '../constants';

const HotelMockup = () => (
  <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
    <img 
      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" 
      alt="Luxury Villa" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="absolute bottom-6 right-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-forest/5"
    >
      <div className="flex items-center gap-3 mb-2">
         <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-white">
            <MessageSquare size={14} />
         </div>
         <p className="text-xs font-bold text-forest uppercase tracking-wider">AI Concierge Online</p>
      </div>
      <p className="text-sm text-charcoal/80 font-medium">"Bonjour! I can help you with your booking, check-in times, or recommend the best surfing spots nearby."</p>
    </motion.div>
  </div>
);

interface HotelSolutionProps {
  content: any;
}

const HotelSolution: React.FC<HotelSolutionProps> = ({ content }) => {
  const icons = [
    <Globe size={20} />,
    <Laptop size={20} />,
    <Coffee size={20} />,
    <ShieldCheck size={20} />,
    <Zap size={20} />
  ];

  return (
    <div className="space-y-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          {content.tag}
        </div>
        <h3 className="font-serif text-3xl md:text-5xl text-forest mb-8">
          {content.headline}
        </h3>
        <p className="text-charcoal/80 text-xl leading-relaxed max-w-3xl mx-auto font-light">
          {content.subheadline}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h4 className="font-serif text-3xl text-forest flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest italic font-serif">H</span>
              {content.whatWeBuild.title}
            </h4>
            <div className="grid gap-6">
              {content.whatWeBuild.items.map((item: any, i: number) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-forest/5 flex items-center justify-center text-forest shrink-0 group-hover:bg-forest group-hover:text-cream transition-all duration-300 shadow-sm">
                    {icons[i]}
                  </div>
                  <div>
                    <h5 className="font-bold text-forest text-lg mb-1">{item.title}</h5>
                    <p className="text-charcoal/60 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <div className="text-center">
            <p className="text-forest font-medium text-sm uppercase tracking-widest max-w-sm px-6 leading-relaxed opacity-80 mb-2">
              Website & WhatsApp Integrated
            </p>
            <div className="h-1 w-20 bg-terracotta mx-auto rounded-full"></div>
          </div>
          
          <HotelMockup />
          
          <div className="flex gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
             <div className="text-xs font-black tracking-tighter uppercase border border-forest/20 px-3 py-1 rounded">Cloudbeds</div>
             <div className="text-xs font-black tracking-tighter uppercase border border-forest/20 px-3 py-1 rounded">Mews</div>
             <div className="text-xs font-black tracking-tighter uppercase border border-forest/20 px-3 py-1 rounded">Little Hotelier</div>
          </div>
        </motion.div>
      </div>

      {/* How It Works */}
      <div className="py-12 border-y border-forest/5">
        <div className="text-center mb-16">
          <h4 className="font-serif text-3xl text-forest">{content.howItWorks.title}</h4>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.howItWorks.steps.map((step: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-surface rounded-3xl border border-forest/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-forest text-cream rounded-full flex items-center justify-center font-serif font-bold shadow-lg mb-6 text-lg">
                {i + 1}
              </div>
              <h5 className="font-bold text-forest text-lg mb-3">{step.title}</h5>
              <p className="text-charcoal/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-forest to-[#1A3A30] rounded-[3.5rem] p-8 md:p-16 text-cream relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h4 className="font-serif text-3xl md:text-4xl mb-12 flex items-center gap-4">
            <TrendingUp size={32} className="text-terracotta" />
            {content.impact.title}
          </h4>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {content.impact.rows.map((row: any, i: number) => (
                <div key={i} className="flex items-center justify-between border-b border-cream/10 pb-4">
                  <span className="text-cream/70 text-lg font-light">{row.label}</span>
                  <span className="font-serif text-2xl font-bold text-sand">{row.val}</span>
                </div>
              ))}
              <div className="pt-6">
                <div className="bg-cream/5 border border-cream/10 rounded-2xl p-6 text-center">
                  <span className="text-cream/50 text-sm uppercase tracking-widest block mb-2">Value Add</span>
                  <span className="font-serif text-2xl md:text-3xl text-terracotta font-bold tracking-tight">
                    {content.impact.total}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-10">
              <div className="p-8 bg-cream/5 rounded-[2.5rem] border border-cream/10 backdrop-blur-sm text-center">
                <p className="text-cream/90 font-serif text-2xl italic leading-relaxed mb-4">
                  "Guests demand speed. AI delivers it."
                </p>
                <div className="flex justify-center gap-1 text-terracotta">
                   {[...Array(5)].map((_, i) => <ShieldCheck key={i} size={20} fill="currentColor" />)}
                </div>
              </div>
              
              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-terracotta text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#D4A574] transition-all shadow-2xl shadow-terracotta/30 hover:-translate-y-1"
              >
                {content.impact.cta}
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSolution;
