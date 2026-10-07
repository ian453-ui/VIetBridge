import { motion } from 'motion/react';
import { Language } from '../data';

interface WhoWeAreProps {
  currentLang: Language;
}

export default function WhoWeAre({ currentLang }: WhoWeAreProps) {
  const content = {
    en: {
      tagline: 'ABOUT VIETBRIDGE GROUP',
      heading: 'An AI-Powered Platform Connecting Business, Education and Cross-Border Cooperation',
      statement1: 'VietBridge Group is an AI-powered enterprise and education enablement platform focused on Vietnam and connected to China and international markets.',
      statement2: 'We help companies, schools and institutions address operational and digital upgrade needs through market research, technology integration, training, and cross-border coordination.',
      founderNote: 'VietBridge was initiated by practitioners with experience in China-Vietnam commerce, digital media operations, education technology, and AI workflow deployment. Focusing on key service regions including Ho Chi Minh City and Hanoi as well as supported cross-border markets, we assist clients from solution design to practical daily operation.'
    },
    vi: {
      tagline: 'VỀ TẬP ĐOÀN VIETBRIDGE',
      heading: 'Nền Tảng Tích Hợp AI Kết Nối Doanh Nghiệp, Giáo Dục và Hợp Tác Xuyên Biên Giới',
      statement1: 'VietBridge Group là nền tảng khai phóng doanh nghiệp và giáo dục bằng AI tập trung vào thị trường Việt Nam, kết nối với Trung Quốc và quốc tế.',
      statement2: 'Chúng tôi hỗ trợ doanh nghiệp, trường học và tổ chức giải quyết nhu cầu chuyển đổi thực tế thông qua nghiên cứu thị trường, tích hợp công nghệ, đào tạo và điều phối xuyên biên giới.',
      founderNote: 'VietBridge được khởi xướng bởi đội ngũ có kinh nghiệm trong thương mại Trung - Việt, vận hành truyền thông số, công nghệ giáo dục và ứng dụng AI. Tập trung vào các khu vực dịch vụ trọng điểm như TP. Hồ Chí Minh và Hà Nội cùng các thị trường hỗ trợ xuyên biên giới, chúng tôi đồng hành cùng khách hàng từ thiết kế phương án đến vận hành thực tế.'
    },
    zh: {
      tagline: '关于越桥集团',
      heading: '用 AI 连接企业、教育与中越跨境合作的赋能服务平台',
      statement1: '越桥集团是一家聚焦越南市场、连接中国与海外合作资源的 AI 企业与教育赋能平台。',
      statement2: '我们通过市场信息梳理、技术方案整合、实务培训与跨境协同，协助企业、学校和教育机构推进数字化升级与业务落地。',
      founderNote: '越桥集团由熟悉中越跨境商务、新媒体内容运营、教育科技方案与 AI 工作流应用的服务团队发起。我们围绕胡志明市、河内等重点服务地区及中越跨境可支持的市场，协助客户从方案设计走向日常落地运营。'
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
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10" id="about-text-col">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block font-mono">
                {currentContent.tagline}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32] max-w-2xl">
                {currentContent.heading}
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-blue/80 font-light max-w-2xl">
              <p className="font-medium text-brand-blue text-base sm:text-lg leading-relaxed tracking-tight">
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

          {/* Right Column */}
          <div className="lg:col-span-5 lg:mt-8" id="about-image-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="relative w-full"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-blue/5">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
                  alt="VietBridge Group project planning discussion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] brightness-[0.98] hover:scale-[1.01] transition-transform duration-[1500ms]"
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-brand-blue/50 uppercase">
                <span>PRACTICAL COORDINATION & AI WORKFLOWS</span>
                <span>KEY SERVICE REGIONS: VIETNAM & CHINA</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
