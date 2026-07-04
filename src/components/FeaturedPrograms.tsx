import { motion } from 'motion/react';
import { featuredPrograms, Language, translationStrings } from '../data';

interface FeaturedProgramsProps {
  currentLang: Language;
}

export default function FeaturedPrograms({ currentLang }: FeaturedProgramsProps) {
  const strings = translationStrings.programs;
  const programs = featuredPrograms[currentLang] || featuredPrograms['en'];

  if (programs.length < 3) return null;

  // Destructure the localized programs for our custom asymmetrical layout
  const [flagship, second, third] = programs;

  return (
    <section
      id="programs"
      className="bg-[#FAF9F6] py-44 md:py-64 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Elegant Header with significant whitespace */}
        <div className="pb-16 mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6" id="programs-header">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
              {strings.title[currentLang]}
            </h2>
          </div>
        </div>

        {/* Custom Asymmetrical Magazine Layout Grid (Replacing 3 identical cards) */}
        <div className="space-y-24" id="programs-asymmetric-grid">
          
          {/* Row 1: Flagship Program (Full Width, Image-Left Split-Screen) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.2 }}
            className="group grid grid-cols-1 lg:grid-cols-12 bg-white transition-all duration-500 overflow-hidden"
            id={`program-card-flagship`}
          >
            {/* Horizontal Widescreen Image on Desktop */}
            <div className="lg:col-span-7 relative overflow-hidden bg-brand-cream">
              <div className="aspect-[16/10] lg:aspect-auto lg:h-full w-full">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-[1.01] group-hover:grayscale-0 transition-all duration-1200"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/20 to-transparent pointer-events-none opacity-40" />
              <div className="absolute top-6 left-6 bg-brand-blue text-white text-[9px] font-mono tracking-widest uppercase px-4 py-2">
                {flagship.category} // FLAGSHIP INITIATIVE
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-between items-start">
              <div className="space-y-8">
                <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase">
                  Featured Pathway
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-brand-blue/70 leading-relaxed font-light">
                  {flagship.description}
                </p>
              </div>

              {/* Metric indicator at bottom */}
              <div className="w-full pt-10 mt-10 border-t border-brand-blue/5 flex items-baseline gap-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-brand-orange tracking-tight leading-none">
                  {flagship.metric}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/40">
                  {flagship.label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Secondary & Tertiary Programs presented as Asymmetrical, Offset columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="programs-secondary-row">
            
            {/* Program 2 (Spans 7 Columns for Asymmetric imbalance) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="group lg:col-span-7 flex flex-col justify-between bg-white transition-all duration-500 overflow-hidden"
              id={`program-card-second`}
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-brand-cream relative">
                  <img
                    src={second.image}
                    alt={second.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-101 group-hover:grayscale-0 transition-all duration-1200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/20 to-transparent pointer-events-none opacity-40" />
                  <div className="absolute top-6 left-6 bg-white/95 text-brand-blue text-[9px] font-mono tracking-widest uppercase px-4 py-2">
                    {second.category}
                  </div>
                </div>

                <div className="p-10 md:p-12 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-brand-blue tracking-tight leading-tight group-hover:text-brand-orange transition-colors duration-300">
                    {second.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue/60 leading-relaxed font-light">
                    {second.description}
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-12 pt-0 flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-sans font-extrabold text-brand-orange tracking-tight leading-none">
                  {second.metric}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/40">
                  {second.label}
                </span>
              </div>
            </motion.div>

            {/* Program 3 (Spans 5 Columns - Narrower and staggered visual feel) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="group lg:col-span-5 flex flex-col justify-between bg-white transition-all duration-500 overflow-hidden"
              id={`program-card-third`}
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-brand-cream relative">
                  <img
                    src={third.image}
                    alt={third.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-101 group-hover:grayscale-0 transition-all duration-1200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/20 to-transparent pointer-events-none opacity-40" />
                  <div className="absolute top-6 left-6 bg-white/95 text-brand-blue text-[9px] font-mono tracking-widest uppercase px-4 py-2">
                    {third.category}
                  </div>
                </div>

                <div className="p-10 md:p-12 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-brand-blue tracking-tight leading-tight group-hover:text-brand-orange transition-colors duration-300">
                    {third.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue/60 leading-relaxed font-light">
                    {third.description}
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-12 pt-0 flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-sans font-extrabold text-brand-orange tracking-tight leading-none">
                  {third.metric}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/40">
                  {third.label}
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
