import { motion } from 'motion/react';
import { Language } from '../data';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const headlines = {
    en: {
      tag: 'ENABLEMENT IMPACT',
      title: 'Real Execution, Measured by Outcomes',
      desc: 'VietBridge Group measures value through tangible enterprise capabilities, localized training adoption, and institutional education upgrades delivered across Vietnam and Asia.'
    },
    vi: {
      tag: 'HIỆU QUẢ KHAI PHÓNG',
      title: 'Năng Lực Thực Thi Đo Bằng Kết Quả',
      desc: 'VietBridge Group đo lường giá trị thông qua năng lực thực tế của doanh nghiệp, tỷ lệ ứng dụng đào tạo và các dự án chuyển đổi giáo dục đã bàn giao thành công.'
    },
    zh: {
      tag: '赋能实效与量化',
      title: '扎根一线的交付结果',
      desc: '越桥集团用真实的企业运营赋能成效、实战培训转化率以及教育科技落地深度，定义中越双边跨境合作的实际价值。'
    }
  };

  const statsList = {
    en: [
      {
        value: 'Core',
        label: 'Enterprise & Academic Outreach',
        description: 'Engaged through business consulting, industry intelligence, and bilateral cooperation dialogues.'
      },
      {
        value: 'Executive',
        label: 'Practical Training & Workshops',
        description: 'Practical guidance on tax compliance, labor law, AI productivity, and cross-cultural management.'
      },
      {
        value: 'EdTech',
        label: 'Smart Campus Deployments',
        description: 'LMS platforms, smart classroom hardware, and progressive STEM & robotics curricula.'
      },
      {
        value: 'Dual',
        label: 'Strategic Desks in Vietnam',
        description: 'On-the-ground project liaison in Ho Chi Minh City and Hanoi with bilingual specialists.'
      },
      {
        value: 'Local',
        label: 'On-Site Integration & Support',
        description: 'Localized solution planning, faculty workshops, and continuous operational assistance.'
      }
    ],
    vi: [
      {
        value: 'Kết nối',
        label: 'Mạng lưới Doanh nghiệp & Viện trường',
        description: 'Đồng hành qua tư vấn kinh doanh, dữ liệu thực tế và đối thoại hợp tác kinh tế song phương.'
      },
      {
        value: 'Thực chiến',
        label: 'Khóa Đào tạo & Hội thảo Chuyên sâu',
        description: 'Hướng dẫn thực tiễn về thuế, luật lao động, ứng dụng AI và quản trị xuyên văn hóa.'
      },
      {
        value: 'EdTech',
        label: 'Giải Pháp Công Nghệ Giáo Dục',
        description: 'Nền tảng LMS, phần cứng lớp học thông minh và bộ giáo trình STEM - Robotics hiện đại.'
      },
      {
        value: 'Song hành',
        label: 'Điểm Phối Hợp Tại Việt Nam',
        description: 'Đội ngũ chuyên trách tại TP. Hồ Chí Minh và Hà Nội với chuyên viên song ngữ tận tâm.'
      },
      {
        value: 'Bản địa',
        label: 'Đồng Hành & Hỗ Trợ Tại Chỗ',
        description: 'Triển khai giải pháp theo nhu cầu thực tế, tập huấn giảng viên và hỗ trợ vận hành.'
      }
    ],
    zh: [
      {
        value: '深度连接',
        label: '企业与院校深度协同',
        description: '通过落地咨询、合规辅导、产业考察与双边合作交流建立务实连接。'
      },
      {
        value: '实务研讨',
        label: '合规与前沿技能研修',
        description: '专注在越税务合规、劳动用工法务、AI 办公提效与中越跨文化团队融合。'
      },
      {
        value: '智慧教研',
        label: '教育科技产品与方案矩阵',
        description: '覆盖 LMS 学习系统、智慧教室软硬件一体机与渐进式 STEM 机器人课程。'
      },
      {
        value: '双城联动',
        label: '越南多点常态化业务对接',
        description: '以胡志明市与河内为实地业务联络支点，配备中越双语专员协同支持。'
      },
      {
        value: '本地陪伴',
        label: '全流程本土支持与师资实训',
        description: '围绕客户真实业务场景，提供系统本地化、师资实训与持续落地支持。'
      }
    ]
  };

  const currentHead = headlines[currentLang] || headlines['en'];
  const currentStats = statsList[currentLang] || statsList['en'];

  return (
    <section
      id="stats"
      className="bg-[#070D19] text-white py-44 md:py-64 relative overflow-hidden"
    >
      {/* Absolute ambient decorations */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-brand-orange/5 rounded-full filter blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start" id="stats-asymmetric-layout">
          
          {/* Left Side: Editorial Introduction (5 Columns) */}
          <div className="lg:col-span-5 space-y-10" id="stats-intro-col">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block">
              {currentHead.tag}
            </span>
            <h2 className="text-4xl sm:text-5.5xl md:text-6.5xl lg:text-7.5xl font-sans font-extrabold tracking-tight leading-[0.95] text-white">
              {currentHead.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-brand-cream/75 leading-relaxed font-light max-w-md">
              {currentHead.desc}
            </p>

            {/* Injected Cinematic Mini Portrait for editorial texture */}
            <div className="pt-8 hidden lg:block">
              <div className="relative max-w-sm">
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80" 
                    alt="Diplomatic representatives wearing translation headsets in deep strategic consultation" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center text-[7.5px] font-mono tracking-widest text-brand-cream/30 uppercase">
                  <span>MULTILATERAL COOPERATION DIALOGUE</span>
                  <span>HANOI SUMMIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Staggered, Asymmetrical Metrics Grid (7 Columns) */}
          <div className="lg:col-span-7" id="stats-metrics-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20" id="stats-staggered-list">
              
              {/* Stat 1: Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-brand-orange block leading-none">
                  {currentStats[0].value}
                </span>
                <h4 className="text-sm font-sans font-bold tracking-[0.3em] text-white uppercase leading-snug">
                  {currentStats[0].label}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                  {currentStats[0].description}
                </p>
              </motion.div>

              {/* Stat 2: Top Right - Staggered Downwards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-4 sm:mt-16"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-brand-orange block leading-none">
                  {currentStats[1].value}
                </span>
                <h4 className="text-sm font-sans font-bold tracking-[0.3em] text-white uppercase leading-snug">
                  {currentStats[1].label}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                  {currentStats[1].description}
                </p>
              </motion.div>

              {/* Stat 3: Mid Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-4"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-brand-orange block leading-none">
                  {currentStats[2].value}
                </span>
                <h4 className="text-sm font-sans font-bold tracking-[0.3em] text-white uppercase leading-snug">
                  {currentStats[2].label}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                  {currentStats[2].description}
                </p>
              </motion.div>

              {/* Stat 4: Mid Right - Staggered Downwards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="space-y-4 sm:mt-16"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-brand-orange block leading-none">
                  {currentStats[3].value}
                </span>
                <h4 className="text-sm font-sans font-bold tracking-[0.3em] text-white uppercase leading-snug">
                  {currentStats[3].label}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                  {currentStats[3].description}
                </p>
              </motion.div>

              {/* Stat 5: Centered/Spanned Bottom Left to break template feeling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 sm:col-span-2 sm:max-w-md"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-brand-orange block leading-none">
                  {currentStats[4].value}
                </span>
                <h4 className="text-sm font-sans font-bold tracking-[0.3em] text-white uppercase leading-snug">
                  {currentStats[4].label}
                </h4>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                  {currentStats[4].description}
                </p>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bilateral Operating Hubs list underlay */}
        <div className="mt-36 border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-6" id="stats-footer-logos">
          <span className="text-[10px] font-mono tracking-[0.3em] text-brand-cream/40 uppercase">
            {currentLang === 'vi' ? 'TRỌNG TÂM DỊCH VỤ KHU VỰC' : currentLang === 'zh' ? '重点服务越南、中国及亚洲市场' : 'Regional Operational Focus'}
          </span>
          <div className="flex flex-wrap gap-8 justify-center">
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/60 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              HO CHI MINH DESK
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/60 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              HANOI DESK
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/60 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              BEIJING DESK
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
