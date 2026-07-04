import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight, Compass, Shield } from 'lucide-react';
import { Language } from '../data';

interface InteractiveMapProps {
  currentLang: Language;
}

interface LocalizedHub {
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  details: string;
  type: 'hub' | 'connection';
}

export default function InteractiveMap({ currentLang }: InteractiveMapProps) {
  const hubsDataset: Record<Language, LocalizedHub[]> = {
    en: [
      {
        name: 'Ho Chi Minh (HQ)',
        coordinates: { x: 55, y: 60 },
        description: 'Transnational Operational Center',
        details: 'Based in the iconic Bitexco Financial Tower, District 1, leading global curriculum design and multi-sector investment syndications.',
        type: 'hub'
      },
      {
        name: 'Beijing',
        coordinates: { x: 58, y: 42 },
        description: 'Bilateral Trade Corridor',
        details: 'Based in China World Tower A, Chaoyang District, linking major state-backed institutions and leading enterprises to the Vietnam trade corridor.',
        type: 'hub'
      },
      {
        name: 'London',
        coordinates: { x: 20, y: 25 },
        description: 'European Alliance Desk',
        details: 'Located in Mayfair, driving collaboration with Russell Group universities and bilateral UK-ASEAN business councils.',
        type: 'hub'
      }
    ],
    vi: [
      {
        name: 'TP. Hồ Chí Minh (HQ)',
        coordinates: { x: 55, y: 60 },
        description: 'Trung tâm Vận hành Xuyên Quốc gia',
        details: 'Tọa lạc tại Tháp Tài chính Bitexco, Quận 1, dẫn dắt các chương trình học thuật chuẩn quốc tế và quản trị các thương vụ đầu tư đa ngành.',
        type: 'hub'
      },
      {
        name: 'Bắc Kinh',
        coordinates: { x: 58, y: 42 },
        description: 'Hành lang Thương mại Song phương',
        details: 'Đặt tại Tháp Trung Quốc Quốc Tế A, Quận Triều Dương, liên kết các định chế tài chính và tập đoàn kinh tế hàng đầu với hành lang thương mại Việt Nam.',
        type: 'hub'
      },
      {
        name: 'London',
        coordinates: { x: 20, y: 25 },
        description: 'Đại diện Liên minh Châu Âu',
        details: 'Đặt tại khu vực Mayfair danh giá, thúc đẩy liên kết sâu rộng với hệ thống đại học thuộc Russell Group và Hội đồng kinh doanh Anh-ASEAN.',
        type: 'hub'
      }
    ],
    zh: [
      {
        name: '胡志明市 (总部)',
        coordinates: { x: 55, y: 60 },
        description: '跨国运营与统筹中心',
        details: '设立于地标性的金融塔 (Bitexco Tower)，统一筹划国际双学位课程输出并管理多领域产业基金的跨境投放。',
        type: 'hub'
      },
      {
        name: '北京',
        coordinates: { x: 58, y: 42 },
        description: '双边贸易与常设办事处',
        details: '办公地点位于朝阳区国贸大厦A座，重点对接国有学术机构、大型国央企以及知名民营科技集团与越南的合作纽带。',
        type: 'hub'
      },
      {
        name: '伦敦',
        coordinates: { x: 20, y: 25 },
        description: '欧洲学术联盟代表处',
        details: '办公地点设于伦敦梅费尔区，深度拓展与英国罗素大学集团（Russell Group）及双边商业理事会框架下的教研合作。',
        type: 'hub'
      }
    ]
  };

  const localizedHubs = hubsDataset[currentLang] || hubsDataset['en'];
  const [activeHub, setActiveHub] = useState<LocalizedHub>(localizedHubs[0]);

  // Keep active hub updated when language changes
  useEffect(() => {
    const matched = localizedHubs.find(h => h.coordinates.x === activeHub.coordinates.x && h.coordinates.y === activeHub.coordinates.y);
    if (matched) {
      setActiveHub(matched);
    } else {
      setActiveHub(localizedHubs[0]);
    }
  }, [currentLang]);

  // Vietnam HQ coordinates to draw paths
  const hqCoords = localizedHubs[0].coordinates;

  const mapText = {
    tagline: {
      en: 'Institutional Network',
      vi: 'Mạng lưới Tổ chức',
      zh: '全球化实体布局'
    },
    title: {
      en: 'A Global Infrastructure',
      vi: 'Cơ sở hạ tầng toàn cầu',
      zh: '跨国协作核心网络'
    },
    desc: {
      en: 'Connecting Vietnam to the major academic, regulatory, and capital centers of the world. Click on any regional hub to review active initiatives.',
      vi: 'Liên kết Việt Nam với các trung tâm học thuật, pháp lý và tài chính hàng đầu thế giới. Chọn một văn phòng khu vực để xem sáng kiến.',
      zh: '在越南高速增长的市场与世界百强名校、境外资本中枢之间建立长效联系。点击以下节点调阅对应机构详情。'
    },
    sidebarTag: {
      en: 'Regional Office / Hub',
      vi: 'Văn phòng / Trung tâm Khu vực',
      zh: '实体运营中心 / 区域枢纽'
    },
    sidebarBtn: {
      en: 'Inquire for Local Projects',
      vi: 'Liên hệ dự án sở tại',
      zh: '申请对接本地项目'
    },
    activeLabel: {
      en: 'Active Operations',
      vi: 'Vận hành thực tế',
      zh: '当前活跃项目'
    }
  };

  return (
    <section
      id="map"
      className="bg-brand-cream py-24 md:py-36 border-b border-brand-blue/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="border-b border-brand-blue/10 pb-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" id="map-header">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand-orange uppercase block mb-3">
              {mapText.tagline[currentLang]}
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-brand-blue tracking-tight leading-none">
              {mapText.title[currentLang]}
            </h2>
          </div>
          <p className="text-xs md:text-sm text-brand-blue/70 max-w-sm font-light">
            {mapText.desc[currentLang]}
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="map-workspace">
          
          {/* Left Column: Interactive Map Canvas */}
          <div className="lg:col-span-8 bg-white border border-brand-blue/10 p-4 md:p-8 relative aspect-[16/10] shadow-md flex items-center justify-center select-none" id="map-container">
            
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b214603_1px,transparent_1px),linear-gradient(to_bottom,#0b214605_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
            
            {/* World Coordinates Stylized Dots Underlay (Simulated World Outline) */}
            <svg
              className="absolute inset-0 w-full h-full text-brand-blue/[0.03] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              id="world-dots-svg"
            >
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="50%" cy="50%" r="25%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>

            {/* SVG Interactive Connections */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" id="connections-svg">
              {localizedHubs.map((hub, idx) => {
                if (idx === 0) return null;
                return (
                  <g key={`path-${idx}`}>
                    {/* Curve connecting HQ to Hub */}
                    <path
                      d={`M ${hqCoords.x}% ${hqCoords.y}% Q ${(hqCoords.x + hub.coordinates.x) / 2}% ${(hqCoords.y + hub.coordinates.y) / 2 - 10}% ${hub.coordinates.x}% ${hub.coordinates.y}%`}
                      fill="none"
                      stroke={activeHub.coordinates.x === hub.coordinates.x ? '#C59B27' : '#141517'}
                      strokeWidth={activeHub.coordinates.x === hub.coordinates.x ? '1.5' : '0.5'}
                      strokeOpacity={activeHub.coordinates.x === hub.coordinates.x ? '0.7' : '0.2'}
                      strokeDasharray={activeHub.coordinates.x === hub.coordinates.x ? '0' : '4 4'}
                      className="transition-all duration-500"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Hub Pins */}
            {localizedHubs.map((hub, idx) => {
              const isHQ = idx === 0;
              const isActive = activeHub.coordinates.x === hub.coordinates.x;

              return (
                <button
                  key={`pin-${idx}`}
                  onClick={() => setActiveHub(hub)}
                  className="absolute z-20 group focus:outline-none cursor-pointer"
                  style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                  id={`map-node-${hub.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    {/* Ring Ping Animation for HQ / Active Node */}
                    {(isHQ || isActive) && (
                      <span className={`absolute -inset-2.5 rounded-full ${isActive ? 'bg-brand-orange/20 map-ping-animate' : 'bg-brand-blue/10 map-ping-animate'}`} />
                    )}

                    {/* Physical Dot */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'bg-brand-orange border-white scale-125'
                          : isHQ
                          ? 'bg-brand-blue border-white scale-110'
                          : 'bg-brand-blue/80 border-brand-cream hover:bg-brand-orange'
                      }`}
                    >
                      {isHQ && <span className="w-1 h-1 bg-white rounded-full" />}
                    </div>

                    {/* Minimal Tooltip Hover Name */}
                    <span
                      className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-bold tracking-widest uppercase py-0.5 px-2 rounded-none border transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-blue text-white border-brand-blue opacity-100 translate-x-0'
                          : 'bg-white text-brand-blue border-brand-blue/10 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5'
                      }`}
                    >
                      {hub.name}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Ambient Legend (Stripe/Apple Minimal Style) */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-brand-blue/30 font-mono text-[9px] tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" /> Projection: Coordinate Grid-Mercator
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2 text-brand-blue/40 font-mono text-[9px] tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5 text-brand-orange" /> {currentLang === 'vi' ? 'HÀNH LANG BẢO MẬT' : currentLang === 'zh' ? '已确权安全双边节点' : 'SECURED BILATERAL LINKS'}
            </div>
          </div>

          {/* Right Column: Premium Hub Details Card (Editorial Magazine style) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full lg:min-h-[420px]" id="map-sidebar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-brand-blue/10 p-8 shadow-lg flex flex-col justify-between h-full"
                id={`map-detail-${activeHub.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-brand-blue/10 pb-4 mb-6">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange uppercase">
                      {mapText.sidebarTag[currentLang]}
                    </span>
                    <Globe className="w-4 h-4 text-brand-blue/40" />
                  </div>

                  <h3 className="text-2.5xl md:text-3xl font-sans font-extrabold text-brand-blue tracking-tight">
                    {activeHub.name}
                  </h3>

                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mt-2">
                    {activeHub.description}
                  </p>

                  <p className="text-xs md:text-sm text-brand-blue/80 leading-relaxed mt-6 font-light">
                    {activeHub.details}
                  </p>
                </div>

                <div className="mt-8 border-t border-brand-blue/10 pt-6">
                  <span className="text-[10px] font-mono tracking-widest text-brand-blue/40 uppercase block mb-3">
                    {mapText.activeLabel[currentLang]}
                  </span>
                  <button
                    onClick={() => {
                      const consultSec = document.getElementById('contact');
                      if (consultSec) consultSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-brand-blue hover:text-brand-orange uppercase tracking-widest group cursor-pointer"
                  >
                    {mapText.sidebarBtn[currentLang]}
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
