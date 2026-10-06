import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ArrowUpRight, ChevronDown } from 'lucide-react';
import { navigationItems, languagesList, Language } from '../data';

export type ActivePage = 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms';

interface HeaderProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage, sectionId?: string) => void;
}

export default function Header({ currentLang, onChangeLang, activePage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  const isHeaderActive = isScrolled || mobileMenuOpen || activePage !== 'home';

  const handleNavClick = (itemId: string) => {
    setMobileMenuOpen(false);
    setHoveredItem(null);

    // If on home page, scroll directly to the section
    if (activePage === 'home') {
      if (itemId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(itemId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        return;
      }
    }

    // If on a dedicated subpage, navigate back to home and scroll to that section
    onNavigate('home', itemId);
  };

  const handleSubItemClick = (parentItemId: string, subId: string) => {
    setMobileMenuOpen(false);
    setHoveredItem(null);
    if (activePage === 'home') {
      const element = document.getElementById(subId) || document.getElementById(parentItemId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        return;
      }
    }
    if (parentItemId === 'enterprise') {
      onNavigate('enterprise', subId);
    } else if (parentItemId === 'education') {
      onNavigate('education', subId);
    }
  };

  const isItemActive = (id: string) => {
    if (id === 'hero' && activePage === 'home') return true;
    if (id === 'enterprise' && activePage === 'enterprise') return true;
    if (id === 'education' && activePage === 'education') return true;
    if (id === 'cases' && activePage === 'cases') return true;
    if ((id === 'about' || id === 'why-us' || id === 'partners') && activePage === 'about') return true;
    if (id === 'contact' && activePage === 'contact') return true;
    return false;
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderActive
            ? 'bg-white/95 border-b border-brand-blue/10 py-3 shadow-sm backdrop-blur-md'
            : 'bg-[#070D19]/90 border-b border-white/10 py-3.5 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            id="logo-link"
          >
            {/* Premium Gold & Black Double Arch Logo */}
            <div className="relative w-8 h-8 flex-shrink-0" id="logo-icon-container">
              <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20,95 L 38,95 C 45,50, 115,50, 122,95 L 140,95 C 130,30, 30,30, 20,95 Z" fill="#C59B27" />
                <path d="M 48,44 C 65,30, 95,30, 112,44 C 100,38, 60,38, 48,44 Z" fill="#D9B44A" opacity="0.9" />
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
                {currentLang === 'zh' ? '越桥集团' : 'Group'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Concise, key menus only, never wraps */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" id="desktop-nav">
            {navigationItems.map((item) => {
              const active = isItemActive(item.id);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.id}
                  className="relative py-2 group"
                  onMouseEnter={() => hasChildren && setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`text-xs tracking-wider transition-all duration-300 relative py-1 uppercase whitespace-nowrap cursor-pointer inline-flex items-center gap-1 ${
                      active
                        ? 'text-brand-orange font-black'
                        : isHeaderActive
                          ? 'text-brand-blue/80 hover:text-brand-blue font-bold'
                          : 'text-white/85 hover:text-white font-bold'
                    }`}
                    id={`nav-item-${item.id}`}
                  >
                    {item.label[currentLang]}
                    {hasChildren && (
                      <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                    
                    {/* Active Indicator Underline */}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"></span>
                    )}
                  </a>

                  {/* Floating Hover Dropdown Menu */}
                  {hasChildren && (
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 min-w-[250px]"
                        >
                          <div className="bg-white shadow-2xl border border-brand-blue/10 py-2.5 px-1.5">
                            <div className="text-[9px] font-mono tracking-widest text-brand-orange font-bold uppercase px-3 py-1 border-b border-brand-blue/5 mb-1 flex items-center justify-between">
                              <span>
                                {item.id === 'enterprise' 
                                  ? (currentLang === 'zh' ? 'AI 企业赋能业务矩阵' : currentLang === 'vi' ? 'Trụ cột Doanh nghiệp' : 'AI Enterprise Modules')
                                  : (currentLang === 'zh' ? 'VietBridge Study｜AI 教育赋能' : currentLang === 'vi' ? 'VietBridge Study · Giải pháp Giáo dục' : 'VietBridge Study Portfolio')}
                              </span>
                              <span className="text-[8px] bg-brand-orange/10 text-brand-orange px-1.5 py-0.2">
                                {item.children?.length}
                              </span>
                            </div>
                            {item.children?.map((sub) => (
                              <a
                                key={sub.id}
                                href={sub.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSubItemClick(item.id, sub.id);
                                }}
                                className="block px-3 py-1.5 text-xs text-brand-blue/75 hover:text-brand-orange hover:bg-brand-cream/60 transition-colors cursor-pointer"
                              >
                                {sub.label[currentLang]}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Section: Language switcher & CTA */}
          <div className="hidden md:flex items-center gap-4 xl:gap-5 shrink-0" id="header-right-actions">
            
            {/* Minimal Language Selector */}
            <div className={`flex items-center gap-2 border-r transition-colors duration-300 pr-4 ${
              isHeaderActive ? 'border-brand-blue/15' : 'border-white/20'
            }`} id="desktop-lang-switcher">
              <Globe className={`w-3.5 h-3.5 transition-colors duration-300 ${
                isHeaderActive ? 'text-brand-blue/50' : 'text-white/60'
              }`} />
              <div className="flex items-center gap-1">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onChangeLang(lang.code)}
                    className={`text-[10px] font-bold tracking-wider uppercase transition-all duration-300 py-0.5 px-1.5 cursor-pointer ${
                      currentLang === lang.code
                        ? 'text-brand-orange border-b-2 border-brand-orange font-extrabold'
                        : isHeaderActive
                          ? 'text-brand-blue/60 hover:text-brand-blue'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {lang.code === 'zh' ? '中' : lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Strategic Connection Call-to-Action */}
            <button
              onClick={() => handleNavClick('contact')}
              className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-blue transition-all duration-300 py-2 px-4 rounded-none shadow-sm cursor-pointer whitespace-nowrap"
              id="cta-header"
            >
              {currentLang === 'zh' ? '联系合作' : currentLang === 'vi' ? 'Liên hệ' : 'Contact'}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Actions: Language codes + Menu button */}
          <div className="flex lg:hidden items-center gap-3">
            
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[56px] bottom-0 z-40 bg-white flex flex-col justify-between p-8 shadow-2xl h-[calc(100vh-56px)] overflow-y-auto"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4 py-4">
              {navigationItems.map((item, index) => {
                const active = isItemActive(item.id);
                return (
                  <div key={item.id} className="border-b border-brand-blue/5 pb-2">
                    <div className="flex items-center justify-between">
                      <motion.a
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className={`text-sm font-extrabold tracking-widest uppercase transition-colors py-1 block cursor-pointer ${
                          active ? 'text-brand-orange' : 'text-brand-blue hover:text-brand-orange'
                        }`}
                        id={`mobile-nav-item-${item.id}`}
                      >
                        {item.label[currentLang]}
                      </motion.a>
                    </div>
                    {item.children && (
                      <div className="pl-3 pt-1.5 space-y-1">
                        {item.children.map((sub) => (
                          <a
                            key={sub.id}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubItemClick(item.id, sub.id);
                            }}
                            className="text-xs text-brand-blue/65 hover:text-brand-orange block py-1 cursor-pointer transition-colors"
                          >
                            • {sub.label[currentLang]}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pb-8 border-t border-brand-blue/10 pt-4"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('contact');
                }}
                className="w-full text-center block text-xs font-bold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-blue transition-all py-3 px-6 cursor-pointer"
                id="mobile-cta-header"
              >
                {currentLang === 'zh' ? '开启战略合作' : currentLang === 'vi' ? 'Kết nối Hợp tác' : 'Start Strategic Consultation'}
              </button>
              
              <div className="mt-4 flex justify-between items-center text-[9px] tracking-wider text-brand-blue/40 uppercase font-bold">
                <span>VietBridge Group &copy; 2026</span>
                <span className="text-brand-orange">AI · Enterprise · Education</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
