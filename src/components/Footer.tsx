import { useState } from 'react';
import { ArrowUp, Globe, Linkedin, Twitter, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navigationItems, languagesList, Language } from '../data';

interface FooterProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
}

export default function Footer({ currentLang, onChangeLang }: FooterProps) {
  const [showWeChatTooltip, setShowWeChatTooltip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      en: 'Connecting Vietnam. Creating Opportunities.',
      vi: 'Kết nối Việt Nam. Kiến tạo Cơ hội.',
      zh: '连接越南 · 创造机遇'
    },
    aboutText: {
      en: 'VietBridge Group acts as a high-integrity strategic gateway connecting elite academic frameworks, foreign institutional capital, and policy coalitions across Southeast Asia.',
      vi: 'VietBridge Group hoạt động như một cổng kết nối chiến lược chính trực liên kết học thuật tinh hoa, dòng vốn tổ chức quốc tế và các liên minh chính sách khắp Đông Nam Á.',
      zh: 'VietBridge Group 充当高信誉度的战略性走廊，深度对接精英级学术教研体系、境外主权机构资本以及覆盖东南亚区域的多边政策联盟。'
    },
    dirTitle: {
      en: 'Platform Directory',
      vi: 'Danh mục Hệ thống',
      zh: '平台快速导航'
    },
    consultBtn: {
      en: 'Request Connection',
      vi: 'Thiết lập Liên kết',
      zh: '申请保密战略对接'
    },
    complianceTitle: {
      en: 'Global Compliance',
      vi: 'Tuân thủ Toàn cầu',
      zh: '全球化监管与合规'
    },
    privacy: {
      en: 'Privacy Protocol',
      vi: 'Bảo mật Thông tin',
      zh: '隐私数据保护协定'
    },
    terms: {
      en: 'Bilateral Compliance',
      vi: 'Quy chuẩn Song phương',
      zh: '双边合规架构'
    },
    disclaimer: {
      en: 'Disclaimers',
      vi: 'Miễn trừ Trách nhiệm',
      zh: '免责声明条款'
    },
    aboutTitle: {
      en: 'Corporate Overview',
      vi: 'Tổng quan Doanh nghiệp',
      zh: '集团企业概览'
    },
    contactTitle: {
      en: 'Directives & Inquiries',
      vi: 'Đầu mối Liên hệ',
      zh: '战略对接窗口'
    },
    registriesTitle: {
      en: 'Bilateral Registries',
      vi: 'Đăng ký Song phương',
      zh: '多边合规机构备案'
    },
    reportBadge: {
      en: 'ANNUAL GOVERNANCE REPORT',
      vi: 'BÁO CÁO QUẢN TRỊ THƯỜNG NIÊN',
      zh: '年度合规管治报告'
    },
    reportingYear: {
      en: 'Fiscal Year 2026',
      vi: 'Niên độ Tài chính 2026',
      zh: '2026财政年度'
    },
    regulatoryNote: {
      en: 'Information in this document corresponds with bilateral regulatory standards of the respective sovereign jurisdictions.',
      vi: 'Thông tin trong văn bản này tuân thủ các quy chuẩn quản lý song phương thuộc các khu vực tài phán chủ quyền tương ứng.',
      zh: '本报告披露之所有数据与架构，均符合各相关主权司法辖区的双边监管合规性要求。'
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#050A14] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Editorial subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Radial soft glow */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-brand-orange/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* TOP SEGMENT: Large Logo & Brand Slogan */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-12" id="footer-large-hdr">
          
          {/* Large Logo Block */}
          <div className="flex items-center gap-6" id="footer-large-branding">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-5 group focus:outline-none"
            >
              {/* Massive Gold & Black Double Arch Logo */}
              <div className="relative w-16 h-12 md:w-20 md:h-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-105" id="logo-icon-footer-large">
                <svg viewBox="0 0 160 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Gold Arch */}
                  <path d="M 20,95 L 38,95 C 45,50, 115,50, 122,95 L 140,95 C 130,30, 30,30, 20,95 Z" fill="#C59B27" />
                  {/* Secondary Gold Arch Accent */}
                  <path d="M 48,44 C 65,30, 95,30, 112,44 C 100,38, 60,38, 48,44 Z" fill="#D9B44A" opacity="0.9" />
                  {/* Intersecting Dynamic Black Swoop */}
                  <path d="M 38,95 C 55,72, 85,54, 150,53 C 115,55, 75,68, 57,95 Z" fill="#050A14" />
                </svg>
              </div>
              <div className="flex flex-col leading-none" id="logo-text-footer-large">
                <span className="font-sans text-xl md:text-2xl font-black tracking-[0.25em] text-white uppercase group-hover:text-brand-orange transition-colors">
                  VietBridge
                </span>
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.52em] text-brand-orange uppercase mt-1">
                  Group
                </span>
              </div>
            </a>
          </div>

          {/* Slogan and Chapter Tag */}
          <div className="max-w-2xl lg:text-right" id="footer-slogan-block">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-brand-cream/90 leading-tight">
              &ldquo;{footDict.slogan[currentLang]}&rdquo;
            </p>
            <div className="flex lg:justify-end items-center gap-3 mt-4 text-[9px] font-mono tracking-[0.3em] text-brand-orange uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
              <span>{currentLang === 'vi' ? 'SỨ MỆNH TOÀN CẦU' : currentLang === 'zh' ? '全球合作之约' : 'Global Mission & Covenant'}</span>
            </div>
          </div>

        </div>

        {/* MIDDLE SEGMENT: 4-Column Professional Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 py-20 border-b border-white/5" id="footer-directory-grid">
          
          {/* Column 1: Corporate Overview */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-overview">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase block">
                01 // {footDict.aboutTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-8" />
            </div>
            <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
              {footDict.aboutText[currentLang]}
            </p>
            <div className="pt-2 space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase block">
                {footDict.reportBadge[currentLang]}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-brand-cream/30 uppercase block">
                {footDict.reportingYear[currentLang]}
              </span>
            </div>
          </div>

          {/* Column 2: Elegant Navigation */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-navigation">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase block">
                02 // {footDict.dirTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-8" />
            </div>
            <ul className="space-y-3.5">
              {navigationItems.map((item) => (
                <li key={item.id} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="group text-xs text-brand-cream/65 hover:text-white transition-colors uppercase tracking-wider font-semibold flex items-center gap-2"
                    id={`footer-link-${item.id}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-3.5 group-hover:ml-0"></span>
                    {item.label[currentLang]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="group text-xs text-brand-orange hover:text-brand-orange-light transition-colors uppercase tracking-wider font-bold flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange -ml-3.5 group-hover:ml-0"></span>
                  {footDict.consultBtn[currentLang]}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-contact">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase block">
                03 // {footDict.contactTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-8" />
            </div>
            
            <div className="space-y-5">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/35 uppercase block">PRIMARY SECURE DESK</span>
                <a
                  href="mailto:liuyan@vietbridge.one"
                  className="text-base font-mono font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 group"
                >
                  liuyan@vietbridge.one
                  <ArrowUpRight className="w-4 h-4 text-brand-orange shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/35 uppercase block">INSTITUTIONAL DIRECT PHONE</span>
                <p className="text-sm font-mono font-medium text-brand-cream/80 flex items-center gap-2">
                  +84 (0) 24 3828 0101
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] font-mono tracking-widest text-brand-cream/35 uppercase block">OFFICE HUBS</span>
                <p className="text-xs text-brand-cream/60 font-light leading-relaxed">
                  Hanoi · Ho Chi Minh City · Beijing · London
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Registry */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-compliance">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase block">
                04 // {footDict.registriesTitle[currentLang]}
              </span>
              <div className="h-px bg-white/10 w-8" />
            </div>
            
            <div className="space-y-5 text-xs text-brand-cream/60 font-light leading-relaxed">
              <div className="border-l border-white/10 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-1">VietBridge (Vietnam) Co., Ltd.</span>
                <p className="font-mono text-[11px] text-brand-cream/45">
                  Enterprise Registry: 0108928192.<br />
                  Hanoi DPI Corporate Filing.
                </p>
              </div>
              <div className="border-l border-white/10 pl-3 py-0.5">
                <span className="font-semibold text-white block mb-1">VietBridge Global Ltd. (Singapore)</span>
                <p className="font-mono text-[11px] text-brand-cream/45">
                  ACRA Registration: 201834928H.<br />
                  Strategic Advisory Registry.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* THIRD SEGMENT: Language Bar & Regulatory Disclaimer Note */}
        <div className="py-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" id="footer-regulatory-row">
          <div className="max-w-2xl text-[10px] font-serif italic text-brand-cream/35 leading-relaxed" id="regulatory-note-text">
            * {footDict.regulatoryNote[currentLang]}
          </div>

          {/* Elegant Footer Language Switcher */}
          <div className="flex items-center gap-3 shrink-0" id="footer-lang-switcher">
            <Globe className="w-3.5 h-3.5 text-white/30" />
            <div className="flex items-center gap-2.5">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 py-1.5 px-3.5 cursor-pointer border ${
                    currentLang === lang.code
                      ? 'text-[#C59B27] border-[#C59B27]/40 bg-[#C59B27]/5 font-bold'
                      : 'text-white/40 border-transparent hover:text-white hover:border-white/15'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FOURTH SEGMENT: Copyright, Legal treaties & Minimal Socials */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom-row">
          
          {/* Copyright and Treaties */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-[10px] text-brand-cream/40 uppercase tracking-widest text-center md:text-left">
            <span>&copy; 2026 VietBridge Group. All rights reserved.</span>
            <div className="flex gap-4 items-center">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors duration-300">
                {footDict.privacy[currentLang]}
              </a>
              <span className="text-white/10">·</span>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors duration-300">
                {footDict.terms[currentLang]}
              </a>
              <span className="text-white/10">·</span>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors duration-300">
                {footDict.disclaimer[currentLang]}
              </a>
            </div>
          </div>

          {/* Minimal Social Icons & elegant Back to top button */}
          <div className="flex items-center gap-6" id="footer-socials-top">
            
            {/* Minimal Social Icons Row */}
            <div className="flex items-center gap-4 relative" id="footer-minimal-social-icons">
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-cream/40 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-cream/40 hover:text-white transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4 stroke-[1.5]" />
              </a>

              {/* WeChat Tooltip Integration */}
              <div className="relative">
                <button
                  onClick={() => setShowWeChatTooltip(!showWeChatTooltip)}
                  onMouseEnter={() => setShowWeChatTooltip(true)}
                  onMouseLeave={() => setShowWeChatTooltip(false)}
                  className="p-2 text-brand-cream/40 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none flex items-center"
                  aria-label="WeChat Account ID"
                >
                  <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                </button>
                <AnimatePresence>
                  {showWeChatTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0C1222] border border-white/10 text-white text-[10px] py-1 px-2.5 shadow-xl z-20 font-mono tracking-wider uppercase whitespace-nowrap"
                    >
                      ID: vietbridge-group
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0C1222]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Elegant Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-9 h-9 border border-white/10 hover:border-[#C59B27] hover:bg-[#C59B27]/5 transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
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
