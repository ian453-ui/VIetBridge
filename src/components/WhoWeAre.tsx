import { motion } from 'motion/react';
import { Language } from '../data';

interface WhoWeAreProps {
  currentLang: Language;
}

export default function WhoWeAre({ currentLang }: WhoWeAreProps) {
  const content = {
    en: {
      tagline: 'ABOUT VIETBRIDGE GROUP',
      heading: 'An AI-Powered Platform Connecting Business, Education and Cross-Border Growth',
      statement1: 'VietBridge Group is an AI-powered enterprise and education enablement platform based in Vietnam and connected to China and global markets.',
      statement2: 'We help companies, schools and institutions solve real transformation challenges through market knowledge, technology integration, training, local execution and cross-border cooperation.',
      founderNote: 'VietBridge was founded by cross-border practitioners with long-term experience in Vietnam, China-Vietnam commerce, digital media, education technology and AI application deployment. We believe sustainable cross-border growth requires both global technological leverage and deep on-the-ground execution.'
    },
    vi: {
      tagline: 'VỀ TẬP ĐOÀN VIETBRIDGE',
      heading: 'Nền Tảng Tích Hợp AI Kết Nối Doanh Nghiệp, Giáo Dục và Tăng Trưởng Xuyên Biên Giới',
      statement1: 'VietBridge Group là nền tảng khai phóng doanh nghiệp và giáo dục bằng AI có trụ sở tại Việt Nam, kết nối trực tiếp với Trung Quốc và thị trường toàn cầu.',
      statement2: 'Chúng tôi giúp doanh nghiệp, trường học và tổ chức giải quyết các thách thức chuyển đổi thực tế thông qua sự am hiểu thị trường, tích hợp công nghệ, đào tạo và kết nối xuyên biên giới.',
      founderNote: 'VietBridge được sáng lập bởi các chuyên gia xuyên biên giới có nhiều năm thực chiến tại Việt Nam, am hiểu thương mại Trung - Việt, vận hành số, công nghệ giáo dục và triển khai ứng dụng AI. Chúng tôi tin rằng tăng trưởng bền vững đòi hỏi cả đòn bẩy công nghệ lẫn năng lực thực thi bản địa vững chắc.'
    },
    zh: {
      tagline: '关于越桥集团',
      heading: '用 AI 连接企业、教育与中越跨境增长的现代化赋能平台',
      statement1: '越桥集团是一家立足越南、连接中国与全球市场的 AI 企业与教育赋能平台。',
      statement2: '我们通过第一手市场洞察、前沿技术整合、实战培训体系、本地化执行和跨境合作，帮助企业、院校和机构解决真实的增长与转型瓶颈。',
      founderNote: '越桥集团由长期深耕越南与中越跨境合作的一线创业者发起，核心团队兼具企业出海实务、新媒体数字运营、教育科技产品研发与 AI 产业落地的复合经验。我们不仅提供顶层规划，更依托胡志明市与河内的在地团队，为客户交付真实可衡量的增长成果。'
    }
  };

  const currentContent = content[currentLang] || content['en'];

  return (
    <section
      id="about"
      className="relative bg-[#FAF9F6] py-24 md:py-32 overflow-hidden border-b border-brand-blue/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Magazine Typography Layout */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10" id="about-text-col">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
                {currentContent.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.15] max-w-2xl">
                {currentContent.heading}
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-blue/80 font-light max-w-2xl">
              <p className="font-medium text-brand-blue text-lg sm:text-xl lg:text-2xl leading-snug tracking-tight">
                {currentContent.statement1}
              </p>
              <p className="text-sm sm:text-base text-brand-blue/70 leading-relaxed font-light">
                {currentContent.statement2}
              </p>
              <div className="p-6 bg-brand-blue/[0.03] border-l-2 border-brand-orange text-xs sm:text-sm text-brand-blue/80 leading-relaxed italic">
                {currentContent.founderNote}
              </div>
            </div>
          </div>

          {/* Right Column: Offset Editorial Portrait Block */}
          <div className="lg:col-span-5 lg:mt-8" id="about-image-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-full"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-blue/5">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
                  alt="VietBridge Group collaborative strategic workshop"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover grayscale-[15%] brightness-[0.98] hover:scale-[1.01] transition-transform duration-[1500ms]"
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-brand-blue/50 uppercase">
                <span>LOCAL EXECUTION & GLOBAL ALLIANCE</span>
                <span>VIETNAM · CHINA · ASIA</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
