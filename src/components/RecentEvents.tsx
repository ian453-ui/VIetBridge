import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { recentEvents, Language, translationStrings } from '../data';

interface RecentEventsProps {
  currentLang: Language;
}

export default function RecentEvents({ currentLang }: RecentEventsProps) {
  const strings = translationStrings.events;
  const events = recentEvents[currentLang] || recentEvents['en'];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="events"
      className="bg-white py-44 md:py-64 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Generous Space */}
        <div className="pb-16 mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12" id="events-header">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
              {strings.tagline[currentLang]}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
              {strings.title[currentLang]}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-blue/70 max-w-sm font-light">
            {strings.description[currentLang]}
          </p>
        </div>

        {/* Stack of Premium Editorial Event Stories (Alternating Grid Rows) */}
        <div className="space-y-56 md:space-y-64" id="events-editorial-flow">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center`}
                id={`editorial-story-${event.id}`}
              >
                {/* Large Landscape Photography Cover */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden bg-brand-blue/5">
                      <img
                        src={event.image}
                        alt={event.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80';
                        }}
                        className="w-full h-full object-cover grayscale-[20%] hover:scale-[1.01] hover:grayscale-0 transition-all duration-1200"
                      />
                      <div className="absolute top-3 left-3 bg-[#070D19]/90 text-white/90 py-1 px-2.5 text-[9px] font-mono tracking-widest uppercase font-semibold">
                        {currentLang === 'vi' ? 'ĐÃ KẾT THÚC · VĂN KIỆN' : currentLang === 'zh' ? '往期回顾 · 成果纪要' : 'CONCLUDED · SUMMARY'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Narrative Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                  
                  {/* Event metadata row */}
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 stroke-1" />
                      {event.date}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/20"></span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 stroke-1" />
                      {event.location}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-tight mb-4">
                    {event.title}
                  </h3>
                  <h4 className="text-base font-serif italic text-brand-orange mb-8">
                    {event.subtitle}
                  </h4>

                  {/* Narrative paragraph (reduced text) */}
                  <p className="text-sm sm:text-base md:text-lg text-brand-blue/70 leading-relaxed font-light mb-10">
                    {event.summary}
                  </p>

                  {/* Understated Action Link */}
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-[10px] font-bold text-brand-blue hover:text-brand-orange uppercase tracking-widest transition-colors cursor-pointer w-fit group"
                  >
                    {currentLang === 'vi' ? 'Nhận Kỷ Yếu & Bản Tóm Tắt' : currentLang === 'zh' ? '获取往期会议简报与纪要' : 'Request Briefing & Highlights'}
                    <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
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
