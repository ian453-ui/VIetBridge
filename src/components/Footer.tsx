import { useState } from 'react';
import { ArrowUp, Globe, MessageCircle, ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navigationItems, languagesList, Language } from '../data';

interface FooterProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function Footer({ currentLang, onChangeLang, onNavigate }: FooterProps) {
  const [showWeChatTooltip, setShowWeChatTooltip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNav = (id: string) => {
    if (onNavigate) {
      if (id === 'enterprise') {
        onNavigate('enterprise');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'education') {
        onNavigate('education');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'cases') {
        onNavigate('cases');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'about' || id === 'why-us' || id === 'partners') {
        onNavigate('about', id);
        return;
      }
      if (id === 'contact') {
        onNavigate('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'privacy') {
        onNavigate('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'terms') {
        onNavigate('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (id === 'hero') {
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    scrollToSection(id);
  };

  const scrollToSection = (id: string) => {
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

  const footDict = {
    slogan: {
      en: 'Empowering Enterprises, Modernizing Education, Connecting Nations.',
      vi: 'Khai mở Tiềm năng Doanh nghiệp, Hiện đại hóa Giáo dục, Kết nối Quốc gia.',
      zh: '赋能企业增长 · 革新教育未来 · 链接中越双向机遇'
    },
    sloganSubtitle: {
      en: 'The definitive bilateral gateway for AI enterprise enablement and smart educational transformation in Vietnam.',
      vi: 'Cổng kết nối song phương chuẩn mực về chuyển đổi số doanh nghiệp bằng AI và hiện đại hóa giáo dục tại Việt Nam.',
      zh: '中越双向企业智能化升级与教育数字化变革的一站式赋能门户与战略生态平台。'
    },
    aboutText: {
      en: 'VietBridge Group drives bilateral industrial vitality through twin strategic engines: Enterprise AI Enablement—delivering social media operations, executive training, and cross-border landing—and Education Enablement—deploying smart classrooms, LMS cloud platforms, and joint degree programs.',
      vi: 'VietBridge Group thúc đẩy động lực phát triển song phương qua hai động cơ chiến lược: Khai mở Năng lực Doanh nghiệp với AI—vận hành mạng xã hội, đào tạo quản trị, tư vấn thị trường—và Đổi mới Giáo dục—triển khai phòng học thông minh, nền tảng LMS và liên kết quốc tế.',
      zh: 'VietBridge Group 依托“企业赋能”与“教育赋能”双引擎战略，为出海及本土企业提供 AI 社媒代运营、高端商学培训与合规落地，并联合顶尖高校与硬件伙伴推进智慧教室、LMS 云平台及跨境联合办学。'
    },
    reportBadge: {
      en: 'INTERNATIONAL GOVERNANCE & ANNUAL REVIEW',
      vi: 'BÁO CÁO QUẢN TRỊ & TỔNG KẾT THƯỜNG NIÊN',
      zh: '国际管治审阅与年度战略综述'
    },
    reportYear: {
      en: 'VOL. VII — FISCAL YEAR 2026',
      vi: 'TẬP VII — NIÊN ĐỘ TÀI CHÍNH 2026',
      zh: '第七卷 · 2026 年度公报'
    },
    solutionsNav: {
      title: {
        en: 'Strategic Solutions',
        vi: 'Giải pháp Chiến lược',
        zh: '核心赋能板块'
      },
      items: [
        { label: { en: 'AI Social Media Operations', vi: 'Vận hành AI Social Media', zh: 'AI 社媒代运营与数字营销' }, id: 'enterprise' },
        { label: { en: 'Corporate Training & Compliance', vi: 'Đào tạo Doanh nghiệp & Tuân thủ', zh: '企业培训与合规实战' }, id: 'enterprise' },
        { label: { en: 'Vietnam Market Entry & Landing', vi: 'Tư vấn Bản địa hóa Thị trường', zh: '跨国企业越南落地咨询' }, id: 'enterprise' },
        { label: { en: 'VietBridge Study · Blackboard / BB LMS', vi: 'VietBridge Study · Blackboard / BB LMS', zh: 'VietBridge Study · Blackboard / BB 平台' }, id: 'education' },
        { label: { en: 'Radica Smart Classroom & STEM', vi: 'Lớp học Thông minh Radica & STEM', zh: 'Radica 智慧课堂与 STEM 教育方案' }, id: 'education' },
        { label: { en: 'Teacher Training & School Cooperation', vi: 'Đào tạo Giáo viên & Hợp tác Quốc tế', zh: '教师培训、院校合作与赴华留学' }, id: 'education' }
      ]
    },
    contactTitle: {
      en: 'Direct Desk & Regional Focus',
      vi: 'Đầu mối Liên hệ & Khu vực',
      zh: '直接联络窗口与服务范围'
    },
    complianceTitle: {
      en: 'Jurisdiction & Governance',
      vi: 'Đăng ký Pháp lý & Quản trị',
      zh: '多边合规与机构备案'
    },
    privacy: {
      en: 'Data Protection Charter',
      vi: 'Điều lệ Bảo vệ Dữ liệu',
      zh: '数据隐私保护宪章'
    },
    terms: {
      en: 'Regulatory Framework',
      vi: 'Khung Quy chế Quản trị',
      zh: '合规监管与准则'
    },
    disclaimer: {
      en: 'Legal Disclaimers',
      vi: 'Miễn trừ Trách nhiệm',
      zh: '免责及法务声明'
    },
    regulatoryNote: {
      en: 'This portal operates as the official public disclosure and strategic registry for VietBridge Group bilateral initiatives across Vietnam, Singapore, and China.',
      vi: 'Cổng thông tin này là kênh công bố chính thức và đăng ký sáng kiến chiến lược song phương của VietBridge Group tại Việt Nam, Singapore và Trung Quốc.',
      zh: '本平台系 VietBridge Group 面向越南、新加坡及大中华区双边产业合作之官方信息披露与战略对接窗口。'
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#050A14] text-white pt-24 pb-14 relative overflow-hidden border-t border-white/10"
    >
      {/* Editorial Watermark & Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Ambient Warm Golden Glow */}
      <div className="absolute -top-32 right-1/4 w-[38rem] h-[24rem] bg-[#C59B27]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[45rem] h-[20rem] bg-brand-orange/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* RUNNING HEADER: Annual Report Ending Header */}
        <div className="pb-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase" id="footer-annual-report-header">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange font-bold">{footDict.reportBadge[currentLang]}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{footDict.reportYear[currentLang]}</span>
            <span className="text-white/20">|</span>
            <span>INDEX NO. VBG-2026-ENBL</span>
          </div>
        </div>

        {/* PRIMARY BRAND SECTION: Large Logo & Editorial Slogan */}
        <div className="py-16 md:py-20 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="footer-brand-hero">
          
          {/* Large Logo and Identification */}
          <div className="lg:col-span-6 space-y-6" id="footer-large-logo-wrap">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-6 group focus:outline-none"
            >
              {/* Grand Gold & Obsidian Double Arch Icon */}
              <div className="relative w-16 h-12 md:w-20 md:h-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-105" id="logo-icon-footer-large">
                <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Primary Gold Arch */}
                  <path d="M 20,95 L 38,95 C 45,50, 115,50, 122,95 L 140,95 C 130,30, 30,30, 20,95 Z" fill="#C59B27" />
                  {/* Secondary Gold Highlight Arch */}
                  <path d="M 48,44 C 65,30, 95,30, 112,44 C 100,38, 60,38, 48,44 Z" fill="#D9B44A" opacity="0.9" />
                  {/* Intersecting Dynamic Obsidian Swoop */}
                  <path d="M 38,95 C 55,72, 85,54, 150,53 C 115,55, 75,68, 57,95 Z" fill="#050A14" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-2xl md:text-3xl lg:text-4xl font-black tracking-[0.2em] text-white uppercase group-hover:text-brand-orange transition-colors">
                  VietBridge
                </span>
                <span className="font-sans text-xs md:text-sm font-bold tracking-[0.55em] text-brand-orange uppercase mt-1">
                  Group
                </span>
                <span className="font-mono text-[9px] tracking-widest text-brand-cream/40 uppercase mt-1.5">
                  AI Enterprise & Education Enablement
                </span>
              </div>
            </a>

            {/* Short Company Description */}
            <p className="text-sm md:text-base text-brand-cream/75 font-light leading-relaxed max-w-xl pt-2">
              {footDict.aboutText[currentLang]}
            </p>
          </div>

          {/* Slogan with Annual Report Ending Callout */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:items-end lg:text-right h-full space-y-6" id="footer-slogan-card">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block mb-3">
                // STRATEGIC CONCLUDING COVENANT
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/95 leading-tight font-normal">
                &ldquo;{footDict.slogan[currentLang]}&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/55 font-light mt-4 max-w-md lg:ml-auto leading-relaxed">
                {footDict.sloganSubtitle[currentLang]}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap lg:justify-end items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
                id="footer-action-inquiry"
              >
                <span>{currentLang === 'vi' ? 'Kết Nối Chiến Lược' : currentLang === 'zh' ? '开启深度战略合作' : 'Initiate Strategic Inquiry'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* ELEGANT NAVIGATION & DIRECTORY GRID */}
        <div className="py-16 md:py-20 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14" id="footer-directory-section">
          
          {/* Column 1: Main Platform Navigation */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-nav">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                01 // {currentLang === 'vi' ? 'Danh Mục Nền Tảng' : currentLang === 'zh' ? '主干平台导引' : 'Platform Navigation'}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                    className="group text-xs text-brand-cream/70 hover:text-white transition-colors uppercase tracking-wider font-medium flex items-center gap-2.5"
                    id={`footer-main-nav-${item.id}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-3 group-hover:ml-0" />
                    {item.label[currentLang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Enablement Solutions */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-solutions">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                02 // {footDict.solutionsNav.title[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <ul className="space-y-3">
              {footDict.solutionsNav.items.map((sol, idx) => (
                <li key={idx}>
                  <a
                    href={`#${sol.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sol.id);
                    }}
                    className="group text-xs text-brand-cream/65 hover:text-brand-orange transition-colors uppercase tracking-wider font-light flex items-center gap-2"
                  >
                    <span className="text-[9px] font-mono text-white/25 group-hover:text-brand-orange/60">
                      //
                    </span>
                    {sol.label[currentLang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Desk Information */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-contact">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                03 // {footDict.contactTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block">OFFICIAL CONTACT EMAIL</span>
                <a
                  href="mailto:contact@vietbridgegroup.com"
                  className="text-sm font-mono font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 group break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  contact@vietbridgegroup.com
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block">EDUCATION BRAND</span>
                <p className="text-xs font-mono font-medium text-brand-cream/80">
                  VietBridge Study · AI Education Enablement
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-orange" />
                  REGIONAL FOCUS
                </span>
                <p className="text-xs text-brand-cream/65 font-light leading-relaxed">
                  Vietnam · China · Asia (Ho Chi Minh City · Hanoi · Cross-border Coordination)
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Global Registries */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-compliance">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                04 // {footDict.complianceTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <div className="space-y-3.5 text-xs text-brand-cream/65 font-light leading-relaxed">
              <div className="border-l border-white/15 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-0.5">VietBridge Group</span>
                <p className="text-[11px] text-brand-cream/70 leading-relaxed">
                  {currentLang === 'zh'
                    ? '立足越南、连接中国与全球合作伙伴的 AI 企业与教育赋能平台。'
                    : currentLang === 'vi'
                    ? 'Nền tảng khai mở năng lực doanh nghiệp và giáo dục ứng dụng AI đặt trụ sở tại Việt Nam.'
                    : 'A Vietnam-based AI-powered enterprise and education enablement platform connecting Vietnam, China and global partners.'}
                </p>
              </div>
              <div className="border-l border-white/15 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-0.5">Contact & Verification</span>
                <p className="font-mono text-[11px] text-[#C59B27]">
                  contact@vietbridgegroup.com
                </p>
              </div>
              <div className="pt-1 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>AI Governance & Sovereign Data Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* REGULATORY DISCLAIMER & LANGUAGE SWITCHER */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="footer-disclaimer-row">
          <div className="max-w-2xl text-[10px] font-serif italic text-brand-cream/40 leading-relaxed" id="regulatory-note-text">
            * {footDict.regulatoryNote[currentLang]}
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-3 shrink-0" id="footer-lang-switcher">
            <Globe className="w-3.5 h-3.5 text-white/40" />
            <div className="flex items-center gap-2">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 py-1.5 px-3 cursor-pointer border ${
                    currentLang === lang.code
                      ? 'text-[#C59B27] border-[#C59B27]/60 bg-[#C59B27]/10 font-bold'
                      : 'text-white/40 border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT, LEGAL LINKS & CONTACT CHANNELS */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom-row">
          
          {/* Copyright & Real Legal Pages */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[10px] text-brand-cream/45 uppercase tracking-widest text-center sm:text-left">
            <span>&copy; 2026 VietBridge Group. All rights reserved.</span>
            <div className="flex gap-3 items-center">
              <span className="hidden sm:inline text-white/10">·</span>
              <button 
                onClick={() => handleNav('privacy')} 
                className="hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 text-[10px] uppercase font-mono tracking-widest text-brand-cream/60"
              >
                {footDict.privacy[currentLang]}
              </button>
              <span className="text-white/10">·</span>
              <button 
                onClick={() => handleNav('terms')} 
                className="hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 text-[10px] uppercase font-mono tracking-widest text-brand-cream/60"
              >
                {footDict.terms[currentLang]}
              </button>
            </div>
          </div>

          {/* Verified Official Channels & Back to Top */}
          <div className="flex items-center gap-5" id="footer-socials-top">
            
            {/* Direct Channels */}
            <div className="flex items-center gap-3 relative" id="footer-minimal-social-icons">
              {/* Direct Mail */}
              <a
                href="mailto:contact@vietbridgegroup.com"
                className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5 text-[11px] font-mono"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden sm:inline">contact@vietbridgegroup.com</span>
              </a>

              {/* WeChat Tooltip */}
              <div className="relative">
                <button
                  onClick={() => setShowWeChatTooltip(!showWeChatTooltip)}
                  onMouseEnter={() => setShowWeChatTooltip(true)}
                  onMouseLeave={() => setShowWeChatTooltip(false)}
                  className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 cursor-pointer focus:outline-none flex items-center"
                  aria-label="WeChat Official Account"
                >
                  <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                </button>
                <AnimatePresence>
                  {showWeChatTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0C1222] border border-[#C59B27]/40 text-white text-[10px] py-1.5 px-3 shadow-xl z-30 font-mono tracking-wider uppercase whitespace-nowrap"
                    >
                      WeChat ID: VietBridgeGroup
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0C1222]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-9 h-9 border border-white/15 hover:border-[#C59B27] hover:bg-[#C59B27]/10 transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
              aria-label="Back to top"
              id="back-to-top"
            >
              <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
