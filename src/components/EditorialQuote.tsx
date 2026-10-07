import React from 'react';
import { Language } from '../data';
import { Sparkles, CheckCircle } from 'lucide-react';

interface EditorialQuoteProps {
  currentLang?: Language;
  lang?: Language;
}

export const EditorialQuote: React.FC<EditorialQuoteProps> = ({ currentLang, lang }) => {
  const activeLang: Language = currentLang || lang || 'zh';

  const quoteText = {
    en: '"Our focus is not merely introducing software or providing isolated advice — we combine AI tools, localized workflows, and bilingual training to support practical business and education execution between China and Vietnam."',
    vi: '"Trọng tâm của chúng tôi không chỉ là giới thiệu phần mềm hay tư vấn đơn lẻ — chúng tôi kết hợp công cụ AI, quy trình bản địa hóa và đào tạo song ngữ để hỗ trợ triển khai kinh doanh và giáo dục thực tế giữa Việt Nam và Trung Quốc."',
    zh: '“我们的目标不只是提供单一建议或引入工具，而是通过 AI 工作流、本地化方案设计与双语培训支持，协助企业与教育机构在中越跨境场景中推进务实落地。”'
  }[activeLang];

  const subText = {
    en: 'VIETBRIDGE SERVICE ORIENTATION · PRACTICAL EXECUTION',
    vi: 'ĐỊNH HƯỚNG DỊCH VỤ VIETBRIDGE · TRIỂN KHAI THỰC TIỄN',
    zh: '越桥服务理念 · 聚焦方案设计与落地支持'
  }[activeLang];

  const metaLeft = {
    en: 'Service Approach Overview',
    vi: 'Tổng quan Phương pháp Dịch vụ',
    zh: '服务方法与业务定位说明'
  }[activeLang];

  const metaRight = {
    en: 'Enterprise & Education Dual Lines',
    vi: 'Song hành Doanh nghiệp & Giáo dục',
    zh: 'AI 企业赋能 · VietBridge Study 教育赋能'
  }[activeLang];

  const deptLabel = {
    en: 'VietBridge Project Team',
    vi: 'Đội ngũ Dự án VietBridge',
    zh: '越桥项目服务团队'
  }[activeLang];

  return (
    <section className="py-24 lg:py-36 bg-[#0E1218] text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Metadata Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-16 border-b border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-white/40 gap-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>{metaLeft}</span>
          </div>
          <div className="text-brand-orange">{metaRight}</div>
        </div>

        {/* Main Centerpiece Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-sans font-semibold text-white leading-[1.55] tracking-tight mb-12">
            {quoteText}
          </blockquote>

          {/* Attribution Block */}
          <div className="inline-flex flex-col items-center">
            <div className="w-16 h-[1px] bg-brand-orange mb-6"></div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand-orange mb-2">
              {subText}
            </div>
            <div className="inline-flex items-center space-x-2 text-xs text-white/60 font-light mt-2 bg-white/5 px-4 py-1.5 border border-white/10">
              <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
              <span>{deptLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialQuote;
