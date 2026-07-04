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
          label: 'Universities',
          description: 'Securing double-degree pathways, dual-diploma validation, and collaborative academic curricula.',
          nodes: ['University of Oxford', 'National University of Singapore', 'London School of Economics', 'INSEAD Business Faculty', 'Vietnam National University']
        },
        enterprises: {
          label: 'Enterprises',
          description: 'Providing logistics corridors, supply chain diversification, and sovereign asset allocation.',
          nodes: ['Temasek Holdings', 'Vingroup Conglomerate', 'FPT Corporation', 'Singapore Airlines Cargo', 'Advanced Fabricators']
        },
        government: {
          label: 'Government',
          description: 'Formulating legal regulatory alignments, sovereign investment clearance, and bilateral agreements.',
          nodes: ['Ministry of Education (MOET)', 'Ministry of Investment (MPI)', 'Enterprise Singapore (ESG)', 'UK Dept for Business & Trade', 'Singapore EDB']
        },
        associations: {
          label: 'Industry Associations',
          description: 'Chamber memberships, bilateral economic forums, and industry group alignment.',
          nodes: ['UK-ASEAN Business Council', 'Singapore Business Federation', 'EuroCham Vietnam Federation', 'British Chamber of Commerce', 'High-Tech Association']
        },
        partners: {
          label: 'International Partners',
          description: 'Elite global investment consortiums, academic boards, and advisory chairs.',
          nodes: ['Russell Group Universities', 'Fortune 500 Leaders', 'Sovereign Wealth Funds', 'Bilateral Trade Commissions', 'Strategic Development Boards']
        }
      }
    },
    vi: {
      tagline: 'HỆ THỐNG LIÊN KẾT',
      title: 'Mạng Lưới Toàn Cầu',
      description: 'VietBridge Group thúc đẩy sự liên kết trực tiếp, tin cậy giữa các trụ cột phát triển kinh tế và giáo dục quốc tế. Chọn một nút để xem liên kết.',
      categories: {
        universities: {
          label: 'Trường Đại học',
          description: 'Đồng bộ hóa chương trình bằng đôi, công nhận tín chỉ và liên kết giáo sư quốc tế.',
          nodes: ['Đại học Oxford', 'Đại học Quốc gia Singapore', 'Trường Kinh tế London', 'Viện Kinh doanh INSEAD', 'Đại học Quốc gia Việt Nam']
        },
        enterprises: {
          label: 'Doanh nghiệp',
          description: 'Hành lang logistics, bản địa hóa chuỗi sản xuất và khơi thông dòng vốn tài chính.',
          nodes: ['Quỹ Đầu tư Temasek', 'Tập đoàn Vingroup', 'Tập đoàn FPT', 'Singapore Airlines Cargo', 'Advanced Fabricators']
        },
        government: {
          label: 'Cơ quan Chính phủ',
          description: 'Kiểm toán quy chế, hỗ trợ cấp phép đầu tư FDI và hiệp định xúc tiến song phương.',
          nodes: ['Bộ Giáo dục & Đào tạo', 'Bộ Kế hoạch & Đầu tư', 'Tổng cục Doanh nghiệp Singapore', 'Bộ Thương mại Anh', 'Cục Phát triển Kinh tế EDB']
        },
        associations: {
          label: 'Hiệp hội Doanh nghiệp',
          description: 'Kết nối thương vụ song phương, hiệp hội ngành hàng và đối thoại chính sách.',
          nodes: ['Hội đồng Doanh nghiệp Anh-ASEAN', 'Liên đoàn Doanh nghiệp Singapore', 'Hiệp hội Thương mại EuroCham', 'Hiệp hội BritCham', 'Hiệp hội Công nghệ Cao']
        },
        partners: {
          label: 'Đối tác Quốc tế',
          description: 'Các quỹ đầu tư lớn, hội đồng học thuật và ban cố vấn phát triển liên quốc gia.',
          nodes: ['Đại học Russell Group', 'Tập đoàn Fortune 500', 'Quỹ Tài chính Chủ quyền', 'Ủy ban Thương mại Song phương', 'Ban Phát triển Chiến lược']
        }
      }
    },
    zh: {
      tagline: '多边体系',
      title: '全球网络版图',
      description: 'VietBridge Group 致力于在国际发展的各个核心支柱之间，促成高信誉度的实质性跨境咬合。点击不同节点探索资源对接。',
      categories: {
        universities: {
          label: '一流合作高校',
          description: '保障双学位联合培养路径、跨境高校学分对齐核准与国际合规资质。',
          nodes: ['英国牛津大学', '新加坡国立大学', '伦敦政治经济学院', 'INSEAD 国际商学院', '越南国家大学']
        },
        enterprises: {
          label: '跨国龙头企业',
          description: '提供先进制造工厂规划、跨国供应链资产配置与本地化生产体系落户。',
          nodes: ['淡马锡主权资本', '越南 VinGroup 集团', 'FPT 科技电信集团', '新加坡航空物流', '先进微芯片制造']
        },
        government: {
          label: '双边政府机构',
          description: '双边监管合规、大宗 FDI 准入审查备案以及外商投资基金对接。',
          nodes: ['越南教育培训部', '越南计划投资部', '新加坡企业发展局', '英国商业与贸易部', '新加坡经济发展局']
        },
        associations: {
          label: '双边商会协会',
          description: '撮合跨国商会政商代表团、自由贸易协定关税对齐及行业集群。',
          nodes: ['英东盟商业理事会', '新加坡工商联合会', '越南欧洲商会', '越南英国商会', '高新技术企业协会']
        },
        partners: {
          label: '国际战略伙伴',
          description: '全球主权信托基金、精英学者培养体系以及双边贸易常设顾问席位。',
          nodes: ['罗素大学集团', '财富 500 强企业', '国家主权基金', '多边投资 facilitation 委员会', '双边战略顾问理事会']
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
          <div className="lg:col-span-7 bg-white p-8 md:p-14 relative aspect-square sm:aspect-[16/10] lg:aspect-square flex items-center justify-center select-none" id="network-graph-container">
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
                <div className="mt-14 pt-6 border-t border-brand-blue/5 text-[10px] font-mono tracking-widest text-brand-blue/20 uppercase flex justify-between items-center">
                  <span>SECURED DESK SYNC</span>
                  <span>MOU VALIDATED</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
