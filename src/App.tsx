import { useState, useEffect } from 'react';
import Header, { ActivePage } from './components/Header';
import Hero from './components/Hero';
import TwoEngines from './components/TwoEngines';
import EnterpriseEnablement from './components/EnterpriseEnablement';
import EducationEnablement from './components/EducationEnablement';
import FeaturedPrograms from './components/FeaturedPrograms';
import WhoWeAre from './components/WhoWeAre';
import WhyVietBridge from './components/WhyVietBridge';
import Leadership from './components/Leadership';
import EditorialQuote from './components/EditorialQuote';
import Stats from './components/Stats';
import InteractiveMap from './components/InteractiveMap';
import RecentEvents from './components/RecentEvents';
import Partners from './components/Partners';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import EnterprisePage from './components/EnterprisePage';
import EducationPage from './components/EducationPage';
import CasesPage from './components/CasesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import { Language } from './data';
import { ArrowLeft, Compass } from 'lucide-react';

// Map pathname to ActivePage
const pathnameToPage = (pathname: string): ActivePage => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  switch (clean) {
    case '/':
      return 'home';
    case '/enterprise-enablement':
      return 'enterprise';
    case '/education-enablement':
      return 'education';
    case '/case-studies':
      return 'cases';
    case '/about':
      return 'about';
    case '/contact':
      return 'contact';
    case '/privacy-policy':
      return 'privacy';
    case '/terms-of-use':
      return 'terms';
    default:
      return 'not-found';
  }
};

// Map ActivePage to pathname
const pageToPathname = (page: ActivePage): string => {
  switch (page) {
    case 'home':
      return '/';
    case 'enterprise':
      return '/enterprise-enablement';
    case 'education':
      return '/education-enablement';
    case 'cases':
      return '/case-studies';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'privacy':
      return '/privacy-policy';
    case 'terms':
      return '/terms-of-use';
    default:
      return '/404';
  }
};

// Route-specific SEO metadata (title, description, canonical)
const getRouteSeo = (page: ActivePage, lang: Language, pathname: string) => {
  const baseUrl = 'https://vietbridge-group.ai.studio';
  const canonicalPath = page === 'not-found' ? pathname : pageToPathname(page);
  const canonical = `${baseUrl}${canonicalPath}`;

  const seoMap: Record<ActivePage, Record<Language, { title: string; description: string }>> = {
    home: {
      zh: {
        title: '越桥集团 VietBridge Group | 越南与亚洲 AI 企业赋能与教育科技平台',
        description: '越桥集团面向越南、中国及亚洲重点服务市场，提供 AI 社媒代运营、企业实务培训、越南落地咨询，以及 VietBridge Study（Blackboard / BB、Radica 智慧课堂、STEM/AI）教育科技解决方案。'
      },
      en: {
        title: 'VietBridge Group | AI Enterprise & Education Enablement in Vietnam',
        description: 'VietBridge Group helps enterprises, schools and institutions in Vietnam and Asia with AI-powered enterprise services, corporate training, education technology, smart classrooms, and STEM education.'
      },
      vi: {
        title: 'VietBridge Group | Nền tảng Khai phóng Doanh nghiệp & Giáo dục AI tại Việt Nam',
        description: 'VietBridge Group hỗ trợ doanh nghiệp, trường học và tổ chức tại Việt Nam nâng cấp vận hành bằng AI, đào tạo doanh nghiệp, lớp học thông minh Radica, Blackboard / BB và STEM.'
      }
    },
    enterprise: {
      zh: {
        title: 'AI 企业赋能方案 | 社媒代运营、企业培训与越南落地咨询 - 越桥集团',
        description: '越桥集团 AI 企业赋能产线，面向驻越及计划进入越南的企业提供 AI 社媒代运营、管理实务研讨培训、越南市场进入咨询、企业出海与双语人才培养方案。'
      },
      en: {
        title: 'AI Enterprise Enablement | Marketing, Training & Market Entry - VietBridge Group',
        description: 'Explore VietBridge Group AI Enterprise Enablement solutions including AI social media operations, corporate training, Vietnam market entry consulting, and talent development.'
      },
      vi: {
        title: 'Khai phóng Doanh nghiệp bằng AI | Tiếp thị, Đào tạo & Tư vấn Thị trường - VietBridge Group',
        description: 'Giải pháp doanh nghiệp của VietBridge Group bao gồm vận hành mạng xã hội AI, đào tạo quản trị thực tiễn, tư vấn thâm nhập thị trường Việt Nam và phát triển nhân lực.'
      }
    },
    education: {
      zh: {
        title: 'VietBridge Study | AI 教育赋能、Blackboard / BB 与 Radica 智慧课堂方案',
        description: 'VietBridge Study 面向越南学校、高校与教育机构，引入并落地 Blackboard / BB 在线教学管理平台、Radica Smart Classroom 智慧课堂、STEM/AI 机器人课程与教师培训方案。'
      },
      en: {
        title: 'VietBridge Study | AI Education Enablement, Blackboard / BB & Smart Classrooms',
        description: 'VietBridge Study brings AI-powered teaching, Blackboard / BB LMS, Radica Smart Classroom solutions, STEM/AI learning programs, and teacher training to schools in Vietnam.'
      },
      vi: {
        title: 'VietBridge Study | Giải pháp Giáo dục AI, Blackboard / BB & Lớp học Thông minh Radica',
        description: 'VietBridge Study mang các giải pháp giảng dạy AI, nền tảng LMS Blackboard / BB, lớp học thông minh Radica, STEM/AI và đào tạo giáo viên đến các trường học tại Việt Nam.'
      }
    },
    cases: {
      zh: {
        title: '代表项目与解决方案案例 | 企业培训策划、AI 内容与教育科技 - 越桥集团',
        description: '查看越桥集团在驻越企业管理研讨项目策划、AI 社媒内容工厂、Blackboard / BB 教育平台本地化及 Radica 智慧课堂+STEM 方案组合的代表性案例。'
      },
      en: {
        title: 'Representative Projects & Solution Cases | Enterprise & Education - VietBridge Group',
        description: 'Review representative project plans and solution portfolios from VietBridge Group across executive seminar planning, AI content operations, and VietBridge Study smart education.'
      },
      vi: {
        title: 'Dự án & Phương án Giải pháp Tiêu biểu | Doanh nghiệp & Giáo dục - VietBridge Group',
        description: 'Khám phá các dự án và phương án giải pháp tiêu biểu của VietBridge Group về hội thảo quản trị, vận hành nội dung AI và công nghệ giáo dục VietBridge Study.'
      }
    },
    about: {
      zh: {
        title: '关于越桥集团 | 团队背景、重点服务地区与合作方向 - VietBridge Group',
        description: '了解越桥集团（VietBridge Group）双产线业务定位、跨行业实践团队、胡志明市与河内等重点服务地区覆盖，以及目标合作院校类型与技术生态方向。'
      },
      en: {
        title: 'About VietBridge Group | Mission, Key Service Regions & Collaboration Directions',
        description: 'Learn about VietBridge Group, our dual business lines in AI enterprise and education enablement, key service regions in Vietnam, and target partner directions.'
      },
      vi: {
        title: 'Về VietBridge Group | Định hướng Dịch vụ, Khu vực Trọng điểm & Hợp tác',
        description: 'Tìm hiểu về VietBridge Group, hai trụ cột khai phóng doanh nghiệp và giáo dục bằng AI, các khu vực dịch vụ trọng điểm tại Việt Nam và định hướng đối tác.'
      }
    },
    contact: {
      zh: {
        title: '联系合作与方案咨询 | 越桥集团 VietBridge Group',
        description: '联系越桥集团（liuyan@vietbridge.one），咨询 AI 企业赋能、企业培训、越南市场进入调研或 VietBridge Study 智慧课堂与 LMS 教育方案。'
      },
      en: {
        title: 'Contact & Consultation Inquiry | VietBridge Group',
        description: 'Connect with VietBridge Group at liuyan@vietbridge.one to inquire about AI enterprise enablement, corporate training, or VietBridge Study education solutions.'
      },
      vi: {
        title: 'Liên hệ & Tư vấn Hợp tác | VietBridge Group',
        description: 'Kết nối với VietBridge Group qua liuyan@vietbridge.one để nhận tư vấn về giải pháp AI doanh nghiệp, đào tạo hoặc giải pháp giáo dục VietBridge Study.'
      }
    },
    privacy: {
      zh: {
        title: '隐私政策 | 越桥集团 VietBridge Group',
        description: '查阅越桥集团（VietBridge Group）网站隐私政策，了解我们如何收集、使用及保护您提交的业务咨询联系信息。'
      },
      en: {
        title: 'Privacy Policy | VietBridge Group',
        description: 'Read the VietBridge Group Privacy Policy to understand how we handle and protect information submitted through our consultation inquiry channels.'
      },
      vi: {
        title: 'Chính Sách Bảo Mật | VietBridge Group',
        description: 'Tìm hiểu Chính sách Bảo mật của VietBridge Group về cách thức thu thập, sử dụng và bảo vệ thông tin liên hệ tư vấn của quý vị.'
      }
    },
    terms: {
      zh: {
        title: '网站使用条款 | 越桥集团 VietBridge Group',
        description: '查阅越桥集团（VietBridge Group）网站使用条款、信息性质说明、非正式法律财税意见声明及知识产权条款。'
      },
      en: {
        title: 'Terms of Use | VietBridge Group',
        description: 'Review the Terms of Use for the VietBridge Group website, including informational scope, non-legal advice disclaimers, and intellectual property terms.'
      },
      vi: {
        title: 'Điều Khoản Sử Dụng | VietBridge Group',
        description: 'Xem Điều khoản Sử dụng website của VietBridge Group, bao gồm phạm vi thông tin, tuyên bố miễn trừ và quyền sở hữu trí tuệ.'
      }
    },
    'not-found': {
      zh: {
        title: '404 页面未找到 | 越桥集团 VietBridge Group',
        description: '您访问的页面路径不存在。请返回越桥集团首页或浏览企业赋能、VietBridge Study 教育赋能、项目案例与联系页面。'
      },
      en: {
        title: '404 Page Not Found | VietBridge Group',
        description: 'The requested page path could not be found. Return to the VietBridge Group home page or explore our enterprise and education enablement pages.'
      },
      vi: {
        title: '404 Không Tìm Thấy Trang | VietBridge Group',
        description: 'Đường dẫn quý vị truy cập không tồn tại. Vui lòng quay lại trang chủ VietBridge Group hoặc chọn các trang chuyên mục.'
      }
    }
  };

  return {
    ...seoMap[page][lang],
    canonical
  };
};

// Helper to determine initial language
const getInitialLang = (): Language => {
  try {
    const saved = localStorage.getItem('vietbridge_lang') as Language;
    if (saved && (saved === 'en' || saved === 'vi' || saved === 'zh')) {
      return saved;
    }
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('zh')) return 'zh';
    if (navLang.startsWith('vi')) return 'vi';
    return 'zh';
  } catch (e) {
    return 'zh';
  }
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLang);
  const [activePage, setActivePage] = useState<ActivePage>(() =>
    pathnameToPage(window.location.pathname)
  );

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('vietbridge_lang', lang);
    } catch (e) {
      // LocalStorage might be restricted
    }
  };

  // Sync html lang and route SEO metadata (title, description, canonical)
  useEffect(() => {
    document.documentElement.lang = currentLang;
    const seo = getRouteSeo(activePage, currentLang, window.location.pathname);
    document.title = seo.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', seo.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', seo.canonical);
  }, [activePage, currentLang]);

  // Listen to browser back/forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const nextPage = pathnameToPage(window.location.pathname);
      setActivePage(nextPage);
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const el =
            document.getElementById(hash) ||
            document.getElementById(`sol-track-${hash}`) ||
            document.getElementById(`edu-track-${hash}`);
          if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: ActivePage, sectionId?: string) => {
    const targetPathname = pageToPathname(page);
    const hashSuffix = sectionId ? `#${sectionId.replace('#', '')}` : '';
    const nextUrl = `${targetPathname}${hashSuffix}`;

    if (window.location.pathname + window.location.hash !== nextUrl) {
      window.history.pushState(null, '', nextUrl);
    }
    setActivePage(page);

    if (sectionId) {
      setTimeout(() => {
        const cleanId = sectionId.replace('#', '');
        const element =
          document.getElementById(cleanId) ||
          document.getElementById(`sol-track-${cleanId}`) ||
          document.getElementById(`edu-track-${cleanId}`);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-cream text-brand-blue selection:bg-brand-orange selection:text-white min-h-screen flex flex-col justify-between" id="root-container">
      
      {/* Navigation Header */}
      <Header 
        currentLang={currentLang} 
        onChangeLang={handleLangChange} 
        activePage={activePage}
        onNavigate={navigateTo}
      />

      <main id="main-content-flow" className="relative flex-1">
        
        {/* VIEW 1: Dedicated Enterprise Enablement Page (/enterprise-enablement) */}
        {activePage === 'enterprise' && (
          <EnterprisePage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 2: Dedicated Education Enablement Page (/education-enablement) */}
        {activePage === 'education' && (
          <EducationPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 3: Dedicated Case Studies Page (/case-studies) */}
        {activePage === 'cases' && (
          <CasesPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 4: Dedicated About Us Page (/about) */}
        {activePage === 'about' && (
          <AboutPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 5: Dedicated Contact & Consultation Page (/contact) */}
        {activePage === 'contact' && (
          <ContactPage 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 6: Privacy Policy (/privacy-policy) */}
        {activePage === 'privacy' && (
          <PrivacyPolicy 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 7: Terms of Use (/terms-of-use) */}
        {activePage === 'terms' && (
          <TermsOfUse 
            currentLang={currentLang} 
            onNavigate={navigateTo} 
          />
        )}

        {/* VIEW 8: Dedicated 404 Not Found Page (Any unknown path) */}
        {activePage === 'not-found' && (
          <section className="min-h-[80vh] pt-32 pb-24 px-6 md:px-12 flex items-center justify-center bg-[#FAF9F6]">
            <div className="max-w-2xl w-full bg-white border border-brand-blue/10 p-10 sm:p-14 shadow-xs text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange font-mono text-xs uppercase tracking-widest font-bold">
                <Compass className="w-4 h-4" />
                <span>404 · PAGE NOT FOUND</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.28]">
                {currentLang === 'zh'
                  ? '404 未找到您访问的页面'
                  : currentLang === 'vi'
                  ? '404 Không Tìm Thấy Trang Yêu Cầu'
                  : '404 Requested Page Not Found'}
              </h1>
              <p className="text-sm sm:text-base text-brand-blue/70 font-light leading-relaxed">
                {currentLang === 'zh'
                  ? '您访问的网址路径不存在或已变更。请返回越桥集团首页，或直接访问以下核心业务专页。'
                  : currentLang === 'vi'
                  ? 'Đường dẫn quý vị truy cập không tồn tại. Vui lòng quay lại trang chủ VietBridge Group hoặc chọn các trang chuyên mục bên dưới.'
                  : 'The URL path you requested does not exist. Please return to the VietBridge Group homepage or select one of our main pages below.'}
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('home');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-brand-blue transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{currentLang === 'zh' ? '返回首页' : currentLang === 'vi' ? 'Về Trang Chủ' : 'Back to Home'}</span>
                </a>
                <a
                  href="/enterprise-enablement"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('enterprise');
                  }}
                  className="px-5 py-3 border border-brand-blue/15 text-brand-blue text-xs font-mono font-bold uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  {currentLang === 'zh' ? 'AI 企业赋能' : currentLang === 'vi' ? 'Giải pháp Doanh nghiệp' : 'Enterprise Enablement'}
                </a>
                <a
                  href="/education-enablement"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('education');
                  }}
                  className="px-5 py-3 border border-brand-blue/15 text-brand-blue text-xs font-mono font-bold uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  VietBridge Study
                </a>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 9: Primary Home Page (/) */}
        {activePage === 'home' && (
          <>
            <Hero 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            <TwoEngines 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            <EnterpriseEnablement currentLang={currentLang} />

            <EducationEnablement 
              currentLang={currentLang} 
              onNavigate={navigateTo}
            />

            <FeaturedPrograms currentLang={currentLang} />

            <WhoWeAre currentLang={currentLang} />

            <EditorialQuote currentLang={currentLang} />

            <WhyVietBridge currentLang={currentLang} />

            <Leadership currentLang={currentLang} />

            <Stats currentLang={currentLang} />

            <InteractiveMap currentLang={currentLang} onNavigate={navigateTo} />

            <RecentEvents currentLang={currentLang} />

            <Partners currentLang={currentLang} />

            <Consultation currentLang={currentLang} onNavigate={navigateTo} />
          </>
        )}

      </main>

      {/* Footer */}
      <Footer 
        currentLang={currentLang} 
        onChangeLang={handleLangChange}
        onNavigate={navigateTo}
      />
    </div>
  );
}
