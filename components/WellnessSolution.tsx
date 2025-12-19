import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Calendar, CreditCard, Bell, Users, RotateCcw, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { CAL_LINK } from '../constants';

const BookingMockup = () => (
  <div className="relative w-full max-w-[400px] aspect-[1/1] flex items-center justify-center">
     <div className="absolute inset-0 bg-sand/5 rounded-full animate-pulse"></div>
     <div className="relative z-10 w-full p-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-forest/5 p-6 space-y-4">
           <div className="flex items-center gap-3 border-b border-forest/5 pb-4">
              <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                 <Heart size={20} fill="currentColor" />
              </div>
              <div>
                 <p className="text-xs uppercase font-black tracking-widest text-charcoal/40">Yoga Studio AI</p>
                 <p className="font-serif font-bold text-forest">Confirming Session</p>
              </div>
           </div>
           
           <div className="space-y-3">
              <div className="bg-surface p-3 rounded-xl border border-forest/5">
                 <p className="text-xs text-charcoal/60 mb-1">Session Selected</p>
                 <p className="font-bold text-forest text-sm">Vinyasa Flow • 9:00 AM</p>
              </div>
              <div className="flex items-center justify-between bg-surface p-3 rounded-xl border border-forest/5">
                 <div>
                    <p className="text-xs text-charcoal/60 mb-1">Status</p>
                    <p className="font-bold text-terracotta text-sm">Awaiting Payment</p>
                 </div>
                 <CreditCard size={18} className="text-terracotta" />
              </div>
           </div>

           <button className="w-full py-3 bg-forest text-cream rounded-xl font-bold text-sm shadow-lg shadow-forest/20">
              Complete Payment (250K IDR)
           </button>
        </div>
     </div>
  </div>
);

interface WellnessSolutionProps {
  content: any;
}

const WellnessSolution: React.FC<WellnessSolutionProps> = ({ content }) => {
  const icons = [
    <MessageCircle size={20} />,
    <CreditCard size={20} />,
    <Bell size={20} />,
    <Users size={20} />,
    <RotateCcw size={20} />
  ];

  return (
    <div className="space-y-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-sand/10 text-sand text-xs font-bold uppercase tracking-wider rounded-full mb-6">
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
              <span className="w-10 h-10 rounded-full bg-sand/5 flex items-center justify-center text-sand italic font-serif">W</span>
              {content.whatWeBuild.title}
            </h4>
            <div className="grid gap-6">
              {content.whatWeBuild.items.map((item: any, i: number) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-forest/5 flex items-center justify-center text-sand shrink-0 group-hover:bg-sand group-hover:text-cream transition-all duration-300 shadow-sm">
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
            <p className="text-sand font-medium text-sm uppercase tracking-widest max-w-sm px-6 leading-relaxed opacity-80 mb-2">
              WhatsApp-First Booking Journey
            </p>
            <div className="h-1 w-20 bg-sand mx-auto rounded-full"></div>
          </div>
          
          <BookingMockup />
          
          <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
             <div className="p-4 bg-white rounded-2xl border border-forest/5 text-center shadow-sm">
                <div className="text-2xl font-serif text-forest font-bold mb-1">-50%</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-charcoal/40 leading-tight">No-Shows</div>
             </div>
             <div className="p-4 bg-white rounded-2xl border border-forest/5 text-center shadow-sm">
                <div className="text-2xl font-serif text-forest font-bold mb-1">+15h</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-charcoal/40 leading-tight">Saved/Week</div>
             </div>
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
              <div className="w-10 h-10 bg-sand text-cream rounded-full flex items-center justify-center font-serif font-bold shadow-lg mb-6 text-lg">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
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
                  <span className="text-cream/50 text-sm uppercase tracking-widest block mb-2">The Studio Result</span>
                  <span className="font-serif text-2xl md:text-3xl text-sand font-bold tracking-tight">
                    {content.impact.total}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-10">
              <div className="p-8 bg-cream/5 rounded-[2.5rem] border border-cream/10 backdrop-blur-sm text-center">
                <p className="text-cream/90 font-serif text-2xl italic leading-relaxed mb-4">
                  "Focus on the practice, not the schedule."
                </p>
                <div className="flex justify-center gap-2">
                   <div className="px-3 py-1 bg-sand/20 rounded-full text-[10px] font-black uppercase tracking-widest text-sand">Automated</div>
                   <div className="px-3 py-1 bg-terracotta/20 rounded-full text-[10px] font-black uppercase tracking-widest text-terracotta">Secured</div>
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

export default WellnessSolution;
