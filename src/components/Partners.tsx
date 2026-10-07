import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../data';

type PartnerCategory = 'edtech_ai' | 'university' | 'enterprise' | 'association';

interface PartnersProps {
  currentLang: Language;
}

export default function Partners({ currentLang }: PartnersProps) {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('edtech_ai');

  const partnersData = {
    edtech_ai: {
      en: [
        { name: 'Blackboard / BB Learning Solutions', detail: 'LMS, online teaching, blended learning, assignments, assessments & learning analytics available for Vietnam market', acronym: 'PORTFOLIO · BB / LMS' },
        { name: 'Radica Smart Classroom Solution', detail: 'Interactive displays, lecture recording, remote teaching & teacher training for future-ready schools', acronym: 'PORTFOLIO · RADICA' },
        { name: 'STEM Learning & Robotics Portfolio', detail: 'Programming (Scratch/Blockly/Python), robotics kits, IoT, AI foundation learning & project-based learning', acronym: 'PORTFOLIO · STEM' },
        { name: 'Intelligent Learning & Digital Campus', detail: 'Student progress tracking, early-warning risk alerts & academic operations support localized by VietBridge Study', acronym: 'PORTFOLIO · EDTECH' },
        { name: 'Cross-Border Social AI Workflow', detail: 'AI-assisted digital marketing tools, content workflows & data review support for enterprises', acronym: 'SOLUTION · AI OPS' }
      ],
      vi: [
        { name: 'Giải pháp Học tập Blackboard / BB', detail: 'Hệ thống LMS, dạy học trực tuyến, học kết hợp, bài tập, đánh giá và phân tích học tập cho trường học Việt Nam', acronym: 'DANH MỤC · BB / LMS' },
        { name: 'Giải pháp Lớp học Thông minh Radica', detail: 'Màn hình tương tác, ghi hình bài giảng, dạy học từ xa và đào tạo giáo viên cho trường học tương lai', acronym: 'DANH MỤC · RADICA' },
        { name: 'Danh mục Giải pháp STEM Learning & Robotics', detail: 'Lập trình, lắp ráp robot, IoT, kiến thức AI nền tảng và học tập qua dự án (project-based learning)', acronym: 'DANH MỤC · STEM' },
        { name: 'Hệ thống Học tập Thông minh & Khuôn viên Số', detail: 'Theo dõi tiến độ học sinh, cảnh báo sớm và hỗ trợ quản lý học vụ triển khai bởi VietBridge Study', acronym: 'DANH MỤC · EDTECH' },
        { name: 'Quy trình Nội dung AI Doanh nghiệp', detail: 'Công cụ hỗ trợ sản xuất nội dung số và theo dõi hiệu quả truyền thông đa nền tảng', acronym: 'GIẢI PHÁP · AI OPS' }
      ],
      zh: [
        { name: 'Blackboard / BB 在线教学与学习管理方案', detail: '支持 LMS 学习管理、在线教学、混合式学习、作业评估与学习数据分析，可面向越南市场提供与落地支持', acronym: '产品组合 · BB / LMS' },
        { name: 'Radica Smart Classroom 智慧课堂方案', detail: '融合交互式教学大屏、课堂录制、远程教学与教师培训，面向未来学校提供本地化实施支持', acronym: '产品组合 · RADICA' },
        { name: 'STEM Learning 编程、机器人与 AI 教育方案', detail: '覆盖编程、机器人套件、IoT 项目、AI 启蒙与项目式学习（PBL）的教育科技产品组合', acronym: '产品组合 · STEM' },
        { name: '智能学习系统与数字校园支持方案', detail: '学情进度追踪、风险预警报告与教务资源协同，由 VietBridge Study 提供本地化实施与培训支持', acronym: '产品组合 · EDTECH' },
        { name: '跨境数字营销与 AI 内容运营工具流', detail: '面向企业的 Facebook / 小红书 / 微信公众号多平台内容生产与数据分析协同方案', acronym: '技术方案 · AI OPS' }
      ]
    },
    university: {
      en: [
        { name: 'Vietnamese Universities & Higher Education Institutions', detail: 'Target Institution Type · Cooperation Direction: LMS deployment, smart classrooms & academic exchange (Project discussions in progress)', acronym: 'TARGET INSTITUTION TYPE · IN PROGRESS' },
        { name: 'Applied Economics, Finance & Management Faculties', detail: 'Target Institution Type · Cooperation Direction: Executive management seminar planning (including UEF project discussion: PENDING VERIFICATION)', acronym: 'COOPERATION DIRECTION · PENDING VERIFICATION' },
        { name: 'K12 Public, Private & Bilingual Schools in Vietnam', detail: 'Target Institution Type · Cooperation Direction: Radica Smart Classroom upgrades, STEM/AI curricula & teacher workshops (In progress)', acronym: 'TARGET INSTITUTION TYPE · IN PROGRESS' },
        { name: 'International Schools & Vocational Training Institutes', detail: 'Target Institution Type · Cooperation Direction: Blended learning platforms, robotics labs & bilingual skill training (In progress)', acronym: 'TARGET INSTITUTION TYPE · IN PROGRESS' },
        { name: 'Chinese Universities & International Education Faculties', detail: 'Target Institution Type · Cooperation Direction: Joint academic programs, student exchange & study-in-China pathways (In progress)', acronym: 'COOPERATION DIRECTION · IN PROGRESS' }
      ],
      vi: [
        { name: 'Các Trường Đại học & Cơ sở Giáo dục Đại học tại Việt Nam', detail: 'Loại hình Trường Mục tiêu · Định hướng Hợp tác: Triển khai LMS, lớp học thông minh và giao lưu học thuật (Đang trao đổi dự án)', acronym: 'LOẠI HÌNH TRƯỜNG MỤC TIÊU · IN PROGRESS' },
        { name: 'Các Khoa Kinh tế, Tài chính & Quản trị Ứng dụng', detail: 'Loại hình Trường Mục tiêu · Định hướng Hợp tác: Xây dựng hội thảo quản trị thực tiễn (bao gồm trao đổi dự án với UEF: PENDING VERIFICATION)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · PENDING VERIFICATION' },
        { name: 'Trường Phổ thông Công lập, Tư thục & Song ngữ (K12)', detail: 'Loại hình Trường Mục tiêu · Định hướng Hợp tác: Nâng cấp lớp học thông minh Radica, giáo trình STEM/AI và tập huấn giáo viên (Đang tiếp cận)', acronym: 'LOẠI HÌNH TRƯỜNG MỤC TIÊU · IN PROGRESS' },
        { name: 'Trường Quốc tế & Cơ sở Giáo dục Nghề nghiệp', detail: 'Loại hình Trường Mục tiêu · Định hướng Hợp tác: Hệ thống học kết hợp, phòng thực hành robotics và đào tạo kỹ năng song ngữ (Đang tiếp cận)', acronym: 'LOẠI HÌNH TRƯỜNG MỤC TIÊU · IN PROGRESS' },
        { name: 'Các Trường Đại học & Viện Giáo dục Quốc tế tại Trung Quốc', detail: 'Loại hình Trường Mục tiêu · Định hướng Hợp tác: Chương trình liên kết đào tạo, giao lưu sinh viên và lộ trình du học Trung Quốc (Đang trao đổi)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · IN PROGRESS' }
      ],
      zh: [
        { name: '越南高等院校与二级学院（目标合作院校类型）', detail: '合作方向：引入 Blackboard / BB 教学平台、智慧教室方案与学术交流合作（状态：项目接洽中）', acronym: '目标合作院校类型 · 项目接洽中' },
        { name: '经济、金融与企业管理相关院系（目标合作院校类型）', detail: '合作方向：围绕驻越企业管理实务研讨会开展课程共建接洽（其中 UEF 关系状态：PENDING VERIFICATION / 项目接洽中）', acronym: '合作方向 · PENDING VERIFICATION' },
        { name: '越南公立、私立及双语 K12 学校（目标合作院校类型）', detail: '合作方向：Radica Smart Classroom 智慧课堂改造、STEM/AI 编程机器人课程与师资培训（状态：项目接洽中）', acronym: '目标合作院校类型 · 项目接洽中' },
        { name: '国际学校与职业教育培训机构（目标合作院校类型）', detail: '合作方向：混合式学习系统部署、创客实验室配置与双语技能委培（状态：项目接洽中）', acronym: '目标合作院校类型 · 项目接洽中' },
        { name: '中国高校国际教育学院（目标合作院校类型）', detail: '合作方向：中越校际课程对接、短期研学交流与越南学生赴华留学申请指导（状态：项目接洽中）', acronym: '合作方向 · 项目接洽中' }
      ]
    },
    enterprise: {
      en: [
        { name: 'Chinese-Invested Manufacturing & Trading Enterprises', detail: 'Cooperation Direction: Corporate training on labor law, tax workflows & cross-cultural team management', acronym: 'SERVICE DIRECTION · ENTERPRISE' },
        { name: 'Cross-Border Brands & Consumer Companies', detail: 'Cooperation Direction: AI-assisted social media operations, localized content & digital channel building', acronym: 'SERVICE DIRECTION · AI MARKETING' },
        { name: 'Industrial Park & Factory Selection Channels', detail: 'Cooperation Direction: Southern & Northern Vietnam industrial park information research and site visit support', acronym: 'SERVICE DIRECTION · MARKET ENTRY' },
        { name: 'Local Legal, Tax & HR Service Channels', detail: 'Cooperation Direction: Connecting enterprises with local law firms, accounting agencies & HR specialists (In progress)', acronym: 'COOPERATION DIRECTION · IN PROGRESS' }
      ],
      vi: [
        { name: 'Doanh nghiệp Sản xuất & Thương mại có Vốn Đầu tư Nước ngoài', detail: 'Định hướng Hợp tác: Đào tạo doanh nghiệp về luật lao động, quy trình thuế và quản trị nhân sự đa văn hóa', acronym: 'ĐỊNH HƯỚNG DỊCH VỤ · DOANH NGHIỆP' },
        { name: 'Thương hiệu Xuyên biên giới & Doanh nghiệp Tiêu dùng', detail: 'Định hướng Hợp tác: Vận hành mạng xã hội bằng AI, bản địa hóa nội dung và phát triển kênh số', acronym: 'ĐỊNH HƯỚNG DỊCH VỤ · AI MARKETING' },
        { name: 'Kênh Thông tin Khu Công nghiệp & Nhà xưởng', detail: 'Định hướng Hợp tác: Nghiên cứu thông tin khu công nghiệp miền Nam, miền Bắc và hỗ trợ khảo sát thực tế', acronym: 'ĐỊNH HƯỚNG DỊCH VỤ · THỊ TRƯỜNG' },
        { name: 'Kênh Dịch vụ Pháp lý, Kế toán & Nhân sự Bản địa', detail: 'Định hướng Hợp tác: Phối hợp cùng các đơn vị tư vấn pháp lý, kế toán và nhân sự tại Việt Nam (Đang kết nối)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · IN PROGRESS' }
      ],
      zh: [
        { name: '在越华资制造与商贸企业（目标服务群体）', detail: '合作方向：提供劳动法规、财税流程梳理、AI 办公提效与跨文化管理内训方案', acronym: '服务方向 · 企业实务培训' },
        { name: '跨境出海品牌与消费品企业（目标服务群体）', detail: '合作方向：提供 AI 社媒代运营、中越双语内容生产与本地化数字营销支持', acronym: '服务方向 · AI 社媒运营' },
        { name: '工业园区与厂房选址信息渠道（合作方向）', detail: '合作方向：整理越南南北重点工业园区租金、配套与行业分布信息，协助企业实地考察', acronym: '合作方向 · 市场落地调研' },
        { name: '本地法律、财税与人事服务渠道（合作方向）', detail: '合作方向：按企业需求对接越南本地律所、财税代理与人事招聘机构（状态：项目接洽中）', acronym: '合作方向 · 项目接洽中' }
      ]
    },
    association: {
      en: [
        { name: 'Business Chambers & Enterprise Networks', detail: 'Cooperation Direction: Business information sharing, delegation visits & thematic seminar outreach (In progress)', acronym: 'COOPERATION DIRECTION · IN PROGRESS' },
        { name: 'Education & EdTech Industry Communities', detail: 'Cooperation Direction: Smart classroom demonstrations, STEM competition exchanges & educator workshops (In progress)', acronym: 'COOPERATION DIRECTION · IN PROGRESS' },
        { name: 'Cross-Border Trade & Talent Platforms', detail: 'Cooperation Direction: Bilingual talent recruitment matching & school-enterprise internship pathways (In progress)', acronym: 'COOPERATION DIRECTION · IN PROGRESS' }
      ],
      vi: [
        { name: 'Hiệp hội Doanh nghiệp & Mạng lưới Thương mại', detail: 'Định hướng Hợp tác: Chia sẻ thông tin thị trường, hỗ trợ đoàn khảo sát và giới thiệu hội thảo chuyên đề (Đang trao đổi)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · IN PROGRESS' },
        { name: 'Cộng đồng Giáo dục & Công nghệ Giáo dục (EdTech)', detail: 'Định hướng Hợp tác: Giới thiệu lớp học thông minh, giao lưu STEM và hội thảo phương pháp giảng dạy (Đang trao đổi)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · IN PROGRESS' },
        { name: 'Kênh Kết nối Thương mại & Nhân tài Song ngữ', detail: 'Định hướng Hợp tác: Kết nối tuyển dụng nhân sự song ngữ Trung - Việt và thực tập giữa nhà trường - doanh nghiệp (Đang trao đổi)', acronym: 'ĐỊNH HƯỚNG HỢP TÁC · IN PROGRESS' }
      ],
      zh: [
        { name: '跨境商业商会与企业交流网络（合作方向）', detail: '合作方向：开展越南市场信息交流、商务考察团接待与专题管理研讨活动接洽（状态：项目接洽中）', acronym: '合作方向 · 项目接洽中' },
        { name: '教育行业与教育科技交流平台（合作方向）', detail: '合作方向：推进智慧课堂方案展示、STEM 科创活动交流与数字化教学工作坊（状态：项目接洽中）', acronym: '合作方向 · 项目接洽中' },
        { name: '中越双语人才与校企合作渠道（合作方向）', detail: '合作方向：连接企业用人需求与院校双语人才培养、实习推荐及岗前实训（状态：项目接洽中）', acronym: '合作方向 · 项目接洽中' }
      ]
    }
  };

  const tabLabels = {
    en: {
      edtech_ai: 'EdTech & AI Product Portfolio',
      university: 'Target Partner Institution Types',
      enterprise: 'Enterprise Service Directions',
      association: 'Network & Cooperation Directions'
    },
    vi: {
      edtech_ai: 'Danh mục Sản phẩm EdTech & AI',
      university: 'Loại hình Trường học Mục tiêu',
      enterprise: 'Định hướng Dịch vụ Doanh nghiệp',
      association: 'Định hướng Kết nối Hợp tác'
    },
    zh: {
      edtech_ai: '教育科技与 AI 产品组合',
      university: '目标合作院校类型',
      enterprise: '企业服务合作方向',
      association: '商会与渠道合作方向'
    }
  };

  const currentLabels = tabLabels[currentLang] || tabLabels['en'];
  const activePartners = partnersData[activeCategory][currentLang] || partnersData[activeCategory]['en'];

  return (
    <section
      id="partners"
      className="bg-brand-cream py-32 md:py-44 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6" id="partners-header">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
              {currentLang === 'zh' ? '产品组合、目标合作院校类型与合作方向' : currentLang === 'vi' ? 'DANH MỤC SẢN PHẨM & ĐỊNH HƯỚNG HỢP TÁC' : 'PRODUCT PORTFOLIO & COOPERATION DIRECTIONS'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
              {currentLang === 'zh' ? '技术产品组合与目标合作方向' : currentLang === 'vi' ? 'Danh Mục Giải Pháp & Định Hướng Kết Nối' : 'Technology Portfolio & Target Cooperation Directions'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-blue/70 max-w-md font-light leading-relaxed">
            {currentLang === 'zh'
              ? '展示 VietBridge 可面向越南市场提供的教育科技与 AI 产品组合，以及正在推进接洽的目标合作院校类型、企业服务方向与本地渠道合作方向（标注“项目接洽中”的条目代表合作意向或筹备方向，非已签署独家合作声明）。'
              : currentLang === 'vi'
              ? 'Giới thiệu danh mục sản phẩm công nghệ giáo dục và AI sẵn sàng cho thị trường Việt Nam, cùng các loại hình trường học mục tiêu và định hướng hợp tác đang trong quá trình trao đổi dự án.'
              : 'Showcasing our education technology and AI product portfolio available for the Vietnam market, alongside target partner institution types and cooperation directions currently in project discussion.'}
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap gap-8 border-b border-brand-blue/10 pb-6 mb-16" id="partners-categories-tabs">
          {(['edtech_ai', 'university', 'enterprise', 'association'] as PartnerCategory[]).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-bold uppercase tracking-widest pb-3 transition-all duration-300 cursor-pointer focus:outline-none relative ${
                activeCategory === category
                  ? 'text-brand-orange'
                  : 'text-brand-blue/50 hover:text-brand-blue/80'
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

        {/* Grid */}
        <div className="min-h-[250px]" id="partners-grid-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
              id={`partners-grid-${activeCategory}`}
            >
              {activePartners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="flex flex-col justify-between items-start p-6 rounded-2xl bg-white border border-brand-blue/8 group"
                  id={`partner-card-${activeCategory}-${index}`}
                >
                  <div className="w-full">
                    <span className="font-mono text-[10px] text-brand-orange font-semibold tracking-wider block mb-2">
                      {partner.acronym}
                    </span>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-brand-blue tracking-tight group-hover:text-brand-orange transition-colors duration-300 leading-[1.4]">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-blue/65 tracking-wide mt-3 font-light leading-relaxed">
                      {partner.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Boundary Note */}
        <div className="mt-16 text-center border-t border-brand-blue/10 pt-8" id="partners-integrity-note">
          <p className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider text-brand-blue/55">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
            {currentLang === 'vi' 
              ? 'Lưu ý: Các mục "Loại hình Trường học Mục tiêu" và "Định hướng Hợp tác" thể hiện phương hướng kết nối dự án (IN PROGRESS / PENDING VERIFICATION).'
              : currentLang === 'zh'
              ? '证据边界说明：“目标合作院校类型”与“合作方向”仅代表业务接洽方向（项目接洽中 / PENDING VERIFICATION），不代表已签署官方排他协议或联合主办声明。'
              : 'Evidence Boundary Note: "Target Partner Institution Types" and "Cooperation Directions" indicate project outreach directions (IN PROGRESS / PENDING VERIFICATION).'}
          </p>
        </div>

      </div>
    </section>
  );
}
