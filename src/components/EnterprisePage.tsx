import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, Check, Sparkles, Building, Landmark, Compass, Users, 
  ChevronRight, Shield, TrendingUp, X, CheckCircle2
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
  // Filter cases relevant to Enterprise
  const enterpriseCases = allCases.filter(c => 
    c.id === 'case-uef' || c.id === 'case-ai-social' || c.id === 'case-trade-mission'
  );

  const icons = [Sparkles, Building, Landmark, Compass, Users];

  const t = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Enterprise Enablement',
      badge: 'BUSINESS LINE 01 · FULL-LIFECYCLE ADVISORY',
      title: 'AI Enterprise Enablement Platform',
      tagline: 'AI Social Media · Corporate Training · FDI Landing · Cross-Border Scaling',
      description: 'VietBridge Group empowers foreign multinational corporations, manufacturing pioneers, and technology innovators to enter Vietnam seamlessly, comply rigorously with local tax and labor laws, supercharge marketing with AI, and cultivate cross-border talent.',
      stats: [
        { value: '5 Tracks', label: 'Tailored Enterprise Solution Tracks' },
        { value: 'Full-Cycle', label: 'Regulatory & Practical Advisory' },
        { value: 'Turnkey', label: 'Local Deployment & Operational Support' },
        { value: '3 Desks', label: 'HCMC · Hanoi · Beijing' }
      ],
      filterTitle: 'Strategic Solution Tracks',
      filterAll: 'All Solutions',
      processTitle: 'Enterprise Landing & Scaling Methodology',
      processSubtitle: 'A battle-tested four-stage execution framework tailored for the Vietnamese market.',
      steps: [
        { num: '01', title: 'Compliance & Feasibility', desc: 'Regulatory review, investment certificate structuring, industrial park site selection, and tax incentive scoping.' },
        { num: '02', title: 'AI Digital Blueprint', desc: 'Designing multi-platform social media matrix, automated content pipelines, and bilingual corporate branding.' },
        { num: '03', title: 'On-Ground Turnkey Execution', desc: 'Entity registration, factory setup, executive cohort coaching, and bilingual talent recruitment.' },
        { num: '04', title: 'Continuous Scaling & Growth', desc: 'Ongoing AI traffic operation, supply chain synchronization, and public relations protection.' }
      ],
      casesTitle: 'Representative Enterprise Case Studies',
      casesSubtitle: 'Real-world deployments delivering verified business growth and institutional trust in Vietnam.',
      viewCase: 'View Case Brief',
      ctaCardTitle: 'Need a Tailored Enterprise Solution?',
      ctaCardDesc: 'Connect directly with our cross-border advisory directors in Ho Chi Minh City, Hanoi, or Beijing.',
      submitBtn: 'Submit Enterprise Inquiry',
      submittedMsg: 'Thank you. Our senior cross-border advisory director will reach out within 24 hours.'
    },
    vi: {
      breadcrumbHome: 'Trang chủ',
      breadcrumbCurrent: 'Khai phóng Doanh nghiệp',
      badge: 'TRỤ CỘT CHIẾN LƯỢC 01 · TƯ VẤN TOÀN DIỆN VẬN HÀNH',
      title: 'Nền tảng Khai phóng Doanh nghiệp bằng AI',
      tagline: 'Mạng xã hội AI · Đào tạo Quản trị · Tư vấn Thâm nhập Thị trường · Vươn ra Toàn cầu',
      description: 'VietBridge Group đồng hành cùng các tập đoàn quốc tế, doanh nghiệp sản xuất và công nghệ thâm nhập thị trường Việt Nam an toàn, tuân thủ pháp lý - thuế - lao động, bứt phá doanh thu với AI và xây dựng lực lượng lao động tinh hoa bản địa.',
      stats: [
        { value: '5 Trục', label: 'Gói Giải pháp Doanh nghiệp Chuyên sâu' },
        { value: 'Toàn diện', label: 'Tư vấn Thẩm định & Pháp lý Thực tế' },
        { value: 'Trọn gói', label: 'Đồng hành Vận hành & Hỗ trợ Tại chỗ' },
        { value: '3 Điểm', label: 'TP.HCM · Hà Nội · Bắc Kinh' }
      ],
      filterTitle: 'Các Trục Giải Pháp Trọng Yếu',
      filterAll: 'Tất cả giải pháp',
      processTitle: 'Quy Trình Triển Khai Doanh Nghiệp',
      processSubtitle: 'Khung năng lực 4 giai đoạn chuẩn hóa dành riêng cho thị trường Việt Nam.',
      steps: [
        { num: '01', title: 'Đánh Giá Khả Thi & Pháp Lý', desc: 'Thẩm định hồ sơ đầu tư, lựa chọn khu công nghiệp tối ưu và cấu trúc ưu đãi thuế.' },
        { num: '02', title: 'Thiết Kế Chiến Lược AI & Số Hóa', desc: 'Thiết lập ma trận truyền thông đa nền tảng, tự động hóa quy trình sáng tạo nội dung.' },
        { num: '03', title: 'Triển Khai Thực Địa & Nhân Sự', desc: 'Thành lập pháp nhân, đào tạo giám đốc điều hành và tuyển dụng đội ngũ song ngữ.' },
        { num: '04', title: 'Vận Hành & Tăng Trưởng Quy Mô', desc: 'Tối ưu hóa chuyển đổi khách hàng qua AI, kết nối chuỗi cung ứng và bảo trợ quan hệ định chế.' }
      ],
      casesTitle: 'Dự Án Doanh Nghiệp Tiêu Biểu',
      casesSubtitle: 'Các chương trình thực chiến đã kiểm chứng hiệu quả tăng trưởng và tín nhiệm định chế tại Việt Nam.',
      viewCase: 'Xem Hồ Sơ Dự Án',
      ctaCardTitle: 'Bạn Cần Tư Vấn Giải Pháp Doanh Nghiệp?',
      ctaCardDesc: 'Kết nối trực tiếp với đội ngũ cố vấn cấp cao của chúng tôi tại TP.HCM, Hà Nội hoặc Bắc Kinh.',
      submitBtn: 'Gửi Yêu Cầu Tư Vấn',
      submittedMsg: 'Cảm ơn bạn. Chuyên viên tư vấn cấp cao của VietBridge sẽ liên hệ trong vòng 24 giờ.'
    },
    zh: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '企业赋能专区',
      badge: '两大业务支柱 01 · 跨国商业与全周期合规落地',
      title: 'AI 企业赋能全周期平台',
      tagline: 'AI 社媒代运营 · 在越实操合规培训 · 跨国落地咨询 · 人才委培合作',
      description: '越桥集团为进入越南、布局东盟的跨国企业、高科技及智能制造产业提供全周期赋能：借助生成式 AI 搭建本土化社媒矩阵、联合高校开展税务/劳工合规高管研修、保障工厂园区快速落地，并定向输送中越双语核心人才。',
      stats: [
        { value: '5 大产线', label: '企业赋能落地子产线' },
        { value: '全周期', label: '实务调研与合规辅导' },
        { value: '在地化', label: '深度协同交付与实操保障' },
        { value: '3 处联络点', label: '胡志明市 · 河内 · 北京' }
      ],
      filterTitle: '五大企业赋能子产线',
      filterAll: '全部产线方案',
      processTitle: '企业在越全周期落地与加速路径',
      processSubtitle: '经过多年实战验证的四阶落地方法论，帮助跨国企业避开暗坑，扎实生根。',
      steps: [
        { num: '01', title: '前期调研与合规可行性', desc: '企业出海投资结构设计、工业园区尽调选址、环保与消防审批评估及税收优惠锁权。' },
        { num: '02', title: 'AI 数字化营销底座搭建', desc: '结合本地化消费习惯，用 AI 构建 Facebook、TikTok、Zalo 全矩阵营销及获客漏斗。' },
        { num: '03', title: '实地交付与本地化团队组建', desc: '完成公司注册设立、核心决策层实战合规集训，并通过中越高校通道定向直聘双语骨干。' },
        { num: '04', title: '长效运营与跨境供应链协同', desc: '长线社媒矩阵代运营、供应链双向对接及官方多边公共关系与商会生态保护。' }
      ],
      casesTitle: '企业赋能代表性实战案例',
      casesSubtitle: '真实可查的落地项目，展现越桥在连接高校、专业合规智库与企业实际痛点上的落地能力。',
      viewCase: '查看实战详情',
      ctaCardTitle: '获取定制化企业出海/落地方案',
      ctaCardDesc: '欢迎直接对接越桥在胡志明市、河内或北京的战略顾问团队，获取专属咨询建议。',
      submitBtn: '提交企业咨询需求',
      submittedMsg: '需求已成功记录。越桥企业顾问将在 24 小时内与您专属联络并提供方案初稿。'
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-mono uppercase tracking-widest font-bold">
                <Shield className="w-3.5 h-3.5" />
                {currentT.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.08]">
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
                  BENCHMARK SCALE
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                  VietBridge Enterprise Impact
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {currentT.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-brand-orange">
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
                <span>Bilingual Execution & Trusted Legal Channels</span>
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
            COMPREHENSIVE CAPABILITIES
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

                    <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-brand-blue tracking-tight leading-snug">
                      {sol.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed font-light">
                      {sol.description}
                    </p>

                    <div className="pt-4">
                      <button
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
                      {currentLang === 'vi' ? 'Hạng Mục Bàn Giao & Triển Khai Thực Chiến' : currentLang === 'zh' ? '核心交付清单与实操细则' : 'Key Deliverables & Deployment Scope'}
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
              PROVEN PLAYBOOK
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-blue tracking-tight">
              {currentT.processTitle}
            </h2>
            <p className="text-sm sm:text-base text-brand-blue/70 font-light">
              {currentT.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentT.steps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8 border border-brand-blue/10 relative space-y-4 group hover:border-brand-orange/40 transition-colors">
                <div className="text-3xl font-mono font-bold text-brand-orange">
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
            VERIFIED OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-blue tracking-tight">
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
                      <h4 className="font-mono font-bold text-xs uppercase text-brand-blue">Context & Market Challenge</h4>
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
