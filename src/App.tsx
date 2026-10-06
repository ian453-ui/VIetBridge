import { useState, useEffect } from 'react';
import Header, { ActivePage } from './components/Header';
import Hero from './components/Hero';
import TwoEngines from './components/TwoEngines';
import EnterpriseEnablement from './components/EnterpriseEnablement';
import EducationEnablement from './components/EducationEnablement';
import FeaturedPrograms from './components/FeaturedPrograms';
import WhoWeAre from './components/WhoWeAre';
import WhyVietBridge from './components/WhyVietBridge';
import Leadership from './components/Leadership';
import EditorialQuote from './components/EditorialQuote';
import Stats from './components/Stats';
import InteractiveMap from './components/InteractiveMap';
import RecentEvents from './components/RecentEvents';
import Partners from './components/Partners';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import EnterprisePage from './components/EnterprisePage';
import EducationPage from './components/EducationPage';
import CasesPage from './components/CasesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import { Language } from './data';

// Helper to determine initial language with persistence and browser preference
const getInitialLang = (): Language => {
  try {
    const saved = localStorage.getItem('vietbridge_lang') as Language;
    if (saved && (saved === 'en' || saved === 'vi' || saved === 'zh')) {
      return saved;
    }
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('zh')) return 'zh';
    if (navLang.startsWith('vi')) return 'vi';
    // Default to Chinese since user communications and core market context are Chinese-first
    return 'zh';
  } catch (e) {
    return 'zh';
  }
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLang);
  const [activePage, setActivePage] = useState<ActivePage>('home');

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('vietbridge_lang', lang);
    } catch (e) {
      // LocalStorage might be restricted in some iframes
    }
  };

  // Keep html lang attribute in sync with selected language
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Handle URL Hash on load & back/forward navigation
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'enterprise-page') {
        setActivePage('enterprise');
      } else if (hash === 'education-page') {
        setActivePage('education');
      } else if (hash === 'cases-page' || hash === 'programs-page') {
        setActivePage('cases');
      } else if (hash === 'about-page') {
        setActivePage('about');
      } else if (hash === 'contact-page') {
        setActivePage('contact');
      } else if (hash === 'privacy-page') {
        setActivePage('privacy');
      } else if (hash === 'terms-page') {
        setActivePage('terms');
      } else {
        // If hash matches an anchor on the homepage, keep activePage as home and scroll
        setActivePage('home');
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              const offset = 80;
              const elementPosition = el.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page: ActivePage, sectionId?: string) => {
    setActivePage(page);
    if (page === 'home') {
      window.history.pushState(null, '', sectionId ? `#${sectionId.replace('#', '')}` : ' ');
    } else {
      window.location.hash = `${page}-page`;
    }

    if (sectionId) {
      setTimeout(() => {
        const cleanId = sectionId.replace('#', '');
        const element = document.getElementById(cleanId) || 
                        document.getElementById(`sol-track-${cleanId}`) || 
                        document.getElementById(`edu-track-${cleanId}`);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-cream text-brand-blue selection:bg-brand-orange selection:text-white min-h-screen flex flex-col justify-between" id="root-container">
      
      {/* Sticky & Scroll-transitioned Navigation Header */}
      <Header 
        currentLang={currentLang} 
        onChangeLang={handleLangChange} 
        activePage={activePage}
        onNavigate={navigateTo}
      />

      <main id="main-content-flow" className="relative flex-1">
        
        {/* VIEW 1: Dedicated Enterprise Enablement Page */}
        {activePage === 'enterprise' && (
          <EnterprisePage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 2: Dedicated Education Enablement Page */}
        {activePage === 'education' && (
          <EducationPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 3: Dedicated Case Studies Page */}
        {activePage === 'cases' && (
          <CasesPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 4: Dedicated About Us Page */}
        {activePage === 'about' && (
          <AboutPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 5: Dedicated Contact & Consultation Page */}
        {activePage === 'contact' && (
          <ContactPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 6: Privacy Policy */}
        {activePage === 'privacy' && (
          <PrivacyPolicy 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 7: Terms of Use */}
        {activePage === 'terms' && (
          <TermsOfUse 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 8: Primary Home Portal - Complete, Rich Panoramic Landing Page */}
        {activePage === 'home' && (
          <>
            {/* Section 1: Hero Cover Section with clear action paths */}
            <Hero 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            {/* Section 2: The Two Core Engines (Grand Symmetrical Presentation with direct entry points) */}
            <TwoEngines 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            {/* Section 3: Enterprise Enablement (5 Comprehensive Solution Tracks & Methodology) */}
            <EnterpriseEnablement currentLang={currentLang} />

            {/* Section 4: VietBridge Study / Education Enablement (6 Core Education Product Modules) */}
            <EducationEnablement 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            {/* Section 5: Representative Case Studies (With Filter Tabs & Detail Modal) */}
            <FeaturedPrograms currentLang={currentLang} />

            {/* Section 6: Who We Are (The Narrative Story) */}
            <WhoWeAre currentLang={currentLang} />

            {/* Editorial Single-Sentence Strategic Breakout Section */}
            <EditorialQuote currentLang={currentLang} />

            {/* Section 7: Why VietBridge (6 Core Institutional Advantages) */}
            <WhyVietBridge currentLang={currentLang} />

            {/* Section 8: Global Network & Leadership / Advisory Board */}
            <Leadership currentLang={currentLang} />

            {/* Supporting Section: High-Trust Counters & Institutional Scale */}
            <Stats currentLang={currentLang} />

            {/* Section 9: Interactive Connectivity Hubs (Ho Chi Minh City, Hanoi, Beijing) */}
            <InteractiveMap currentLang={currentLang} />

            {/* Section 10: Recent Summits & Bilateral Boards */}
            <RecentEvents currentLang={currentLang} />

            {/* Section 11: Ecosystem Partners (Accredited universities & sovereign boards) */}
            <Partners currentLang={currentLang} />

            {/* Section 12: Strategic Briefing Consultation Intake */}
            <Consultation currentLang={currentLang} />
          </>
        )}

      </main>

      {/* Corporate Compliance & Legal Footer */}
      <Footer 
        currentLang={currentLang} 
        onChangeLang={handleLangChange}
        onNavigate={navigateTo}
      />
    </div>
  );
}
