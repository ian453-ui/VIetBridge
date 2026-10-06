import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Language } from '../data';
import WhoWeAre from './WhoWeAre';
import WhyVietBridge from './WhyVietBridge';
import Leadership from './Leadership';
import InteractiveMap from './InteractiveMap';
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
      title: 'Bridging Nations, Empowering Growth',
      subtitle: 'Headquartered in Ho Chi Minh City with offices in Hanoi and Beijing, VietBridge Group is the premier bilateral gateway for AI enterprise enablement and smart education transformation.',
      ctaTitle: 'Build With Us',
      ctaDesc: 'Partner with our cross-border ecosystem across Southeast Asia and China.',
      ctaBtn: 'Contact Our Leadership'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Về chúng tôi',
      tag: 'VỀ VIETBRIDGE GROUP',
      title: 'Kết Nối Quốc Gia, Khai Mở Tiềm Năng',
      subtitle: 'Trụ sở chính tại TP.HCM cùng các văn phòng tại Hà Nội và Bắc Kinh, VietBridge Group là cổng kết nối song phương chuẩn mực về chuyển đổi số doanh nghiệp bằng AI và hiện đại hóa giáo dục.',
      ctaTitle: 'Hợp Tác Cùng Chúng Tôi',
      ctaDesc: 'Gia nhập mạng lưới hệ sinh thái đổi mới sáng tạo song phương Việt Nam - Quốc tế.',
      ctaBtn: 'Liên Hệ Ban Lãnh Đạo'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '关于越桥',
      tag: '关于越桥集团 · 双向战略平台',
      title: '连接中越发展机遇 · 赋能商业与教育未来',
      subtitle: '越桥集团总部位于胡志明市，在河内与北京设有核心运营分支，是专注于中越企业 AI 数字化赋能与智慧教育现代化的战略级综合服务生态平台。',
      ctaTitle: '携手越桥，共创中越双向机遇',
      ctaDesc: '与我们位于中越两国的顶尖顾问、高校院所与产业伙伴开展实质性合作。',
      ctaBtn: '联系高管团队'
    }
  }[currentLang];

  return (
    <div className="bg-[#FAF9F6] text-brand-blue min-h-screen pt-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-blue/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 text-xs font-mono">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-brand-blue/60 hover:text-brand-orange transition-colors cursor-pointer"
          >
            {t.breadcrumbHome}
          </button>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-brand-blue tracking-tight">
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

      {/* Strategic Hubs & Connectivity Map */}
      <InteractiveMap currentLang={currentLang} />

      {/* Leadership & Advisory */}
      <Leadership currentLang={currentLang} />

      {/* Partners */}
      <Partners currentLang={currentLang} />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="bg-[#070D19] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {t.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              {t.ctaDesc}
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
