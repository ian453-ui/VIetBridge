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
      breadcrumbCurrent: 'Case Studies & Program Portfolio',
      tag: 'REPRESENTATIVE CASES & SOLUTION PORTFOLIOS',
      title: 'Representative Case Studies & Solution Portfolios',
      subtitle: 'Explore our enterprise training seminar plans, AI content operation workflows, Blackboard / BB & Radica Smart Classroom solution portfolios, and cross-border business resource development.',
      ctaTitle: 'Have an Enterprise or School Project in Mind?',
      ctaDesc: 'We support inquiries across our key service regions in Vietnam (Ho Chi Minh City, Hanoi) and China-Vietnam cross-border markets.',
      ctaBtn: 'Start Project Consultation'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Dự án & Hồ sơ Giải pháp',
      tag: 'HỒ SƠ DỰ ÁN & DANH MỤC GIẢI PHÁP',
      title: 'Các Dự Án Tiêu Biểu & Danh Mục Giải Pháp',
      subtitle: 'Khám phá đề án hội thảo đào tạo doanh nghiệp, quy trình vận hành nội dung AI, danh mục giải pháp Blackboard / BB & Radica Smart Classroom và phát triển dữ liệu doanh nghiệp.',
      ctaTitle: 'Bạn Có Dự Án Cần Trao Đổi?',
      ctaDesc: 'Hỗ trợ tư vấn tại các khu vực dịch vụ trọng điểm ở Việt Nam (TP.HCM, Hà Nội) và thị trường xuyên biên giới Việt - Trung.',
      ctaBtn: 'Bắt Đầu Tư Vấn Dự Án'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '代表案例与项目方案',
      tag: '代表性方案 · 业务实践与项目组合',
      title: '代表性案例与重点项目方案',
      subtitle: '了解越桥在驻越华资企业管理实务研讨会策划、AI 社媒内容运营实践、VietBridge Study（Blackboard / BB 与 Radica 智慧课堂、STEM 方案组合）及中越企业资源库建设方面的项目详情。',
      ctaTitle: '探讨您的定制化企业赋能或教育科技项目',
      ctaDesc: '围绕越南重点服务地区（胡志明市、河内）及中越跨境可支持的市场，为您提供方案梳理与项目对接支持。',
      ctaBtn: '预约项目咨询'
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
      <section className="bg-white border-b border-brand-blue/10 py-16 md:py-20">
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

      {/* Embedded FeaturedPrograms with Filter Tabs and Modal */}
      <FeaturedPrograms currentLang={currentLang} />

      {/* Bottom CTA Card */}
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
