export type Language = 'en' | 'vi' | 'zh';

export interface NavItem {
  id: string;
  label: Record<Language, string>;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: 'hero', label: { en: 'Home', vi: 'Trang chủ', zh: '首页' }, href: '#hero' },
  { id: 'about', label: { en: 'About', vi: 'Giới thiệu', zh: '关于我们' }, href: '#about' },
  { id: 'ecosystem', label: { en: 'Solutions', vi: 'Hệ sinh thái', zh: '解决方案' }, href: '#ecosystem' },
  { id: 'programs', label: { en: 'Programs', vi: 'Chương trình', zh: '特色项目' }, href: '#programs' },
  { id: 'events', label: { en: 'Events', vi: 'Sự kiện', zh: '近期活动' }, href: '#events' },
  { id: 'partners', label: { en: 'Partners', vi: 'Đối tác', zh: '合作伙伴' }, href: '#partners' },
  { id: 'contact', label: { en: 'Contact', vi: 'Liên hệ', zh: '联系我们' }, href: '#contact' },
  { id: 'support', label: { en: 'Alliance Hub', vi: 'Cổng Liên minh', zh: '联盟中心' }, href: '#support' },
];

export const languagesList = [
  { code: 'en' as Language, label: 'English' },
  { code: 'vi' as Language, label: 'Tiếng Việt' },
  { code: 'zh' as Language, label: '中文' }
];

export const translationStrings = {
  hero: {
    tagline: {
      en: 'Bilateral Integration Platform',
      vi: 'Nền tảng tích hợp song phương',
      zh: '双边整合平台'
    },
    slogan: {
      en: 'Connecting Vietnam. Creating Opportunities.',
      vi: 'Kết nối Việt Nam. Kiến tạo cơ hội.',
      zh: '连接越南，共创机遇。'
    },
    description: {
      en: 'VietBridge Group is the premier high-trust international platform forging structured structural corridors between Vietnam’s expanding economy and elite global horizons. We engineer opportunities across global education, bilateral commercial entry, and high-level institutional alliances.',
      vi: 'VietBridge Group là nền tảng quốc tế uy tín hàng đầu kiến tạo các hành lang chiến lược giữa nền kinh tế đang phát triển mạnh mẽ của Việt Nam và các chân trời tinh hoa toàn cầu. Chúng tôi thúc đẩy các cơ hội về giáo dục quốc tế, thương mại song phương và liên minh tổ chức cấp cao.',
      zh: 'VietBridge Group 是首屈一指的高信誉国际平台，在越南蓬勃发展的经济与全球精英视野之间架起结构化的战略通道。我们在全球教育、双边商业准入和高层机构联盟领域，为您精准策划与落地重大机遇。'
    },
    ctaPrimary: {
      en: 'Forge Connection',
      vi: 'Thiết lập liên kết',
      zh: '开启战略对接'
    },
    ctaSecondary: {
      en: 'Explore Ecosystem',
      vi: 'Khám phá Hệ sinh thái',
      zh: '探索生态系统'
    }
  },
  whoWeAre: {
    tagline: {
      en: 'Who We Are',
      vi: 'Chúng tôi là ai',
      zh: '关于我们'
    },
    title: {
      en: 'An International Gateway Built on Uncompromising Trust',
      vi: 'Cổng kết nối quốc tế được xây dựng trên sự tin cậy tuyệt đối',
      zh: '建立在无可妥协的信任之上的国际门户'
    },
    storyPart1: {
      en: 'We operate as an international gateway for long-term growth and partnership. VietBridge Group was established as an integration platform — a structural catalyst designed to connect Vietnam with elite global horizons. Our purpose is clear: we build strategic corridors, cultivate absolute operational trust, and enable partnerships that define the future.',
      vi: 'Chúng tôi vận hành như một cổng kết nối quốc tế vì sự tăng trưởng và quan hệ hợp tác lâu dài. VietBridge Group được thành lập như một nền tảng tích hợp — chất xúc tác chiến lược để liên kết Việt Nam với các chân trời tinh hoa toàn cầu. Sứ mệnh của chúng tôi rất rõ ràng: kiến tạo các hành lang chiến lược, vun đắp sự tin cậy vận hành tuyệt đối và thúc đẩy các mối quan hệ đối tác định hình tương lai.',
      zh: '我们作为致力于长期增长与战略协作的国际门户运行。VietBridge Group 被确立为一个整合平台——一个旨在将越南与全球精英视野深度联结的结构性催化剂。我们的使命非常明确：我们构建战略通道，培育绝对的运营互信，并赋能定义未来的伙伴关系。'
    },
    storyPart2: {
      en: 'By connecting high-potential talent with world-class academia, and building robust corridors for multinational industrial groups, we enable seamless cross-border opportunities. We believe that global progress is driven by deep alignment, premium discretion, and shared growth.',
      vi: 'Bằng việc kết nối các tài năng tiềm năng cao với nền học thuật đẳng cấp thế giới và kiến tạo các hành lang vững chắc cho các tập đoàn công nghiệp đa quốc gia, chúng tôi mở ra những cơ hội xuyên biên giới liền mạch. Chúng tôi tin rằng sự phát triển toàn cầu được thúc đẩy bởi sự đồng bộ sâu sắc, sự bảo mật cao nhất và sự tăng trưởng chung.',
      zh: '通过将高潜力人才与世界级学术殿堂深度联结，并为跨国工业集团构建稳固的合作走廊，我们创造了顺畅的跨境机遇。我们坚信，全球化的进展源自深度的战略对齐、极高的专业素养以及共赢的持续增长。'
    },
    quote: {
      en: '"The quality of a bridge is defined not by its aesthetics, but by the trust of those who cross it. We construct paths for generations to come."',
      vi: '"Chất lượng của một cây cầu không được định nghĩa bởi vẻ bề ngoài, mà bởi niềm tin của những người bước qua nó. Chúng tôi kiến tạo con đường cho các thế hệ tương lai."',
      zh: '"桥梁的品质不取决于其外在美学，而取决于行者的信任。我们正在为子孙后代铺就光明的前行之路。"'
    }
  },
  ecosystem: {
    tagline: {
      en: 'Our Ecosystem',
      vi: 'Hệ sinh thái của chúng tôi',
      zh: '我们的生态系统'
    },
    title: {
      en: 'Structured Verticals Connecting Horizons',
      vi: 'Các mảng chiến lược kết nối tầm nhìn',
      zh: '连接全球视野的结构化版图'
    },
    description: {
      en: 'Our operations are carefully divided into three synergistic divisions, ensuring deep domain expertise and seamless cross-border execution.',
      vi: 'Hoạt động của chúng tôi được phân chia chặt chẽ thành ba lĩnh vực tương hỗ, đảm bảo chuyên môn sâu rộng và khả năng thực thi xuyên biên giới hiệu quả.',
      zh: '我们的业务精心划分为三大协同板块，确保深厚的行业专长与无缝的跨境执行力。'
    }
  },
  programs: {
    tagline: {
      en: 'Featured Programs',
      vi: 'Chương trình tiêu biểu',
      zh: '特色项目'
    },
    title: {
      en: 'Shaping Global Trajectories',
      vi: 'Định hình những quỹ đạo toàn cầu',
      zh: '塑造全球发展轨迹'
    },
    description: {
      en: 'Explore our key structural initiatives that are actively yielding tangible academic and industrial progress for institutions and enterprise.',
      vi: 'Khám phá các sáng kiến thực tiễn đang đóng góp tích cực vào tiến trình phát triển học thuật và công nghiệp cho các tổ chức và doanh nghiệp.',
      zh: '了解我们关键的结构性举措。这些举措正积极在学术、产业及企业全球化进程中，为合作机构带来实实在在的跨越式进展。'
    }
  },
  events: {
    tagline: {
      en: 'Recent Events',
      vi: 'Sự kiện gần đây',
      zh: '近期活动'
    },
    title: {
      en: 'Fostering High-Level Strategic Dialogue',
      vi: 'Thúc đẩy đối thoại chiến lược cấp cao',
      zh: '倡导高层战略对话'
    },
    description: {
      en: 'We curate elite executive forums, bilateral trade delegations, and academic summits to facilitate face-to-face trust and action.',
      vi: 'Chúng tôi tổ chức các diễn đàn điều hành tinh hoa, phái đoàn thương mại song phương và các hội nghị thượng đỉnh học thuật nhằm củng cố lòng tin trực tiếp.',
      zh: '我们精心筹办精英管理论坛、双边贸易代表团和学术峰会，以促进面对面的信任建立和务实合作。'
    }
  },
  partners: {
    tagline: {
      en: 'Strategic Partners',
      vi: 'Đối tác chiến lược',
      zh: '战略合作伙伴'
    },
    title: {
      en: 'Aligned with Elite Global Institutions',
      vi: 'Đồng hành cùng các tổ chức tinh hoa toàn cầu',
      zh: '与全球顶尖机构深度结盟'
    },
    description: {
      en: 'Trust is built through association. We cooperate exclusively with accredited world-class universities, sovereign compliance bodies, and Fortune 500 conglomerates.',
      vi: 'Niềm tin được xây dựng từ sự đồng hành. Chúng tôi hợp tác độc quyền với các trường đại học hàng đầu thế giới, các cơ quan pháp lý có thẩm quyền và tập đoàn Fortune 500.',
      zh: '信任源自结盟。我们仅与获得权威认证的世界级大学、主权合规机构以及财富 500 强企业开展深度、排他的战略合作。'
    }
  },
  contact: {
    tagline: {
      en: 'Strategic Intake',
      vi: 'Tiếp nhận yêu cầu chiến lược',
      zh: '战略对接'
    },
    title: {
      en: 'Forge Strategic Connection',
      vi: 'Kiến tạo liên kết chiến lược',
      zh: '开启战略对接'
    },
    description: {
      en: 'We build structural alignment to activate high-impact partnerships. Connect securely with our managing partners across our Ho Chi Minh, Beijing, or London desks to explore shared growth.',
      vi: 'Chúng tôi kiến tạo sự đồng bộ chiến lược để thúc đẩy các quan hệ hợp tác có tầm ảnh hưởng lớn. Kết nối bảo mật với các Thành viên điều hành tại văn phòng TP. Hồ Chí Minh, Bắc Kinh, hoặc London để cùng thúc đẩy sự tăng trưởng.',
      zh: '我们构建结构性的战略对齐，以激活具有高影响力的伙伴关系。欢迎与我们胡志明市、北京或伦敦办事处的合伙人建立安全的保密对接，共同探索增长机遇。'
    }
  },
  support: {
    tagline: {
      en: 'Alliance Network',
      vi: 'Mạng lưới đối tác',
      zh: '伙伴关系网络'
    },
    title: {
      en: 'Client & Scholar Portals',
      vi: 'Cổng thông tin khách hàng & học giả',
      zh: '客户与学者服务门户'
    },
    description: {
      en: 'We connect global organizations, synchronize dual-degree initiatives, and enable sustained cross-border growth.',
      vi: 'Chúng tôi kết nối các tổ chức toàn cầu, đồng bộ hóa các sáng kiến bằng kép và thúc đẩy sự tăng trưởng xuyên biên giới bền vững.',
      zh: '我们联结全球组织，同步双学位合作倡议，并助力持久的跨境增长。'
    }
  }
};

export const corporatePillars: Record<Language, { id: string; title: string; subtitle: string; description: string; bulletPoints: string[]; image: string }[]> = {
  en: [
    {
      id: 'education',
      title: 'Global Education Bridges',
      subtitle: 'Connecting Vietnam’s premier talent with top-tier global institutions.',
      description: 'We establish seamless academic partnerships, dual-degree pathways, and executive learning models between Vietnam’s elite secondary/higher-ed schools and world-renowned global universities.',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'Bilateral academic curriculum alignment and accreditation translation.',
        'Exclusive partnerships with top 100 global institutions in the US, UK, and Australia.',
        'High-tier executive education programs for emerging Vietnamese business leaders.',
        'Comprehensive preparation pathways targeting high-potential students.'
      ]
    },
    {
      id: 'business',
      title: 'Bilateral Trade & Market Entry',
      subtitle: 'Unlocking bilateral corridors for international capital and high-growth markets.',
      description: 'We advise multinational organizations on strategic entry into Vietnam’s booming consumer, industrial, and digital economies, while facilitating global expansion for Vietnam’s leading conglomerates.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'End-to-end regulatory compliance, market intelligence, and entity structuring.',
        'High-value manufacturing supply chain diversification and localization.',
        'Bilateral deal sourcing, strategic joint ventures, and capital advisory.',
        'B2B matching and distributor network development across Southeast Asia.'
      ]
    },
    {
      id: 'alliances',
      title: 'Strategic Institutional Alliances',
      subtitle: 'Coordinating high-level dialogues to establish structural bridges.',
      description: 'VietBridge serves as a trusted intermediary facilitating high-impact dialogue among government entities, economic development boards, research institutions, and multinational coalitions.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'Bi-annual inter-regional economic and trade facilitation summits.',
        'Establishment of joint research initiatives and industrial parks.',
        'Private policy-briefing forums for sovereign wealth funds and global offices.',
        'Cross-border digital economy trade framework advisory.'
      ]
    }
  ],
  vi: [
    {
      id: 'education',
      title: 'Cầu nối Giáo dục Toàn cầu',
      subtitle: 'Kết nối những tài năng hàng đầu Việt Nam với các tổ chức giáo dục đẳng cấp thế giới.',
      description: 'Chúng tôi thiết lập các chương trình liên kết học thuật toàn diện, lộ trình cấp bằng đôi và mô hình đào tạo quản lý cấp cao giữa các trường học danh tiếng tại Việt Nam và các đại học hàng đầu thế giới.',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'Đồng bộ hóa khung chương trình giảng dạy và chuyển đổi tín chỉ song phương.',
        'Quan hệ đối tác độc quyền với Top 100 đại học danh tiếng tại Mỹ, Anh, và Úc.',
        'Chương trình đào tạo điều hành cấp cao dành cho thế hệ lãnh đạo trẻ Việt Nam.',
        'Hệ thống chuẩn bị kỹ năng chuyên sâu hướng tới học sinh tiềm năng cao.'
      ]
    },
    {
      id: 'business',
      title: 'Thương mại & Xâm nhập Thị trường Song phương',
      subtitle: 'Mở khóa các hành lang tài chính quốc tế và thị trường tăng trưởng cao.',
      description: 'Chúng tôi tư vấn cho các tập đoàn đa quốc gia về lộ trình gia nhập thị trường tiêu dùng, sản xuất và kinh tế số bùng nổ của Việt Nam, đồng thời đồng hành cùng các tập đoàn lớn của Việt Nam vươn ra quốc tế.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'Hỗ trợ pháp lý toàn diện, nghiên cứu thị trường và cấu trúc pháp nhân sở tại.',
        'Tối ưu hóa và bản địa hóa chuỗi cung ứng sản xuất giá trị cao.',
        'Tìm kiếm nguồn vốn, liên doanh chiến lược và tư vấn huy động vốn.',
        'Kết nối B2B và phát triển hệ thống phân phối bền vững tại Đông Nam Á.'
      ]
    },
    {
      id: 'alliances',
      title: 'Liên minh Chiến lược Liên Tổ chức',
      subtitle: 'Điều phối các cuộc đối thoại cấp cao nhằm thiết lập cấu trúc cầu nối vững chắc.',
      description: 'VietBridge đóng vai trò là bên trung gian uy tín thúc đẩy các cuộc đối thoại chiến lược giữa các cơ quan chính phủ, ủy ban phát triển kinh tế, viện nghiên cứu và các liên minh đa quốc gia.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        'Diễn đàn kết nối đầu tư và tạo thuận lợi thương mại liên vùng hai năm một lần.',
        'Hỗ trợ thành lập các trung tâm nghiên cứu chung và khu công nghiệp công nghệ cao.',
        'Tổ chức các buổi cập nhật chính sách kín cho các quỹ tài chính chủ quyền.',
        'Tư vấn khung chiến lược thương mại kinh tế số xuyên biên giới.'
      ]
    }
  ],
  zh: [
    {
      id: 'education',
      title: '全球教育之桥',
      subtitle: '助力越南顶尖人才直通国际一流学术殿堂。',
      description: '我们在越南精英中高等教育学府与享誉全球的世界百强名校之间，构建无缝的学术伙伴关系、双学位联合培养路径以及高管进修模式。',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        '双边课程体系对齐、学术评估及学分转换互认机制。',
        '与美、英、澳等地顶尖百强名校建立独家及深度战略合作。',
        '针对越南高成长企业决策层定制的高端国际高管研修项目。',
        '为高潜力菁英学子量身打造的全方位国际化学术预科培养体系。'
      ]
    },
    {
      id: 'business',
      title: '双边贸易与市场准入',
      subtitle: '拓宽资本引入通道，赋能高增长潜力市场的纵深落地。',
      description: '我们为国际跨国公司进入越南蓬勃发展的消费、工业及数字经济市场提供全流程战略咨询，同时服务于越南头部集团企业的海外战略扩张。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        '全方位法律合规辅导、本土化市场情报研究及实体架构重组。',
        '高附加值制造产业链的优化、多元化布局及本地化供应链落地。',
        '跨国并购标的搜寻、双边合资架构设立及跨境资本对接咨询。',
        '东南亚本土化B2B商务配对与高价值分销网络搭建。'
      ]
    },
    {
      id: 'alliances',
      title: '战略性机构多边联盟',
      subtitle: '协调高层次双边对话，构建坚固的体制级合作走廊。',
      description: 'VietBridge 充当备受推崇的战略级中介，积极推动各政府机构、经济开发署、高水平科研院校和跨国多边集团之间的高层务实对话。',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      bulletPoints: [
        '每两年举办一次的区域间高级经济、贸易促进与投资协作峰会。',
        '协助创建多边联合研发实验室、跨国高新技术产业园区。',
        '为国家主权基金、全球家族办公室提供深度私密政策研讨机制。',
        '跨境数字经济合作框架、区块链供应链合规应用战略咨询。'
      ]
    }
  ]
};

export const featuredPrograms: Record<Language, { id: string; category: string; title: string; description: string; metric: string; label: string; image: string }[]> = {
  en: [
    {
      id: 'prog-1',
      category: 'Academic Alignment',
      title: 'Elite Dual-Degree Engineering Framework',
      description: 'Establishing an accredited bachelors program linking Vietnams top technical university with an elite UK research institution, specializing in clean energy and high-performance materials.',
      metric: '350+',
      label: 'Scholars Recruited Annually',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-2',
      category: 'Executive Excellence',
      title: 'ASEAN Executive Leadership Exchange',
      description: 'A cohort-based executive training track organized in cooperation with Singapore’s premier business faculties, preparing high-potential corporate officers for cross-border mergers.',
      metric: '1,200+',
      label: 'Executive Alumni Developed',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-3',
      category: 'Industrial Talent Pipeline',
      title: 'Semiconductor Industry Preparation Track',
      description: 'A modern, private-public training program bridging advanced electronics conglomerates with regional tech academies, building localized chip fabrication competency.',
      metric: '$85M',
      label: 'Direct Infrastructure Support',
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80'
    }
  ],
  vi: [
    {
      id: 'prog-1',
      category: 'Hợp tác Học thuật',
      title: 'Khung Chương trình Bằng đôi Kỹ thuật Elite',
      description: 'Thiết lập chương trình kỹ sư liên kết chính thức giữa đại học kỹ thuật hàng đầu Việt Nam và một viện nghiên cứu danh giá của Anh, chuyên sâu về năng lượng sạch.',
      metric: '350+',
      label: 'Học giả Tuyển chọn Mỗi năm',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-2',
      category: 'Lãnh đạo Xuất sắc',
      title: 'Chương trình Trao đổi Điều hành ASEAN',
      description: 'Khóa đào tạo điều hành cấp cao kết hợp cùng các khoa quản trị danh tiếng của Singapore, chuẩn bị năng lực quản lý thương vụ mua bán sáp nhập xuyên biên giới.',
      metric: '1.200+',
      label: 'Cựu học viên Lãnh đạo cấp cao',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-3',
      category: 'Nhân lực Bán dẫn',
      title: 'Hành lang Đào tạo Công nghệ Bán dẫn',
      description: 'Chương trình hợp tác công-tư chuẩn bị nhân lực bán dẫn, kết nối các tập đoàn điện tử hàng đầu với các trường đào tạo công nghệ, xây dựng năng lực sản xuất nội địa.',
      metric: '$85M',
      label: 'Hỗ trợ Cơ sở Vật chất Trực tiếp',
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80'
    }
  ],
  zh: [
    {
      id: 'prog-1',
      category: '学术合作与互认',
      title: '精英工程学双学位学位联合培养',
      description: '在越南顶尖理工科国家大学与英国著名研究型大学之间，创立完全互认的联合学士项目，主攻清洁能源与先进半导体材料工程。',
      metric: '350+',
      label: '年度入选精英学子',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-2',
      category: '高管卓越力培养',
      title: '东盟高成长高管领导力发展专案',
      description: '与新加坡超一流商学院、国际管理发展机构深度合作，为高成长中的企业输送具备跨国战略视野、熟谙跨境并购与资本重组的领军人才。',
      metric: '1,200+',
      label: '杰出企业家高管校友',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prog-3',
      category: '半导体高端产业带',
      title: '半导体及微电子人才培育走廊',
      description: '联合大型跨国电子和芯片龙头集团与区域高科技学院，推出产学研深度融合的培训计划，助力越南本地建立自主、高水平的微芯片制造工艺储备。',
      metric: '$85M',
      label: '直接撬动基础配套基金',
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const recentEvents: Record<Language, { id: string; date: string; title: string; subtitle: string; location: string; summary: string; image: string }[]> = {
  en: [
    {
      id: 'evt-1',
      date: 'OCTOBER 2025',
      title: 'The Europe-Vietnam Academic Summit',
      subtitle: 'Harmonizing Educational Frameworks for 2026',
      location: 'Ho Chi Minh City, Bitexco Financial Tower',
      summary: 'Convening over 40 University Chancellors from the UK and Europe alongside Vietnamese educational ministry heads to draft structured credit-equivalency programs.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt-2',
      date: 'JANUARY 2026',
      title: 'Bilateral Inbound Supply Chain Forum',
      subtitle: 'Securing High-Growth Electronics Clusters',
      location: 'Beijing Desk, China World Tower & Online',
      summary: 'An executive roundtable bringing together multinational semiconductor chiefs and industrial park planners from Northern Vietnam, streamlining entry-compliance paths.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80'
    }
  ],
  vi: [
    {
      id: 'evt-1',
      date: 'THÁNG 10 2025',
      title: 'Hội nghị Thượng đỉnh Giáo dục Châu Âu - Việt Nam',
      subtitle: 'Đồng bộ hóa khung chương trình đào tạo niên khóa 2026',
      location: 'TP. Hồ Chí Minh, Tháp tài chính Bitexco',
      summary: 'Quy quy hơn 40 Hiệu trưởng từ các đại học danh tiếng của Anh & Châu Âu cùng Bộ Giáo dục Việt Nam để dự thảo hệ thống tương đương tín chỉ quốc tế.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt-2',
      date: 'THÁNG 01 2026',
      title: 'Diễn đàn Chuỗi Cung ứng Song phương ASEAN',
      subtitle: 'Bảo đảm hành lang linh kiện điện tử chất lượng cao',
      location: 'Văn phòng Bắc Kinh & Trực tuyến',
      summary: 'Hội nghị bàn tròn thu hút các nhà lãnh đạo tập đoàn bán dẫn toàn cầu và ban quản lý khu công nghiệp miền Bắc Việt Nam, giải quyết các thủ tục cấp phép.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80'
    }
  ],
  zh: [
    {
      id: 'evt-1',
      date: '2025年10月',
      title: '欧洲 - 越南高等教育合作峰会',
      subtitle: '对齐 2026 年度多边教学合作与学分互认框架',
      location: '越南胡志明市 · 金融塔高管中心',
      summary: '汇聚了来自英国和欧陆 40 余所名校校长、学术委员会主席以及越南教育主管部门官员，就双边高等教育同等学力认证书起草核心纪要。',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt-2',
      date: '2026年1月',
      title: '双边高科技供应链保障高峰论坛',
      subtitle: '筑牢先进电子制造及高增长半导体产业带集群',
      location: '北京国贸大厦高管中心 / 线上同步',
      summary: '召集国际半导体与精密元器件生产巨头以及越南北部省份高新技术开发园区规划层开展闭门讨论，极大缩短跨国合规设立周期。',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const corporatePartners = [
  { name: 'University of Oxford Alignment', logo: 'Oxford Uni' },
  { name: 'National University of Singapore', logo: 'NUS Singapore' },
  { name: 'INSEAD Business Faculty', logo: 'INSEAD' },
  { name: 'London School of Economics', logo: 'LSE Academics' },
  { name: 'Enterprise SG Compliance', logo: 'Enterprise SG' },
  { name: 'Vietnam National University', logo: 'VNU Vietnam' }
];


