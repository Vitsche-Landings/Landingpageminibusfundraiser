import { useState, createContext, useContext } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { KPISection } from './components/KPISection';
import { InfoSection } from './components/InfoSection';
import { CampaignSection } from './components/CampaignSection';
import { MinibusSection } from './components/MinibusSection';
import { PartnerSection } from './components/PartnerSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function App() {
  const [language, setLanguage] = useState<Language>('de');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <KPISection />
        <InfoSection />
        <CampaignSection />
        <MinibusSection />
        <PartnerSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
