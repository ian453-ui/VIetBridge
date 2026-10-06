import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Mail, Building, Copy, Check, Shield, MessageCircle } from 'lucide-react';
import { Language, translationStrings, contactInquiryAreas } from '../data';

interface ConsultationProps {
  currentLang: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

type OfficeKey = 'hcm' | 'hanoi' | 'beijing';

export default function Consultation({ currentLang, onNavigate }: ConsultationProps) {
  const strings = translationStrings.contact;
  const [selectedOffice, setSelectedOffice] = useState<OfficeKey>('hcm');
  const [copiedInquiry, setCopiedInquiry] = useState(false);
  const [showWeChatTooltip, setShowWeChatTooltip] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    countryCity: '',
    areaOfInterest: 'enterprise-enablement',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'prepared'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getInquirySummary = () => {
    return [
      `[VietBridge Group Strategic Inquiry]`,
      `Name: ${formData.name}`,
      formData.company ? `Organization: ${formData.company}` : null,
      `Email: ${formData.email}`,
      formData.phone ? `Phone / Messaging: ${formData.phone}` : null,
      formData.countryCity ? `Location: ${formData.countryCity}` : null,
      `Service Track: ${formData.areaOfInterest}`,
      `Message: ${formData.message}`
    ].filter(Boolean).join('\n');
  };

  const handlePrepareInquiry = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(
        currentLang === 'vi'
          ? 'Vui lòng điền đầy đủ các mục bắt buộc (*).'
          : currentLang === 'zh'
          ? '请填写所有必填项（姓名、邮箱、需求简述）。'
          : 'Please complete all required fields (*).'
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg(
        currentLang === 'vi'
          ? 'Vui lòng nhập địa chỉ email hợp lệ.'
          : currentLang === 'zh'
          ? '请输入有效的机构邮箱地址。'
          : 'Please provide a valid email address.'
      );
      return;
    }

    setFormState('prepared');
  };

  const copyToClipboard = () => {
    const text = getInquirySummary();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedInquiry(true);
        setTimeout(() => setCopiedInquiry(false), 2500);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedInquiry(true);
      setTimeout(() => setCopiedInquiry(false), 2500);
    }
  };

  const mailtoLink = `mailto:contact@vietbridgegroup.com?subject=${encodeURIComponent(
    `[Inquiry] ${formData.name} - ${formData.company || 'VietBridge Enablement'}`
  )}&body=${encodeURIComponent(getInquirySummary())}`;

  // Localized dictionaries
  const dict = {
    formTitle: {
      en: 'Direct Inquiry Desk',
      vi: 'Tiếp nhận Yêu cầu Tư vấn',
      zh: '高管直接联络通道'
    },
    fullName: {
      en: 'Name *',
      vi: 'Họ và tên *',
      zh: '姓名 *'
    },
    fullNamePlaceholder: {
      en: 'Your name',
      vi: 'Họ và tên của quý vị',
      zh: '您的姓名'
    },
    emailLabel: {
      en: 'Institutional Email *',
      vi: 'Email Doanh nghiệp / Tổ chức *',
      zh: '机构官方邮箱 *'
    },
    emailPlaceholder: {
      en: 'name@institution.com',
      vi: 'email@tochuc.com',
      zh: 'name@institution.com'
    },
    msgLabel: {
      en: 'Strategic Requirement *',
      vi: 'Nội dung thông điệp *',
      zh: '合作诉求简述 *'
    },
    msgPlaceholder: {
      en: 'Briefly state your objectives, background, or questions...',
      vi: 'Tóm tắt sơ bộ mục tiêu hợp tác hoặc câu hỏi của quý vị...',
      zh: '请简述您的对接诉求、机构背景或具体合作细节...'
    },
    prepareBtn: {
      en: 'Prepare Inquiry',
      vi: 'Chuẩn bị Yêu cầu Tư vấn',
      zh: '生成咨询信息'
    },
    copyBtn: {
      en: 'Copy Inquiry Details',
      vi: 'Sao chép Nội dung Tư vấn',
      zh: '复制咨询摘要'
    },
    copiedBtn: {
      en: 'Inquiry Copied!',
      vi: 'Đã sao chép vào bộ nhớ tạm!',
      zh: '已复制至剪贴板！'
    },
    emailBtn: {
      en: 'Send via Email App',
      vi: 'Gửi qua Ứng dụng Email',
      zh: '启动邮件客户端发送'
    },
    mandatoryNotice: {
      en: 'Thank you. Please email us directly at contact@vietbridgegroup.com or connect through our listed contact channel. Online form submission will be enabled after backend integration.',
      vi: 'Cảm ơn quý vị đã quan tâm. Hiện tại quý vị có thể gửi trực tiếp qua email contact@vietbridgegroup.com hoặc qua các kênh liên lạc được liệt kê. Cổng gửi trực tuyến sẽ được kích hoạt sau khi hoàn tất tích hợp hệ thống.',
      zh: '感谢你的咨询。当前在线表单提交将在后端连接完成后启用，请通过页面列出的邮箱或联系方式直接联系越桥集团。'
    },
    privacyNotice: {
      en: 'By submitting this form, you agree that VietBridge may contact you regarding your inquiry. Please review our Privacy Policy for how we handle submitted information.',
      vi: 'Bằng việc gửi thông tin này, quý vị đồng ý để VietBridge Group liên hệ giải đáp yêu cầu. Vui lòng tham khảo Chính Sách Bảo Mật để hiểu rõ phương thức xử lý thông tin.',
      zh: '提交表单即表示你同意越桥集团就咨询内容与你联系。请阅读隐私政策了解我们如何处理提交信息。'
    },
    privacyLink: {
      en: 'Privacy Policy',
      vi: 'Chính Sách Bảo Mật',
      zh: '隐私政策'
    },
    editInquiry: {
      en: 'Edit Form Details',
      vi: 'Chỉnh sửa Thông tin',
      zh: '返回修改信息'
    },
    offices: {
      hcmTitle: {
        en: 'Ho Chi Minh City · Operations Core',
        vi: 'TP. Hồ Chí Minh · Trọng tâm Vận hành',
        zh: '胡志明市 · 越南核心运营与赋能中心'
      },
      hcmAddress: {
        en: 'Southern Vietnam Economic Corridor & Industrial Hub (District 1 / Binh Duong / Dong Nai)',
        vi: 'Hành lang kinh tế và chuỗi khu công nghiệp phía Nam (Quận 1 / Bình Dương / Đồng Nai)',
        zh: '辐射胡志明市第一郡及平阳、同奈等核心中越制造产业走廊'
      },
      hanoiTitle: {
        en: 'Hanoi · Institutional Coordination',
        vi: 'Hà Nội · Điều phối Học thuật',
        zh: '河内 · 北越院校与公立机构对接联络'
      },
      hanoiAddress: {
        en: 'Northern Vietnam University & Education Modernization Network',
        vi: 'Mạng lưới chuyển đổi số trường học và đối tác đại học phía Bắc',
        zh: '聚焦北越重点高校、国际教育论坛与智慧校园示范项目'
      },
      beijingTitle: {
        en: 'Bilateral Coordination Desk',
        vi: 'Bàn Điều phối Song phương',
        zh: '中越双向跨境高管联络处'
      },
      beijingAddress: {
        en: 'Cross-border technology ecosystem & Chinese enterprise headquarters liaison',
        vi: 'Hành lang kết nối hệ sinh thái công nghệ và trụ sở doanh nghiệp',
        zh: '常态化联动中国企业总部、全球教育科技资源与中越跨境出海伙伴'
      }
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 md:py-36 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch" id="consultation-grid">
          
          {/* Left Column: Directory & Email */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="consultation-left-col">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
                {strings.tagline[currentLang]}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-blue tracking-tight leading-[1.05]">
                {strings.title[currentLang]}
              </h2>
              <p className="text-sm sm:text-base text-brand-blue/70 mt-6 font-light leading-relaxed">
                {strings.description[currentLang]}
              </p>

              {/* Showcase the official email prominently */}
              <div className="mt-8 bg-brand-cream p-6 sm:p-8 border border-brand-blue/10">
                <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase block font-mono">
                  Official Communication Channel
                </span>
                <a
                  href="mailto:contact@vietbridgegroup.com"
                  className="font-mono text-lg sm:text-xl md:text-2xl text-brand-blue font-extrabold hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-2 break-all"
                  id="primary-contact-email"
                >
                  contact@vietbridgegroup.com
                  <ArrowUpRight className="w-4 h-4 text-brand-orange shrink-0" />
                </a>
                <span className="text-xs text-brand-blue/60 leading-relaxed font-light mt-3 block">
                  {currentLang === 'vi' 
                    ? 'Quý vị có thể gửi email trực tiếp để nhận phản hồi và đề xuất giải pháp chi tiết.'
                    : currentLang === 'zh'
                    ? '欢迎直接发送正式信件至官方邮箱，我们的业务顾问将在一个工作日内回复。'
                    : 'Send inquiries directly to our official mailbox for prompt project assessment.'}
                </span>
              </div>

              {/* Operations Corridors */}
              <div className="mt-8 space-y-2" id="office-registries">
                <button
                  type="button"
                  onClick={() => setSelectedOffice('hcm')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'hcm' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="office-trigger-hcm"
                >
                  <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.hcmTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.offices.hcmAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedOffice('hanoi')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'hanoi' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="office-trigger-hanoi"
                >
                  <Building className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.hanoiTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.offices.hanoiAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedOffice('beijing')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'beijing' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="office-trigger-beijing"
                >
                  <Mail className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.beijingTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.offices.beijingAddress[currentLang]}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Verified Channels */}
            <div className="mt-8 pt-6 border-t border-brand-blue/10 flex items-center justify-between" id="consultation-compliance-block">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact@vietbridgegroup.com"
                  className="text-xs font-mono text-brand-blue/70 hover:text-brand-orange flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>contact@vietbridgegroup.com</span>
                </a>
              </div>

              {/* WeChat Tooltip */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowWeChatTooltip(!showWeChatTooltip)}
                  onMouseEnter={() => setShowWeChatTooltip(true)}
                  onMouseLeave={() => setShowWeChatTooltip(false)}
                  className="px-3 py-1.5 bg-brand-cream text-brand-blue/70 hover:text-brand-orange text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  WeChat ID
                </button>
                <AnimatePresence>
                  {showWeChatTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="absolute bottom-full right-0 mb-2 bg-[#0C1222] border border-[#C59B27]/40 text-white text-[11px] py-2 px-3 shadow-xl z-30 font-mono whitespace-nowrap"
                    >
                      WeChat: VietBridgeGroup
                      <div className="absolute top-full right-4 border-4 border-transparent border-t-[#0C1222]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Preparation Desk */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="consultation-form-wrapper">
            <div className="bg-brand-cream p-6 sm:p-10 md:p-12 border border-brand-blue/10 relative">
              
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase block font-mono">
                  {dict.formTitle[currentLang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-brand-blue mt-1">
                  {formState === 'idle' 
                    ? (currentLang === 'zh' ? '填写咨询详情' : currentLang === 'vi' ? 'Điền thông tin tư vấn' : 'Submit Consultation Request')
                    : (currentLang === 'zh' ? '咨询信息已生成' : currentLang === 'vi' ? 'Thông tin yêu cầu đã sẵn sàng' : 'Inquiry Ready')}
                </h3>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <AnimatePresence mode="wait">
                {formState === 'idle' ? (
                  <form onSubmit={handlePrepareInquiry} className="space-y-5">
                    
                    {/* Area of Interest */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="areaOfInterest" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                        {currentLang === 'vi' ? 'Lĩnh Vực Hợp Tác' : currentLang === 'zh' ? '意向咨询领域' : 'Service Track'} *
                      </label>
                      <select
                        id="areaOfInterest"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all"
                      >
                        {(contactInquiryAreas[currentLang] || contactInquiryAreas.en).map((area) => (
                          <option key={area.value} value={area.value}>
                            {area.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                          {dict.fullName[currentLang]}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={dict.fullNamePlaceholder[currentLang]}
                          className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30"
                        />
                      </div>

                      {/* Company / Institution */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                          {currentLang === 'vi' ? 'Đơn Vị / Trường Học' : currentLang === 'zh' ? '企业或院校名称' : 'Organization'}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder={currentLang === 'vi' ? 'Tên doanh nghiệp hoặc trường học' : currentLang === 'zh' ? '企业或院校全称' : 'e.g. Enterprise / University'}
                          className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                          {dict.emailLabel[currentLang]}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={dict.emailPlaceholder[currentLang]}
                          className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30"
                        />
                      </div>

                      {/* Phone / WeChat */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                          {currentLang === 'vi' ? 'Số Điện Thoại / Zalo' : currentLang === 'zh' ? '联系电话 / 微信' : 'Phone / Messaging'}
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+84 / +86 ..."
                          className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30"
                        />
                      </div>
                    </div>

                    {/* Country / City */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="countryCity" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                        {currentLang === 'vi' ? 'Quốc Gia / Thành Phố' : currentLang === 'zh' ? '国家 / 所在城市' : 'Country / City'}
                      </label>
                      <input
                        type="text"
                        id="countryCity"
                        name="countryCity"
                        value={formData.countryCity}
                        onChange={handleInputChange}
                        placeholder={currentLang === 'vi' ? 'VD: TP. Hồ Chí Minh / Hà Nội / Thâm Quyến' : currentLang === 'zh' ? '例：胡志明市 / 深圳 / 上海 / 新加坡' : 'e.g. Ho Chi Minh City / Shenzhen / Singapore'}
                        className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase font-mono">
                        {dict.msgLabel[currentLang]}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder={dict.msgPlaceholder[currentLang]}
                        className="w-full bg-white border border-brand-blue/20 focus:border-brand-orange focus:outline-none text-brand-blue text-xs sm:text-sm px-3 py-2.5 transition-all placeholder:text-brand-blue/30 resize-none"
                      />
                    </div>

                    {/* Required Privacy Notice */}
                    <div className="p-3 bg-white/70 border border-brand-blue/10 text-[11px] text-brand-blue/75 leading-relaxed">
                      <div className="flex items-start gap-2">
                        <Shield className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                        <div>
                          <span>{dict.privacyNotice[currentLang]}</span>{' '}
                          <button
                            type="button"
                            onClick={() => {
                              if (onNavigate) {
                                onNavigate('privacy');
                              } else {
                                window.location.href = '/privacy-policy';
                              }
                            }}
                            className="text-brand-orange font-bold hover:underline bg-transparent border-none p-0 cursor-pointer text-[11px] inline"
                          >
                            [{dict.privacyLink[currentLang]}]
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Prepare Inquiry Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-orange text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-mono"
                      id="prepare-inquiry-button"
                    >
                      <span>{dict.prepareBtn[currentLang]}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    key="prepared-summary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Mandatory Backend integration notice */}
                    <div className="p-4 bg-amber-50/90 border border-amber-300 text-amber-950 text-xs leading-relaxed">
                      <p className="font-medium">
                        {dict.mandatoryNotice[currentLang]}
                      </p>
                    </div>

                    {/* Formatted inquiry summary */}
                    <div className="bg-white p-4 border border-brand-blue/15 font-mono text-xs text-brand-blue/90 space-y-1.5 whitespace-pre-wrap">
                      {getInquirySummary()}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="flex-1 py-3 px-4 bg-brand-blue hover:bg-brand-orange text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono"
                      >
                        {copiedInquiry ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-300" />
                            <span>{dict.copiedBtn[currentLang]}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{dict.copyBtn[currentLang]}</span>
                          </>
                        )}
                      </button>

                      <a
                        href={mailtoLink}
                        className="flex-1 py-3 px-4 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 text-center font-mono"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{dict.emailBtn[currentLang]}</span>
                      </a>
                    </div>

                    {/* Reset / Edit */}
                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={() => setFormState('idle')}
                        className="text-xs font-mono text-brand-blue/60 hover:text-brand-orange uppercase tracking-wider underline cursor-pointer bg-transparent border-none"
                      >
                        {dict.editInquiry[currentLang]}
                      </button>
                    </div>

                    {/* Privacy reminder */}
                    <p className="text-[11px] text-brand-blue/60 text-center">
                      {dict.privacyNotice[currentLang]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
