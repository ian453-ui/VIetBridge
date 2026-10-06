import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, Building, Landmark, Compass, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, enterpriseSolutions, translationStrings } from '../data';

interface EnterpriseEnablementProps {
  currentLang: Language;
}

export default function EnterpriseEnablement({ currentLang }: EnterpriseEnablementProps) {
  const strings = translationStrings.enterprise;
  const solutions = enterpriseSolutions[currentLang] || enterpriseSolutions['en'];
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const icons = [Sparkles, Building, Landmark, Compass, Users];

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
      id="enterprise"
      className="bg-[#FAF9F6] py-16 sm:py-24 md:py-36 relative overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="pb-12 md:pb-16 mb-10 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end" id="enterprise-header">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.05]">
              {strings.title[currentLang]}
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base md:text-lg text-brand-blue/70 font-light leading-relaxed">
            {strings.intro[currentLang]}
          </p>
        </div>

        {/* 5 Enterprise Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="enterprise-solutions-grid">
          {solutions.map((sol, index) => {
            const Icon = icons[index % icons.length];
            const isExpanded = !!expandedCards[sol.id];
            const hasMore = sol.bullets.length > 3;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-6 sm:p-8 md:p-10 border border-brand-blue/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Tag & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/5 px-2.5 py-1">
                      {sol.tag}
                    </span>
                    <Icon className="w-5 h-5 text-brand-blue/40 group-hover:text-brand-orange transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-brand-blue tracking-tight leading-snug">
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
                              ? `查看全部 ${sol.bullets.length} 条赋能要点`
                              : currentLang === 'vi'
                              ? `Xem đầy đủ ${sol.bullets.length} hạng mục`
                              : `View all ${sol.bullets.length} points`}
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

      </div>
    </section>
  );
}
