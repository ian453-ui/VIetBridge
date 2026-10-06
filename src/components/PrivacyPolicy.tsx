import { ArrowLeft, Shield, Mail, CheckCircle2 } from 'lucide-react';
import { Language } from '../data';

interface PrivacyPolicyProps {
  currentLang: Language;
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function PrivacyPolicy({ currentLang, onNavigate }: PrivacyPolicyProps) {
  const content = {
    en: {
      tag: 'LEGAL & COMPLIANCE',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2026',
      intro: 'VietBridge Group ("we", "our", or "us") respects your privacy. This Privacy Policy describes how we handle information collected through our website and inquiry channels.',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We only collect information that you voluntarily provide to us when submitting an inquiry or contacting us directly. This may include your name, institutional/company name, professional email address, phone number, location (country/city), and details of your inquiry or project requirements.'
        },
        {
          heading: '2. Purpose of Collection',
          body: 'We collect this information solely to evaluate your project needs, respond to your inquiries, schedule consultation briefings, provide relevant solution proposals, and facilitate communications regarding our enterprise and education enablement services.'
        },
        {
          heading: '3. How We Use & Protect Your Information',
          body: 'Your submitted information is accessed strictly by authorized VietBridge representatives and project advisors. We implement reasonable administrative and technical measures to protect your information against unauthorized access, loss, or misuse.'
        },
        {
          heading: '4. No Sale or Commercial Exploitation of Data',
          body: 'We do not sell, lease, rent, trade, or disclose your submitted personal or institutional data to third-party advertisers, data brokers, or marketing platforms.'
        },
        {
          heading: '5. Data Retention & Your Rights',
          body: 'We retain inquiry information only as long as necessary to fulfill the communication purpose or comply with applicable legal obligations. You may contact us at any time to inspect, update, correct, or request the deletion of your submitted information.'
        },
        {
          heading: '6. Contact for Privacy Inquiries',
          body: 'If you have any questions, requests, or concerns regarding this Privacy Policy or how your information is handled, please contact our team via email at contact@vietbridgegroup.com.'
        }
      ],
      backBtn: 'Back to Home'
    },
    zh: {
      tag: '合规与政策说明',
      title: '隐私政策',
      lastUpdated: '最近更新：2026 年 3 月',
      intro: '越桥集团（VietBridge Group，以下简称“我们”）尊重并保护您的个人与机构信息隐私。本隐私政策阐明我们如何收集、使用与保护您通过本网站及咨询渠道提供的信息。',
      sections: [
        {
          heading: '1. 我们收集的信息',
          body: '我们仅收集您在提交业务咨询、预约探讨或直接沟通时主动提供的信息，包括您的姓名、企业/院校机构名称、官方工作邮箱、联系电话、所在国家/城市，以及您在需求留言中提供的项目说明。'
        },
        {
          heading: '2. 信息收集的目的',
          body: '收集上述信息纯粹为了解您的业务诉求、回复您的合作咨询、安排高管专题研讨与对接、提供定制化赋能方案建议，并在合作评估周期内保持必要的商务沟通。'
        },
        {
          heading: '3. 信息的使用与安全保护',
          body: '您提交的信息仅限越桥集团被授权的核心业务人员与项目顾问查阅。我们采取合理且必要的技术与行政措施，防止信息遭到未经授权的访问、泄露、篡改或丢失。'
        },
        {
          heading: '4. 绝不出售或商业转让数据',
          body: '我们承诺绝不出售、出租、出借或交易您的任何个人或企业信息给第三方广告商、数据分销商或无关商业机构。'
        },
        {
          heading: '5. 数据留存与您的权利',
          body: '我们仅在实现沟通目的所必需的合理期限内留存咨询信息。您可随时通过官方渠道联系我们，要求查阅、更正、更新或永久删除您此前提交的任何联系信息。'
        },
        {
          heading: '6. 隐私事务联系方式',
          body: '若您对本隐私政策有任何疑问、建议或删除数据诉求，请随时通过电子邮箱 contact@vietbridgegroup.com 与我们联系。'
        }
      ],
      backBtn: '返回首页'
    },
    vi: {
      tag: 'CHÍNH SÁCH & TUÂN THỦ',
      title: 'Chính Sách Bảo Mật',
      lastUpdated: 'Cập nhật lần cuối: Tháng 3/2026',
      intro: 'VietBridge Group tôn trọng quyền riêng tư của quý vị. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin nhận được qua trang web và kênh liên hệ.',
      sections: [
        {
          heading: '1. Thông tin thu thập',
          body: 'Chúng tôi chỉ thu thập thông tin quý vị chủ động cung cấp khi gửi yêu cầu tư vấn, bao gồm: họ tên, tên tổ chức/doanh nghiệp, email làm việc, số điện thoại, vị trí địa lý và nội dung nhu cầu hợp tác.'
        },
        {
          heading: '2. Mục đích sử dụng',
          body: 'Thông tin được sử dụng độc quyền để phản hồi yêu cầu, sắp xếp các buổi trao đổi giải pháp, gửi tài liệu phù hợp và duy trì liên lạc phục vụ công tác triển khai dự án.'
        },
        {
          heading: '3. Bảo mật thông tin',
          body: 'Dữ liệu chỉ được tiếp cận bởi nhân sự phụ trách được ủy quyền của VietBridge Group với các biện pháp bảo vệ phù hợp nhằm ngăn chặn truy cập trái phép.'
        },
        {
          heading: '4. Cam kết không bán dữ liệu',
          body: 'VietBridge Group cam kết không bán, cho thuê, trao đổi hoặc chuyển giao dữ liệu người dùng cho bất kỳ bên thứ ba vì mục đích quảng cáo thương mại.'
        },
        {
          heading: '5. Quyền hạn của người dùng',
          body: 'Quý vị có quyền yêu cầu tra cứu, điều chỉnh hoặc xóa bỏ vĩnh viễn thông tin đã gửi bất cứ lúc nào qua email liên hệ của chúng tôi.'
        },
        {
          heading: '6. Kênh tiếp nhận thắc mắc',
          body: 'Mọi thắc mắc liên quan đến chính sách bảo mật, vui lòng gửi email về: contact@vietbridgegroup.com.'
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
            <Shield className="w-3.5 h-3.5" />
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

        {/* Main policy body */}
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

          {/* Direct contact callout */}
          <div className="bg-[#FAF9F6] border border-brand-blue/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-blue block">VietBridge Group Privacy Desk</span>
                <span className="text-xs font-mono text-brand-blue/60">contact@vietbridgegroup.com</span>
              </div>
            </div>
            <a
              href="mailto:contact@vietbridgegroup.com"
              className="text-xs font-mono font-bold text-brand-orange hover:underline uppercase tracking-wider"
            >
              Email Us Directly →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
