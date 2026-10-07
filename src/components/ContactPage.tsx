import { ChevronRight } from 'lucide-react';
import { Language } from '../data';
import Consultation from './Consultation';

interface ContactPageProps {
  currentLang: Language;
  onNavigate: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function ContactPage({ currentLang, onNavigate }: ContactPageProps) {
  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Contact Us',
      tag: 'PROJECT & SOLUTION INQUIRY',
      title: 'Contact VietBridge Group · Project & Solution Consultation',
      subtitle: 'VietBridge Group is an AI-powered enterprise and education enablement platform focused on Vietnam and connected to China and international markets. Contact our team for customized solution planning across our key service regions.'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Liên hệ',
      tag: 'TIẾP NHẬN TƯ VẤN DỰ ÁN & GIẢI PHÁP',
      title: 'Liên Hệ VietBridge Group · Tư Vấn Giải Pháp & Hợp Tác',
      subtitle: 'VietBridge Group là nền tảng khai phóng doanh nghiệp và giáo dục ứng dụng AI tập trung vào thị trường Việt Nam, kết nối Trung Quốc và quốc tế. Liên hệ đội ngũ dự án của chúng tôi để được tư vấn.'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '联系我们',
      tag: '业务咨询与合作接洽通道',
      title: '联系越桥集团 · 预约业务咨询与方案交流',
      subtitle: '越桥集团聚焦越南重点服务地区（胡志明市、河内）与中越跨境可支持的市场，提供 AI 企业赋能与 VietBridge Study 教育科技方案。欢迎通过下方邮箱（liuyan@vietbridge.one）或官方社交媒体渠道直接联系我们。'
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

      {/* Embedded Consultation Section */}
      <Consultation currentLang={currentLang} onNavigate={onNavigate} />

    </div>
  );
}
