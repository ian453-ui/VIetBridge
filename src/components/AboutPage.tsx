import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Language } from '../data';
import WhoWeAre from './WhoWeAre';
import WhyVietBridge from './WhyVietBridge';
import { Leadership } from './Leadership';
import { InteractiveMap } from './InteractiveMap';
import Partners from './Partners';

interface AboutPageProps {
  currentLang: Language;
  onNavigate: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact', sectionId?: string) => void;
}

export default function AboutPage({ currentLang, onNavigate }: AboutPageProps) {
  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'About Us',
      tag: 'ABOUT VIETBRIDGE GROUP',
      title: 'About VietBridge Group · Connecting Business & Education',
      subtitle: 'Focusing on key service regions in Vietnam (Ho Chi Minh City, Hanoi) and supported China-Vietnam cross-border markets, VietBridge Group provides AI enterprise enablement and VietBridge Study education technology solutions.',
      ctaTitle: 'Collaborate With VietBridge Group',
      ctaDesc: 'Discuss enterprise services, education technology portfolios, or project cooperation directions.',
      ctaBtn: 'Contact Our Team'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Về chúng tôi',
      tag: 'VỀ VIETBRIDGE GROUP',
      title: 'Về VietBridge Group · Kết Nối Doanh Nghiệp & Giáo Dục',
      subtitle: 'Tập trung vào các khu vực dịch vụ trọng điểm tại Việt Nam (TP.HCM, Hà Nội) và thị trường hỗ trợ xuyên biên giới Việt - Trung, VietBridge Group cung cấp dịch vụ khai phóng doanh nghiệp bằng AI và giải pháp giáo dục VietBridge Study.',
      ctaTitle: 'Hợp Tác Cùng VietBridge Group',
      ctaDesc: 'Trao đổi về dịch vụ doanh nghiệp, danh mục công nghệ giáo dục hoặc định hướng hợp tác dự án.',
      ctaBtn: 'Liên Hệ Đội Ngũ Dự Án'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '关于越桥',
      tag: '关于越桥集团 · 双业务线赋能平台',
      title: '关于越桥集团 · 连接中越企业与教育合作场景',
      subtitle: '围绕越南胡志明市、河内等重点服务地区及中国跨境可支持的市场，越桥集团专注提供 AI 企业赋能（AI Enterprise Enablement）与 VietBridge Study（AI 教育赋能）解决方案。',
      ctaTitle: '与越桥项目团队探讨合作方向',
      ctaDesc: '围绕企业社媒运营、实务培训、市场进入调研或学校智慧教育方案开展务实接洽。',
      ctaBtn: '联系项目团队'
    }
  }[currentLang];

  return (
    <div className="bg-[#FAF9F6] text-brand-blue min-h-screen pt-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-blue/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 text-xs font-mono">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }} 
            className="text-brand-blue/60 hover:text-brand-orange transition-colors cursor-pointer"
          >
            {t.breadcrumbHome}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-brand-blue/30" />
          <span className="text-brand-orange font-bold uppercase tracking-wider">
            {t.breadcrumbCurrent}
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-white border-b border-brand-blue/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
            {t.tag}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.28]">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-brand-blue/70 max-w-3xl font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <WhoWeAre currentLang={currentLang} />

      {/* 6 Core Advantages */}
      <WhyVietBridge currentLang={currentLang} />

      {/* Key Service Regions & Supported Markets */}
      <InteractiveMap lang={currentLang} />

      {/* Team Background & Service Orientation */}
      <Leadership lang={currentLang} />

      {/* Product Portfolio & Target Cooperation Directions */}
      <Partners currentLang={currentLang} />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="bg-[#070D19] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-[1.35]">
              {t.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              {t.ctaDesc}
            </p>
          </div>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
