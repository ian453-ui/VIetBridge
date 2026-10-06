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
      tag: 'STRATEGIC CONSULTATION DESK',
      title: 'Initiate Strategic Bilateral Consultation',
      subtitle: 'VietBridge Group is a Vietnam-based AI-powered enterprise and education enablement platform connecting Vietnam, China and global partners. Contact our team for customized solution planning.'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Liên hệ',
      tag: 'TIẾP NHẬN TƯ VẤN TRỰC TIẾP',
      title: 'Bắt Đầu Tư Vấn Chiến Lược Song Phương',
      subtitle: 'VietBridge Group là nền tảng khai mở năng lực doanh nghiệp và giáo dục ứng dụng AI đặt trụ sở tại Việt Nam, kết nối Việt Nam, Trung Quốc và các đối tác toàn cầu.'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '联系我们',
      tag: '中越双向直接联络通道',
      title: '开启专属战略咨询与深度合作',
      subtitle: '越桥集团是一家立足越南、连接中国与全球合作伙伴的 AI 企业与教育赋能平台。欢迎通过下方通道或官方邮箱直接对接我们的业务团队。'
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

      {/* Embedded Consultation Section */}
      <Consultation currentLang={currentLang} onNavigate={onNavigate} />

    </div>
  );
}
