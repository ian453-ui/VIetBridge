import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Language } from '../data';

interface HeroProps {
  currentLang: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact', sectionId?: string) => void;
}

export default function Hero({ currentLang, onNavigate }: HeroProps) {
  const handleAction = (id: 'enterprise' | 'education' | 'cases' | 'contact') => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      return;
    }

    if (onNavigate) {
      onNavigate(id);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
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
      line1: 'AI-Powered Enablement.',
      line2: 'Across Vietnam & Asia.'
    },
    vi: {
      line1: 'Khai phóng bằng AI.',
      line2: 'Tại Việt Nam & Châu Á.'
    },
    zh: {
      line1: '用 AI 连接企业、教育',
      line2: '与跨境增长。'
    }
  };

  const subheadlines = {
    en: 'VietBridge Group helps enterprises, schools and institutions enter new markets, build digital capabilities, upgrade education systems and grow through AI-powered solutions.',
    vi: 'VietBridge Group đồng hành cùng doanh nghiệp, trường học và tổ chức thâm nhập thị trường, nâng cấp năng lực số, chuyển đổi giáo dục và tăng trưởng bằng giải pháp AI.',
    zh: '越桥集团帮助企业、院校与机构完成越南落地、数字化升级、教育转型与跨境合作，用 AI 打造更高效的增长与连接能力。'
  };

  const currentHeadline = headlines[currentLang] || headlines['en'];
  const currentSubheadline = subheadlines[currentLang] || subheadlines['en'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-[#070D19] text-white pt-20 lg:pt-16"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Left Column */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center relative z-10 px-8 sm:px-14 md:px-18 lg:px-20 xl:px-24 py-16 lg:py-24">
        
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          {/* Category Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-[1px] w-10 bg-brand-orange"></span>
            <span className="text-[10px] font-bold tracking-[0.35em] text-brand-orange uppercase font-mono">
              {currentLang === 'vi' 
                ? 'NỀN TẢNG KHAI PHÓNG AI DOANH NGHIỆP & GIÁO DỤC' 
                : currentLang === 'zh' 
                  ? 'AI 企业与教育赋能平台' 
                  : 'AI ENTERPRISE & EDUCATION ENABLEMENT'}
            </span>
          </motion.div>

          {/* Editorial headline */}
          <motion.h1
            key={currentLang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-[34px] font-sans font-extrabold tracking-tight leading-[1.28] text-white"
            id="hero-main-title"
          >
            {currentHeadline.line1}
            <br />
            <span className="text-brand-orange font-sans font-bold tracking-tight">
              {currentHeadline.line2}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            key={`sub-${currentLang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-cream/75 leading-relaxed font-light"
            id="hero-description"
          >
            {currentSubheadline}
          </motion.p>

          {/* 4 Action Buttons Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 w-full pt-2"
            id="hero-cta-buttons"
          >
            <button
              onClick={() => handleAction('enterprise')}
              className="px-6 py-3.5 bg-brand-orange hover:bg-white hover:text-brand-blue text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2 border border-brand-orange shadow-sm"
            >
              <span>{currentLang === 'zh' ? '查看企业赋能方案' : currentLang === 'vi' ? 'Giải pháp Doanh nghiệp' : 'Explore Enterprise Solutions'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleAction('education')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white hover:text-brand-blue text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2 border border-white/20"
            >
              <span>{currentLang === 'zh' ? '了解 VietBridge Study 教育方案' : currentLang === 'vi' ? 'Khám phá VietBridge Study' : 'Explore VietBridge Study'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleAction('cases')}
              className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-white/80 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none border border-white/15 cursor-pointer"
            >
              {currentLang === 'zh' ? '查看项目案例' : currentLang === 'vi' ? 'Dự án Tiêu biểu' : 'View Case Studies'}
            </button>

            <button
              onClick={() => handleAction('contact')}
              className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-white/80 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none border border-white/15 cursor-pointer"
            >
              {currentLang === 'zh' ? '联系越桥集团' : currentLang === 'vi' ? 'Liên hệ VietBridge' : 'Contact VietBridge'}
            </button>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => scrollTo('what-we-do')}
          className="hidden lg:flex items-center gap-3 group cursor-pointer mt-12"
          id="hero-scroll-indicator"
        >
          <ArrowDown className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
          <span className="text-[9px] font-mono tracking-widest text-brand-cream/60 uppercase group-hover:text-brand-orange transition-colors">
            {currentLang === 'vi' ? 'Khám phá hai động cơ tăng trưởng' : currentLang === 'zh' ? '探索两大核心产线' : 'Explore Two Engines for Growth'}
          </span>
        </motion.button>
      </div>

      {/* Right Column: Editorial photograph of Ho Chi Minh City skyline */}
      <div className="w-full lg:w-[50%] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          className="w-full h-[50vh] lg:h-full relative group"
          id="hero-cinema-card"
        >
          <img
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80"
            alt="Ho Chi Minh City skyline representing Vietnam and cross-border business and education enablement"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
            }}
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-[1600ms] ease-out"
          />
          
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D19]/70 via-transparent to-transparent pointer-events-none" />
          
          {/* Key service regions tag */}
          <div className="absolute bottom-10 left-10 right-10 z-10 flex justify-between items-center text-[9px] font-mono tracking-widest text-white/80 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              Vietnam & Asia Enablement Platform
            </span>
            <span>Key Service Regions: Ho Chi Minh City · Hanoi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
