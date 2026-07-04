import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translationStrings } from '../data';

type PartnerCategory = 'university' | 'enterprise' | 'government' | 'association' | 'media';

export default function Partners({ currentLang }: PartnersProps) {
  const strings = translationStrings.partners;
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('university');

  const partnersData = {
    university: {
      en: [
        { name: 'University of Oxford', detail: 'UK Academic Dual-Degree Framework', acronym: 'OXF' },
        { name: 'National University of Singapore', detail: 'NUS Executive Leadership Exchange', acronym: 'NUS' },
        { name: 'London School of Economics', detail: 'LSE Political Economy Syllabus', acronym: 'LSE' },
        { name: 'Vietnam National University', detail: 'VNU Advanced Engineering Corridor', acronym: 'VNU' },
        { name: 'INSEAD Business Faculty', detail: 'INSEAD ASEAN Cohort Program', acronym: 'INS' }
      ],
      vi: [
        { name: 'Đại học Oxford', detail: 'Đồng bộ chương trình đào tạo kép Anh', acronym: 'OXF' },
        { name: 'Đại học Quốc gia Singapore', detail: 'Chương trình Trao đổi Quản lý NUS', acronym: 'NUS' },
        { name: 'Trường Kinh tế London', detail: 'Chương trình Kinh tế Chính trị LSE', acronym: 'LSE' },
        { name: 'Đại học Quốc gia Việt Nam', detail: 'Hành lang Công nghệ Cao VNU', acronym: 'VNU' },
        { name: 'Viện Kinh doanh INSEAD', detail: 'Khóa Đào tạo Sáp nhập ASEAN', acronym: 'INS' }
      ],
      zh: [
        { name: '英国牛津大学', detail: '中英越联合本硕培养与互认对齐', acronym: 'OXF' },
        { name: '新加坡国立大学', detail: 'NUS 顶尖高管领导力发展专案', acronym: 'NUS' },
        { name: '伦敦政治经济学院', detail: 'LSE 双边宏观经济课程大纲合作', acronym: 'LSE' },
        { name: '越南国家大学', detail: 'VNU 尖端工程学与材料工程基地', acronym: 'VNU' },
        { name: 'INSEAD 国际商学院', detail: '东盟跨境并购及资本架构联合会', acronym: 'INS' }
      ]
    },
    enterprise: {
      en: [
        { name: 'Temasek Holdings', detail: 'Sovereign Wealth Asset Allocation', acronym: 'TEM' },
        { name: 'Vingroup Conglomerate', detail: 'Industrial Infrastructure Nodes', acronym: 'VIC' },
        { name: 'FPT Corporation', detail: 'Software Engineering Pipelines', acronym: 'FPT' },
        { name: 'London Stock Exchange', detail: 'Bilateral Listing Framework Alliance', acronym: 'LSE' },
        { name: 'Singapore Airlines', detail: 'Supply Chain & Transnational Freight', acronym: 'SIA' }
      ],
      vi: [
        { name: 'Quỹ Đầu tư Temasek', detail: 'Ủy thác điều phối tài sản công', acronym: 'TEM' },
        { name: 'Tập đoàn Vingroup', detail: 'Hạ tầng khu công nghiệp & Năng lượng', acronym: 'VIC' },
        { name: 'Tập đoàn Công nghệ FPT', detail: 'Hành lang nhân tài kỹ thuật phần mềm', acronym: 'FPT' },
        { name: 'Sở Giao dịch Chứng khoán London', detail: 'Liên kết niêm yết song phương LSEG', acronym: 'LSE' },
        { name: 'Singapore Airlines Cargo', detail: 'Vận tải linh kiện chuỗi cung ứng', acronym: 'SIA' }
      ],
      zh: [
        { name: '淡马锡控股', detail: '东盟主权信用及跨国配资支持', acronym: 'TEM' },
        { name: '越南 VinGroup 集团', detail: '产业园区与制造配套架构', acronym: 'VIC' },
        { name: 'FPT 科技电信集团', detail: '东南亚高新软硬件外包人才通道', acronym: 'FPT' },
        { name: '伦敦证券交易所集团', detail: 'LSEG 双边挂牌跨境资本对齐服务', acronym: 'LSE' },
        { name: '新加坡航空货运', detail: '半导体元器件及高精密保税货运', acronym: 'SIA' }
      ]
    },
    government: {
      en: [
        { name: 'Ministry of Education (MOET)', detail: 'Bilateral Academic Accreditation', acronym: 'MOE' },
        { name: 'Ministry of Investment (MPI)', detail: 'Inbound FDI Setup Clearance', acronym: 'MPI' },
        { name: 'Enterprise Singapore (ESG)', detail: 'Transnational Scaling Frameworks', acronym: 'ESG' },
        { name: 'UK Dept for Business & Trade', detail: 'UK-ASEAN Investment Corridor', acronym: 'DBT' },
        { name: 'Singapore EDB', detail: 'EDB Semiconductor Hub Sync', acronym: 'EDB' }
      ],
      vi: [
        { name: 'Bộ Giáo dục & Đào tạo (MOET)', detail: 'Hợp pháp hóa văn bằng song phương', acronym: 'MOE' },
        { name: 'Bộ Kế hoạch & Đầu tư (MPI)', detail: 'Xác thực hồ sơ FDI xâm nhập', acronym: 'MPI' },
        { name: 'Tổng cục Doanh nghiệp Singapore', detail: 'Khung định giá mở rộng toàn cầu', acronym: 'ESG' },
        { name: 'Bộ Thương mại & Kinh doanh Anh', detail: 'Hành lang đầu tư UK-ASEAN', acronym: 'DBT' },
        { name: 'Cục Phát triển Kinh tế Singapore', detail: 'Đồng bộ chuỗi bán dẫn EDB', acronym: 'EDB' }
      ],
      zh: [
        { name: '越南教育培训部 (MOET)', detail: '中越双学位法定互认和试点审批', acronym: 'MOE' },
        { name: '越南计划投资部 (MPI)', detail: '跨国大宗 FDI 准入合规审查备案', acronym: 'MPI' },
        { name: '新加坡企业发展局 (ESG)', detail: '跨国企业扩张及扶持基金衔接', acronym: 'ESG' },
        { name: '英国商业与贸易部 (DBT)', detail: '英越-东盟战略多边贸易投资走廊', acronym: 'DBT' },
        { name: '新加坡经济发展局 (EDB)', detail: '先进微芯片制造及半导体转移对齐', acronym: 'EDB' }
      ]
    },
    association: {
      en: [
        { name: 'UK-ASEAN Business Council', detail: 'Bilateral Corporate Trade Forum', acronym: 'UAB' },
        { name: 'Singapore Business Federation', detail: 'SBF Cross-Border Enterprise Sync', acronym: 'SBF' },
        { name: 'Association of High-Tech Firms', detail: 'VATE Advanced Fab Cluster Align', acronym: 'VAT' },
        { name: 'EuroCham Vietnam Federation', detail: 'ECCV Bilateral Tariffs Dialogue', acronym: 'ECC' },
        { name: 'British Chamber of Commerce', detail: 'BritCham Enterprise Alliance Seat', acronym: 'BCC' }
      ],
      vi: [
        { name: 'Hội đồng Doanh nghiệp Anh-ASEAN', detail: 'Diễn đàn thương mại song phương', acronym: 'UAB' },
        { name: 'Liên đoàn Doanh nghiệp Singapore', detail: 'Đồng bộ doanh nghiệp ngoại SBF', acronym: 'SBF' },
        { name: 'Hiệp hội Doanh nghiệp Công nghệ', detail: 'Liên kết chuỗi bán dẫn VATE', acronym: 'VAT' },
        { name: 'Hiệp hội Thương mại Châu Âu', detail: 'Đối thoại thuế quan EuroCham', acronym: 'ECC' },
        { name: 'Hiệp hội Doanh nghiệp Anh Quốc', detail: 'Hội đồng liên minh doanh nghiệp BritCham', acronym: 'BCC' }
      ],
      zh: [
        { name: '英东盟商业理事会 (UKABC)', detail: '中英跨国重大项目常态化对齐论坛', acronym: 'UAB' },
        { name: '新加坡工商联合总会 (SBF)', detail: 'SBF 跨境政商代表团专项考察对接', acronym: 'SBF' },
        { name: '越南高新技术企业协会', detail: 'VATE 电子制造及半导体行业集群', acronym: 'VAT' },
        { name: '越南欧洲商会 (EuroCham)', detail: 'EVFTA 自由贸易协定关税政策合规', acronym: 'ECC' },
        { name: '越南英国商会 (BritCham)', detail: '英资商业入驻及战略委员会常驻席位', acronym: 'BCC' }
      ]
    },
    media: {
      en: [
        { name: 'Bloomberg APAC Terminal', detail: 'ASEAN High-Growth Credit Tracking', acronym: 'BBG' },
        { name: 'Financial Times Asia Desk', detail: 'Bilateral FDI & Capital Flow Journals', acronym: 'FT' },
        { name: 'Nikkei Asia Bureau', detail: 'ASEAN Supply Chain Transition Reviews', acronym: 'NKK' },
        { name: 'Vietnam Investment Review', detail: 'VIR Sovereign Commercial Policy Logs', acronym: 'VIR' },
        { name: 'Forbes ASEAN', detail: 'Elite Young Leaders Spotlights', acronym: 'FRB' }
      ],
      vi: [
        { name: 'Cổng thông tin Bloomberg APAC', detail: 'Theo dõi xếp hạng tín dụng ASEAN', acronym: 'BBG' },
        { name: 'Financial Times Asia Desk', detail: 'Nhật ký phân tích dòng vốn FDI', acronym: 'FT' },
        { name: 'Tòa soạn Nikkei Asia', detail: 'Khảo sát tái cơ cấu chuỗi cung ứng', acronym: 'NKK' },
        { name: 'Báo Đầu tư Việt Nam (VIR)', detail: 'Đăng tải thông tin chính sách kinh tế', acronym: 'VIR' },
        { name: 'Forbes ASEAN', detail: 'Vinh danh nhà lãnh đạo xuất sắc', acronym: 'FRB' }
      ],
      zh: [
        { name: '彭博亚太商业终端 (APAC)', detail: '东盟高增长信托评级与资信动态追踪', acronym: 'BBG' },
        { name: '金融时报亚洲分社 (FT)', detail: '双边大宗实体 FDI 及资本跨境研究', acronym: 'FT' },
        { name: '日经亚洲通讯社 (Nikkei)', detail: '东盟半导体和供应链重构专题剖析', acronym: 'NKK' },
        { name: '越南投资报 (VIR)', detail: '计划投资部核心招商引资政策发布', acronym: 'VIR' },
        { name: '福布斯东盟代表处 (Forbes)', detail: '年度高增长行业先锋领袖推荐提名', acronym: 'FRB' }
      ]
    }
  };

  const tabLabels = {
    en: { university: 'University', enterprise: 'Enterprise', government: 'Government', association: 'Association', media: 'Media' },
    vi: { university: 'Đại học', enterprise: 'Doanh nghiệp', government: 'Bộ ngành', association: 'Hiệp hội', media: 'Truyền thông' },
    zh: { university: '一流高校合作', enterprise: '跨国龙头企业', government: '双边政府机构', association: '双边商会协会', media: '权威财经媒体' }
  };

  const currentLabels = tabLabels[currentLang] || tabLabels['en'];
  const activePartners = partnersData[activeCategory][currentLang] || partnersData[activeCategory]['en'];

  return (
    <section
      id="partners"
      className="bg-brand-cream py-44 md:py-64 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with generous negative space */}
        <div className="pb-16 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" id="partners-header">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
              {strings.title[currentLang]}
            </h2>
          </div>
        </div>

        {/* Categories Tab selector - completely borders-free, elegant layout */}
        <div className="flex flex-wrap gap-8 border-b border-brand-blue/5 pb-6 mb-24" id="partners-categories-tabs">
          {(['university', 'enterprise', 'government', 'association', 'media'] as PartnerCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-bold uppercase tracking-widest pb-3 transition-all duration-300 cursor-pointer focus:outline-none relative ${
                activeCategory === category
                  ? 'text-brand-orange'
                  : 'text-brand-blue/40 hover:text-brand-blue/70'
              }`}
              id={`partner-tab-${category}`}
            >
              {currentLabels[category]}
              {activeCategory === category && (
                <motion.div
                  layoutId="activePartnerLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
                />
              )}
            </button>
          ))}
        </div>

        {/* Partners Monochrome Grid with reduced borders and clean white space */}
        <div className="min-h-[250px]" id="partners-grid-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
              id={`partners-grid-${activeCategory}`}
            >
              {activePartners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="flex flex-col justify-between items-start py-4 group"
                  id={`partner-card-${activeCategory}-${index}`}
                >
                  <div className="w-full">
                    <span className="font-mono text-[10px] text-brand-orange font-semibold tracking-wider block mb-2">
                      {partner.acronym} // COVENANT
                    </span>
                    <p className="font-sans font-extrabold text-xl md:text-2.5xl text-brand-blue tracking-tight group-hover:text-brand-orange transition-colors duration-300 leading-tight">
                      {partner.name}
                    </p>
                    <p className="text-sm text-brand-blue/60 tracking-wide mt-3 font-light leading-snug">
                      {partner.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small, modern understated footer */}
        <div className="mt-32 text-center border-t border-brand-blue/5 pt-16" id="partners-integrity-note">
          <p className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-blue/30 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            {currentLang === 'vi' 
              ? 'Mọi liên kết được vận hành dưới khung pháp lý song phương chính thức.'
              : currentLang === 'zh'
              ? '所有战略同盟机构均在多边联合法律框架下运行。'
              : 'All affiliations are secured by active bilateral compliance covenants.'}
          </p>
        </div>

      </div>
    </section>
  );
}

interface PartnersProps {
  currentLang: Language;
}
