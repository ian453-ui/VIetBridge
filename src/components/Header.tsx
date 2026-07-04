import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { navigationItems, languagesList, Language } from '../data';

interface HeaderProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
}

export default function Header({ currentLang, onChangeLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky white header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isHeaderActive = isScrolled || mobileMenuOpen;

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderActive
            ? 'bg-white border-b border-brand-blue/5 py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo - Premium & Minimalist */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            id="logo-link"
          >
            {/* Premium Gold & Black Double Arch Logo */}
            <div className="relative w-9 h-9 flex-shrink-0" id="logo-icon-container">
              <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Main Gold Arch */}
                <path d="M 20,95 L 38,95 C 45,50, 115,50, 122,95 L 140,95 C 130,30, 30,30, 20,95 Z" fill="#C59B27" />
                {/* Secondary Gold Arch Accent */}
                <path d="M 48,44 C 65,30, 95,30, 112,44 C 100,38, 60,38, 48,44 Z" fill="#D9B44A" opacity="0.9" />
                {/* Intersecting Dynamic Swoop - light/dark color transition */}
                <path d="M 38,95 C 55,72, 85,54, 150,53 C 115,55, 75,68, 57,95 Z" fill={isHeaderActive ? "#141517" : "#FAF9F6"} className="transition-all duration-300" />
              </svg>
            </div>
            <div className="flex flex-col leading-none" id="logo-text-container">
              <span className={`font-sans text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300 ${
                isHeaderActive ? 'text-brand-blue' : 'text-white'
              }`}>
                VietBridge
              </span>
              <span className="font-sans text-[8px] font-bold tracking-[0.42em] text-brand-orange uppercase mt-0.5">
                Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation - 8 items precisely as requested */}
          <nav className="hidden xl:flex items-center gap-6" id="desktop-nav">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-[11px] font-bold tracking-wider transition-colors duration-300 relative py-1 uppercase ${
                  isHeaderActive ? 'text-brand-blue/70 hover:text-brand-blue' : 'text-white/80 hover:text-white'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label[currentLang]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Section: Language switcher & CTA */}
          <div className="hidden lg:flex items-center gap-6" id="header-right-actions">
            
            {/* Elegant Minimal Language Selector */}
            <div className={`flex items-center gap-3 border-r transition-colors duration-300 pr-6 ${
              isHeaderActive ? 'border-brand-blue/10' : 'border-white/10'
            }`} id="desktop-lang-switcher">
              <Globe className={`w-3.5 h-3.5 transition-colors duration-300 ${
                isHeaderActive ? 'text-brand-blue/40' : 'text-white/50'
              }`} />
              <div className="flex items-center gap-2">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onChangeLang(lang.code)}
                    className={`text-[10px] font-bold tracking-wider uppercase transition-all duration-300 py-0.5 px-1.5 cursor-pointer ${
                      currentLang === lang.code
                        ? 'text-brand-orange border-b border-brand-orange font-extrabold'
                        : isHeaderActive
                          ? 'text-brand-blue/50 hover:text-brand-blue'
                          : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Strategic Connection Call-to-Action */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-brand-orange hover:bg-white hover:text-brand-blue transition-all duration-300 py-2.5 px-5 rounded-none shadow-sm cursor-pointer border border-brand-orange"
              id="cta-header"
            >
              Connect
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Actions: Language codes + Menu button */}
          <div className="flex lg:hidden items-center gap-4">
            
            {/* Quick Lang Switcher for mobile */}
            <div className={`flex items-center gap-1.5 border-r pr-4 transition-colors duration-300 ${
              isHeaderActive ? 'border-brand-blue/10' : 'border-white/10'
            }`} id="mobile-lang-switcher">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  className={`text-[9px] font-extrabold tracking-wider uppercase py-0.5 px-1.5 transition-all duration-300 cursor-pointer ${
                    currentLang === lang.code
                      ? 'text-brand-orange border-b border-brand-orange font-black'
                      : isHeaderActive
                        ? 'text-brand-blue/40 hover:text-brand-blue border-b border-transparent'
                        : 'text-white/50 hover:text-white border-b border-transparent'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            {/* Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 transition-colors duration-300 cursor-pointer ${
                isHeaderActive ? 'text-brand-blue hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Responsive Navigation Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[56px] bottom-0 z-40 bg-white md:hidden flex flex-col justify-between p-8 shadow-2xl h-[calc(100vh-56px)] overflow-y-auto"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-5 py-6">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-base font-extrabold tracking-widest text-brand-blue uppercase hover:text-brand-orange transition-colors py-2 border-b border-brand-blue/5"
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label[currentLang]}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pb-10 border-t border-brand-blue/10 pt-6"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center block text-xs font-bold uppercase tracking-widest text-white bg-brand-blue hover:bg-brand-orange transition-all py-3 px-6 cursor-pointer"
                id="mobile-cta-header"
              >
                Initiate Strategic Intake
              </button>
              
              <div className="mt-6 flex justify-between items-center text-[9px] tracking-wider text-brand-blue/40 uppercase font-bold">
                <span>VietBridge Group &copy; 2026</span>
                <span className="text-brand-orange">Trust · Connection · Opportunity</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
