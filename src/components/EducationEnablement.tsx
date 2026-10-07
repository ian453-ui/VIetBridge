import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, BookOpen, Monitor, Cpu, Brain, School, GraduationCap, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Language, educationSolutions, translationStrings } from '../data';

interface EducationEnablementProps {
  currentLang: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact', sectionId?: string) => void;
}

export default function EducationEnablement({ currentLang, onNavigate }: EducationEnablementProps) {
  const strings = translationStrings.education;
  const solutions = educationSolutions[currentLang] || educationSolutions['en'];
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const icons = [BookOpen, Monitor, Cpu, Brain, School, GraduationCap];

  const portfolioBadges = [
    'Blackboard / BB',
    'Blackboard Learn',
    'Radica Smart Classroom',
    'STEM Learning',
    'Smart Classroom Solution'
  ];

  const targetInstitutions = {
    en: [
      'Universities & Colleges',
      'K12 Public & Private Schools',
      'International & Bilingual Schools',
      'Vocational & Technical Institutions',
      'Education Groups & Training Centers',
      'Cross-border Education Programs'
    ],
    vi: [
      'Trường Đại học & Cao đẳng',
      'Trường Phổ thông Công lập & Tư thục (K12)',
      'Trường Quốc tế & Song ngữ',
      'Cơ sở Giáo dục Nghề nghiệp & Kỹ thuật',
      'Tập đoàn Giáo dục & Trung tâm Đào tạo',
      'Chương trình Hợp tác Giáo dục Quốc tế'
    ],
    zh: [
      '高等院校与职业学院',
      'K12 公立与私立学校',
      '国际学校与双语学校',
      '职业教育与技能培训机构',
      '教育集团与培训机构',
      '中越及国际教育合作项目'
    ]
  }[currentLang];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="education"
      className="bg-white py-16 sm:py-24 md:py-36 relative overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="pb-12 md:pb-16 mb-10 md:mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end border-b border-brand-blue/10" id="education-header">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.35em] text-brand-orange uppercase font-mono bg-brand-orange/10 px-3 py-1 border border-brand-orange/30">
                <Sparkles className="w-3 h-3" />
                {strings.tagline[currentLang]}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-[#070D19] text-white font-semibold">
                VietBridge Study
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
              {strings.title[currentLang]}
            </h2>

            {/* Core Brand Positioning */}
            <p className="text-sm sm:text-base font-medium text-brand-blue border-l-2 border-brand-orange pl-4 py-1 bg-[#FAF9F6]">
              {strings.positioning[currentLang]}
            </p>

            <div className="inline-block bg-brand-blue/5 px-3 py-1.5 text-[11px] font-mono font-medium text-brand-blue/80">
              {strings.brandSub[currentLang]}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <p className="text-sm sm:text-base text-brand-blue/75 font-light leading-relaxed">
              {strings.intro[currentLang]}
            </p>

            {/* Allowed Brand & Product Portfolio Tags */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-blue/50 block font-bold">
                {currentLang === 'zh'
                  ? '可面向越南市场销售和落地的教育科技方案：'
                  : currentLang === 'vi'
                  ? 'Danh mục giải pháp công nghệ giáo dục cho thị trường Việt Nam:'
                  : 'Education technology solutions available for Vietnam market:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {portfolioBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 bg-[#FAF9F6] border border-brand-blue/15 text-[11px] font-mono font-semibold text-brand-blue"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {onNavigate && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('education');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-colors cursor-pointer"
                >
                  <span>
                    {currentLang === 'zh'
                      ? '了解 VietBridge Study 完整方案专页'
                      : currentLang === 'vi'
                      ? 'Khám phá Trang Chuyên biệt VietBridge Study'
                      : 'Explore VietBridge Study Full Page'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 6 Core Education Product Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="education-solutions-grid">
          {solutions.map((sol, index) => {
            const Icon = icons[index % icons.length];
            const isExpanded = !!expandedCards[sol.id];
            const hasMore = sol.bullets.length > 3;

            return (
              <motion.div
                key={sol.id}
                id={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-[#FAF9F6] p-6 sm:p-8 md:p-10 border border-brand-blue/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Tag & Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-mono tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/5 px-2.5 py-1">
                      {sol.tag}
                    </span>
                    <Icon className="w-5 h-5 text-brand-blue/40 group-hover:text-brand-orange transition-colors shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-sans font-bold text-brand-blue tracking-tight leading-[1.4]">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-blue/70 leading-relaxed font-light">
                    {sol.description}
                  </p>

                  {/* Bullets with mobile compression */}
                  <div className="space-y-2 pt-4 border-t border-brand-blue/5">
                    {sol.bullets.map((b, i) => {
                      const hiddenOnMobile = i >= 3 && !isExpanded;
                      return (
                        <div
                          key={i}
                          className={`items-start gap-2.5 text-xs text-brand-blue/80 ${
                            hiddenOnMobile ? 'hidden md:flex' : 'flex'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </div>
                      );
                    })}

                    {/* Mobile Expand / Collapse Button */}
                    {hasMore && (
                      <div className="pt-1 md:hidden">
                        <button
                          type="button"
                          onClick={() => toggleExpand(sol.id)}
                          className="text-[11px] font-mono text-brand-orange font-bold flex items-center gap-1 hover:underline py-1 cursor-pointer bg-transparent border-none"
                        >
                          <span>
                            {isExpanded
                              ? currentLang === 'zh' ? '收起详情' : currentLang === 'vi' ? 'Thu gọn' : 'Show less'
                              : currentLang === 'zh'
                              ? `查看全部 ${sol.bullets.length} 条方案模块`
                              : currentLang === 'vi'
                              ? `Xem đầy đủ ${sol.bullets.length} hạng mục`
                              : `View all ${sol.bullets.length} modules`}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 sm:pt-8 mt-6 border-t border-brand-blue/5">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span>{sol.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Target Institutions Strip */}
        <div className="mt-12 bg-[#070D19] text-white p-8 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold block">
              {currentLang === 'zh' ? 'VIETBRIDGE STUDY 服务对象' : currentLang === 'vi' ? 'ĐỐI TƯỢNG PHỤC VỤ CỦA VIETBRIDGE STUDY' : 'WHO VIETBRIDGE STUDY SERVES'}
            </span>
            <h3 className="text-lg sm:text-xl font-sans font-bold tracking-tight text-white leading-[1.35]">
              {currentLang === 'zh'
                ? '面向越南各级学校与教育机构提供本地化实施与培训支持'
                : currentLang === 'vi'
                ? 'Đồng hành triển khai bản địa hóa cho các trường học và tổ chức giáo dục tại Việt Nam'
                : 'Localized Implementation & Training Support for Schools and Institutions in Vietnam'}
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {targetInstitutions.map((inst) => (
                <span
                  key={inst}
                  className="text-[11px] font-mono text-white/85 bg-white/10 border border-white/15 px-3 py-1"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            {onNavigate && (
              <button
                type="button"
                onClick={() => {
                  onNavigate('education');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 bg-brand-orange hover:bg-white hover:text-brand-blue text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {currentLang === 'zh' ? '了解 VietBridge Study 教育方案' : currentLang === 'vi' ? 'Khám phá VietBridge Study' : 'Explore VietBridge Study'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={scrollToContact}
              className="px-5 py-3 border border-white/25 hover:border-brand-orange text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              {currentLang === 'zh' ? '预约学校方案演示' : currentLang === 'vi' ? 'Đăng ký Tư vấn Giải pháp' : 'Request School Solution Briefing'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

