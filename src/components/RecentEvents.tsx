import React, { useState } from 'react';
import { Language, recentEvents, translationStrings, EventItem } from '../data';
import { Calendar, MapPin, ArrowUpRight, Sparkles, FileText, X, CheckCircle2 } from 'lucide-react';

interface RecentEventsProps {
  currentLang?: Language;
  lang?: Language;
  onInquire?: (prefill: { type?: string; subject?: string }) => void;
}

export const RecentEvents: React.FC<RecentEventsProps> = ({ currentLang, lang, onInquire }) => {
  const activeLang: Language = currentLang || lang || 'zh';
  const events = recentEvents[activeLang] || recentEvents.en;
  const t = translationStrings.events;
  const [selectedProposal, setSelectedProposal] = useState<EventItem | null>(null);

  const sectionLabels = {
    en: {
      viewProposal: 'View Event Proposal',
      inquirePlan: 'Inquire / Pre-register Interest',
      proposalModalBadge: 'EVENT & SEMINAR PROPOSAL',
      proposalModulesTitle: 'Planned Topic Modules & Scope',
      statusLabel: 'Current Status',
      closeBtn: 'Close Proposal'
    },
    vi: {
      viewProposal: 'Tìm hiểu Phương án Hoạt động',
      inquirePlan: 'Đăng ký Quan tâm / Tư vấn',
      proposalModalBadge: 'ĐỀ ÁN HỘI THẢO & SỰ KIỆN',
      proposalModulesTitle: 'Nội dung Dự kiến & Phạm vi Đề án',
      statusLabel: 'Trạng thái Hiện tại',
      closeBtn: 'Đóng'
    },
    zh: {
      viewProposal: '了解活动方案',
      inquirePlan: '咨询活动方案 / 预约交流',
      proposalModalBadge: '活动方案与研讨会策划说明',
      proposalModulesTitle: '策划模块与方案说明',
      statusLabel: '当前项目状态',
      closeBtn: '关闭方案说明'
    }
  }[activeLang];

  const triggerEventInquiry = (evt: EventItem) => {
    const areaOfInterest = evt.id === 'smart-edtech-forum' ? 'vietbridge-study' : 'corporate-training';
    if (onInquire) {
      onInquire({
        type: areaOfInterest,
        subject: evt.title
      });
    }
    window.dispatchEvent(
      new CustomEvent('vb-prefill-inquiry', {
        detail: {
          areaOfInterest,
          subject: evt.title
        }
      })
    );
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const top = contactEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-24 lg:py-36 bg-[#FAF9F6] text-brand-blue relative overflow-hidden border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 pb-8 border-b border-brand-blue/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2.5 text-brand-orange font-mono text-xs uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tagline[activeLang]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-sans font-extrabold text-brand-blue tracking-tight leading-[1.32]">
              {t.title[activeLang]}
            </h2>
          </div>
          <p className="text-brand-blue/70 text-sm sm:text-base max-w-md mt-6 md:mt-0 font-light leading-relaxed">
            {t.description[activeLang]}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <article 
              key={evt.id}
              className="group bg-white overflow-hidden border border-brand-blue/10 shadow-xs hover:border-brand-orange/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-60 overflow-hidden bg-[#070D19]">
                  <img 
                    src={evt.image} 
                    alt={evt.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D19]/90 via-[#070D19]/30 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-[#070D19]/90 backdrop-blur-md text-brand-orange font-mono text-[10px] uppercase tracking-widest border border-brand-orange/40 font-bold">
                      {evt.status}
                    </span>
                    <span className="px-2.5 py-1 bg-white/90 text-brand-blue font-mono text-[10px] uppercase tracking-widest font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Schedule / Status Bottom Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      {evt.date}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-1.5 text-xs text-brand-orange font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{evt.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-bold text-brand-blue mb-2 group-hover:text-brand-orange transition-colors leading-[1.4]">
                    {evt.title}
                  </h3>
                  
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-blue/50 mb-4 pb-4 border-b border-brand-blue/10">
                    {evt.subtitle}
                  </p>

                  <div className="mb-4 p-3 bg-[#FAF9F6] border border-brand-orange/30 text-[11px] text-brand-blue/85 leading-relaxed">
                    {evt.evidenceNote}
                  </div>

                  <p className="text-sm text-brand-blue/70 leading-relaxed font-light">
                    {evt.summary}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-7 sm:px-8 pb-7 pt-3 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProposal(evt)}
                  className="w-full py-3 px-4 bg-brand-blue text-white hover:bg-brand-orange font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{sectionLabels.viewProposal}</span>
                </button>
                <button
                  type="button"
                  onClick={() => triggerEventInquiry(evt)}
                  className="w-full py-2.5 px-4 bg-[#FAF9F6] hover:bg-brand-orange/10 text-brand-blue font-mono text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-brand-blue/15 cursor-pointer"
                >
                  <span>{sectionLabels.inquirePlan}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Proposal Details Modal */}
      {selectedProposal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070D19]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="proposal-modal-title"
          onClick={() => setSelectedProposal(null)}
        >
          <div
            className="bg-white border border-brand-blue/15 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProposal(null)}
              aria-label={sectionLabels.closeBtn}
              className="absolute top-5 right-5 w-9 h-9 bg-[#FAF9F6] hover:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/15 text-brand-orange font-mono text-[10px] uppercase tracking-widest font-bold mb-4">
              <span>{sectionLabels.proposalModalBadge}</span>
              <span>·</span>
              <span>{selectedProposal.status}</span>
            </div>

            <h3 id="proposal-modal-title" className="text-lg sm:text-xl font-sans font-bold text-brand-blue mb-2 leading-[1.35]">
              {selectedProposal.title}
            </h3>
            <p className="text-xs font-mono text-brand-blue/60 mb-4">
              {selectedProposal.date} | {selectedProposal.location}
            </p>

            <div className="p-4 bg-[#FAF9F6] border border-brand-orange/30 mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-brand-orange font-bold mb-1">
                {sectionLabels.statusLabel}: {selectedProposal.status}
              </div>
              <p className="text-xs text-brand-blue/80 leading-relaxed">
                {selectedProposal.evidenceNote}
              </p>
            </div>

            <p className="text-sm text-brand-blue/75 leading-relaxed mb-6">
              {selectedProposal.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold mb-3">
                {sectionLabels.proposalModulesTitle}
              </h4>
              <ul className="space-y-2.5">
                {selectedProposal.proposalDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-brand-blue/85">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-blue/10">
              <button
                type="button"
                onClick={() => {
                  const current = selectedProposal;
                  setSelectedProposal(null);
                  triggerEventInquiry(current);
                }}
                className="flex-1 py-3 px-5 bg-brand-orange text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-brand-blue transition-colors cursor-pointer"
              >
                {sectionLabels.inquirePlan}
              </button>
              <button
                type="button"
                onClick={() => setSelectedProposal(null)}
                className="py-3 px-5 border border-brand-blue/15 text-brand-blue font-mono text-xs uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors cursor-pointer"
              >
                {sectionLabels.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentEvents;
