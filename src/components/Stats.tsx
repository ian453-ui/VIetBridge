import { motion } from 'motion/react';
import { Language } from '../data';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const headlines = {
    en: {
      tag: 'SERVICE FOCUS',
      title: 'Practical Solutions Across Enterprise & Education',
      desc: 'VietBridge Group focuses on practical AI content workflows, corporate training proposals, and education technology solutions across key service regions in Vietnam and supported cross-border markets.'
    },
    vi: {
      tag: 'TRỌNG TÂM DỊCH VỤ',
      title: 'Giải Pháp Thực Tiễn Cho Doanh Nghiệp & Giáo Dục',
      desc: 'VietBridge Group tập trung vào quy trình nội dung AI, chương trình đào tạo doanh nghiệp và giải pháp công nghệ giáo dục tại các khu vực dịch vụ trọng điểm ở Việt Nam và thị trường xuyên biên giới.'
    },
    zh: {
      tag: '核心业务方向',
      title: '聚焦企业赋能与教育科技方案落地',
      desc: '越桥集团围绕越南重点服务地区与中越跨境可支持的市场，提供 AI 社媒内容运营、企业管理实务培训方案与 VietBridge Study 教育科技解决方案。'
    }
  };

  const statsList = {
    en: [
      {
        value: 'Dual',
        label: 'Core Business Lines',
        description: 'Combining AI Enterprise Enablement and VietBridge Study (AI Education Enablement).'
      },
      {
        value: 'Training',
        label: 'Practical Seminars & Workshops',
        description: 'Thematic training proposals covering tax rules, labor regulations, AI productivity, and cross-cultural management.'
      },
      {
        value: 'EdTech',
        label: 'Education Solution Portfolio',
        description: 'Blackboard / BB learning platforms, Radica Smart Classroom solutions, and STEM & robotics curricula.'
      },
      {
        value: 'Markets',
        label: 'Key Service Regions',
        description: 'Focusing on Ho Chi Minh City, Hanoi, and China-Vietnam cross-border supported markets.'
      },
      {
        value: 'Bilingual',
        label: 'Localized Implementation Support',
        description: 'Chinese-Vietnamese bilingual project coordination, teacher onboarding, and ongoing operational support.'
      }
    ],
    vi: [
      {
        value: 'Kép',
        label: 'Hai Mảng Nghiệp Vụ Chính',
        description: 'Kết hợp Khai phóng Doanh nghiệp bằng AI và VietBridge Study (Khai phóng Giáo dục bằng AI).'
      },
      {
        value: 'Đào tạo',
        label: 'Hội thảo & Đào tạo Thực tiễn',
        description: 'Chương trình đào tạo về quy định thuế, luật lao động, ứng dụng AI và quản trị xuyên văn hóa.'
      },
      {
        value: 'EdTech',
        label: 'Danh Mục Công Nghệ Giáo Dục',
        description: 'Nền tảng Blackboard / BB, lớp học thông minh Radica và chương trình học tập STEM - Robotics.'
      },
      {
        value: 'Khu vực',
        label: 'Khu Vực Dịch Vụ Trọng Điểm',
        description: 'Tập trung hỗ trợ thị trường TP. Hồ Chí Minh, Hà Nội và các nhu cầu xuyên biên giới Việt - Trung.'
      },
      {
        value: 'Song ngữ',
        label: 'Triển Khai & Hỗ Trợ Bản Địa',
        description: 'Điều phối dự án song ngữ Trung - Việt, tập huấn giáo viên và đồng hành vận hành.'
      }
    ],
    zh: [
      {
        value: '双业务线',
        label: '企业赋能 + 教育赋能协同',
        description: '聚焦 AI 企业赋能（AI Enterprise Enablement）与 VietBridge Study（AI 教育赋能）两大核心业务线。'
      },
      {
        value: '实务培训',
        label: '经营管理与 AI 技能研讨',
        description: '围绕越南财税政策、劳动法规、AI 办公提效与中越跨文化沟通提供结构化培训方案。'
      },
      {
        value: '教育科技',
        label: '学校数字化教学产品组合',
        description: '涵盖 Blackboard / BB 在线教学平台、Radica 智慧课堂方案与渐进式 STEM/AI 机器人课程。'
      },
      {
        value: '重点区域',
        label: '重点服务地区与可支持的市场',
        description: '面向胡志明市、河内等越南重点服务地区及中越跨境可支持的市场提供咨询与项目支持。'
      },
      {
        value: '双语协同',
        label: '本地化适配与师资培训支持',
        description: '围绕客户实际业务与教学场景，提供中越双语资料梳理、师资实训与持续运营辅导。'
      }
    ]
  };

  const currentHead = headlines[currentLang] || headlines['en'];
  const currentStats = statsList[currentLang] || statsList['en'];

  return (
    <section
      id="stats"
      className="bg-[#070D19] text-white py-32 md:py-48 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-brand-orange/5 rounded-full filter blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start" id="stats-asymmetric-layout">
          
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-6" id="stats-intro-col">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
              {currentHead.tag}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold tracking-tight leading-[1.32] text-white">
              {currentHead.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-cream/75 leading-relaxed font-light max-w-md">
              {currentHead.desc}
            </p>

            <div className="pt-4 hidden lg:block">
              <div className="relative max-w-sm">
                <div className="aspect-[16/10] overflow-hidden bg-white/5 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80" 
                    alt="Cross-border business and education consultation session" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div className="mt-3 flex justify-between items-center text-[9px] font-mono tracking-widest text-brand-cream/40 uppercase">
                  <span>CROSS-BORDER PROJECT SUPPORT</span>
                  <span>VIETNAM & CHINA MARKETS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7" id="stats-metrics-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10" id="stats-staggered-list">
              {currentStats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`p-6 bg-white/[0.03] border border-white/10 space-y-2.5 ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-sans font-bold tracking-tight text-brand-orange leading-snug">
                      {item.value}
                    </span>
                    <span className="text-[10px] font-mono text-white/35">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold tracking-tight text-white leading-[1.4]">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/65 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Supported Markets Footer */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6" id="stats-footer-logos">
          <span className="text-[10px] font-mono tracking-[0.25em] text-brand-cream/50 uppercase">
            {currentLang === 'vi'
              ? 'KHU VỰC DỊCH VỤ TRỌNG ĐIỂM & THỊ TRƯỜNG HỖ TRỢ'
              : currentLang === 'zh'
              ? '重点服务地区与可支持的市场'
              : 'KEY SERVICE REGIONS & SUPPORTED MARKETS'}
          </span>
          <div className="flex flex-wrap gap-6 justify-center">
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/70 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              {currentLang === 'zh' ? '重点服务地区：胡志明市' : 'KEY REGION: HO CHI MINH CITY'}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/70 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              {currentLang === 'zh' ? '重点服务地区：河内' : 'KEY REGION: HANOI'}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/70 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              {currentLang === 'zh' ? '可支持的市场：中越跨境协同' : 'SUPPORTED MARKET: CHINA-VIETNAM CROSS-BORDER'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
