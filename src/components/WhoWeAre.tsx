import { motion } from 'motion/react';
import { Language } from '../data';

interface WhoWeAreProps {
  currentLang: Language;
}

export default function WhoWeAre({ currentLang }: WhoWeAreProps) {
  const content = {
    en: {
      tagline: 'WHO WE ARE',
      heading: 'A Gateway Built on Uncompromising Trust',
      statement1: 'VietBridge Group is a high-integrity strategic gateway connecting Vietnam’s expanding economy with elite global institutions.',
      statement2: 'We engineer trusted pathways across international education, bilateral commercial entry, and high-level sovereign alliances with absolute compliance and premium discretion.'
    },
    vi: {
      tagline: 'CHÚNG TÔI LÀ AI',
      heading: 'Cổng Kết Nối Xây Dựng Trên Sự Tin Cậy Tuyệt Đối',
      statement1: 'VietBridge Group là hành lang chiến lược kết nối nền kinh tế đang phát triển mạnh mẽ của Việt Nam với các tổ chức tinh hoa toàn cầu.',
      statement2: 'Chúng tôi thiết lập các chương trình liên kết giáo dục, thương mại song phương và các liên minh tổ chức cấp cao bằng sự bảo mật và tuân thủ tuyệt đối.'
    },
    zh: {
      tagline: '关于我们',
      heading: '建立在无可妥协的信任之上的国际门户',
      statement1: 'VietBridge Group 是首屈一指的高信誉国际战略走廊，旨在连接越南蓬勃发展的经济与全球精英视野。',
      statement2: '我们在全球教育、双边商业准入和高层多边联盟领域，为您精准建立零失误、高度合规与安全的保密通道。'
    }
  };

  const currentContent = content[currentLang] || content['en'];

  return (
    <section
      id="about"
      className="relative bg-[#FAF9F6] py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          
          {/* Left Column: Magazine Typography Layout (Spans 7 columns for wide breathing room) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12" id="about-text-col">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block">
                {currentContent.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.1] max-w-3xl">
                {currentContent.heading}
              </h2>
            </div>
            
            <div className="space-y-8 text-brand-blue/80 font-light max-w-2xl">
              <p className="font-semibold text-brand-blue text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight">
                {currentContent.statement1}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-brand-blue/70 leading-relaxed font-light">
                {currentContent.statement2}
              </p>
            </div>
          </div>

          {/* Right Column: Beautiful Offset Editorial Portrait Block (Spans 5 columns) */}
          <div className="lg:col-span-5 lg:mt-24" id="about-image-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-full"
            >
              <div className="aspect-[3/4] overflow-hidden bg-brand-blue/5">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
                  alt="Boardroom strategic executive session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] brightness-[0.98] hover:scale-[1.01] transition-transform duration-[1500ms]"
                />
              </div>
              
              <div className="mt-6 flex justify-between items-center text-[9px] font-mono tracking-widest text-brand-blue/40 uppercase">
                <span>BOARDROOM STRATEGIC STUDY</span>
                <span>EST. 2018</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
