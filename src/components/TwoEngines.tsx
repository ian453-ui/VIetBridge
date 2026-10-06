import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language, twoEnginesData, translationStrings } from '../data';

interface TwoEnginesProps {
  currentLang: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact') => void;
}

export default function TwoEngines({ currentLang, onNavigate }: TwoEnginesProps) {
  const strings = translationStrings.whatWeDo;
  const engines = twoEnginesData[currentLang] || twoEnginesData['en'];

  const handleAction = (engineId: string, anchor: string) => {
    const cleanId = anchor.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      return;
    }

    if (onNavigate) {
      if (engineId === 'enterprise-engine') {
        onNavigate('enterprise');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (engineId === 'education-engine') {
        onNavigate('education');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <section
      id="what-we-do"
      className="bg-white py-24 md:py-36 relative overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Generous Space */}
        <div className="pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end" id="engines-header">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.05]">
              {strings.title[currentLang]}
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base md:text-lg text-brand-blue/70 font-light leading-relaxed">
            {strings.description[currentLang]}
          </p>
        </div>

        {/* Two Grand Symmetrical Engines (50% / 50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" id="two-engines-grid">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group flex flex-col justify-between bg-[#FAF9F6] border border-brand-blue/10 hover:border-brand-orange/40 transition-all duration-500 overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-blue/5">
                <img
                  src={engine.image}
                  alt={engine.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = engine.id === 'enterprise-engine'
                      ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
                      : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#070D19] text-white py-1.5 px-3.5 text-[9px] font-mono tracking-widest uppercase font-semibold">
                  {engine.badge}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  {engine.brandLine && currentLang !== 'zh' && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold uppercase tracking-widest">
                      {engine.brandLine}
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-brand-blue tracking-tight">
                    {engine.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed font-light">
                    {engine.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-brand-blue/10">
                  {engine.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-brand-blue/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => handleAction(engine.id, engine.anchor)}
                    className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue group-hover:text-brand-orange transition-colors pb-1 border-b border-brand-blue/20 group-hover:border-brand-orange cursor-pointer"
                  >
                    <span>{engine.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  {onNavigate && (
                    <button
                      onClick={() => {
                        onNavigate(engine.id === 'enterprise-engine' ? 'enterprise' : 'education');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-orange hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      {engine.id === 'education-engine'
                        ? (currentLang === 'zh' ? '进入 VietBridge Study 专页 →' : currentLang === 'vi' ? 'Trang chuyên biệt VietBridge Study →' : 'Dedicated VietBridge Study Page →')
                        : (currentLang === 'zh' ? '进入企业赋能专页 →' : currentLang === 'vi' ? 'Trang Giải pháp Doanh nghiệp →' : 'Dedicated Enterprise Page →')}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
