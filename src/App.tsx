import { useState, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { PrivacyModal, type LegalDocumentType } from './components/PrivacyModal';
import { HeroSection } from './sections/HeroSection';
import { ProblemsSection } from './sections/ProblemsSection';
import { ServicesSection } from './sections/ServicesSection';
import { LocalPresenceSection } from './sections/LocalPresenceSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { DifferentialsSection } from './sections/DifferentialsSection';
import { ConversionSection } from './sections/ConversionSection';

export default function App() {
  const [preselectedObjective, setPreselectedObjective] = useState<string>('');
  const [legalDocument, setLegalDocument] = useState<LegalDocumentType>(null);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectServiceObjective = useCallback(
    (objective: string) => {
      setPreselectedObjective(objective);
      scrollToContact();
    },
    [scrollToContact]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050505] text-white flex flex-col">
        <Header onNavigateToContact={scrollToContact} />

        <main className="flex-1">
          <HeroSection onPrimaryCtaClick={scrollToContact} />
          <ProblemsSection />
          <ServicesSection onSelectServiceObjective={handleSelectServiceObjective} />
          <LocalPresenceSection
            onSelectLocalPresence={() =>
              handleSelectServiceObjective('Quero melhorar minha presença no Google.')
            }
          />
          <HowItWorksSection />
          <DifferentialsSection onNavigateToContact={scrollToContact} />
          <ConversionSection preselectedObjective={preselectedObjective} />
        </main>

        <Footer onOpenLegal={setLegalDocument} />
        <WhatsAppFloat />
        <PrivacyModal
          documentType={legalDocument}
          onClose={() => setLegalDocument(null)}
        />
      </div>
    </MotionConfig>
  );
}
