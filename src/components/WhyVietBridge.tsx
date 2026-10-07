import { motion } from 'motion/react';
import { whyUsData, Language, translationStrings } from '../data';

interface WhyVietBridgeProps {
  currentLang: Language;
}

export default function WhyVietBridge({ currentLang }: WhyVietBridgeProps) {
  const strings = translationStrings.whyUs;
  const reasons = whyUsData[currentLang] || whyUsData['en'];

  return (
    <section
      id="why-us"
      className="bg-white py-24 md:py-36 relative overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end" id="why-us-header">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-3 font-mono">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
              {strings.title[currentLang]}
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base md:text-lg text-brand-blue/70 font-light leading-relaxed">
            {strings.description[currentLang]}
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-us-grid">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="p-8 sm:p-10 bg-[#FAF9F6] border border-brand-blue/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-brand-blue/10 pb-4">
                  <span className="text-2xl font-mono font-bold text-brand-orange">
                    {item.number}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-brand-blue/40 uppercase">
                    VIETBRIDGE CORRIDOR
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-sans font-bold text-brand-blue tracking-tight leading-[1.4] group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-blue/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
