import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Mail, Building, Copy, Check, Shield, MessageCircle } from 'lucide-react';
import { Language, translationStrings, contactInquiryAreas } from '../data';

interface ConsultationProps {
  currentLang: Language;
  onNavigate?: (page: 'home' | 'enterprise' | 'education' | 'cases' | 'about' | 'contact' | 'privacy' | 'terms', sectionId?: string) => void;
}

type RegionKey = 'hcm' | 'hanoi' | 'china';

export default function Consultation({ currentLang, onNavigate }: ConsultationProps) {
  const strings = translationStrings.contact;
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('hcm');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [showWeChatTooltip, setShowWeChatTooltip] = useState(false);

  const officialEmail = 'liuyan@vietbridge.one';

  const copyText = (text: string, type: 'email' | 'wechat') => {
    const markCopied = () => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedWeChat(true);
        setTimeout(() => setCopiedWeChat(false), 2500);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      markCopied();
    }
  };

  const dict = {
    channelTitle: {
      en: 'Direct Contact Channels',
      vi: 'Kênh Liên Hệ Trực Tiếp',
      zh: '直接联系方式与合作对接'
    },
    channelHeading: {
      en: 'Connect Directly With Our Team',
      vi: 'Kết Nối Trực Tiếp Cùng Đội Ngũ Dự Án',
      zh: '通过邮箱或社交平台直接联系我们'
    },
    channelSub: {
      en: 'Reach out directly via email or our official social channels to discuss AI enterprise enablement, corporate training, Vietnam market entry, or VietBridge Study education solutions.',
      vi: 'Liên hệ trực tiếp qua email hoặc các kênh mạng xã hội chính thức để trao đổi về giải pháp AI doanh nghiệp, đào tạo, tư vấn thị trường hoặc giải pháp giáo dục VietBridge Study.',
      zh: '欢迎通过电子邮箱、Facebook、TikTok 或微信直接与我们取得联系，洽谈 AI 企业赋能、企业实务培训、越南落地咨询或 VietBridge Study 教育科技方案。'
    },
    sendEmailBtn: {
      en: 'Send Email Now',
      vi: 'Gửi Email Ngay',
      zh: '直接发送邮件'
    },
    copyEmailBtn: {
      en: 'Copy Email Address',
      vi: 'Sao Chép Email',
      zh: '复制邮箱地址'
    },
    copiedBtn: {
      en: 'Copied!',
      vi: 'Đã sao chép!',
      zh: '已复制！'
    },
    topicsLabel: {
      en: 'Click a topic below to launch an email inquiry with a pre-filled subject:',
      vi: 'Chọn chủ đề bên dưới để mở ứng dụng email với tiêu đề điền sẵn:',
      zh: '可点击下方咨询方向直接唤起邮件发送（自动带入咨询主题）：'
    },
    privacyNotice: {
      en: 'When you contact us via email or social channels, we handle your information in accordance with our Privacy Policy.',
      vi: 'Khi quý vị liên hệ qua email hoặc mạng xã hội, thông tin được bảo mật theo Chính Sách Bảo Mật của chúng tôi.',
      zh: '当您通过邮箱或社交渠道联系我们时，我们将严格按照隐私政策保护您的联系信息。'
    },
    privacyLink: {
      en: 'Privacy Policy',
      vi: 'Chính Sách Bảo Mật',
      zh: '隐私政策'
    },
    regions: {
      hcmTitle: {
        en: 'Key Service Region · Ho Chi Minh City & Southern Vietnam',
        vi: 'Khu vực Dịch vụ Trọng điểm · TP. Hồ Chí Minh & Miền Nam',
        zh: '重点服务地区 · 胡志明市及越南南部'
      },
      hcmAddress: {
        en: 'Supporting enterprises and schools across Ho Chi Minh City, Binh Duong, and Dong Nai.',
        vi: 'Hỗ trợ doanh nghiệp và trường học tại TP. Hồ Chí Minh, Bình Dương và Đồng Nai.',
        zh: '面向胡志明市、平阳、同奈等区域的企业与学校提供咨询、培训策划与方案支持'
      },
      hanoiTitle: {
        en: 'Key Service Region · Hanoi & Northern Vietnam',
        vi: 'Khu vực Dịch vụ Trọng điểm · Hà Nội & Miền Bắc',
        zh: '重点服务地区 · 河内及越南北部'
      },
      hanoiAddress: {
        en: 'Supporting northern Vietnam market research, bilingual training, and education technology inquiries.',
        vi: 'Hỗ trợ khảo sát thị trường miền Bắc, đào tạo song ngữ và tư vấn công nghệ giáo dục.',
        zh: '支持越南北部市场进入调研、双语培训合作与教育科技产品方案咨询'
      },
      chinaTitle: {
        en: 'Supported Market · China Cross-Border Coordination',
        vi: 'Thị trường Hỗ trợ · Kết nối Xuyên biên giới Trung Quốc',
        zh: '可支持的市场 · 中国跨境协同与对接'
      },
      chinaAddress: {
        en: 'Remote consultation and resource matching for Chinese enterprises and bilateral education programs.',
        vi: 'Tư vấn trực tuyến và kết nối nguồn lực cho doanh nghiệp Trung Quốc và chương trình giáo dục song phương.',
        zh: '为计划进入越南的中国企业、教育科技生态伙伴及赴华留学项目提供线上咨询与对接支持'
      }
    }
  };

  const inquiryTopics = contactInquiryAreas[currentLang] || contactInquiryAreas.en;

  return (
    <section
      id="contact"
      className="bg-white py-24 md:py-36 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch" id="consultation-grid">
          
          {/* Left Column: Service Regions & Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="consultation-left-col">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase block mb-4 font-mono">
                {strings.tagline[currentLang]}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
                {strings.title[currentLang]}
              </h2>
              <p className="text-sm sm:text-base text-brand-blue/70 mt-6 font-light leading-relaxed">
                {strings.description[currentLang]}
              </p>

              {/* Key Service Regions & Supported Markets */}
              <div className="mt-8 space-y-2" id="service-regions-list">
                <button
                  type="button"
                  onClick={() => setSelectedRegion('hcm')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedRegion === 'hcm' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="region-trigger-hcm"
                >
                  <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.regions.hcmTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.regions.hcmAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedRegion('hanoi')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedRegion === 'hanoi' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="region-trigger-hanoi"
                >
                  <Building className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.regions.hanoiTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.regions.hanoiAddress[currentLang]}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedRegion('china')}
                  className={`w-full text-left flex items-start gap-4 p-4 transition-all duration-300 border-none focus:outline-none cursor-pointer ${
                    selectedRegion === 'china' ? 'bg-brand-cream' : 'bg-transparent hover:bg-brand-cream/40'
                  }`}
                  id="region-trigger-china"
                >
                  <Mail className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                      {dict.regions.chinaTitle[currentLang]}
                    </h4>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light leading-relaxed">
                      {dict.regions.chinaAddress[currentLang]}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom Quick Links */}
            <div className="mt-8 pt-6 border-t border-brand-blue/10 flex flex-wrap items-center justify-between gap-4" id="consultation-channel-block">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${officialEmail}`}
                  className="text-xs font-mono text-brand-blue/70 hover:text-brand-orange flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{officialEmail}</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1FBNBPoMXg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-brand-blue/70 hover:text-brand-orange flex items-center gap-1.5"
                  id="contact-facebook-link"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@vietbridgestudy.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-brand-blue/70 hover:text-brand-orange flex items-center gap-1.5"
                  id="contact-tiktok-link"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>TikTok: vietbridgestudy.official</span>
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

          {/* Right Column: Direct Contact Cards & Topic Quick Mailto (No Form) */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="consultation-direct-wrapper">
            <div className="bg-brand-cream p-6 sm:p-10 md:p-12 border border-brand-blue/10 space-y-8">
              
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase block font-mono">
                  {dict.channelTitle[currentLang]}
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-brand-blue mt-1 leading-[1.35]">
                  {dict.channelHeading[currentLang]}
                </h3>
                <p className="text-xs sm:text-sm text-brand-blue/70 mt-3 leading-relaxed font-light">
                  {dict.channelSub[currentLang]}
                </p>
              </div>

              {/* Primary Email Box */}
              <div className="bg-white p-6 sm:p-8 border border-brand-blue/15 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase font-mono">
                    {currentLang === 'zh' ? '官方联系邮箱 · DIRECT EMAIL' : currentLang === 'vi' ? 'EMAIL LIÊN HỆ TRỰC TIẾP' : 'DIRECT CONTACT EMAIL'}
                  </span>
                  <span className="text-[11px] font-mono text-brand-blue/50">
                    VietBridge Group
                  </span>
                </div>

                <a
                  href={`mailto:${officialEmail}`}
                  className="font-mono text-lg sm:text-xl md:text-2xl text-brand-blue font-extrabold hover:text-brand-orange transition-colors flex items-center gap-2 break-all"
                  id="primary-contact-email"
                >
                  <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>{officialEmail}</span>
                </a>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`mailto:${officialEmail}?subject=${encodeURIComponent('[VietBridge Inquiry] Project & Solution Consultation')}`}
                    className="flex-1 py-3.5 px-5 bg-brand-blue hover:bg-brand-orange text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 font-mono text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{dict.sendEmailBtn[currentLang]}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => copyText(officialEmail, 'email')}
                    className="flex-1 py-3.5 px-5 border border-brand-blue/25 text-brand-blue hover:border-brand-orange hover:text-brand-orange bg-[#FAF9F6] text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{dict.copiedBtn[currentLang]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{dict.copyEmailBtn[currentLang]}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Media & Instant Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://www.facebook.com/share/1FBNBPoMXg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 border border-brand-blue/10 hover:border-brand-orange transition-all group flex flex-col justify-between gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                      FACEBOOK
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-blue/40 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                      Facebook Official
                    </div>
                    <div className="text-[11px] text-brand-blue/60 font-mono truncate mt-0.5">
                      facebook.com/share/1FBNBPoMXg
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@vietbridgestudy.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 border border-brand-blue/10 hover:border-brand-orange transition-all group flex flex-col justify-between gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                      TIKTOK
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-blue/40 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                      VietBridge Study
                    </div>
                    <div className="text-[11px] text-brand-blue/60 font-mono truncate mt-0.5">
                      @vietbridgestudy.official
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyText('VietBridgeGroup', 'wechat')}
                  className="bg-white p-5 border border-brand-blue/10 hover:border-brand-orange transition-all group flex flex-col justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                      WECHAT / 微信
                    </span>
                    {copiedWeChat ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <MessageCircle className="w-4 h-4 text-brand-blue/40 group-hover:text-brand-orange transition-colors" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                      VietBridgeGroup
                    </div>
                    <div className="text-[11px] text-brand-blue/60 font-mono mt-0.5">
                      {copiedWeChat
                        ? dict.copiedBtn[currentLang]
                        : currentLang === 'zh'
                        ? '点击复制微信号'
                        : 'Click to copy ID'}
                    </div>
                  </div>
                </button>
              </div>

              {/* Quick Topic Mailto Triggers */}
              <div className="space-y-3 pt-2 border-t border-brand-blue/10">
                <span className="text-[11px] font-mono text-brand-blue/65 block">
                  {dict.topicsLabel[currentLang]}
                </span>
                <div className="flex flex-wrap gap-2">
                  {inquiryTopics.map((area) => (
                    <a
                      key={area.value}
                      href={`mailto:${officialEmail}?subject=${encodeURIComponent(`[VietBridge Inquiry] ${area.label}`)}`}
                      className="px-3 py-1.5 bg-white border border-brand-blue/15 hover:border-brand-orange hover:text-brand-orange text-brand-blue text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{area.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-brand-orange" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Privacy Policy Note */}
              <div className="p-3 bg-white/70 border border-brand-blue/10 text-[11px] text-brand-blue/75 leading-relaxed">
                <div className="flex items-start gap-2">
                  <Shield className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <span>{dict.privacyNotice[currentLang]}</span>{' '}
                    <a
                      href="/privacy-policy"
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('privacy');
                        }
                      }}
                      className="text-brand-orange font-bold hover:underline bg-transparent border-none p-0 cursor-pointer text-[11px] inline"
                    >
                      [{dict.privacyLink[currentLang]}]
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
