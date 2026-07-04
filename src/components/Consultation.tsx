import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building, Send, CheckCircle2, Globe, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Language, translationStrings } from '../data';

interface ConsultationProps {
  currentLang: Language;
}

export default function Consultation({ currentLang }: ConsultationProps) {
  const strings = translationStrings.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedOffice, setSelectedOffice] = useState<'hcm' | 'beijing' | 'london'>('hcm');
  const [showWeChatTooltip, setShowWeChatTooltip] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(
        currentLang === 'vi'
          ? 'Vui lòng điền đầy đủ thông tin.'
          : currentLang === 'zh'
          ? '请填写所有必填信息。'
          : 'Please complete all required fields.'
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg(
        currentLang === 'vi'
          ? 'Vui lòng nhập email hợp lệ.'
          : currentLang === 'zh'
          ? '请输入有效的邮箱地址。'
          : 'Please provide a valid email address.'
      );
      return;
    }

    setFormState('loading');

    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  // Localized dictionaries
  const dict = {
    formTitle: {
      en: 'Direct Inquiry Desk',
      vi: 'Yêu cầu Liên hệ trực tiếp',
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
      en: 'Briefly state your objectives...',
      vi: 'Tóm tắt sơ bộ mục tiêu hợp tác...',
      zh: '请简述您的对接诉求及合作细节...'
    },
    submitBtn: {
      en: 'Send Message',
      vi: 'Gửi Thông điệp',
      zh: '发送会谈申请'
    },
    submitting: {
      en: 'Sending...',
      vi: 'Đang gửi...',
      zh: '正在投递...'
    },
    successTitle: {
      en: 'Message Secured',
      vi: 'Thông điệp đã gửi bảo mật',
      zh: '申请已成功投递'
    },
    successText: {
      en: 'Your inquiry has been successfully routed. We will initiate contact within 2 business days.',
      vi: 'Yêu cầu của quý vị đã được gửi đi. Chúng tôi sẽ phản hồi chính thức trong vòng 2 ngày làm việc.',
      zh: '您的合作意向已安全送达。我们的执行合伙人将在2个工作日内与您取得联系。'
    },
    resetBtn: {
      en: 'New Inquiry',
      vi: 'Gửi yêu cầu mới',
      zh: '新建联络申请'
    },
    offices: {
      hcmTitle: {
        en: 'Ho Chi Minh Headquarters',
        vi: 'Trụ sở chính TP. Hồ Chí Minh',
        zh: '胡志明市总部 (全球中心)'
      },
      hcmAddress: {
        en: 'Level 42, Bitexco Financial Tower, District 1, Ho Chi Minh City, Vietnam',
        vi: 'Tầng 42, Tháp Tài chính Bitexco, Quận 1, TP. Hồ Chí Minh, Việt Nam',
        zh: '越南胡志明市第一郡金融塔42层'
      },
      beijingTitle: {
        en: 'Beijing Desk',
        vi: 'Văn phòng Bắc Kinh',
        zh: '北京高管协作中心'
      },
      beijingAddress: {
        en: 'Level 38, China World Tower A, Chaoyang District, Beijing, China',
        vi: 'Tầng 38, Tháp Trung Quốc Quốc Tế A, Quận Triều Dương, Bắc Kinh, Trung Quốc',
        zh: '中国北京市朝阳区国贸大厦A座38层'
      },
      ldnTitle: {
        en: 'London Office',
        vi: 'Văn phòng London',
        zh: '伦敦联盟代表处'
      },
      ldnAddress: {
        en: 'Mayfair Executive Spaces, Berkeley Square, London W1J 6BQ',
        vi: 'Không gian Điều hành Mayfair, Quảng trường Berkeley, London W1J 6BQ',
        zh: '英国伦敦梅费尔伯克利广场高管中心 W1J 6BQ'
      }
    }
  };

  const mapData = {
    hcm: { x: '73%', y: '64%' },
    beijing: { x: '76%', y: '42%' },
    london: { x: '20%', y: '25%' }
  };

  return (
    <section
      id="contact"
      className="bg-white py-44 md:py-64 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch" id="consultation-grid">
          
          {/* Left Column: Directory & Email */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="consultation-left-col">
            <div>
              <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
                {strings.tagline[currentLang]}
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
                {strings.title[currentLang]}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-brand-blue/70 mt-8 font-light leading-relaxed">
                {strings.description[currentLang]}
              </p>

              {/* Showcase the official email prominently */}
              <div className="mt-10 bg-brand-cream p-8 hover:bg-brand-cream/80 transition-all duration-300">
                <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase">
                  Primary Strategic Inquiries
                </span>
                <a
                  href="mailto:liuyan@vietbridge.one"
                  className="font-mono text-xl md:text-2.5xl lg:text-3xl text-brand-blue font-extrabold hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-2"
                  id="primary-contact-email"
                >
                  liuyan@vietbridge.one
                  <ArrowUpRight className="w-5 h-5 text-brand-orange shrink-0" />
                </a>
                <span className="text-sm text-brand-blue/50 leading-relaxed font-light mt-4 block">
                  {currentLang === 'vi' 
                    ? 'Quý vị vui lòng liên hệ trực tiếp qua email để trao đổi bảo mật.'
                    : currentLang === 'zh'
                    ? '请直接发送信件，我们将安排专人与您启动最高规格的闭门战略讨论。'
                    : 'Direct all strategic partnership requests here for confidential processing.'}
                </span>
              </div>

              {/* Office Selection List */}
              <div className="mt-14 space-y-2" id="office-registries">
                <button
                  onClick={() => setSelectedOffice('hcm')}
                  className={`w-full text-left flex items-start gap-4 p-5 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'hcm' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/30'
                  }`}
                  id="office-trigger-hcm"
                >
                  <MapPin className="w-4.5 h-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.hcmTitle[currentLang]}
                    </h4>
                    <p className="text-sm text-brand-blue/60 mt-2 font-light leading-relaxed">
                      {dict.offices.hcmAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedOffice('beijing')}
                  className={`w-full text-left flex items-start gap-4 p-5 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'beijing' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/30'
                  }`}
                  id="office-trigger-beijing"
                >
                  <Building className="w-4.5 h-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.beijingTitle[currentLang]}
                    </h4>
                    <p className="text-sm text-brand-blue/60 mt-2 font-light leading-relaxed">
                      {dict.offices.beijingAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedOffice('london')}
                  className={`w-full text-left flex items-start gap-4 p-5 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedOffice === 'london' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/30'
                  }`}
                  id="office-trigger-london"
                >
                  <Mail className="w-4.5 h-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-brand-blue uppercase">
                      {dict.offices.ldnTitle[currentLang]}
                    </h4>
                    <p className="text-sm text-brand-blue/60 mt-2 font-light leading-relaxed">
                      {dict.offices.ldnAddress[currentLang]}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Channels and Tooltips */}
            <div className="mt-14 pt-8 border-t border-brand-blue/10 flex flex-col gap-6" id="consultation-compliance-block">
              <div className="flex flex-wrap items-center gap-4 relative" id="contact-social-icons">
                <span className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-widest mr-2">
                  Channels
                </span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-brand-cream hover:bg-brand-orange hover:text-white text-brand-blue/60 transition-all"
                >
                  <Linkedin className="w-4 h-4 stroke-1" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-brand-cream hover:bg-brand-orange hover:text-white text-brand-blue/60 transition-all"
                >
                  <Twitter className="w-4 h-4 stroke-1" />
                </a>
                
                {/* WeChat Interactive Tooltip without window.alert */}
                <div className="relative">
                  <button
                    onClick={() => setShowWeChatTooltip(!showWeChatTooltip)}
                    className="p-2.5 bg-brand-cream hover:bg-brand-orange hover:text-white text-brand-blue/60 transition-all cursor-pointer focus:outline-none"
                  >
                    <MessageCircle className="w-4 h-4 stroke-1" />
                  </button>
                  <AnimatePresence>
                    {showWeChatTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-12 left-0 bg-brand-blue text-white text-[10px] font-mono tracking-wider py-2 px-3 shadow-lg border border-brand-orange whitespace-nowrap z-50"
                      >
                        WeChat ID: VietBridgeGroup
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center gap-4 text-brand-blue/40">
                <Phone className="w-4.5 h-4.5 text-brand-orange shrink-0 stroke-1" />
                <div className="text-[10px] font-mono leading-relaxed uppercase tracking-wider">
                  Institutional Desk Line<br />
                  +84 (0) 24 3828 0101
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Interactive Map & Minimal Intake Form */}
          <div className="lg:col-span-7 flex flex-col gap-14 justify-between" id="consultation-right-col">
            
            {/* Elegant, Larger Map Display */}
            <div className="bg-brand-cream p-6 relative overflow-hidden" id="google-map-placeholder">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-widest flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-orange" />
                  {currentLang === 'vi' ? 'Bản Đồ Văn Phòng Đa Phương' : currentLang === 'zh' ? '全球机构版图' : 'Bilateral Office Grid'}
                </span>
                <span className="text-[8px] font-mono text-brand-orange font-bold uppercase bg-brand-orange/10 px-2.5 py-0.5">
                  HQ VERIFIED
                </span>
              </div>

              {/* Enlarged Map aspect ratio for a powerful visual feel */}
              <div className="relative h-64 md:h-80 bg-[#0d1627] overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #e28743 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                <svg viewBox="0 0 400 170" className="absolute inset-0 w-full h-full opacity-10">
                  <path d="M50,40 Q80,20 120,30 T200,45 T280,30 T350,50 L360,130 Q300,150 250,140 T150,150 T60,130 Z" fill="#e28743" />
                  <path d="M10,80 Q40,60 70,80 T130,90 T200,80" fill="none" stroke="#e28743" strokeWidth="1" />
                </svg>

                {/* Pinpoint Markers on larger coordinates */}
                <div className="absolute inset-0">
                  {/* HCM HQ */}
                  <div className="absolute" style={{ left: mapData.hcm.x, top: mapData.hcm.y }}>
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-4 h-4 bg-brand-orange/30 rounded-full animate-ping ${selectedOffice === 'hcm' ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`w-2.5 h-2.5 rounded-full border border-white shadow-md ${selectedOffice === 'hcm' ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />
                      <span className="absolute top-4 text-[7px] font-bold text-white uppercase tracking-widest whitespace-nowrap bg-[#0d1627]/90 px-1.5 py-0.5 border border-white/10">HCM HQ</span>
                    </div>
                  </div>

                  {/* Beijing Desk */}
                  <div className="absolute" style={{ left: mapData.beijing.x, top: mapData.beijing.y }}>
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-4 h-4 bg-brand-orange/30 rounded-full animate-ping ${selectedOffice === 'beijing' ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`w-2.5 h-2.5 rounded-full border border-white shadow-md ${selectedOffice === 'beijing' ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />
                      <span className="absolute top-4 text-[7px] font-bold text-white uppercase tracking-widest whitespace-nowrap bg-[#0d1627]/90 px-1.5 py-0.5 border border-white/10">Beijing</span>
                    </div>
                  </div>

                  {/* London */}
                  <div className="absolute" style={{ left: mapData.london.x, top: mapData.london.y }}>
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-4 h-4 bg-brand-orange/30 rounded-full animate-ping ${selectedOffice === 'london' ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`w-2.5 h-2.5 rounded-full border border-white shadow-md ${selectedOffice === 'london' ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />
                      <span className="absolute top-4 text-[7px] font-bold text-white uppercase tracking-widest whitespace-nowrap bg-[#0d1627]/90 px-1.5 py-0.5 border border-white/10">London</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium, Minimal Intake Form */}
            <div className="bg-brand-cream p-10 md:p-14 relative" id="intake-form-box">

              <AnimatePresence mode="wait">
                {formState !== 'success' ? (
                  <motion.form
                    key="consult-form"
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <h3 className="text-sm md:text-base font-sans font-extrabold text-brand-blue tracking-[0.2em] pb-4 border-b border-brand-blue/10 uppercase">
                      {dict.formTitle[currentLang]}
                    </h3>

                    {errorMsg && (
                      <div className="p-3 bg-brand-orange/10 border border-brand-orange text-brand-blue text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
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
                        className="w-full bg-white/70 border-b border-brand-blue/20 hover:border-brand-blue/40 focus:border-brand-orange focus:border-b-2 focus:outline-none text-brand-blue text-sm px-1 py-3 transition-all rounded-none placeholder:text-brand-blue/30"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
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
                        className="w-full bg-white/70 border-b border-brand-blue/20 hover:border-brand-blue/40 focus:border-brand-orange focus:border-b-2 focus:outline-none text-brand-blue text-sm px-1 py-3 transition-all rounded-none placeholder:text-brand-blue/30"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
                        {dict.msgLabel[currentLang]}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder={dict.msgPlaceholder[currentLang]}
                        className="w-full bg-white/70 border-b border-brand-blue/20 hover:border-brand-blue/40 focus:border-brand-orange focus:border-b-2 focus:outline-none text-brand-blue text-sm px-1 py-3 transition-all rounded-none placeholder:text-brand-blue/30 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full py-4 bg-brand-blue hover:bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-2 cursor-pointer disabled:bg-brand-blue/50"
                      id="submit-consult-button"
                    >
                      {formState === 'loading' ? (
                        <>
                           <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          {dict.submitting[currentLang]}
                        </>
                      ) : (
                        <>
                          {dict.submitBtn[currentLang]}
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-6 relative z-10"
                    id="form-success-container"
                  >
                    <CheckCircle2 className="w-12 h-12 text-brand-orange mb-4 stroke-[1.5]" />
                    
                    <h3 className="text-base md:text-lg font-sans font-extrabold text-brand-blue tracking-tight uppercase">
                      {dict.successTitle[currentLang]}
                    </h3>
                    
                    <p className="text-xs font-mono text-brand-orange tracking-widest uppercase mt-1">
                      Ref: VB-{Math.floor(Math.random() * 900000 + 100000)}
                    </p>

                    <div className="mt-6 max-w-md bg-white p-6 shadow-sm">
                      <p className="text-xs text-brand-blue/80 leading-relaxed font-light">
                        {dict.successText[currentLang]}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({
                          name: '',
                          email: '',
                          message: ''
                        });
                        setFormState('idle');
                      }}
                      className="mt-8 px-6 py-2.5 border border-brand-blue/20 hover:border-brand-blue text-brand-blue text-xs font-bold tracking-widest uppercase transition-colors rounded-none cursor-pointer"
                      id="back-to-form-button"
                    >
                      {dict.resetBtn[currentLang]}
                    </button>
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
