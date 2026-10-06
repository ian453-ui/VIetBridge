import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, Check, BookOpen, Brain, Monitor, Cpu, School, Globe2, GraduationCap, 
  ChevronRight, CheckCircle2, X, Sparkles, Shield
} from 'lucide-react';
import { Language, educationSolutions, representativeCases, CaseStudyItem } from '../data';
import Consultation from './Consultation';

interface EducationPageProps {
  currentLang: Language;
  onNavigate: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function EducationPage({ currentLang, onNavigate }: EducationPageProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [selectedSolutionTrack, setSelectedSolutionTrack] = useState<string>('all');

  const solutions = educationSolutions[currentLang] || educationSolutions['en'];
  const allCases = representativeCases[currentLang] || representativeCases['en'];
  // Filter cases relevant to VietBridge Study / Education
  const educationCases = allCases.filter(c => 
    c.id === 'case-edu-localize' || c.id === 'case-smart-stem' || c.categoryKey === 'education'
  );

  const icons = [BookOpen, Monitor, Cpu, Brain, School, GraduationCap];

  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'VietBridge Study · AI Education Enablement',
      badge: 'BUSINESS LINE 02 · VIETBRIDGE STUDY',
      brandSub: 'Technology Product Portfolio · Solution Partner Ecosystem',
      brandHeader: 'VietBridge Study',
      title: 'AI Education Enablement for Future-ready Schools',
      positioning: 'VietBridge Study brings AI-powered teaching, learning and smart classroom solutions to schools and education institutions in Vietnam.',
      tagline: 'Blackboard / BB LMS · Radica Smart Classroom · STEM, AI & Robotics · Intelligent Learning · Teacher Training',
      description: 'VietBridge Study helps schools and education institutions in Vietnam upgrade teaching, learning and classroom experience through Blackboard / BB learning systems, Radica Smart Classroom solutions, STEM/AI education programs, teacher training and localized implementation support.',
      stats: [
        { value: 'Blackboard', label: 'LMS & Blended Learning Solutions' },
        { value: 'Radica', label: 'Smart Classroom Turnkey Spaces' },
        { value: 'STEM & AI', label: 'Coding, Robotics & IoT Curricula' },
        { value: 'Localized', label: 'Teacher Training & Implementation' }
      ],
      safeNote: 'Education technology solutions available for Vietnam market · Localized implementation by VietBridge Study',
      filterTitle: '6 Core Education Product Modules',
      filterAll: 'All VietBridge Study Modules',
      targetTag: 'WHO WE SERVE',
      targetTitle: 'Target Schools & Education Institutions',
      targetSubtitle: 'VietBridge Study serves educational institutions across Vietnam seeking practical digital transformation, smart classroom upgrades, and cross-border academic cooperation.',
      targets: [
        { title: 'Universities & Colleges', desc: 'Blackboard / BB LMS platforms, blended teaching systems, smart lecture halls, and China-Vietnam university cooperation.' },
        { title: 'K12 Public & Private Schools', desc: 'Radica Smart Classroom upgrades, student progress tracking, STEM/robotics courses, and teacher digital training.' },
        { title: 'International & Bilingual Schools', desc: 'Global-standard LMS environments, project-based STEM & AI labs, and bilingual teaching resource integration.' },
        { title: 'Vocational & Technical Institutions', desc: 'Applied technology curricula, IoT & robotics training labs, and enterprise-aligned talent cultivation programs.' },
        { title: 'Education Groups & Training Centers', desc: 'Multi-campus digital teaching management, standardized courseware delivery, and learning analytics.' },
        { title: 'Cross-border Education Programs', desc: 'Joint academic programs, teacher exchange, Chinese language (HSK) training, and study-in-China pathways.' }
      ],
      processTitle: 'How VietBridge Study Delivers: 5-Step Implementation Model',
      processSubtitle: 'We do not simply sell software licenses or hardware boxes. VietBridge Study provides end-to-end localized implementation and training support.',
      tiers: [
        { num: 'Step 01', title: 'School Needs Assessment', desc: 'Evaluate existing classroom infrastructure, teaching workflows, curriculum goals, and digital readiness.' },
        { num: 'Step 02', title: 'Solution Design & Product Matching', desc: 'Configure the right technology product portfolio across Blackboard / BB, Radica Smart Classroom, and STEM Learning.' },
        { num: 'Step 03', title: 'Pilot Classroom / Platform Deployment', desc: 'Deploy LMS platforms, smart classroom hardware/software, and STEM learning kits for pilot or campus use.' },
        { num: 'Step 04', title: 'Teacher Training & Curriculum Integration', desc: 'Deliver hands-on teacher workshops so educators confidently use platforms, smart displays, and STEM lesson plans.' },
        { num: 'Step 05', title: 'Ongoing Operation & Upgrade Support', desc: 'Provide continuous localized technical support, usage review, competition guidance, and iterative upgrades.' }
      ],
      casesTitle: 'VietBridge Study Representative Solution Cases',
      casesSubtitle: 'Practical education technology localization and smart classroom + STEM solution portfolios for Vietnam schools.',
      viewCase: 'View Solution Case',
      ctaCardTitle: 'Inquire About VietBridge Study Solutions',
      ctaCardDesc: 'Connect with VietBridge Study for Blackboard / BB, Radica Smart Classroom, STEM/AI programs, or school cooperation.'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'VietBridge Study · Khai phóng Giáo dục bằng AI',
      badge: 'TRỤ CỘT KINH DOANH 02 · VIETBRIDGE STUDY',
      brandSub: 'Danh mục Sản phẩm Công nghệ Giáo dục · Hệ sinh thái Đối tác Giải pháp',
      brandHeader: 'VietBridge Study',
      title: 'Giải pháp Khai phóng Giáo dục bằng AI cho Trường học Tương lai',
      positioning: 'VietBridge Study mang các giải pháp giảng dạy, học tập ứng dụng AI và lớp học thông minh đến các trường học và tổ chức giáo dục tại Việt Nam.',
      tagline: 'Blackboard / BB LMS · Radica Smart Classroom · STEM, AI & Robotics · Học tập Thông minh · Đào tạo Giáo viên',
      description: 'VietBridge Study giúp các trường học và tổ chức giáo dục tại Việt Nam nâng cấp trải nghiệm giảng dạy, học tập và lớp học thông qua hệ thống học tập Blackboard / BB, giải pháp Lớp học Thông minh Radica, chương trình giáo dục STEM/AI, đào tạo giáo viên và hỗ trợ triển khai bản địa hóa.',
      stats: [
        { value: 'Blackboard', label: 'Giải pháp LMS & Dạy học Kết hợp' },
        { value: 'Radica', label: 'Giải pháp Lớp học Thông minh' },
        { value: 'STEM & AI', label: 'Chương trình Lập trình & Robotics' },
        { value: 'Bản địa hóa', label: 'Đào tạo Giáo viên & Triển khai' }
      ],
      safeNote: 'Các giải pháp công nghệ giáo dục sẵn sàng cho thị trường Việt Nam · Triển khai bản địa hóa bởi VietBridge Study',
      filterTitle: '6 Mô-đun Sản phẩm Giáo dục Trọng tâm',
      filterAll: 'Tất cả Mô-đun VietBridge Study',
      targetTag: 'ĐỐI TƯỢNG PHỤC VỤ',
      targetTitle: 'Các Trường học & Tổ chức Giáo dục Mục tiêu',
      targetSubtitle: 'VietBridge Study đồng hành cùng các cơ sở giáo dục tại Việt Nam nâng cấp hệ thống dạy học số, lớp học thông minh và hợp tác quốc tế.',
      targets: [
        { title: 'Trường Đại học & Cao đẳng', desc: 'Triển khai hệ thống LMS Blackboard / BB, mô hình học kết hợp (blended learning), giảng đường thông minh và hợp tác liên trường.' },
        { title: 'Trường Phổ thông Công lập & Tư thục (K12)', desc: 'Nâng cấp lớp học thông minh Radica, theo dõi tiến độ học sinh, chương trình STEM/robotics và bồi dưỡng giáo viên.' },
        { title: 'Trường Quốc tế & Song ngữ', desc: 'Môi trường dạy học số chuẩn quốc tế, phòng thực hành sáng tạo STEM & AI và tích hợp học liệu đa ngôn ngữ.' },
        { title: 'Cơ sở Giáo dục Nghề nghiệp & Kỹ thuật', desc: 'Chương trình thực hành công nghệ ứng dụng, phòng lab IoT & robotics và đào tạo nhân lực gắn kết doanh nghiệp.' },
        { title: 'Tập đoàn Giáo dục & Trung tâm Đào tạo', desc: 'Quản lý dạy học đồng bộ đa cơ sở, chuẩn hóa tài nguyên bài giảng số và báo cáo phân tích học tập.' },
        { title: 'Chương trình Hợp tác Giáo dục Quốc tế', desc: 'Hợp tác chương trình Việt - Trung, giao lưu giảng viên, đào tạo tiếng Trung HSK và định hướng du học Trung Quốc.' }
      ],
      processTitle: 'Quy trình Triển khai 5 Bước của VietBridge Study',
      processSubtitle: 'Không chỉ cung cấp phần mềm hay thiết bị đơn lẻ, VietBridge Study đồng hành triển khai bản địa hóa và đào tạo giáo viên toàn diện.',
      tiers: [
        { num: 'Bước 01', title: 'Khảo sát Nhu cầu Nhà trường', desc: 'Đánh giá hiện trạng hạ tầng lớp học, quy trình giảng dạy, mục tiêu chương trình và mức độ sẵn sàng chuyển đổi số.' },
        { num: 'Bước 02', title: 'Thiết kế Giải pháp & Phối hợp Sản phẩm', desc: 'Lựa chọn tổ hợp sản phẩm phù hợp từ Blackboard / BB, Radica Smart Classroom đến STEM Learning.' },
        { num: 'Bước 03', title: 'Triển khai Lớp học Mẫu & Nền tảng', desc: 'Cấu hình nền tảng LMS, lắp đặt thiết bị lớp học thông minh và trang bị bộ học cụ STEM cho lớp học thí điểm.' },
        { num: 'Bước 04', title: 'Đào tạo Giáo viên & Tích hợp Chương trình', desc: 'Tập huấn thực hành giúp giáo viên làm chủ nền tảng số, thiết bị tương tác và giáo án STEM theo dự án.' },
        { num: 'Bước 05', title: 'Đồng hành Vận hành & Nâng cấp', desc: 'Hỗ trợ kỹ thuật bản địa hóa liên tục, đánh giá hiệu quả sử dụng, hướng dẫn thi đấu STEM và nâng cấp định kỳ.' }
      ],
      casesTitle: 'Dự Án & Tổ Hợp Giải Pháp Điển Hình của VietBridge Study',
      casesSubtitle: 'Thực tiễn bản địa hóa nền tảng học tập số và tổ hợp lớp học thông minh + STEM cho trường học Việt Nam.',
      viewCase: 'Xem Chi Tiết Giải Pháp',
      ctaCardTitle: 'Tư vấn Giải pháp Giáo dục VietBridge Study',
      ctaCardDesc: 'Kết nối cùng VietBridge Study để trao đổi về Blackboard / BB, Radica Smart Classroom, STEM/AI hoặc hợp tác giáo dục.'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: 'VietBridge Study｜AI 教育赋能',
      badge: '核心业务产线 02 · VIETBRIDGE STUDY',
      brandSub: '教育科技产品组合 · 技术与解决方案合作生态',
      brandHeader: 'VietBridge Study',
      title: '面向未来学校的 AI 教育赋能方案',
      positioning: 'VietBridge Study 面向越南学校、高校与教育机构，引入并落地 AI 教育教学系统、智慧课堂、STEM/AI 课程和教师培训方案。',
      tagline: 'Blackboard / BB 学习管理平台 · Radica 智慧课堂 · STEM/AI/机器人教育 · 智能学习与教师培训',
      description: 'VietBridge Study 帮助越南学校与教育机构通过 Blackboard / BB 学习管理系统、Radica 智慧课堂、STEM/AI 教育课程、教师培训与本地化实施服务，升级教学、学习与课堂体验。',
      stats: [
        { value: 'Blackboard', label: 'BB 在线教学与 LMS 平台' },
        { value: 'Radica', label: 'Smart Classroom 智慧课堂方案' },
        { value: 'STEM & AI', label: '编程、机器人与 IoT 课程方案' },
        { value: '本地化落地', label: '教师培训与全流程实施支持' }
      ],
      safeNote: '可面向越南市场销售和落地的教育科技方案 · 由 VietBridge Study 提供本地化实施与培训支持',
      filterTitle: 'VietBridge Study 六大核心教育产品模块',
      filterAll: '全部教育方案模块',
      targetTag: '服务对象 · WHO WE SERVE',
      targetTitle: '面向越南多层次院校与教育机构',
      targetSubtitle: 'VietBridge Study 并非普通留学中介，而是面向越南学校与教育机构的教育教学产品与教育科技解决方案品牌。',
      targets: [
        { title: '高等院校与职业院校', desc: '引入 Blackboard / BB 学习管理平台、混合式教学系统、智慧教室建设与中越院校联合培养合作。' },
        { title: 'K12 公立与私立学校', desc: '提供 Radica Smart Classroom 智慧课堂升级、STEM/AI 与机器人课程体系、学情追踪及教师数字化培训。' },
        { title: '国际学校与双语学校', desc: '搭建符合国际化教学标准的 LMS 平台、项目式（PBL）创客与 AI 实验室及多语种教学资源管理。' },
        { title: '职业教育与技能培训机构', desc: '配置应用型实训课程、IoT 与智能硬件教学套件，并结合企业用人需求开展定向人才培养。' },
        { title: '教育集团与培训机构', desc: '支持多校区统一教学管理、标准化数字课程分发、在线作业测评与学习数据分析。' },
        { title: '中越及国际教育合作项目', desc: '推动课程共建、师资培训互访、青少年科技竞赛交流，以及越南学生中文培训与赴华留学规划。' }
      ],
      processTitle: 'VietBridge Study 五步本地化落地模式',
      processSubtitle: '我们不只销售单一软件或硬件设备，而是围绕学校真实教学场景提供从诊断、部署、师资实训到持续运营的完整落地支持。',
      tiers: [
        { num: '第一步', title: '学校需求诊断与场景评估', desc: '深入了解学校现有教室条件、教学管理痛点、课程建设目标与数字化基础。' },
        { num: '第二步', title: '教育科技产品组合与方案设计', desc: '基于学校需求匹配 Blackboard / BB、Radica Smart Classroom、STEM Learning 等产品组合。' },
        { num: '第三步', title: '样板教室建设与平台系统部署', desc: '推进 LMS 教学平台配置、智慧课堂软硬件部署或 STEM 创新实验室样板间落地。' },
        { num: '第四步', title: '教师培训与课程教学融合', desc: '开展面向本地教师的平台操作实训、智慧课堂互动教学法与 STEM 项目式课程培训。' },
        { num: '第五步', title: '持续运营陪伴与迭代升级支持', desc: '提供本地化技术支持、教学应用复盘、青少年竞赛实践指导与后续扩班升级服务。' }
      ],
      casesTitle: 'VietBridge Study 代表性教育方案实践',
      casesSubtitle: '围绕 Blackboard / BB 教学平台本地化、Radica 智慧课堂与 STEM 教育方案组合，推动先进教育科技在越南学校真实落地。',
      viewCase: '查看方案详情',
      ctaCardTitle: '咨询 VietBridge Study 教育解决方案',
      ctaCardDesc: '欢迎越南及国际学校、高校、教育机构联系 VietBridge Study，获取产品资料、样板间方案或合作洽谈。'
    }
  };

  const currentT = t[currentLang] || t['en'];

  return (
    <div className="bg-[#FAF9F6] text-brand-blue min-h-screen pt-24 pb-20">
      
      {/* 1. Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-brand-blue/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 text-xs font-mono">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-brand-blue/60 hover:text-brand-orange transition-colors cursor-pointer"
          >
            {currentT.breadcrumbHome}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-brand-blue/30" />
          <span className="text-brand-orange font-bold uppercase tracking-wider">
            {currentT.breadcrumbCurrent}
          </span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-brand-blue/10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-mono uppercase tracking-widest font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentT.badge}
                </span>
                <span className="px-3 py-1 bg-brand-blue/5 text-brand-blue/70 text-[10px] font-mono uppercase tracking-widest font-semibold">
                  {currentT.brandSub}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-brand-orange tracking-tight">
                  {currentT.brandHeader}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.08]">
                  {currentT.title}
                </h1>
              </div>

              <div className="p-4 bg-[#FAF9F6] border-l-2 border-brand-orange text-sm sm:text-base font-medium text-brand-blue">
                {currentT.positioning}
              </div>

              <p className="text-sm sm:text-base font-mono font-semibold text-brand-orange">
                {currentT.tagline}
              </p>

              <p className="text-base sm:text-lg text-brand-blue/75 leading-relaxed font-light max-w-2xl">
                {currentT.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('education-intake-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{currentT.ctaCardTitle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('education-solutions-list');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#FAF9F6] border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-all duration-300 cursor-pointer"
                >
                  {currentT.filterTitle}
                </button>
              </div>
            </div>

            {/* Visual Stats Card */}
            <div className="lg:col-span-4 bg-[#070D19] text-white p-8 sm:p-10 space-y-8 border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 blur-2xl pointer-events-none" />
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold">
                  TECHNOLOGY PRODUCT PORTFOLIO
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                  VietBridge Study Portfolio
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {currentT.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-brand-orange">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-white/60 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-white/70 font-light flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{currentT.safeNote}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Solutions Navigation Anchor / Quick Filter */}
      <section className="bg-white border-b border-brand-blue/10 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10px] font-mono font-bold text-brand-blue/50 uppercase tracking-widest mr-2">
              Solutions:
            </span>
            <button
              onClick={() => setSelectedSolutionTrack('all')}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSolutionTrack === 'all'
                  ? 'bg-brand-blue text-white'
                  : 'bg-[#FAF9F6] text-brand-blue/70 hover:text-brand-blue'
              }`}
            >
              {currentT.filterAll}
            </button>
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => {
                  setSelectedSolutionTrack(sol.id);
                  const el = document.getElementById(`edu-track-${sol.id}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedSolutionTrack === sol.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-[#FAF9F6] text-brand-blue/70 hover:text-brand-blue'
                }`}
              >
                {sol.tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Solutions List */}
      <section id="education-solutions-list" className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
            ACADEMIC CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-blue tracking-tight">
            {currentT.filterTitle}
          </h2>
        </div>

        <div className="space-y-12">
          {solutions.map((sol, index) => {
            const Icon = icons[index % icons.length];
            const isSelected = selectedSolutionTrack === 'all' || selectedSolutionTrack === sol.id;
            if (!isSelected) return null;

            return (
              <motion.div
                key={sol.id}
                id={`edu-track-${sol.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-brand-blue/15 hover:border-brand-orange/40 transition-all p-8 sm:p-12 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Icon, Tag & Title */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-2.5 py-1">
                        {sol.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-brand-blue tracking-tight leading-snug">
                      {sol.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed font-light">
                      {sol.description}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          const el = document.getElementById('education-intake-form');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-blue border-b border-brand-orange pb-1 cursor-pointer transition-colors"
                      >
                        <span>{sol.cta}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Scope Checklist */}
                  <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 border border-brand-blue/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      {currentLang === 'vi' ? 'Hạng Mục Triển Khai & Công Nghệ Bàn Giao' : currentLang === 'zh' ? '核心功能指标与交付内容' : 'Implementation Scope & Deliverables'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {sol.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-brand-blue/85 bg-white p-3 border border-brand-blue/5">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Target Schools & Education Institutions (Who We Serve) */}
      <section className="py-20 bg-white border-t border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
              {currentT.targetTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-blue tracking-tight">
              {currentT.targetTitle}
            </h2>
            <p className="text-sm sm:text-base text-brand-blue/70 font-light leading-relaxed">
              {currentT.targetSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentT.targets.map((target, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-8 border border-brand-blue/10 hover:border-brand-orange/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-widest">
                    0{idx + 1} // INSTITUTION TYPE
                  </span>
                  <School className="w-4 h-4 text-brand-blue/30" />
                </div>
                <h3 className="text-lg font-bold text-brand-blue tracking-tight">
                  {target.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-blue/70 leading-relaxed font-light">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Five-Step Implementation Model */}
      <section className="py-20 bg-[#070D19] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
              LOCALIZED IMPLEMENTATION BY VIETBRIDGE STUDY
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              {currentT.processTitle}
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light">
              {currentT.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {currentT.tiers.map((tier, idx) => (
              <div key={idx} className="bg-white/5 p-6 sm:p-7 border border-white/10 relative space-y-3 group hover:border-brand-orange/50 transition-colors">
                <div className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
                  {tier.num}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {tier.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Representative Education Case Studies */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
            SOLUTION PORTFOLIO IN PRACTICE
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-blue tracking-tight">
            {currentT.casesTitle}
          </h2>
          <p className="text-sm sm:text-base text-brand-blue/70 font-light">
            {currentT.casesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationCases.map((cs) => (
            <div 
              key={cs.id}
              className="bg-white border border-brand-blue/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between overflow-hidden group shadow-xs"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5">
                <img
                  src={cs.image}
                  alt={cs.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#070D19] text-white py-1 px-3 text-[9px] font-mono tracking-widest uppercase font-semibold">
                  {cs.categoryBadge || 'EDUCATION'}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-blue tracking-tight leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light line-clamp-3">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue/5">
                  <button
                    onClick={() => setSelectedCase(cs)}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span>{currentT.viewCase}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Dedicated Education Solution Inquiry Section */}
      <div id="education-intake-form">
        <Consultation currentLang={currentLang} onNavigate={onNavigate} />
      </div>

      {/* 8. Interactive Case Study Brief Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070D19]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-brand-blue/20 shadow-2xl relative"
            >
              <div className="sticky top-0 bg-white border-b border-brand-blue/10 px-6 py-4 flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold uppercase text-brand-orange">
                  {selectedCase.categoryBadge || 'CASE STUDY'}
                </span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-1.5 text-brand-blue/60 hover:text-brand-blue hover:bg-brand-blue/5 rounded-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue tracking-tight">
                    {selectedCase.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-orange mt-1">
                    {selectedCase.subtitle}
                  </p>
                </div>

                <div className="aspect-[16/9] w-full overflow-hidden bg-brand-blue/5">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-brand-blue/80 leading-relaxed">
                  <div className="p-4 bg-[#FAF9F6] border-l-2 border-brand-orange">
                    <p className="font-medium text-brand-blue">
                      {selectedCase.summary}
                    </p>
                  </div>

                  {selectedCase.context && (
                    <div className="space-y-1">
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Institutional Context</h4>
                      <p className="text-brand-blue/70">{selectedCase.context}</p>
                    </div>
                  )}

                  {selectedCase.solution && (
                    <div className="space-y-1">
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Technology & Pedagogical Deployment</h4>
                      <p className="text-brand-blue/70">{selectedCase.solution}</p>
                    </div>
                  )}

                  {selectedCase.deliverables && selectedCase.deliverables.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-brand-blue/10">
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Key Deliverables</h4>
                      <div className="space-y-1.5">
                        {selectedCase.deliverables.map((del, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-brand-blue/10 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      const el = document.getElementById('education-intake-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-colors cursor-pointer"
                  >
                    Request Smart Campus Turnkey Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
