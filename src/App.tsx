import { useState } from 'react';
import { Language } from './types';
import DigitalShowroom from './components/DigitalShowroom';
import PharmacistAssistant from './components/PharmacistAssistant';
import { 
  ShieldCheck, 
  Waves,
  Lock
} from 'lucide-react';

export default function App() {
  const [activeLang, setActiveLang] = useState<Language>('en');
  const [prefilledAdvisorQst, setPrefilledAdvisorQst] = useState<string | undefined>(undefined);

  const handleAskAdvisorForProduct = (productName: string) => {
    setPrefilledAdvisorQst(productName);
    // We'll scroll down to the assistant or focus on it
    setTimeout(() => {
      const chatEl = document.getElementById('pharmacist-assistant');
      if (chatEl) {
        chatEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans antialiased text-stone-850 selection:bg-amber-150 selection:text-stone-950">
      
      {/* GLOBAL HEADER */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-stone-200/80 z-30 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Logo Brand exactly like a premium luxury cosmetics line */}
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/fG4HBzW1/IMG-20260522-144715-832.jpg" 
              alt="D. Turtle Logo" 
              className="h-10 w-auto object-contain rounded-md shadow-sm border border-stone-200/60"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <span className="font-serif text-2xl tracking-tight font-black text-stone-950 block">
                D. TURTLE <span className="text-[#429e7c] font-sans text-[10px] font-extrabold ml-1.5 uppercase tracking-[0.2em]">BEAUTY & WELLNESS</span>
              </span>
              <p className="text-[9px] text-stone-400 font-mono tracking-[0.15em] uppercase -mt-0.5">MARSA ALAM • RESORT BOUTIQUE</p>
            </div>
          </div>

        </div>
      </header>

      {/* CORE HERO INTRO SECTION with elegant backdrop */}
      <section className="bg-white border-b border-stone-200/60 relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-[radial-gradient(#f0ede9_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF6F0] text-amber-950 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-stone-200/80 shadow-sm">
            <Waves className="h-3.5 w-3.5 animate-pulse text-[#429e7c]" />
            RED SEA OPTIMIZATION PORTAL
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight font-black text-stone-950 leading-tight">
              D. Turtle <span className="italic font-normal">Beauty & Wellness Oasis</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-2xl mx-auto font-light">
              Experience exactly what a European tourist sees when browsing from their poolside sun bed. Switch flag languages to explore instant local translations, build custom boutique pickup lists, and chat in real-time with Dr. Turtle, our caring virtual beauty and wellness advisor.
            </p>
          </div>
        </div>
      </section>

      {/* RENDER DYNAMIC COMPONENTS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Showroom Catalog section */}
          <div className="lg:col-span-8">
            <DigitalShowroom 
              activeLang={activeLang} 
              onLangChange={setActiveLang} 
              onAskAdvisorClick={handleAskAdvisorForProduct}
            />
          </div>

          {/* Right Assistant Chat Widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <PharmacistAssistant 
              activeLang={activeLang} 
              prefillMsg={prefilledAdvisorQst} 
              onClearPrefill={() => setPrefilledAdvisorQst(undefined)}
            />
            
            {/* Extra CRO Reassurance Box */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 text-left space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-800">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Tourist Trust Certified</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Marsa Alam receives flights daily from Frankfurt, Rome, Prague, and Warsaw. D. Turtle guarantees genuine, sealed raw ingredients from our climate-controlled boutique storage.
              </p>
              <div className="flex gap-2 border-t border-dashed border-slate-100 pt-3 text-[10px] text-emerald-800 font-mono font-bold">
                <span>✓ Checked & Transparent</span>
                <span>✓ 1-Min Walk Nearby</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-[#0f291e] text-white/80 py-12 mt-16 border-t border-emerald-950/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 to-emerald-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-700/20 text-emerald-300 rounded-full flex items-center justify-center font-serif text-lg font-bold">
              D
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-white">Registered Marsa Alam Tourist Beauty & Wellness Boutique</p>
              <p className="text-[10px] text-slate-400">Verified Guest Protection Standards • Marsa Alam Hotel Association approved</p>
            </div>
          </div>
          <p className="text-[10px] font-mono text-slate-400">
            D. Turtle Ecommerce Strategy Framework &copy; 2026. All rights & strategies reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
