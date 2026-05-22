import React, { useState } from 'react';
import { strategySections } from '../data/strategy';
import { StrategySection } from '../types';
import { 
  ShieldCheck, 
  Layout, 
  Package, 
  Smartphone, 
  Heart, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  Feather, 
  Globe, 
  QrCode, 
  TrendingUp, 
  Cpu, 
  Rocket,
  Search,
  ChevronRight,
  Clipboard,
  Check,
  AlertCircle
} from 'lucide-react';

// Dynamic icon mapper to keep TS happy and robust
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Layout,
  Package,
  Smartphone,
  Heart,
  MessageSquare,
  Compass,
  Sparkles,
  Feather,
  Globe,
  QrCode,
  TrendingUp,
  Cpu,
  Rocket
};

export default function StrategyDeck() {
  const [activeSectionId, setActiveSectionId] = useState<string>('brand-positioning');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeSection = strategySections.find(s => s.id === activeSectionId) || strategySections[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredSections = strategySections.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-800" id="strategy-view">
      {/* LEFT NAVIGATION BAR: Chapters */}
      <nav className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 block">
            Retail Strategy Core
          </span>
          <h2 className="text-2xl font-serif font-extrabold text-[#0f291e] tracking-tight">
            D. Turtle <span className="italic font-normal">Playbook</span>
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            14-chapter growth architecture designed by top-tier brand & tourism conversion.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search CRO strategies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAF7F4] text-xs py-3 pl-10 pr-4 rounded-xl border border-slate-200/80 focus:border-emerald-600 focus:outline-none transition-all"
          />
        </div>

        <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
          {filteredSections.map((section) => {
            const IconComponent = iconMap[section.icon] || ShieldCheck;
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                id={`btn-chapter-${section.chapterNumber}`}
                onClick={() => setActiveSectionId(section.id)}
                className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-start gap-3 border ${
                  isActive 
                    ? 'bg-emerald-50/50 border-emerald-600 border-l-4 text-[#0f291e] font-semibold slick-shadow-sm' 
                    : 'bg-white border-transparent hover:bg-slate-50/80 hover:border-slate-200/50'
                }`}
              >
                <div className={`p-2 rounded-xl mt-0.5 transition-all duration-300 ${isActive ? 'bg-emerald-900 text-emerald-200' : 'bg-[#F4ECE1] text-emerald-800'}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">Ch. {section.chapterNumber}</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#0f291e] truncate">{section.title}</h3>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{section.summary}</p>
                </div>
                <ChevronRight className={`h-4 w-4 self-center text-slate-400 shrink-0 transition-transform ${isActive ? 'translate-x-0.5 text-emerald-800' : ''}`} />
              </button>
            );
          })}
        </div>
      </nav>

      {/* RIGHT DISPLAY PANEL: Deep Chapter Strategy */}
      <section className="lg:col-span-8 space-y-6">
        {/* Header Ribbon */}
        <div className="bg-emerald-900 text-[#FAF7F4] rounded-[2rem] p-8 lg:p-10 shadow-xl relative overflow-hidden">
          {/* Decorative design aesthetics */}
          <div className="absolute right-0 top-0 bg-emerald-800 rounded-full h-44 w-44 -mr-12 -mt-12 opacity-40 blur-2xl pointer-events-none"></div>
          <div className="absolute left-1/3 bottom-0 bg-emerald-950 rounded-full h-32 w-32 -mb-20 opacity-35 blur-xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 relative z-10">
            <span className="bg-emerald-800 text-emerald-250 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-emerald-700/60">
              Chapter {activeSection.chapterNumber}
            </span>
            <span className="text-xs text-emerald-200/60 font-mono font-medium">• Clinical Grade E-Commerce Strategy</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-serif font-extrabold tracking-tight text-white mt-4 relative z-10">
            {activeSection.title}
          </h1>
          <p className="text-sm text-emerald-150/80 leading-relaxed mt-3 max-w-2xl relative z-10">
            {activeSection.summary}
          </p>
        </div>

        {/* Core Strategy Cards */}
        <div className="space-y-6">
          {activeSection.sections.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 slick-shadow-md space-y-5">
              <h2 className="text-lg font-serif font-bold text-[#0f291e] flex items-center gap-2.5 border-b border-slate-100 pb-3.5">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-black">Section 0{idx + 1}</span>
                <span className="text-slate-400 font-light">|</span>
                <span>{sec.heading}</span>
              </h2>

              <div className="space-y-4">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* CRO Highlight overlay */}
              {sec.croHighlight && (
                <div className="bg-[#FAF7F4] border border-slate-200 p-5 rounded-2xl flex items-start gap-4">
                  <div className="bg-emerald-900 text-white p-2 rounded-xl mt-0.5">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-emerald-900 font-mono uppercase tracking-[0.15em]">
                      Strategic CRO Insight
                    </h3>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed italic">
                      {sec.croHighlight}
                    </p>
                  </div>
                </div>
              )}

              {/* High converting copy block with action */}
              {sec.copyExample && (
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl overflow-hidden mt-5">
                  <div className="bg-orange-100/40 px-5 py-3 border-b border-orange-100/55 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5 text-orange-850" /> UI COPY BLUEPRINT: {sec.copyExample.scenario}
                    </span>
                    <button
                      onClick={() => handleCopy(
                        `Headline: ${sec.copyExample?.headline}\n\nBody: ${sec.copyExample?.body}\n\nCTA: ${sec.copyExample?.cta}`, 
                        `copy-${idx}`
                      )}
                      className="text-xs text-orange-950 hover:text-black flex items-center gap-1.5 font-bold transition"
                    >
                      {copiedText === `copy-${idx}` ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 font-bold" /> Saved!
                        </>
                      ) : (
                        <>
                          <Clipboard className="h-3.5 w-3.5" /> Copy Blueprint Code
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-5 space-y-4 font-sans bg-white/70">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Headline copy</span>
                      <p className="text-sm font-bold text-slate-800 font-serif mt-0.5">{sec.copyExample.headline}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Body copy</span>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{sec.copyExample.body}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Psychological CTA</span>
                      <span className="inline-block bg-[#0f291e] text-white text-xs font-bold px-4 py-2 rounded-xl mt-1.5 shadow-md shadow-emerald-950/10">
                        {sec.copyExample.cta}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Core Takeaway for active strategy chapter */}
          <div className="bg-[#FAF7F4] border border-[#F4ECE1] rounded-3xl p-6 lg:p-8 flex items-center gap-4 relative overflow-hidden">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-900">
              💡
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-950">
                Strategic Implementation Advice
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To activate Chapter {activeSection.chapterNumber} on the simulated physical side of D. Turtle, print physical QR stands using the precise URL pointers generated by our Digital Showroom catalog. This turns random beach-goers scrolling back in their room into warm, pre-sales WhatsApp questions immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
