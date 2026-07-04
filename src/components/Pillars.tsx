import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Building2, ArrowUpRight } from 'lucide-react';
import { Language } from '../data';

interface PillarsProps {
  currentLang: Language;
}

export default function Pillars({ currentLang }: PillarsProps) {
  const content = {
    en: {
      tagline: 'OUR CORRIDORS',
      title: 'Connecting Ambition With Strategy',
      subtitle: 'We build institutional gateways of absolute compliance and premium discretion, routing opportunity across bilateral networks.',
      cta: 'Initiate Inquiry',
      pillars: [
        {
          id: 'education',
          title: 'Transnational Education',
          subtitle: 'Dual-degree models & executive cohorts',
          sentence: 'We architect elite dual-degree pipelines and custom educational infrastructure, connecting Vietnam’s premier national universities with accredited, world-renowned global faculties.',
          image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
          icon: GraduationCap,
          tag: 'ACADEMIC ALIGNMENT'
        },
        {
          id: 'business',
          title: 'Sovereign Business Advisory',
          subtitle: 'ASEAN market entry & supply chains',
          sentence: 'We advise multinational conglomerates and specialized manufacturing leaders on cross-border logistics setups, local entity structures, and trade compliance across regional markets.',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
          icon: Briefcase,
          tag: 'ENTERPRISE ACCESS'
        },
        {
          id: 'partnerships',
          title: 'Strategic Alliances',
          subtitle: 'Diplomatic summits & private covenants',
          sentence: 'We coordinate high-level ministerial dialogues, private multi-sector trade summits, and institutional frameworks to foster long-term commercial trust and legal protection.',
          image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
          icon: Building2,
          tag: 'MULTILATERAL COVENANTS'
        }
      ]
    },
    vi: {
      tagline: 'HÀNH LANG VẬN HÀNH',
      title: 'Đồng Bộ Hoá Khát Vọng Và Chiến Lược',
      subtitle: 'Chúng tôi thiết lập các cầu nối định chế với sự tuân thủ tối đa, dẫn dắt các dòng chảy cơ hội xuyên biên giới một cách bảo mật.',
      cta: 'Gửi Yêu cầu Tiếp xúc',
      pillars: [
        {
          id: 'education',
          title: 'Liên Kết Giáo Dục Quốc Tế',
          subtitle: 'Mô hình chương trình kép & đào tạo cao cấp',
          sentence: 'Chúng tôi liên kết và chuyển giao các chương trình đào tạo chuẩn quốc tế, cấp bằng kép và đào tạo điều hành giữa đại học hàng đầu Việt Nam và các viện học thuật danh giá thế giới.',
          image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
          icon: GraduationCap,
          tag: 'ĐỒNG BỘ GIÁO DỤC'
        },
        {
          id: 'business',
          title: 'Tư Vấn Thâm Nhập Thị Trường',
          subtitle: 'Chuỗi cung ứng & Cấu trúc pháp nhân ASEAN',
          sentence: 'Chúng tôi hỗ trợ các tập đoàn đa quốc gia và các nhà chế tạo công nghệ lớn định vị chuỗi sản xuất, thiết lập thực thể pháp lý và tối ưu hóa hạ tầng logistic tại Việt Nam và Đông Nam Á.',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
          icon: Briefcase,
          tag: 'ĐẦU TƯ DOANH NGHIỆP'
        },
        {
          id: 'partnerships',
          title: 'Liên Minh Chiến Lược Cấp Cao',
          subtitle: 'Diễn đàn đối thoại & Thỏa ước đầu tư kín',
          sentence: 'Chúng tôi điều phối các cuộc tiếp xúc cấp bộ ngành, hội nghị đầu tư đa phương kín và các liên minh chủ quyền nhằm bảo trợ pháp lý và tạo nền tảng tăng trưởng bền vững.',
          image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
          icon: Building2,
          tag: 'LIÊN MINH ĐA PHƯƠNG'
        }
      ]
    },
    zh: {
      tagline: '三大业务廊道',
      title: '以战略，对齐世界机遇',
      subtitle: '我们提供兼具高度机密性与极致合规性的跨国门户，在多国学术与商业网络中无缝配置核心资源。',
      cta: '开启定向联络',
      pillars: [
        {
          id: 'education',
          title: '跨国教育学术合作',
          subtitle: '顶尖高校双学位框架与高管高级研修',
          sentence: '我们倾力策划高品质的中外联合培养对齐、中外合作办学及定制化高管终身教育，让越南龙头高校无缝接轨世界一流学科和优质院系。',
          image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1200&q=80',
          icon: GraduationCap,
          tag: '学术与教研对齐'
        },
        {
          id: 'business',
          title: '主权级商业与准入顾问',
          subtitle: '跨国集团东盟市场落地与全球供应链布局',
          sentence: '我们为跨国科技集团、重型制造龙头企业提供在东盟及越南保税园区落户、设立法人的全流程合规顾问，妥善统筹零部件物流、保税及制造迁移。',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
          icon: Briefcase,
          tag: '跨国商业与供应链'
        },
        {
          id: 'partnerships',
          title: '政府及多边战略同盟',
          subtitle: '闭门政策论坛与双边产业战略合作契约',
          sentence: '我们统一协调跨国政府部门、主权基金管理人的高规格闭门峰会与备忘录对齐，为跨国商业往来架设超强度的法律契约及多边保护屏障。',
          image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
          icon: Building2,
          tag: '多边关系与主权信誉'
        }
      ]
    }
  };

  const activeContent = content[currentLang] || content['en'];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="ecosystem"
      className="bg-white py-44 md:py-64 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Elegant Editorial Header with plenty of Negative Space */}
        <div className="pb-16 mb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end" id="ecosystem-header">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.5em] text-brand-orange uppercase block mb-6">
              {activeContent.tagline}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-blue tracking-tight leading-[0.95]">
              {activeContent.title}
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg lg:text-xl text-brand-blue/70 font-light leading-relaxed max-w-lg">
            {activeContent.subtitle}
          </p>
        </div>

        {/* Alternating Image-Left / Image-Right Editorial Rows (No cards!) */}
        <div className="space-y-56 md:space-y-64" id="ecosystem-alternating-rows">
          {activeContent.pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={pillar.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
                id={`ecosystem-row-${pillar.id}`}
              >
                
                {/* 1. Full-fidelity cinematic photo block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.2 }}
                    className="relative overflow-hidden group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-brand-blue/5">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:scale-[1.01] group-hover:grayscale-0 transition-all duration-[1600ms] ease-out"
                      />
                    </div>
                    
                    {/* Floating mini info box */}
                    <div className="absolute top-8 left-8 bg-[#070D19] text-white py-2 px-4 z-10 text-[9px] font-mono tracking-widest uppercase">
                      {pillar.tag}
                    </div>
                  </motion.div>
                </div>

                {/* 2. Editorial narrative column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-8 flex flex-col justify-center`}>
                  
                  {/* Icon and Subtitle Row */}
                  <div className="flex items-center gap-4">
                    <div className="text-brand-orange">
                      <PillarIcon className="w-6 h-6 stroke-[1.2]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-blue/40 uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Body Sentence */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-blue/70 leading-relaxed font-light">
                    {pillar.sentence}
                  </p>

                  {/* Understated strategic CTA */}
                  <div className="pt-6">
                    <button
                      onClick={scrollToContact}
                      className="group flex items-center gap-2 text-[10px] font-bold text-brand-blue hover:text-brand-orange uppercase tracking-widest transition-all duration-300 border-b border-brand-blue/20 hover:border-brand-orange pb-2 cursor-pointer"
                    >
                      {activeContent.cta}
                      <ArrowUpRight className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
