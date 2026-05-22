import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language } from '../types';
import { Send, Bot, User, Heart, AlertCircle, LifeBuoy, Clock } from 'lucide-react';

interface AdvisorAssistantProps {
  activeLang: Language;
  prefillMsg?: string;
  onClearPrefill?: () => void;
}

const localizedPrompts: Record<string, Record<Language, string>> = {
  assistantTitle: {
    en: "Dr. Turtle • AI Wellness & Care Assistant",
    de: "Dr. Turtle • KI-Wellness-Assistent",
    it: "Dr. Turtle • Assistente Benessere IA",
    pl: "Dr. Turtle • Pomocnik ds. pielęgnacji i słońca AI",
    cs: "Dr. Turtle • AI asistent pro péči a wellness"
  },
  assistantSub: {
    en: "Ask skincare, sōl & wellness questions in your language. Responds in real-time.",
    de: "Fragen Sie auf Deutsch über Magen-Komfort, Sonnenbrand oder Öle.",
    it: "Chiedi consigli in italiano su pelle arrossata, pancia gonfia o olii.",
    pl: "Zadaj pytanie po polsku o pielęgnację, słońce lub naturalne olejki.",
    cs: "Ptejte se v češtině na péči o pokožku namáhanou sluncem či pohodu zažívání."
  },
  placeholder: {
    en: "Describe your vacation care questions (e.g., stomach comfort, sunburn, oils)...",
    de: "Beschreiben Sie Ihre Symptome (z.B. Magen-Komfort, Sonnenbrand)...",
    it: "Racconta come ti senti (es. scottatura solare, pancia gonfia)...",
    pl: "Opisz swoje samopoczucie (np. pielęgnacja po słońcu, żołądek)...",
    cs: "Popište své potíže (např. spálení od slunce, zažívací potíže)..."
  },
  quickQst1: {
    en: "Stomach comfort & culinary adaptation tips 🍽️",
    de: "Tipps für Magenkomfort & Klima-Anpassung 🍽️",
    it: "Consigli per la cura dello stomaco in vacanza 🍽️",
    pl: "Wsparcie komfortu żołądka i trawienia 🍽️",
    cs: "Tipy pro zažívací pohodu a komfort při jídle 🍽️"
  },
  quickQst2: {
    en: "What should I apply for sun-stressed skin? ☀️",
    de: "Was hilft bei sonnenstrapazierter Haut? ☀️",
    it: "Come lenire la pelle arrossata dal sole? ☀️",
    pl: "Co nałożyć na skórę podrażnioną słońcem? ☀️",
    cs: "Jak pečovat o pokožku namáhanou sluncem? ☀️"
  },
  quickQst3: {
    en: "Are Egyptian natural oils pure & certified? 🧪",
    de: "Sind ägyptische Öle rein und zertifiziert? 🧪",
    it: "I vostri olii naturali sono puri certificati? 🧪",
    pl: "Czy Wasze olejki naturalne są certyfikowane? 🧪",
    cs: "Jsou vaše přírodní oleje čisté a s certifikátem? 🧪"
  },
  quickQst4: {
    en: "Can I reserve items for quick store pickup? 🛍️",
    de: "Kann ich Produkte zur schnellen Abholung reservieren? 🛍️",
    it: "Posso prenotare i prodotti per un ritiro rapido? 🛍️",
    pl: "Czy mogę zarezerwować produkty do szybkiego odbioru? 🛍️",
    cs: "Mohu si produkty rezervovat pro rychlé vyzvednutí? 🛍️"
  },
  initialHello: {
    en: "Hello! I am Dr. Turtle, your virtual wellness and skincare advisor. Currently in Marsa Alam Red Sea where the temperature is high and climate differs. How can I help you enjoy a perfect, sun-safe and relaxing vacation today?",
    de: "Hallo! Ich bin Dr. Turtle, Ihr persönlicher Wellness- und Hautpflegeberater. Bei über 35°C sorge ich für Ihren Sonnenschutz und Ihr Wohlbefinden. Was kann ich heute für Sie tun?",
    it: "Ciao! Sono il Dr. Turtle, il tuo personal advisor per il benessere e la pelle a Marsa Alam. Sono qui per aiutarti a proteggere la tua pelle dal sole forte e vivere al meglio le tue giornate. Di cosa hai bisogno oggi?",
    pl: "Dzień dobry! Jestem Dr. Turtle, Twój wirtualny doradca ds. pielęgnacji i słońca w Marsa Alam. Pomagam turystom dbać o skórę i dobre samopoczucie podczas wakacji. W czym mogę Ci pomóc?",
    cs: "Dobrý den! Jsem Dr. Turtle, váš osobní poradce pro péči a wellness v Marsa Alamu. Pomáhám turistům chránit pokožku před sluncem a udržet si pohodu během dovolené. Jak vám mohu dnes pomoci?"
  }
};

export default function PharmacistAssistant({ activeLang, prefillMsg, onClearPrefill }: AdvisorAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const tPrompt = (key: string): string => {
    return localizedPrompts[key]?.[activeLang] || localizedPrompts[key]?.['en'] || key;
  };

  // Setup initial greeting message based on active language on mount or lang change
  useEffect(() => {
    setMessages([
      {
        id: 'initial',
        sender: 'assistant',
        text: tPrompt('initialHello'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [activeLang]);

  // Handle outside product specs click trigger
  useEffect(() => {
    if (prefillMsg) {
      let msgText = "";
      if (activeLang === 'de') {
        msgText = `Können Sie mir mehr über "${prefillMsg}" erzählen und wie es mir in Marsa Alam helfen kann?`;
      } else if (activeLang === 'it') {
        msgText = `Puoi dirmi di più su "${prefillMsg}" e come può essermi utile a Marsa Alam?`;
      } else if (activeLang === 'pl') {
        msgText = `Czy możesz powiedzieć mi więcej o "${prefillMsg}" i jak może mi to pomóc w Marsa Alam?`;
      } else if (activeLang === 'cs') {
        msgText = `Můžete mi říci více o produktu "${prefillMsg}" a jak mi může v Marsa Alamu pomoci?`;
      } else {
        msgText = `Can you tell me more about "${prefillMsg}" and why it is recommended for vacation in Marsa Alam?`;
      }
      
      handleSendMessage(msgText);
      if (onClearPrefill) onClearPrefill();
    }
  }, [prefillMsg]);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    // Reset input box
    if (!textToSend) setInputText('');

    setErrorStatus(null);

    // 1. Add User Message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          language: activeLang
        }),
      });

      if (!response.ok) {
        throw new Error("Local wellness responder went briefly offline.");
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        id: `assist-${Date.now()}`,
        sender: 'assistant',
        text: data.text || "I am here. How can I help you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("Could not query AI agent. Active static advisor has been loaded.");
      
      // Add secure response to represent error boundaries seamlessly
      const fallbackMsg: ChatMessage = {
        id: `assist-fallback-${Date.now()}`,
        sender: 'assistant',
        text: "Please accept my apologies! Hotel internet cuts frequently in Marsa Alam. For immediate assistance, we recommend checking out our sun-protection recovery gels or Pharaoh's comfort kit on our digital catalog. You can also send an instant query directly to our real advisors via WhatsApp!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden flex flex-col h-[650px] shadow-sm font-sans" id="pharmacist-assistant">
      
      {/* HEADER SECTION */}
      <div className="bg-[#0f291e] p-5 text-white flex items-center justify-between border-b border-stone-900">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-stone-900 border border-stone-750 flex items-center justify-center font-bold text-lg text-amber-100">
            🐢
          </div>
          <div className="text-left">
            <h3 className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-[#429e7c]">Virtual Advisor</h3>
            <h4 className="text-sm font-serif font-bold tracking-tight text-white">{tPrompt('assistantTitle')}</h4>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-1 rounded-full text-[9px] font-mono tracking-wider border border-stone-800">
          <span className="h-1.5 w-1.5 rounded-full bg-[#429e7c] animate-pulse"></span>
          {activeLang.toUpperCase()} MODE
        </div>
      </div>

      {/* METRIC RIBBON */}
      <div className="bg-[#FAF6F0] text-stone-800 px-5 py-3.5 text-[11px] font-sans font-light flex items-center gap-2 border-b border-stone-200">
        <Heart className="h-3.5 w-3.5 text-amber-800 shrink-0" />
        <span>{tPrompt('assistantSub')}</span>
      </div>

      {/* CHAT BUBBLES SCROLL ZONE */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FAFDFC]">
        {messages.map((msg) => {
          const isBot = msg.sender === 'assistant';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${isBot ? 'mr-auto text-left' : 'ml-auto flex-row-reverse text-right'}`}
            >
              {/* Avatar */}
              <div className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center text-xs border shadow-sm ${
                isBot 
                  ? 'bg-amber-100 border-amber-200 text-amber-900' 
                  : 'bg-emerald-900 border-emerald-950 text-white font-bold'
              }`}>
                {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>

              {/* Bubble Body */}
              <div className="space-y-1">
                <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                  isBot 
                    ? 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-sm text-left' 
                    : 'bg-[#0f291e] text-[#FAF6F0] rounded-tr-none shadow-sm text-left'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-stone-400 font-mono px-1">
                  <Clock className="h-2.5 w-2.5" />
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading bubble */}
        {loading && (
          <div className="flex gap-3 max-w-[80%] mr-auto text-left">
            <div className="h-8 w-8 rounded-full shrink-0 bg-amber-50 border border-stone-200 text-stone-900 flex items-center justify-center animate-pulse">
              <Bot className="h-4 w-4 animate-spin-slow" />
            </div>
            <div className="p-3 bg-white border border-stone-200 rounded-2xl rounded-tl-none text-xs text-stone-500 shadow-sm flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 bg-stone-400 rounded-full animate-bounce"></span>
              <span className="h-1.5 w-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="h-1.5 w-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-[10px] italic font-serif pl-1">Dr. Turtle writing wellness advice...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* QUICK SUGGESTIONS CAROUSEL */}
      <div className="p-3 border-t border-stone-100 bg-white flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
        <button
          onClick={() => handleSendMessage(tPrompt('quickQst1'))}
          disabled={loading}
          className="bg-[#FAF6F0] hover:bg-[#F4ECE1] text-stone-850 border border-stone-200 rounded-lg text-[9px] font-sans font-extrabold uppercase tracking-widest px-3 py-2 shrink-0 transition"
        >
          {tPrompt('quickQst1')}
        </button>
        <button
          onClick={() => handleSendMessage(tPrompt('quickQst2'))}
          disabled={loading}
          className="bg-[#FAF6F0] hover:bg-[#F4ECE1] text-stone-850 border border-stone-200 rounded-lg text-[9px] font-sans font-extrabold uppercase tracking-widest px-3 py-2 shrink-0 transition"
        >
          {tPrompt('quickQst2')}
        </button>
        <button
          onClick={() => handleSendMessage(tPrompt('quickQst3'))}
          disabled={loading}
          className="bg-[#FAF6F0] hover:bg-[#F4ECE1] text-stone-850 border border-stone-200 rounded-lg text-[9px] font-sans font-extrabold uppercase tracking-widest px-3 py-2 shrink-0 transition"
        >
          {tPrompt('quickQst3')}
        </button>
        <button
          onClick={() => handleSendMessage(tPrompt('quickQst4'))}
          disabled={loading}
          className="bg-[#FAF6F0] hover:bg-[#F4ECE1] text-stone-850 border border-stone-200 rounded-lg text-[9px] font-sans font-extrabold uppercase tracking-widest px-3 py-2 shrink-0 transition"
        >
          {tPrompt('quickQst4')}
        </button>
      </div>

      {/* INPUT SUBMISSION FIELD */}
      <div className="p-3 border-t border-stone-150 bg-white flex gap-2 shrink-0">
        <input
          type="text"
          placeholder={tPrompt('placeholder')}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          disabled={loading}
          className="flex-1 bg-stone-50 text-xs py-3 px-4 rounded-xl border border-stone-250 focus:border-stone-900 focus:outline-none disabled:opacity-65 transition"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={loading || !inputText.trim()}
          className="bg-[#0f291e] hover:bg-stone-900 text-white p-3 rounded-xl border border-transparent flex items-center justify-center disabled:opacity-50 transition shrink-0 cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
