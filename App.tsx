/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import IndustrySolutions from './components/IndustrySolutions';
import AdditionalServices from './components/AdditionalServices';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { LanguageProvider } from './contexts/LanguageContext';

// --- Main App ---

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="font-sans text-charcoal bg-cream selection:bg-terracotta selection:text-white">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <IndustrySolutions />
          <AdditionalServices />
          <CaseStudies />
          <TechStack />
          <About />
          <FinalCTA />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
};

export default App;