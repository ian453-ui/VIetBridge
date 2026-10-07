import React, { useState } from 'react';
import { Language } from '../data';
import { MapPin, Compass, Globe, ArrowRight } from 'lucide-react';

interface InteractiveMapProps {
  currentLang?: Language;
  lang?: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

interface MarketRegion {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  coordinates: { x: number; y: number };
  description: Record<Language, string>;
  focusAreas: Record<Language, string[]>;
  tag: Record<Language, string>;
}

const marketRegions: MarketRegion[] = [
  {
    id: 'hcmc',
    name: {
      en: 'Ho Chi Minh City & Southern Vietnam',
      vi: 'TP. Hồ Chí Minh & Miền Nam Việt Nam',
      zh: '越南南部重点服务地区（胡志明市及周边）'
    },
    role: {
      en: 'Key Service Region · Enterprise & Education Enablement',
      vi: 'Khu vực Dịch vụ Trọng điểm · Doanh nghiệp & Giáo dục',
      zh: '重点服务地区 · 企业赋能与教育科技落地支持'
    },
    coordinates: { x: 62, y: 74 },
    description: {
      en: 'Supporting Chinese-invested enterprises, local brands, universities, and K12 schools across Ho Chi Minh City, Binh Duong, and Dong Nai with AI social media operations, corporate training proposals, and VietBridge Study solutions.',
      vi: 'Hỗ trợ doanh nghiệp FDI, thương hiệu bản địa, trường đại học và trường phổ thông tại TP.HCM, Bình Dương và Đồng Nai với dịch vụ mạng xã hội AI, đào tạo doanh nghiệp và giải pháp VietBridge Study.',
      zh: '面向胡志明市、平阳、同奈等南部经济活跃区域的企业与学校，提供 AI 社媒代运营、管理实务研讨方案、市场进入咨询以及 VietBridge Study 教育数字化方案支持。'
    },
    focusAreas: {
      en: ['AI Social Media Operations', 'Executive Seminar Planning', 'Industrial Park Research', 'Smart Classroom & LMS Briefings'],
      vi: ['Vận hành Mạng xã hội AI', 'Kế hoạch Hội thảo Quản trị', 'Thông tin Khu công nghiệp', 'Giới thiệu Lớp học Thông minh & LMS'],
      zh: ['AI 社媒代运营服务', '企业管理实务研讨筹备', '南部工业园区信息调研', '智慧课堂与 LMS 方案咨询']
    },
    tag: {
      en: 'KEY SERVICE REGION',
      vi: 'KHU VỰC TRỌNG ĐIỂM',
      zh: '重点服务地区'
    }
  },
  {
    id: 'hanoi',
    name: {
      en: 'Hanoi & Northern Vietnam',
      vi: 'Hà Nội & Miền Bắc Việt Nam',
      zh: '越南北部重点服务地区（河内及周边）'
    },
    role: {
      en: 'Key Service Region · Institutional & Market Support',
      vi: 'Khu vực Dịch vụ Trọng điểm · Hợp tác Trường học & Thị trường',
      zh: '重点服务地区 · 教育合作与市场调研支持'
    },
    coordinates: { x: 56, y: 42 },
    description: {
      en: 'Supporting education cooperation inquiries, smart classroom and STEM curriculum introductions, and northern industrial corridor market research for cross-border enterprises and institutions.',
      vi: 'Hỗ trợ kết nối hợp tác giáo dục, giới thiệu giải pháp lớp học thông minh và chương trình STEM, cùng nghiên cứu thị trường hành lang công nghiệp phía Bắc.',
      zh: '支持河内及北部制造走廊的市场进入调研、双语人才培训合作接洽，以及面向北部院校与培训机构的智慧课堂、LMS 与 STEM 方案咨询。'
    },
    focusAreas: {
      en: ['Education Technology Briefings', 'Target School Cooperation Discussions', 'Northern Market Entry Research', 'Bilingual Talent Training'],
      vi: ['Giới thiệu Công nghệ Giáo dục', 'Trao đổi Hợp tác Trường học', 'Nghiên cứu Thị trường Miền Bắc', 'Đào tạo Nhân lực Song ngữ'],
      zh: ['教育科技产品组合介绍', '目标院校合作方向接洽', '北部市场进入信息调研', '双语人才定制培养方案']
    },
    tag: {
      en: 'KEY SERVICE REGION',
      vi: 'KHU VỰC TRỌNG ĐIỂM',
      zh: '重点服务地区'
    }
  },
  {
    id: 'china-market',
    name: {
      en: 'China Cross-Border Supported Market',
      vi: 'Thị trường Hỗ trợ Xuyên biên giới Trung Quốc',
      zh: '中国跨境可支持的市场（线上协同与资源对接）'
    },
    role: {
      en: 'Supported Market · Cross-Border Enterprise & Education Coordination',
      vi: 'Thị trường Hỗ trợ · Điều phối Doanh nghiệp & Giáo dục Xuyên biên giới',
      zh: '可支持的市场 · 出海前期咨询、教育产品引进与赴华留学对接'
    },
    coordinates: { x: 68, y: 18 },
    description: {
      en: 'Assisting Chinese enterprises planning Vietnam market entry, coordinating with education technology solution providers, and supporting Vietnamese institutions and students seeking academic cooperation or study-in-China pathways.',
      vi: 'Hỗ trợ doanh nghiệp Trung Quốc tìm hiểu thị trường Việt Nam, phối hợp cùng các nhà cung cấp công nghệ giáo dục và hỗ trợ học sinh, trường học Việt Nam kết nối hợp tác, du học Trung Quốc.',
      zh: '为计划进入越南市场的中国企业提供前期信息梳理，协同教育科技产品技术生态，并支持越南院校及学生开展中越校际交流、中文培训与赴华留学申请指导。'
    },
    focusAreas: {
      en: ['Pre-Entry Vietnam Consultation', 'EdTech Solution Ecosystem Coordination', 'Vietnamese Brand Outbound Support', 'Study-in-China & HSK Guidance'],
      vi: ['Tư vấn Tiền khả thi vào Việt Nam', 'Phối hợp Hệ sinh thái EdTech', 'Hỗ trợ Thương hiệu Việt ra Quốc tế', 'Tư vấn Du học Trung Quốc & HSK'],
      zh: ['中资企业赴越前期咨询', '教育科技产品方案协同', '越南企业与品牌出海对接', '越南学生中文培训与赴华留学支持']
    },
    tag: {
      en: 'SUPPORTED MARKET',
      vi: 'THỊ TRƯỜNG HỖ TRỢ',
      zh: '可支持的市场'
    }
  }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ currentLang, lang, onNavigate }) => {
  const activeLang: Language = currentLang || lang || 'zh';
  const [activeRegionId, setActiveRegionId] = useState<string>('hcmc');
  const activeRegion = marketRegions.find((r) => r.id === activeRegionId) || marketRegions[0];

  const sectionContent = {
    en: {
      badge: 'KEY SERVICE REGIONS & SUPPORTED MARKETS',
      title: 'Cross-Border Service Coverage Across Vietnam & China',
      subtitle: 'Focusing on practical project delivery and remote/on-demand coordination across our key service regions in Vietnam and supported cross-border markets.',
      selectPrompt: 'Select a service region or supported market to view coverage scope:',
      focusTitle: 'Supported Service Scope in This Market',
      inquireBtn: 'Inquire About Support in This Market'
    },
    vi: {
      badge: 'KHU VỰC DỊCH VỤ TRỌNG ĐIỂM & THỊ TRƯỜNG HỖ TRỢ',
      title: 'Phạm vi Hỗ trợ Dịch vụ Xuyên biên giới Việt - Trung',
      subtitle: 'Tập trung hỗ trợ triển khai dự án thực tế và điều phối linh hoạt tại các khu vực dịch vụ trọng điểm ở Việt Nam cùng thị trường xuyên biên giới.',
      selectPrompt: 'Chọn khu vực dịch vụ hoặc thị trường hỗ trợ để xem phạm vi:',
      focusTitle: 'Phạm vi Dịch vụ Hỗ trợ tại Thị trường này',
      inquireBtn: 'Tư vấn Dịch vụ tại Khu vực này'
    },
    zh: {
      badge: '重点服务地区与可支持的市场',
      title: '覆盖中越双边核心商业与教育需求场景',
      subtitle: '围绕越南胡志明市、河内等重点服务地区及中国跨境可支持的市场，提供线上咨询、方案策划、项目接洽与按需落地支持。',
      selectPrompt: '选择重点服务地区或可支持的市场查看服务范围：',
      focusTitle: '该地区可支持的服务内容',
      inquireBtn: '咨询该市场支持方案'
    }
  }[activeLang];

  const handleInquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      e.preventDefault();
      contactEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate('contact');
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#0E1218] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-orange font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <Compass className="w-4 h-4" />
            <span>{sectionContent.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold tracking-tight leading-[1.32] mb-6">
            {sectionContent.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
            {sectionContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Region Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
              {sectionContent.selectPrompt}
            </div>
            {marketRegions.map((region) => {
              const isSelected = region.id === activeRegionId;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setActiveRegionId(region.id)}
                  className={`w-full text-left p-5 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-brand-orange shadow-lg'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                      {region.tag[activeLang]}
                    </span>
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-brand-orange' : 'text-white/40'}`} />
                  </div>
                  <div className="text-base sm:text-lg font-sans font-bold text-white mb-1 leading-[1.4]">
                    {region.name[activeLang]}
                  </div>
                  <div className="text-xs text-white/60 font-light">
                    {region.role[activeLang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Market Detail Panel */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest mb-2">
                  <Globe className="w-4 h-4" />
                  <span>{activeRegion.tag[activeLang]}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white leading-[1.35]">
                  {activeRegion.name[activeLang]}
                </h3>
              </div>
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-brand-orange/90 mb-4">
              {activeRegion.role[activeLang]}
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-8">
              {activeRegion.description[activeLang]}
            </p>

            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-4">
                {sectionContent.focusTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeRegion.focusAreas[activeLang].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white/[0.03] border border-white/10 flex items-center gap-2.5 text-sm text-white/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              onClick={handleInquireClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white hover:text-brand-blue transition-colors"
            >
              <span>{sectionContent.inquireBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
