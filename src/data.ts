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
  { id: 'hero', label: { en: 'Home', vi: 'Trang chủ', zh: '首页' }, href: '/' },
  {
    id: 'enterprise',
    label: { en: 'Enterprise', vi: 'Doanh nghiệp', zh: '企业赋能' },
    href: '/enterprise-enablement',
    children: [
      { id: 'ent-1', label: { en: 'AI Social Media Operations', vi: 'Vận hành AI Social Media', zh: 'AI 社媒代运营与数字营销' }, href: '/enterprise-enablement#ent-1' },
      { id: 'ent-2', label: { en: 'Corporate Training', vi: 'Đào tạo Doanh nghiệp', zh: '企业实战培训' }, href: '/enterprise-enablement#ent-2' },
      { id: 'ent-3', label: { en: 'Vietnam Market Entry', vi: 'Tư vấn Thâm nhập Việt Nam', zh: '跨国企业越南落地咨询' }, href: '/enterprise-enablement#ent-3' },
      { id: 'ent-4', label: { en: 'Vietnam Companies Going Global', vi: 'Doanh nghiệp Việt Vươn ra Toàn cầu', zh: '越南企业出海服务' }, href: '/enterprise-enablement#ent-4' },
      { id: 'ent-5', label: { en: 'Talent Development', vi: 'Phát triển Nhân tài & Đào tạo', zh: '人才委培与校企合作' }, href: '/enterprise-enablement#ent-5' },
    ]
  },
  {
    id: 'education',
    label: { en: 'VietBridge Study', vi: 'VietBridge Study', zh: '教育赋能' },
    href: '/education-enablement',
    children: [
      { id: 'edu-1', label: { en: 'Blackboard / BB Learning Platform', vi: 'Nền tảng Học tập Blackboard / BB', zh: 'Blackboard / BB 在线教学与学习管理' }, href: '/education-enablement#edu-1' },
      { id: 'edu-2', label: { en: 'Radica Smart Classroom', vi: 'Lớp học Thông minh Radica', zh: 'Radica Smart Classroom 智慧课堂方案' }, href: '/education-enablement#edu-2' },
      { id: 'edu-3', label: { en: 'STEM, AI & Robotics Learning', vi: 'Giáo dục STEM, AI & Robotics', zh: 'STEM / AI / Robotics 教育方案' }, href: '/education-enablement#edu-3' },
      { id: 'edu-4', label: { en: 'Intelligent Learning System', vi: 'Hệ thống Học tập Thông minh', zh: '智能学习与学情追踪系统' }, href: '/education-enablement#edu-4' },
      { id: 'edu-5', label: { en: 'Digital Campus Support', vi: 'Khuôn viên Số & Quản lý', zh: '数字校园与校园管理辅助系统' }, href: '/education-enablement#edu-5' },
      { id: 'edu-6', label: { en: 'Teacher Training & Cooperation', vi: 'Đào tạo Giáo viên & Hợp tác Quốc tế', zh: '教师培训与中越教育合作' }, href: '/education-enablement#edu-6' },
    ]
  },
  { id: 'cases', label: { en: 'Cases', vi: 'Dự án', zh: '项目案例' }, href: '/case-studies' },
  { id: 'about', label: { en: 'About', vi: 'Về chúng tôi', zh: '关于我们' }, href: '/about' },
  { id: 'contact', label: { en: 'Contact', vi: 'Liên hệ', zh: '联系合作' }, href: '/contact' },
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
      vi: 'VietBridge Group đồng hành cùng doanh nghiệp, trường học và tổ chức thâm nhập thị trường, nâng cấp năng lực số, chuyển đổi giáo dục và tăng trưởng bằng giải pháp AI.',
      zh: '越桥集团面向越南、中国及亚洲市场，帮助企业、院校与机构推进市场进入、数字化升级、教育转型与跨境合作。'
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
      en: 'VietBridge Group operates through two integrated business lines: AI Enterprise Enablement and AI Education Enablement. We combine technology, training, localized support and cross-border resources to help organizations move from strategy to implementation.',
      vi: 'VietBridge Group vận hành qua hai trụ cột chiến lược song hành: Khai phóng Doanh nghiệp bằng AI và Khai phóng Giáo dục bằng AI. Chúng tôi kết hợp công nghệ, đào tạo, hỗ trợ bản địa hóa và tài nguyên xuyên biên giới.',
      zh: '越桥集团以 AI 企业赋能与 AI 教育赋能两大产线为核心，融合 AI 技术、培训体系、本地化支持与中越跨境资源，协助客户从方案规划走向实施。'
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
      en: 'We support enterprises in Vietnam and across Asia through AI-powered marketing, corporate training, market entry consulting, talent development and cross-border business services.',
      vi: 'Chúng tôi hỗ trợ doanh nghiệp tại Việt Nam và Châu Á thông qua tiếp thị AI, đào tạo, tư vấn thị trường, phát triển nhân tài và dịch vụ xuyên biên giới.',
      zh: '面向越南及亚洲重点服务市场，提供 AI 营销、企业培训、越南落地咨询、人才委培和跨境商务支持服务。'
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
      zh: 'VietBridge Study 面向越南学校、院校与教育机构，引入并落地 AI 教育教学系统、智慧课堂、STEM/AI 课程和教师培训方案。'
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
      zh: '项目与方案案例'
    },
    title: {
      en: 'Featured Projects & Solution Cases',
      vi: 'Dự án Trọng điểm & Phương án Giải pháp',
      zh: '代表项目与解决方案案例'
    },
    intro: {
      en: 'VietBridge develops its service ecosystem through enterprise training planning, AI-powered content operations, education technology integration and cross-border cooperation.',
      vi: 'VietBridge xây dựng hệ sinh thái dịch vụ thông qua chương trình đào tạo doanh nghiệp, vận hành nội dung số AI, tích hợp công nghệ giáo dục và hợp tác xuyên biên giới.',
      zh: '越桥集团围绕企业培训项目策划、AI 内容运营、教育科技产品整合和中越院校合作方向，持续构建面向企业与教育机构的服务方案。'
    }
  },
  programs: {
    tagline: {
      en: 'REPRESENTATIVE INITIATIVES',
      vi: 'DỰ ÁN & PHƯƠNG ÁN TIÊU BIỂU',
      zh: '项目与方案展示'
    },
    title: {
      en: 'Representative Projects & Solution Cases',
      vi: 'Dự án & Phương án Giải pháp Tiêu biểu',
      zh: '代表性项目与解决方案案例'
    },
    description: {
      en: 'Representative project plans and solution portfolios across corporate training, AI content operations, smart classroom upgrades, and market-entry research.',
      vi: 'Các dự án và phương án giải pháp tiêu biểu về đào tạo doanh nghiệp, vận hành nội dung số bằng AI, nâng cấp lớp học thông minh và khảo sát thị trường.',
      zh: '围绕商业与教育场景，展示我们在企业研讨项目策划、AI 内容运营、智慧课堂方案组合与市场资源梳理方面的代表性项目。'
    }
  },
  events: {
    tagline: {
      en: 'PLANNED INITIATIVES · SEMINAR PROPOSALS',
      vi: 'ĐỀ XUẤT HOẠT ĐỘNG & KẾ HOẠCH HỘI THẢO',
      zh: 'PLANNED INITIATIVE · 活动方案与研讨会策划'
    },
    title: {
      en: 'Activity Proposals & Seminar Planning',
      vi: 'Đề Xuất Hoạt Động & Kế Hoạch Hội Thảo',
      zh: '活动方案与研讨会策划'
    },
    description: {
      en: 'Planned thematic seminar and workshop proposals focused on enterprise AI adoption, smart education upgrades, and cross-border business practices. Currently in proposal and planning stage.',
      vi: 'Các đề xuất hội thảo chuyên đề đang trong giai đoạn xây dựng phương án về ứng dụng AI doanh nghiệp, nâng cấp giáo dục thông minh và quản trị thực tiễn.',
      zh: '围绕中越企业 AI 应用、教育数字化升级与经营实务策划的专题研讨会及交流活动方案（当前处于方案策划阶段，尚未举办）。'
    }
  },
  whyUs: {
    tagline: {
      en: 'WHY VIETBRIDGE',
      vi: 'TẠI SAO CHỌN VIETBRIDGE',
      zh: '核心优势'
    },
    title: {
      en: 'Why VietBridge Group',
      vi: 'Tại sao chọn VietBridge Group',
      zh: '为什么选择越桥集团'
    },
    intro: {
      en: 'An AI-enabled business and education platform focused on China-Vietnam market needs and localized implementation support.',
      vi: 'Nền tảng kinh doanh và giáo dục tích hợp AI tập trung vào nhu cầu thị trường Trung - Việt và hỗ trợ triển khai bản địa hóa.',
      zh: '面向越南、中国及亚洲重点服务市场的 AI 企业与教育赋能平台，注重方案本地化适配与实务推进。'
    },
    description: {
      en: 'An AI-enabled business and education platform focused on China-Vietnam market needs and localized implementation support.',
      vi: 'Nền tảng kinh doanh và giáo dục tích hợp AI tập trung vào nhu cầu thị trường Trung - Việt và hỗ trợ triển khai bản địa hóa.',
      zh: '面向越南、中国及亚洲重点服务市场的 AI 企业与教育赋能平台，注重方案本地化适配与实务推进。'
    }
  },
  partners: {
    tagline: {
      en: 'COLLABORATION DIRECTIONS',
      vi: 'ĐỊNH HƯỚNG HỢP TÁC',
      zh: '合作方向与目标伙伴类型'
    },
    title: {
      en: 'Target Partner Types & Collaboration Directions',
      vi: 'Loại Hình Đối Tác Mục Tiêu & Định Hướng Hợp Tác',
      zh: '目标合作院校类型与合作方向'
    },
    intro: {
      en: 'VietBridge connects with education technology providers, AI solution developers, target partner institutions, training specialists and local service partners for projects in discussion.',
      vi: 'VietBridge kết nối với các đơn vị công nghệ giáo dục, nhà phát triển AI, các loại hình trường mục tiêu và đối tác dịch vụ cho các dự án đang tiếp xúc.',
      zh: '越桥集团围绕教育科技产品组合与企业服务需求，面向相关技术伙伴、目标合作院校类型与专业服务渠道推进合作接洽。'
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
      en: 'VietBridge Group is an AI-powered enterprise and education enablement platform focused on Vietnam, China and regional markets.',
      vi: 'VietBridge Group là nền tảng khai phóng doanh nghiệp và giáo dục bằng AI tập trung phục vụ thị trường Việt Nam, Trung Quốc và khu vực.',
      zh: '越桥集团是一家聚焦越南、中国与亚洲重点服务市场的 AI 企业与教育赋能平台。'
    },
    statement2: {
      en: 'We help companies, schools and institutions address transformation needs through market knowledge, technology integration, training, localized support and cross-border cooperation.',
      vi: 'Chúng tôi giúp doanh nghiệp, trường học và tổ chức giải quyết nhu cầu chuyển đổi thông qua am hiểu thị trường, tích hợp công nghệ, đào tạo và hợp tác xuyên biên giới.',
      zh: '我们通过市场研究、技术工具整合、培训课程设计、本地化支持和跨境合作，协助企业、院校和机构推进数字化与业务升级。'
    },
    founderNote: {
      en: 'VietBridge was initiated by cross-border practitioners with experience in China-Vietnam business services, digital media operations, education technology and AI application scenarios.',
      vi: 'VietBridge được khởi xướng bởi đội ngũ thực hành xuyên biên giới có kinh nghiệm trong dịch vụ thương mại Trung - Việt, vận hành nội dung số, công nghệ giáo dục và ứng dụng AI.',
      zh: '越桥集团由关注越南与中越跨境合作的一线实践者发起，团队围绕企业服务、数字内容运营、教育科技方案和 AI 应用场景提供支持。'
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
      en: 'Whether you are exploring the Vietnam market, upgrading enterprise operations, planning smart classroom upgrades, or discussing education cooperation, connect with VietBridge.',
      vi: 'Dù bạn đang tìm hiểu thị trường Việt Nam, nâng cấp vận hành doanh nghiệp, lên kế hoạch lớp học thông minh hay thảo luận hợp tác giáo dục, hãy kết nối cùng VietBridge.',
      zh: '无论你正在了解越南市场、升级企业数字化运营、规划学校智慧课堂建设，还是探讨国际教育合作方向，欢迎联系越桥集团。'
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
      highlights: ['AI Social Media Operations', 'Corporate & Management Training', 'Vietnam Market Entry Consulting', 'Vietnam Companies Going Global', 'Talent Pipeline & School-Enterprise Cooperation']
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
      highlights: ['Vận hành Mạng xã hội AI', 'Đào tạo Quản trị & Doanh nghiệp', 'Tư vấn Thâm nhập Thị trường VN', 'Doanh nghiệp Việt Vươn ra Toàn cầu', 'Đào tạo Nhân tài & Hợp tác Nhà trường - Doanh nghiệp']
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
      description: '面向进入越南、拓展亚洲、升级运营、建设本地团队和提升市场增长能力的企业，提供数字化与本地化支持。',
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
      description: '面向学校、院校、国际学校与教育机构，提供 AI 教学系统、Blackboard / BB 学习管理平台、智慧课堂、STEM 教育、教师培训与国际教育合作方案。',
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
        'AI content factory for structured content creation',
        'Localized social media strategy for Vietnam & China markets',
        'Facebook, TikTok, WeChat and Xiaohongshu content operations',
        'Bilingual Chinese / Vietnamese localized copywriting',
        'Data-informed engagement and conversion review',
        'Multi-platform publishing workflow with editorial review'
      ],
      cta: 'Explore AI Social Media'
    },
    {
      id: 'ent-2',
      title: 'Corporate Training',
      tag: 'EXECUTIVE TRAINING',
      description: 'Practical training programs for enterprises operating in Vietnam, covering labor regulations, tax awareness, management, AI productivity, cross-cultural communication and digital operations.',
      bullets: [
        'Vietnam labor regulations, employment contracts and HR practices',
        'Tax regulation overview, accounting practices and risk awareness',
        'AI office tools and enterprise productivity workflows',
        'Cross-cultural management between Chinese and Vietnamese teams',
        'Human resources strategy and localized organizational building',
        'Executive weekend seminars and management workshops'
      ],
      cta: 'Explore Corporate Training'
    },
    {
      id: 'ent-3',
      title: 'Vietnam Market Entry & Localization Consulting',
      tag: 'MARKET ENTRY SUPPORT',
      description: 'Structured support for companies exploring or entering Vietnam, from market research and entity setup coordination to local partner matching and industrial park comparison.',
      bullets: [
        'Market entry research and feasibility analysis',
        'FDI company registration and setup coordination with local specialists',
        'Industrial park comparison, factory search and site visit support',
        'Local partner and supply chain vendor matching',
        'Cross-border tax, accounting and HR service coordination',
        'Business delegation planning and project landing support'
      ],
      cta: 'Explore Market Entry'
    },
    {
      id: 'ent-4',
      title: 'Vietnam Companies Going Global',
      tag: 'CROSS-BORDER EXPANSION',
      description: 'Helping Vietnamese enterprises, institutions and brands connect with China and overseas markets through localization, partnership development and cross-border business services.',
      bullets: [
        'China market entry research and channel roadmaps',
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
        'Bilingual Vietnamese-Chinese technical & management talent training',
        'Enterprise-specific customized curricula and internships',
        'AI, digital marketing and modern trade operational skillsets',
        'University internship and talent recruitment pathways',
        'School-enterprise cooperative talent training programs',
        'Management trainee development programs'
      ],
      cta: 'Explore Talent Programs'
    }
  ],
  vi: [
    {
      id: 'ent-1',
      title: 'Vận hành Mạng xã hội & Tiếp thị Số bằng AI',
      tag: 'CONTENT FACTORY AI',
      description: 'Dịch vụ sản xuất nội dung số và tiếp thị bằng AI giúp doanh nghiệp gia tăng ảnh hưởng thương hiệu, tương tác khách hàng và hiện diện tại thị trường bản địa.',
      bullets: [
        'Xưởng nội dung số AI sản xuất nhanh và chuẩn hóa',
        'Chiến lược mạng xã hội bản địa hóa cho thị trường VN & TQ',
        'Vận hành Facebook, TikTok, WeChat và Xiaohongshu',
        'Biên tập nội dung song ngữ Trung - Việt phù hợp văn hóa',
        'Phân tích dữ liệu tiếp cận và tối ưu hóa chuyển đổi',
        'Quy trình xuất bản đa nền tảng kết hợp biên tập'
      ],
      cta: 'Tìm hiểu Vận hành AI'
    },
    {
      id: 'ent-2',
      title: 'Đào tạo Doanh nghiệp & Quản trị Thực tiễn',
      tag: 'ĐÀO TẠO DOANH NGHIỆP',
      description: 'Chương trình đào tạo thực tiễn cho doanh nghiệp tại Việt Nam về quy định lao động, thuế, năng suất AI, giao tiếp xuyên văn hóa và vận hành số.',
      bullets: [
        'Quy định lao động Việt Nam, hợp đồng và thực務 nhân sự',
        'Tổng quan chính sách thuế, kế toán và phòng ngừa rủi ro',
        'Ứng dụng AI tăng năng suất làm việc cho nhân viên',
        'Quản trị xuyên văn hóa cho đội ngũ quản lý Trung - Việt',
        'Chiến lược nhân sự và xây dựng tổ chức bản địa',
        'Hội thảo chuyên đề quản trị cuối tuần'
      ],
      cta: 'Tìm hiểu Đào tạo Doanh nghiệp'
    },
    {
      id: 'ent-3',
      title: 'Tư vấn Thâm nhập Thị trường & Bản địa hóa',
      tag: 'HỖ TRỢ THỊ TRƯỜNG',
      description: 'Hỗ trợ doanh nghiệp tìm hiểu và gia nhập thị trường Việt Nam: từ khảo sát thị trường, phối hợp thủ tục đăng ký, tìm hiểu khu công nghiệp đến kết nối đối tác.',
      bullets: [
        'Nghiên cứu thị trường và đánh giá tính khả thi',
        'Phối hợp tư vấn thủ tục đăng ký doanh nghiệp FDI',
        'So sánh vị trí, tìm kiếm nhà xưởng và khu công nghiệp',
        'Kết nối đối tác thương mại và nhà cung cấp',
        'Phối hợp tư vấn thuế, kế toán và nhân sự bản địa',
        'Hỗ trợ đoàn doanh nghiệp khảo sát thị trường'
      ],
      cta: 'Tìm hiểu Thâm nhập Thị trường'
    },
    {
      id: 'ent-4',
      title: 'Hỗ trợ Doanh nghiệp Việt Nam Vươn ra Toàn cầu',
      tag: 'PHÁT TRIỂN QUỐC TẾ',
      description: 'Đồng hành cùng doanh nghiệp và thương hiệu Việt kết nối thị trường Trung Quốc và quốc tế qua bản địa hóa, tìm đối tác và thương mại xuyên biên giới.',
      bullets: [
        'Tìm hiểu thị trường Trung Quốc và định hướng kênh phân phối',
        'Kết nối nhà phân phối và đối tác mua hàng quốc tế',
        'Bản địa hóa thương hiệu cho người tiêu dùng Trung Quốc',
        'Kênh truyền thông số và marketing xuyên biên giới',
        'Hỗ trợ phát triển kinh doanh cho nhà sản xuất Việt Nam',
        'Hợp tác thương mại và giáo dục quốc tế'
      ],
      cta: 'Tìm hiểu Dịch vụ Quốc tế'
    },
    {
      id: 'ent-5',
      title: 'Đào tạo Theo Nhu cầu & Phát triển Nhân tài',
      tag: 'PHÁT TRIỂN NHÂN LỰC',
      description: 'Chương trình phát triển nhân lực theo yêu cầu, gắn kết nhu cầu thực tế của doanh nghiệp với nguồn lực đào tạo song ngữ và kỹ năng số.',
      bullets: [
        'Đào tạo nhân sự song ngữ Việt - Trung khối kỹ thuật và quản lý',
        'Giáo trình thiết kế theo vị trí công việc doanh nghiệp',
        'Kỹ năng ứng dụng AI và vận hành kinh doanh số',
        'Lộ trình thực tập và kết nối tuyển dụng sinh viên',
        'Chương trình hợp tác đào tạo giữa nhà trường và doanh nghiệp',
        'Chương trình bồi dưỡng quản trị viên tập sự'
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
        'AI 内容流水线：辅助生成结构化商业图文与资讯内容',
        '中越双边本地化社媒策略与目标受众触达策划',
        'Facebook、微信公众号、小红书、视频号内容代运营支持',
        '中越双语本地化文案撰稿与跨文化语境审校',
        '内容数据复盘、互动追踪与投放策略优化',
        '多平台排版与发布协同流程，支持企业客户审阅'
      ],
      cta: '了解 AI 社媒代运营'
    },
    {
      id: 'ent-2',
      title: '企业培训与经营实务研讨',
      tag: '企业实务培训',
      description: '面向在越华资企业、跨国企业和本地企业，策划劳动法规、财税知识、企业管理、AI 办公、数字营销、跨文化沟通等实用培训课程。',
      bullets: [
        '越南劳动法规解析：用工合同、人事制度与日常管理要点',
        '越南财税政策概览：常见税务流程、核算要点与风险意识',
        'AI 赋能企业办公：日常提效、文档处理与自动化工具实操',
        '中越团队跨文化沟通与管理：减少团队协作隔阂与摩擦',
        '本地化 HR 选育留用方法与中基层团队建设培训',
        '高管周末专题研讨会、企业内训与行业交流活动策划'
      ],
      cta: '了解企业培训方案'
    },
    {
      id: 'ent-3',
      title: '跨国企业越南落地咨询',
      tag: '越南市场准入支持',
      description: '为中国及海外企业进入越南市场提供从市场调研、设立流程梳理、园区选址比较、合作伙伴对接到本地运营辅导的落地咨询支持。',
      bullets: [
        '行业市场信息调研与前期进入可行性梳理',
        '外资企业设立流程咨询及本地专业服务机构对接',
        '工业园区信息比选、厂房租赁调研与实地考察协助',
        '本地业务合作伙伴、供应链厂商及渠道资源引荐',
        '跨境财税、人事与行政服务机构协同对接',
        '商务考察行程安排与项目落地阶段性陪伴支持'
      ],
      cta: '了解越南落地咨询'
    },
    {
      id: 'ent-4',
      title: '越南企业出海服务',
      tag: '跨境业务拓展',
      description: '帮助越南企业、教育机构和本地品牌对接中国及海外市场，提供市场进入研究、合作伙伴对接、品牌本地化和跨境商务支持。',
      bullets: [
        '中国及海外市场准入信息研究与渠道拓展规划',
        '行业展会、采购商与分销渠道资源匹配对接',
        '面向中文受众的品牌视觉与营销内容本地化改写',
        '跨境商务沟通、双语资料准备与合作接洽支持',
        '越南制造业与特色产品拓展海外合作渠道支持',
        '中越企业商务交流与教育合作项目对接'
      ],
      cta: '了解企业出海服务'
    },
    {
      id: 'ent-5',
      title: '人才委培与校企合作',
      tag: '定向人才培养',
      description: '结合企业岗位需求与院校教学资源，为企业提供中越双语复合型人才、AI 应用技能人才和跨境商务人才的定制培养方案。',
      bullets: [
        '中越双语沟通与跨文化职场协同能力培训',
        '结合企业岗位需求的定制化课程与岗前实训方案',
        'AI 工具应用、数字营销与跨境电商实操技能培养',
        '院校实习生推荐与应届毕业生定向招聘对接',
        '校企联合课程共建与实训项目合作策划',
        '企业青年骨干与管理培训生（MT）培养支持'
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
  status?: string;
  evidenceStatus?: string;
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
      categoryBadge: 'EXECUTIVE SEMINAR PROGRAM',
      categoryKey: 'enterprise',
      status: 'IN PROGRESS',
      evidenceStatus: 'PENDING VERIFICATION (UEF institutional relationship under project discussion)',
      title: 'Executive Management Seminar Program for Chinese Enterprises in Vietnam',
      subtitle: 'Corporate Training Program for Chinese Enterprises in Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge is planning a weekend executive management seminar program for Chinese enterprises operating in Vietnam (with UEF academic cooperation currently in project discussion / pending verification), addressing tax policies, labor regulations, and localized management.',
      bullets: [
        'Target Audience: Chinese business owners, executives and HR leaders in Vietnam',
        'Proposed Format: Weekend executive management seminar in Ho Chi Minh City',
        'Core Topics: Tax regulations, labor law, management practices and cross-cultural communication',
        'Cooperation Direction: Connecting target university resources (UEF relationship: PENDING VERIFICATION) and practical experts with enterprise training needs'
      ],
      context: 'Chinese enterprises operating in Vietnam face complex daily management issues, including labor relations, tax rules, cross-cultural communication and localized team building.',
      challenge: 'Many enterprises receive fragmented information from informal networks and need a structured executive learning program that connects academic perspectives, practical experts and real enterprise operational scenarios.',
      solution: 'VietBridge designed a weekend executive seminar curriculum framework targeting Chinese business owners, HR leaders and management teams in Ho Chi Minh City and surrounding areas, with academic resource discussions in progress.',
      deliverables: [
        'Executive seminar curriculum framework covering tax, labor law, HR & cross-cultural management',
        'Planned thematic sessions with local legal and fiscal practitioners (speaker confirmation in progress)',
        'Bilingual executive reference materials and management case study outlines',
        'Enterprise training needs intake and seminar planning support'
      ],
      strategicValue: 'Illustrates VietBridge’s approach to connecting target academic institutions, industry practitioners and enterprise communities into structured management training programs.',
      relatedServices: ['Corporate Training', 'Vietnam Business Operations', 'Enterprise Community Development', 'China-Vietnam Education Cooperation'],
      cta: 'Explore Corporate Training'
    },
    {
      id: 'case-ai-social',
      category: 'AI Social Media Operations / Enterprise Enablement',
      categoryBadge: 'AI CONTENT OPS',
      categoryKey: 'enterprise',
      title: 'AI-Powered Social Media Operations for Vietnam Business Content',
      subtitle: 'AI Content Operations for Vietnam Business and Policy Insights',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge is developing an AI-assisted content operation model focused on Vietnam business, policy, and market-entry insights, establishing a reproducible client-side marketing workflow.',
      bullets: [
        'AI-assisted topic research and policy information review',
        'Long-form business articles and social media content production',
        'Visual information cards and short video scripts',
        'Multi-platform publishing workflow (WeChat, Xiaohongshu, Facebook)',
        'Data review, engagement tracking and continuous content optimization',
        'Structured workflow ready for enterprise client-side social media deployment'
      ],
      context: 'Companies in Vietnam often struggle to create consistent, informative content that resonates across both Chinese and Vietnamese business stakeholders.',
      challenge: 'Traditional agency models can be slow and costly, often lacking familiarity with bilateral business contexts and AI-assisted content workflows.',
      solution: 'VietBridge established an AI-assisted content workflow integrating language models for policy summarization, market research, infographic layout, and multi-platform social publishing.',
      deliverables: [
        'Multi-platform editorial calendar covering regulatory updates and market opportunities',
        'AI prompt templates tailored for Vietnam business information',
        'Bilingual visual card templates for executive takeaways',
        'Client-side social media operation SOPs for marketing handoff'
      ],
      strategicValue: 'Combines AI tooling with cross-border business communication to improve content production efficiency for enterprise marketing teams.',
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
      context: 'Universities, international schools and K12 institutions in Vietnam are upgrading their digital teaching infrastructure, requiring LMS platforms alongside practical local onboarding and faculty training.',
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
      categoryBadge: 'ENTERPRISE RESOURCE BASE',
      categoryKey: 'enterprise',
      title: 'China-Vietnam Enterprise Resource Development',
      subtitle: 'Building a Structured Enterprise Resource Base for China-Vietnam Business Services',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: 'To support market entry, training promotion and enterprise services, VietBridge is building structured enterprise resource data covering Chinese-invested companies, industrial parks, and business networks in Southern Vietnam.',
      bullets: [
        'Chinese-invested enterprise mapping across Ho Chi Minh City, Binh Duong & Dong Nai',
        'Industrial park and high-tech park information registry',
        'Enterprise outreach and customized training demand discovery',
        'Local partner, legal and accounting service coordination network',
        'Foundation for CRM and AI-assisted business development'
      ],
      context: 'Companies exploring operations in Southern Vietnam frequently face search friction when trying to identify local vendors, industrial parks, and service networks.',
      challenge: 'Scattered directory information is often outdated or incomplete for cross-border project planning.',
      solution: 'VietBridge compiles and categorizes information on industrial parks, enterprise networks, and local service providers across Southern Vietnam’s key industrial corridors.',
      deliverables: [
        'Structured directory of operating enterprises and industry sectors in Vietnam',
        'Comparative industrial park overview covering infrastructure and lease conditions',
        'Coordination channels with business associations and local service firms',
        'Matching workflow for inbound business visits and supply chain inquiries'
      ],
      strategicValue: 'Provides structured market information to support VietBridge’s training, consulting, and cross-border business services.',
      relatedServices: ['Vietnam Market Entry', 'Industrial Park Overview', 'B2B Partner Matching', 'Business Delegations'],
      cta: 'Explore Market Entry Services'
    }
  ],
  vi: [
    {
      id: 'case-uef',
      category: 'Đào tạo Doanh nghiệp / Khai phóng Doanh nghiệp',
      categoryBadge: 'DỰ ÁN HỘI THẢO QUẢN TRỊ',
      categoryKey: 'enterprise',
      status: 'IN PROGRESS',
      evidenceStatus: 'PENDING VERIFICATION (Quan hệ hợp tác với UEF đang trong giai đoạn trao đổi dự án)',
      title: 'Dự án Hội thảo Quản trị Thực tiễn cho Doanh nghiệp Trung Quốc tại Việt Nam',
      subtitle: 'Corporate Training Program for Chinese Enterprises in Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge đang xây dựng chương trình hội thảo quản trị thực tiễn cuối tuần dành cho doanh nghiệp Trung Quốc tại Việt Nam (việc kết nối học thuật với UEF đang trong giai đoạn trao đổi / chờ xác minh), tập trung vào thuế, luật lao động và quản trị bản địa.',
      bullets: [
        'Đối tượng mục tiêu: Chủ doanh nghiệp, quản lý và phụ trách nhân sự tại Việt Nam',
        'Hình thức dự kiến: Hội thảo chuyên đề quản trị cuối tuần tại TP. Hồ Chí Minh',
        'Chủ đề cốt lõi: Quy định thuế, luật lao động, quản trị và giao tiếp xuyên văn hóa',
        'Định hướng hợp tác: Kết nối nguồn lực học thuật (quan hệ UEF: PENDING VERIFICATION) và chuyên gia thực tiễn'
      ],
      context: 'Các doanh nghiệp có vốn đầu tư nước ngoài tại Việt Nam đối mặt với các vấn đề quản lý hàng ngày như luật lao động, thuế và quản trị nhân sự bản địa.',
      challenge: 'Thông tin trên thị trường thường rời rạc, cần một chương trình đào tạo quản trị có cấu trúc kết hợp góc nhìn học thuật và kinh nghiệm thực tiễn.',
      solution: 'VietBridge thiết kế khung chương trình hội thảo quản trị cuối tuần cho đội ngũ quản lý doanh nghiệp tại TP. Hồ Chí Minh và các tỉnh lân cận, đồng thời đang tiến hành trao đổi với các đối tác học thuật và giảng viên chuyên môn.',
      deliverables: [
        'Khung chương trình hội thảo chuyên đề về thuế, lao động và quản trị xuyên văn hóa',
        'Kế hoạch mời chuyên gia pháp lý và thuế tham gia chia sẻ (đang trong quá trình xác nhận giảng viên)',
        'Đề cương tài liệu tham khảo quản trị song ngữ Trung - Việt',
        'Khảo sát nhu cầu đào tạo và xây dựng kế hoạch hội thảo cho doanh nghiệp'
      ],
      strategicValue: 'Thể hiện định hướng của VietBridge trong việc kết nối nguồn lực học thuật mục tiêu, chuyên gia thực tiễn và nhu cầu đào tạo của doanh nghiệp.',
      relatedServices: ['Đào tạo Doanh nghiệp', 'Tư vấn Vận hành', 'Kết nối Doanh nghiệp', 'Hợp tác Giáo dục'],
      cta: 'Tìm hiểu Đào tạo Doanh nghiệp'
    },
    {
      id: 'case-ai-social',
      category: 'Vận hành Mạng xã hội AI / Khai phóng Doanh nghiệp',
      categoryBadge: 'NỘI DUNG SỐ AI',
      categoryKey: 'enterprise',
      title: 'Vận hành Nội dung Số Bằng AI cho Thị trường Kinh doanh Việt Nam',
      subtitle: 'Ma trận Nội dung Thông tin Kinh tế & Chính sách Việt Nam',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: 'VietBridge xây dựng quy trình sản xuất nội dung số hỗ trợ bằng AI về chính sách, kinh doanh và đầu tư tại Việt Nam, sẵn sàng triển khai cho các khách hàng doanh nghiệp.',
      bullets: [
        'Nghiên cứu đề tài và đối chiếu thông tin bằng AI',
        'Sản xuất bài viết chuyên sâu và nội dung mạng xã hội ngắn',
        'Thiết kế infographic thông tin và kịch bản video',
        'Quy trình xuất bản đa kênh (WeChat, Facebook, Xiaohongshu)',
        'Theo dõi dữ liệu tương tác và tối ưu hóa nội dung',
        'Quy trình chuẩn hóa để triển khai dịch vụ vận hành cho doanh nghiệp'
      ],
      context: 'Doanh nghiệp tại Việt Nam thường cần đội ngũ sản xuất nội dung số vừa hiểu bối cảnh kinh doanh bản địa vừa nắm bắt công cụ số.',
      challenge: 'Mô hình sản xuất nội dung truyền thống thường tốn nhiều thời gian và chi phí cho việc biên dịch, biên tập đa ngôn ngữ.',
      solution: 'VietBridge ứng dụng AI để xây dựng quy trình sản xuất nội dung số, hỗ trợ từ khâu tổng hợp thông tin đến thiết kế thẻ thông tin và xuất bản.',
      deliverables: [
        'Kế hoạch bài viết phân tích thông tin đầu tư và quy định thị trường',
        'Bộ mẫu prompt AI phục vụ biên tập nội dung kinh doanh tại Việt Nam',
        'Mẫu thẻ thông tin trực quan song ngữ',
        'Quy trình vận hành mạng xã hội dành cho khách hàng doanh nghiệp'
      ],
      strategicValue: 'Nâng cao hiệu suất sản xuất nội dung song ngữ và hỗ trợ doanh nghiệp duy trì kênh truyền thông số ổn định.',
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
      context: 'Các trường đại học, trường quốc tế và trường phổ thông tại Việt Nam đang đẩy mạnh nâng cấp hạ tầng dạy học số, đòi hỏi nền tảng LMS đi kèm dịch vụ đào tạo và hỗ trợ triển khai tại chỗ.',
      challenge: 'Việc chỉ mua bản quyền phần mềm mà thiếu đội ngũ hướng dẫn sư phạm, bản địa hóa quy trình và hỗ trợ kỹ thuật tại chỗ khiến nhiều trường gặp khó khăn khi đưa hệ thống vào vận hành thực tế.',
      solution: 'Thông qua danh mục sản phẩm công nghệ giáo dục và hệ sinh thái đối tác giải pháp, VietBridge Study cung cấp dịch vụ triển khai bản địa hóa, tài liệu hướng dẫn, tập huấn giảng viên và đồng hành vận hành cho nền tảng Blackboard / BB.',
      deliverables: [
        'Thiết kế mô hình triển khai hệ thống LMS và dạy học kết hợp với Blackboard / BB',
        'Khóa tập huấn giảng viên về thiết kế bài giảng số và kiểm tra đánh giá trực tuyến',
        'Thiết lập quy trình theo dõi tiến độ học tập và báo cáo phân tích dữ liệu học tập',
        'Hỗ trợ kỹ thuật và đồng hành triển khai bản địa hóa bởi VietBridge Study'
      ],
      strategicValue: 'Giúp nhà trường chuyển đổi từ việc mua sắm phần mềm đơn lẻ sang vận hành hệ thống dạy và học số bền vững trong thực tế.',
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
      categoryKey: 'enterprise',
      title: 'Xây dựng Cơ sở Dữ liệu Tài nguyên Doanh nghiệp Trung - Việt',
      subtitle: 'Hệ thống Dữ liệu Doanh nghiệp Phục vụ Dịch vụ Xuyên biên giới',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: 'Để phục vụ hoạt động thâm nhập thị trường và đào tạo, VietBridge đang xây dựng cơ sở dữ liệu thông tin doanh nghiệp FDI, khu công nghiệp và mạng lưới dịch vụ tại miền Nam Việt Nam.',
      bullets: [
        'Tổng hợp thông tin doanh nghiệp FDI tại TP.HCM, Bình Dương, Đồng Nai',
        'Cơ sở dữ liệu thông tin các khu công nghiệp và khu công nghệ cao',
        'Kênh tiếp cận doanh nghiệp và khảo sát nhu cầu đào tạo nhân lực',
        'Mạng lưới kết nối dịch vụ pháp lý, kế toán và tư vấn bản địa',
        'Nền tảng dữ liệu cho hệ thống CRM và phát triển khách hàng bằng AI'
      ],
      context: 'Doanh nghiệp mới tìm hiểu thị trường Việt Nam thường mất nhiều thời gian để tra cứu thông tin khu công nghiệp, nhà cung cấp và đơn vị dịch vụ.',
      challenge: 'Thông tin rời rạc khiến việc lập kế hoạch khảo sát và kết nối đối tác ban đầu gặp nhiều trở ngại.',
      solution: 'VietBridge tổng hợp, phân loại và số hóa thông tin về các khu công nghiệp, nhóm ngành doanh nghiệp và kênh dịch vụ hỗ trợ tại miền Nam Việt Nam.',
      deliverables: [
        'Danh mục thông tin doanh nghiệp FDI và phân nhóm ngành nghề',
        'Bảng tổng hợp thông tin hạ tầng và điều kiện thuê tại các khu công nghiệp',
        'Kênh liên lạc với các hiệp hội doanh nghiệp và đơn vị dịch vụ chuyên môn',
        'Quy trình kết nối nhu cầu khảo sát thị trường và tìm kiếm đối tác B2B'
      ],
      strategicValue: 'Cung cấp cơ sở thông tin có cấu trúc hỗ trợ các dịch vụ tư vấn, đào tạo và kết nối thương mại của VietBridge.',
      relatedServices: ['Tư vấn Thâm nhập Thị trường', 'Thông tin Khu công nghiệp', 'Kết nối B2B', 'Tổ chức Đoàn Doanh nghiệp'],
      cta: 'Tìm hiểu Dịch vụ Thâm nhập'
    }
  ],
  zh: [
    {
      id: 'case-uef',
      category: '企业培训 / 企业赋能',
      categoryBadge: '高管实务研修方案',
      categoryKey: 'enterprise',
      status: 'IN PROGRESS（项目接洽中）',
      evidenceStatus: 'PENDING VERIFICATION（UEF 院校合作关系待核验 / 项目接洽中）',
      title: '面向驻越华资企业的高级管理实务研讨会项目',
      subtitle: 'Corporate Training Program for Chinese Enterprises in Vietnam',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: '越桥集团正面向驻越华资企业老板、管理层与 HR 负责人策划周末高级管理实务研讨会项目（其中与 UEF 等目标院校的学术合作关系处于 PENDING VERIFICATION / 项目接洽中状态），聚焦税务政策、劳动法规、跨文化沟通和越南本地化经营等企业管理课题。',
      bullets: [
        '目标受众：在越华资企业负责人、管理层与 HR 负责人',
        '策划形式：胡志明市周末高级管理实务研讨会方案',
        '核心议题：税务规定、劳动法规、经营管理与跨文化沟通',
        '合作方向：对接目标院校学术资源（UEF 关系状态：PENDING VERIFICATION / 项目接洽中）与实务讲师资源'
      ],
      context: '在越经营的华资及跨国企业面临劳动用工管理、税务申报流程、中越员工跨文化沟通及本地团队建设等实际管理课题。',
      challenge: '许多企业日常获取的市场信息较为零散，需要结构化的管理实务研修课程，将高校学术视角、本地实务讲师经验与企业日常经营场景结合起来。',
      solution: '越桥集团围绕华资企业管理层需求，设计了周末高级管理实务研讨会课程框架，目前正与目标合作院校（如 UEF，关系状态：PENDING VERIFICATION）及本地法务财税讲师推进课程接洽与筹备。',
      deliverables: [
        '围绕“劳动法规+税务实务+跨文化管理”设计的三大研讨课程模块方案',
        '拟邀本地法律与财税实务讲师开展专题解析与交流（讲师名单确认中）',
        '中越双语管理参考资料与实务案例研讨提纲',
        '企业培训需求调研与专题研讨班定制筹备支持'
      ],
      strategicValue: '体现越桥集团围绕企业真实管理痛点，规划并整合目标院校方向、专业讲师资源与企业培训需求的产品设计能力。',
      relatedServices: ['企业培训', '越南经营实务咨询', '跨文化管理工作坊', '中越校企合作方向'],
      cta: '了解企业培训方案'
    },
    {
      id: 'case-ai-social',
      category: 'AI 社媒代运营 / 企业赋能',
      categoryBadge: 'AI 营销矩阵',
      categoryKey: 'enterprise',
      title: 'AI 社媒运营实践：《驻越经营实录》内容矩阵',
      subtitle: 'AI Content Operations for Vietnam Business and Policy Insights',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: '越桥集团正在建设以越南政策、企业经营、管理实务和市场进入为核心的 AI 内容运营体系，覆盖长图文、短内容、视频脚本、信息图、微信公众号、小红书、视频号、Facebook 等多平台内容生产与发布流程。',
      bullets: [
        'AI 辅助选题研究、政策法规梳理与信息核对',
        '深度长图文与社媒内容流水线生成',
        '可视化信息图谱卡片与短视频分镜脚本设计',
        '微信公众号、小红书、视频号、Facebook 多平台分发流程',
        '数据复盘、线索跟进与内容持续调优机制',
        '沉淀标准化代运营 SOP，可复制服务于客户品牌'
      ],
      context: '出海越南的企业普遍缺乏既了解越南本地市场与政策信息，又具备中文与越文内容创作及新媒体运营能力的团队。',
      challenge: '传统外包内容制作周期较长、沟通成本较高，且往往对中越跨境商业语境了解有限。',
      solution: '越桥团队搭建“AI 辅助生成 + 人工编辑审校”的内容工作流，将大模型应用于选题整理、政策多语言摘要、图文排版与多平台发布协同。',
      deliverables: [
        '以《驻越经营实录》为样本的中越商业资讯内容矩阵',
        '面向越南商业资讯整理的 AI 写作与排版 Prompt 模板库',
        '适合移动端阅读的可视化信息卡片模板',
        '可面向企业客户交付的社媒代运营标准作业流程（SOP）'
      ],
      strategicValue: '通过 AI 工具提升双语商业内容生产效率，帮助企业在目标市场建立持续稳定的内容输出能力。',
      relatedServices: ['AI 社媒代运营', '数字营销策划', '中越双语商业文案', '品牌出海本地化'],
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
      context: '越南各级学校与教育机构正加快推进数字化教学升级，需要在线教学与学习管理平台（LMS），同时需要贴合本地教学实际的培训与实施支持。',
      challenge: '单纯采购国际教育软件若缺乏本地化实施辅导、教师培训与教学流程设计，往往难以在日常课堂中真正发挥作用。',
      solution: '依托教育科技产品组合与技术解决方案合作生态，VietBridge Study 将 Blackboard / BB 平台能力与本地化实施、双语培训支持及学情追踪方案相结合，帮助学校推进数字化教学落地。',
      deliverables: [
        'Blackboard / BB 学习管理与混合式教学实施方案设计',
        '面向学校教师的数字化课程建设、在线作业与测验评估实训工作坊',
        '学习进度追踪与教学数据分析（Learning Analytics）报表配置指引',
        '由 VietBridge Study 提供的本地化实施协调与持续运营支持'
      ],
      strategicValue: '帮助越南学校将教育科技产品转化为日常可用的数字教学能力，支持从软件引入到常态化教学应用的衔接。',
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
      context: '越南众多公立学校、私立学校与国际学校希望升级传统教室体验，并引入体系化的 STEM、AI 与机器人创新课程以提升教学互动性。',
      challenge: '如果只单独采购硬件大屏或机器人教具，缺乏配套课程体系与经过培训的师资团队，往往难以形成持续的课堂教学应用。',
      solution: 'VietBridge Study 将 Radica Smart Classroom 智慧课堂方案与 STEM Learning 课程体系整合为可面向越南市场落地的教育科技方案，提供“空间升级+课程套件+师资实训”的组合支持。',
      deliverables: [
        'Radica Smart Classroom 智慧教室软硬件配置与互动教学场景方案',
        '分学段 STEM、AI 与机器人教学套件、配套教材及教师教案包',
        '面向学校教师的智慧课堂操作与 STEM 项目式教学法培训工作坊',
        '样板教室试点实施支持与青少年机器人科创活动指导'
      ],
      strategicValue: '通过软硬件与课程师资的组合配置，帮助学校建设可持续开展日常教学的智慧课堂与科技创新教育体系。',
      relatedServices: ['Radica Smart Classroom 智慧课堂', 'STEM / AI / 机器人教育方案', '教师实训工作坊', '样板教室建设支持'],
      cta: '了解 Radica 智慧课堂与 STEM 方案'
    },
    {
      id: 'case-resource-base',
      category: '市场准入 / 商务落地',
      categoryBadge: '产业资源数据库',
      categoryKey: 'enterprise',
      title: '中越企业服务资源库建设',
      subtitle: 'Building a Structured Enterprise Resource Base for China-Vietnam Business Services',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
      summary: '为支持越南市场进入、企业培训推广和企业服务落地，越桥集团正在建设覆盖胡志明市及周边省份的结构化企业资源库，整理中资企业、工业园区、商会信息与本地服务渠道。',
      bullets: [
        '梳理胡志明市、平阳、同奈等重点服务地区的中资制造与商贸企业信息',
        '整理工业园区基础条件、租金参考与行业分布数据库',
        '调研企业在劳动法规、税务、AI 办公与人才培训方面的需求',
        '对接本地法律、财税、报关与工程等专业服务机构资源',
        '为客户关系管理（CRM）与 AI 辅助商业拓展提供数据基础'
      ],
      context: '外资企业进入越南市场初期往往面临信息分散的问题，寻找合适的工业园区、厂房与本地专业服务渠道需要耗费较多调研时间。',
      challenge: '公开渠道的信息更新不及时、口径不一，企业在前期市场评估时需要更结构化的参考资料。',
      solution: '越桥团队通过公开信息梳理、行业交流与实地调研，持续整理越南南部工业带的企业名录、园区信息与服务机构渠道。',
      deliverables: [
        '在越企业行业分类名录与基础信息整理',
        '越南南部重点工业园区要素对比参考资料',
        '本地专业服务机构对接名录与协同沟通机制',
        '中越商务考察行程规划与企业走访对接支持'
      ],
      strategicValue: '为越桥集团的市场进入咨询、企业培训与跨境商务服务提供结构化的本地信息支持。',
      relatedServices: ['越南落地咨询', '工业园区信息比选', '商务考察接待', '中越企业商务对接'],
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
      title: 'China-Vietnam Cross-border Network',
      description: 'Connecting Chinese and Vietnamese enterprise communities, target partner institutions, business associations and local service channels.'
    },
    {
      id: 'why-2',
      title: 'Practical Implementation Support',
      description: 'We do not stop at planning. We support clients across key service regions from solution design to training and ongoing operation.'
    },
    {
      id: 'why-3',
      title: 'AI-native Service Design',
      description: 'AI is integrated into content operations, teaching systems, learning analytics, business workflows and institutional digital upgrades.'
    },
    {
      id: 'why-4',
      title: 'Enterprise + Education Dual Expertise',
      description: 'VietBridge combines business enablement and education enablement, connecting enterprise needs, school programs and bilingual talent development.'
    },
    {
      id: 'why-5',
      title: 'Solution Partner Ecosystem',
      description: 'We coordinate with education technology providers, target partner schools, industry trainers and local professional service firms.'
    },
    {
      id: 'why-6',
      title: 'From Product to Operation',
      description: 'We do not simply introduce products. We localize, integrate, train and support operations based on practical client needs.'
    }
  ],
  vi: [
    {
      id: 'why-1',
      title: 'Mạng lưới Kết nối Xuyên biên giới Trung - Việt',
      description: 'Kết nối cộng đồng doanh nghiệp, các trường học mục tiêu, hiệp hội ngành nghề và kênh dịch vụ bản địa giữa hai thị trường.'
    },
    {
      id: 'why-2',
      title: 'Hỗ trợ Triển khai Thực tiễn',
      description: 'Chúng tôi không dừng lại ở việc lập kế hoạch mà đồng hành cùng khách hàng từ thiết kế giải pháp, đào tạo đến vận hành thực tế.'
    },
    {
      id: 'why-3',
      title: 'Thiết kế Dịch vụ Tích hợp AI',
      description: 'Công nghệ AI được ứng dụng vào vận hành nội dung, hệ thống giảng dạy, phân tích học tập và quy trình làm việc của doanh nghiệp.'
    },
    {
      id: 'why-4',
      title: 'Chuyên môn Kép Doanh nghiệp & Giáo dục',
      description: 'VietBridge kết hợp giữa dịch vụ doanh nghiệp và giải pháp giáo dục, gắn kết nhu cầu nhân sự doanh nghiệp với chương trình đào tạo.'
    },
    {
      id: 'why-5',
      title: 'Hệ sinh thái Đối tác Giải pháp',
      description: 'Phối hợp cùng các nhà cung cấp công nghệ giáo dục, định hướng hợp tác trường học, giảng viên thực tiễn và đơn vị dịch vụ bản địa.'
    },
    {
      id: 'why-6',
      title: 'Từ Sản phẩm đến Vận hành Thực tế',
      description: 'Chúng tôi không chỉ giới thiệu sản phẩm mà tập trung bản địa hóa, tích hợp, đào tạo người dùng và hỗ trợ vận hành.'
    }
  ],
  zh: [
    {
      id: 'why-1',
      title: '中越跨境业务与教育连接网络',
      description: '连接中国与越南两国的企业社群、目标合作院校方向、行业商会与本地专业服务渠道。'
    },
    {
      id: 'why-2',
      title: '面向重点服务地区的落地执行支持',
      description: '我们不只停留于提供策略方案，更围绕重点服务地区与可支持的市场，协助客户开展方案部署、人员培训与日常运营。'
    },
    {
      id: 'why-3',
      title: 'AI 驱动的服务与工作流设计',
      description: '将 AI 工具融入内容运营流水线、教学管理系统、学情分析报告、企业日常协同与数字化教学升级中。'
    },
    {
      id: 'why-4',
      title: '“企业+教育”双业务线协同专长',
      description: '越桥融合企业赋能服务与教育科技解决方案，衔接企业岗位技能需求、院校课程建设与双语人才培养场景。'
    },
    {
      id: 'why-5',
      title: '多维度的技术与服务合作方向',
      description: '结合教育科技产品组合、目标院校合作方向、行业实务讲师与本地专业服务渠道，提供组合式项目支持。'
    },
    {
      id: 'why-6',
      title: '从产品引入走向持续运营支持',
      description: '我们不局限于软硬件工具引入，而是围绕客户实际需求，提供本地化适配、系统操作培训与持续运营辅导。'
    }
  ]
};

export const partnerLogos = [
  { name: 'EdTech Product Portfolio', category: 'Blackboard / BB · Radica · STEM', logoText: 'EdTech Portfolio', status: 'AVAILABLE PORTFOLIO' },
  { name: 'Target Higher Education Institutions', category: 'Cooperation Direction', logoText: 'Higher Ed Direction', status: 'IN PROGRESS' },
  { name: 'AI & Digital Solution Providers', category: 'Technology Ecosystem', logoText: 'AI Solutions', status: 'ECOSYSTEM DIRECTION' },
  { name: 'K12 & International School Direction', category: 'Target Institution Type', logoText: 'K12 & Intl Schools', status: 'IN PROGRESS' },
  { name: 'Cross-Border Business Associations', category: 'Enterprise Network Direction', logoText: 'Business Network', status: 'IN PROGRESS' },
  { name: 'Industrial Park & Local Service Channels', category: 'Market Entry Support', logoText: 'Service Channels', status: 'SUPPORTED MARKETS' }
];

export const contactInquiryAreas: Record<Language, { value: string; label: string }[]> = {
  en: [
    { value: 'enterprise-enablement', label: 'AI Enterprise Enablement' },
    { value: 'vietbridge-study', label: 'VietBridge Study · AI Education Enablement' },
    { value: 'blackboard-lms', label: 'Blackboard / BB Learning Management System' },
    { value: 'radica-smart-classroom', label: 'Radica Smart Classroom Solution' },
    { value: 'stem-education', label: 'STEM, AI & Robotics Learning Solutions' },
    { value: 'teacher-training-intl', label: 'Teacher Training & International Education Cooperation' },
    { value: 'corporate-training', label: 'Corporate Training & Operational Seminars' },
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
    { value: 'corporate-training', label: 'Đào tạo Doanh nghiệp & Hội thảo Quản trị' },
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
    { value: 'corporate-training', label: '企业培训与经营实务研讨' },
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
  status: 'PLANNED INITIATIVE' | 'PENDING VERIFICATION';
  evidenceNote: string;
  image: string;
  summary: string;
  proposalDetails: string[];
}

export const recentEvents: Record<Language, EventItem[]> = {
  en: [
    {
      id: 'ai-summit-2026',
      title: 'Event Proposal: China-Vietnam AI Enterprise Digital Operations Seminar',
      subtitle: 'Planned Topic: Scaling Social Media Operations & Digital Channels in Southeast Asia',
      date: 'Planned Window: 2026 (Schedule TBD)',
      location: 'Target Service Region: Ho Chi Minh City, Vietnam',
      status: 'PLANNED INITIATIVE',
      evidenceNote: 'Status: PLANNED INITIATIVE — Seminar concept & agenda proposal open for enterprise co-planning and pre-registration.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'A proposed thematic seminar designed for cross-border business owners and marketing teams to explore AI-assisted social media workflows, localized customer engagement, and multilingual content operations.',
      proposalDetails: [
        'Proposed Audience: Cross-border enterprise managers, brand operators, and marketing teams',
        'Planned Modules: AI content workflow design, multi-platform social media operations, and localized content adaptation',
        'Current Stage: Seminar proposal open for enterprise topic customization and pre-registration'
      ]
    },
    {
      id: 'smart-edtech-forum',
      title: 'Workshop Plan: Vietnam School Smart Classroom & LMS Solution Briefing',
      subtitle: 'Planned Topic: Blackboard / BB, Radica Smart Classroom & STEM Curriculum Introduction',
      date: 'Planned Window: 2026 (Schedule TBD)',
      location: 'Target Service Region: Hanoi / Ho Chi Minh City, Vietnam',
      status: 'PLANNED INITIATIVE',
      evidenceNote: 'Status: PLANNED INITIATIVE — Education solution briefing plan available for institutional consultation and custom demo scheduling.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: 'A planned education technology briefing program introducing Blackboard / BB learning management systems, Radica Smart Classroom configurations, and STEM/AI learning packages for schools and training institutions.',
      proposalDetails: [
        'Proposed Audience: School leaders, academic coordinators, and IT/curriculum teams',
        'Planned Modules: LMS blended teaching workflows, interactive smart classroom setup, and STEM/robotics courseware',
        'Current Stage: Available as a customizable institutional briefing or school workshop plan'
      ]
    },
    {
      id: 'fdi-compliance-cohort',
      title: 'Seminar Plan: Executive Management, Labor Law & Tax Practice Workshop',
      subtitle: 'Planned Topic: Practical Operations & Cross-Cultural HR Management for Enterprises in Vietnam',
      date: 'Planned Window: 2026 (Pending Verification / Schedule TBD)',
      location: 'Target Service Region: Ho Chi Minh City, Vietnam',
      status: 'PENDING VERIFICATION',
      evidenceNote: 'Status: PENDING VERIFICATION — Curriculum framework drafted; academic & practitioner speaker confirmations in progress.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: 'A planned closed-door seminar proposal focusing on Vietnamese labor regulations, tax workflows, and localized HR management for Chinese-invested and international enterprises operating in Vietnam.',
      proposalDetails: [
        'Proposed Audience: Enterprise general managers, HR directors, and finance/operations leads',
        'Planned Modules: Labor contract management, tax risk awareness, and cross-cultural team coordination',
        'Current Stage: Program proposal under preparation; open for enterprise in-house training or cohort pre-registration'
      ]
    }
  ],
  vi: [
    {
      id: 'ai-summit-2026',
      title: 'Phương án Hoạt động: Hội thảo Vận hành Nội dung Số & AI Doanh nghiệp Việt - Trung',
      subtitle: 'Chủ đề Dự kiến: Ứng dụng AI trong Tiếp thị Mạng xã hội & Kênh Số tại Đông Nam Á',
      date: 'Thời gian Dự kiến: Năm 2026 (Lịch cụ thể đang cập nhật)',
      location: 'Khu vực Dịch vụ Trọng điểm: TP. Hồ Chí Minh, Việt Nam',
      status: 'PLANNED INITIATIVE',
      evidenceNote: 'Trạng thái: PLANNED INITIATIVE — Đề án hội thảo đang mở đăng ký trước và tiếp nhận nhu cầu tùy chỉnh từ doanh nghiệp.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: 'Kế hoạch hội thảo chuyên đề dành cho doanh nghiệp xuyên biên giới và đội ngũ tiếp thị nhằm tìm hiểu quy trình sản xuất nội dung hỗ trợ bởi AI và vận hành kênh truyền thông số bản địa.',
      proposalDetails: [
        'Đối tượng dự kiến: Quản lý doanh nghiệp, phụ trách thương hiệu và đội ngũ marketing',
        'Nội dung dự kiến: Quy trình nội dung AI, vận hành đa nền tảng và bản địa hóa thông điệp',
        'Giai đoạn hiện tại: Đang tiếp nhận đăng ký quan tâm và xây dựng kế hoạch tổ chức'
      ]
    },
    {
      id: 'smart-edtech-forum',
      title: 'Kế hoạch Hội thảo: Giới thiệu Giải pháp Lớp học Thông minh & Hệ thống LMS',
      subtitle: 'Chủ đề Dự kiến: Blackboard / BB, Radica Smart Classroom & Chương trình STEM/AI',
      date: 'Thời gian Dự kiến: Năm 2026 (Lịch cụ thể đang cập nhật)',
      location: 'Khu vực Dịch vụ Trọng điểm: Hà Nội / TP. Hồ Chí Minh',
      status: 'PLANNED INITIATIVE',
      evidenceNote: 'Trạng thái: PLANNED INITIATIVE — Phương án giới thiệu giải pháp giáo dục dành cho các trường học có nhu cầu tư vấn.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: 'Phương án chương trình giới thiệu giải pháp công nghệ giáo dục bao gồm nền tảng Blackboard / BB, không gian Radica Smart Classroom và chương trình học tập STEM/AI dành cho các trường học.',
      proposalDetails: [
        'Đối tượng dự kiến: Ban giám hiệu, phụ trách học vụ và đội ngũ công nghệ thông tin nhà trường',
        'Nội dung dự kiến: Mô hình dạy học kết hợp trên LMS, cấu hình lớp học thông minh và học cụ STEM',
        'Giai đoạn hiện tại: Sẵn sàng sắp xếp buổi giới thiệu chuyên đề theo nhu cầu của từng trường'
      ]
    },
    {
      id: 'fdi-compliance-cohort',
      title: 'Đề án Hội thảo: Quản trị Thực tiễn, Pháp luật Lao động & Thuế cho Doanh nghiệp FDI',
      subtitle: 'Chủ đề Dự kiến: Vận hành Thực tế & Quản trị Nhân sự Đa văn hóa tại Việt Nam',
      date: 'Thời gian Dự kiến: Năm 2026 (Đang chờ xác minh / Cập nhật lịch)',
      location: 'Khu vực Dịch vụ Trọng điểm: TP. Hồ Chí Minh',
      status: 'PENDING VERIFICATION',
      evidenceNote: 'Trạng thái: PENDING VERIFICATION — Khung chương trình đã phác thảo; đang trong quá trình xác nhận giảng viên và đối tác.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: 'Phương án khóa bồi dưỡng và hội thảo chuyên đề tập trung vào quy định lao động, quy trình thuế và quản trị nhân sự bản địa dành cho các doanh nghiệp có vốn đầu tư nước ngoài tại Việt Nam.',
      proposalDetails: [
        'Đối tượng dự kiến: Giám đốc điều hành, giám đốc nhân sự và quản lý vận hành doanh nghiệp',
        'Nội dung dự kiến: Quản lý hợp đồng lao động, nhận diện rủi ro thuế và phối hợp đội ngũ Trung - Việt',
        'Giai đoạn hiện tại: Đang hoàn thiện kế hoạch tổ chức; nhận đăng ký đào tạo nội bộ hoặc giữ chỗ trước'
      ]
    }
  ],
  zh: [
    {
      id: 'ai-summit-2026',
      title: '活动方案：中越企业 AI 社媒运营与跨境数字化专题研讨会',
      subtitle: '策划主题：AI 内容工作流与东南亚多平台社媒渠道拓展',
      date: '规划档期：2026年（具体排期筹备中）',
      location: '重点服务地区：越南 · 胡志明市',
      status: 'PLANNED INITIATIVE',
      evidenceNote: '状态：PLANNED INITIATIVE（策划方案）— 本活动为研讨会策划方案，支持企业预约定制内训或报名后续排期。',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      summary: '面向跨境出海企业负责人与营销团队设计的专题研讨会方案，围绕 TikTok / Facebook / 微信公众号矩阵内容生产、本地化获客沟通与多语言内容工作流展开实务探讨。',
      proposalDetails: [
        '拟邀对象：跨境出海企业负责人、市场营销主管与内容运营团队',
        '策划模块：AI 商业内容流水线搭建、中越双语社媒矩阵运营、本地化受众触达策略',
        '当前进展：活动方案开放企业定制预约与意向登记（非已举办活动回顾）'
      ]
    },
    {
      id: 'smart-edtech-forum',
      title: '研讨会策划：越南学校智慧课堂与数字化教学解决方案交流会',
      subtitle: '策划主题：Blackboard / BB 教学平台、Radica 智慧课堂与 STEM 课程方案解析',
      date: '规划档期：2026年（具体排期筹备中）',
      location: '重点服务地区：越南 · 河内 / 胡志明市',
      status: 'PLANNED INITIATIVE',
      evidenceNote: '状态：PLANNED INITIATIVE（策划方案）— 本方案面向目标合作院校与教育机构开放专题交流与演示预约。',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: '面向越南学校与教育机构策划的教育科技方案交流活动，规划介绍 Blackboard / BB 在线教学与学习管理平台、Radica Smart Classroom 智慧课堂配置及 STEM/AI 课程体系的落地路径。',
      proposalDetails: [
        '拟邀对象：越南高校、K12 学校、国际学校及教育培训机构教学与信息化负责人',
        '策划模块：LMS 混合式教学设计、智慧教室软硬件配置方案、STEM 与 AI 课程师资培训路径',
        '当前进展：作为教育解决方案专题交流策划，支持按院校需求预约方案说明'
      ]
    },
    {
      id: 'fdi-compliance-cohort',
      title: '研讨会策划：驻越华资企业高级管理、劳动法规与财税实务研讨班',
      subtitle: '策划主题：在越企业日常用工管理、税务流程梳理与跨文化团队建设',
      date: '规划档期：2026年（PENDING VERIFICATION / 筹备核验中）',
      location: '重点服务地区：越南 · 胡志明市',
      status: 'PENDING VERIFICATION',
      evidenceNote: '状态：PENDING VERIFICATION（筹备核验中）— 课程大纲已完成设计，目标合作院校（如 UEF）及实务讲师邀约处于项目接洽与核验阶段。',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      summary: '面向在越华资企业管理层与 HR 负责人设计的周末管理实务研讨方案，拟围绕劳动合同管理、常见税务流程与风险防范、中越团队跨文化沟通提供结构化课程解析。',
      proposalDetails: [
        '拟邀对象：在越中资企业总经理、厂长、HR 负责人及财务行政主管',
        '策划模块：越南劳动法规实务要点、企业常见财税流程梳理、本地化人事管理与沟通技巧',
        '当前进展：研讨会方案筹备与讲师排期接洽中，开放企业内训定制与名额预留登记'
      ]
    }
  ]
};

export const whyUsData: Record<Language, { id: string; number: string; title: string; description: string }[]> = {
  en: [
    { id: 'why-1', number: '01', title: 'China-Vietnam Cross-border Network', description: 'Connecting Chinese and Vietnamese enterprise communities, target partner institutions, business associations and local service channels.' },
    { id: 'why-2', number: '02', title: 'Practical Implementation Support', description: 'We do not stop at planning. We support clients across key service regions from solution design to training and ongoing operation.' },
    { id: 'why-3', number: '03', title: 'AI-native Service Design', description: 'AI is integrated into content operations, teaching systems, learning analytics, business workflows and institutional digital upgrades.' },
    { id: 'why-4', number: '04', title: 'Enterprise + Education Dual Expertise', description: 'VietBridge combines business enablement and education enablement, connecting enterprise needs, school programs and bilingual talent development.' },
    { id: 'why-5', number: '05', title: 'Solution Partner Ecosystem', description: 'We coordinate with education technology providers, target partner schools, industry trainers and local professional service firms.' },
    { id: 'why-6', number: '06', title: 'From Product to Operation', description: 'We do not simply introduce products. We localize, integrate, train and support operations based on practical client needs.' }
  ],
  vi: [
    { id: 'why-1', number: '01', title: 'Mạng lưới Kết nối Xuyên biên giới Trung - Việt', description: 'Kết nối cộng đồng doanh nghiệp, các trường học mục tiêu, hiệp hội ngành nghề và kênh dịch vụ bản địa giữa hai thị trường.' },
    { id: 'why-2', number: '02', title: 'Hỗ trợ Triển khai Thực tiễn', description: 'Chúng tôi không dừng lại ở việc lập kế hoạch mà đồng hành cùng khách hàng từ thiết kế giải pháp, đào tạo đến vận hành thực tế.' },
    { id: 'why-3', number: '03', title: 'Kiến trúc Dịch vụ Tích hợp AI', description: 'Công nghệ AI được ứng dụng vào vận hành nội dung, hệ thống giảng dạy, phân tích học tập và quy trình làm việc của doanh nghiệp.' },
    { id: 'why-4', number: '04', title: 'Chuyên môn Kép Doanh nghiệp & Giáo dục', description: 'VietBridge kết hợp giữa dịch vụ doanh nghiệp và giải pháp giáo dục, gắn kết nhu cầu nhân sự doanh nghiệp với chương trình đào tạo.' },
    { id: 'why-5', number: '05', title: 'Hệ sinh thái Đối tác Giải pháp', description: 'Phối hợp cùng các nhà cung cấp công nghệ giáo dục, định hướng hợp tác trường học, giảng viên thực tiễn và đơn vị dịch vụ bản địa.' },
    { id: 'why-6', number: '06', title: 'Từ Sản phẩm đến Vận hành Thực tế', description: 'Chúng tôi không chỉ giới thiệu sản phẩm mà tập trung bản địa hóa, tích hợp, đào tạo người dùng và hỗ trợ vận hành.' }
  ],
  zh: [
    { id: 'why-1', number: '01', title: '中越跨境业务与教育连接网络', description: '连接中国与越南两国的企业社群、目标合作院校方向、行业商会与本地专业服务渠道。' },
    { id: 'why-2', number: '02', title: '面向重点服务地区的落地执行支持', description: '我们不只停留于提供策略方案，更围绕重点服务地区与可支持的市场，协助客户开展方案部署、人员培训与日常运营。' },
    { id: 'why-3', number: '03', title: 'AI 驱动的服务与工作流设计', description: '将 AI 工具融入内容运营流水线、教学管理系统、学情分析报告、企业日常协同与数字化教学升级中。' },
    { id: 'why-4', number: '04', title: '“企业+教育”双业务线协同专长', description: '越桥融合企业赋能服务与教育科技解决方案，衔接企业岗位技能需求、院校课程建设与双语人才培养场景。' },
    { id: 'why-5', number: '05', title: '多维度的技术与服务合作方向', description: '结合教育科技产品组合、目标院校合作方向、行业实务讲师与本地专业服务渠道，提供组合式项目支持。' },
    { id: 'why-6', number: '06', title: '从产品引入走向持续运营支持', description: '我们不局限于软硬件工具引入，而是围绕客户实际需求，提供本地化适配、系统操作培训与持续运营辅导。' }
  ]
};
