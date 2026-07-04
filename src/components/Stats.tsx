import { motion } from 'motion/react';
import { Language } from '../data';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const headlines = {
    en: {
      tag: 'INSTITUTIONAL SCALE',
      title: 'The Measure of Bilateral Trust',
      desc: 'We do not simply build connections; we architect permanent corridors of international compliance and sovereign alignment. Our scale is a reflection of the trust invested in us by global partners.'
    },
    vi: {
      tag: 'QUY MÔ TỔ CHỨC',
      title: 'Thước Đo Của Sự Tin Cậy Song Phương',
      desc: 'Chúng tôi không chỉ đơn thuần kết nối; chúng tôi thiết lập các hành lang tuân thủ quốc tế và hợp tác tổ chức bền vững. Quy mô của chúng tôi là minh chứng cho sự tin cậy từ các đối tác toàn cầu.'
    },
    zh: {
      tag: '机构运作规模',
      title: '双边信任的深度量化',
      desc: '我们不满足于简单的信息居间，而是致力于构筑永久性的合规与多边互信廊道。以下实体维度，真实展现了我们在全球伙伴中所承载的战略寄托。'
    }
  };

  const statsList = {
    en: [
      {
        value: '5+',
        label: 'Countries Connected',
        description: 'Forging deep academic and trade corridors between Vietnam and leading global economies.'
      },
      {
        value: '40+',
        label: 'Strategic Partnerships',
        description: 'Active agreements with accredited research universities, sovereign bodies, and enterprises.'
      },
      {
        value: '25+',
        label: 'Programs Delivered',
        description: 'High-integrity dual-degree models and transnational corporate exchanges.'
      },
      {
        value: '3,500+',
        label: 'Participants',
        description: 'Elite scholars and executive decision-makers empowered to lead cross-border initiatives.'
      },
      {
        value: '150+',
        label: 'International Collaborations',
        description: 'Successful multi-party research, trade alignment, and policy-briefing forums.'
      }
    ],
    vi: [
      {
        value: '5+',
        label: 'Quốc Gia Kết Nối',
        description: 'Kiến tạo hành lang kinh tế và giáo dục bền vững giữa Việt Nam và các cường quốc toàn cầu.'
      },
      {
        value: '40+',
        label: 'Đối Tác Chiến Lược',
        description: 'Thỏa thuận hợp tác chính thức với các viện nghiên cứu, bộ ban ngành và tập đoàn lớn.'
      },
      {
        value: '25+',
        label: 'Chương Trình Đã Triển Khai',
        description: 'Các chương trình liên kết cấp bằng đôi và trao đổi điều hành quốc tế thành công.'
      },
      {
        value: '3.500+',
        label: 'Học Viên & Lãnh Đạo',
        description: 'Thế hệ lãnh đạo và học giả tinh hoa được nâng cao năng lực hội nhập.'
      },
      {
        value: '150+',
        label: 'Hợp Tác Đa Quốc Gia',
        description: 'Các dự án nghiên cứu chung, diễn đàn thương mại và kết nối đa phương.'
      }
    ],
    zh: [
      {
        value: '5+',
        label: '连接核心国家',
        description: '在越南与全球最活跃、最先进的经济体之间建立常态化深层通路。'
      },
      {
        value: '40+',
        label: '战略合作伙伴',
        description: '与权威学术机构、政府规划部门及头部跨国企业建立常设双边条约联盟。'
      },
      {
        value: '25+',
        label: '落地特色项目',
        description: '严格执行的高校学位对齐框架、跨境高管研修班及产业转移计划。'
      },
      {
        value: '3,500+',
        label: '赋能高级学员',
        description: '累计培养的高潜力青年学者、大型集团高管以及中越跨境项目核心推手。'
      },
      {
        value: '150+',
        label: '多边国际协作',
        description: '成功协办的双边贸易代表团、前沿科学研究联合实验室以及闭门政策峰会。'
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
          <span className="text-[10px] font-mono tracking-[0.3em] text-brand-cream/30 uppercase">
            {currentLang === 'vi' ? 'HÀNH LANG VẬN HÀNH QUỐC TẾ' : currentLang === 'zh' ? '全球多边合规体系' : 'Bilateral Operational Corridors'}
          </span>
          <div className="flex flex-wrap gap-8 justify-center">
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              HO CHI MINH HQ
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              BEIJING DESK
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-cream/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              LONDON DESK
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
