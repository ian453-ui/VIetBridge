import { motion } from 'motion/react';
import { Language } from '../data';

interface EditorialQuoteProps {
  currentLang: Language;
}

export default function EditorialQuote({ currentLang }: EditorialQuoteProps) {
  const quotes = {
    en: {
      text: "“In the AI era, technology without local execution cannot take root, and cross-border strategy without practical integration cannot succeed. VietBridge bridges technology, enterprise reality and education transformation.”",
      author: "VietBridge Group",
      title: "Strategic Council"
    },
    vi: {
      text: "“Trong kỷ nguyên AI, công nghệ thiếu thực thi bản địa sẽ không thể bén rễ, và chiến lược xuyên biên giới thiếu hội nhập thực tế sẽ khó thành công. VietBridge là cầu nối giữa công nghệ, thực tiễn doanh nghiệp và chuyển đổi giáo dục.”",
      author: "Tập đoàn VietBridge",
      title: "Hội đồng Chiến lược"
    },
    zh: {
      text: "“在 AI 时代，脱离本地执行的技术无法真正生根，而缺乏实战落地的跨境战略难以成功。越桥集团致力连接前沿技术、企业真实痛点与教育系统性升级。”",
      author: "越桥集团",
      title: "战略决策委员会"
    }
  };

  const currentQuote = quotes[currentLang] || quotes['en'];

  return (
    <section 
      className="bg-[#070D19] text-white py-52 md:py-72 relative overflow-hidden flex items-center justify-center"
      id="editorial-manifesto"
    >
      {/* Editorial subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="space-y-14"
        >
          {/* Section Marker */}
          <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block">
            {currentLang === 'vi' ? 'TUYÊN NGÔN CHIẾN LƯỢC' : currentLang === 'zh' ? '战略宣言' : 'STRATEGIC MANIFESTO'}
          </span>

          {/* Huge, stunning editorial sentence */}
          <blockquote className="text-4xl sm:text-5.5xl md:text-6.5xl lg:text-7.5xl font-serif italic text-brand-cream/95 leading-[1.1] tracking-tight max-w-5xl mx-auto font-light">
            {currentQuote.text}
          </blockquote>

          {/* Elegant Author details */}
          <div className="pt-6 flex flex-col items-center justify-center">
            <span className="text-sm font-bold tracking-widest uppercase text-white">
              {currentQuote.author}
            </span>
            <span className="text-[10px] tracking-wider text-brand-orange uppercase font-mono mt-2">
              {currentQuote.title}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
