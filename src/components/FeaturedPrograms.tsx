import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { caseStudiesData, Language, translationStrings, CaseStudy } from '../data';

interface FeaturedProgramsProps {
  currentLang: Language;
}

export default function FeaturedPrograms({ currentLang }: FeaturedProgramsProps) {
  const strings = translationStrings.programs;
  const cases = caseStudiesData[currentLang] || caseStudiesData['en'];
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'enterprise' | 'education'>('all');

  const filteredCases = cases.filter(c => {
    if (activeFilter === 'enterprise') {
      return c.categoryKey === 'enterprise' || 
        c.category.toLowerCase().includes('enterprise') || 
        c.category.toLowerCase().includes('corporate') || 
        c.category.includes('企业') ||
        c.category.toLowerCase().includes('doanh nghiệp');
    }
    if (activeFilter === 'education') {
      return c.categoryKey === 'education' || 
        c.category.toLowerCase().includes('education') || 
        c.category.includes('教育') ||
        c.category.toLowerCase().includes('giáo dục');
    }
    return true;
  });

  const filterLabels = {
    en: { all: 'All Cases', enterprise: 'AI Enterprise Enablement', education: 'AI Education Enablement' },
    vi: { all: 'Tất Cả Dự Án', enterprise: 'Khai Phóng Doanh Nghiệp', education: 'Khai Phóng Giáo Dục' },
    zh: { all: '全部代表案例', enterprise: 'AI 企业赋能案例', education: 'AI 教育科技案例' }
  }[currentLang];

  return (
    <section
      id="cases"
      className="bg-[#FAF9F6] py-24 md:py-36 relative overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-blue/10" id="programs-header">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-3 font-mono">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.05]">
              {strings.title[currentLang]}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['all', 'enterprise', 'education'] as const).map((filterKey) => (
              <button
                key={filterKey}
                onClick={() => setActiveFilter(filterKey)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === filterKey
                    ? 'bg-brand-blue text-white font-bold'
                    : 'bg-white text-brand-blue/70 border border-brand-blue/15 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {filterLabels[filterKey]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="cases-grid">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-white border border-brand-blue/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Photo with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#070D19] text-white py-1 px-3 text-[9px] font-mono tracking-widest uppercase font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-sans font-extrabold text-brand-blue tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-blue/70 leading-relaxed font-light line-clamp-3">
                    {item.summary || item.description}
                  </p>
                </div>

                {/* Metric Strip */}
                <div className="pt-4 border-t border-brand-blue/5 flex items-baseline gap-3">
                  <span className="text-xs sm:text-sm font-mono font-bold text-brand-orange uppercase tracking-wider">
                    {item.categoryBadge || item.metric || 'CASE BRIEF'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/50">
                    {item.label || (currentLang === 'vi' ? 'Dự Án Trọng Điểm' : currentLang === 'zh' ? '代表性实践' : 'Key Initiative')}
                  </span>
                </div>

                {/* View Detail Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCase(item)}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-orange transition-colors pt-2 border-t border-brand-blue/5 cursor-pointer"
                  >
                    <span>
                      {currentLang === 'vi' ? 'Xem Chi Tiết Ca Dự Án' : currentLang === 'zh' ? '查看案例全景' : 'Case Briefing & Impact'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Briefing Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-brand-blue/20 shadow-2xl p-6 sm:p-10 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 text-brand-blue/60 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2 pr-8">
                  <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold">
                    {selectedCase.category} // CASE ARCHIVE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-brand-blue tracking-tight">
                    {selectedCase.title}
                  </h3>
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

                <div className="p-4 bg-brand-orange/5 border-l-2 border-brand-orange flex items-baseline gap-4">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-brand-orange leading-none">
                    {selectedCase.categoryBadge || selectedCase.metric || 'VIETBRIDGE INITIATIVE'}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-brand-blue/80 font-bold">
                    {selectedCase.label || selectedCase.subtitle}
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-brand-blue/80 leading-relaxed font-light">
                  <p className="font-medium text-brand-blue text-sm sm:text-base leading-relaxed">
                    {selectedCase.summary || selectedCase.description}
                  </p>
                  
                  {(selectedCase.solution || selectedCase.detailStory) && (
                    <div className="pt-2 border-t border-brand-blue/10 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                        {currentLang === 'vi' ? 'Phương Pháp Triển Khai' : currentLang === 'zh' ? '落地路径与实施细节' : 'Implementation Methodology'}
                      </h4>
                      <p className="text-brand-blue/70">
                        {selectedCase.solution || selectedCase.detailStory}
                      </p>
                    </div>
                  )}

                  {((selectedCase.deliverables && selectedCase.deliverables.length > 0) || 
                    (selectedCase.keyOutcomes && selectedCase.keyOutcomes.length > 0)) && (
                    <div className="pt-4 border-t border-brand-blue/10 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                        {currentLang === 'vi' ? 'Kết Quả Trọng Yếu' : currentLang === 'zh' ? '核心产出与交付成果' : 'Key Deliverables & Outcomes'}
                      </h4>
                      <div className="space-y-1.5">
                        {(selectedCase.deliverables || selectedCase.keyOutcomes || []).map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-brand-blue/80 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-brand-blue/10 flex justify-end">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="px-6 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-orange transition-colors cursor-pointer"
                  >
                    {currentLang === 'vi' ? 'Đóng' : currentLang === 'zh' ? '关闭' : 'Close Briefing'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
