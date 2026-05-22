export type Language = 'en' | 'de' | 'it' | 'pl' | 'cs';

export interface MultilingualText {
  en: string;
  de: string;
  it: string;
  pl: string;
  cs: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'sun' | 'skincare' | 'hair' | 'wellness' | 'souvenirs';
  priceEUR: number;
  priceEGP: number;
  image: string;
  badge?: MultilingualText;
  title: MultilingualText;
  description: MultilingualText;
  indications: MultilingualText; // Quick vacation use cases
  advisorNote: MultilingualText; // Underlined as expert certified recommendation
  germanTested: boolean;
  italianVoted: boolean;
  popularNationalities: string[]; // e.g., ['de', 'it', 'pl']
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface StrategySection {
  id: string;
  title: string;
  chapterNumber: number;
  icon: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    croHighlight?: string;
    copyExample?: {
      scenario: string;
      headline: string;
      body: string;
      cta: string;
    };
  }[];
}
