import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, Check, Sparkles, Building, Landmark, Compass, Users, 
  ChevronRight, X, CheckCircle2, Info
} from 'lucide-react';
import { Language, enterpriseSolutions, representativeCases, CaseStudyItem } from '../data';
import Consultation from './Consultation';

interface EnterprisePageProps {
  currentLang: Language;
  onNavigate: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function EnterprisePage({ currentLang, onNavigate }: EnterprisePageProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [selectedSolutionTrack, setSelectedSolutionTrack] = useState<string>('all');

  const solutions = enterpriseSolutions[currentLang] || enterpriseSolutions['en'];
  const allCases = representativeCases[currentLang] || representativeCases['en'];
  const enterpriseCases = allCases.filter(c => 
    c.id === 'case-uef' || c.id === 'case-ai-social' || c.id === 'case-resource-base' || c.categoryKey === 'enterprise'
  );

  const icons = [Sparkles, Building, Landmark, Compass, Users];

  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'AI Enterprise Enablement',
      badge: 'BUSINESS LINE 01 · AI ENTERPRISE ENABLEMENT',
      title: 'AI Enterprise Enablement Services',
      tagline: 'AI Social Media Operations · Corporate Training · Vietnam Market Entry · Outbound Support · Talent Programs',
      description: 'VietBridge Group assists enterprises entering or operating in Vietnam with AI-assisted social media content operations, practical management training proposals, market entry research, cross-border business expansion, and bilingual talent training.',
      stats: [
        { value: '5 Modules', label: 'Core Enterprise Service Tracks' },
        { value: 'AI Ops', label: 'Bilingual Social Media & Content Workflows' },
        { value: 'Training', label: 'Labor Law, Tax & Management Seminars' },
        { value: 'Markets', label: 'Key Service Regions: HCMC & Hanoi' }
      ],
      filterTitle: '5 Core Enterprise Service Modules',
      filterAll: 'All Enterprise Modules',
      processTitle: '4-Step Enterprise Project Delivery Approach',
      processSubtitle: 'A structured workflow supporting companies from initial market research to ongoing local operation.',
      steps: [
        { num: '01', title: 'Market Research & Needs Scoping', desc: 'Industry research, setup procedure overview, industrial park comparison, and operational requirement scoping.' },
        { num: '02', title: 'AI Content & Digital Channel Setup', desc: 'Designing multi-platform social media content workflows and bilingual brand messaging for target audiences.' },
        { num: '03', title: 'Training & Partner Coordination', desc: 'Coordinating local legal/accounting service channels, executive management workshops, and bilingual talent training.' },
        { num: '04', title: 'Ongoing Operation & Review', desc: 'Continuous social media content operations, data review, and cross-border business matching support.' }
      ],
      casesTitle: 'Representative Enterprise Projects & Proposals',
      casesSubtitle: 'Explore our corporate training seminar proposals, AI content operation workflows, and enterprise resource development.',
      viewCase: 'View Project Details',
      ctaCardTitle: 'Inquire About Enterprise Enablement',
      ctaCardDesc: 'Contact our team for AI social media operations, corporate training, or Vietnam market entry consultation.'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Khai phóng Doanh nghiệp bằng AI',
      badge: 'MẢNG NGHIỆP VỤ 01 · KHAI PHÓNG DOANH NGHIỆP BẰNG AI',
      title: 'Dịch vụ Khai phóng Doanh nghiệp bằng AI',
      tagline: 'Vận hành Mạng xã hội AI · Đào tạo Doanh nghiệp · Tư vấn Thâm nhập Thị trường · Phát triển Quốc tế · Đào tạo Nhân lực',
      description: 'VietBridge Group hỗ trợ các doanh nghiệp tìm hiểu và vận hành tại Việt Nam thông qua dịch vụ vận hành nội dung mạng xã hội bằng AI, chương trình đào tạo quản trị thực tiễn, nghiên cứu thị trường, kết nối đối tác và phát triển nhân sự song ngữ.',
      stats: [
        { value: '5 Mô-đun', label: 'Nhóm Dịch vụ Doanh nghiệp Chính' },
        { value: 'AI Ops', label: 'Quy trình Nội dung & Mạng xã hội Song ngữ' },
        { value: 'Đào tạo', label: 'Hội thảo Lao động, Thuế & Quản trị' },
        { value: 'Khu vực', label: 'Khu vực Dịch vụ Trọng điểm: TP.HCM & Hà Nội' }
      ],
      filterTitle: '5 Mô-đun Dịch Vụ Doanh Nghiệp Trọng Tâm',
      filterAll: 'Tất cả giải pháp',
      processTitle: 'Quy Trình Hỗ Trợ Triển Khai 4 Bước',
      processSubtitle: 'Quy trình hỗ trợ doanh nghiệp từ khảo sát thông tin ban đầu đến vận hành thực tế.',
      steps: [
        { num: '01', title: 'Khảo Sát Thông Tin & Nhu Cầu', desc: 'Nghiên cứu thị trường ngành, tổng hợp quy trình thủ tục và so sánh điều kiện các khu công nghiệp.' },
        { num: '02', title: 'Thiết Lập Quy Trình Nội Dung AI', desc: 'Xây dựng kế hoạch nội dung mạng xã hội đa nền tảng và thông điệp thương hiệu song ngữ Trung - Việt.' },
        { num: '03', title: 'Đào Tạo & Phối Hợp Kênh Dịch Vụ', desc: 'Kết nối kênh dịch vụ pháp lý, kế toán bản địa, tổ chức đào tạo quản trị và bồi dưỡng nhân sự song ngữ.' },
        { num: '04', title: 'Đồng Hành Vận Hành & Tối Ưu', desc: 'Duy trì sản xuất nội dung số, đánh giá dữ liệu tương tác và hỗ trợ kết nối thương mại xuyên biên giới.' }
      ],
      casesTitle: 'Dự Án & Phương Án Doanh Nghiệp Tiêu Biểu',
      casesSubtitle: 'Tìm hiểu đề án hội thảo quản trị doanh nghiệp, quy trình nội dung AI và phát triển cơ sở dữ liệu doanh nghiệp.',
      viewCase: 'Xem Chi Tiết Dự Án',
      ctaCardTitle: 'Tư Vấn Giải Pháp Doanh Nghiệp',
      ctaCardDesc: 'Liên hệ đội ngũ dự án để trao đổi về vận hành mạng xã hội AI, đào tạo doanh nghiệp hoặc tư vấn thị trường.'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: 'AI 企业赋能',
      badge: '核心业务产线 01 · AI ENTERPRISE ENABLEMENT',
      title: 'AI 企业赋能与跨境商业服务',
      tagline: 'AI 社媒代运营 · 企业实务培训 · 越南落地咨询 · 越南企业出海 · 人才委培合作',
      description: '越桥集团面向进入越南及东盟市场的跨国企业、华资企业与本地品牌提供五大核心服务：通过 AI 内容工作流搭建本地化社媒矩阵、策划税务与劳动法规管理研讨、提供越南市场调研与园区选址比选，并开展中越双语复合型人才培养。',
      stats: [
        { value: '5 大板块', label: '企业赋能核心服务模块' },
        { value: 'AI 内容流', label: '双语社媒代运营与数字营销' },
        { value: '实务培训', label: '劳动法、税务与跨文化管理研讨' },
        { value: '重点区域', label: '重点服务地区：胡志明市 · 河内' }
      ],
      filterTitle: '五大企业赋能服务模块',
      filterAll: '全部企业服务方案',
      processTitle: '企业服务四步协同实施路径',
      processSubtitle: '围绕企业实际需求，提供从前期信息调研、方案策划到日常运营支持的协同服务。',
      steps: [
        { num: '01', title: '前期市场调研与需求梳理', desc: '开展行业市场信息调研、设立流程梳理、工业园区条件比选与商务考察行程规划。' },
        { num: '02', title: 'AI 内容工作流与社媒搭建', desc: '结合本地受众阅读习惯，利用 AI 辅助工作流构建 Facebook、微信公众号、小红书内容矩阵。' },
        { num: '03', title: '实务培训与本地服务对接', desc: '对接本地法律与财税服务渠道，策划企业管理实务研讨方案，并开展双语人才定制培养。' },
        { num: '04', title: '持续内容运营与商务拓展', desc: '提供常态化社媒内容代运营、数据复盘调优以及中越双边商务合作渠道对接。' }
      ],
      casesTitle: '企业赋能代表性方案与实践',
      casesSubtitle: '了解越桥在驻越华资企业管理实务研讨会项目（筹备接洽中）、《驻越经营实录》AI 内容矩阵及中越企业资源库建设方面的实践。',
      viewCase: '查看方案与项目详情',
      ctaCardTitle: '咨询定制化企业赋能方案',
      ctaCardDesc: '欢迎联系越桥项目团队，获取 AI 社媒代运营、企业内训定制或越南市场落地咨询支持。'
    }
  };

  const currentT = t[currentLang] || t['en'];

  return (
    <div className="bg-[#FAF9F6] text-brand-blue min-h-screen pt-24 pb-20">
      
      {/* 1. Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-brand-blue/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 text-xs font-mono">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }} 
            className="text-brand-blue/60 hover:text-brand-orange transition-colors cursor-pointer"
          >
            {currentT.breadcrumbHome}
          </a>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                {currentT.badge}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.28]">
                {currentT.title}
              </h1>

              <p className="text-base sm:text-lg font-mono font-semibold text-brand-orange">
                {currentT.tagline}
              </p>

              <p className="text-base sm:text-lg text-brand-blue/75 leading-relaxed font-light max-w-2xl">
                {currentT.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('enterprise-intake-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{currentT.ctaCardTitle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('enterprise-solutions-list');
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
                  SERVICE OVERVIEW
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                  VietBridge Enterprise Scope
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

              <div className="pt-4 border-t border-white/10 text-xs text-white/70 font-light flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>
                  {currentLang === 'zh'
                    ? '围绕越南重点服务地区与中越跨境可支持的市场提供支持'
                    : 'Supporting key service regions in Vietnam & cross-border markets'}
                </span>
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
              type="button"
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
                type="button"
                onClick={() => {
                  setSelectedSolutionTrack(sol.id);
                  const el = document.getElementById(`sol-track-${sol.id}`);
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
      <section id="enterprise-solutions-list" className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
            ENTERPRISE SERVICE MODULES
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
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
                id={`sol-track-${sol.id}`}
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

                    <h3 className="text-lg sm:text-xl font-sans font-bold text-brand-blue tracking-tight leading-[1.35]">
                      {sol.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed font-light">
                      {sol.description}
                    </p>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById('enterprise-intake-form');
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
                      {currentLang === 'vi' ? 'Hạng Mục Hỗ Trợ & Triển Khai' : currentLang === 'zh' ? '服务内容与方案模块' : 'Service Scope & Modules'}
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

      {/* 5. Four-Stage Process & Methodology */}
      <section className="py-20 bg-white border-y border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
              SERVICE WORKFLOW
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
              {currentT.processTitle}
            </h2>
            <p className="text-sm sm:text-base text-brand-blue/70 font-light">
              {currentT.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentT.steps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8 border border-brand-blue/10 relative space-y-4 group hover:border-brand-orange/40 transition-colors">
                <div className="text-xl sm:text-2xl font-mono font-bold text-brand-orange">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-brand-blue tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Representative Enterprise Case Studies */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
            REPRESENTATIVE PROJECTS & PLANS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
            {currentT.casesTitle}
          </h2>
          <p className="text-sm sm:text-base text-brand-blue/70 font-light">
            {currentT.casesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {enterpriseCases.map((cs) => (
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
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#070D19] text-white py-1 px-3 text-[9px] font-mono tracking-widest uppercase font-semibold">
                  {cs.categoryBadge || 'ENTERPRISE'}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-brand-blue tracking-tight leading-[1.4]">
                    {cs.title}
                  </h3>

                  {(cs.status || cs.evidenceStatus) && (
                    <div className="p-2.5 bg-[#FAF9F6] border border-brand-orange/30 space-y-1 text-[10px] font-mono">
                      {cs.status && (
                        <div className="text-brand-blue font-semibold">
                          <span className="text-brand-orange uppercase">Status:</span> {cs.status}
                        </div>
                      )}
                      {cs.evidenceStatus && (
                        <div className="text-brand-blue/75">
                          <span className="text-brand-orange uppercase">Evidence status:</span> {cs.evidenceStatus}
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light line-clamp-3">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue/5">
                  <button
                    type="button"
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

      {/* 7. Dedicated Enterprise Solution Inquiry Section */}
      <div id="enterprise-intake-form">
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
                  {selectedCase.categoryBadge || 'PROJECT BRIEF'}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="p-1.5 text-brand-blue/60 hover:text-brand-blue hover:bg-brand-blue/5 rounded-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-blue tracking-tight leading-[1.35]">
                    {selectedCase.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-orange mt-1">
                    {selectedCase.subtitle}
                  </p>
                </div>

                {(selectedCase.status || selectedCase.evidenceStatus) && (
                  <div className="p-4 bg-[#FAF9F6] border border-brand-orange/40 space-y-1.5 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-brand-orange font-bold uppercase">
                      <Info className="w-4 h-4" />
                      <span>Project & Evidence Boundary</span>
                    </div>
                    {selectedCase.status && (
                      <div className="text-brand-blue">
                        <strong>Status:</strong> {selectedCase.status}
                      </div>
                    )}
                    {selectedCase.evidenceStatus && (
                      <div className="text-brand-blue/80">
                        <strong>Evidence status:</strong> {selectedCase.evidenceStatus}
                      </div>
                    )}
                  </div>
                )}

                <div className="aspect-[16/9] w-full overflow-hidden bg-brand-blue/5">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80';
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
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Context & Market Scenario</h4>
                      <p className="text-brand-blue/70">{selectedCase.context}</p>
                    </div>
                  )}

                  {selectedCase.solution && (
                    <div className="space-y-1">
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">VietBridge Solution & Approach</h4>
                      <p className="text-brand-blue/70">{selectedCase.solution}</p>
                    </div>
                  )}

                  {selectedCase.deliverables && selectedCase.deliverables.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-brand-blue/10">
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Planned Modules & Deliverables</h4>
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
                    type="button"
                    onClick={() => {
                      setSelectedCase(null);
                      const el = document.getElementById('enterprise-intake-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-colors cursor-pointer"
                  >
                    Inquire About Similar Enterprise Project
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
