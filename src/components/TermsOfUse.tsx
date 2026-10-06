import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../data';

interface TermsOfUseProps {
  currentLang: Language;
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function TermsOfUse({ currentLang, onNavigate }: TermsOfUseProps) {
  const content = {
    en: {
      tag: 'LEGAL & COMPLIANCE',
      title: 'Terms of Use',
      lastUpdated: 'Last updated: March 2026',
      intro: 'Welcome to the VietBridge Group website. By accessing or using this website, you acknowledge and agree to the terms described below.',
      sections: [
        {
          heading: '1. Informational & Showcase Purpose',
          body: 'This website is provided for general informational, educational, and service showcase purposes regarding VietBridge Group’s AI enterprise and education enablement capabilities. The contents do not constitute a formal commercial offer or binding contract.'
        },
        {
          heading: '2. No Guaranteed Results',
          body: 'Any case studies, methodologies, pilot descriptions, or operational frameworks showcased on this website reflect representative solution models. Actual results, operational timelines, and deliverables depend strictly on bilateral project feasibility, local regulatory conditions, and formal executed service contracts.'
        },
        {
          heading: '3. No Legal or Tax Advice',
          body: 'Information provided on this website or in preliminary strategic briefings does not constitute formal legal, accounting, tax, or regulatory opinions. Clients must rely on licensed local attorneys, auditors, and certified tax practitioners for binding legal and tax filings under Vietnamese and cross-border jurisdictions.'
        },
        {
          heading: '4. Evolution & Updates of Content',
          body: 'VietBridge Group reserves the right to modify, refine, update, or withdraw any service specifications, program descriptions, partner ecosystem mentions, or website materials at any time without prior announcement.'
        },
        {
          heading: '5. Inquiries Do Not Create Engagement',
          body: 'Submitting a business inquiry, scheduling an executive briefing, or downloading solution materials does not establish a client-agency, partner, or advisory relationship. Formal engagements occur exclusively upon execution of written agreements signed by authorized representatives.'
        },
        {
          heading: '6. Intellectual Property & Acceptable Use',
          body: 'All texts, visual diagrams, solution architectures, trademarks, and design elements on this website are the property of VietBridge Group or its respective technology partners. Unauthorized copying, scraping, or commercial reproduction is strictly prohibited.'
        }
      ],
      backBtn: 'Back to Home'
    },
    zh: {
      tag: '合规与法律条款',
      title: '网站使用条款',
      lastUpdated: '最近更新：2026 年 3 月',
      intro: '欢迎访问越桥集团（VietBridge Group）官方网站。访问或使用本网站，即表示您理解并接受以下条款。',
      sections: [
        {
          heading: '1. 网站信息性质',
          body: '本网站所展示的内容纯粹用于介绍越桥集团在 AI 企业赋能与 AI 教育赋能领域的业务架构、方案能力与实践探索，不构成具有法律约束力的正式要约或商业承诺。'
        },
        {
          heading: '2. 无特定结果承诺',
          body: '网站呈现的代表案例、工作方法、试点框架与执行蓝图均为代表性解决方案。任何具体项目的实际交付成果、周期及转化成效，完全取决于各方正式签署的业务合同及越南当地具体的合规与市场环境。'
        },
        {
          heading: '3. 非正式法律或财税意见声明',
          body: '本网站刊载的商业洞察、政策速览与实操讨论仅供高管决策参考，不构成针对特定个案的法定执业律师意见、注册会计师审计意见或税务合规裁定。客户在越南开展具体投资时，应遵循独立合规法务与财税专家的法定指引。'
        },
        {
          heading: '4. 内容更新与调整',
          body: '越桥集团保留根据业务发展、技术演进及政策动态，随时修改、更新或调整网站服务介绍、方案模块或合作生态表述的权利，恕不另行专门通知。'
        },
        {
          heading: '5. 咨询提交不构成委托聘用',
          body: '提交咨询表单、预约高管座谈或接收方案意向，并不自动在双方之间建立正式的代理、顾问、合资或聘用法律关系。正式合作仅以双方被授权代表书面盖章签署的法律协议为准。'
        },
        {
          heading: '6. 知识产权与合理使用',
          body: '本网站包含的文字、结构图表、方案框架、品牌标识等版权均归越桥集团或各技术合作伙伴所有。未经书面许可，任何机构或个人不得擅自抓取、镜像、篡改或用于不正当商业竞争。'
        }
      ],
      backBtn: '返回首页'
    },
    vi: {
      tag: 'ĐIỀU KHOẢN & PHÁP LÝ',
      title: 'Điều Khoản Sử Dụng',
      lastUpdated: 'Cập nhật lần cuối: Tháng 3/2026',
      intro: 'Chào mừng quý vị đến với trang thông tin của VietBridge Group. Khi truy cập website, quý vị đồng ý với các điều khoản dưới đây.',
      sections: [
        {
          heading: '1. Mục đích thông tin',
          body: 'Website này được cung cấp nhằm mục đích giới thiệu năng lực, giải pháp và mô hình khai phóng doanh nghiệp & giáo dục của VietBridge Group. Nội dung không tạo thành hợp đồng ràng buộc.'
        },
        {
          heading: '2. Tuyên bố về kết quả thực tế',
          body: 'Các trường hợp nghiên cứu và phương pháp triển khai trên website mang tính chất minh họa năng lực. Kết quả thực tế phụ thuộc hoàn toàn vào hợp đồng dịch vụ chính thức ký kết giữa hai bên.'
        },
        {
          heading: '3. Không thay thế tư vấn pháp lý/thuế độc lập',
          body: 'Các nội dung kinh doanh, thuế và luật lao động mang tính tham khảo tổng quan, không cấu thành ý kiến pháp lý ràng buộc. Doanh nghiệp cần tham khảo ý kiến luật sư và kiểm toán viên có chứng chỉ hành nghề.'
        },
        {
          heading: '4. Cập nhật thông tin',
          body: 'VietBridge Group có quyền cập nhật, thay đổi hoặc hoàn thiện nội dung, danh mục giải pháp và tài liệu trên website bất kỳ lúc nào mà không cần thông báo trước.'
        },
        {
          heading: '5. Không cấu thành quan hệ đại diện',
          body: 'Việc gửi thông tin yêu cầu tư vấn không đồng nghĩa với việc xác lập quan hệ khách hàng - đại diện chính thức. Quan hệ dịch vụ chỉ phát sinh khi có hợp đồng chính thức ký kết.'
        },
        {
          heading: '6. Sở hữu trí tuệ',
          body: 'Toàn bộ nội dung, tài liệu, nhãn hiệu và thiết kế đồ họa trên trang web thuộc quyền sở hữu của VietBridge Group và các đối tác công nghệ liên quan.'
        }
      ],
      backBtn: 'Về Trang Chủ'
    }
  }[currentLang];

  return (
    <div className="bg-[#FAF9F6] text-brand-blue min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Navigation back */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-brand-blue/60 hover:text-brand-orange mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{content.backBtn}</span>
        </button>

        {/* Header */}
        <div className="bg-white border border-brand-blue/10 p-8 sm:p-12 mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-brand-orange font-mono text-[10px] font-bold tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>{content.tag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight mb-3">
            {content.title}
          </h1>
          <p className="text-xs font-mono text-brand-blue/50 mb-6">
            {content.lastUpdated}
          </p>
          <p className="text-sm sm:text-base text-brand-blue/80 leading-relaxed font-light border-t border-brand-blue/10 pt-6">
            {content.intro}
          </p>
        </div>

        {/* Main terms body */}
        <div className="bg-white border border-brand-blue/10 p-8 sm:p-12 space-y-8 shadow-sm">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-brand-blue/5 pb-6 last:border-0 last:pb-0">
              <h2 className="text-base sm:text-lg font-bold text-brand-blue flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{sec.heading}</span>
              </h2>
              <p className="text-sm text-brand-blue/75 leading-relaxed font-light pl-6">
                {sec.body}
              </p>
            </div>
          ))}

          {/* Compliance note */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-6 flex items-start gap-4 mt-8">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900/80 leading-relaxed space-y-1">
              <span className="font-bold block text-amber-950">Jurisdiction & Disclaimers</span>
              <p>
                VietBridge Group operates as an enterprise and education enablement platform. Project deliverables and advisory engagements are subject to mutual written scopes and local legal compliance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
