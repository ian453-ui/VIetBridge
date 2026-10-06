import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Language } from '../data';
import FeaturedPrograms from './FeaturedPrograms';

interface CasesPageProps {
  currentLang: Language;
  onNavigate: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact', sectionId?: string) => void;
}

export default function CasesPage({ currentLang, onNavigate }: CasesPageProps) {
  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Case Studies',
      tag: 'PORTFOLIO & ARCHIVE',
      title: 'Representative Case Studies',
      subtitle: 'Explore our track record of cross-border enterprise deployments, AI marketing matrices, smart campus classrooms, and bilateral academic partnerships.',
      ctaTitle: 'Have a Project in Mind?',
      ctaDesc: 'Our strategic directors in Ho Chi Minh City, Hanoi, and Beijing are ready to collaborate.',
      ctaBtn: 'Start Strategic Consultation'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Dự án Tiêu biểu',
      tag: 'HỒ SƠ DỰ ÁN TIÊU BIỂU',
      title: 'Các Dự Án Thực Chiến Đã Triển Khai',
      subtitle: 'Khám phá các thành tựu thực tế trong tư vấn doanh nghiệp quốc tế, ma trận AI marketing, phòng học thông minh và liên kết học thuật song phương.',
      ctaTitle: 'Bạn Có Dự Án Cần Triển Khai?',
      ctaDesc: 'Đội ngũ giám đốc chiến lược tại TP.HCM, Hà Nội và Bắc Kinh luôn sẵn sàng đồng hành.',
      ctaBtn: 'Bắt Đầu Tư Vấn Chiến Lược'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '项目案例专区',
      tag: '实战案例库 · 双向赋能典范',
      title: '代表性落地实战案例',
      subtitle: '探索越桥在跨国企业在越合规落地、AI 营销矩阵代运营、软硬件一体化智慧教室及中越高校双学位联办等领域的标杆项目。',
      ctaTitle: '探讨您的定制化出海或教育项目',
      ctaDesc: '越桥中越三地资深顾问团队将为您梳理最优落地与赋能路径。',
      ctaBtn: '开启专属战略咨询'
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
      <section className="bg-white border-b border-brand-blue/10 py-16 md:py-20">
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

      {/* Embedded FeaturedPrograms with Filter Tabs and Modal */}
      <FeaturedPrograms currentLang={currentLang} />

      {/* Bottom CTA Card */}
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
