export type Language = 'en' | 'vi' | 'zh';

export interface NavSubItem {
  id: string;
  label: Record<Language, string>;
  href: string;
}

export interface NavItem {
  id: string;
  label: Record<Language, string>;
  href: string;
  children?: NavSubItem[];
}

export const navigationItems: NavItem[] = [
  { id: 'hero', label: { en: 'Home', vi: 'Trang chủ', zh: '首页' }, href: '#hero' },
  {
    id: 'enterprise',
    label: { en: 'Enterprise', vi: 'Doanh nghiệp', zh: '企业赋能' },
    href: '#enterprise',
    children: [
      { id: 'ent-1', label: { en: 'AI Social Media Operations', vi: 'Vận hành AI Social Media', zh: 'AI 社媒代运营与数字营销' }, href: '#enterprise' },
      { id: 'ent-2', label: { en: 'Corporate Training', vi: 'Đào tạo Doanh nghiệp', zh: '企业实战培训' }, href: '#enterprise' },
      { id: 'ent-3', label: { en: 'Vietnam Market Entry', vi: 'Tư vấn Thâm nhập Việt Nam', zh: '跨国企业越南落地咨询' }, href: '#enterprise' },
      { id: 'ent-4', label: { en: 'Vietnam Companies Going Global', vi: 'Doanh nghiệp Việt Vươn ra Toàn cầu', zh: '越南企业出海服务' }, href: '#enterprise' },
      { id: 'ent-5', label: { en: 'Talent Development', vi: 'Phát triển Nhân tài & Đào tạo', zh: '人才委培与校企合作' }, href: '#enterprise' },
    ]
  },
  {
    id: 'education',
    label: { en: 'VietBridge Study', vi: 'VietBridge Study', zh: '教育赋能' },
    href: '#education',
    children: [
      { id: 'edu-1', label: { en: 'Blackboard / BB Learning Platform', vi: 'Nền tảng Học tập Blackboard / BB', zh: 'Blackboard / BB 在线教学与学习管理' }, href: '#education' },
      { id: 'edu-2', label: { en: 'Radica Smart Classroom', vi: 'Lớp học Thông minh Radica', zh: 'Radica Smart Classroom 智慧课堂方案' }, href: '#education' },
      { id: 'edu-3', label: { en: 'STEM, AI & Robotics Learning', vi: 'Giáo dục STEM, AI & Robotics', zh: 'STEM / AI / Robotics 教育方案' }, href: '#education' },
      { id: 'edu-4', label: { en: 'Intelligent Learning System', vi: 'Hệ thống Học tập Thông minh', zh: '智能学习与学情追踪系统' }, href: '#education' },
      { id: 'edu-5', label: { en: 'Digital Campus Support', vi: 'Khuôn viên Số & Quản lý', zh: '数字校园与校园管理辅助系统' }, href: '#education' },
      { id: 'edu-6', label: { en: 'Teacher Training & Cooperation', vi: 'Đào tạo Giáo viên & Hợp tác Quốc tế', zh: '教师培训与中越教育合作' }, href: '#education' },
    ]
  },
  { id: 'cases', label: { en: 'Cases', vi: 'Dự án', zh: '项目案例' }, href: '#cases' },
  { id: 'partners', label: { en: 'Partners', vi: 'Đối tác', zh: '生态伙伴' }, href: '#partners' },
  { id: 'about', label: { en: 'About', vi: 'Về chúng tôi', zh: '关于我们' }, href: '#about' },
];

export const languagesList = [
  { code: 'en' as Language, label: 'English' },
  { code: 'vi' as Language, label: 'Tiếng Việt' },
  { code: 'zh' as Language, label: '中文' }
];

export const translationStrings = {
  hero: {
    tagline: {
      en: 'AI-Powered Enterprise & Education Enablement',
      vi: 'Nền tảng Khai phóng Doanh nghiệp & Giáo dục Bằng AI',
      zh: 'AI 驱动的企业与教育赋能平台'
    },
    slogan: {
      en: 'AI-powered Enterprise & Education Enablement across Vietnam and Asia',
      vi: 'Khai phóng Doanh nghiệp & Giáo dục bằng AI tại Việt Nam và Châu Á',
      zh: '用 AI 连接企业、教育与跨境增长'
    },
    description: {
      en: 'VietBridge Group helps enterprises, schools and institutions enter new markets, build digital capabilities, upgrade education systems and grow through AI-powered solutions.',
      vi: 'VietBridge Group đồng hành cùng doanh nghiệp, trường học và tổ chức thâm nhập thị trường, nâng cấp năng lực số, chuyển đổi giáo dục và tăng trưởng bứt phá bằng giải pháp AI.',
      zh: '越桥集团帮助企业、院校与机构完成越南落地、数字化升级、教育转型与跨境合作，用 AI 打造更高效的增长与连接能力。'
    },
    ctaEnterprise: {
      en: 'Explore Enterprise Solutions',
      vi: 'Khám phá Giải pháp Doanh nghiệp',
      zh: '查看企业赋能方案'
    },
    ctaEducation: {
      en: 'Explore VietBridge Study',
      vi: 'Khám phá VietBridge Study',
      zh: '了解 VietBridge Study 教育方案'
    },
    ctaCases: {
      en: 'View Case Studies',
      vi: 'Xem Dự án Thực tế',
      zh: '查看项目案例'
    },
    ctaContact: {
      en: 'Contact VietBridge',
      vi: 'Liên hệ VietBridge',
      zh: '联系越桥集团'
    }
  },
  whatWeDo: {
    tagline: {
      en: 'TWO ENGINES FOR AI-ERA GROWTH',
      vi: 'HAI ĐỘNG CƠ TĂNG TRƯỞNG THỜI ĐẠI AI',
      zh: '两大核心产线'
    },
    title: {
      en: 'Two Engines for AI-era Growth',
      vi: 'Hai động cơ tăng trưởng trong kỷ nguyên AI',
      zh: '两大产线，驱动 AI 时代的企业与教育升级'
    },
    description: {
      en: 'VietBridge Group operates through two integrated business lines: AI Enterprise Enablement and AI Education Enablement. We combine technology, training, local execution and cross-border resources to help organizations move from strategy to implementation.',
      vi: 'VietBridge Group vận hành qua hai trụ cột chiến lược song hành: Khai phóng Doanh nghiệp bằng AI và Khai phóng Giáo dục bằng AI. Chúng tôi kết hợp công nghệ, đào tạo, năng lực thực thi bản địa và tài nguyên xuyên biên giới.',
      zh: '越桥集团以 AI 企业赋能与 AI 教育赋能两大产线为核心，融合 AI 技术、培训体系、本地执行能力与中越跨境资源，帮助客户从战略判断走向真实落地。'
    }
  },
  enterprise: {
    tagline: {
      en: 'BUSINESS LINE 1',
      vi: 'TRỤ CỘT KINH DOANH 1',
      zh: '核心业务产线 01'
    },
    title: {
      en: 'AI Enterprise Enablement',
      vi: 'Khai phóng Doanh nghiệp bằng AI',
      zh: 'AI 企业赋能'
    },
    intro: {
      en: 'We help enterprises grow, localize and transform in Vietnam and across Asia through AI-powered marketing, training, consulting, talent development and cross-border business services.',
      vi: 'Chúng tôi giúp doanh nghiệp tăng trưởng, bản địa hóa và chuyển đổi số tại Việt Nam và Châu Á thông qua tiếp thị AI, đào tạo, tư vấn, phát triển nhân tài và dịch vụ xuyên biên giới.',
      zh: '我们帮助企业在越南及亚洲市场完成增长、本地化和数字化转型，服务覆盖 AI 营销、企业培训、越南落地咨询、人才委培和跨境商务合作。'
    }
  },
  education: {
    tagline: {
      en: 'BUSINESS LINE 2 · VIETBRIDGE STUDY',
      vi: 'TRỤ CỘT KINH DOANH 2 · VIETBRIDGE STUDY',
      zh: '核心业务产线 02 · VIETBRIDGE STUDY'
    },
    title: {
      en: 'VietBridge Study · AI Education Enablement',
      vi: 'VietBridge Study · Khai phóng Giáo dục bằng AI',
      zh: 'VietBridge Study｜AI 教育赋能'
    },
    brandSub: {
      en: 'Technology product portfolio · Solution partner ecosystem · Localized implementation by VietBridge Study',
      vi: 'Danh mục sản phẩm công nghệ giáo dục · Hệ sinh thái đối tác giải pháp · Triển khai bản địa hóa bởi VietBridge Study',
      zh: '教育科技产品组合 · 技术与解决方案合作生态 · 由 VietBridge Study 提供本地化实施与培训支持'
    },
    positioning: {
      en: 'VietBridge Study brings AI-powered teaching, learning and smart classroom solutions to schools and education institutions in Vietnam.',
      vi: 'VietBridge Study mang các giải pháp giảng dạy, học tập ứng dụng AI và lớp học thông minh đến các trường học và tổ chức giáo dục tại Việt Nam.',
      zh: 'VietBridge Study 面向越南学校、高校与教育机构，引入并落地 AI 教育教学系统、智慧课堂、STEM/AI 课程和教师培训方案。'
    },
    intro: {
      en: 'VietBridge Study helps schools and education institutions in Vietnam upgrade teaching, learning and classroom experience through Blackboard / BB learning systems, Radica Smart Classroom solutions, STEM/AI education programs, teacher training and localized implementation support.',
      vi: 'VietBridge Study giúp các trường học và tổ chức giáo dục tại Việt Nam nâng cấp trải nghiệm giảng dạy, học tập và lớp học thông qua hệ thống học tập Blackboard / BB, giải pháp Lớp học Thông minh Radica, chương trình giáo dục STEM/AI, đào tạo giáo viên và hỗ trợ triển khai bản địa hóa.',
      zh: 'VietBridge Study 帮助越南学校与教育机构通过 Blackboard / BB 学习管理系统、Radica 智慧课堂、STEM/AI 教育课程、教师培训与本地化实施服务，升级教学、学习与课堂体验。'
    }
  },
  cases: {
    tagline: {
      en: 'REPRESENTATIVE CASES',
      vi: 'DỰ ÁN TIÊU BIỂU',
      zh: '实践沉淀'
    },
    title: {
      en: 'Featured Projects & Representative Cases',
      vi: 'Dự án Trọng điểm & Điển hình Thực tế',
      zh: '代表项目与实践案例'
    },
    intro: {
      en: 'VietBridge is building its service ecosystem through real enterprise training, AI-powered content operations, education technology integration and China-Vietnam institutional cooperation.',
      vi: 'VietBridge đang xây dựng hệ sinh thái dịch vụ thông qua các khóa đào tạo thực tiễn, vận hành nội dung số AI, tích hợp công nghệ giáo dục và kết nối liên viện Trung - Việt.',
      zh: '越桥集团正在通过企业培训、AI 内容运营、教育科技产品整合和中越院校合作，持续构建面向企业与教育机构的真实服务能力。'
    }
  },
  programs: {
    tagline: {
      en: 'FEATURED INITIATIVES',
      vi: 'DỰ ÁN TRỌNG ĐIỂM',
      zh: '实践案例沉淀'
    },
    title: {
      en: 'Representative Enablement Cases',
      vi: 'Dự án Tiêu biểu & Điển hình Thực tế',
      zh: '代表性赋能与落地案例'
    },
    description: {
      en: 'Real-world case studies demonstrating our capabilities across corporate training, AI content operations, smart campus upgrades, and cross-border landing.',
      vi: 'Các dự án thực tiễn minh chứng cho năng lực đào tạo doanh nghiệp, vận hành nội dung số bằng AI, nâng cấp trường học thông minh và hỗ trợ thâm nhập thị trường.',
      zh: '基于真实商业与教育场景，展示我们在高管培训、AI 内容代运营、智慧教室落地与跨国企业本土化中的交付沉淀。'
    }
  },
  events: {
    tagline: {
      en: 'STRATEGIC SUMMITS & CONVENANTS',
      vi: 'HỘI NGHỊ & ĐỐI THOẠI CHIẾN LƯỢC',
      zh: '战略峰会与闭门论坛'
    },
    title: {
      en: 'Curated Summits & Executive Dialogues',
      vi: 'Diễn Đàn Doanh Nghiệp & Hội Thảo Chuyên Đề',
      zh: '双边战略峰会与闭门高管论坛'
    },
    description: {
      en: 'Direct engagement platforms connecting Vietnamese and Chinese enterprise leaders, academic experts, and technology innovators.',
      vi: 'Các diễn đàn đối thoại kết nối trực tiếp lãnh đạo doanh nghiệp Việt - Trung, chuyên gia học thuật và các nhà phát triển công nghệ.',
      zh: '搭建中越企业高管、顶尖院校学者与技术先锋的面对面对接平台，深度沉淀产业洞察。'
    }
  },
  whyUs: {
    tagline: {
      en: 'WHY VIETBRIDGE',
      vi: 'TẠI SAO CHỌN VIETBRIDGE',
      zh: '核心竞争力'
    },
    title: {
      en: 'Why VietBridge Group',
      vi: 'Tại sao chọn VietBridge Group',
      zh: '为什么选择越桥集团'
    },
    intro: {
      en: 'A modern AI-enabled business and education platform with deep China-Vietnam localization and uncompromising execution capability.',
      vi: 'Nền tảng kinh doanh và giáo dục tích hợp AI với năng lực bản địa hóa sâu sắc Trung - Việt và cam kết thực thi vượt trội.',
      zh: '立足中越、辐射亚洲的现代化 AI 跨境赋能平台，具备极强的本地落地与全流程交付能力。'
    },
    description: {
      en: 'A modern AI-enabled business and education platform with deep China-Vietnam localization and uncompromising execution capability.',
      vi: 'Nền tảng kinh doanh và giáo dục tích hợp AI với năng lực bản địa hóa sâu sắc Trung - Việt và cam kết thực thi vượt trội.',
      zh: '立足中越、辐射亚洲的现代化 AI 跨境赋能平台，具备极强的本地落地与全流程交付能力。'
    }
  },
  partners: {
    tagline: {
      en: 'GLOBAL ECOSYSTEM',
      vi: 'HỆ SINH THÁI TOÀN CẦU',
      zh: '生态协作'
    },
    title: {
      en: 'Powered by a Global Partner Ecosystem',
      vi: 'Được hỗ trợ bởi Hệ sinh thái Đối tác Toàn cầu',
      zh: '由全球合作伙伴生态共同支持'
    },
    intro: {
      en: 'VietBridge works with education technology providers, AI solution companies, universities, training institutions, enterprise service firms and local partners to deliver integrated solutions for Vietnam and overseas markets.',
      vi: 'VietBridge hợp tác cùng các đơn vị công nghệ giáo dục, công ty giải pháp AI, trường đại học, tổ chức đào tạo và đối tác sở tại để cung cấp giải pháp toàn diện cho thị trường.',
      zh: '越桥集团与教育科技公司、AI 解决方案企业、高校、培训机构、企业服务机构和本地合作伙伴共同构建服务生态，为越南及海外市场提供可落地的一体化方案。'
    }
  },
  about: {
    tagline: {
      en: 'ABOUT US',
      vi: 'VỀ VIETBRIDGE',
      zh: '关于我们'
    },
    title: {
      en: 'About VietBridge Group',
      vi: 'Giới thiệu về VietBridge Group',
      zh: '关于越桥集团'
    },
    statement1: {
      en: 'VietBridge Group is an AI-powered enterprise and education enablement platform based in Vietnam and connected to China and global markets.',
      vi: 'VietBridge Group là nền tảng khai phóng doanh nghiệp và giáo dục bằng AI có trụ sở tại Việt Nam, kết nối trực tiếp với Trung Quốc và thị trường toàn cầu.',
      zh: '越桥集团是一家立足越南、连接中国与全球市场的 AI 企业与教育赋能平台。'
    },
    statement2: {
      en: 'We help companies, schools and institutions solve real transformation challenges through market knowledge, technology integration, training, local execution and cross-border cooperation.',
      vi: 'Chúng tôi giúp doanh nghiệp, trường học và tổ chức giải quyết các thách thức chuyển đổi thực tế thông qua sự am hiểu thị trường, tích hợp công nghệ, đào tạo và kết nối xuyên biên giới.',
      zh: '我们通过市场洞察、技术整合、培训体系、本地执行和跨境合作，帮助企业、院校和机构解决真实的增长与转型问题。'
    },
    founderNote: {
      en: 'VietBridge was founded by cross-border entrepreneurs with long-term experience in Vietnam, China-Vietnam business cooperation, digital operations, education services and AI-enabled transformation.',
      vi: 'VietBridge được sáng lập bởi các doanh nhân xuyên biên giới với bề dày kinh nghiệm tại Việt Nam, hợp tác thương mại Trung - Việt, vận hành số, dịch vụ giáo dục và chuyển đổi ứng dụng AI.',
      zh: '越桥集团由长期深耕越南与中越跨境合作的一线创业者发起，团队具备企业服务、数字运营、教育合作和 AI 应用落地经验。'
    }
  },
  contact: {
    tagline: {
      en: 'LET’S CONNECT',
      vi: 'KẾT NỐI HỢP TÁC',
      zh: '开启合作'
    },
    title: {
      en: 'Let’s Build Your Next Growth Bridge',
      vi: 'Cùng Xây Dựng Cây Cầu Tăng Trưởng Tiếp Theo Của Bạn',
      zh: '让我们一起搭建你的下一座增长桥梁'
    },
    description: {
      en: 'Whether you are entering Vietnam, upgrading your enterprise operations, transforming your school, or building international education cooperation, VietBridge can help you move from idea to execution.',
      vi: 'Dù bạn đang bước chân vào thị trường Việt Nam, nâng cấp vận hành doanh nghiệp, chuyển đổi số trường học hay phát triển hợp tác giáo dục quốc tế, VietBridge luôn sẵn sàng đồng hành từ ý tưởng đến thực thi.',
      zh: '无论你正在进入越南市场、升级企业运营、推动学校数字化转型，还是开展国际教育合作，越桥集团都可以帮助你从想法走向执行。'
    }
  }
};

// Two Main Engines Data
export const twoEnginesData: Record<Language, {
  id: string;
  badge: string;
  brandLine?: string;
  title: string;
  description: string;
  ctaText: string;
  anchor: string;
  image: string;
  highlights: string[];
}[]> = {
  en: [
    {
      id: 'enterprise-engine',
      badge: 'BUSINESS LINE 01',
      title: 'AI Enterprise Enablement',
      description: 'For companies entering Vietnam, expanding across Asia, upgrading operations with AI, building local teams and improving market growth.',
      ctaText: 'Explore Enterprise Solutions',
      anchor: '#enterprise',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      highlights: ['AI Social Media Operations', 'Corporate & Compliance Training', 'Vietnam Market Entry Consulting', 'Vietnam Companies Going Global', 'Talent Pipeline & School-Enterprise Cooperation']
    },
    {
      id: 'education-engine',
      badge: 'BUSINESS LINE 02 · VIETBRIDGE STUDY',
      brandLine: 'VietBridge Study',
      title: 'AI Education Enablement',
      description: 'For schools, universities and education institutions seeking AI teaching systems, Blackboard / BB learning platforms, smart classrooms, STEM education, teacher training and international education cooperation.',
      ctaText: 'Explore VietBridge Study',
      anchor: '#education',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Blackboard / BB Online Teaching & LMS', 'Radica Smart Classroom Solutions', 'STEM, AI & Robotics Learning Solutions', 'Intelligent Learning & Digital Campus Support', 'Teacher Training & International Education Cooperation']
    }
  ],
  vi: [
    {
      id: 'enterprise-engine',
      badge: 'TRỤ CỘT DOANH NGHIỆP 01',
      title: 'Khai phóng Doanh nghiệp bằng AI',
      description: 'Dành cho các doanh nghiệp đầu tư vào Việt Nam, mở rộng khắp Châu Á, nâng cấp vận hành bằng AI, xây dựng đội ngũ bản địa và tăng trưởng thị trường.',
      ctaText: 'Khám phá Giải pháp Doanh nghiệp',
      anchor: '#enterprise',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Vận hành Mạng xã hội AI', 'Đào tạo Pháp lý & Doanh nghiệp', 'Tư vấn Thâm nhập Thị trường VN', 'Doanh nghiệp Việt Vươn ra Toàn cầu', 'Đào tạo Nhân tài & Hợp tác Nhà trường - Doanh nghiệp']
    },
    {
      id: 'education-engine',
      badge: 'TRỤ CỘT GIÁO DỤC 02 · VIETBRIDGE STUDY',
      brandLine: 'VietBridge Study',
      title: 'AI Education Enablement',
      description: 'Dành cho các trường học, đại học và tổ chức giáo dục tìm kiếm hệ thống giảng dạy AI, nền tảng học tập Blackboard / BB, lớp học thông minh, giáo dục STEM, đào tạo giáo viên và hợp tác giáo dục quốc tế.',
      ctaText: 'Khám phá VietBridge Study',
      anchor: '#education',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Nền tảng Dạy & Học Trực tuyến Blackboard / BB (LMS)', 'Giải pháp Lớp học Thông minh Radica', 'Giải pháp Giáo dục STEM, AI & Robotics', 'Hệ thống Học tập Thông minh & Khuôn viên Số', 'Đào tạo Giáo viên & Hợp tác Giáo dục Quốc tế']
    }
  ],
  zh: [
    {
      id: 'enterprise-engine',
      badge: '核心产线 01',
      title: 'AI 企业赋能',
      description: '面向进入越南、拓展亚洲、升级运营、建设本地团队和提升市场增长能力的企业。提供全周期数字化与落地赋能。',
      ctaText: '查看企业赋能方案',
      anchor: '#enterprise',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      highlights: ['AI 社媒代运营', '企业培训', '越南落地咨询', '越南企业出海服务', '人才委培与校企合作']
    },
    {
      id: 'education-engine',
      badge: '核心产线 02 · VIETBRIDGE STUDY',
      brandLine: 'VietBridge Study',
      title: 'VietBridge Study｜AI 教育赋能',
      description: '面向学校、高校、国际学校与教育机构，提供 AI 教学系统、Blackboard / BB 学习管理平台、智慧课堂、STEM 教育、教师培训与国际教育合作方案。',
      ctaText: '了解 VietBridge Study 教育方案',
      anchor: '#education',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Blackboard / BB 在线教学与学习管理系统', 'Radica Smart Classroom 智慧课堂方案', 'STEM / AI / Robotics 教育方案', '智能学习系统与数字校园辅助系统', '教师培训、院校合作与赴华留学支持']
    }
  ]
};

// Business Line 1: Enterprise Solutions (5 solutions)
export const enterpriseSolutions: Record<Language, {
  id: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  cta: string;
}[]> = {
  en: [
    {
      id: 'ent-1',
      title: 'AI Social Media & Digital Marketing Operations',
      tag: 'CONTENT FACTORY',
      description: 'AI-powered content operations and digital marketing services for enterprises seeking stronger brand influence, customer engagement and localized market presence.',
      bullets: [
        'AI content factory for high-velocity creation',
        'Localized social media strategy for Vietnam & China',
        'Facebook, TikTok, WeChat and Xiaohongshu operations',
        'Bilingual Chinese / Vietnamese localized copywriting',
        'Data-driven engagement and conversion optimization',
        'Multi-platform publishing workflow with automated review'
      ],
      cta: 'Explore AI Social Media'
    },
    {
      id: 'ent-2',
      title: 'Corporate Training',
      tag: 'PRACTICAL COMPLIANCE',
      description: 'Practical training programs for enterprises operating in Vietnam, covering compliance, management, AI productivity, cross-cultural communication and digital operations.',
      bullets: [
        'Vietnam labor law, employment contracts and compliance',
        'Tax regulation, accounting practices and legal awareness',
        'AI office tools and enterprise productivity workflows',
        'Cross-cultural management between Chinese and Vietnamese teams',
        'Human resources strategy and localized organizational building',
        'Executive weekend masterclasses and leadership seminars'
      ],
      cta: 'Explore Corporate Training'
    },
    {
      id: 'ent-3',
      title: 'Vietnam Market Entry & Localization Consulting',
      tag: 'END-TO-END LANDING',
      description: 'End-to-end support for companies entering Vietnam, from market research and legal setup to local partnerships, industrial park selection and operational execution.',
      bullets: [
        'Macro market entry strategy and feasibility research',
        'FDI company registration, licenses and legal setup coordination',
        'Industrial park site selection, land lease and factory search',
        'Reliable local partner and supply chain vendor matching',
        'Cross-border financial routing, tax and HR coordination',
        'Business delegation hosting and turnkey project landing'
      ],
      cta: 'Explore Market Entry'
    },
    {
      id: 'ent-4',
      title: 'Vietnam Companies Going Global',
      tag: 'CROSS-BORDER EXPANSION',
      description: 'Helping Vietnamese enterprises, institutions and brands connect with China and overseas markets through localization, partnership development and cross-border business services.',
      bullets: [
        'Strategic China market entry and compliance roadmaps',
        'International distributor and buyer partner matching',
        'Brand localization for Chinese digital consumers',
        'Cross-border digital communications and channel management',
        'Business development support for Vietnamese manufacturers',
        'Education and enterprise cross-border cooperation'
      ],
      cta: 'Explore Going Global'
    },
    {
      id: 'ent-5',
      title: 'Talent Development & Commissioned Training',
      tag: 'WORKFORCE PIPELINE',
      description: 'Customized talent development programs connecting enterprise demand with education resources, bilingual training and future workforce capabilities.',
      bullets: [
        'Bilingual Vietnamese-Chinese technical & management talent',
        'Enterprise-specific customized curricula and apprenticeships',
        'AI, digital marketing and modern trade operational skillsets',
        'Structured university internship and employment pathways',
        'School-enterprise cooperative talent incubators',
        'Fast-track management trainee development programs'
      ],
      cta: 'Explore Talent Programs'
    }
  ],
  vi: [
    {
      id: 'ent-1',
      title: 'Vận hành Mạng xã hội & Tiếp thị Số bằng AI',
      tag: 'CONTENT FACTORY AI',
      description: 'Dịch vụ sản xuất nội dung số và tiếp thị bằng AI giúp doanh nghiệp gia tăng ảnh hưởng thương hiệu, tương tác khách hàng và chiếm lĩnh thị trường bản địa.',
      bullets: [
        'Xưởng nội dung số AI sản xuất nhanh và chuẩn hóa',
        'Chiến lược mạng xã hội bản địa hóa cho thị trường VN & TQ',
        'Vận hành Facebook, TikTok, WeChat và Xiaohongshu',
        'Biên tập nội dung song ngữ Trung - Việt chuẩn văn hóa',
        'Tối ưu hóa dữ liệu tiếp cận và tỷ lệ chuyển đổi',
        'Quy trình xuất bản đa nền tảng kết hợp kiểm duyệt'
      ],
      cta: 'Tìm hiểu Vận hành AI'
    },
    {
      id: 'ent-2',
      title: 'Đào tạo Doanh nghiệp & Tuân thủ Thực chiến',
      tag: 'ĐÀO TẠO THỰC CHIẾN',
      description: 'Chương trình đào tạo thực tiễn cho doanh nghiệp tại Việt Nam về luật lao động, thuế, năng suất AI, giao tiếp xuyên văn hóa và vận hành số.',
      bullets: [
        'Luật lao động Việt Nam, hợp đồng và tuân thủ pháp lý',
        'Chính sách thuế, hạch toán kế toán và phòng ngừa rủi ro',
        'Ứng dụng AI tăng năng suất làm việc cho nhân viên',
        'Quản trị xuyên văn hóa cho đội ngũ quản lý Trung - Việt',
        'Chiến lược nhân sự và xây dựng tổ chức bản địa',
        'Hội thảo chuyên đề quản trị cao cấp cuối tuần'
      ],
      cta: 'Tìm hiểu Đào tạo Doanh nghiệp'
    },
    {
      id: 'ent-3',
      title: 'Tư vấn Thâm nhập Thị trường & Bản địa hóa',
      tag: 'ĐỒNG HÀNH TOÀN DIỆN',
      description: 'Hỗ trợ toàn diện cho doanh nghiệp vào Việt Nam: từ khảo sát thị trường, thành lập pháp nhân, chọn khu công nghiệp đến kết nối đối tác địa phương.',
      bullets: [
        'Nghiên cứu thị trường và chiến lược gia nhập khả thi',
        'Hỗ trợ đăng ký FDI, giấy phép kinh doanh và pháp lý',
        'Khảo sát vị trí, tìm kiếm nhà xưởng và khu công nghiệp',
        'Kết nối đối tác thương mại và nhà cung cấp uy tín',
        'Điều phối dòng vốn, tư vấn thuế và nhân sự',
        'Tổ chức đoàn doanh nghiệp khảo sát và hạ cánh dự án'
      ],
      cta: 'Tìm hiểu Thâm nhập Thị trường'
    },
    {
      id: 'ent-4',
      title: 'Hỗ trợ Doanh nghiệp Việt Nam Vươn ra Toàn cầu',
      tag: 'XUẤT HẢI QUỐC TẾ',
      description: 'Đồng hành cùng doanh nghiệp và thương hiệu Việt kết nối thị trường Trung Quốc và quốc tế qua bản địa hóa, tìm đối tác và thương mại xuyên biên giới.',
      bullets: [
        'Lộ trình thâm nhập thị trường Trung Quốc và pháp lý',
        'Kết nối nhà phân phối và đối tác mua hàng quốc tế',
        'Bản địa hóa thương hiệu cho người tiêu dùng Trung Quốc',
        'Kênh truyền thông số và marketing xuyên biên giới',
        'Hỗ trợ phát triển kinh doanh cho nhà sản xuất Việt Nam',
        'Hợp tác thương mại và giáo dục quốc tế'
      ],
      cta: 'Tìm hiểu Dịch vụ Xuất hải'
    },
    {
      id: 'ent-5',
      title: 'Đào tạo Đặt hàng & Phát triển Nhân tài Doanh nghiệp',
      tag: 'NGUỒN NHÂN LỰC CHẤT LƯỢNG',
      description: 'Chương trình phát triển nhân lực theo yêu cầu, gắn kết nhu cầu thực tế của doanh nghiệp với các trường đại học, đào tạo song ngữ và kỹ năng tương lai.',
      bullets: [
        'Nhân sự song ngữ Việt - Trung khối kỹ thuật và quản lý',
        'Giáo trình thiết kế riêng theo vị trí công việc doanh nghiệp',
        'Kỹ năng ứng dụng AI và vận hành kinh doanh số',
        'Lộ trình thực tập và tuyển dụng trực tiếp từ đại học',
        'Vườn ươm hợp tác giữa nhà trường và doanh nghiệp',
        'Chương trình đào tạo quản trị viên tập sự'
      ],
      cta: 'Tìm hiểu Phát triển Nhân lực'
    }
  ],
  zh: [
    {
      id: 'ent-1',
      title: 'AI 社媒代运营与数字营销',
      tag: 'AI 内容工厂',
      description: '为企业提供 AI 内容生产、社媒代运营、数字营销与本地化传播服务，帮助企业在 Facebook、微信公众号、小红书、视频号及本地社群中建立持续影响力。',
      bullets: [
        'AI 内容流水线：快速规模化生成高质量专业商业图文',
        '中越双边本地化社媒战略与目标人群触达策划',
        'Facebook、微信公众号、小红书、视频号全托管代运营',
        '中越双语母语级本地化文案设计与跨文化语境审校',
        '数据复盘、ROI 追踪与精准投放持续优化',
        '多平台一键排版与发布流程，企业审阅无缝协同'
      ],
      cta: '了解 AI 社媒代运营'
    },
    {
      id: 'ent-2',
      title: '企业培训与合规实战',
      tag: '驻越实操必修',
      description: '面向在越华资企业、跨国企业和本地企业，提供劳动法、税务合规、企业管理、AI 办公、数字营销、跨文化沟通等实战型培训。',
      bullets: [
        '越南劳动法深度剖析：用工合同、解约合规与工会管理',
        '越南税务合规与转让定价：避免潜在重罚与稽查风险',
        'AI 赋能企业全员：办公提效、智能报表与自动化工具',
        '中越团队跨文化管理融合：打破管理隔阂与沟通摩擦',
        'HR 选育留用实务体系与本地化组织骨干梯队搭建',
        '高管周末研修班、闭门研讨会与企业家游学参访'
      ],
      cta: '了解企业培训方案'
    },
    {
      id: 'ent-3',
      title: '跨国企业越南落地咨询',
      tag: '一站式落地',
      description: '为中国及海外企业进入越南市场提供从市场判断、公司设立、园区选址、合规路径、合作伙伴对接到本地运营的一站式落地支持。',
      bullets: [
        '宏观政策与行业准入调研，前期可行性实地考察论证',
        'FDI 外资企业设立、营业执照、各级审批手续全流程辅导',
        '工业园区选址比较、标准厂房租赁及土地购置谈判',
        '本地可靠合作伙伴、供应链配件厂商及分销网络引荐',
        '跨境资金合法进出架构、税务筹划及本地财务人事协同',
        '商务考察接待团组安排与交钥匙式实体项目落地'
      ],
      cta: '了解越南落地咨询'
    },
    {
      id: 'ent-4',
      title: '越南企业出海服务',
      tag: '跨境国际拓展',
      description: '帮助越南企业、教育机构和本地品牌进入中国及海外市场，提供市场进入咨询、合作伙伴对接、品牌本地化和跨境商务支持。',
      bullets: [
        '中国市场准入政策、监管标准与渠道落地路线图',
        '中国核心行业展会、大宗采购商与分销代理精准匹配',
        '品牌面向中国消费者的视觉与营销文案本地化重构',
        '跨境商务谈判、合约审核与国际贸易流程支持',
        '越南优质制造业与特色消费品出海全链条赋能',
        '中越跨国企业战略投资与教育项目联合孵化'
      ],
      cta: '了解企业出海服务'
    },
    {
      id: 'ent-5',
      title: '人才委培与校企合作',
      tag: '高薪定制人才',
      description: '结合企业岗位需求、院校资源和职业教育体系，为企业提供华语/越语复合型人才、AI 技能人才和跨境商务人才的定制培养方案。',
      bullets: [
        '精通中越双语+熟稔两国商业文化的管理与技术骨干',
        '企业定向订单班：根据用人标准定制高校专业教学方案',
        'AI 应用能力、数字营销与现代跨境贸易实战技能实训',
        '高校直聘通道：精准匹配实习生与应届生定向入职',
        '校企联合实验室与产业学院共建，享受政策红利',
        '中高层管理培训生（MT）全周期培养与胜任力跟踪'
      ],
      cta: '了解人才培养方案'
    }
  ]
};

// Business Line 2: VietBridge Study / AI Education Enablement Solutions (6 Core Product Modules)
export const educationSolutions: Record<Language, {
  id: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  cta: string;
}[]> = {
  en: [
    {
      id: 'edu-1',
      title: 'Blackboard / BB Learning Management & Online Teaching Platform',
      tag: 'BLACKBOARD LEARN · LMS & BLENDED LEARNING',
      description: 'VietBridge Study brings Blackboard / BB learning solutions to Vietnam schools and institutions. Blackboard / BB provides a comprehensive digital teaching and learning environment for universities, K12 schools, international schools and training institutions, supporting course management, blended learning, assignments, assessments, collaboration and learning analytics.',
      bullets: [
        'Course creation, structured curriculum design & digital content management',
        'Online teaching, synchronous virtual classrooms & blended learning workflows',
        'Assignments, online quizzes, grading workflows & structured assessments',
        'Teacher-student communication, discussion boards & collaborative learning',
        'Learning progress tracking, retention monitoring & learning analytics reports',
        'Multi-device & mobile learning support with localized implementation by VietBridge Study'
      ],
      cta: 'Inquire About Blackboard / BB'
    },
    {
      id: 'edu-2',
      title: 'Radica Smart Classroom Solution',
      tag: 'RADICA SMART CLASSROOM · INTERACTIVE & HYBRID',
      description: 'VietBridge Study offers Radica Smart Classroom solutions for future-ready schools. Radica Smart Classroom integrates interactive displays, classroom recording, remote teaching and teacher training to upgrade traditional classrooms into connected, data-informed learning spaces.',
      bullets: [
        'Interactive smart flat-panel displays & digital whiteboard teaching tools',
        'Classroom lecture recording, automated indexing & cloud lesson replay',
        'Multi-screen wireless presentation & interactive student content sharing',
        'Remote & hybrid classroom connectivity across multiple school campuses',
        'Integrated classroom teaching software & digital lesson management',
        'On-site teacher onboarding, operation workshops & localized technical support'
      ],
      cta: 'Explore Radica Smart Classroom'
    },
    {
      id: 'edu-3',
      title: 'STEM, AI & Robotics Learning Solutions',
      tag: 'STEM LEARNING · CODING, ROBOTICS & AI',
      description: 'VietBridge Study provides STEM, AI and robotics learning solutions. STEM Learning supports programming, robotics, IoT, AI foundation learning and project-based learning, combined with structured curricula, teacher training and competition pathways.',
      bullets: [
        'Progressive Scratch, Blockly & Python coding curricula across grade levels',
        'Hands-on robotics hardware kits & modular engineering maker sets',
        'IoT smart sensor kits & project-based learning (PBL) classroom modules',
        'Foundational AI literacy modules covering vision, speech & machine learning basics',
        'Complete bilingual curriculum packages, student workbooks & teacher lesson plans',
        'STEM teacher training workshops & youth robotics competition guidance'
      ],
      cta: 'Explore STEM & AI Solutions'
    },
    {
      id: 'edu-4',
      title: 'Intelligent Learning & Student Progress Systems',
      tag: 'LEARNING ANALYTICS & EARLY WARNING',
      description: 'AI-supported learning systems that help schools monitor student progress, identify learning risks, generate diagnostic reports and support personalized teaching interventions.',
      bullets: [
        'Continuous student learning progress & engagement tracking across terms',
        'Early-warning alerts for learning risks and knowledge gaps',
        'Automated learning diagnostic reports for students and classes',
        'Adaptive practice & targeted review recommendations',
        'Teacher intervention dashboards for data-informed instruction',
        'Parent-school learning milestone updates and progress reporting'
      ],
      cta: 'Explore Intelligent Learning'
    },
    {
      id: 'edu-5',
      title: 'Digital Campus & Academic Operations Support',
      tag: 'DIGITAL CAMPUS · ACADEMIC MANAGEMENT',
      description: 'Digital campus solutions supporting school operations, academic administration, teaching resource coordination and data-driven school management.',
      bullets: [
        'Student Information System (SIS) & academic profile management support',
        'Course scheduling, classroom resource allocation & attendance tracking',
        'Faculty teaching task coordination & instructional evaluation tools',
        'School-based digital teaching resource library & courseware repository',
        'Campus operational dashboards for school leadership decision-making',
        'Seamless workflow connection with LMS and smart classroom environments'
      ],
      cta: 'Explore Digital Campus'
    },
    {
      id: 'edu-6',
      title: 'Teacher Training, International Cooperation & Study in China',
      tag: 'TEACHER ENABLEMENT & CROSS-BORDER EDUCATION',
      description: 'Localized implementation by VietBridge Study including teacher digital capability training, China-Vietnam institutional cooperation, joint education programs, and Vietnamese student Chinese language training and study-in-China support.',
      bullets: [
        'Teacher digital pedagogy, LMS operation & smart classroom adoption training',
        'STEM & AI instructional methodology workshops for local school faculty',
        'China-Vietnam university, college & K12 school cooperation programs',
        'Joint curriculum development, faculty exchange & academic study tours',
        'Chinese language training & HSK preparation for Vietnamese students',
        'Study-in-China university application, scholarship & pre-departure guidance'
      ],
      cta: 'Explore Training & Cooperation'
    }
  ],
  vi: [
    {
      id: 'edu-1',
      title: 'Nền tảng Quản lý Học tập & Giảng dạy Trực tuyến Blackboard / BB',
      tag: 'BLACKBOARD LEARN · LMS & HỌC KẾT HỢP',
      description: 'VietBridge Study mang các giải pháp học tập Blackboard / BB đến các trường học và tổ chức giáo dục tại Việt Nam. Blackboard / BB hỗ trợ hệ thống LMS, dạy học trực tuyến, học tập kết hợp (blended learning), giao bài tập, kiểm tra đánh giá và phân tích dữ liệu học tập.',
      bullets: [
        'Thiết kế khóa học, quản lý học liệu số và xây dựng chương trình giảng dạy',
        'Hỗ trợ dạy học trực tuyến, lớp học ảo và mô hình học tập kết hợp (blended learning)',
        'Quản lý bài tập, kiểm tra trắc nghiệm trực tuyến và đánh giá kết quả học tập',
        'Tương tác giảng viên - sinh viên, diễn đàn thảo luận và học tập nhóm',
        'Theo dõi tiến độ học tập, mức độ chuyên cần và báo cáo phân tích học tập (learning analytics)',
        'Hỗ trợ học tập đa thiết bị kèm dịch vụ triển khai bản địa hóa bởi VietBridge Study'
      ],
      cta: 'Tìm hiểu Blackboard / BB'
    },
    {
      id: 'edu-2',
      title: 'Giải pháp Lớp học Thông minh Radica (Radica Smart Classroom)',
      tag: 'RADICA SMART CLASSROOM · TƯƠNG TÁC & KẾT NỐI',
      description: 'VietBridge Study cung cấp giải pháp Radica Smart Classroom cho các trường học hướng tới tương lai. Radica Smart Classroom tích hợp màn hình tương tác, ghi hình bài giảng, dạy học từ xa và đào tạo giáo viên.',
      bullets: [
        'Màn hình tương tác thông minh độ phân giải cao và bảng trắng kỹ thuật số',
        'Hệ thống ghi hình bài giảng, lưu trữ và phát lại tài nguyên học tập',
        'Chia sẻ màn hình không dây đa thiết bị và tương tác trực tiếp trên lớp',
        'Kết nối lớp học từ xa và giảng dạy đồng bộ giữa nhiều cơ sở trường học',
        'Phần mềm hỗ trợ giảng dạy trên lớp và công cụ quản lý đám mây',
        'Đào tạo hướng dẫn giáo viên vận hành và hỗ trợ kỹ thuật bản địa bởi VietBridge Study'
      ],
      cta: 'Tìm hiểu Radica Smart Classroom'
    },
    {
      id: 'edu-3',
      title: 'Giải pháp Giáo dục STEM, AI & Robotics (STEM Learning)',
      tag: 'STEM LEARNING · LẬP TRÌNH, ROBOTICS & AI',
      description: 'VietBridge Study cung cấp các giải pháp học tập STEM, AI và robotics. STEM Learning hỗ trợ lập trình, lắp ráp robot, IoT, kiến thức AI nền tảng và học tập qua dự án (project-based learning).',
      bullets: [
        'Chương trình lập trình phân cấp từ Scratch, Blockly đến Python',
        'Bộ học cụ lắp ráp robot và thực hành kỹ thuật sáng tạo theo cấp học',
        'Học tập qua dự án (PBL) với cảm biến thông minh và ứng dụng IoT',
        'Mô-đun kiến thức AI nền tảng và thực hành nhận diện hình ảnh, giọng nói',
        'Bộ khung giáo trình, tài liệu học sinh và giáo án hướng dẫn dành cho giáo viên',
        'Tập huấn giáo viên giảng dạy STEM và định hướng tham gia các cuộc thi robotics'
      ],
      cta: 'Tìm hiểu Giải pháp STEM & AI'
    },
    {
      id: 'edu-4',
      title: 'Hệ thống Học tập Thông minh & Theo dõi Tiến độ Học sinh',
      tag: 'PHÂN TÍCH HỌC TẬP & CẢNH BÁO SỚM',
      description: 'Hệ thống học tập hỗ trợ bởi AI giúp nhà trường theo dõi tiến độ của học sinh, nhận diện sớm rủi ro học tập, tạo báo cáo chẩn đoán và hỗ trợ giáo viên can thiệp cá nhân hóa.',
      bullets: [
        'Theo dõi liên tục tiến độ học tập và mức độ hoàn thành nhiệm vụ của học sinh',
        'Cảnh báo sớm nguy cơ hổng kiến thức hoặc giảm sút kết quả học tập',
        'Tự động tổng hợp báo cáo chẩn đoán năng lực học tập cá nhân và lớp học',
        'Đề xuất nội dung ôn tập và bài tập củng cố phù hợp từng học sinh',
        'Bảng điều khiển dành cho giáo viên để hỗ trợ phụ đạo kịp thời',
        'Cập nhật thông tin tiến độ học tập định kỳ giữa nhà trường và phụ huynh'
      ],
      cta: 'Tìm hiểu Học tập Thông minh'
    },
    {
      id: 'edu-5',
      title: 'Khuôn viên Số & Hệ thống Hỗ trợ Quản lý Học vụ',
      tag: 'DIGITAL CAMPUS · QUẢN LÝ TRƯỜNG HỌC SỐ',
      description: 'Giải pháp khuôn viên số và công cụ hỗ trợ quản lý học vụ giúp nhà trường tối ưu hóa công tác giáo vụ, điều phối tài nguyên, kết nối thông tin và vận hành dựa trên dữ liệu.',
      bullets: [
        'Hỗ trợ quản lý hồ sơ học sinh, sinh viên và thông tin học vụ tập trung',
        'Hỗ trợ sắp xếp thời khóa biểu, điều phối phòng học và quản lý chuyên cần',
        'Quản lý phân công giảng dạy và lưu trữ tài nguyên học liệu số của trường',
        'Kênh thông tin liên lạc thuận tiện giữa nhà trường, giáo viên và phụ huynh',
        'Bảng trực quan hóa dữ liệu vận hành phục vụ công tác quản lý nhà trường',
        'Kết nối đồng bộ với nền tảng LMS và hệ thống lớp học thông minh'
      ],
      cta: 'Tìm hiểu Khuôn viên Số'
    },
    {
      id: 'edu-6',
      title: 'Đào tạo Giáo viên, Hợp tác Giáo dục Quốc tế & Du học Trung Quốc',
      tag: 'ĐÀO TẠO GIÁO VIÊN & HỢP TÁC QUỐC TẾ',
      description: 'Triển khai bản địa hóa bởi VietBridge Study bao gồm tập huấn năng lực số cho giáo viên, hợp tác giữa các trường Việt Nam và quốc tế, đào tạo tiếng Trung và tư vấn du học Trung Quốc.',
      bullets: [
        'Đào tạo giáo viên ứng dụng nền tảng LMS, AI và thiết bị lớp học thông minh',
        'Hội thảo phương pháp giảng dạy STEM, AI và học tập kết hợp cho giảng viên',
        'Kết nối hợp tác chương trình và học thuật giữa các trường Việt Nam - Trung Quốc',
        'Phát triển chương trình đào tạo liên kết, trao đổi giảng viên và giao lưu sinh viên',
        'Đào tạo tiếng Trung và luyện thi HSK cho học sinh, sinh viên Việt Nam',
        'Tư vấn lộ trình du học Trung Quốc, hướng dẫn hồ sơ học bổng và định hướng trước khi bay'
      ],
      cta: 'Tìm hiểu Đào tạo & Hợp tác'
    }
  ],
  zh: [
    {
      id: 'edu-1',
      title: 'Blackboard / BB 在线教学与学习管理平台',
      tag: 'BLACKBOARD LEARN · 在线教学与 LMS 平台',
      description: 'VietBridge Study 面向越南学校与教育机构引入 Blackboard / BB 学习解决方案。Blackboard / BB 为高校、K12 学校、国际学校与培训机构提供完整的数字化教学与学习管理环境，支持 LMS 学习管理、在线教学、混合式学习、作业与测验评估、师生协作及学习数据分析。',
      bullets: [
        '课程建设与教学内容管理：支持多格式课件、教学大纲与数字资源集中管理',
        '在线教学与混合式学习：灵活支撑线上直播、录播自学与线下课堂融合教学',
        '作业布置、在线测验与评估：全流程管理作业提交、题库测验与成绩评定',
        '师生沟通与协作学习：内置课程通知、讨论区、小组协作与互动答疑机制',
        '学习进度追踪与数据分析：可视化呈现学生出勤、参与度与学业表现分析报告',
        '多终端学习体验与本地化支持：支持移动端与桌面端访问，由 VietBridge Study 提供本地化实施与培训支持'
      ],
      cta: '咨询 Blackboard / BB 方案'
    },
    {
      id: 'edu-2',
      title: 'Radica Smart Classroom 智慧课堂一体化方案',
      tag: 'RADICA SMART CLASSROOM · 智慧课堂方案',
      description: 'VietBridge Study 面向未来学校提供 Radica Smart Classroom 智慧课堂方案。Radica Smart Classroom 融合交互式教学大屏、课堂录播、内容共享、远程互动教学与教师培训支持，将传统教室升级为互动化、连接化、可记录的现代智慧教学空间。',
      bullets: [
        '交互式教学大屏与数字白板：高清触控书写、多媒体课件展示与课堂实时批注',
        '课堂录制、回放与资源沉淀：一键录制常态化课堂教学，便于学生课后复习与教研复盘',
        '多屏互动与无线内容共享：支持教师与学生多终端无线投屏、分组展示与互动答题',
        '远程互动课堂与跨校区教学：连接不同教室或校区，开展同步远程授课与教研观摩',
        '配套课堂教学软件与云端工具：提供备课、授课互动、板书保存与教学内容分发工具',
        '教师上手培训与课堂应用辅导：由 VietBridge Study 提供设备部署协调、教师培训与教学落地支持'
      ],
      cta: '了解 Radica 智慧课堂方案'
    },
    {
      id: 'edu-3',
      title: 'STEM、AI 与机器人教育方案',
      tag: 'STEM LEARNING · 编程、机器人与 AI 课程',
      description: 'VietBridge Study 提供 STEM、AI 与机器人教育解决方案。STEM Learning 支持编程教育、机器人套件、IoT 物联网项目、AI 基础启蒙与项目式学习（PBL），并配套标准化课程体系、教师培训与竞赛实践通道。',
      bullets: [
        'Scratch、Blockly 与 Python 分级编程课程：适配不同年龄段学生的阶梯式编程学习',
        '机器人与硬件创客教学套件：提供动手拼搭、传感器控制与工程实践教学器材',
        'IoT 物联网与智能硬件项目式学习：通过真实生活场景项目培养跨学科解决问题能力',
        'AI 启蒙认知与实践教学模块：涵盖图像识别、语音交互与人工智能基础概念体验',
        '标准化课程包、教材与教师教案：配套完整课时规划、演示课件与实验指导手册',
        'STEM 师资培训与竞赛实践指导：帮助学校培养自有 STEM 教师团队并开展科技社团与竞赛活动'
      ],
      cta: '了解 STEM 与 AI 教育方案'
    },
    {
      id: 'edu-4',
      title: '智能学习与学情追踪系统',
      tag: 'INTELLIGENT LEARNING · 学情分析与预警',
      description: '基于数据与 AI 辅助的智能学习系统，帮助学校持续追踪学生学习进度、识别知识薄弱点与学习风险、自动生成学情报告，并辅助教师开展个性化教学干预。',
      bullets: [
        '学生日常学习进度与完成度追踪：持续记录课程学习、作业与测验表现',
        '学情风险预警与薄弱点识别：及时发现学习滞后或理解困难的学生与章节',
        '自动化学习诊断报告生成：生成个人与班级维度的阶段性学情分析简报',
        '个性化练习推荐与复习巩固：围绕薄弱知识点提供针对性强化练习支持',
        '教师端学情看板与精准辅导：帮助教师基于真实学情数据调整教学节奏',
        '家校学情反馈与阶段性成长记录：让学校与家长清晰掌握学生阶段性学习进展'
      ],
      cta: '了解智能学习系统'
    },
    {
      id: 'edu-5',
      title: '数字校园与校园管理辅助系统',
      tag: 'DIGITAL CAMPUS · 教务管理与数字校园',
      description: '面向学校日常教务管理、资源协同、校园沟通与教学运营的数字校园辅助系统，帮助学校提升教务执行效率与数字化管理水平。',
      bullets: [
        '教务管理与排课选课协同支持：辅助学校高效组织课表安排、选课与学业记录',
        '数字化校本教学资源库建设：沉淀并分类管理学校自有课件、题库与教学视频',
        '教师教学任务与教室资源统筹：优化教室、实验室及教学设备的使用调度',
        '家校沟通与校园通知信息协同：提供规范、便捷的学校通知与家校互动渠道',
        '校园教学与运营数据可视化看板：为学校管理层提供清晰的日常教学运行概览',
        '与 LMS 及智慧课堂系统协同衔接：打通在线教学平台与日常教务管理流程'
      ],
      cta: '了解数字校园系统'
    },
    {
      id: 'edu-6',
      title: '教师培训、国际教育合作与赴华留学支持',
      tag: 'TEACHER TRAINING & INTERNATIONAL COOPERATION',
      description: '由 VietBridge Study 提供从教师数字化教学实训、中越及海外院校教育合作，到越南学生中文培训与赴华留学规划的综合落地支持。',
      bullets: [
        '教师数字化教学与 LMS 应用实训：帮助教师熟练掌握 Blackboard / BB 及混合式教学方法',
        '智慧课堂与 STEM 教学法工作坊：面向学校教师开展常态化软硬件操作与项目式教学培训',
        '中越及海外院校教育合作：推动课程共建、联合培养、师资互访与校际学术交流',
        '产教融合与校企协同育人：结合企业用人需求与院校教学资源开展定向人才培养',
        '越南学生中文培训与 HSK 备考：提供系统化中文语言课程与 HSK 等级考试辅导',
        '赴华留学规划与奖学金申请指导：支持中国高校院校申请、材料准备与行前文化适应培训'
      ],
      cta: '了解教师培训与院校合作'
    }
  ]
};

// Representative Cases & Featured Projects (5 Core Cases)
export interface CaseStudyItem {
  id: string;
  category: string;
  categoryBadge: string;
  categoryKey?: 'enterprise' | 'education';
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  bullets: string[];
  context: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  strategicValue: string;
  relatedServices: string[];
  cta: string;
  metric?: string;
  label?: string;
  description?: string;
  detailStory?: string;
  keyOutcomes?: string[];
}

export type CaseStudy = CaseStudyItem;

export const representativeCases: Record<Language, CaseStudyItem[]> = {
  en: [
    {
      id: 'case-uef',
      category: 'Corporate Training / Enterprise Enablement',
      categoryBadge: 'EXECUTIVE SEMINAR',
      title: 'UEF × VietBridge Corporate Training Program',
      subtitle: 'Corporate Training Program for Chinese Enterprises in Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge worked with UEF-related academic and professional resources to design a weekend executive seminar for Chinese enterprises operating in Vietnam, addressing tax compliance, labor law, and localized management.',
      bullets: [
        'Audience: Chinese business owners, executives and HR leaders in Vietnam',
        'Format: Weekend executive seminar in Ho Chi Minh City',
        'Topics: Tax, labor law, compliance, management and cross-cultural communication',
        'Value: Connecting university resources, professional experts and real enterprise pain points'
      ],
      context: 'Chinese enterprises operating in Vietnam face increasingly complex management issues, including compliance, labor relations, tax rules, cross-cultural communication and localized team building.',
      challenge: 'Many enterprises receive fragmented information from agents, service vendors or informal networks, but lack a structured executive learning program that connects university resources, practical experts and real enterprise pain points.',
      solution: 'VietBridge designed a weekend executive training program in cooperation with UEF-related academic and professional resources, targeting Chinese business owners, HR leaders and management teams in Ho Chi Minh City and surrounding areas.',
      deliverables: [
        'Curated executive seminar curriculum covering tax, law, HR & cross-cultural leadership',
        'Direct panel with accredited Vietnamese legal and fiscal practitioners',
        'Bilingual executive briefing dossiers and compliance case study playbooks',
        'Tailored enterprise intake and offline invitation network'
      ],
      strategicValue: 'This project demonstrates VietBridge’s ability to connect universities, professional experts and enterprise communities, transforming scattered business pain points into structured, high-value training products.',
      relatedServices: ['Corporate Training', 'Vietnam Business Compliance', 'Enterprise Community Development', 'China-Vietnam Education Cooperation'],
      cta: 'Explore Corporate Training'
    },
    {
      id: 'case-ai-social',
      category: 'AI Social Media Operations / Enterprise Enablement',
      categoryBadge: 'AI CONTENT OPS',
      title: 'AI-Powered Social Media Operations for Vietnam Business Content',
      subtitle: 'AI Content Operations for Vietnam Business and Policy Insights',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge is developing an AI-assisted content operation model focused on Vietnam business, policy, compliance and market-entry insights, establishing a reproducible client-side marketing engine.',
      bullets: [
        'AI-assisted topic research and policy fact-checking',
        'Long-form business articles and viral social content',
        'Visual information cards and short video scripts',
        'Multi-platform publishing workflow (WeChat, Xiaohongshu, Facebook)',
        'Data review, conversion tracking and continuous content optimization',
        'Proven architecture ready for enterprise client-side social media deployment'
      ],
      context: 'Companies in Vietnam often struggle to create consistent, high-credibility content that resonates across both Chinese and Vietnamese business stakeholders simultaneously.',
      challenge: 'Traditional agency models are slow, expensive, and lack both deep regulatory understanding and modern generative AI content speed.',
      solution: 'VietBridge established an end-to-end AI content factory integrating LLMs for policy translation, market research, infographic styling, and automated social publishing workflows.',
      deliverables: [
        'Multi-platform editorial matrix covering regulatory shifts and FDI opportunities',
        'AI prompt templates tuned specifically for Vietnam commercial legal frameworks',
        'Automated bilingual visual card generator for executive takeaways',
        'Enterprise-ready client delegation playbooks for marketing handoff'
      ],
      strategicValue: 'Bridges the gap between technical AI tooling and practical cross-border business communication, delivering 4x content output at a fraction of traditional agency overhead.',
      relatedServices: ['AI Social Media Operations', 'Digital Marketing Strategy', 'Bilingual Content Creation', 'Brand Localization'],
      cta: 'Explore AI Social Media'
    },
    {
      id: 'case-edu-localize',
      category: 'VietBridge Study / AI Education Enablement',
      categoryBadge: 'BLACKBOARD / BB & LMS PORTFOLIO',
      categoryKey: 'education',
      title: 'VietBridge Study: Blackboard / BB & AI Learning Platform Localization for Vietnam',
      subtitle: 'Bringing Blackboard / BB Learning Solutions & Digital Teaching Systems to Vietnam Schools',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study brings Blackboard / BB learning solutions and AI-assisted teaching systems to Vietnam schools and institutions, combining LMS deployment, blended learning workflows, learning analytics and localized teacher training.',
      bullets: [
        'Blackboard / BB LMS and online teaching solution introduction for Vietnam market',
        'Course management, blended learning, assignments, assessments and learning analytics',
        'Localized user guidance and pedagogical workflow adaptation for Vietnamese educators',
        'Hands-on teacher training and classroom adoption support by VietBridge Study',
        'Integration with institutional academic management and smart classroom environments'
      ],
      context: 'Universities, international schools and K12 institutions in Vietnam are upgrading their digital teaching infrastructure, requiring proven LMS platforms alongside practical local onboarding and faculty training.',
      challenge: 'Schools adopting international learning management platforms often face adoption barriers when software is deployed without localized implementation, teacher training and instructional workflow design.',
      solution: 'Through its education technology product portfolio and solution partner ecosystem, VietBridge Study delivers localized implementation, bilingual documentation, faculty workshops and ongoing operational support for Blackboard / BB and intelligent learning tools.',
      deliverables: [
        'Blackboard / BB learning management and blended teaching solution architecture',
        'Localized teacher training workshops on digital course design and online assessment',
        'Learning progress tracking and analytics reporting workflow configuration',
        'Ongoing localized implementation and operational support by VietBridge Study'
      ],
      strategicValue: 'Helps Vietnamese schools move from standalone software procurement to sustainable blended teaching and data-informed academic management.',
      relatedServices: ['Blackboard / BB Learning Platform', 'Intelligent Learning Systems', 'Teacher Digital Training', 'Localized Implementation by VietBridge Study'],
      cta: 'Explore VietBridge Study'
    },
    {
      id: 'case-smart-stem',
      category: 'VietBridge Study / Smart Classroom & STEM',
      categoryBadge: 'RADICA & STEM PORTFOLIO',
      categoryKey: 'education',
      title: 'VietBridge Study: Radica Smart Classroom & STEM Learning Solution Portfolio',
      subtitle: 'Radica Smart Classroom and STEM, AI & Robotics Solutions for Future-ready Schools',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study offers Radica Smart Classroom solutions and STEM, AI and robotics learning programs for future-ready schools in Vietnam, integrating interactive displays, lecture recording, remote teaching, coding/robotics kits and teacher training.',
      bullets: [
        'Radica Smart Classroom interactive displays, classroom recording and remote teaching',
        'Multi-screen collaboration and cloud-connected classroom teaching software',
        'STEM Learning solutions covering Scratch, Blockly, Python, robotics and IoT projects',
        'Foundational AI learning modules and project-based learning (PBL) curricula',
        'Localized teacher onboarding, instructional workshops and pilot classroom support'
      ],
      context: 'Forward-looking schools in Vietnam seek to modernize traditional classrooms and introduce practical STEM, AI and robotics curricula that engage students in hands-on innovation.',
      challenge: 'Purchasing classroom hardware or robotics kits in isolation often leaves schools without cohesive lesson plans, trained teachers or sustainable classroom operation routines.',
      solution: 'VietBridge Study combines Radica Smart Classroom solutions with structured STEM Learning packages, providing schools with integrated hardware-software setups, project-based curricula and localized teacher training.',
      deliverables: [
        'Radica Smart Classroom solution design (interactive displays, recording & hybrid teaching)',
        'STEM, AI and robotics learning kits with structured courseware and lesson plans',
        'Teacher onboarding and project-based learning instructional training workshops',
        'Pilot classroom implementation and youth robotics competition guidance'
      ],
      strategicValue: 'Provides a practical, integrated education technology solution portfolio available for the Vietnam market, supported by localized implementation by VietBridge Study.',
      relatedServices: ['Radica Smart Classroom', 'STEM, AI & Robotics Learning', 'Teacher Training Workshops', 'Pilot Classroom Deployment'],
      cta: 'Explore Smart Classroom & STEM'
    },
    {
      id: 'case-resource-base',
      category: 'Market Entry / Business Development',
      categoryBadge: 'ENTERPRISE INTEL',
      title: 'China-Vietnam Enterprise Resource Development',
      subtitle: 'Building a Verified Enterprise Resource Base for China-Vietnam Business Services',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: 'To support market entry, training promotion and enterprise services, VietBridge is building structured enterprise resource data covering Chinese-invested companies, industrial parks, and business networks in Southern Vietnam.',
      bullets: [
        'Chinese-invested enterprise mapping across Ho Chi Minh City, Binh Duong & Dong Nai',
        'Industrial park and high-tech park resource registry',
        'Enterprise outreach and customized training demand discovery',
        'Verified local partner, legal and accounting service network',
        'Foundation for next-generation CRM and AI sales enablement'
      ],
      context: 'Companies establishing operations in Southern Vietnam frequently face high search friction when trying to identify trustworthy local vendors, suppliers, and peer networks.',
      challenge: 'Unstructured directory information is often outdated, prone to middlemen markups, and unverified regarding licensing compliance.',
      solution: 'VietBridge actively investigates, categorizes, and validates manufacturing facilities, industrial park tenancy, and commercial stakeholders across Southern Vietnam’s premier corridors.',
      deliverables: [
        'Structured database of operating Chinese & international enterprises in Vietnam',
        'Comparative industrial park matrix covering infrastructure, lease rates and tax breaks',
        'Direct relationship network with commercial chambers and enterprise boards',
        'Intelligent matching workflow for inbound trade and supply chain delegations'
      ],
      strategicValue: 'Provides the factual and relational bedrock upon which VietBridge’s training, consulting, and digital services are deployed with unparalleled speed and trust.',
      relatedServices: ['Vietnam Market Entry', 'Industrial Park Selection', 'B2B Partner Matching', 'Business Delegations'],
      cta: 'Explore Market Entry Services'
    }
  ],
  vi: [
    {
      id: 'case-uef',
      category: 'Đào tạo Doanh nghiệp / Khai phóng Doanh nghiệp',
      categoryBadge: 'HỘI THẢO CAO CẤP',
      title: 'Chương trình Đào tạo Doanh nghiệp Hợp tác cùng UEF',
      subtitle: 'Hội thảo Quản trị Thực chiến cho Doanh nghiệp Hoa kiều & Quốc tế tại Việt Nam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge kết hợp cùng nguồn lực học thuật UEF tổ chức hội thảo quản trị chuyên sâu cuối tuần dành cho chủ doanh nghiệp và lãnh đạo cấp cao, giải quyết triệt để bài toán thuế, lao động và văn hóa.',
      bullets: [
        'Đối tượng: Chủ doanh nghiệp, lãnh đạo cấp cao và giám đốc nhân sự tại Việt Nam',
        'Hình thức: Hội thảo chuyên đề điều hành thực chiến cuối tuần tại TP. Hồ Chí Minh',
        'Chủ đề: Thuế, luật lao động, tuân thủ, quản trị và giao tiếp xuyên văn hóa',
        'Giá trị: Kết nối nguồn lực đại học, chuyên gia thực chiến và nhu cầu doanh nghiệp'
      ],
      context: 'Các doanh nghiệp có vốn đầu tư nước ngoài tại Việt Nam đối mặt với các vấn đề quản lý ngày càng phức tạp: từ luật lao động, thuế, tuân thủ đến quản trị nhân sự bản địa.',
      challenge: 'Thông tin trên thị trường thường rời rạc, thiếu một chương trình đào tạo quản trị bài bản kết hợp giữa học thuật và các chuyên gia tư vấn thực chiến.',
      solution: 'VietBridge cùng đối tác thiết kế khóa đào tạo thực chiến cuối tuần, quy tụ các luật sư và chuyên gia thuế hàng đầu để tháo gỡ trực tiếp các khúc mắc cho doanh nghiệp.',
      deliverables: [
        'Khung chương trình hội thảo chuyên đề quản trị thực tế',
        'Tài liệu cẩm nang tuân thủ pháp lý và thuế song ngữ',
        'Tọa đàm trực tiếp cùng các chuyên gia hàng đầu',
        'Mạng lưới kết nối giao lưu giữa các chủ doanh nghiệp'
      ],
      strategicValue: 'Khẳng định năng lực của VietBridge trong việc kết nối đại học, chuyên gia và cộng đồng doanh nghiệp, biến các bài toán hóc búa thành giải pháp đào tạo thiết thực.',
      relatedServices: ['Đào tạo Doanh nghiệp', 'Tuân thủ Pháp lý', 'Kết nối Cộng đồng Doanh nghiệp', 'Hợp tác Giáo dục'],
      cta: 'Tìm hiểu Đào tạo Doanh nghiệp'
    },
    {
      id: 'case-ai-social',
      category: 'Vận hành Mạng xã hội AI / Khai phóng Doanh nghiệp',
      categoryBadge: 'NỘI DUNG SỐ AI',
      title: 'Vận hành Nội dung Số Bằng AI cho Thị trường Kinh doanh Việt Nam',
      subtitle: 'Ma trận Nội dung Thông tin Kinh tế & Pháp lý Việt Nam',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge xây dựng quy trình sản xuất nội dung số hỗ trợ bằng AI về chính sách, kinh doanh và đầu tư tại Việt Nam, sẵn sàng nhân rộng cho các khách hàng doanh nghiệp.',
      bullets: [
        'Nghiên cứu đề tài và kiểm chứng số liệu bằng AI',
        'Sản xuất bài viết chuyên sâu và nội dung mạng xã hội ngắn',
        'Thiết kế infographic thông tin và kịch bản video',
        'Quy trình xuất bản đa kênh (WeChat, Facebook, Xiaohongshu)',
        'Đo lường dữ liệu, tối ưu hóa lượt tương tác và chuyển đổi',
        'Có thể chuyển giao trực tiếp thành dịch vụ代运营 cho doanh nghiệp'
      ],
      context: 'Doanh nghiệp tại Việt Nam thường thiếu nhân sự chuyên môn để sản xuất nội dung số chất lượng cao, vừa am hiểu luật lệ vừa bắt kịp xu hướng người dùng.',
      challenge: 'Thuê agency truyền thống chi phí cao, tốc độ chậm và thiếu kiến thức sâu về thương mại song phương.',
      solution: 'VietBridge ứng dụng AI để xây dựng xưởng sản xuất nội dung số thông minh, tối ưu hóa từ khâu nghiên cứu chính sách đến thiết kế hình ảnh và xuất bản tự động.',
      deliverables: [
        'Hệ thống bài viết phân tích cơ hội đầu tư và quy định pháp lý',
        'Bộ prompt AI chuyên dụng cho ngành kinh doanh tại Việt Nam',
        'Thiết kế thẻ thông tin trực quan cho lãnh đạo doanh nghiệp',
        'Quy trình bàn giao và vận hành dịch vụ代运营 trọn gói'
      ],
      strategicValue: 'Giảm 70% thời gian sản xuất nội dung nhưng vẫn đảm bảo độ chuẩn xác và tính chuyên nghiệp cao của một đơn vị tư vấn hàng đầu.',
      relatedServices: ['Vận hành Mạng xã hội AI', 'Tiếp thị Kỹ thuật số', 'Sáng tạo Nội dung Song ngữ', 'Bản địa hóa Thương hiệu'],
      cta: 'Tìm hiểu Vận hành Mạng xã hội AI'
    },
    {
      id: 'case-edu-localize',
      category: 'VietBridge Study / Khai phóng Giáo dục',
      categoryBadge: 'BLACKBOARD / BB & LMS',
      categoryKey: 'education',
      title: 'VietBridge Study: Triển khai Bản địa hóa Nền tảng Học tập Blackboard / BB tại Việt Nam',
      subtitle: 'Đưa Giải pháp Học tập Blackboard / BB & Hệ thống Giảng dạy Số vào Trường học Việt',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study mang các giải pháp học tập Blackboard / BB và hệ thống dạy học hỗ trợ bởi AI đến các trường học và tổ chức giáo dục tại Việt Nam, kết hợp triển khai LMS, học tập kết hợp, phân tích học tập và đào tạo giáo viên bản địa hóa.',
      bullets: [
        'Giới thiệu giải pháp LMS và dạy học trực tuyến Blackboard / BB cho thị trường Việt Nam',
        'Hỗ trợ quản lý khóa học, học kết hợp (blended learning), bài tập, kiểm tra và phân tích học tập',
        'Thích ứng quy trình sư phạm và tài liệu hướng dẫn phù hợp với giảng viên tại Việt Nam',
        'Tập huấn giáo viên thực hành và hỗ trợ áp dụng vào lớp học bởi VietBridge Study',
        'Kết nối đồng bộ với hệ thống quản lý học vụ và môi trường lớp học thông minh'
      ],
      context: 'Các trường đại học, trường quốc tế và trường phổ thông tại Việt Nam đang đẩy mạnh nâng cấp hạ tầng dạy học số, đòi hỏi nền tảng LMS uy tín đi kèm dịch vụ đào tạo và hỗ trợ triển khai tại chỗ.',
      challenge: 'Việc chỉ mua bản quyền phần mềm mà thiếu đội ngũ hướng dẫn sư phạm, bản địa hóa quy trình và hỗ trợ kỹ thuật tại chỗ khiến nhiều trường gặp khó khăn khi đưa hệ thống vào vận hành thực tế.',
      solution: 'Thông qua danh mục sản phẩm công nghệ giáo dục và hệ sinh thái đối tác giải pháp, VietBridge Study cung cấp dịch vụ triển khai bản địa hóa, tài liệu hướng dẫn, tập huấn giảng viên và đồng hành vận hành cho nền tảng Blackboard / BB.',
      deliverables: [
        'Thiết kế mô hình triển khai hệ thống LMS và dạy học kết hợp với Blackboard / BB',
        'Khóa tập huấn giảng viên về thiết kế bài giảng số và kiểm tra đánh giá trực tuyến',
        'Thiết lập quy trình theo dõi tiến độ học tập và báo cáo phân tích dữ liệu học tập',
        'Hỗ trợ kỹ thuật và đồng hành triển khai bản địa hóa bởi VietBridge Study'
      ],
      strategicValue: 'Giúp nhà trường chuyển đổi từ việc mua sắm phần mềm đơn lẻ sang vận hành hệ thống dạy và học số bền vững, hiệu quả trong thực tế.',
      relatedServices: ['Nền tảng Blackboard / BB', 'Hệ thống Học tập Thông minh', 'Đào tạo Giáo viên Số', 'Triển khai bởi VietBridge Study'],
      cta: 'Khám phá VietBridge Study'
    },
    {
      id: 'case-smart-stem',
      category: 'VietBridge Study / Lớp học Thông minh & STEM',
      categoryBadge: 'RADICA & STEM LEARNING',
      categoryKey: 'education',
      title: 'VietBridge Study: Tổ hợp Giải pháp Lớp học Thông minh Radica & Giáo dục STEM',
      subtitle: 'Giải pháp Radica Smart Classroom và Chương trình STEM, AI & Robotics cho Trường học Tương lai',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study cung cấp giải pháp Radica Smart Classroom cùng chương trình học tập STEM, AI và robotics cho các trường học tại Việt Nam, tích hợp màn hình tương tác, ghi hình bài giảng, dạy học từ xa, bộ học cụ lập trình robot và đào tạo giáo viên.',
      bullets: [
        'Giải pháp Radica Smart Classroom tích hợp màn hình tương tác, ghi hình lớp học và dạy học từ xa',
        'Chia sẻ nội dung đa màn hình và phần mềm hỗ trợ giảng dạy kết nối đám mây',
        'Giải pháp STEM Learning hỗ trợ lập trình Scratch, Blockly, Python, robotics và dự án IoT',
        'Mô-đun kiến thức AI nền tảng và chương trình học tập qua dự án (Project-based Learning)',
        'Đào tạo giáo viên vận hành và hỗ trợ triển khai lớp học mẫu bởi VietBridge Study'
      ],
      context: 'Các trường học định hướng hiện đại hóa tại Việt Nam có nhu cầu nâng cấp không gian lớp học truyền thống và đưa chương trình STEM, AI, robotics thực hành vào giảng dạy.',
      challenge: 'Mua sắm thiết bị màn hình hoặc bộ lắp ráp robot riêng lẻ mà không có giáo trình đồng bộ và tập huấn giáo viên thường dẫn đến hiệu quả sử dụng thấp.',
      solution: 'VietBridge Study kết hợp giải pháp Radica Smart Classroom với gói chương trình STEM Learning, mang đến mô hình tích hợp từ thiết bị, phần mềm, giáo trình dự án đến đào tạo giáo viên tại trường.',
      deliverables: [
        'Tư vấn và triển khai giải pháp không gian lớp học thông minh Radica Smart Classroom',
        'Bộ học cụ STEM, AI và robotics kèm khung chương trình và giáo án giảng dạy',
        'Chương trình tập huấn giáo viên về vận hành lớp học thông minh và phương pháp dạy học dự án',
        'Hỗ trợ triển khai lớp học thí điểm và định hướng hoạt động câu lạc bộ, thi đấu robotics'
      ],
      strategicValue: 'Mang đến danh mục giải pháp công nghệ giáo dục đồng bộ, sẵn sàng triển khai cho thị trường Việt Nam với sự hỗ trợ bản địa hóa từ VietBridge Study.',
      relatedServices: ['Radica Smart Classroom', 'Giáo dục STEM, AI & Robotics', 'Đào tạo Giáo viên', 'Triển khai Lớp học Mẫu'],
      cta: 'Tìm hiểu Lớp học Thông minh & STEM'
    },
    {
      id: 'case-resource-base',
      category: 'Thâm nhập Thị trường / Phát triển Kinh doanh',
      categoryBadge: 'DỮ LIỆU DOANH NGHIỆP',
      title: 'Xây dựng Cơ sở Dữ liệu Tài nguyên Doanh nghiệp Trung - Việt',
      subtitle: 'Hệ thống Dữ liệu Doanh nghiệp Thực chứng Phục vụ Dịch vụ Xuyên biên giới',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: 'Để phục vụ hoạt động thâm nhập thị trường và đào tạo, VietBridge đang xây dựng cơ sở dữ liệu doanh nghiệp FDI, khu công nghiệp và đối tác uy tín tại miền Nam Việt Nam.',
      bullets: [
        'Thống kê và khảo sát doanh nghiệp FDI tại TP.HCM, Bình Dương, Đồng Nai',
        'Cơ sở dữ liệu chi tiết các khu công nghiệp và khu công nghệ cao',
        'Kênh tiếp cận doanh nghiệp và khảo sát nhu cầu đào tạo nhân lực',
        'Mạng lưới đối tác pháp lý, kế toán và dịch vụ bản địa đã xác minh',
        'Nền tảng cho hệ thống CRM và bán hàng thông minh bằng AI'
      ],
      context: 'Doanh nghiệp mới vào Việt Nam thường mất nhiều tháng để tìm kiếm nhà cung cấp, đối tác gia công và đối tác pháp lý đáng tin cậy.',
      challenge: 'Thông tin trên mạng thường không chính xác, qua nhiều tầng môi giới trung gian và thiếu sự bảo đảm về tính hợp pháp.',
      solution: 'VietBridge trực tiếp khảo sát thực địa, phân loại và số hóa dữ liệu doanh nghiệp sản xuất và dịch vụ trên các hành lang kinh tế trọng điểm.',
      deliverables: [
        'Bản đồ dữ liệu doanh nghiệp FDI đang hoạt động thực tế',
        'Bảng so sánh chi tiết hạ tầng, giá thuê và chính sách ưu đãi các khu công nghiệp',
        'Mạng lưới kết nối trực tiếp với các hiệp hội doanh nghiệp và ban quản lý',
        'Hệ thống kết nối B2B chính xác theo ngành nghề'
      ],
      strategicValue: 'Tạo nền tảng vững chắc giúp các dịch vụ tư vấn, đào tạo và kết nối thương mại của VietBridge triển khai với tốc độ nhanh và độ tin cậy tuyệt đối.',
      relatedServices: ['Tư vấn Thâm nhập Thị trường', 'Lựa chọn Khu công nghiệp', 'Kết nối B2B', 'Tổ chức Đoàn Doanh nghiệp'],
      cta: 'Tìm hiểu Dịch vụ Thâm nhập'
    }
  ],
  zh: [
    {
      id: 'case-uef',
      category: '企业培训 / 企业赋能',
      categoryBadge: '高管实战研修',
      title: 'UEF 合作项目：驻越华资企业高级管理实务研讨会',
      subtitle: 'Corporate Training Program for Chinese Enterprises in Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: '越桥集团与胡志明市 UEF 相关院校及专业资源合作，策划面向驻越华资企业老板、管理层与 HR 负责人的周末企业研讨会，聚焦税务合规、劳动法、跨文化沟通和越南本地化经营等企业真实痛点。',
      bullets: [
        '面向在越华资企业老板、高管与 HR 负责人',
        '形式：胡志明市周末高级管理实务研讨会',
        '主题：税务、劳动法、合规、管理与跨文化沟通',
        '价值：连接高校资源、专家资源与企业真实需求'
      ],
      context: '在越投资兴业的华资及跨国企业，正面临日益复杂的经营与监管环境，涵盖劳动用工合规、税务稽查风险、中越员工跨文化管理及本土管理骨干培养等核心痛点。',
      challenge: '多数企业以往依赖零散中介、同行非正式打听，信息碎片且易踩坑，普遍缺乏能同时整合权威高校声誉、实战派本土合规专家与企业实际经营场景的高管研修体系。',
      solution: '越桥集团联合胡志明市经济金融大学（UEF）等院校学术与专业合规导师，策划推出针对华资企业核心决策层的周末高管实务研讨闭门班。',
      deliverables: [
        '针对在越企业常见雷区定制的“劳动法+税务+跨文化管理”三大课程模块',
        '邀请越南资深劳资律师、税务合规师现场闭门答疑与案例拆解',
        '输出中越双语实战合规手册与实用管理模板包',
        '建立长期互助的高价值在越华商高管社群网络'
      ],
      strategicValue: '充分验证了越桥集团打通高等院校资源、本土法务财税顶尖专家与企业真实痛点的资源整合与产品化能力，将零散咨询升级为体系化交付。',
      relatedServices: ['企业培训', '越南本地合规咨询', '跨文化管理工作坊', '中越院校校企合作'],
      cta: '了解企业培训方案'
    },
    {
      id: 'case-ai-social',
      category: 'AI 社媒代运营 / 企业赋能',
      categoryBadge: 'AI 营销矩阵',
      title: 'AI 社媒运营实践：《驻越经营实录》内容矩阵',
      subtitle: 'AI Content Operations for Vietnam Business and Policy Insights',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: '越桥集团正在建设以越南政策、企业经营、合规实务和市场进入为核心的 AI 内容运营体系，覆盖长图文、短内容、视频脚本、信息图、微信公众号、小红书、视频号、Facebook 等多平台内容生产与发布流程。',
      bullets: [
        'AI 辅助选题研究、政策法规梳理与事实核查',
        '深度长图文与高传播社媒内容流水线生成',
        '高管可视化信息图谱卡片与短视频分镜脚本设计',
        '微信公众号、小红书、视频号、Facebook 多平台分发流程',
        '数据复盘、线索留存与内容持续调优机制',
        '沉淀标准化代运营 SOP，可直接复制赋能客户品牌'
      ],
      context: '出海越南的企业普遍缺乏既懂越南本地市场、政策法规，又具备高水准中文与越文内容创作及新媒体运营能力的专业团队。',
      challenge: '传统外包代运营公司成本高昂、交付周期长，且对越南产业政策和中资商业诉求理解肤浅，产出内容空洞泛化。',
      solution: '越桥团队搭建“AI+领域专家审校”的智能内容工厂，将大模型引入选题搜集、政策法规多语言提炼、图文排版生成与多平台发布流。',
      deliverables: [
        '以《驻越经营实录》为标杆的专业中越商业洞察矩阵',
        '针对越南企业服务领域调优的专属 AI 写作与设计 Prompt 资产',
        '适合移动端高管快速阅读的高信息密度可视化信息卡片',
        '可对外赋能的企业社媒代运营全流程标准交付作业规范'
      ],
      strategicValue: '用技术重构传统内容运营成本结构，内容产能提升 4 倍以上，建立了中越跨境商业服务领域的权威认知与高粘性企业线索池。',
      relatedServices: ['AI 社媒代运营', '数字营销全托管', '中越双语商业文案', '品牌出海本地化'],
      cta: '了解 AI 社媒代运营'
    },
    {
      id: 'case-edu-localize',
      category: 'VietBridge Study / AI 教育赋能',
      categoryBadge: 'BLACKBOARD / BB 教育产品组合',
      categoryKey: 'education',
      title: 'VietBridge Study：Blackboard / BB 与 AI 教学平台越南市场本地化方案',
      subtitle: 'Bringing Blackboard / BB Learning Solutions & Digital Teaching Systems to Vietnam Schools',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study 面向越南高校、K12 学校、国际学校与教育机构，引入 Blackboard / BB 学习管理解决方案与智能学习系统，结合混合式教学设计、学习数据分析和教师培训，构建适合越南学校的本地化实施方案。',
      bullets: [
        'Blackboard / BB 在线教学与 LMS 方案面向越南学校的引入与场景适配',
        '支持课程建设、在线教学、混合式学习、作业测验评估与学习数据分析',
        '面向越南本地教师与学生的操作指引与教学流程本地化梳理',
        '由 VietBridge Study 提供教师实训工作坊与常态化课堂应用支持',
        '与学校数字校园教务流程及智慧课堂环境的协同衔接'
      ],
      context: '越南各级学校与教育机构正加快推进数字化教学升级，亟需成熟稳定的在线教学与学习管理平台（LMS），同时需要能够贴合本地教学实际的培训与实施支持。',
      challenge: '单纯采购国际教育软件若缺乏本地化实施辅导、教师培训与教学流程设计，往往难以在日常课堂中真正发挥作用。',
      solution: '依托教育科技产品组合与技术解决方案合作生态，VietBridge Study 将 Blackboard / BB 平台能力与本地化实施、双语培训支持及学情追踪方案相结合，帮助学校稳步推进数字化教学落地。',
      deliverables: [
        'Blackboard / BB 学习管理与混合式教学实施方案设计',
        '面向学校教师的数字化课程建设、在线作业与测验评估实训工作坊',
        '学习进度追踪与教学数据分析（Learning Analytics）报表配置指引',
        '由 VietBridge Study 提供的本地化实施协调与持续运营陪伴支持'
      ],
      strategicValue: '帮助越南学校将先进教育科技产品转化为日常可用的数字教学能力，实现从软件引入到常态化教学运营的闭环。',
      relatedServices: ['Blackboard / BB 在线教学平台', '智能学习与学情追踪', '教师数字化教学培训', 'VietBridge Study 本地化实施'],
      cta: '了解 VietBridge Study 教育方案'
    },
    {
      id: 'case-smart-stem',
      category: 'VietBridge Study / 智慧课堂与 STEM',
      categoryBadge: 'RADICA & STEM 方案组合',
      categoryKey: 'education',
      title: 'VietBridge Study：Radica 智慧课堂与 STEM/AI 教育方案组合',
      subtitle: 'Radica Smart Classroom and STEM, AI & Robotics Solutions for Future-ready Schools',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge Study 面向未来学校提供 Radica Smart Classroom 智慧课堂方案与 STEM、AI 及机器人教育方案，融合交互式大屏、课堂录制、远程教学、编程与机器人套件及教师培训支持，助力学校打造现代化教学与创新实践空间。',
      bullets: [
        'Radica Smart Classroom 交互式教学大屏、课堂录播与远程互动教学配置',
        '多屏互动、无线内容共享与配套云端教学软件协同',
        'STEM Learning 覆盖 Scratch、Blockly、Python 编程与机器人、IoT 项目学习',
        '人工智能（AI）基础启蒙课程模块与项目式学习（PBL）教学实践',
        '由 VietBridge Study 提供样板教室落地协调、师资培训与赛事实践指导'
      ],
      context: '越南众多公立学校、私立学校与国际学校希望升级传统教室体验，并引入体系化的 STEM、AI 与机器人创新课程以提升教学吸引力。',
      challenge: '如果只单独采购硬件大屏或机器人教具，缺乏配套课程体系与经过培训的师资团队，往往难以形成持续稳定的课堂教学效果。',
      solution: 'VietBridge Study 将 Radica Smart Classroom 智慧课堂方案与 STEM Learning 课程体系整合为可面向越南市场落地的教育科技方案，提供“空间升级+课程套件+师资实训”的一体化支持。',
      deliverables: [
        'Radica Smart Classroom 智慧教室软硬件配置与互动教学场景方案',
        '分学段 STEM、AI 与机器人教学套件、配套教材及教师教案包',
        '面向学校教师的智慧课堂操作与 STEM 项目式教学法培训工作坊',
        '样板教室试点实施支持与青少年机器人科创活动指导'
      ],
      strategicValue: '通过软硬件与课程师资的协同交付，帮助学校建设看得见、用得起、可持续运营的智慧课堂与科技创新教育体系。',
      relatedServices: ['Radica Smart Classroom 智慧课堂', 'STEM / AI / 机器人教育方案', '教师实训工作坊', '样板教室建设支持'],
      cta: '了解 Radica 智慧课堂与 STEM 方案'
    },
    {
      id: 'case-resource-base',
      category: '市场准入 / 商务落地',
      categoryBadge: '产业资源图谱',
      title: '中越企业服务资源库建设',
      subtitle: 'Building a Verified Enterprise Resource Base for China-Vietnam Business Services',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: '为支持越南市场进入、企业培训推广和企业服务落地，越桥集团正在建设覆盖胡志明市及周边省份的结构化企业资源库，包括中资企业、工业园区、商会资源、企业联系人和本地服务渠道。',
      bullets: [
        '全面梳理胡志明市、平阳、同奈、隆安等重点省市中资制造与商贸企业',
        '建立各大工业园区、保税园区租金、税收优惠与空置厂房动态数据库',
        '精准触达企业决策层，调研企业在劳动合规、税务、AI 培训的迫切诉求',
        '吸纳经过实地尽调的本土合规律所、报关行、工程建造等优质服务商网络',
        '为未来智能化客户关系管理（CRM）与 AI 销售自动化运营奠定底层数据'
      ],
      context: '外资企业跨国进入越南面临严重的信息不对称，寻找真实可靠的园区地块、厂房、合规中介往往耗费巨大试错成本。',
      challenge: '公开渠道信息陈旧、虚假中介横行、税收优惠口径不一，给企业初始落地带来极大的合规风险与沉没成本。',
      solution: '越桥团队通过实地踏勘、商会互通、高管访谈，建立起多维度的越南南部核心工业带企业资源库与综合评估模型。',
      deliverables: [
        '经过真实性核验的在越规模型外资企业名录与决策层画像',
        '越南南部主流工业园区全要素对比分析报告（电价、排污、地价、免税期）',
        '严选本土专业服务商准入白名单与联合协同服务机制',
        '中越商务代表团高效对接与定制化实地走访路线图'
      ],
      strategicValue: '构建了越桥集团坚不可摧的本地商务护城河，让越桥的所有咨询、培训与技术赋能都建立在第一手真实产业数据之上。',
      relatedServices: ['越南落地咨询', '工业园区与厂房选址', '商业考察团全案接待', '中越企业商务配对'],
      cta: '了解越南落地咨询'
    }
  ]
};

export const caseStudiesData = representativeCases;

// Why VietBridge - 6 Advantages
export const whyVietBridgePoints: Record<Language, {
  id: string;
  title: string;
  description: string;
}[]> = {
  en: [
    {
      id: 'why-1',
      title: 'China-Vietnam Cross-border Resources',
      description: 'Deep connection across Chinese and Vietnamese enterprise, education and institutional ecosystems.'
    },
    {
      id: 'why-2',
      title: 'Local Execution Capability',
      description: 'We do not stop at strategy. We help clients move from planning to deployment, operation and long-term growth.'
    },
    {
      id: 'why-3',
      title: 'AI-native Service Design',
      description: 'AI is embedded into content operations, teaching systems, learning analytics, business workflows and institutional transformation.'
    },
    {
      id: 'why-4',
      title: 'Enterprise + Education Dual Expertise',
      description: 'VietBridge uniquely combines business enablement and education enablement, creating cross-sector value for enterprises, schools and talent.'
    },
    {
      id: 'why-5',
      title: 'Global Partner Ecosystem',
      description: 'We work with global technology providers, universities, training experts, local service firms and institutional partners.'
    },
    {
      id: 'why-6',
      title: 'From Product to Operation',
      description: 'We do not simply resell products. We localize, integrate, train and operate solutions based on real client needs.'
    }
  ],
  vi: [
    {
      id: 'why-1',
      title: 'Tài nguyên Xuyên biên giới Trung - Việt Sâu rộng',
      description: 'Mạng lưới kết nối chặt chẽ giữa hệ sinh thái doanh nghiệp, trường đại học, viện nghiên cứu và cơ quan chính sách hai nước.'
    },
    {
      id: 'why-2',
      title: 'Năng lực Thực thi Bản địa Vượt trội',
      description: 'Chúng tôi không dừng lại ở bản kế hoạch chiến lược, mà trực tiếp đồng hành triển khai, vận hành và tạo ra kết quả thực tế.'
    },
    {
      id: 'why-3',
      title: 'Thiết kế Dịch vụ Tích hợp AI Bản địa',
      description: 'Công nghệ AI được nhúng sâu vào vận hành nội dung, hệ thống sư phạm, phân tích dữ liệu và quy trình doanh nghiệp.'
    },
    {
      id: 'why-4',
      title: 'Chuyên môn Song hành Doanh nghiệp & Giáo dục',
      description: 'VietBridge kết hợp độc đáo giữa dịch vụ doanh nghiệp và giải pháp giáo dục, tạo nên giá trị liên ngành bền vững cho nhân tài.'
    },
    {
      id: 'why-5',
      title: 'Hệ sinh thái Đối tác Toàn cầu Uy tín',
      description: 'Liên kết chặt chẽ cùng các hãng công nghệ giáo dục toàn cầu, trường đại học hàng đầu, chuyên gia đào tạo và đối tác sở tại.'
    },
    {
      id: 'why-6',
      title: 'Từ Sản phẩm đến Vận hành Thực tế',
      description: 'Chúng tôi không bán sản phẩm đơn thuần, mà tập trung bản địa hóa, tích hợp, đào tạo người dùng và vận hành lâu dài.'
    }
  ],
  zh: [
    {
      id: 'why-1',
      title: '深厚的中越跨境资源网络',
      description: '深度连接中国与越南两国的企业界、顶尖院校、行业商会、政府智库与本地高品质服务生态。'
    },
    {
      id: 'why-2',
      title: '扎根一线的本土执行交付能力',
      description: '我们不只停留于提供策略咨询方案，更拥有本地常驻团队，帮助客户完成落地部署、持续运营与长效增长。'
    },
    {
      id: 'why-3',
      title: 'AI 原生驱动的服务体系架构',
      description: 'AI 技术被深度嵌入内容运营流水线、教学系统、学情分析算法、企业日常协同流程与机构数字化转型中。'
    },
    {
      id: 'why-4',
      title: '“企业+教育”双轮驱动的跨界复合专长',
      description: '越桥独特融合了企业出海服务与教育科技赋能双重能力，打通企业岗位需求、院校专业培养与优质人才就业场景。'
    },
    {
      id: 'why-5',
      title: '成熟稳健的生态伙伴协同交付',
      description: '整合教育科技方案伙伴、高校学术教研资源、实战派合规导师与本地行业网络，保障项目稳妥交付。'
    },
    {
      id: 'why-6',
      title: '从产品工具走向持续运营赋能',
      description: '我们绝非简单的软硬件转售商，而是围绕客户真实业务需求，完成深度本地化、系统集成、师资实训与持续代运营。'
    }
  ]
};

export const partnerLogos = [
  { name: 'Global EdTech Partners', category: 'Technology Partner', logoText: 'Global EdTech' },
  { name: 'UEF Ho Chi Minh City', category: 'Academic Partner', logoText: 'UEF Vietnam' },
  { name: 'AI Solution Network', category: 'AI Ecosystem', logoText: 'AI Alliance' },
  { name: 'Vietnam National Universities', category: 'Academic Partner', logoText: 'VNU System' },
  { name: 'China-ASEAN Trade Board', category: 'Trade Ecosystem', logoText: 'ASEAN Trade' },
  { name: 'FDI Industrial Parks Council', category: 'Industrial Parks', logoText: 'VN Industrial Parks' }
];

export const contactInquiryAreas: Record<Language, { value: string; label: string }[]> = {
  en: [
    { value: 'enterprise-enablement', label: 'AI Enterprise Enablement' },
    { value: 'vietbridge-study', label: 'VietBridge Study · AI Education Enablement' },
    { value: 'blackboard-lms', label: 'Blackboard / BB Learning Management System' },
    { value: 'radica-smart-classroom', label: 'Radica Smart Classroom Solution' },
    { value: 'stem-education', label: 'STEM, AI & Robotics Learning Solutions' },
    { value: 'teacher-training-intl', label: 'Teacher Training & International Education Cooperation' },
    { value: 'corporate-training', label: 'Corporate Training & Compliance' },
    { value: 'vietnam-market-entry', label: 'Vietnam Market Entry & Consulting' },
    { value: 'other', label: 'Other Inquiries' }
  ],
  vi: [
    { value: 'enterprise-enablement', label: 'Khai phóng Doanh nghiệp bằng AI' },
    { value: 'vietbridge-study', label: 'VietBridge Study · Khai phóng Giáo dục bằng AI' },
    { value: 'blackboard-lms', label: 'Nền tảng Quản lý Học tập Blackboard / BB' },
    { value: 'radica-smart-classroom', label: 'Giải pháp Lớp học Thông minh Radica' },
    { value: 'stem-education', label: 'Giải pháp Giáo dục STEM, AI & Robotics' },
    { value: 'teacher-training-intl', label: 'Đào tạo Giáo viên & Hợp tác Giáo dục Quốc tế' },
    { value: 'corporate-training', label: 'Đào tạo Doanh nghiệp & Tuân thủ' },
    { value: 'vietnam-market-entry', label: 'Tư vấn Thâm nhập Thị trường VN' },
    { value: 'other', label: 'Yêu cầu khác' }
  ],
  zh: [
    { value: 'enterprise-enablement', label: 'AI 企业赋能全案' },
    { value: 'vietbridge-study', label: 'VietBridge Study｜AI 教育赋能全案' },
    { value: 'blackboard-lms', label: 'Blackboard / BB 在线教学与学习管理平台' },
    { value: 'radica-smart-classroom', label: 'Radica Smart Classroom 智慧课堂方案' },
    { value: 'stem-education', label: 'STEM、AI 与机器人教育方案' },
    { value: 'teacher-training-intl', label: '教师培训、中越院校合作与赴华留学' },
    { value: 'corporate-training', label: '企业培训与在越实务合规' },
    { value: 'vietnam-market-entry', label: '跨国企业越南落地咨询' },
    { value: 'other', label: '其他合作需求' }
  ]
};

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
  summary: string;
}

export const recentEvents: Record<Language, EventItem[]> = {
  en: [
    {
      id: 'ai-summit-2026',
      title: 'China-Vietnam AI Enterprise Transformation Summit',
      subtitle: 'Scaling Operations & Digital Channels Across Southeast Asia',
      date: 'April 2026',
      location: 'Ho Chi Minh City, Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'Convening cross-border entrepreneurs, manufacturing leaders, and AI specialists to address TikTok/Facebook automated marketing, localized CRM, and real-time multilingual content workflows.'
    },
    {
      id: 'smart-edtech-forum',
      title: 'Vietnam Higher Education Smart Campus Exhibition',
      subtitle: 'Co-hosted with Academic Institutions & EdTech Partners',
      date: 'March 2026',
      location: 'Hanoi, Vietnam',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: 'Showcasing AI-powered smart classrooms, interactive teaching consoles, and next-generation LMS platforms to university presidents, deans, and academic directors across northern Vietnam.'
    },
    {
      id: 'fdi-compliance-cohort',
      title: 'Bilateral FDI Executive Law & Tax Masterclass',
      subtitle: 'Navigating New Regulatory Paradigms & Localized HR Strategies',
      date: 'January 2026',
      location: 'District 1, Ho Chi Minh City',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: 'An intensive closed-door briefing featuring senior Vietnamese tax attorneys and labor arbitrators, providing tactical playbooks for Chinese manufacturing investors and regional corporate general managers.'
    }
  ],
  vi: [
    {
      id: 'ai-summit-2026',
      title: 'Hội Nghị Doanh Nghiệp AI & Chuyển Đổi Số Việt - Trung',
      subtitle: 'Mở rộng Vận hành & Kênh Tiếp thị Số tại Đông Nam Á',
      date: 'Tháng 4, 2026',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'Quy tụ các nhà sáng lập, lãnh đạo doanh nghiệp sản xuất và chuyên gia AI nhằm giải quyết bài toán tự động hóa tiếp thị mạng xã hội, CRM bản địa và nội dung đa ngôn ngữ.'
    },
    {
      id: 'smart-edtech-forum',
      title: 'Triển Lãm Trường Học Số & Công Nghệ Giáo Dục Đại Học',
      subtitle: 'Đồng tổ chức cùng các Đối tác Giáo dục Khu vực',
      date: 'Tháng 3, 2026',
      location: 'Hà Nội, Việt Nam',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: 'Trình diễn giải pháp phòng học thông minh tích hợp AI, thiết bị giảng dạy tương tác và hệ thống LMS thế hệ mới tới hiệu trưởng và ban giám hiệu các trường đại học.'
    },
    {
      id: 'fdi-compliance-cohort',
      title: 'Diễn Đàn Chuyên Sâu Tuân Thủ Pháp Lý & Thuế Doanh Nghiệp FDI',
      subtitle: 'Định hướng Pháp chế Mới & Quản trị Nhân sự Bản địa',
      date: 'Tháng 1, 2026',
      location: 'Quận 1, TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: 'Phiên hội thảo bàn tròn kín với các luật sư và chuyên gia thuế hàng đầu Việt Nam, trang bị cẩm nang thực chiến cho các giám đốc điều hành và doanh nghiệp đầu tư trực tiếp.'
    }
  ],
  zh: [
    {
      id: 'ai-summit-2026',
      title: '中越企业 AI 赋能与跨境数字化峰会',
      subtitle: '赋能社媒增长 · 突破东南亚全渠道业务拓展瓶颈',
      date: '2026年4月',
      location: '越南 · 胡志明市',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: '汇聚跨国出海创始人、制造工业园区高管与前沿 AI 应用专员，围绕 TikTok / Facebook 矩阵智能运营、本地化销售线索闭环与多语言内容流转展开务实研讨。'
    },
    {
      id: 'smart-edtech-forum',
      title: '越南高等教育智慧校园与教学数字化展演论坛',
      subtitle: '携手高等院校学术教研资源与教育科技伙伴',
      date: '2026年3月',
      location: '越南 · 河内市',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: '向越南多所重点高等院校负责人现场演示 AI 智慧课堂软硬件一体机、沉浸式互动教学平台与混合式教研 LMS 云系统，交流教育数字化升级路径。'
    },
    {
      id: 'fdi-compliance-cohort',
      title: '在越高管法务、税务实战与本土化管理闭门研修班',
      subtitle: '直击中资企业在越南实际经营痛点与最新合规监管边界',
      date: '2026年1月',
      location: '胡志明市第一郡 · 金融中心',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: '由在越资深实务派执业律师、注册税务师联合授课，针对劳务用工纠纷、外汇跨境合规与工厂本地化管理提供全套执行模板与风险规避指引。'
    }
  ]
};

export const whyUsData: Record<Language, { id: string; number: string; title: string; description: string }[]> = {
  en: [
    { id: 'why-1', number: '01', title: 'China-Vietnam Cross-border Resources', description: 'Deep connection across Chinese and Vietnamese enterprise, education and institutional ecosystems.' },
    { id: 'why-2', number: '02', title: 'Local Execution Capability', description: 'We do not stop at strategy. We help clients move from planning to deployment, operation and long-term growth.' },
    { id: 'why-3', number: '03', title: 'AI-native Service Design', description: 'AI is embedded into content operations, teaching systems, learning analytics, business workflows and institutional transformation.' },
    { id: 'why-4', number: '04', title: 'Enterprise + Education Dual Expertise', description: 'VietBridge uniquely combines business enablement and education enablement, creating cross-sector value for enterprises, schools and talent.' },
    { id: 'why-5', number: '05', title: 'Global Partner Ecosystem', description: 'We work with global technology providers, universities, training experts, local service firms and institutional partners.' },
    { id: 'why-6', number: '06', title: 'From Product to Operation', description: 'We do not simply resell products. We localize, integrate, train and operate solutions based on real client needs.' }
  ],
  vi: [
    { id: 'why-1', number: '01', title: 'Tài nguyên Xuyên biên giới Trung - Việt Sâu rộng', description: 'Mạng lưới kết nối chặt chẽ giữa hệ sinh thái doanh nghiệp, trường đại học, viện nghiên cứu và cơ quan chính sách hai nước.' },
    { id: 'why-2', number: '02', title: 'Năng lực Thực thi Bản địa Vượt trội', description: 'Chúng tôi không dừng lại ở bản kế hoạch chiến lược, mà trực tiếp đồng hành triển khai, vận hành và tạo ra kết quả thực tế.' },
    { id: 'why-3', number: '03', title: 'Kiến trúc Dịch vụ Định hướng AI', description: 'Công nghệ AI được nhúng sâu vào vận hành nội dung, hệ thống sư phạm, phân tích dữ liệu và quy trình doanh nghiệp.' },
    { id: 'why-4', number: '04', title: 'Chuyên môn Song hành Doanh nghiệp & Giáo dục', description: 'VietBridge kết hợp độc đáo giữa dịch vụ doanh nghiệp và giải pháp giáo dục, tạo nên giá trị liên ngành bền vững cho nhân tài.' },
    { id: 'why-5', number: '05', title: 'Hệ sinh thái Đối tác Toàn cầu Uy tín', description: 'Liên kết chặt chẽ cùng các hãng công nghệ giáo dục toàn cầu, trường đại học hàng đầu, chuyên gia đào tạo và đối tác sở tại.' },
    { id: 'why-6', number: '06', title: 'Từ Sản phẩm đến Vận hành Thực tế', description: 'Chúng tôi không bán sản phẩm đơn thuần, mà tập trung bản địa hóa, tích hợp, đào tạo người dùng và vận hành lâu dài.' }
  ],
  zh: [
    { id: 'why-1', number: '01', title: '深厚的中越跨境资源网络', description: '深度连接中国与越南两国的企业界、顶尖院校、行业商会、政府智库与本地高品质服务生态。' },
    { id: 'why-2', number: '02', title: '扎根一线的本土执行交付能力', description: '我们不只停留于提供策略咨询方案，更拥有本地常驻团队，帮助客户完成落地部署、持续运营与长效增长。' },
    { id: 'why-3', number: '03', title: 'AI 原生驱动的服务体系架构', description: 'AI 技术被深度嵌入内容运营流水线、教学系统、学情分析算法、企业日常协同流程与机构数字化转型中。' },
    { id: 'why-4', number: '04', title: '“企业+教育”双轮驱动的跨界复合专长', description: '越桥独特融合了企业出海服务与教育科技赋能双重能力，打通企业岗位需求、院校专业培养与优质人才就业场景。' },
    { id: 'why-5', number: '05', title: '成熟稳健的生态伙伴协同交付', description: '整合教育科技方案伙伴、高校学术教研资源、实战派合规导师与本地行业网络，保障项目稳妥交付。' },
    { id: 'why-6', number: '06', title: '从产品工具走向持续运营赋能', description: '我们绝非简单的软硬件转售商，而是围绕客户真实业务需求，完成深度本地化、系统集成、师资实训与持续代运营。' }
  ]
};
