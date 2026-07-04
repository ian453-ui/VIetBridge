import { motion } from 'motion/react';
import { Language } from '../data';

interface EditorialQuoteProps {
  currentLang: Language;
}

export default function EditorialQuote({ currentLang }: EditorialQuoteProps) {
  const quotes = {
    en: {
      text: "“VietBridge is not merely a facilitator. We are an international corridor of trust, aligning Vietnam’s rising momentum with the elite institutions of the world.”",
      author: "Liu Yan",
      title: "Managing Partner, VietBridge Group"
    },
    vi: {
      text: "“VietBridge không chỉ đơn thuần là đơn vị kết nối. Chúng tôi là hành lang tin cậy quốc tế, đồng bộ động lực tăng trưởng của Việt Nam với các định chế tinh hoa toàn cầu.”",
      author: "Lưu Diễm",
      title: "Thành viên Điều hành, VietBridge Group"
    },
    zh: {
      text: "“VietBridge 不仅是连结的桥梁，更是无可替代的双边信任廊道，旨在将越南的腾飞机遇同全球最顶尖的机构资源深度对接。”",
      author: "刘艳",
      title: "执行合伙人, VietBridge Group"
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
