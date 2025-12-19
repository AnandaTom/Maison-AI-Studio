import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Hotel, Flower, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import RestaurantSolution from './RestaurantSolution';
import GenericIndustrySolution from './GenericIndustrySolution';
import HotelSolution from './HotelSolution';
import WellnessSolution from './WellnessSolution';

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState<'restaurants' | 'hotels' | 'wellness' | 'retail'>('restaurants');
  const { language } = useLanguage();
  const t = translations[language].solutions;

  const tabs = [
    { id: 'restaurants' as const, icon: <Coffee size={24} />, title: t.tabs.restaurants },
    { id: 'hotels' as const, icon: <Hotel size={24} />, title: t.tabs.hotels },
    { id: 'wellness' as const, icon: <Flower size={24} />, title: t.tabs.wellness },
    { id: 'retail' as const, icon: <ShoppingBag size={24} />, title: t.tabs.retail },
  ];

  const genericLabels = {
    solutionLabel: t.solutionLabel,
    whatWeBuild: t.whatWeBuild,
    seeHow: t.seeHow,
    howItWorksTitle: t.howItWorksTitle,
    expectedImpactTitle: t.expectedImpactTitle
  };

  return (
    <section id="solutions" className="py-24 bg-surface">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">{t.headline}</h2>
          <p className="text-charcoal/70 text-lg">{t.subheadline}</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 w-full sm:w-auto ${
                activeTab === tab.id 
                  ? 'bg-forest text-cream shadow-lg scale-105' 
                  : 'bg-white text-forest border border-forest/10 hover:bg-forest/5 hover:scale-105'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2rem] p-6 md:p-12 shadow-xl shadow-forest/5 border border-forest/5"
            >
              {activeTab === 'restaurants' && (
                <RestaurantSolution content={t.content.restaurants} />
              )}
              {activeTab === 'hotels' && (
                <HotelSolution content={t.content.hotels} />
              )}
              {activeTab === 'wellness' && (
                <WellnessSolution content={t.content.wellness} />
              )}
              {activeTab === 'retail' && (
                <GenericIndustrySolution 
                  industry={{
                    ...t.content[activeTab],
                    title: t.tabs[activeTab]
                  }}
                  labels={genericLabels}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustrySolutions;
