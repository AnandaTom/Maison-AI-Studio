import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Smartphone, MessageSquare, LayoutGrid, MapPin, BarChart3, Globe } from 'lucide-react';
import { CAL_LINK } from '../constants';

const PartnerLogoStrip = () => (
  <div className="w-full max-w-[400px] mx-auto py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
    <img 
      src="https://framerusercontent.com/images/NBem7yZtFuHaMOV4HXqEM26fmNw.png" 
      alt="WhatsApp Partner Logos" 
      className="w-full h-auto object-contain"
    />
  </div>
);

interface RestaurantSolutionProps {
  content: any;
}

const RestaurantSolution: React.FC<RestaurantSolutionProps> = ({ content }) => {
  const icons = [
    <MessageSquare size={20} />,
    <LayoutGrid size={20} />,
    <Smartphone size={20} />,
    <BarChart3 size={20} />,
    <Globe size={20} />
  ];

  return (
    <div className="space-y-24">
      {/* Intro Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          {content.tag}
        </div>
        <h3 className="font-serif text-3xl md:text-5xl text-forest mb-8">
          {content.headline}
        </h3>
        <p className="text-charcoal/80 text-xl leading-relaxed max-w-3xl mx-auto font-light">
          {content.subheadline}
        </p>
      </div>

      {/* Main Feature / Video Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h4 className="font-serif text-3xl text-forest flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest italic font-serif">A</span>
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
          className="flex flex-col items-center gap-8"
        >
          <p className="text-forest font-medium text-center text-sm uppercase tracking-widest max-w-sm px-6 leading-relaxed opacity-80">
            {content.videoLabel}
          </p>
          <div className="aspect-[720/900] w-full max-w-[480px] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(45,90,74,0.25)] bg-surface border border-forest/10 flex justify-center items-center relative group">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover scale-[1.02] transform-gpu group-hover:scale-105 transition-transform duration-1000"
            >
              <source src="https://res.cloudinary.com/dn5dnstod/video/upload/v1766072430/Design_sans_titre_lp26eu.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent"></div>
          </div>
          <PartnerLogoStrip />
        </motion.div>
      </div>

      {/* How It Works Section */}
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
              <div className="w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-serif font-bold shadow-lg mb-6 text-lg">
                {i + 1}
              </div>
              <h5 className="font-bold text-forest text-lg mb-3">{step.title}</h5>
              <p className="text-charcoal/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-br from-forest to-[#1A3A30] rounded-[3.5rem] p-8 md:p-16 text-cream relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        
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
                  <span className="text-cream/50 text-sm uppercase tracking-widest block mb-2">Total Estimated Profit Increase</span>
                  <span className="font-serif text-3xl md:text-4xl text-terracotta font-bold tracking-tight">
                    {content.impact.total}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-10">
              <div className="p-8 bg-cream/5 rounded-[2.5rem] border border-cream/10 backdrop-blur-sm relative group">
                <div className="absolute -inset-px bg-gradient-to-br from-terracotta/50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-cream/90 font-serif text-2xl italic leading-relaxed text-center relative z-10">
                  "Stop losing money to platforms. Own your customers, own your data, and maximize your margins with AI."
                </p>
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

export default RestaurantSolution;