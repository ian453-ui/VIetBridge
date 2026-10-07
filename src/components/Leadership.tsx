import React from 'react';
import { Language } from '../data';
import { Building2, Globe2, Cpu, Users } from 'lucide-react';

interface LeadershipProps {
  currentLang?: Language;
  lang?: Language;
}

export const Leadership: React.FC<LeadershipProps> = ({ currentLang, lang }) => {
  const activeLang: Language = currentLang || lang || 'zh';

  const headerCopy = {
    en: {
      badge: 'TEAM & COLLABORATION NETWORK',
      title: 'Cross-Border Practitioners & Industry Specialist Network',
      subtitle: 'VietBridge connects project coordinators, bilingual operations specialists, education technology providers, and local legal/tax practitioners across our key service regions and supported markets.',
      noteTitle: 'Team & Partner Information Note',
      disclosure: 'External lecturers, legal/tax specialists, and target partner schools participate on a project-by-project or inquiry basis. Specific experts and institutional arrangements are confirmed per project scope.'
    },
    vi: {
      badge: 'ĐỘI NGŨ & MẠNG LƯỚI CHUYÊN GIA',
      title: 'Đội ngũ Thực hành Xuyên biên giới & Mạng lưới Chuyên gia',
      subtitle: 'VietBridge kết nối đội ngũ điều phối dự án, chuyên viên vận hành song ngữ, đối tác công nghệ giáo dục và chuyên gia pháp lý, thuế tại các khu vực dịch vụ trọng điểm.',
      noteTitle: 'Ghi chú Thông tin Đội ngũ & Đối tác',
      disclosure: 'Các giảng viên khách mời, chuyên gia pháp lý/thuế và các trường mục tiêu tham gia theo từng dự án hoặc chương trình cụ thể sau khi xác nhận phạm vi hợp tác.'
    },
    zh: {
      badge: '团队背景与协作网络',
      title: '跨行业实践团队与外部专业讲师协作网络',
      subtitle: '越桥集团整合熟悉中越双边商业环境、数字内容运营与教育科技方案的项目人员，并按项目需求协同外部法律、财税及行业实务讲师。',
      noteTitle: '团队背景与外部专家说明',
      disclosure: '网站提及的外部实务讲师、本地专业服务机构及目标合作院校类型均按具体项目需求开展接洽与排期，具体合作安排以实际项目确认为准。'
    }
  }[activeLang];

  const capabilities = {
    en: [
      {
        icon: Globe2,
        tag: 'KEY SERVICE REGIONS',
        title: 'Vietnam & Cross-Border Supported Markets',
        desc: 'Focusing on key service regions including Ho Chi Minh City and Hanoi, alongside cross-border project coordination for Chinese and Vietnamese clients.'
      },
      {
        icon: Building2,
        tag: 'COLLABORATION DIRECTIONS',
        title: 'Target Partner Schools & Industry Practitioner Network',
        desc: 'Connecting target partner institution types, education technology providers, and local legal/tax practitioners (project discussions in progress).'
      },
      {
        icon: Cpu,
        tag: 'AI WORKFLOWS',
        title: 'AI Content & Digital Teaching Implementation',
        desc: 'Integrating generative AI workflows into enterprise social media operations and bringing Blackboard / BB, Radica Smart Classroom, and STEM solutions to schools.'
      },
      {
        icon: Users,
        tag: 'BILINGUAL TEAM',
        title: 'Chinese-Vietnamese Bilingual Project Coordination',
        desc: 'Supporting cross-cultural communication, bilingual training materials, and practical project coordination across enterprise and education scenarios.'
      }
    ],
    vi: [
      {
        icon: Globe2,
        tag: 'KHU VỰC DỊCH VỤ TRỌNG ĐIỂM',
        title: 'Hỗ trợ Thị trường Trọng điểm Việt Nam & Xuyên biên giới',
        desc: 'Tập trung hỗ trợ các khu vực dịch vụ trọng điểm gồm TP. Hồ Chí Minh và Hà Nội, kết hợp điều phối dự án xuyên biên giới Việt - Trung.'
      },
      {
        icon: Building2,
        tag: 'ĐỊNH HƯỚNG HỢP TÁC',
        title: 'Loại hình Trường Mục tiêu & Mạng lưới Chuyên gia',
        desc: 'Kết nối các loại hình trường học mục tiêu, đối tác công nghệ giáo dục và chuyên gia pháp lý, thuế thực tiễn (đang trong quá trình trao đổi dự án).'
      },
      {
        icon: Cpu,
        tag: 'QUY TRÌNH AI',
        title: 'Triển khai Nội dung AI & Giải pháp Giảng dạy Số',
        desc: 'Ứng dụng quy trình AI vào vận hành mạng xã hội doanh nghiệp và giới thiệu giải pháp Blackboard / BB, Radica Smart Classroom, STEM cho trường học.'
      },
      {
        icon: Users,
        tag: 'ĐỘI NGŨ SONG NGỮ',
        title: 'Điều phối Dự án Song ngữ Trung - Việt',
        desc: 'Hỗ trợ giao tiếp xuyên văn hóa, biên soạn tài liệu song ngữ và điều phối triển khai cho doanh nghiệp và cơ sở giáo dục.'
      }
    ],
    zh: [
      {
        icon: Globe2,
        tag: '重点服务地区',
        title: '覆盖胡志明市、河内及中越跨境可支持的市场',
        desc: '围绕越南胡志明市、河内等重点服务地区及中越跨境可支持的市场，为企业与学校提供方案咨询、培训筹备与落地协调支持。'
      },
      {
        icon: Building2,
        tag: '合作方向与资源接洽',
        title: '目标合作院校类型与本地实务讲师网络',
        desc: '持续接洽越南高等院校、K12 学校、国际学校等目标合作院校类型，并协同本地法律、财税与行业实务讲师开展课程与项目策划（项目接洽中）。'
      },
      {
        icon: Cpu,
        tag: 'AI 与教育科技组合',
        title: 'AI 内容工作流与数字化教学方案支持',
        desc: '将 AI 工具应用于企业社媒内容运营，并通过 VietBridge Study 引入 Blackboard / BB、Radica 智慧课堂与 STEM/AI 教育方案。'
      },
      {
        icon: Users,
        tag: '双语协同支持',
        title: '中越双语沟通与项目执行协调',
        desc: '结合中越双语沟通能力与跨行业项目经验，协助客户梳理需求、定制培训方案并推进日常运营。'
      }
    ]
  }[activeLang];

  return (
    <section id="leadership" className="py-24 lg:py-32 bg-[#141A23] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-orange font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-[1px] bg-brand-orange"></span>
            <span>{headerCopy.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-white tracking-tight leading-[1.32] mb-6">
            {headerCopy.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
            {headerCopy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-orange px-3 py-1 bg-brand-orange/10 border border-brand-orange/20">
                    {cap.tag}
                  </span>
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-brand-orange">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-sans font-bold text-white leading-[1.4] mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed font-light">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-orange mb-1">
              {headerCopy.noteTitle}
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              {headerCopy.disclosure}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
