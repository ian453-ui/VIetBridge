import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../data';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const scrollToEcosystem = () => {
    const element = document.getElementById('ecosystem');
    if (element) {
      const offset = 80;
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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

  const headlines = {
    en: {
      line1: 'Connecting Vietnam.',
      line2: 'Creating Opportunities.'
    },
    vi: {
      line1: 'Kết nối Việt Nam.',
      line2: 'Kiến tạo cơ hội.'
    },
    zh: {
      line1: '连接越南。',
      line2: '共创机遇。'
    }
  };

  const subheadlines = {
    en: 'Building trusted academic, commercial, and strategic pathways between Vietnam and the global community.',
    vi: 'Thiết lập các hành lang giáo dục, thương mại và đối tác chiến lược tin cậy giữa Việt Nam và thế giới.',
    zh: '在越南与全球社会之间，筑牢值得信赖的教育、商业及战略合作走廊。'
  };

  const buttons = {
    en: { primary: 'Explore Solutions', secondary: 'Contact Us' },
    vi: { primary: 'Khám phá giải pháp', secondary: 'Liên hệ ngay' },
    zh: { primary: '探索解决方案', secondary: '联系我们' }
  };

  const currentHeadline = headlines[currentLang] || headlines['en'];
  const currentSubheadline = subheadlines[currentLang] || subheadlines['en'];
  const currentButtons = buttons[currentLang] || buttons['en'];

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:min-h-[105vh] flex flex-col lg:flex-row items-stretch overflow-hidden bg-[#070D19] text-white pt-24 lg:pt-0"
    >
      {/* Architectural Millimeter Grid for a bespoke premium look (Apple/Stripe style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Left Column: Deep Premium Cosmic Indigo background with text (50% width for balance) */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center relative z-10 px-8 sm:px-16 md:px-20 lg:px-24 xl:px-28 py-20 lg:py-0">
        
        <div className="max-w-3xl flex flex-col items-start space-y-10">
          {/* Subtle Category Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-brand-orange"></span>
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase">
              {currentLang === 'vi' ? 'TẬP ĐOÀN VIETBRIDGE' : currentLang === 'zh' ? 'VIETBRIDGE 集团' : 'VIETBRIDGE GROUP'}
            </span>
          </motion.div>

          {/* Restrained, high-end editorial headline (proportional sizing to fit screens) */}
          <motion.h1
            key={currentLang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.05] text-white"
            id="hero-main-title"
          >
            {currentHeadline.line1}
            <br />
            <span className="text-brand-orange font-serif italic font-light tracking-wide">
              {currentHeadline.line2}
            </span>
          </motion.h1>

          {/* Reduced, perfectly aligned, high-impact subheadline */}
          <motion.p
            key={`sub-${currentLang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-brand-cream/70 leading-relaxed max-w-2xl font-light"
            id="hero-description"
          >
            {currentSubheadline}
          </motion.p>

          {/* Sleek, high-density, compact action buttons (Apple/Stripe style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-4"
            id="hero-cta-buttons"
          >
            <button
              onClick={scrollToEcosystem}
              className="px-8 py-4 bg-brand-orange hover:bg-white hover:text-brand-blue text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer"
            >
              {currentButtons.primary}
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none border border-white/20 hover:border-white cursor-pointer"
            >
              {currentButtons.secondary}
            </button>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={scrollToEcosystem}
          className="hidden lg:flex items-center gap-4 group cursor-pointer absolute bottom-16 left-8 sm:left-16 md:left-20 lg:left-24 xl:left-28"
          id="hero-scroll-indicator"
        >
          <ArrowDown className="w-4 h-4 text-brand-cream/65 group-hover:text-brand-orange transition-colors animate-bounce" />
          <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase group-hover:text-brand-orange transition-colors">
            {currentLang === 'vi' ? 'Khám phá giải pháp' : currentLang === 'zh' ? '向下探索' : 'Explore solutions'}
          </span>
        </motion.button>
      </div>

      {/* Right Column: Borderless full-bleed editorial photograph (50% width for perfect symmetry) */}
      <div className="w-full lg:w-[50%] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          className="w-full h-[55vh] lg:h-full relative group"
          id="hero-cinema-card"
        >
          <img
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80"
            alt="Ho Chi Minh City modern skyline and Saigon River, symbolizing dynamic strategic growth and cross-border commercial corridors"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-[1600ms] ease-out"
          />
          
          {/* Subtle vignette/organic gradient to anchor the technical text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D19]/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Micro documentation tags to elevate authenticity */}
          <div className="absolute bottom-16 left-16 right-16 z-10 flex justify-between items-center text-[9px] font-mono tracking-widest text-white/70 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
              Bilateral Strategic Gateway
            </span>
            <span>Ho Chi Minh City Headquarters</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
