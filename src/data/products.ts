import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'olivysoap',
    name: 'Olivy Handmade Olive Soap',
    category: 'hair',
    priceEUR: 5.00,
    priceEGP: 250,
    image: 'https://images.unsplash.com/photo-1607006342411-91f11f01221d?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: '100% Pure Olive Oil • Zero Chemicals',
      de: '100% Kaltgepresst • Ohne Zusätze',
      it: '100% Olio d\'Oliva Puro • Biologico',
      pl: '100% Czysta Oliwa • Bez chemii',
      cs: '100% Čistý olivový olej • Bez chemie'
    },
    title: {
      en: 'Authentic 1928 Recipe for Instant Skin Softness & Anti-Dryness',
      de: 'Authentisches Rezept von 1928 für sofortige Hautberuhigung',
      it: 'Antica ricetta del 1928 per eliminare la pelle secca',
      pl: 'Kultowa receptura od 1928 roku na suchą i łuszczącą się skórę',
      cs: 'Autentický recept z roku 1928 pro okamžitou úlevu od suchosti'
    },
    description: {
      en: 'The dry desert air of Marsa Alam and warm Red Sea winds strip skin hydration quickly, leaving it itchy. This traditional Egyptian soap relies entirely on rich, cold-pressed saponified olive oil. Free of all synthetic foaming chemicals, colorants, or fragrances.',
      de: 'Die trockene Wüstenluft von Marsa Alam und die Meereswinde entziehen der Haut Feuchtigkeit. Diese traditionelle ägyptische Seife basiert zu 100% auf kaltgepresstem Olivenöl. Frei von synthetischen Schäumern, Farb- und Duftstoffen.',
      it: 'L\'aria secca di Marsa Alam e il vento caldo del Mar Rosso disidratano la cute causando prurito. Questo sapone tradizionale si affida esclusivamente all\'olio di oliva puro spremuto a freddo. Totalmente privo di schiumogeni sintetici e conservanti.',
      pl: 'Suche powietrze i morska bryza szybko odwadniają skórę, wywołując świąd. To tradycyjne egipskie mydło opiera się wyłącznie na zimno tłoczonej oliwie, która odbudowuje barierę lipidową bez drażniącej chemii.',
      cs: 'Suchý pouštní vzduch a slaný mořský vítr rychle odvodňují pokožku. Toto tradiční egyptské mýdlo vsází výhradně na zastudena lisovaný olivový olej. Bez syntetických pěnidel, barviv či parfemace.'
    },
    indications: {
      en: 'Ditch standard resort gels. Work into a warm lather over face, body, or scalp. Leaves skin smooth & moisturized immediately.',
      de: 'Ersetzen Sie künstliche Duschgele. Sanft auf Gesicht, Körper oder nasser Haut aufschäumen. Hinterlässt sofort ein samtweiches Gefühl.',
      it: 'Sostituisci i bagnoschiuma standard dell\'hotel. Crea una morbida schiuma per viso, corpo o cuoio capelluto. Risultato idratante istantaneo.',
      pl: 'Zastąp zwykłe żele hotelowe. Rozprowadź delikatną pianę na twarzy, ciele lub włosach. Natychmiast ukoi podrażnioną skórę.',
      cs: 'Nahraďte standardní hotelové gely. Vytvořte mýdlovou pěnu na obličeji, těle i vlasech. Zanechá pokožku ihned hladkou a hydratovanou.'
    },
    advisorNote: {
      en: '“Many vacationers like Lukas suffer peeling skin after two days under Marsa Alam sun. Swapping standard industrial hotel liquid soap for this ancient pure olive bar protects the skin\'s moisture barrier and completely eliminates dry discomfort.” — Dr. Turtle Wellness Team',
      de: '“Viele Reisende wie Lukas leiden nach zwei Tagen in der Sonne unter abpellender Haut. Der Verzicht auf industrielle Flüssigseifen zugunsten dieses traditionellen Olivenölseifenstücks schützt die Feuchtigkeitsbarriere und beendet die Trockenheit rasch.” — Dr. Turtle Expertenteam',
      it: '“Molti ospiti come Lukas notano che la pelle si sbuccia dopo due giorni di svernamento al sole. L\'uso di questo purissimo sapone all\'oliva previene la desquamazione e idrata a fondo per tutta la vacanza.” — Team Wellness Dr. Turtle',
      pl: '“Wielu turystów skarży się na schodzącą skórę pod wpływem słońca i chloru. Rezygnacja z przemysłowych kosmetyków na rzecz tego czystego mydła oliwnego błyskawicznie uspokaja naskórek i odbudowuje nawilżenie.” — Zespół Doradców Dr. Turtle',
      cs: '“Mnozí hosté zažívají loupání kůže po pouhých dnech na pláži. Výměna průmyslových sprchových gelů za toto mýdlo s olivovým olejem okamžitě zastaví vysoušení a uleví nepohodlí.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  },
  {
    id: 'sunscreen',
    name: 'D. Turtle Red Sea Shield SPF 50+',
    category: 'sun',
    priceEUR: 16.50,
    priceEGP: 850,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Water Resistant • Reef Friendly',
      de: 'Wasserfest • Riffsicher',
      it: 'Resistente all\'acqua • Amico del reef',
      pl: 'Wodoodporny • Bezpieczny dla rafy',
      cs: 'Voděodolný • Šetrný k útesům'
    },
    title: {
      en: 'Red Sea Deep Protection Sun Cream SPF 50+ (Reef-Safe)',
      de: 'Rotes Meer Tiefenschutz Sonnencreme LSF 50+ (Riffsicher)',
      it: 'Protezione profonda Mar Rosso SPF 50+ (Reef-Safe)',
      pl: 'Krem ochronny Morze Czerwone SPF 50+ (Bezpieczny dla rafy)',
      cs: 'Hloubkový ochranný krém Rudé moře SPF 50+ (Šetrný k útesům)'
    },
    description: {
      en: 'Engineered specifically for the intense heat and salt drying of Marsa Alam beaches. Provides dual UVA/UVB barrier without leaving white marks, and absolute safety for the delicate Red Sea coral reefs.',
      de: 'Speziell für die intensive Hitze und Salzbelastung an den Stränden von Marsa Alam entwickelt. Bietet einen doppelten UVA/UVB-Schutz ohne weiße Rückstände, absolut unschädlich für die empfindlichen Korallenriffe.',
      it: 'Formulato specificamente per il calore intenso e la salsedine delle spiagge di Marsa Alam. Fornisce una doppia barriera UVA/UVB senza lasciare traccia bianca, nel rispetto assoluto dei delicati coralli del Mar Rosso.',
      pl: 'Opracowany specjalnie z myślą o intensywnym upale i wysuszającej soli na plażach Marsa Alam. Zapewnia podwójną barierę UVA/UVB bez pozostawiania białych śladów, w pełni bezpieczny dla delikatnych raf koralowych.',
      cs: 'Navržen specificky pro intenzivní horko a vysušující sůl na plážích v Marsa Alamu. Poskytuje dvojitou bariéru UVA/UVB bez zanechání bílých stop a je zcela bezpečný pro jemné korálové útesy.'
    },
    indications: {
      en: 'Perfect for deep divers, snorkelers, and sunbenders. Re-apply after 80 minutes of swimming.',
      de: 'Perfekt für Taucher, Schnorchler und Sonnenanbeter. Nach 80 Minuten Schwimmen erneut auftragen.',
      it: 'Ideale per subacquei, amanti dello snorkeling e tintarella. Riapplicare dopo 80 minuti di nuoto.',
      pl: 'Idealny dla nurków, osób uprawiających snorkeling i plażowiczów. Nałożyć ponownie po 80 minutach pływania.',
      cs: 'Ideální pro potápěče, šnorchlaře a milovníky slunění. Znovu aplikujte po 80 minutách plavání.'
    },
    advisorNote: {
      en: '“German & Italian families in Marsa Alam choose this because European skin needs premium protection under the Egyptian 35°C+ index on day one. Clean mineral filters, no sting in the eyes while snorkeling.” — Dr. Turtle Wellness Team',
      de: '“Deutsche und italienische Familien in Marsa Alam wählen dies, da europäische Haut am ersten Tag unter dem ägyptischen Index von über 35 °C intensiven Sonnenschutz benötigt. Reine Mineralfilter, brennt nicht in den Augen beim Schnorcheln.” — Dr. Turtle Expertenteam',
      it: '“Le famiglie italiane e tedesche a Marsa Alam lo scelgono perché la pelle ha bisogno di protezione sotto l\'indice egiziano di oltre 35°C fin dal primo giorno. Filtri minerali puri, non brucia gli occhi durante lo snorkeling.” — Team Wellness Dr. Turtle',
      pl: '“Niemieckie i włoskie rodziny w Marsa Alam wybierają ten krem, ponieważ europejska skóra wymaga zaawansowanej ochrony pod wpływem słońca 35°C+ już pierwszego dnia. Czyste filtry mineralne, nie szczypią w oczy podczas snorkelingu.” — Zespół Doradców Dr. Turtle',
      cs: '“Německé a italské rodiny v Marsa Alamu volí tento produkt, protože evropská pokožka potřebuje hned první den pod egyptským indexem 35°C+ silnou ochranu. Čisté minerální filtry, které při šnorchlování nepálí v očích.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  },
  {
    id: 'aftersun',
    name: 'Red Sea Recovery Gel',
    category: 'sun',
    priceEUR: 12.00,
    priceEGP: 620,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Organic Calendula & Concentrated Aloe',
      de: 'Bio-Ringelblume & Konzentrierte Aloe',
      it: 'Calendula biologica e Aloe concentrata',
      pl: 'Organiczny nagietek i skoncentrowany aloes',
      cs: 'Bio měsíček a koncentrované aloe'
    },
    title: {
      en: 'Soothing After-Sun Cryo-Gel with Egyptian Calendula Extract',
      de: 'Beruhigendes After-Sun-Kryo-Gel mit ägyptischem Ringelblumenextrakt',
      it: 'Gel doposole lenitivo Cryo con estratto di Calendula egiziana',
      pl: 'Łagodzący żel po opalaniu o działaniu kriogenicznym z ekstraktem z egipskiego nagietka',
      cs: 'Zklidňující poopalovací kryo-gel s extraktem z egyptského měsíčku'
    },
    description: {
      en: 'Instant skin cooling thermal gel. Crafted with wild Egyptian calendula flower extract and fresh mountain-pressed organic aloe vera. Literally drops skin temperature by 3°C on application, soothing irritation, redness, and beach-wind dryness.',
      de: 'Sofort kühlendes Thermogel. Hergestellt mit wildem ägyptischen Ringelblumenextrakt und frisch gepresster Aloe Vera. Senkt die Hauttemperatur beim Auftragen spürbar um 3 °C und lindert Reizungen, Rötungen und Windbrand.',
      it: 'Gel termico rinfrescante istantaneo. Formulato con estratto di fiori selvatici di calendula egiziana e aloe vera biologica fresca spremuta di montagna. Abbassa letteralmente la temperatura della pelle di 3°C all\'applicazione, calmando irritazioni, arrossamenti e secchezza.',
      pl: 'Błyskawicznie chłodzący żel termiczny. Stworzony z ekstraktu z dzikiego egipskiego nagietka i świeżego, tłoczonego aloesu organicznego. Obniża temperaturę skóry o 3°C przy aplikacji, kojąc podrażnienia, zaczerwienienia i suchość od morskiego wiatru.',
      cs: 'Okamžitě chladivý termální gel. Vyrobeno z extraktu z divokého egyptského měsíčku a čerstvého bio aloe vera. Okamžitě snižuje teplotu pokožky o 3°C po aplikaci, zklidňuje podráždění, zarudnutí a suchost z mořského větru.'
    },
    indications: {
      en: 'Apply generously after showering. Keep in your hotel room mini-fridge for maximum cooling block effect!',
      de: 'Nach dem Duschen großzügig auftragen. Für einen maximalen Kühlungseffekt im Minikühlschrank des Hotelzimmers aufbewahren!',
      it: 'Applicare generosamente dopo la doccia. Conservare nel mini-frigo della camera d\'albergo per il massimo effetto freddo!',
      pl: 'Nakładać obficie po prysznicu. Przechowywać w hotelowej minilodówce, aby uzyskać maksymalny efekt chłodzenia!',
      cs: 'Aplikujte hojně po sprše. Uchovávejte v miniledničce na hotelovém pokoji pro maximální chladivý účinek!'
    },
    advisorNote: {
      en: '“Our absolute best-seller. Snorkelers forget their back is exposed to high water reflection for hours. This deeply soothes intense heat sensations on the skin.” — Dr. Turtle Wellness Team',
      de: '“Unser absoluter Bestseller. Schnorchler vergessen oft, dass ihr Rücken stundenlang der starken Wasserreflexion ausgesetzt ist. Dies lindert das Hitzegefühl der Haut und pflegt intensiv.” — Dr. Turtle Expertenteam',
      it: '“Il nostro assoluto bestseller. Chi fa snorkeling dimentica che la schiena è esposta al forte riflesso dell\'acqua per ore. Questo dona immediato sollievo e freschezza alla pelle accaldata.” — Team Wellness Dr. Turtle',
      pl: '“Nasz absolutny bestseller. Osoby snurkujące często zapominają, że ich plecy są przez wiele godzin narażone na silne odbicie wody. Ten żel błyskawicznie przynosi ulgę i koi rozgrzaną skórę.” — Zespół Doradców Dr. Turtle',
      cs: '“Náš absolutní bestseller. Šnorchlaři zapomínají, že jejich záda jsou hodiny vystavena silnému odrazu od vody. Tento gel okamžitě ulevuje od horka a pokožku skvěle zklidňuje.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: false,
    popularNationalities: ['de', 'it', 'cs', 'pl']
  },
  {
    id: 'pharaohrelief',
    name: 'Pharaoh\'s Relief Armor Set',
    category: 'wellness',
    priceEUR: 14.00,
    priceEGP: 720,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Hotel Survival • Active Rehydration',
      de: 'Hotel-Überlebenskit • Aktive Rehydrierung',
      it: 'Sopravvivenza in Hotel • Reidratazione Attiva',
      pl: 'Przetrwanie w hotelu • Aktywne nawodnienie',
      cs: 'Hotelové přežití • Aktivní rehydratace'
    },
    title: {
      en: 'Pharaoh\'s Oasis Vacation Comfort & Stomach Comfort Pack',
      de: 'Pharaos Oasen-Urlaubs-Komfort- & Magen-Wohlgefühl-Paket',
      it: 'Pacchetto comfort digestivo per vacanza serena',
      pl: 'Pakiet wspierający trawienie i komfort żołądka w podróży',
      cs: 'Záchranný balíček pro zažívací pohodu a komfort při cestování'
    },
    description: {
      en: 'Contains Egyptian premium botanical ingredients and localized herbal soothing elements. Sourced from traditional oasis farms, perfect for European travelers adapting to local resort water, open buffet culinary changes, and desert hotel climate shift.',
      de: 'Enthält ägyptische Premium-Pflanzenwirkstoffe und beruhigende Kräuterelemente. Perfekt für europäische Reisende, die sich an das lokale Hotelwasser, die reichhaltige Küche des offenen Buffets und das Wüstenklima anpassen.',
      it: 'Contiene purissimi estratti botanici egiziani ed elementi erboristici lenitivi. Sviluppato per i viaggiatori europei che si adattano al cibo speziato e al clima caldo.',
      pl: 'Zawiera egipskie zioła najwyższej jakości oraz naturalne składniki łagodzące trawienie. Idealny dla podróżnych adaptujących się do lokalnej kuchni, wody i klimatu pustynnego.',
      cs: 'Obsahuje egyptské prémiové bylinné extrakty a uklidňující přírodní složky. Skvělé pro cestovatele adaptující se na místní stravu, hotelovou vodu a pouštní klima.'
    },
    indications: {
      en: 'Enjoy at the very first sign of stomach heaviness, bloating, or climate discomfort. Keep your vacation active and worry-free.',
      de: 'Schon bei den ersten Anzeichen von Magenbeschwerden, Blähungen oder Trägheit anwenden. Genießen Sie Ihren Urlaub aktiv und unbeschwert.',
      it: 'Assumere ai primissimi sintomi di pesantezza allo stomaco, sensazione di gonfiore o fastidio da viaggio. Evita di rovinarti le ferie.',
      pl: 'Pij przy pierwszych objawach ciężkości żołądka, wzdęć lub dyskomfortu klimatycznego. Zachowaj energię na wakacje.',
      cs: 'Užívejte při prvních příznacích těžkosti, nadýmání nebo zažívacího diskomfortu. Udržte si aktivní dovolenou bez starostí.'
    },
    advisorNote: {
      en: '“Crucial Tip: European standard digestive products can fail to adapt to local herbs and water. Our local organic herbal blends offer rapid, gentle support for holiday stomach comfort safely.” — Dr. Turtle Wellness Team',
      de: '“Wichtiger Tipp: Europäische Magenprodukte versagen in Ägypten oft, da sie nicht auf die lokalen Gewürze und das Wasser abgestimmt sind. Unsere lokalen Kräuterauszüge unterstützen den Magen rasch und natürlich.” — Dr. Turtle Expertenteam',
      it: '“Consiglio fondamentale: i prodotti digestivi acquistati all\'estero faticano ad agire contro gli squilibri da spezie locali. Il nostro mix di erbe oasiche offre un benessere naturale e rapido.” — Team Wellness Dr. Turtle',
      pl: '“Kluczowa wskazówka: europejskie preparaty często nie radzą sobie z lokalnymi przyprawami i inną florą bakteryjną. Nasze lokalne napary ziołowe skutecznie przywracają upragniony komfort trawienny.” — Zespół Doradców Dr. Turtle',
      cs: '“Důležitý tip: Běžné evropské přípravky na žaludek často nezaberou na specifika místní kuchyně. Naše lokální bylinné směsi přirozeně a rychle podpoří klidné trávení.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  },
  {
    id: 'blackseed',
    name: 'D. Turtle Pure Black Seed Oil',
    category: 'wellness',
    priceEUR: 19.00,
    priceEGP: 980,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: '100% Cold-Pressed • Traditional Miracle Oil',
      de: '100% Kaltgepresst • Traditionelles Wunderöl',
      it: 'Premuto a freddo al 100% • Olio miracoloso tradizionale',
      pl: '100% Tłoczony na zimno • Tradycyjny czarny kminek',
      cs: '100% Za studena lisovaný • Tradiční zázračný olej'
    },
    title: {
      en: 'Authentic Egyptian Nigella Sativa (Black Seed) Essential Oil',
      de: 'Authentisches ägyptisches Nigella Sativa (Schwarzkümmel) Essentielles Öl',
      it: 'Autentico Olio Essenziale di Nigella Sativa (Cumino Nero) Egiziano',
      pl: 'Autentyczny egipski olej z czarnuszki (Nigella Sativa) tłoczony na zimno',
      cs: 'Autentický egyptský esenciální olej z černuchy seté (Nigella Sativa)'
    },
    description: {
      en: 'Harvested from upper Egypt oasis soils, pressed once below 30°C. Known historically as the oil of the pharaohs. Rich in Thymoquinone, premium-grade reinforcement for skin beauty, soothing irritation, sun comfort, and extreme hydration.',
      de: 'Geerntet auf den Oasenböden Oberägyptens, einmalig unter 30 °C gepresst. Historisch bekannt als das Öl der Pharaonen. Reich an Thymochinon, zur Stärkung der Hautbarriere, Beruhigung von Hautirritationen, Erhöhung der Sonnenverträglichkeit und Tiefenbefeuchtung.',
      it: 'Raccolto dai terreni delle oasi dell\'Alto Egitto, spremuto a freddo sotto i 30°C. Noto storicamente come l\'olio dei faraoni. Ricco di Timochinone, un elisir di bellezza per idratazione estrema, sollievo cutaneo e cura doposole.',
      pl: 'Pozyskiwany z gleb oaz Górnego Egiptu, tłoczony tylko raz w temperaturze poniżej 30°C. Znany jako złoto faraonów. Bogaty w tymochinon, wzmacnia kondycję skóry, łagodzi podrażnienia i głęboko nawilża po słońcu.',
      cs: 'Sklízeno z půdy oáz v Horním Egyptě, lisováno pouze jednou za studena pod 30°C. Historicky známé jako olej faraonů. Bohaté na thymochinon, skvělé pro posílení hydratace pokožky potrápené sluncem.'
    },
    indications: {
      en: 'Apply a few drops on irritated skin at night, or enjoy 1 teaspoon daily for pure wellness and vitality boost during trip.',
      de: 'Tragen Sie abends einige Tropfen auf die Haut auf oder genießen Sie täglich 1 Teelöffel für pure Vitalität und Wohlbefinden während der Reise.',
      it: 'Applicare poche gocce sulla pelle arrossata la sera, o assumerne un cucchiaino al giorno per vigore e benessere in vacanza.',
      pl: 'Nałożyć kilka kropel na podrażnioną skórę na noc lub spożywać 1 łyżeczkę dziennie dla witalności i ogólnego wzmocnienia podczas podróży.',
      cs: 'Naneste několik kapek večer na podrážděnou pokožku nebo užívejte 1 lžičku denně pro čistý pocit vitality a energie během své cesty.'
    },
    advisorNote: {
      en: '“Foreign tourists scour Egyptian markets for this, but regular spice bazaars often dilute it or sell oxidized hot-pressed oil. We sell only premium cosmetic-grade, sealed, amber-glass certified pure cold press.” — Dr. Turtle Wellness Team',
      de: '“Ausländische Touristen suchen auf Märkten oft danach, aber normale Basare strecken es häufig mit billigen Ölen. Bei uns erhalten Sie ausschließlich versiegeltes, laborgeprüftes Schwarzkümmelöl in erstklassiger Kosmetik-Qualität.” — Dr. Turtle Expertenteam',
      it: '“Molti turisti rischiano di acquistare oli scadenti o diluiti nei tipici bazar commerciali. Noi garantiamo la massima purezza cosmetica, certificata e sigillata in vetro ambrato.” — Team Wellness Dr. Turtle',
      pl: '“Zagraniczni turyści szukają tego oleju na targach, ale zwykłe bazary często go rozcieńczają parafiną. U nas kupisz wyłącznie oryginalnie zapakowany, czysty olej kosmetyczny najwyższej próby.” — Zespół Doradców Dr. Turtle',
      cs: '“Zahraniční turisté ho často hledají na tržnicích, ale běžné bazary ho ředí nebo prodávají znehodnocený. U nás najdete pouze certifikovaný čistý olej v prémiové kosmetické kvalitě.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  },
  {
    id: 'jojobagold',
    name: 'Sinai Pure Jojoba Gold',
    category: 'hair',
    priceEUR: 15.00,
    priceEGP: 780,
    image: 'https://images.unsplash.com/photo-1626887006304-315371b897db?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Zero Greasy Stain • Organic Liquid Wax',
      de: 'Keine fettigen Flecken • Organisches Flussiges Wachs',
      it: 'Nessuna macchia di unto • Cera liquida biologica',
      pl: 'Bez tłustych plam • Organiczny płynny wosk',
      cs: 'Bez mastných skvrn • Organický tekutý vosk'
    },
    title: {
      en: 'Pure Desert Jojoba Oil for Sun-Stressed Hair & Face Cuticles',
      de: 'Reines Wüsten-Jojobaöl für sonnenstrapaziertes Haar & Gesichtshaut',
      it: 'Olio Puro di Jojoba del Deserto per Capelli e Viso Stressati dal Sole',
      pl: 'Czysty olej jojoba z pustyni do włosów i skóry twarzy zniszczonej słońcem',
      cs: 'Čistý pouštní jojobový olej pro sluncem namáhané vlasy a pokožku obličeje'
    },
    description: {
      en: 'Mimics the natural skin sebum exactly. Sinai desert grown jojoba is highly unique. Revitalizes dry beach-frizz hair, seals split ends instantly, and hydrates peeling noses without clogging pores.',
      de: 'Ahmt den natürlichen Talg der Haut perfekt nach. Jojoba aus der Sinai-Wüste pflegt trockenes, krauses Strandhaar nachhaltig, versiegelt Spliss und spendet Feuchtigkeit, ohne Poren zu verstopfen.',
      it: 'Imita perfettamente il naturale sebo cutaneo. La jojoba coltivata nel deserto è eccezionale. Ristruttura i capelli crespi da spiaggia, sigilla le doppie punte e idrata il viso screpolato.',
      pl: 'Naśladuje naturalne sebum skóry. Jojoba z pustyni Synaj to unikalny wosk płynny. Regeneruje suche, spalone słońcem włosy, wygładza końcówki i nawilża naskórek.',
      cs: 'Dokonale napodobuje kožní maz. Jojoba z pouště Sinaj je výjimečná. Obnovuje suché vlasy poničené slanou vodou, zaceluje konečky a hydratuje suchou kůži.'
    },
    indications: {
      en: 'Apply on damp hair ends before heading to snorkeling or beach walks. Protects against saline burning.',
      de: 'Vor dem Schnorcheln oder Strandspaziergang auf die feuchten Haarspitzen auftragen. Schützt vor Salzbrand.',
      it: 'Applicare sulle punte dei capelli umidi prima di fare snorkeling o passeggiate in spiaggia. Protegge dalla salsedine.',
      pl: 'Nałożyć na wilgotne końcówki włosów przed snurkowaniem lub spacerem po plaży. Chroni przed działaniem soli morskiej.',
      cs: 'Naneste na konečky vlhkých vlasů před šnorchlováním nebo procházkou po pláži. Chrání před poškozením od soli.'
    },
    advisorNote: {
      en: '“Unlike dense tropical coconut oils which fry your hair if exposed to desert noon sun, Jojoba has a very high stability index and won\'t bake your hair follicles.” — Dr. Turtle Wellness Team',
      de: '“Im Gegensatz zu dichtem, tropischen Kokosnussöl, das Ihr Haar in der Wüstensonne beschädigt, besitzt Jojoba eine extrem hohe Hitzestabilität und schützt Ihre Haarfollikel perfekt.” — Dr. Turtle Expertenteam',
      it: '“A differenza del denso olio di cocco tropicale che rischia di aggredire i capelli se esposti al sole forte a mezzogiorno, la Jojoba ha un elevato indice di stabilità e protegge i follicoli.” — Team Wellness Dr. Turtle',
      pl: '“W przeciwieństwie do ciężkiego tropikalnego oleju kokosowego, który dosłownie obciąża i niszczy włosy na słońcu, olej jojoba ma wysoką stabilność termiczną i świetnie zabezpiecza strukturę włosa.” — Zespół Doradców Dr. Turtle',
      cs: '“Na rozdíl od hustého kokosového oleje, který vaše vlasy na poledním pouštním slunci spíše poškodí, má Jojoba velmi vysokou stabilitu a pomáhá chránit vlasové folikuly.” — Tým specialistů Dr. Turtle'
    },
    germanTested: false,
    italianVoted: true,
    popularNationalities: ['it', 'de', 'pl', 'cs']
  },
  {
    id: 'mosquitoguard',
    name: 'Sinai Herbal Bug Shield',
    category: 'wellness',
    priceEUR: 8.50,
    priceEGP: 440,
    image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Deet-Free • Safe for Toddlers & Snorkelers',
      de: 'Deet-Frei • Sicher für Kleinkinder & Schnorchler',
      it: 'Senza DEET • Sicuro per bambini e subacquei',
      pl: 'Bez DEET • Bezpieczny dla dzieci i nurków',
      cs: 'Bez DEET • Bezpečný pro batolata a šnorchlaře'
    },
    title: {
      en: 'Natural Mosquito Repellent & Anti-Inflammatory Bite Relief',
      de: 'Ätherisches Mückenschutz-Spray & entzündungshemmende Stichlinderung',
      it: 'Spray Antizanzare Naturale e Sollievo dalle Punture',
      pl: 'Naturalny środek odstraszający komary i łagodzący ukąszenia o działaniu przeciwzapalnym',
      cs: 'Přírodní repelent proti komárům a protizánětlivá úleva od kousnutí'
    },
    description: {
      en: 'Marsa Alam resort lagoons bring sudden evening sandflies and mosquitoes. Our formula utilizes specialized Sinai wild mint, lemongrass essence, and a natural protective barrier to repel bugs and soothe skin discomfort within seconds if already bitten.',
      de: 'Die Lagunen der Resorts in Marsa Alam ziehen abends Sandfliegen und Mücken an. Unsere Formel nutzt wilde Sinai-Minze, Zitronengras-Essenz und eine natürliche Schutzbarriere, um Insekten abzuwehren und Juckreiz sofort zu lindern.',
      it: 'Le lagune dei resort di Marsa Alam attirano fastidiosi insetti e zanzare la sera. La nostra formula utilizza menta selvatica del Sinai, essenza di lemongrass e una barriera vegetale protettiva che allevia il fastidio cutaneo.',
      pl: 'Laguny w hotelach Marsa Alam przyciągają wieczorami muchy piaskowe i komary. Nasza formuła wykorzystuje dziką miętę z Synaju, esencję z trawy cytrynowej i barierę roślinną, która odstrasza owady i łagodzi świąd.',
      cs: 'Resortní laguny v Marsa Alamu přitahují večer písečné mušky a komáry. Naše složení využívá divokou mátu ze Sinaje, esenci z citronové trávy a přírodní bariéru, která hmyz odpuzuje a okamžitě zklidňuje podráždění pokožky.'
    },
    indications: {
      en: 'Spray around ankles and arms before dinner at hotel beaches. Completely non-sticky, beautiful herbal scent.',
      de: 'Vor dem Abendessen an Hotelstränden auf Knöchel und Arme sprühen. Völlig klebefrei, mit angenehmem Kräuterduft.',
      it: 'Spruzzare intorno a caviglie e braccia prima della cena in spiaggia o in hotel. Non appiccica, gradevole profumo erbaceo.',
      pl: 'Spryskać okolice kostek i ramion przed kolacją na plaży lub w hotelowym ogrodzie. Nie klei się, ma przyjemny ziołowy zapach.',
      cs: 'Před večeří na hotelové pláži nastříkejte kolem kotníků a paží. Zcela nelepivý, krásná bylinná vůně.'
    },
    advisorNote: {
      en: '“Regular European repellents are configured for European mosquitoes and often fail against desert sandflies. This localized aromatic blend is extremely effective and soothing.” — Dr. Turtle Wellness Team',
      de: '“Normale europäische Mücken-Sprays versagen oft bei Wüsten-Sandfliegen, da sie für andere Insektenarten konzipiert sind. Diese lokale Kräutermischung wirkt hervorragend beruhigend.” — Dr. Turtle Expertenteam',
      it: '“I normali repellenti europei sono calibrati per altre specie e spesso falliscono contro i moscerini del deserto. Questo speciale mix aromatico locale è incredibilmente efficace.” — Team Wellness Dr. Turtle',
      pl: '“Zwykłe europejskie repelenty często zawodzą w walce z pustynnymi muchami piaskowymi. Ta lokalna, aromatyczna kompozycja jest niezwykle skuteczna i kojąca.” — Zespół Doradców Dr. Turtle',
      cs: '“Běžné evropské repelenty jsou určeny pro jiné druhy a proti pouštním písečným muškám selhávají. Tato lokální aromatická směs je mimořádně účinná a uklidňující.” — Tým specialistů Dr. Turtle'
    },
    germanTested: false,
    italianVoted: false,
    popularNationalities: ['pl', 'cs', 'de', 'it']
  },
  {
    id: 'nefertitioil',
    name: 'Nefertiti Royal Perfume Essence',
    category: 'souvenirs',
    priceEUR: 24.00,
    priceEGP: 1250,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80',
    badge: {
      en: 'Alchohol-Free • 100% Pure Cosmetic Oil Souvenir',
      de: 'Alkoholfrei • 100% Reines Parfümöl-Souvenir',
      it: 'Senza Alcol • Souvenir con olio di profumo puro al 100%',
      pl: 'Bezalkoholowy • 100% czysty olejek zapachowy',
      cs: 'Bez alkoholu • 100% čistý kosmetický vonný olej'
    },
    title: {
      en: 'Concentrated Pure Lotus & Jasmine Golden Oil of Egyptian Queens',
      de: 'Konzentriertes reines Lotus- & Jasmin-Goldöl der ägyptischen Königinnen',
      it: 'Olio Concentrato di Loto e Gelsomino Dorato delle Regine Egiziane',
      pl: 'Skoncentrowany czysty olejek lotosowo-jaśminowy królowej Egiptu',
      cs: 'Koncentrovaný čistý zlatý olej z lotosu a jasmínu egyptských královen'
    },
    description: {
      en: 'No synthetics, no carrier petroleum, no cheap alcohol evaporation. A highly prized luxury oil sourced from legal agricultural extraction fields in Nile Delta. Warm lotus flower base notes with high-frequency jasmin. Stays active on skin for up to 30 hours.',
      de: 'Keine Synthetik, kein billiges Erdöl, kein verdunstender Alkohol. Ein hochgeschätztes Luxusöl aus legalem landwirtschaftlichem Anbau im Nildelta. Warme Lotosblüten-Basisnote mit hochfrequentem Jasmin. Bleibt bis zu 30 Stunden auf der Haut aktiv.',
      it: 'Senza elementi sintetici, petrolati o alcol nocivo che evapora subito. Un olio di lusso pregiato proveniente dalle coltivazioni regolate nel Delta del Nilo. Note di fondo calde di fiore di loto sposate al gelsomino. Dura sulla pelle fino a 30 ore.',
      pl: 'Bez syntetyków, twardej chemii i szybko ulatniającego się alkoholu. Cenny, luksusowy olejek pozyskiwany z upraw w Delcie Nilu. Ciepłe nuty bazy kwiatu lotosu połączone z wyrazistym jaśminem. Utrzymuje się na skórze nawet do 30 godzin.',
      cs: 'Bez syntetických látek, ropného základu a levného alkoholu. Velmi ceněný luxusní olej získávaný z regulovaných zemědělských polí v deltě Nilu. Hřejivé tóny lotosového květu s jasmínem. Na pokožce vydrží vonět až 30 hodin.'
    },
    indications: {
      en: 'Perfect as a premium, non-spoilable souvenir gift. Put 1 drop behind ears or in bath water. Safe for ultra-sensitive skin.',
      de: 'Perfekt als langlebiges Premium-Souvenir-Geschenk. Nur 1 Tropfen hinter die Ohren oder ins Badewasser geben. Sicher für extrem empfindliche Haut.',
      it: 'Perfetto come souvenir di classe a lunga conservazione. Applicare solo 1 goccia dietro i lobi o nell\'acqua del bagno. Sicuro per pelli iper-sensibili.',
      pl: 'Idealny jako wyjątkowy i trwały prezent. Wystarczy nanieść 1 kroplę za uszy lub dodać do kąpieli. Bezpieczny dla skóry wrażliwej.',
      cs: 'Ideální jako prémiový a trvanlivý suvenýr či dárek. Naneste 1 kapku za uši nebo do koupele. Bezpečný pro velmi citlivou pokožku.'
    },
    advisorNote: {
      en: '“Unlike the traditional perfume bazaars outside where they haggle and often dilute oils with liquid paraffin, we guarantee a pure certified essence and heavy quality check. A truly luxurious memory of Egypt.” — Dr. Turtle Wellness Team',
      de: '“Im Gegensatz zu den traditionellen Parfüm-Basaren, auf denen gefeilscht wird und die Öle oft gestreckt sind, garantieren wir laborgeprüfte, reine Essenzen in erstklassiger Qualität. Ein unvergessliches Luxus-Mitbringsel.” — Dr. Turtle Expertenteam',
      it: '“A differenza dei bazar tradizionali dove si mercanteggia e spesso si diluiscono gli oli con paraffina liquida, garantiamo un\'essenza pura testata con elevati standard qualitativi. Un ricordo raffinato dell\'Egitto.” — Team Wellness Dr. Turtle',
      pl: '“W przeciwieństwie do tradycyjnych bazarów perfumeryjnych, gdzie ceny są zawyżone, a olejki rozcieńczane parafiną, my gwarantujemy czystą esencję z gwarancją najwyższej jakości.” — Zespół Doradców Dr. Turtle',
      cs: '“Na rozdíl od tradičních parfémových bazarů, kde se smlouvá a oleje se často ředí tekutým parafínem, my garantujeme čistou, laboratorně testovanou esenci prvotřídní kvality. Opravdu luxusní vzpomínka na Egypt.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  },
  {
    id: 'honeyeggshampoo',
    name: 'Total Repair Honey & Egg',
    category: 'hair',
    priceEUR: 5.00,
    priceEGP: 250,
    image: 'https://i.ibb.co/fhW9qC7/IMG-20260522-142024-084.jpg',
    badge: {
      en: 'Limited Edition • Sun-Damage Reconstruction',
      de: 'Limitierte Edition • Haarrekonstruktion nach der Sonne',
      it: 'Edizione Limitata • Riparazione Profonda del Capello',
      pl: 'Edycja Limitowana • Głębokie Odżywienie po Słońcu',
      cs: 'Limitovaná Edice • Hloubková Obnova po Slunci'
    },
    title: {
      en: 'Total Repair for Your Sun-Kissed Hair (360ml)',
      de: 'Totale Reparatur für Ihr sonnengeküsstes Haar (360ml)',
      it: 'Riparazione Totale per i tuoi Capelli Baciati dal Sole (360ml)',
      pl: 'Całkowita Regeneracja Włosów po Słońcu (360ml)',
      cs: 'Celková Rekonstrukce Vlasů Namáhaných Sluncem (360ml)'
    },
    description: {
      en: 'Stop worrying about dry, brittle hair. This natural formula uses the power of egg and honey to restore every strand after your day in the sun and sea. It brings maximum softness, shine, and health back to vacation hair.',
      de: 'Machen Sie sich keine Sorgen mehr um trockenes, sprödes Haar. Diese natürliche Formel nutzt die Kraft von Ei und Honig, um jedes einzelne Haar nach einem Tag in der Sonne und im Meer zu regenerieren. Sie verleiht Ihrem Urlaubshaar maximale Geschmeidigkeit und Glanz.',
      it: 'Smetti di preoccuparti dei capelli secchi e sfibrati. Questa formula naturale sfrutta la potenza dell\'uovo e del miele per rigenerare ogni fibra dopo una giornata trascorsa al sole e al mare, restituendo incredibile morbidezza e lucentezza.',
      pl: 'Zapomnij o suchych i łamliwych włosach. Ta naturalna formuła czerpie z mocy jajka i miodu, aby odbudować każde pasmo po dniu spędzonym na słońcu i w morzu. Przywraca zmęczonym włosom maksymalną miękkość i blask.',
      cs: 'Přestaňte si dělat starosti se suchými a křehkými vlasy. Tato přírodní receptura využívá sílu vajec a medu k obnově každého pramene po celém dni stráveném na slunci a v moři. Navrací vlasům maximální hebkost a lesk.'
    },
    indications: {
      en: 'What makes this different from what you find at home:\n• Egg protein strengthens roots and rebuilds capillary strength\n• Honey seals in deep moisture and creates a protective shield\n• Natural oils prevent split ends caused by salt & UV radiation\n\n[ KEY BENEFITS ]\n• Rebuilds hair softness after pool chlorine and ocean salt\n• Nourishes dry scales and restores brilliant shine\n• Enhances density and weight without heavy greasy residue\n\n[ IDEAL FOR ] Dry, fragile hair resembling straw after days at beaches & pools.\n\n[ HOW TO USE ] Massage into wet hair, work into a rich natural lather, leave for 1-2 minutes for deep absorption, and rinse. Clean, botanical scent.',
      de: 'Was dieses Produkt von dem unterscheidet, was Sie zu Hause finden:\n• Ei-Protein stärkt die Wurzeln und baut die Haarfaser wieder auf\n• Honig schließt Feuchtigkeit ein und bildet einen Schutzschild\n• Natürliche Öle verhindern Spliss durch Salz- und UV-Strahlung\n\n[ VORTEILE ]\n• Restrukturiert sprödes Haar nach Pool-Chlor und Meersalz\n• Pflegt trockene Schuppenschichten für brillanten Glanz\n• Verbessert Volumen und Griffigkeit ohne fettige Rückstände\n\n[ IDEAL FÜR ] Trockenes, strohiges Haar nach intensiven Tagen am Strand und Pool.\n\n[ EXPEDITIONS-ANWEISUNG ] In das nasse Haar einmassieren, aufschäumen, 1–2 Minuten einwirken lassen, damit die Nährstoffe tief einziehen können, und gründlich ausspülen.',
      it: 'Cosa lo rende diverso da quello che trovi a casa:\n• Le proteine dell\'uovo rinforzano le radici e ricostruiscono la fibra capillare\n• Il miele sigilla l\'idratazione profonda creando uno scudo protettivo\n• Gli oli naturali prevengono le doppie punte causate da salsedine e raggi UV\n\n[ BENEFICI CHIAVE ]\n• Rigenera la morbidezza del capello stressato dal cloro e dal sale marino\n• Nutre le cuticole secche restituendo una lucentezza radiosa\n• Dona spessore e texture senza appesantire o lasciare residui unti\n\n[ IDEALE PER ] Capelli secchi, crespi o simili a paglia dopo giorni di mare e piscina.\n\n[ MODO D\'USO ] Massaggiare sui capelli bagnati, creare un\'abbondante schiuma naturale, lasciare agire per 1-2 minuti per favorire l\'assorbimento profondo e risciacquare.',
      pl: 'Co odróżnia go od produktów, które znasz ze swojego domu:\n• Proteiny jaja wzmacniają cebulki i odbudowują strukturę włosa\n• Miód uzamyka głębokie nawilżenie i tworzy barierę ochronną\n• Naturalne olejki zapobiegają rozdwajaniu się końcówek przez sól i UV\n\n[ GŁÓWNE KORZYŚCI ]\n• Odbudowuje miękkość pasm po działaniu chloru basenowego i soli morskiej\n• Odżywia suche łuski włosa, przywracając mu zachwycający blask\n• Poprawia gęstość i elastyczność bez obciążania i tłustego filmu\n\n[ IDEALNE DLA ] Suchych, sztywnych i matowych włosów po plażowaniu.\n\n[ SPOSÓB UŻYCIA ] Wmasować w wilgotne włosy, spienić, pozostawić na 1-2 minuty do głębokiego wniknięcia składników i obficie spłukać.',
      cs: 'V čem se liší od toho, co běžně najdete doma:\n• Vaječný protein posiluje kořínky a obnovuje pevnost vlasových vláken\n• Med uzamyká hloubkovou vlhkost a vytváří ochranný štít\n• Přírodní oleje zabraňují třepení konečků způsobených solí a UV zářením\n\n[ KLÍČOVÉ VÝHODY ]\n• Obnovuje poddajnost a jemnost vlasů poškozených chlórem a mořskou solí\n• Vyživuje suchá vlasová vlákna a navrací jim oslnivý lesk\n• Zvyšuje hustotu a vitalitu vlasů bez zatížení mastným filmem\n\n[ IDEÁLNÍ PRO ] Suché, krepaté a slaměné vlasy po pobytu na pláži a v bazénu.\n\n[ NÁVOD K POUŽITÍ ] Vmasírujte do vlhkých vlasů, vytvořte bohatou pěnu, nechte 1-2 minuty působit pro hloubkové vstřebání a poté opláchněte.'
    },
    advisorNote: {
      en: '“What guests like you discovered here: Lukas noticed his hair felt like straw after three days in the pool. He tried this natural shampoo and felt the softness return instantly. Now, it is his travel secret.\n\nValue Comparison — In major European cities, this repair treatment costs 8 Euro. Here, enjoy the full 360ml bottle for only 5 Euro (~ 250 EGP). Bring the Egyptian sun home to your hair today.” — Dr. Turtle Wellness Team',
      de: '“Urlauber-Erfahrung: Lukas bemerkte, dass sich seine Haare nach drei Tagen im Pool wie Stroh anfühlten. Er probierte dieses natürliche Shampoo aus und spürte sofort, wie die Weichheit zurückkehrte. Jetzt ist es sein persönliches Reisegeheimnis.\n\nWert-Tipp — In europäischen Großstädten kostet diese Intensivpflege ca. 8 Euro. Hier erhalten Sie die volle 360ml-Flasche für nur 5 Euro (~ 250 EGP). Bringen Sie die ägyptische Sonne mit nach Hause.” — Dr. Turtle Expertenteam',
      it: '“L\'esperienza dei nostri ospiti: Lukas aveva i capelli secchi come paglia dopo tre giorni in piscina. Ha provato questo shampoo naturale e ha sentito all\'istante una morbidezza incredibile. Ora è il suo segreto di viaggio.\n\nConfronto valore — Nelle principali città europee questo trattamento costa circa 8 Euro. Qui, goditi l\'intera bottiglia da 360 ml a soli 5 Euro (~ 250 EGP). Porta a casa il sole dell\'Egitto per i tuoi capelli.” — Team Wellness Dr. Turtle',
      pl: '“To, co odkryli nasi goście: Lukas zauważył, że po trzech dniach w basenie jego włosy były matowe i szorstkie jak słoma. Wypróbował ten naturalny szampon i natychmiast poczuł, jak odzyskują utraconą miękkość. Teraz to jego wakacyjny niezbędnik.\n\nPorównanie wartości — W metropoliach europejskich kuracja ta kosztuje około 8 Euro. Tutaj otrzymujesz pełną butelkę 360 ml za jedyne 5 Euro (~ 250 EGP). Zabierz egipskie słońce dla swoich włosów już dziś.” — Zespół Doradców Dr. Turtle',
      cs: '“Co u nás objevili hosté jako vy: Lukas si všiml, že jeho vlasy byly po třech dnech v bazénu hrubé jako sláma. Vyzkoušel tento přírodní šampon a cítil, jak se jim okamžitě vrátila hebkost. Teď je to jeho tajný trik na cesty.\n\nPorovnání hodnoty — V evropských velkoměstech tato kúra stojí okolo 8 eur. Zde si můžete dopřát celé 360ml balení za pouhých 5 eur (~ 250 EGP). Přivezte si kousek egyptského slunce domů.” — Tým specialistů Dr. Turtle'
    },
    germanTested: true,
    italianVoted: true,
    popularNationalities: ['de', 'it', 'pl', 'cs']
  }
];

