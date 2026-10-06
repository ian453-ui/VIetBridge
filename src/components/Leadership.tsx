import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, GraduationCap, Briefcase, Landmark, Building2, Link2 } from 'lucide-react';
import { Language } from '../data';

interface LeadershipProps {
  currentLang: Language;
}

type NetworkCategory = 'universities' | 'enterprises' | 'government' | 'associations' | 'partners';

export default function Leadership({ currentLang }: LeadershipProps) {
  const [selectedCategory, setSelectedCategory] = useState<NetworkCategory>('universities');

  const content = {
    en: {
      tagline: 'OUR SYSTEM',
      title: 'Our Global Network',
      description: 'VietBridge Group facilitates direct, high-trust integration between major pillars of international development. Select any node to explore connections.',
      categories: {
        universities: {
          label: 'Higher Education',
          description: 'Collaborating on dual-degree tracks, curriculum integration, and joint academic seminars.',
          nodes: ['Vietnam National University Network', 'Science & Engineering Faculties', 'Foreign Trade Universities', 'Bilateral Research Universities', 'Applied Technology Colleges']
        },
        enterprises: {
          label: 'Enterprises',
          description: 'Supporting cross-border manufacturing landing, local workforce training, and AI sales enablement.',
          nodes: ['FDI Manufacturing Enterprises', 'Industrial Park Tenants', 'Cross-Border E-Commerce Brands', 'Electronics & Hardware Makers', 'Bilingual Tech Innovators']
        },
        government: {
          label: 'Policy Dialogue',
          description: 'Following compliance frameworks, FDI regulatory standards, and bilateral trade facilitation.',
          nodes: ['Investment Advisory Working Groups', 'Bilateral Trade Policy Seminars', 'Education Modernization Standards', 'Vocational Training Dialogues', 'Industrial Development Councils']
        },
        associations: {
          label: 'Industry Associations',
          description: 'Engaging with commercial chambers, industrial delegations, and industry working committees.',
          nodes: ['Bilateral Business Chambers', 'Foreign Invested Enterprise Alliances', 'Software & IT Industry Associations', 'Cross-Border Trade Groups', 'High-Tech Parks Councils']
        },
        partners: {
          label: 'Solution Ecosystem',
          description: 'Partnering with technology providers, curricula creators, and localized service specialists.',
          nodes: ['Global EdTech Cloud Systems', 'Multimodal AI Labs', 'Smart Classroom Hardware Brands', 'STEM & Robotics Alliances', 'In-Country Legal & Tax Advisors']
        }
      }
    },
    vi: {
      tagline: 'HỆ THỐNG LIÊN KẾT',
      title: 'Mạng Lưới Hệ Sinh Thái',
      description: 'VietBridge Group kết nối các trụ cột công nghệ, trường đại học, doanh nghiệp và đối tác bản địa nhằm mang lại hiệu quả khai phóng thực tế.',
      categories: {
        universities: {
          label: 'Trường Đại học',
          description: 'Phối hợp phát triển chương trình liên kết, hội thảo học thuật và chuyển giao giải pháp giáo dục số.',
          nodes: ['Hệ thống Đại học Quốc gia', 'Các Viện Khoa học Kỹ thuật', 'Đại học Ngoại thương & Kinh tế', 'Đại học Đối tác Quốc tế', 'Trường Cao đẳng Công nghệ']
        },
        enterprises: {
          label: 'Doanh nghiệp',
          description: 'Đồng hành cùng doanh nghiệp sản xuất FDI, thương mại điện tử và nâng cao năng lực nhân sự.',
          nodes: ['Doanh nghiệp Sản xuất FDI', 'Doanh nghiệp trong KCN', 'Thương hiệu TMĐT Xuyên biên giới', 'Nhà sản xuất Điện tử & Phần cứng', 'Doanh nghiệp Công nghệ']
        },
        government: {
          label: 'Đối thoại Chính sách',
          description: 'Theo sát khung pháp lý đầu tư, tiêu chuẩn tuân thủ thuế và chính sách xúc tiến thương mại.',
          nodes: ['Nhóm Công tác Tư vấn Đầu tư', 'Tọa đàm Chính sách Thương mại', 'Chuẩn hóa Chuyển đổi số Giáo dục', 'Diễn đàn Đào tạo Nghề', 'Hội đồng Phát triển Công nghiệp']
        },
        associations: {
          label: 'Hiệp hội Doanh nghiệp',
          description: 'Kết nối mạng lưới hiệp hội thương mại, đoàn giao thương và liên minh ngành nghề song phương.',
          nodes: ['Hiệp hội Thương mại Song phương', 'Liên minh Doanh nghiệp Đầu tư Nước ngoài', 'Hiệp hội CNTT & Dịch vụ Phần mềm', 'Tổ chức Xúc tiến Thương mại', 'Hội đồng Khu Công nghệ cao']
        },
        partners: {
          label: 'Hệ sinh thái Giải pháp',
          description: 'Hợp tác cùng các nhà cung cấp EdTech, AI, phần cứng lớp học và chuyên gia tư vấn bản địa.',
          nodes: ['Hạ tầng EdTech & LMS Quốc tế', 'Lab AI & Công nghệ Ngôn ngữ', 'Hãng Thiết bị Phòng học Thông minh', 'Liên minh Giáo dục STEM & Robot', 'Chuyên gia Thuế & Luật Bản địa']
        }
      }
    },
    zh: {
      tagline: '多边生态',
      title: '中越与全球合作网络',
      description: '越桥集团立足真实落地需求，深度连接教育科技、高校院所、制造企业、行业商会与专业服务体系。',
      categories: {
        universities: {
          label: '高等合作院校',
          description: '推进校企产教融合、国际联合培养通路、学分互认交流与数字教学系统试点。',
          nodes: ['越南国家大学体系', '中越理工类工程院所', '对外经济与外贸类高校', '海外高水平合作伙伴', '应用型技术与职业学院']
        },
        enterprises: {
          label: '出海与实体企业',
          description: '助力中国出海制造企业、跨境电商团队及科技品牌完成在越落地与本地化运营。',
          nodes: ['在越外资制造实业', '核心工业园区入驻企业', '跨境电商与出海新品牌', '智能硬件与电子产业伙伴', '中越双语科技创新团队']
        },
        government: {
          label: '合规与政策研判',
          description: '密切跟踪中越双边投资监管动向、外商直接投资合规边界与劳动税务政策指引。',
          nodes: ['跨境投资顾问工作组', '双边经贸政策研讨交流', '教育数字化标准对接', '产教结合与技能实训网络', '工业园区政企对接机制']
        },
        associations: {
          label: '商会与行业协会',
          description: '常态化参与中越双边商会交流、闭门产业考察与跨境经贸投资促进平台。',
          nodes: ['中越双向友好商会', '外资企业与投资合作联盟', '软件与信息技术服务协会', '跨境电商与现代物流联盟', '高新技术园区联合委员会']
        },
        partners: {
          label: '联合解决方案生态',
          description: '联合全球优质教育科技品牌、AI 实验室、硬件厂商与在越资深财税法务顾问。',
          nodes: ['全球教育科技云与 LMS 平台', '多模态 AI 与音视频实验室', '智慧课堂软硬件生产厂商', 'STEM 与青少年创客机器人联盟', '在越执业法务与财税合规伙伴']
        }
      }
    }
  };

  const currentContent = content[currentLang] || content['en'];
  const activeCategoryData = currentContent.categories[selectedCategory];

  // Map category icons
  const iconMap = {
    universities: GraduationCap,
    enterprises: Briefcase,
    government: Landmark,
    associations: Building2,
    partners: Globe
  };

  const ActiveIcon = iconMap[selectedCategory];

  return (
    <section
      id="leadership"
      className="bg-brand-cream/20 py-44 md:py-64 relative overflow-hidden font-sans"
    >
      {/* Background radial soft light overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-brand-orange/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with generous negative space */}
        <div className="pb-16 mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12" id="network-header">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
              {currentContent.tagline}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
              {currentContent.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-blue/70 max-w-sm font-light">
            {currentContent.description}
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" id="network-workspace">
          
          {/* Left Column: Stylized SVG Connection Network Grid */}
          <div className="lg:col-span-7 bg-white p-8 md:p-14 relative aspect-square sm:aspect-[16/10] lg:aspect-square flex items-center justify-center select-none overflow-hidden" id="network-graph-container">
            {/* Fine architectural millimeter lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b214602_1px,transparent_1px),linear-gradient(to_bottom,#0b214603_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            {/* Premium Network Connection Illustration */}
            <svg className="absolute inset-0 w-full h-full text-brand-blue/10 pointer-events-none z-0" viewBox="0 0 500 500">
              {/* Outer boundary circles */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
              <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
              
              {/* Central crosshairs */}
              <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 4" />
              <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 4" />

              {/* Glowing animated connection paths from Center Hub to Categories */}
              <g className="text-brand-orange/30">
                <line x1="250" y1="250" x2="110" y2="150" stroke="currentColor" strokeWidth="1" />
                <line x1="250" y1="250" x2="390" y2="150" stroke="currentColor" strokeWidth="1" />
                <line x1="250" y1="250" x2="110" y2="350" stroke="currentColor" strokeWidth="1" />
                <line x1="250" y1="250" x2="390" y2="350" stroke="currentColor" strokeWidth="1" />
                <line x1="250" y1="250" x2="250" y2="70" stroke="currentColor" strokeWidth="1" />
              </g>
            </svg>

            {/* Central hub logo indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white p-4 rounded-full z-10">
              <Link2 className="w-6 h-6 stroke-[1.5]" />
            </div>

            {/* Category Anchor nodes orbiting the center */}
            <div className="absolute inset-0 z-10">
              
              {/* Node 1: Universities (Top Left) */}
              <button
                onClick={() => setSelectedCategory('universities')}
                className={`absolute focus:outline-none cursor-pointer transition-all duration-300`}
                style={{ left: '22%', top: '30%' }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`p-3.5 rounded-full border transition-all duration-500 ${selectedCategory === 'universities' ? 'bg-brand-orange border-brand-orange text-white scale-110' : 'bg-white border-brand-blue/10 text-brand-blue hover:border-brand-orange'}`}>
                    <GraduationCap className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap text-brand-blue">
                    {currentContent.categories.universities.label}
                  </span>
                </div>
              </button>

              {/* Node 2: Enterprises (Top Right) */}
              <button
                onClick={() => setSelectedCategory('enterprises')}
                className={`absolute focus:outline-none cursor-pointer transition-all duration-300`}
                style={{ left: '78%', top: '30%' }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`p-3.5 rounded-full border transition-all duration-500 ${selectedCategory === 'enterprises' ? 'bg-brand-orange border-brand-orange text-white scale-110' : 'bg-white border-brand-blue/10 text-brand-blue hover:border-brand-orange'}`}>
                    <Briefcase className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap text-brand-blue">
                    {currentContent.categories.enterprises.label}
                  </span>
                </div>
              </button>

              {/* Node 3: Government (Bottom Left) */}
              <button
                onClick={() => setSelectedCategory('government')}
                className={`absolute focus:outline-none cursor-pointer transition-all duration-300`}
                style={{ left: '22%', top: '70%' }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`p-3.5 rounded-full border transition-all duration-500 ${selectedCategory === 'government' ? 'bg-brand-orange border-brand-orange text-white scale-110' : 'bg-white border-brand-blue/10 text-brand-blue hover:border-brand-orange'}`}>
                    <Landmark className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap text-brand-blue">
                    {currentContent.categories.government.label}
                  </span>
                </div>
              </button>

              {/* Node 4: Associations (Bottom Right) */}
              <button
                onClick={() => setSelectedCategory('associations')}
                className={`absolute focus:outline-none cursor-pointer transition-all duration-300`}
                style={{ left: '78%', top: '70%' }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`p-3.5 rounded-full border transition-all duration-500 ${selectedCategory === 'associations' ? 'bg-brand-orange border-brand-orange text-white scale-110' : 'bg-white border-brand-blue/10 text-brand-blue hover:border-brand-orange'}`}>
                    <Building2 className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap text-brand-blue">
                    {currentContent.categories.associations.label}
                  </span>
                </div>
              </button>

              {/* Node 5: Partners (Top Center) */}
              <button
                onClick={() => setSelectedCategory('partners')}
                className={`absolute focus:outline-none cursor-pointer transition-all duration-300`}
                style={{ left: '50%', top: '14%' }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`p-3.5 rounded-full border transition-all duration-500 ${selectedCategory === 'partners' ? 'bg-brand-orange border-brand-orange text-white scale-110' : 'bg-white border-brand-blue/10 text-brand-blue hover:border-brand-orange'}`}>
                    <Globe className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap text-brand-blue">
                    {currentContent.categories.partners.label}
                  </span>
                </div>
              </button>

            </div>
          </div>

          {/* Right Column: Dynamic Editorial Network Card */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[400px]" id="network-detail-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-10 md:p-14 flex flex-col justify-between h-full"
                id={`network-details-${selectedCategory}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-brand-blue/10">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange uppercase">
                      SYSTEM NODE RELATION
                    </span>
                    <ActiveIcon className="w-5 h-5 text-brand-orange" />
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-none">
                    {activeCategoryData.label}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed mt-6 font-light">
                    {activeCategoryData.description}
                  </p>

                  {/* Connected Nodes List inside the panel */}
                  <div className="mt-10 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-brand-blue/30 uppercase block">
                      Connected Institutions
                    </span>
                    <ul className="space-y-4">
                      {activeCategoryData.nodes.map((node, index) => (
                        <motion.li
                          key={node}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-center gap-3 text-sm sm:text-base font-semibold text-brand-blue"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                          {node}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Understated bottom line */}
                <div className="mt-14 pt-6 border-t border-brand-blue/5 text-[10px] font-mono tracking-widest text-brand-blue/30 uppercase flex justify-between items-center">
                  <span>{currentLang === 'vi' ? 'ĐỊNH HƯỚNG HỢP TÁC' : currentLang === 'zh' ? '合作意向对齐' : 'COLLABORATION INTENT'}</span>
                  <span>{currentLang === 'vi' ? 'ĐANG CHUẨN BỊ' : currentLang === 'zh' ? '项目筹备推进中' : 'IN PREPARATION'}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
