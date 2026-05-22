import React, { useState } from 'react';
import { products } from '../data/products';
import { Product, Language } from '../types';
import { ProductImage } from './ProductImage';
import { ProductRating } from './ProductRating';
import { 
  ShoppingBag, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  Check, 
  X, 
  Info, 
  Plus, 
  Minus, 
  AlertTriangle,
  QrCode,
  Shield,
  Clock,
  ThumbsUp,
  Globe2,
  CalendarDays,
  Car,
  Thermometer,
  ArrowRight,
  TrendingUp,
  Award,
  Bookmark
} from 'lucide-react';

interface DigitalShowroomProps {
  activeLang: Language;
  onLangChange: (lang: Language) => void;
  onAskAdvisorClick: (productName: string) => void;
}

// Multilingual UI Dictionary for the premium store simulator
const uiTranslations: Record<string, Record<Language, string>> = {
  storeSubtitle: {
    en: "Marsa Alam Red Sea • Registered Beauty & Wellness Boutique",
    de: "Marsa Alam Rotes Meer • Registrierte Wellness- & Beauty-Boutique",
    it: "Mar Rosso Marsa Alam • Boutique Benessere e Bellezza Registrata",
    pl: "Marsa Alam Morze Czerwone • Rejestrowany Butik Urody i Wellness",
    cs: "Marsa Alam Rudé moře • Registrovaný butik s kosmetikou a wellness"
  },
  showroomTitle: {
    en: "Digital Discovery Showroom & Portfolio",
    de: "Digitaler Entdeckungs-Showroom & Portfolio",
    it: "Showroom di Scoperta Digitale & Portfolio",
    pl: "Cyfrowy Showroom Odkryć & Portfolio",
    cs: "Digitální objevný showroom a portfolio"
  },
  showroomIntro: {
    en: "Browse and discover premium Egyptian skincare & wellness botanics peacefully from your beach chair or hotel bed. Tap 'Save for Your Visit' to compile a personal wishlist of your favorites. When you are ready, visit our boutique (just a 1-minute walk) to test them or inquire with our wellness advisors via WhatsApp to learn more and prepare testers.",
    de: "Entdecken Sie erstklassige ägyptische Wellness- und Hautpflegeprodukte ganz entspannt vom Liegestuhl oder Hotelbett aus. Speichern Sie Ihre Favoriten absatzweise für Ihren Besuch. Besuchen Sie unsere nahegelegene Boutique (nur 1 Gehminute entfernt) oder kontaktieren Sie unsere Berater per WhatsApp, um Proben vorzubereiten.",
    it: "Sfoglia e scopri i migliori prodotti naturali per la pelle e il benessere direttamente dal tuo lettino. Salva i tuoi prodotti preferiti per la tua visita. Vieni a provarli gratuitamente in boutique (a solo 1 minuto a piedi) o contatta i consulenti su WhatsApp.",
    pl: "Przeglądaj i odkrywaj egipskie kosmetyki naturalne i olejki prosto z leżaka lub hotelowego łóżka. Zapisz swoje ulubione produkty na wizytę w butiku. Odwiedź nas (zaledwie minutę pieszo), by wypróbować je na miejscu, lub skonsultuj się z nami na WhatsApp.",
    cs: "Prohlížejte a objevujte prémiovou egyptskou kosmetiku a wellness produkty v klidu z lehátka. Uložte si své oblíbené produkty pro svou návštěvu. Navštivte náš butik (pouze 1 minuta chůze) pro jejich vyzkoušení nebo se zeptejte na WhatsApp dříve."
  },
  all: { en: "All", de: "Alle", it: "Tutti", pl: "Wszystko", cs: "Vše" },
  catSun: { en: "Sun & Wave Essentials ☀️", de: "Sonne & Meer Essentials ☀️", it: "Sole e Mar Rosso ☀️", pl: "Słońce i fale ☀️", cs: "Slunce a vlny ☀️" },
  catOils: { en: "Egyptian Treasures & Cosmetics 🧪", de: "Ägyptische Naturöle & Kosmetik 🧪", it: "Tesori & Cosmesi Egiziani 🧪", pl: "Egipskie skarby i kosmetyki 🧪", cs: "Egyptské poklady a kosmetika 🧪" },
  catWellness: { en: "Travel Wellness & Comfort 🌿", de: "Reise-Wellness & Magenkomfort 🌿", it: "Benessere in Viaggio & Comfort 🌿", pl: "Komfort podróży i wellness 🌿", cs: "Wellness a cestovní komfort 🌿" },
  priceTransparent: {
    en: "Exclusively In-Store",
    de: "Exklusiv in der Boutique",
    it: "Esclusivo in Boutique",
    pl: "Dostępne w butiku",
    cs: "K dostání v butiku"
  },
  reserveBtn: {
    en: "Save for Your Visit",
    de: "Für Ihren Besuch speichern",
    it: "Salva per la tua Visita",
    pl: "Zapisz na swoją wizytę",
    cs: "Uložit pro vaši návštěvu"
  },
  askPharmacist: {
    en: "Ask Advisor About This",
    de: "Berater dazu befragen",
    it: "Chiedi al Consulente",
    pl: "Zapytaj doradcę",
    cs: "Zeptat se poradce"
  },
  germanTested: {
    en: "German Quality Standard Tested",
    de: "Nach deutschem Qualitätsstandard geprüft",
    it: "Testato secondo gli standard tedeschi",
    pl: "Zgodny z niemieckimi normami jakości",
    cs: "Testováno podle německých standardů kvality"
  },
  italianVoted: {
    en: "Loved by Italian Diver Families",
    de: "Beliebt bei italienischen Tauchfamilien",
    it: "Molto amato dalle famiglie di sub italiani",
    pl: "Doceniany przez włoskie rodziny nurków",
    cs: "Oblíbené u italských rodin potápěčů"
  },
  orderListTitle: {
    en: "Your Saved Discovery List for Visiting Us",
    de: "Ihre Merkliste für den Boutiquen-Besuch",
    it: "La tua Lista di Scoperta in Boutique",
    pl: "Twoja Lista Odkryć na Wizytę",
    cs: "Váš seznam objevů pro návštěvu"
  },
  hotelLabel: {
    en: "Your Hotel or Resort (Where you are staying):",
    de: "Ihr Hotel oder Resort (Zur Bestätigung der Nähe):",
    it: "Il tuo Hotel o Resort (Per conferma vicinanza):",
    pl: "Twój hotel lub resort (Dla potwierdzenia bliskości):",
    cs: "Váš hotel nebo resort (Pro potvrzení blízkosti):"
  },
  roomLabel: {
    en: "Planned Visit Time (e.g., Tonight, Tomorrow, Friday):",
    de: "Geplante Abholzeit (z.B. Heute Abend, Morgen):",
    it: "Orario del Ritiro Stimato (es. Stasera, Domani):",
    pl: "Planowany czas odbioru (np. Dziś wieczorem, Jutro):",
    cs: "Předpokládaný čas vyzvednutí (např. Dnes večer, Zítra):"
  },
  totalPrice: {
    en: "Saved Products Count:",
    de: "Ausgewählte Produkte:",
    it: "Prodotti Selezionati:",
    pl: "Wybrane produkty:",
    cs: "Vybrané položky:"
  },
  sendOrder: {
    en: "Share Discovery Wishlist on WhatsApp 🚀",
    de: "Entdeckungsliste über WhatsApp teilen 🚀",
    it: "Invia Lista di Scoperta su WhatsApp 🚀",
    pl: "Prześlij listę odkryć na WhatsApp 🚀",
    cs: "Sdílet seznam objevů na WhatsApp 🚀"
  },
  deliveryStatus: {
    en: "Premium Discovery: Your saved list helps our wellness team prepare tester samples and custom aroma bottles for your arrival. No purchase obligation. Pay safely in-store only if you decide to buy something you love.",
    de: "Premium-Entdeckung: Ihre Merkliste hilft unserem Wellness-Team, Proben und Dufttester für Ihre Ankunft vorzubereiten. Kein Kaufzwang. Zahlen Sie sicher vor Ort nur bei Gefallen.",
    it: "Scoperta Premium: La tua lista salvata aiuta il nostro team a preparare campioni di prova e tester per il tuo arrivo. Nessun obbligo d'acquisto. Paghi solo se trovi qualcosa che ami.",
    pl: "Odkrywanie Premium: Zapisana lista pozwala naszemu zespołowi przygotować próbki i testery na Twój przyjazd. Brak zobowiązania do zakupu. Płacisz na miejscu tylko za to, co naprawdę pokochasz.",
    cs: "Prémiové objevování: Váš uložený seznam pomáhá našemu týmu připravit testery a vzorky pro váš příjezd. Bez závazku nákupu. Zaplatíte v prodejně pouze tehdy, pokud najdete něco, co si zamilujete."
  },
  addToList: {
    en: "Save & Visit",
    de: "Merken",
    it: "Salva & Visita",
    pl: "Zapisz",
    cs: "Uložit"
  },
  added: {
    en: "Saved!",
    de: "Gespeichert!",
    it: "Salvato!",
    pl: "Zapisano!",
    cs: "Uloženo!"
  },
  vsBazaarsTitle: {
    en: "Why D. Turtle is Safer Than Traditional Street Bazaars",
    de: "Warum D. Turtle sicherer ist als traditionelle Straßen-Basare",
    it: "Perché D. Turtle è più sicuro dei tradizionali Bazar di strada",
    pl: "Dlaczego D. Turtle jest bezpieczniejszy niż uliczne bazary",
    cs: "Proč je D. Turtle bezpečnější než tradiční bazary na ulici"
  },
  bazaarTableLabel1: { en: "Feature", de: "Eigenschaft", it: "Caratteristica", pl: "Cecha", cs: "Vlastnost" },
  bazaarTableLabel2: { en: "D. Turtle Boutique", de: "D. Turtle Boutique", it: "Boutique D. Turtle", pl: "Butik D. Turtle", cs: "Butik D. Turtle" },
  bazaarTableLabel3: { en: "Standard Bazaars", de: "Gewöhnliche Basare", it: "Bazar Tradizionali", pl: "Zwykłe bazary", cs: "Běžné bazary" },
  bazaarCol1: { en: "Boutique Location Proximity", de: "Lage der Boutique", it: "Vicinanza della Boutique", pl: "Lokalizacja i bliskość", cs: "Poloha a blízkost butiku" },
  bazaarCol1Val1: { en: "Just a comfortable 1-minute walk from major hotels. Enjoy a welcoming interior with aroma samples and air conditioning.", de: "Nur ein gemütlicher 1-minütiger Spaziergang von den großen Hotels entfernt. Genießen Sie klimatisierte Räume und Duftproben.", it: "Solo 1 minuto di piacevole passeggiata dagli hotel principali. Troverai aria condizionata e campioni gratuiti da provare.", pl: "Zaledwie komfortowy, 1-minutowy spacer od głównych hoteli. Przyjazne wejście, klimatyzacja i próbki zapachowe.", cs: "Pouze příjemná 1 minuta chůze od hlavních hotelů. Užijte si klimatizované prostředí a ochutnávku vůní." },
  bazaarCol1Val2: { en: "Far away, hard to find. Requires expensive taxi rides and navigating crowded, chaotic street brawls.", de: "Weit weg und schwer zu finden. Erfordert teure Taxifahrten und das Navigieren durch überfüllte, laute Gassen.", it: "Scomodo e lontano. Richiede costosi taxi e lo stress di contrattare in mezzo alla folla dei bazar.", pl: "Daleko i trudno trafić. Wymaga drogiej taksówki i przedzierania się przez chaotyczne bazary.", cs: "Daleko a těžko k nalezení. Vyžaduje drahé taxi a procházení chaotickými trhy." },
  bazaarCol2: { en: "Product Seal & Expiry", de: "Quality Seal & Expiry", it: "Sigilli e Scadenza", pl: "Plomby i data ważności", cs: "Pečeť a expirace" },
  bazaarCol2Val1: { en: "Double-sealed glass jars. Expiry dates regulated by certified quality board.", de: "Doppelversiegelte Glasflaschen. Richtlinien der Qualitätskontrolle.", it: "Vetro sigillato. Scadenze certificate dal comitato di controllo biologico.", pl: "Podwójnie plombowane szkło. Terminy kontrolowane przez instytuty certyfikujące.", cs: "Dvojitě zapečetěné sklenice. Expirace kontrolovaná standardy kvality." },
  bazaarCol2Val2: { en: "Loose plastic bottles. Diluted, oxidized or oil cut with paraffin.", de: "Lose Plastikflaschen. Oft gestreckt mit flüssigem Paraffin.", it: "Contenitori di plastica anonimi. Oli diluiti con paraffina.", pl: "Nieszczelny plastik. Często rozcieńczane płynną parafiną.", cs: "Obyčejný plast. Často ředěné tekutým parafínem." },
  bazaarCol3: { en: "Advice Reliability", de: "Beratungsqualität", it: "Competenza e Consigli", pl: "Wiarygodność porad", cs: "Spolehlivost rad" },
  bazaarCol3Val1: { en: "Certified natural botanists & wellness experts on staff.", de: "Zertifiziertes, naturheilkundliches Wellnesspersonal.", it: "Botanici e consulenti del benessere qualificati.", pl: "Certyfikowani botanicy i doradcy wellness.", cs: "Certifikovaní botanici a specialisté na wellness." },
  bazaarCol3Val2: { en: "Commission-driven street sellers offering pseudo-science.", de: "Provisionsgetriebene Straßenverkäufer ohne Fachbildung.", it: "Venditori di strada motivati da provvigioni, zero scienza.", pl: "Sprzedawcy uliczni pracujący na prowizję.", cs: "Poulični prodejci pracující na provizi." },
  scannedSignSim: {
    en: "Digital Showroom Shelf Navigator",
    de: "Digitaler Regal-Navigator",
    it: "Navigatore Digitale da Scaffale",
    pl: "Cyfrowy nawigator półkowy",
    cs: "Digitální navigátor na regálu"
  },
  scannedSignSimIntro: {
    en: "How this looks in life: Scan a wooden shelf-tag at D. Turtle physical store in Marsa Alam, Red Sea, Egypt, to load this product translation instantly on your device.",
    de: "Praxisbeispiel: Scannen Sie ein Holzschild am Regal in unserer Boutique in Marsa Alam, um diese Übersetzung sofort auf Ihrem Handy aufzurufen.",
    it: "Esempio reale: inquadra il QR di legno sugli scaffali del negozio di Marsa Alam per caricare all'istante la scheda tradotta sul tuo telefono.",
    pl: "Jak to działa w praktyce: Zeskanuj drewnianą tabliczkę na półce w butiku w Marsa Alam, aby natychmiast załadować plik tłumaczenia na swoim smartfonie.",
    cs: "Jak to vypadá v praxi: Naskenujte dřevěný štítek na regálu v butiku v Marsa Alamu a okamžitě načtěte detail produktu v češtině na svém telefonu."
  },
  whyChooseUsTitle: {
    en: "Why Choose Dr. Turtle?",
    de: "Warum Dr. Turtle wählen?",
    it: "Perché scegliere Dr. Turtle?",
    pl: "Dlaczego warto wybrać Dr. Turtle?",
    cs: "Proč si vybrat Dr. Turtle?"
  },
  whyChooseUsIntro: {
    en: "One of the biggest advantages of exploring our wellness store is trust and peace of mind.",
    de: "Einer der größten Vorteile des Erkundens unserer Wellness-Boutique ist Vertrauen und absolute Sorgenfreiheit.",
    it: "Uno dei maggiori vantaggi di scoprire la nostra boutique del benessere è la totale fiducia e tranquillità.",
    pl: "Jedną z największych zalet poznawania naszego butiku wellness jest zaufanie i całkowity spokój ducha.",
    cs: "Jednou z největších výhod objevování našeho wellness butiku je důvěra a naprostý klid v duši."
  },
  whyChooseUsSupervisionTitle: {
    en: "Full Hotel Supervision & Certified Quality Standard",
    de: "Volle Hotel-Aufsicht & Geprüfter Qualitätsstandard",
    it: "Supervisione dell'Hotel e Standard di Qualità Certificato",
    pl: "Pełny Nadzór Hotelu i Certyfikowany Standard Jakości",
    cs: "Úplný Dohled Hotelu a Certifikovaná Kvalita"
  },
  whyChooseUsSupervisionDesc: {
    en: "We operate under the full supervision and standards of the hotel, which means every guest is protected and treated fairly at all times. If any issue ever happens, hotel management ensures that guests receive full support and a proper solution immediately.",
    de: "Wir unterliegen der vollen Aufsicht und den strengen Standards des Hotels. Das bedeutet, dass jeder Gast geschützt ist und jederzeit fair behandelt wird. Falls ein Problem auftritt, stellt das Hotelmanagement sicher, dass Sie sofort Unterstützung und eine passende Lösung erhalten.",
    it: "Operiamo sotto la diretta supervisione e secondo gli standard del resort, il che significa che ogni ospite è tutelato e trattato con la massima correttezza. In caso di necessità, la direzione dell'hotel garantisce assistenza e soluzioni adeguate immediate.",
    pl: "Działamy pod pełnym nadzorem i zgodnie z restrykcyjnymi standardami hotelu. Oznacza to, że każdy gość jest w pełni chroniony i zawsze traktowany uczciwie. W razie problemów kierownictwo hotelu gwarantuje błyskawiczną pomoc i rozwiązanie.",
    cs: "Fungujeme pod plným dohledem a vysokými standardy hotelu. To znamená, že každý host je chráněn a je s ním zacházeno vždy férově. Pokud se objeví jakýkoliv problém, hotelový management zajistí okamžitou podporu a rychlé řešení."
  },
  whyChooseUsSaferTitle: {
    en: "Safer & More Reliable",
    de: "Sicherer & Zuverlässiger",
    it: "Molto Più Sicuro e Affidabile",
    pl: "Bezpieczniej i Pewniej",
    cs: "Bezpečnější a Spolehlivější"
  },
  whyChooseUsSaferDesc: {
    en: "This gives our guests a much safer and more reliable experience compared to many shops or malls outside the resort area.",
    de: "Dies bietet unseren Gästen ein weitaus sichereres, kontrolliertes und verlässlicheres Erlebnis im Vergleich zu vielen Geschäften oder Basaren außerhalb der Hotelanlage.",
    it: "Questo ti assicura un'esperienza d'acquisto notevolmente più protetta e trasparente rispetto a molti negozi o centri commerciali esterni al villaggio.",
    pl: "Daje to naszym gościom znacznie bezpieczniejsze i bardziej niezawodne doświadczenie w porównaniu do ulicznych sklepów czy galerii handlowych poza resortem.",
    cs: "To poskytuje našim hostům mnohem bezpečnější a spolehlivější zážitek ve srovnání s obchody nebo tržnicemi mimo hotelový resort."
  },
  whyChooseUsSavingsTitle: {
    en: "Save Both Time & Effort",
    de: "Sparen Sie Zeit & Aufwand",
    it: "Risparmio di Tempo e Sforzo",
    pl: "Oszczędność Czasu i Wysiłku",
    cs: "Ušetříte Čas i Úsilí"
  },
  whyChooseUsSavingsDesc: {
    en: "Exploring with us prevents unnecessary vacation stress and extra costs, giving you maximum convenience:",
    de: "Das Entdecken bei uns verhindert unnötigen Urlaubsstress und Extrakosten und bietet Ihnen maximalen Komfort:",
    it: "Scegliere la nostra farmacia elimina la stanchezza e ti fa risparmiare soldi con la massima comodità:",
    pl: "Zakupy u nas eliminują stres i niepotrzebne koszty, oferując maksymalną wygodę na miejscu:",
    cs: "Nákup u nás eliminuje stres a zbytečné výdaje, což vám přináší maximální pohodlí:"
  },
  savingBullet1: {
    en: "No need to take a taxi into the city (saving €15 taxi fare)",
    de: "Keine Taxifahrt in die Stadt nötig (spart ca. 15 Euro Taxigebühr)",
    it: "Nessun bisogno di prendere un taxi per la città (risparmi €15 di corsa)",
    pl: "Brak konieczności zamawiania taksówki do miasta (oszczędzasz ~15 EUR)",
    cs: "Nemusíte platit taxi do města (ušetříte 15 Euro za jízdné)"
  },
  savingBullet2: {
    en: "No wasted vacation time searching between far shops",
    de: "Keine verschwendete kostbare Urlaubszeit mit Suchen in fernen Läden",
    it: "Nessun tempo prezioso della vacanza perso a cercare tra mille negozi",
    pl: "Brak marnowania cennego czasu urlopu na szukanie i obijanie się po sklepach",
    cs: "Žádný ztracený čas dovolené hledáním a obíháním vzdálených obchodů"
  },
  savingBullet3: {
    en: "No extra transportation fees, high pressure or hidden costs",
    de: "Keine zusätzlichen Transportgebühren, kein Kaufdruck oder versteckte Kosten",
    it: "Nessun costo di trasporto imprevisto, nessuna pressione all'acquisto",
    pl: "Brak dodatkowych opłat za przejazdy, natrętnych sprzedawców czy ukrytych kosztów",
    cs: "Žádné dodatečné poplatky za dopravu, nátlakový prodej nebo skryté náklady"
  },
  savingBullet4: {
    en: "Everything you need is available conveniently near your hotel room",
    de: "Alles, was Sie brauchen, ist bequem in der Nähe Ihres Hotelzimmers verfügbar",
    it: "Tutto ciò di cui hai bisogno è comodamente vicino alla tua camera",
    pl: "Wszystko, czego potrzebujesz, jest dostępne tuż obok Twojego hotelowego pokoju",
    cs: "Vše, co potřebujete, je k dispozici pohodlně nablízku vašemu pokoji"
  },
  whyChooseUsRelax: {
    en: "Relax, browse comfortably from your room or the beach, and visit us whenever you’re ready.",
    de: "Entspannen Sie sich, stöbern Sie gemütlich von Ihrem Zimmer oder vom Strand aus und besuchen Sie uns, wann immer Sie bereit sind.",
    it: "Rilassati, sfoglia il nostro assortimento comodamente dalla camera o dalla spiaggia, e passa a trovarci quando vuoi.",
    pl: "Zrelaksuj się, przeglądaj katalog wygodnie z pokoju lub plaży i odwiedź nas, gdy tylko będziesz gotowy.",
    cs: "Odpočiňte si, prolistujte si naši nabídku pohodlně z pokoje nebo pláže a navštivte nás, až budete připraveni."
  },
  whyChooseUsQuestion: {
    en: "Why waste two hours of your holiday in a taxi just to save a few cents? Port Ghalib shops often leave products in the heat; we keep our shop cool to protect the natural ingredients.",
    de: "Warum zwei Stunden Ihres Urlaubs im Taxi verschwenden, nur um ein paar Cent zu sparen? Die Geschäfte in Port Ghalib lassen Produkte oft in der Hitze stehen; wir halten unsere Apotheke kühl, um die natürlichen Inhaltsstoffe zu schützen.",
    it: "Perché sprecare due ore di vacanza su un taxi solo per risparmiare pochi centesimi? I negozi di Port Ghalib spesso lasciano i prodotti sotto il sole caldissimo; noi teniamo il nostro negozio fresco per proteggere l'integrità degli ingredienti naturali.",
    pl: "Po co marnować dwie godziny urlopu w taksówce, by zaoszczędzić parę centów? Sklepy w Port Ghalib często zostawiają produkty na upale; my dbamy o chłodną temperaturę w naszej aptece, aby chronić naturalne składniki.",
    cs: "Proč ztrácet dvě hodiny dovolené v taxi jen proto, abyste ušetřili pár centů? Obchody v Port Ghalibu často nechávají produkty na horku; my udržujeme náš obchod v chladu, abychom chránili přírodní ingredience."
  },
  whyChooseUsHeatTitle: {
    en: "Temperature-Controlled Quality Protection",
    de: "Temperaturkontrollierter Qualitätsschutz",
    it: "Protezione Termica della Qualità",
    pl: "Ochrona przed temperaturą w aptece",
    cs: "Ochrana kvality v chladu"
  },
  whyChooseUsHeatDesc: {
    en: "Port Ghalib shops often leave products in the heat; we keep our shop cool to protect the natural, active ingredients.",
    de: "Viele Händler draußen lagern sensible Öle in praller Hitze. Bei uns schützt eine konstante Klimatisierung die wertvollen Heilstoffe.",
    it: "I negozi esterni spesso espongono i beni al caldo torrido. Noi conserviamo tutto al fresco per salvare i principi attivi naturali.",
    pl: "Tradycyjne kramy często wystawiają kosmetyki na słońce i upał. Nasz chłodny lokal gwarantuje pełną moc naturalnych składników.",
    cs: "Běžné obchody často nechávají oleje ležet v horku. My v lékárně chráníme aktivní přírodní složky v chladu a stínu."
  }
};

export default function DigitalShowroom({ activeLang, onLangChange, onAskAdvisorClick }: DigitalShowroomProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sun' | 'wellness' | 'hair' | 'souvenirs'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [showCartModal, setShowCartModal] = useState(false);
  const [copiedMessageSim, setCopiedMessageSim] = useState(false);
  const [scannedProductSim, setScannedProductSim] = useState<string | null>(null);

  const t = (key: string): string => {
    return uiTranslations[key]?.[activeLang] || uiTranslations[key]?.['en'] || key;
  };

  const getProductCountInCart = (id: string) => cart[id] || 0;

  const handleAddToCart = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id]--;
      }
      return updated;
    });
  };

  const getCartTotals = () => {
    let count = 0;
    let totalEUR = 0;
    let totalEGP = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      const gQty = qty as number;
      const prod = products.find(p => p.id === id);
      if (prod) {
        count += gQty;
        totalEUR += prod.priceEUR * gQty;
        totalEGP += prod.priceEGP * gQty;
      }
    });
    return { count, totalEUR, totalEGP };
  };

  const { count: cartCount, totalEUR, totalEGP } = getCartTotals();

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'sun') return p.category === 'sun';
    if (activeCategory === 'wellness') return p.category === 'wellness';
    if (activeCategory === 'hair') return p.category === 'hair';
    if (activeCategory === 'souvenirs') return p.category === 'souvenirs';
    return false;
  });

  // Generates the deep-link pre-filled Whatsapp text in the exact tourist language selected
  const generateWhatsAppMessage = () => {
    let orderList = '';
    Object.entries(cart).forEach(([id, qty]) => {
      const prod = products.find(p => p.id === id);
      if (prod) {
        orderList += `- ${prod.name} (${prod.badge?.[activeLang] || ''})\n`;
      }
    });

    const hotelInfo = hotelName ? `Hotel/Resort: ${hotelName}` : 'Hotel/Resort: [Near the boutique]';
    const pickupTimeInfo = roomNumber ? `Planned Visit: ${roomNumber}` : 'Planned Visit: [Soon during my stay]';

    let greeting = "Hello Dr. Turtle!";
    let bookingText = "I would like to explore these premium beauty & wellness products and try them in person during my stay:";
    let footerText = "Could you please confirm if you have tester samples or custom bottles of these available to experience at your resort boutique? Thank you!";

    if (activeLang === 'de') {
      greeting = "Hallo Dr. Turtle!";
      bookingText = "Ich würde diese exquisiten Produkte gerne bei meinem Aufenthalt ausprobieren:";
      footerText = "Könnten Sie mir bitte mitteilen, ob Sie Duftproben oder Tester davon vorrätig haben? Vielen Dank!";
    } else if (activeLang === 'it') {
      greeting = "Ciao Dr. Turtle!";
      bookingText = "Vorrei scoprire questi fantastici prodotti per la pelle e provarli durante la mia vacanza:";
      footerText = "Potreste confermarmi se ci sono campioni di prova disponibili da testare in boutique? Grazie mille!";
    } else if (activeLang === 'pl') {
      greeting = "Dzień dobry Dr. Turtle!";
      bookingText = "Chciałbym poznać te produkty naturalne i wypróbować je osobiście podczas butikowej wizyty:";
      footerText = "Czy posiadacie Państwo testery tych produktów na miejscu do wypróbowania? Dziękuję!";
    } else if (activeLang === 'cs') {
      greeting = "Dobrý den, Dr. Turtle!";
      bookingText = "Rád bych objevil tyto produkty a vyzkoušel je osobně ve vašem butiku během svého pobytu:";
      footerText = "Máte prosím v butiku k dispozici vzorečky k vyzkoušení? Děkuji mnohokrát!";
    }

    const compiledText = `${greeting}\n\n${bookingText}\n\n${orderList}\n📍 Planned Visit Details:\n- ${hotelInfo}\n- ${pickupTimeInfo}\n\n${footerText}`;
    return compiledText;
  };

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    const url = `https://wa.me/201204683100?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyWhatsAppSim = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopiedMessageSim(true);
    setTimeout(() => setCopiedMessageSim(false), 2000);
  };

  return (
    <div className="space-y-12" id="showroom-view">
      
      {/* LUXURY REGION & LANGUAGE SELECTOR - Thin Fenty-Style Bar */}
      <div className="w-full border-b border-stone-200/80 pb-6 mb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
        <div className="flex items-center gap-2 text-stone-600">
          <Globe2 className="h-4 w-4 text-stone-800" />
          <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-stone-500">BOUTIQUE LOCALE SELECTOR</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-100 border border-stone-200/50 p-1 rounded-full px-2">
          {(['en', 'de', 'it', 'pl', 'cs'] as Language[]).map((lang) => {
            const flagMap: Record<Language, string> = { en: "EN", de: "DE", it: "IT", pl: "PL", cs: "CZ" };
            const isActive = activeLang === lang;
            return (
              <button
                key={lang}
                id={`btn-lang-${lang}`}
                onClick={() => onLangChange(lang)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 tracking-wider ${
                  isActive 
                    ? 'bg-stone-900 text-white shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {flagMap[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* EDITORIAL BANNER HERO - Inspired by High-End cosmetics lookbook */}
      <div className="bg-[#FAF6F0] border border-stone-200/80 rounded-[2rem] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10">
        {/* Decorative thin background linework */}
        <div className="absolute inset-0 bg-[radial-gradient(#dfdcd6_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none" />
        
        {/* Hero content Left */}
        <div className="flex-1 space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 bg-[#0f291e] text-amber-100 border border-emerald-950 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200 animate-pulse"></span>
            {t('storeSubtitle')}
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-950 font-extrabold tracking-tight leading-none">
              D. Turtle <br/>
              <span className="text-stone-800 font-normal italic font-serif">Curated Skincare & Botanics</span>
            </h1>
            <p className="text-[11px] uppercase tracking-[0.25em] text-amber-900 font-extrabold font-sans">
              📍 1-MINUTE WALK FROM PORT GHALIB RESORTS
            </p>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed font-sans max-w-lg font-light">
            {t('showroomIntro')}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              In-Store Discovery & Testing
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              No Aggressive Beach Hawking
            </div>
          </div>
        </div>

        {/* Hero Visual Right - Gorgeous floating cosmetics layout card */}
        <div className="w-full lg:w-[320px] shrink-0 bg-white border border-stone-250/70 p-6 rounded-3xl shadow-xl shadow-stone-900/5 relative z-10 flex flex-col justify-between space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] block">SENSITIVE SKIN / FIRST VISIT</span>
            <h3 className="text-lg font-serif font-black text-stone-900 tracking-tight leading-snug">
              "Is Red Sea wind baking your skin?"
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Resort pools and reef saltwater strip natural oils. D. Turtle guarantees genuine, sealed 100% molecular olive soap and aloe.
            </p>
          </div>

          <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[8px] uppercase tracking-wider text-stone-400 block font-bold">EXPLORATION METHOD</span>
              <span className="text-xs font-bold text-[#0f291e] flex items-center gap-1">✉ WhatsApp & Test In-Store</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-stone-200 flex items-center justify-center text-xs">
              🐚
            </div>
          </div>
        </div>
      </div>

      {/* LUXURY SLIM NAVIGATION CATEGORY SELECTORS */}
      <div className="border-y border-stone-200 py-2.5">
        <div className="flex overflow-x-auto gap-1 sm:gap-6 justify-start md:justify-center scrollbar-none scroll-smooth py-1 px-2">
          {(['all', 'sun', 'hair', 'wellness', 'souvenirs'] as const).map((cat) => {
            const labelMap: Record<string, string> = {
              all: t('all'),
              sun: t('catSun').replace(/☀️|🌿|🧪/g, '').trim(),
              hair: t('catOils').replace(/☀️|🌿|🧪/g, '').trim(),
              wellness: t('catWellness').replace(/☀️|🌿|🧪/g, '').trim(),
              souvenirs: "Royal Souvenirs 🏺"
            };
            
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border-b-2 shrink-0 ${
                  isActive
                    ? 'border-stone-950 text-stone-950 font-black'
                    : 'border-transparent text-stone-400 hover:text-stone-700 hover:border-stone-200'
                }`}
              >
                {labelMap[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS DISPLAY GRID - BEAUTIFUL BALANCED IMAGERY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {filteredProducts.map((product) => {
          const count = getProductCountInCart(product.id);
          return (
            <div
              key={product.id}
              id={`prod-card-${product.id}`}
              onClick={() => setSelectedProduct(product)}
              className="bg-white border border-stone-200/80 overflow-hidden cursor-pointer flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-stone-950/5 hover:border-stone-300 relative rounded-2xl"
            >
              
              {/* Image Container - Balanced and Professional Portrait Proportions (4:5) with elegant inset framing */}
              <div className="relative aspect-[4/5] bg-[#FAF8F5] p-3 sm:p-4 overflow-hidden border-b border-stone-100/60 flex items-center justify-center">
                <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow-sm border border-stone-100">
                  <ProductImage
                    productId={product.id}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
                
                {/* Specific reef-safe tag */}
                {product.badge?.[activeLang] && (
                  <span className="absolute top-5 left-5 bg-stone-900/95 text-[6.5px] sm:text-[8px] font-sans font-extrabold text-[#FAF6F0] px-2 py-1 uppercase tracking-[0.15em] shadow-sm backdrop-blur-sm rounded">
                    {product.badge[activeLang]}
                  </span>
                )}

                {/* Overlaid Modern Indicator instead of heavy corner banner */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm border border-stone-200/80 rounded px-1.5 py-0.5 text-right shadow-xs">
                  <span className="text-[6.5px] sm:text-[8px] font-sans font-bold text-[#429e7c] uppercase tracking-widest block">
                    🌿 PURE
                  </span>
                </div>
              </div>

              {/* Card Body - Balanced, elegant typography & breathing space */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5 text-left mb-4">
                  <span className="text-[7.5px] sm:text-[9px] uppercase tracking-[0.22em] text-[#429e7c] font-black font-sans block opacity-95">
                    {product.category === 'sun' ? "Sun & Sea" : product.category === 'wellness' ? "Travel Wellness" : "Nile Valley Treas."}
                  </span>

                  <h2 className="text-sm sm:text-base font-serif font-black text-stone-900 group-hover:text-amber-950 transition-colors duration-300 tracking-tight leading-snug">
                    {product.name}
                  </h2>
                  
                  <p className="text-[10px] sm:text-xs text-amber-950/85 font-serif italic line-clamp-1 block leading-normal">
                    {product.title[activeLang]}
                  </p>

                  <ProductRating 
                    productId={product.id} 
                    activeLang={activeLang} 
                    variant="card"
                  />
                  
                  <p className="text-[10px] sm:text-xs text-stone-500/95 leading-relaxed font-light line-clamp-2 sm:line-clamp-3 mt-1.5 select-none">
                    {product.description[activeLang]}
                  </p>
                </div>

                {/* Card Footer Section - Clean separation, lightweight luxury indicators */}
                <div className="pt-3.5 border-t border-stone-100/85 flex flex-col space-y-3.5 mt-auto">
                  {/* Micro Indicators Line - Exquisite & Minimal */}
                  <div className="flex items-center justify-between gap-1 text-[7.5px] sm:text-[9px] uppercase tracking-widest text-stone-400 font-sans font-semibold">
                    <span className="text-[#429e7c] flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                      Test in store
                    </span>
                    <div className="flex gap-1 shrink-0">
                      {product.germanTested && (
                        <span className="bg-stone-50 border border-stone-200/40 px-1.5 py-0.5 rounded text-[6.5px] sm:text-[7.5px] font-bold text-stone-500 uppercase tracking-widest">
                          DE Verified
                        </span>
                      )}
                      {product.italianVoted && (
                        <span className="bg-stone-50 border border-stone-200/40 px-1.5 py-0.5 rounded text-[6.5px] sm:text-[7.5px] font-bold text-stone-500 uppercase tracking-widest">
                          IT Choice
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Elegant CTA Action Row - Mobile-First, Full Width */}
                  <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    {count > 0 ? (
                      <div className="flex items-center justify-between w-full bg-[#f1f5f3] border border-emerald-100/85 rounded-lg p-1 select-none">
                        <button 
                          onClick={(e) => handleRemoveFromCart(product.id, e)}
                          className="p-1 rounded-md bg-white hover:bg-stone-100 text-[#0f291e] border border-stone-200/75 active:scale-95 transition-all w-7 h-7 flex items-center justify-center cursor-pointer shadow-3xs"
                        >
                          <Minus className="h-2.5 w-2.5" />
                        </button>
                        
                        <span className="text-[9.5px] sm:text-[10.5px] font-bold font-sans text-emerald-800 px-2 tracking-widest uppercase text-center flex items-center gap-1 select-none">
                          <Check className="h-3 w-3 text-emerald-600" />
                          {t('added')} ({count})
                        </span>
                        
                        <button 
                          onClick={(e) => handleAddToCart(product.id, e)}
                          className="p-1 rounded-md bg-white hover:bg-stone-100 text-[#0f291e] border border-stone-200/75 active:scale-95 transition-all w-7 h-7 flex items-center justify-center cursor-pointer shadow-3xs"
                        >
                          <Plus className="h-2.5 w-2.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleAddToCart(product.id, e)}
                        className="w-full bg-transparent hover:bg-stone-900 border border-stone-250 hover:border-stone-900 text-stone-800 hover:text-white text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.14em] font-extrabold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-3xs"
                      >
                        <Bookmark className="h-3.5 w-3.5 text-stone-500 group-hover:text-stone-300 transition-colors shrink-0" />
                        <span>{t('addToList')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAILED LUXURY MODAL DRAWER-SHEET */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-stone-950/50 backdrop-blur-md z-50 flex items-center justify-end p-0 md:p-4">
          {/* Slide out card layout - beautiful editorial feel */}
          <div className="bg-[#FAF6F0] w-full max-w-2xl h-full md:h-[95vh] md:rounded-[2rem] border border-stone-300/80 overflow-y-auto shadow-2xl relative animate-drawer-slide flex flex-col">
            
            {/* Modal close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 bg-white shadow-md border border-stone-200 p-2.5 rounded-full text-stone-600 hover:text-black hover:scale-105 transition-all duration-300 z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Split cover / Visual Column */}
            <div className="relative aspect-[4/3] w-full bg-white border-b border-stone-250">
              <ProductImage
                productId={selectedProduct.id}
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[9px] bg-[#FAF6F0] text-[#0f291e] font-sans font-black tracking-[0.2em] px-3.5 py-1.5 rounded uppercase">
                  {selectedProduct.badge?.[activeLang] || 'Premium Quality Organic'}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight mt-3 text-white">
                  {selectedProduct.name}
                </h2>
              </div>
            </div>

            {/* Content Column scroll container */}
            <div className="p-6 md:p-10 space-y-8 flex-1 text-left">
              {/* Pickup Location Info */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="left flex flex-col items-start">
                  <span className="text-[9px] uppercase font-extrabold tracking-[0.2em] text-stone-400 font-sans">AVAILABLE IN-STORE</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-stone-950 uppercase tracking-wide">🛍️ Visit and Experience (1-Min Walk Nearby)</span>
                  </div>
                </div>
                <div className="text-left py-1 pr-1 border-t sm:border-t-0 sm:border-l sm:pl-4 border-stone-200">
                  <span className="text-xs font-bold text-[#429e7c] uppercase tracking-wider block">
                    🌿 In-Store Testers
                  </span>
                  <p className="text-[10px] text-stone-400 font-sans tracking-wide">Ready for trial</p>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-sans font-extrabold text-[#0f291e] uppercase tracking-[0.2em] border-b border-stone-250 pb-2">
                  📖 {selectedProduct.title[activeLang]}
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {selectedProduct.description[activeLang]}
                </p>
                
                <ProductRating 
                  productId={selectedProduct.id} 
                  activeLang={activeLang} 
                  variant="detail"
                />
              </div>

              {/* Beach/Pool Indications */}
              <div className="bg-amber-50/50 border-l-4 border-stone-900 p-5 rounded-r-xl space-y-2">
                <h4 className="text-[10px] font-extrabold text-stone-900 font-sans uppercase tracking-[0.25em]">
                  ✨ VACATION SPECIFIC USE INDICATION
                </h4>
                <p className="text-xs text-stone-750 font-light leading-relaxed">
                  {selectedProduct.indications[activeLang]}
                </p>
              </div>

              {/* Custom Certified Advisor recommendation card */}
              <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-sm relative">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#FAF6F0] rounded-full border border-stone-200 flex items-center justify-center font-bold text-stone-900 shadow-inner">
                    🌿
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0f291e] tracking-tight uppercase">Certified Wellness Advisor Recommendation</h4>
                    <p className="text-[9px] text-stone-400 font-mono tracking-wider">Marsa Alam Quality Certified Board</p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed italic border-t border-stone-100 pt-3">
                  {selectedProduct.advisorNote[activeLang]}
                </p>
              </div>

              {/* Interaction trigger buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct.id);
                    setSelectedProduct(null);
                    setShowCartModal(true);
                  }}
                  className="bg-[#0f291e] hover:bg-stone-900 text-[#FAF6F0] text-xs font-extrabold uppercase tracking-[0.25em] py-4 px-6 rounded-xl flex-1 flex items-center justify-center gap-2 transition duration-300 hover:shadow-lg hover:shadow-stone-950/15"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {t('addToList')}
                </button>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onAskAdvisorClick(selectedProduct.name);
                  }}
                  className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 text-xs font-extrabold uppercase tracking-[0.15em] py-4 px-6 rounded-xl flex-1 flex items-center justify-center gap-2 transition duration-300"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-850" />
                  {t('askPharmacist')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY LUXURY MOBILE CTA FLOW (Persistent Discovery helper bar) */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-stone-950/95 text-white py-3.5 px-6 rounded-full shadow-2xl border border-stone-800 z-40 flex items-center gap-6 justify-between max-w-lg w-[92%] transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-[#FAF6F0] text-stone-950 font-mono text-xs font-extrabold h-6 w-6 rounded-full flex items-center justify-center shadow-inner scale-105">
              {cartCount}
            </div>
            <div className="text-left leading-none">
              <p className="text-[11px] font-black uppercase text-stone-300 tracking-wider">Discovery Wishlist</p>
              <p className="text-[9px] text-[#429e7c] font-bold mt-1 tracking-wide">
                Items selected of interest
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowCartModal(true)}
            className="bg-[#FAF6F0] hover:bg-white text-stone-950 text-[10px] font-extrabold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full shadow-md transition shrink-0 active:scale-95"
          >
            Review Saved List
          </button>
        </div>
      )}

      {/* WHATSAPP CART CHECKOUT MODAL BUILDER (Boutique Reservation Review) */}
      {showCartModal && (
        <div className="fixed inset-0 bg-stone-950/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#FAF6F0] rounded-[2rem] border border-stone-300 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 space-y-6">
            
            <div className="flex justify-between items-center border-b border-stone-200/80 pb-4">
              <span className="text-serif font-black text-lg text-stone-900 flex items-center gap-2 tracking-tight">
                📋 {t('orderListTitle')}
              </span>
              <button 
                onClick={() => setShowCartModal(false)}
                className="text-stone-400 hover:text-black hover:scale-105 transition-all p-1.5 rounded-full border border-transparent hover:border-stone-200 bg-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Selected items list */}
            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = products.find(p => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="flex items-center justify-between gap-3 bg-white p-4 rounded-xl border border-stone-200">
                    <div className="flex items-center gap-3">
                      <ProductImage
                        productId={id}
                        src={prod.image}
                        alt={prod.name}
                        className="h-12 w-12 rounded-lg object-cover border border-stone-100"
                        thumbnail={true}
                      />
                      <div className="text-left">
                        <h4 className="text-xs font-black text-stone-900 line-clamp-1">{prod.name}</h4>
                        <p className="text-[10px] text-emerald-800 font-sans uppercase tracking-widest font-bold">Saved for Visit</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-stone-100 border border-stone-200 p-1 rounded-lg shrink-0">
                      <button 
                        onClick={() => handleRemoveFromCart(id)}
                        className="p-1 rounded bg-white hover:bg-stone-50 border border-stone-200/50 text-stone-800 active:scale-95 transition"
                      >
                        <Minus className="h-2.5 w-2.5" />
                      </button>
                      <span className="text-xs font-mono font-bold px-1 min-w-[12px] text-center">{qty}</span>
                      <button 
                        onClick={() => handleAddToCart(id)}
                        className="p-1 rounded bg-white hover:bg-stone-50 border border-stone-200/50 text-stone-800 active:scale-95 transition"
                      >
                        <Plus className="h-2.5 w-2.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inputs for hotel confirmation */}
            <div className="space-y-4 pt-3 border-t border-stone-250">
              <div className="text-left">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1.5">{t('hotelLabel')}</label>
                <input 
                  type="text" 
                  placeholder="e.g., Jaz Maraya Resort..."
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full bg-white text-xs py-3 px-4 rounded-xl border border-stone-250 focus:border-stone-900 focus:outline-none transition-all"
                />
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1.5">{t('roomLabel')}</label>
                <input 
                  type="text" 
                  placeholder="e.g., Tonight at 7:00 PM (Optional)"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="w-full bg-white text-xs py-3 px-4 rounded-xl border border-stone-250 focus:border-stone-900 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Premium Totals Breakdown */}
            <div className="bg-white border border-stone-250 rounded-xl p-4 space-y-2 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 font-sans">WISHLIST SAVED COUNT</span>
                <span className="text-xs font-bold text-[#0f291e]">{cartCount} items selected</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 font-sans">EXPERIENCE PATHWAY</span>
                <span className="text-xs font-bold text-emerald-800">In-Store Botanical Testing</span>
              </div>
            </div>

            {/* WHATSAPP MESSAGE PREVIEW */}
            <div className="bg-stone-100/60 border border-stone-200 rounded-xl p-4 text-left space-y-2">
              <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-stone-400 font-extrabold">GENERATED WHATSAPP TEXT</span>
                <button 
                  onClick={handleCopyWhatsAppSim}
                  className="text-[9px] uppercase tracking-wider text-stone-850 font-bold hover:text-black px-3 py-1.5 rounded-md border border-stone-300 bg-white transition shadow-sm"
                >
                  {copiedMessageSim ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="text-[10px] text-stone-600 overflow-y-auto font-mono whitespace-pre-wrap max-h-[80px] leading-relaxed">
                {generateWhatsAppMessage()}
              </pre>
            </div>

            {/* Primary Reservation triggers */}
            <div className="space-y-3">
              <button
                onClick={handleLaunchWhatsApp}
                className="w-full bg-emerald-700 hover:bg-[#0f291e] text-white text-xs font-extrabold uppercase tracking-wider py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/15"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                {t('sendOrder')}
              </button>
              <div className="flex gap-3 bg-white border border-stone-200 rounded-xl p-4 text-stone-700 text-[10px] leading-relaxed text-left">
                <Shield className="h-4 w-4 shrink-0 text-stone-800" />
                <span>{t('deliveryStatus')}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDITORIAL BENTO TRUST BLOCK - BEAUTIFUL SPA FIELD NOTES */}
      <section className="bg-white border border-stone-200 rounded-[2.5rem] p-6 md:p-12 space-y-10 shadow-sm">
        {/* Modern high-end cosmetics subtitle section */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-[9px] font-sans font-black text-amber-900 border border-amber-800/20 rounded-full px-4 py-1.5 uppercase tracking-[0.25em] inline-block">
            🛡️ CERTIFICATE OF TRUST
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-black text-stone-950 tracking-tight leading-tight">
            {t('whyChooseUsTitle')}
          </h3>
          <p className="text-base font-serif font-light text-stone-600 leading-relaxed italic border-l-2 border-stone-800 pl-4">
            “{t('whyChooseUsIntro')}”
          </p>
        </div>

        {/* 2-Column High-Contrast Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          
          {/* Bento box 1 - Resort Protection */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 lg:p-8 border border-stone-250 flex flex-col justify-between hover:border-amber-900/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white text-stone-900 rounded-xl border border-stone-200 shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-serif font-extrabold text-stone-950">
                  {t('whyChooseUsSupervisionTitle')}
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed text-left font-light">
                {t('whyChooseUsSupervisionDesc')}
              </p>
              <div className="pt-4 border-t border-stone-250">
                <p className="text-xs font-semibold text-stone-800 text-left flex items-start gap-2">
                  <span className="text-emerald-700">✓</span>
                  <span>{t('whyChooseUsSaferDesc')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bento box 2 - Safe Travels & Financial Preservation */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 lg:p-8 border border-stone-250 flex flex-col justify-between hover:border-amber-900/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white text-stone-900 rounded-xl border border-stone-200 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-serif font-extrabold text-stone-950">
                  {t('whyChooseUsSavingsTitle')}
                </h4>
              </div>
              
              <p className="text-xs text-stone-500 leading-relaxed text-left font-light -mt-2">
                {t('whyChooseUsSavingsDesc')}
              </p>

              {/* Bullet list with modern neutral blocks */}
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-2.5 text-left">
                  <span className="bg-stone-950 text-[#FAF6F0] font-bold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">SAVE</span>
                  <span className="text-stone-700 font-semibold">{t('savingBullet1')}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-2.5 text-left">
                  <span className="bg-stone-955 text-[#FAF6F0] font-bold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">TIME</span>
                  <span className="text-stone-700 font-semibold">{t('savingBullet2')}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-2.5 text-left">
                  <span className="bg-stone-955 text-[#FAF6F0] font-bold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">EASY</span>
                  <span className="text-stone-700 font-semibold">{t('savingBullet3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cold-Chain Safe highlight */}
        <div className="bg-stone-950 text-[#FAF6F0] rounded-2xl p-6 md:p-8 border border-stone-850 flex flex-col md:flex-row gap-6 items-center justify-between text-left">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-stone-900 text-amber-200 border border-stone-800 rounded-xl shrink-0">
              <Thermometer className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h5 className="text-base font-serif font-black text-[#FAF6F0] tracking-tight">
                ❄️ {t('whyChooseUsHeatTitle')}
              </h5>
              <p className="text-xs text-stone-300 font-light opacity-90 max-w-2xl leading-relaxed">
                {t('whyChooseUsHeatDesc')}
              </p>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold uppercase shrink-0 border border-stone-800 bg-[#FAF6F0]/5 text-white rounded px-3 py-1.5 tracking-widest leading-none">
            Ambient Cooling Active
          </span>
        </div>

        {/* Relax recommendation inline */}
        <div className="text-center pt-2">
          <p className="text-xs font-semibold text-stone-400 tracking-wider">
            🐚 {t('whyChooseUsRelax')}
          </p>
        </div>
      </section>

      {/* WHY D. TURTLE BEATS BAZAARS COMPARE SHEET */}
      <section className="bg-white border border-stone-200 rounded-[2rem] p-6 md:p-10 space-y-8 shadow-sm text-left">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="text-[9px] font-sans font-black text-stone-400 uppercase tracking-[0.25em]">QUALITY COMPENDIUM</span>
          <h3 className="text-2xl md:text-3xl font-serif font-black text-stone-950 tracking-tight">
            {t('vsBazaarsTitle')}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-600 border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-900 font-serif border-b border-stone-200">
                <th className="p-4 font-bold uppercase text-[9px] text-stone-400 tracking-[0.2em]">{t('bazaarTableLabel1')}</th>
                <th className="p-4 font-extrabold uppercase text-[10px] text-emerald-900 bg-[#FAF6F0] border-x border-stone-200 tracking-wider">{t('bazaarTableLabel2')}</th>
                <th className="p-4 font-bold uppercase text-[9px] text-stone-400 tracking-[0.2em]">{t('bazaarTableLabel3')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150">
              <tr>
                <td className="p-4 font-bold text-stone-850 mt-1">{t('bazaarCol1')}</td>
                <td className="p-4 bg-[#FAF6F0]/60 text-stone-950 font-normal border-x border-stone-200">{t('bazaarCol1Val1')}</td>
                <td className="p-4 text-stone-400 font-light">{t('bazaarCol1Val2')}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-stone-850">{t('bazaarCol2')}</td>
                <td className="p-4 bg-[#FAF6F0]/60 text-stone-950 font-normal border-x border-stone-200">{t('bazaarCol2Val1')}</td>
                <td className="p-4 text-stone-400 font-light">{t('bazaarCol2Val2')}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-stone-850">{t('bazaarCol3')}</td>
                <td className="p-4 bg-[#FAF6F0]/60 text-stone-950 font-normal border-x border-stone-200">{t('bazaarCol3Val1')}</td>
                <td className="p-4 text-stone-400 font-light">{t('bazaarCol3Val2')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LUXURY PHYSICAL LOCATION METRIC BANNER */}
      <section className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
        <div className="md:col-span-8 space-y-2">
          <span className="text-[9px] font-sans font-black text-[#0f291e] uppercase tracking-[0.25em] block">🗺️ LOCATION HARBOUR LOCATOR</span>
          <h4 className="text-xl font-serif font-black text-stone-950">Convenient Red Sea Ingress Location</h4>
          <p className="text-xs text-stone-550 leading-relaxed font-sans font-light">
            D. Turtle is situated in central Marsa Alam near Abu Dabbab Diving Zone and Port Ghalib Harbour. We provide quick 30-minute compound dispatch riders to Marsa Alam airport, Iberôtel, Jaz Resorts, Hilton Marsa Nubian, and Three Corners.
          </p>
        </div>
        <div className="md:col-span-4 shrink-0 w-full">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-stone-950 text-white font-bold uppercase tracking-[0.15em] hover:bg-stone-800 py-4 px-6 rounded-xl text-xs transition-all duration-300 shadow-md shadow-stone-950/10"
          >
            📍 Physical Store Guide & Directions
          </a>
        </div>
      </section>
    </div>
  );
}
