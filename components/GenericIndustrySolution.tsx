import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { CAL_LINK } from '../constants';

interface GenericIndustrySolutionProps {
  industry: any;
  labels: {
    solutionLabel: string;
    whatWeBuild: string;
    seeHow: string;
    howItWorksTitle: string;
    expectedImpactTitle: string;
  };
}

const GenericIndustrySolution: React.FC<GenericIndustrySolutionProps> = ({ industry, labels }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <div className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            {industry.title} {labels.solutionLabel}
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-forest mb-6 leading-tight">
            {industry.headline}
          </h3>
          <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
            {industry.description || industry.subheadline}
          </p>
          
          <div className="space-y-4 mb-8">
            {industry.impact && Array.isArray(industry.impact) && industry.impact.map((impact: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-sand/20 flex items-center justify-center text-forest/80 shrink-0">
                   <CheckCircle2 size={14} />
                 </div>
                 <span className="font-medium text-forest">{impact}</span>
              </div>
            ))}
          </div>

          <a 
            href={CAL_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-forest text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-forest/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {industry.ctaLabel || labels.seeHow} <ArrowRight size={16} />
          </a>
        </div>

        <div className="bg-surface rounded-2xl p-6 md:p-8 border border-forest/5">
           <h4 className="font-serif text-xl text-forest mb-6">{labels.whatWeBuild}</h4>
           <div className="grid gap-6">
              {industry.features.map((feature: any, i: number) => {
                 const colors = ['text-forest', 'text-terracotta', 'text-sand'];
                 const iconColor = colors[i % 3];
                 
                 return (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 ${iconColor}`}>
                      {i === 0 ? <Zap size={20} /> : <div className={`w-2 h-2 rounded-full ${i % 3 === 1 ? 'bg-terracotta' : i % 3 === 2 ? 'bg-sand' : 'bg-forest'}`} />}
                    </div>
                    <div>
                      <h5 className="font-bold text-forest text-sm mb-1">{feature.title}</h5>
                      <p className="text-base text-charcoal/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>
      </div>
      
      {industry.howItWorks && (
        <div className="mb-16 border-t border-forest/5 pt-12">
           <h3 className="font-serif text-2xl text-forest mb-8 text-center">{labels.howItWorksTitle}</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.howItWorks.map((step: any, i: number) => (
                <div key={i} className="relative p-6 bg-surface rounded-2xl border border-forest/5">
                   <div className="absolute -top-4 -left-4 w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-serif font-bold shadow-md">
                     {i + 1}
                   </div>
                   <h4 className="font-bold text-forest mt-2 mb-2">{step.title}</h4>
                   <p className="text-sm text-charcoal/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      )}

      {industry.expectedImpact && (
         <div className="bg-gradient-to-br from-forest/5 to-transparent rounded-2xl p-8 border border-forest/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="font-serif text-2xl text-forest mb-8 flex items-center gap-3">
               <TrendingUp size={24} className="text-terracotta" />
               {labels.expectedImpactTitle}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="space-y-4">
                  {industry.expectedImpact.rows.map((row: any, i: number) => (
                     <div key={i} className="flex items-center justify-between border-b border-forest/5 pb-2 last:border-0">
                        <span className="text-charcoal/70 font-medium">{row.label}</span>
                        <span className="font-bold text-forest text-lg">{row.val}</span>
                     </div>
                  ))}
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-forest/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 text-terracotta">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-forest font-medium italic leading-relaxed">
                    "{industry.expectedImpact.result}"
                  </p>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default GenericIndustrySolution;