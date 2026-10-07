import { useState } from 'react';
import { ArrowUp, Globe, MessageCircle, ArrowUpRight, Mail, MapPin } from 'lucide-react';
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
      en: 'Empowering Enterprises, Modernizing Education, Connecting Markets.',
      vi: 'Khai mở Tiềm năng Doanh nghiệp, Hiện đại hóa Giáo dục, Kết nối Thị trường.',
      zh: '赋能企业升级 · 推动教育数字化 · 连接中越合作需求'
    },
    sloganSubtitle: {
      en: 'An AI-powered enterprise and education enablement platform focused on Vietnam and China cross-border needs.',
      vi: 'Nền tảng khai phóng doanh nghiệp bằng AI và chuyển đổi số giáo dục phục vụ nhu cầu kết nối Việt - Trung.',
      zh: '聚焦越南、中国及亚洲重点服务市场的 AI 企业与教育赋能服务平台。'
    },
    aboutText: {
      en: 'VietBridge Group operates through two core business lines: AI Enterprise Enablement—supporting social media operations, corporate training, and Vietnam market entry—and VietBridge Study (AI Education Enablement)—introducing Blackboard / BB LMS, Radica Smart Classroom, and STEM/AI education solutions.',
      vi: 'VietBridge Group hoạt động qua hai mảng chính: Khai phóng Doanh nghiệp bằng AI—vận hành mạng xã hội, đào tạo quản trị, tư vấn thị trường—và VietBridge Study (Khai phóng Giáo dục)—giới thiệu nền tảng LMS Blackboard / BB, lớp học thông minh Radica và giải pháp STEM/AI.',
      zh: 'VietBridge Group 依托“AI 企业赋能”与“VietBridge Study 教育赋能”两大产线，为企业提供 AI 社媒代运营、管理实务培训与市场进入咨询，并面向学校与教育机构引入 Blackboard / BB 学习平台、Radica 智慧课堂与 STEM/AI 教育方案。'
    },
    topBarLeft: {
      en: 'VIETBRIDGE GROUP · AI ENTERPRISE & EDUCATION ENABLEMENT',
      vi: 'VIETBRIDGE GROUP · KHAI PHÓNG DOANH NGHIỆP & GIÁO DỤC BẰNG AI',
      zh: '越桥集团 · AI 企业赋能与 VietBridge Study 教育赋能'
    },
    topBarRight: {
      en: 'KEY SERVICE REGIONS: HO CHI MINH CITY · HANOI · SUPPORTED CROSS-BORDER MARKETS',
      vi: 'KHU VỰC DỊCH VỤ TRỌNG ĐIỂM: TP. HỒ CHÍ MINH · HÀ NỘI · THỊ TRƯỜNG HỖ TRỢ',
      zh: '重点服务地区：胡志明市 · 河内 ｜ 可支持的市场：中越跨境业务协同'
    },
    solutionsNav: {
      title: {
        en: 'Core Business Lines',
        vi: 'Giải pháp Trọng tâm',
        zh: '核心业务板块'
      },
      items: [
        { label: { en: 'AI Social Media Operations', vi: 'Vận hành AI Social Media', zh: 'AI 社媒代运营与数字营销' }, id: 'enterprise', href: '/enterprise-enablement' },
        { label: { en: 'Corporate Training & Seminars', vi: 'Đào tạo Doanh nghiệp & Hội thảo', zh: '企业培训与经营实务研讨' }, id: 'enterprise', href: '/enterprise-enablement' },
        { label: { en: 'Vietnam Market Entry Consulting', vi: 'Tư vấn Thâm nhập Thị trường', zh: '跨国企业越南落地咨询' }, id: 'enterprise', href: '/enterprise-enablement' },
        { label: { en: 'VietBridge Study · Blackboard / BB LMS', vi: 'VietBridge Study · Blackboard / BB LMS', zh: 'VietBridge Study · Blackboard / BB 平台' }, id: 'education', href: '/education-enablement' },
        { label: { en: 'Radica Smart Classroom & STEM', vi: 'Lớp học Thông minh Radica & STEM', zh: 'Radica 智慧课堂与 STEM 教育方案' }, id: 'education', href: '/education-enablement' },
        { label: { en: 'Teacher Training & School Cooperation', vi: 'Đào tạo Giáo viên & Hợp tác Trường học', zh: '教师培训、院校合作与赴华留学' }, id: 'education', href: '/education-enablement' }
      ]
    },
    contactTitle: {
      en: 'Direct Contact & Service Coverage',
      vi: 'Liên hệ & Khu vực Dịch vụ',
      zh: '直接联络与服务范围'
    },
    infoTitle: {
      en: 'Platform & Service Notes',
      vi: 'Thông tin Nền tảng & Dịch vụ',
      zh: '平台定位与服务说明'
    },
    privacy: {
      en: 'Privacy Policy',
      vi: 'Chính Sách Bảo Mật',
      zh: '隐私政策'
    },
    terms: {
      en: 'Terms of Use',
      vi: 'Điều Khoản Sử Dụng',
      zh: '使用条款'
    },
    serviceNote: {
      en: 'This website introduces VietBridge Group’s AI enterprise and education enablement service lines, solution portfolios, and planned project directions across our key service regions and supported markets.',
      vi: 'Trang thông tin này giới thiệu các mảng dịch vụ khai phóng doanh nghiệp và giáo dục bằng AI, danh mục giải pháp và định hướng dự án của VietBridge Group tại các khu vực dịch vụ trọng điểm.',
      zh: '本网站用于介绍越桥集团在 AI 企业赋能与 VietBridge Study 教育赋能领域的业务方向、产品组合及项目策划，具体服务范围以实际业务沟通与协议为准。'
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#050A14] text-white pt-24 pb-14 relative overflow-hidden border-t border-white/10"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Ambient Warm Golden Glow */}
      <div className="absolute -top-32 right-1/4 w-[38rem] h-[24rem] bg-[#C59B27]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[45rem] h-[20rem] bg-brand-orange/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* TOP SERVICE HEADER */}
        <div className="pb-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-brand-cream/50 uppercase" id="footer-service-header">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-orange font-bold">{footDict.topBarLeft[currentLang]}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{footDict.topBarRight[currentLang]}</span>
          </div>
        </div>

        {/* PRIMARY BRAND SECTION: Large Logo & Slogan */}
        <div className="py-16 md:py-20 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="footer-brand-hero">
          
          {/* Large Logo and Identification */}
          <div className="lg:col-span-6 space-y-6" id="footer-large-logo-wrap">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('hero');
              }}
              className="inline-flex items-center gap-6 group focus:outline-none"
            >
              {/* Gold & Obsidian Double Arch Icon */}
              <div className="relative w-16 h-12 md:w-20 md:h-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-105" id="logo-icon-footer-large">
                <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20,95 L 38,95 C 45,50, 115,50, 122,95 L 140,95 C 130,30, 30,30, 20,95 Z" fill="#C59B27" />
                  <path d="M 48,44 C 65,30, 95,30, 112,44 C 100,38, 60,38, 48,44 Z" fill="#D9B44A" opacity="0.9" />
                  <path d="M 38,95 C 55,72, 85,54, 150,53 C 115,55, 75,68, 57,95 Z" fill="#050A14" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-xl md:text-2xl font-extrabold tracking-[0.2em] text-white uppercase group-hover:text-brand-orange transition-colors">
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

          {/* Slogan & Action Callout */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:items-end lg:text-right h-full space-y-6" id="footer-slogan-card">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block mb-3">
                // BILATERAL GROWTH BRIDGE
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-white/95 leading-[1.35]">
                &ldquo;{footDict.slogan[currentLang]}&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/55 font-light mt-4 max-w-md lg:ml-auto leading-relaxed">
                {footDict.sloganSubtitle[currentLang]}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap lg:justify-end items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
                id="footer-action-inquiry"
              >
                <span>{currentLang === 'vi' ? 'Kết Nối Hợp Tác' : currentLang === 'zh' ? '联系业务咨询' : 'Connect With Us'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* NAVIGATION & DIRECTORY GRID */}
        <div className="py-16 md:py-20 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14" id="footer-directory-section">
          
          {/* Column 1: Main Platform Navigation */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-nav">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                01 // {currentLang === 'vi' ? 'Danh Mục Nền Tảng' : currentLang === 'zh' ? '网站页面导航' : 'Site Navigation'}
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
                    href={sol.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(sol.id);
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

          {/* Column 3: Contact & Service Regions */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-contact">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                03 // {footDict.contactTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block">CONTACT EMAIL</span>
                <a
                  href="mailto:liuyan@vietbridge.one"
                  className="text-sm font-mono font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 group break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  liuyan@vietbridge.one
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block">EDUCATION BRAND</span>
                <p className="text-xs font-mono font-medium text-brand-cream/80">
                  VietBridge Study · AI Education Enablement
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block">SOCIAL MEDIA CHANNELS</span>
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <a
                    href="https://www.facebook.com/share/1FBNBPoMXg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-brand-cream/80 hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>Facebook Official Page</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@vietbridgestudy.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-brand-cream/80 hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>TikTok: vietbridgestudy.official</span>
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase block flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-orange" />
                  {currentLang === 'zh' ? '重点服务地区与可支持的市场' : 'KEY SERVICE REGIONS & SUPPORTED MARKETS'}
                </span>
                <p className="text-xs text-brand-cream/65 font-light leading-relaxed">
                  {currentLang === 'zh'
                    ? '重点服务地区：胡志明市、河内 ｜ 可支持的市场：中越跨境项目协同'
                    : currentLang === 'vi'
                    ? 'Khu vực dịch vụ trọng điểm: TP.HCM, Hà Nội | Thị trường hỗ trợ: Kết nối xuyên biên giới Việt - Trung'
                    : 'Key Service Regions: Ho Chi Minh City, Hanoi | Supported Market: China-Vietnam Cross-Border Coordination'}
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Platform Information */}
          <div className="lg:col-span-3 space-y-5" id="footer-col-info">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C59B27] uppercase block">
                04 // {footDict.infoTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-10" />
            </div>

            <div className="space-y-3.5 text-xs text-brand-cream/65 font-light leading-relaxed">
              <div className="border-l border-white/15 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-0.5">VietBridge Group</span>
                <p className="text-[11px] text-brand-cream/70 leading-relaxed">
                  {currentLang === 'zh'
                    ? '面向越南、中国及亚洲重点服务市场的 AI 企业与教育赋能平台。'
                    : currentLang === 'vi'
                    ? 'Nền tảng khai phóng doanh nghiệp và giáo dục ứng dụng AI phục vụ thị trường Việt Nam và khu vực.'
                    : 'An AI-powered enterprise and education enablement platform serving Vietnam, China, and regional markets.'}
                </p>
              </div>
              <div className="border-l border-white/15 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-0.5">Direct Inquiry</span>
                <p className="font-mono text-[11px] text-[#C59B27]">
                  liuyan@vietbridge.one
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* SERVICE NOTE & LANGUAGE SWITCHER */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="footer-disclaimer-row">
          <div className="max-w-2xl text-[11px] text-brand-cream/45 leading-relaxed" id="service-note-text">
            * {footDict.serviceNote[currentLang]}
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
              <a 
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('privacy');
                }} 
                className="hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 text-[10px] uppercase font-mono tracking-widest text-brand-cream/60"
              >
                {footDict.privacy[currentLang]}
              </a>
              <span className="text-white/10">·</span>
              <a 
                href="/terms-of-use"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('terms');
                }} 
                className="hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 text-[10px] uppercase font-mono tracking-widest text-brand-cream/60"
              >
                {footDict.terms[currentLang]}
              </a>
            </div>
          </div>

          {/* Channels & Back to Top */}
          <div className="flex items-center gap-5" id="footer-socials-top">
            
            <div className="flex items-center gap-3 relative" id="footer-minimal-social-icons">
              {/* Direct Mail */}
              <a
                href="mailto:liuyan@vietbridge.one"
                className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5 text-[11px] font-mono"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden sm:inline">liuyan@vietbridge.one</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1FBNBPoMXg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 flex items-center gap-1 text-[11px] font-mono"
                aria-label="Facebook"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vietbridgestudy.official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 flex items-center gap-1 text-[11px] font-mono"
                aria-label="TikTok vietbridgestudy.official"
              >
                <span>TikTok: vietbridgestudy.official</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* WeChat Tooltip */}
              <div className="relative">
                <button
                  onClick={() => setShowWeChatTooltip(!showWeChatTooltip)}
                  onMouseEnter={() => setShowWeChatTooltip(true)}
                  onMouseLeave={() => setShowWeChatTooltip(false)}
                  className="p-2 text-brand-cream/60 hover:text-[#C59B27] hover:bg-white/5 transition-all duration-300 cursor-pointer focus:outline-none flex items-center"
                  aria-label="WeChat ID"
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
