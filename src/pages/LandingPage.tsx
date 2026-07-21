import { TopBannerCountdown } from '../components/TopBannerCountdown';
import { HeroSection } from '../components/HeroSection';
import { PainPointsSection } from '../components/PainPointsSection';
import { TransitionBanner } from '../components/TransitionBanner';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { AnimatedCounters } from '../components/AnimatedCounters';
import { ComparisonTable } from '../components/ComparisonTable';
import { Testimonials } from '../components/Testimonials';
import { BonusSection } from '../components/BonusSection';
import { MainOfferCard } from '../components/MainOfferCard';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { SocialProofPopup } from '../components/SocialProofPopup';
import { ExitIntentModal } from '../components/ExitIntentModal';
import { MobileStickyCTA } from '../components/MobileStickyCTA';
import { MouseGlowBackground } from '../components/MouseGlowBackground';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-amber-400 selection:text-slate-950">
      {/* Ambient Mouse Tracking Light */}
      <MouseGlowBackground />

      {/* Sticky Countdown Header */}
      <TopBannerCountdown />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <PainPointsSection />
        <TransitionBanner />
        <FeaturesGrid />
        <AnimatedCounters />
        <ComparisonTable />
        <Testimonials />
        <BonusSection />
        <MainOfferCard />
        <GuaranteeSection />
        <FAQAccordion />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Conversion Overlays & Popups */}
      <SocialProofPopup />
      <ExitIntentModal />
      <MobileStickyCTA />
    </div>
  );
};
