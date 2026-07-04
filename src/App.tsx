import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import EditorialQuote from './components/EditorialQuote';
import Stats from './components/Stats';
import Pillars from './components/Pillars';
import InteractiveMap from './components/InteractiveMap';
import FeaturedPrograms from './components/FeaturedPrograms';
import RecentEvents from './components/RecentEvents';
import Partners from './components/Partners';
import Leadership from './components/Leadership';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import { Language } from './data';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <div className="bg-brand-cream text-brand-blue selection:bg-brand-orange selection:text-white min-h-screen" id="root-container">
      {/* Sticky & Scroll-transitioned Navigation Header */}
      <Header currentLang={currentLang} onChangeLang={setCurrentLang} />

      <main id="main-content-flow" className="relative">
        
        {/* Section 1: Hero Cover Section */}
        <Hero currentLang={currentLang} />

        {/* Section 2: Who We Are (The Narrative Story) */}
        <WhoWeAre currentLang={currentLang} />

        {/* Editorial Single-Sentence Breakout Section */}
        <EditorialQuote currentLang={currentLang} />

        {/* Supporting Section: High-Trust Counters & Institutional Scale */}
        <Stats currentLang={currentLang} />

        {/* Section 3: Our Ecosystem (Three strategic verticals) */}
        <Pillars currentLang={currentLang} />

        {/* Supporting Section: SVG Interactive Connectivity Hubs */}
        <InteractiveMap currentLang={currentLang} />

        {/* Section 4: Featured Programs (Active Academics & Industry Talent Pipelines) */}
        <FeaturedPrograms currentLang={currentLang} />

        {/* Section 5: Recent Events (Curated Summits & Bilateral Boards) */}
        <RecentEvents currentLang={currentLang} />

        {/* Section 6: Partners (Accredited universities & sovereign boards) */}
        <Partners currentLang={currentLang} />

        {/* Supporting Section: High-Trust Executive Advisors */}
        <Leadership currentLang={currentLang} />

        {/* Section 7: Contact (Strategic briefing intake form) */}
        <Consultation currentLang={currentLang} />
        
      </main>

      {/* Corporate Compliance & Legal Footer */}
      <Footer currentLang={currentLang} onChangeLang={setCurrentLang} />
    </div>
  );
}
