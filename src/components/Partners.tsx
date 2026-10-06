import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translationStrings } from '../data';

type PartnerCategory = 'edtech_ai' | 'university' | 'enterprise' | 'association';

export default function Partners({ currentLang }: PartnersProps) {
  const strings = translationStrings.partners;
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('edtech_ai');

  const partnersData = {
    edtech_ai: {
      en: [
        { name: 'Blackboard / BB Learning Solutions', detail: 'LMS, online teaching, blended learning, assignments, assessments & learning analytics available for Vietnam market', acronym: 'BB / LMS' },
        { name: 'Radica Smart Classroom Solution', detail: 'Interactive displays, lecture recording, remote teaching & teacher training for future-ready schools', acronym: 'RADICA' },
        { name: 'STEM Learning & Robotics Portfolio', detail: 'Programming (Scratch/Blockly/Python), robotics kits, IoT, AI foundation learning & project-based learning', acronym: 'STEM' },
        { name: 'Intelligent Learning & Digital Campus', detail: 'Student progress tracking, early-warning risk alerts & academic operations support localized by VietBridge Study', acronym: 'EDTECH' },
        { name: 'Cross-Border Social AI Matrix', detail: 'Automated digital marketing tools, content workflows & data analytics stack for enterprises', acronym: 'MKT' }
      ],
      vi: [
        { name: 'Giải pháp Học tập Blackboard / BB', detail: 'Hệ thống LMS, dạy học trực tuyến, học kết hợp, bài tập, đánh giá và phân tích học tập cho trường học Việt Nam', acronym: 'BB / LMS' },
        { name: 'Giải pháp Lớp học Thông minh Radica', detail: 'Màn hình tương tác, ghi hình bài giảng, dạy học từ xa và đào tạo giáo viên cho trường học tương lai', acronym: 'RADICA' },
        { name: 'Danh mục Giải pháp STEM Learning & Robotics', detail: 'Lập trình, lắp ráp robot, IoT, kiến thức AI nền tảng và học tập qua dự án (project-based learning)', acronym: 'STEM' },
        { name: 'Hệ thống Học tập Thông minh & Khuôn viên Số', detail: 'Theo dõi tiến độ học sinh, cảnh báo sớm và hỗ trợ quản lý học vụ triển khai bởi VietBridge Study', acronym: 'EDTECH' },
        { name: 'Hệ thống AI Social Media Doanh nghiệp', detail: 'Công cụ ma trận nội dung số và phân tích chuyển đổi đa nền tảng', acronym: 'MKT' }
      ],
      zh: [
        { name: 'Blackboard / BB 在线教学与学习管理方案', detail: '支持 LMS 学习管理、在线教学、混合式学习、作业评估与学习数据分析，可面向越南市场销售和落地', acronym: 'BB / LMS' },
        { name: 'Radica Smart Classroom 智慧课堂方案', detail: '融合交互式教学大屏、课堂录制、远程教学与教师培训，面向未来学校提供本地化实施支持', acronym: 'RADICA' },
        { name: 'STEM Learning 编程、机器人与 AI 教育方案', detail: '覆盖编程、机器人套件、IoT 项目、AI 启蒙与项目式学习（PBL）的教育科技产品组合', acronym: 'STEM' },
        { name: '智能学习系统与数字校园支持方案', detail: '学情进度追踪、风险预警报告与教务资源协同，由 VietBridge Study 提供本地化实施与培训支持', acronym: 'EDTECH' },
        { name: '跨境数字营销与 AI 内容运营工具栈', detail: '面向企业的 Facebook / 小红书 / 微信公众号多平台内容生产与数据分析协同方案', acronym: 'MKT' }
      ]
    },
    university: {
      en: [
        { name: 'Vietnam National University (VNU)', detail: 'Technology & Applied Sciences Academic Corridor', acronym: 'VNU' },
        { name: 'Hanoi University of Science and Technology', detail: 'Smart Manufacturing & AI Joint Seminars', acronym: 'HUST' },
        { name: 'Foreign Trade University (FTU)', detail: 'Bilateral Cross-Border Commerce Research', acronym: 'FTU' },
        { name: 'Top Tier Chinese Research Universities', detail: 'Dual-degree 2+2 & 3+1 credit-transfer frameworks', acronym: 'UNI' },
        { name: 'ASEAN University Consortium', detail: 'Regional faculty exchange & student mobility scholarships', acronym: 'AUC' }
      ],
      vi: [
        { name: 'Đại học Quốc gia Hà Nội & TP.HCM', detail: 'Hành lang học thuật Công nghệ & Khoa học Ứng dụng', acronym: 'VNU' },
        { name: 'Đại học Bách Khoa Hà Nội', detail: 'Hội thảo chung về AI & Sản xuất Thông minh', acronym: 'HUST' },
        { name: 'Đại học Ngoại Thương (FTU)', detail: 'Nghiên cứu thương mại & logistics xuyên biên giới', acronym: 'FTU' },
        { name: 'Hệ thống Đại học Hàng đầu Trung Quốc', detail: 'Khung chuyển tiếp tín chỉ 2+2 và 3+1 cấp song bằng', acronym: 'UNI' },
        { name: 'Liên minh Đại học ASEAN', detail: 'Chương trình học bổng & trao đổi giảng viên liên khu vực', acronym: 'AUC' }
      ],
      zh: [
        { name: '越南国家大学（河内 / 胡志明市）', detail: '重点工程学院技术共建与产教融合联合基地', acronym: 'VNU' },
        { name: '河内工业大学与河内理工大学', detail: '智能制造工科人才定向联合培养与学术互访', acronym: 'HUST' },
        { name: '越南对外经贸大学 (FTU)', detail: '中越双边经贸与跨境电商产学研一体化实践', acronym: 'FTU' },
        { name: '国内知名高校国际教育学院', detail: '2+2 / 3+1 本硕中越联合培养与学分互认通路', acronym: 'UNI' },
        { name: '东盟区域高水平大学联盟', detail: '学者常态化互访、短期游学与青年科技骨干研学通道', acronym: 'AUC' }
      ]
    },
    enterprise: {
      en: [
        { name: 'Multinational Electronics Leaders', detail: 'Industrial supply chain localization & enterprise coaching', acronym: 'MFG' },
        { name: 'Southeast Asia Cross-Border E-commerce Brands', detail: 'Omnichannel incubation & local operational team build-out', acronym: 'ECOM' },
        { name: 'Tier-1 Industrial Parks & Logistics Hubs', detail: 'Bac Ninh, Hai Phong & Binh Duong investment facilities', acronym: 'PARK' },
        { name: 'Fintech & Cloud Infrastructure Providers', detail: 'Secure cross-border enterprise billing & server hosting', acronym: 'TECH' },
        { name: 'Bilingual Corporate Translation & Localization', detail: 'High-precision legal, fiscal & technical translation services', acronym: 'LOC' }
      ],
      vi: [
        { name: 'Tập đoàn Điện tử & Chế tạo Đa quốc gia', detail: 'Bản địa hóa chuỗi cung ứng & đào tạo nhân sự quản lý', acronym: 'MFG' },
        { name: 'Thương hiệu Thương mại Điện tử Xuyên biên giới', detail: 'Ươm tạo kênh bán hàng đa nền tảng & vận hành nội địa', acronym: 'ECOM' },
        { name: 'Khu Công Nghiệp & Cụm Logistics Trọng điểm', detail: 'Cơ sở sản xuất tại Bắc Ninh, Hải Phòng và Bình Dương', acronym: 'PARK' },
        { name: 'Nhà cung cấp Hạ tầng Đám mây & Fintech', detail: 'Thanh toán doanh nghiệp an toàn & lưu trữ máy chủ tuân thủ', acronym: 'TECH' },
        { name: 'Tổ chức Dịch thuật & Bản địa hóa Chuyên sâu', detail: 'Dịch vụ chuyển ngữ pháp lý, thuế và kỹ thuật chính xác', acronym: 'LOC' }
      ],
      zh: [
        { name: '跨国电子与精密制造领军企业', detail: '越南本地供应链管理提升与实战班期定制', acronym: 'MFG' },
        { name: '东南亚出海跨境品牌与品牌代运营方', detail: 'TikTok / Shopee 全渠道出海孵化与本土团队搭建', acronym: 'ECOM' },
        { name: '越南核心工业园区与保税物流基地', detail: '北宁、海防、平阳与同奈工业园区选址与对接网络', acronym: 'PARK' },
        { name: '云服务与跨境企业数字化基础设施', detail: '合规跨境服务器部署、ERP 集成与数据安全保障', acronym: 'TECH' },
        { name: '中越双语本地化与法律税务服务网络', detail: '高精度财税审计、法律文书与技术手册本地化支持', acronym: 'LOC' }
      ]
    },
    association: {
      en: [
        { name: 'China-Vietnam Chamber of Commerce Alliances', detail: 'Bilateral bilateral economic forum co-hosting', acronym: 'CHAM' },
        { name: 'Vietnam Association of Foreign Invested Enterprises', detail: 'Inbound FDI compliance policy updates & seminars', acronym: 'VAFIE' },
        { name: 'Vietnam Software & IT Services Association', detail: 'AI developer exchanges & tech talent matchmaking', acronym: 'VINASA' },
        { name: 'ASEAN-China Business Council', detail: 'Multilateral trade matchmaking & strategic briefings', acronym: 'ACBC' }
      ],
      vi: [
        { name: 'Liên minh Hiệp hội Thương mại Trung - Việt', detail: 'Đồng tổ chức diễn đàn kết nối kinh tế song phương', acronym: 'CHAM' },
        { name: 'Hiệp hội Doanh nghiệp Đầu tư Nước ngoài (VAFIE)', detail: 'Cập nhật chính sách FDI & hội thảo tuân thủ pháp luật', acronym: 'VAFIE' },
        { name: 'Hiệp hội Phần mềm và Dịch vụ CNTT (VINASA)', detail: 'Giao lưu lập trình viên AI & kết nối nhân tài công nghệ', acronym: 'VINASA' },
        { name: 'Hội đồng Kinh doanh ASEAN - Trung Quốc', detail: 'Kết nối thương mại đa phương & báo cáo chiến lược vĩ mô', acronym: 'ACBC' }
      ],
      zh: [
        { name: '中越双边各省市友好商会联盟', detail: '双边经贸交流团、闭门商务考察与产业对接会', acronym: 'CHAM' },
        { name: '越南外资企业协会 (VAFIE)', detail: '外商直接投资合规政策解读与政企对话交流', acronym: 'VAFIE' },
        { name: '越南软件与信息技术服务协会 (VINASA)', detail: 'AI 开发者交流大会与高新技术人才专场对接', acronym: 'VINASA' },
        { name: '中国-东盟商务理事会 (ACBC)', detail: '区域多边经贸合作对接与宏观经济战略研判', acronym: 'ACBC' }
      ]
    }
  };

  const tabLabels = {
    en: { edtech_ai: 'AI & EdTech Partners', university: 'Universities & Academies', enterprise: 'Industry & Enterprises', association: 'Chambers & Alliances' },
    vi: { edtech_ai: 'Đối tác AI & EdTech', university: 'Đại học & Viện nghiên cứu', enterprise: 'Doanh nghiệp & Chuỗi ngành', association: 'Hiệp hội & Thương hội' },
    zh: { edtech_ai: 'AI 与教育科技伙伴', university: '高等院校与科研院所', enterprise: '产业标杆与领航企业', association: '双边商会与行业协会' }
  };

  const currentLabels = tabLabels[currentLang] || tabLabels['en'];
  const activePartners = partnersData[activeCategory][currentLang] || partnersData[activeCategory]['en'];

  return (
    <section
      id="partners"
      className="bg-brand-cream py-44 md:py-64 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with generous negative space */}
        <div className="pb-16 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6" id="partners-header">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
              {currentLang === 'zh' ? '合作方向与协同网络' : currentLang === 'vi' ? 'ĐỊNH HƯỚNG HỢP TÁC & KẾT NỐI' : 'TARGET COLLABORATION FRAMEWORKS'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.05]">
              {currentLang === 'zh' ? '面向企业与教育机构提供协同支持' : currentLang === 'vi' ? 'Đồng Hành Hỗ Trợ Dự Án Xuyên Biên Giới' : 'Cross-Border Support Networks'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-blue/70 max-w-md font-light leading-relaxed">
            {currentLang === 'zh'
              ? '越桥集团与教育科技服务商、AI 解决方案企业、高校院所、实战培训机构、企业服务机构及本地合作伙伴紧密协同，为越南与海外市场提供端到端的一体化赋能解决方案。'
              : currentLang === 'vi'
              ? 'VietBridge Group phối hợp cùng các nhà cung cấp EdTech, doanh nghiệp AI, trường đại học, tổ chức đào tạo và đối tác bản địa để cung cấp giải pháp toàn diện cho thị trường Việt Nam và quốc tế.'
              : 'VietBridge works with education technology providers, AI solution companies, universities, training institutions, enterprise service firms and local partners to deliver integrated solutions for Vietnam and overseas markets.'}
          </p>
        </div>

        {/* Categories Tab selector - completely borders-free, elegant layout */}
        <div className="flex flex-wrap gap-8 border-b border-brand-blue/5 pb-6 mb-24" id="partners-categories-tabs">
          {(['edtech_ai', 'university', 'enterprise', 'association'] as PartnerCategory[]).map((category) => (
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
                      {partner.acronym} // ECOSYSTEM
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
        <div className="mt-24 text-center border-t border-brand-blue/5 pt-12" id="partners-integrity-note">
          <p className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-blue/40 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            {currentLang === 'vi' 
              ? 'Hợp tác phát triển giải pháp tích hợp và bản địa hóa dịch vụ tại Việt Nam.'
              : currentLang === 'zh'
              ? '开放协同，共同推进在越本地化交付与持续运营赋能。'
              : 'Collaborating to deliver localized integration and operational enablement in Vietnam.'}
          </p>
        </div>

      </div>
    </section>
  );
}

interface PartnersProps {
  currentLang: Language;
}
