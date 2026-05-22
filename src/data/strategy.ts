import { StrategySection } from '../types';

export const strategySections: StrategySection[] = [
  {
    id: 'brand-positioning',
    title: 'Brand Positioning',
    chapterNumber: 1,
    icon: 'ShieldCheck',
    summary: 'Building a premium local discovery wellness & beauty shield that counters the "fear of being scammed" and acts as a trusted, warm Egyptian organic advice advisor.',
    sections: [
      {
        heading: 'Brand Identity & Emotional Positioning',
        paragraphs: [
          'The brand D. Turtle is positioned as the "Safe Haven for European Families" in Marsa Alam and the Red Sea. Unlike standard Egyptian bazaars or generic local shops that feel aggressive, pushy, and unscientific, D. Turtle stands for Premium-Grade Protection, scientific botanical precision, and warm hospitality.',
          'The name "Turtle" refers directly to the sea turtles of Marsa Abu Dabbab, a globally famous diving spot in Marsa Alam. It instantly connects with tourists’ vacation emotions—peace, longevity, snorkeling, nature, and protection (the turtle shell symbolizes perfect barrier shield against sun, insects, and climate stomach adaptation).'
        ],
        croHighlight: 'Emotional Hook: "The protection you expect from a premium European wellness boutique, with the pure botanical power of ancient Egyptian oases."'
      },
      {
        heading: 'Visual & Psychological Hierarchy',
        paragraphs: [
          'Color Palette: Premium Mediterranean Sage Green, Warm Coral Accent, Sand Off-white background, and Deep Navy Slate for typography. This avoids "sterile clinical white" and instead evokes a luxurious, high-end organic spa on a beach compound.',
          'Logo & Trust Direction: A minimalist geometric turtle combined with a subtle botanical olive/mint leaf or golden seed. This communicates safety instantly, especially to older German, Italian, and Czech tourists who recognize official quality trust badges as signs of verified regulation.'
        ]
      },
      {
        heading: 'Why Tourists Trust D. Turtle',
        paragraphs: [
          'Foreign visitors are highly suspicious of unsealed cosmetics and unpriced items. D. Turtle eliminates this friction by offering clear, transparent European-standard pricing in both Euros and EGP, double-sealed glass containers, English-speaking certified wellness advisors, and QR-verifiable lab testing profiles on local Egyptian essential oils.'
        ]
      }
    ]
  },
  {
    id: 'homepage-blueprint',
    title: 'Homepage Blueprint',
    chapterNumber: 2,
    icon: 'Layout',
    summary: 'A precise, low-friction, high-converting homepage sequence designed to support resort room browsing and turn tired swimmers into WhatsApp reservations.',
    sections: [
      {
        heading: '1. Above the Fold: The "Hotel Room Shield" Hero',
        paragraphs: [
          'Designed specifically for the tourist who scanned a QR code in our boutique, or has been given our leaflet by a hotel receptionist. The headline immediately validates their current situation: beach heat, sensitive skin, and the desire to browse peacefully from their hotel bed.'
        ],
        copyExample: {
          scenario: 'Main Landing Hero View (Mobile Optimized)',
          headline: 'Your Trusted Beauty & Wellness Oasis in Marsa Alam',
          body: 'Currently staying at a resort or diving camp? Browse our certified beach essentials, local therapeutic oils, and vacation wellness items. Reserve on WhatsApp for a quick, 1-minute boutique pickup right near your hotel.',
          cta: 'Browse Digital Catalog 📱'
        }
      },
      {
        heading: '2. Psychological Section Sequence',
        paragraphs: [
          'Section A: "Emergency & Tourist Care" Quick Selector - Icons for Stomach Comfort, Sunburn Heat, Bug-protection, Reef-safe SPF, and Souvenirs. This acts as a rapid self-discovery hub for the user.',
          'Section B: "Expert Curated Bundles" - Pre-packaged, high-AOV bundles (e.g., First-Day Beach Shield, Pharaoh’s Comfort Protection, Nile Cleopatra Souvenir Box) styled beautifully with high-contrast badge overlays.',
          'Section C: "Why We Are Different" Trust Grid - Highlighting certified sealed products, actual testing guidelines, and transparent pricing. No haggling.'
        ]
      },
      {
        heading: '3. Multi-Lingual Prompt Bar',
        paragraphs: [
          'A persistent, elegant flag toggle at the top of the homepage allowing easy transitions to German, Italian, Polish, Czech, and English. Copy and interface terms translate comprehensively to adapt to older travelers with zero English confidence.'
        ]
      }
    ]
  },
  {
    id: 'product-page-system',
    title: 'Product Page System',
    chapterNumber: 3,
    icon: 'Package',
    summary: 'A localized product system containing expert advisor notes, climate adaptation indications, nationality social proof, and seamless reserving CTAs.',
    sections: [
      {
        heading: 'Core Visual & CRO Structure',
        paragraphs: [
          'The product page does not push an ordinary credit-card checkout (which has massive friction for European cards in Egypt due to currency transaction alerts). Instead, it focuses on "WhatsApp Reservation" and "In-Store Pickup".'
        ],
        copyExample: {
          scenario: 'Product Description Block for Black Seed Oil',
          headline: 'Certified Cold-Pressed Black Seed Oil (Organic Nigella Sativa)',
          body: 'The real deal. Sourced from organic farms in Upper Egypt. Unlike bazaar sellers who use high heat extraction which dilutes properties, D. Turtle guarantees 100% molecularly intact cold press. Sealed and amber-glass preserved in our regulated, cool boutique.',
          cta: 'Reserve via WhatsApp for 1-Min Boutique Pickup 🛍️'
        }
      },
      {
        heading: 'High-Converting Labels & Social Proof',
        paragraphs: [
          'Each product details two essential CRO badges: 1) "Red Sea Certified" (e.g., Reef-Safe, Sun-Stabilised for 35°C+ heat), 2) Nationality Trust Badges (e.g., "Highly Recommended by German Divers" or "Favorite among Italian Families in Marsa Alam"). This mimics the physical boutique recommendation organically.'
        ],
        croHighlight: 'Dynamic Proof: "Used by 140+ tourists in the Concorde Moreen and Hilton Nubian resorts this week."'
      }
    ]
  },
  {
    id: 'mobile-ux',
    title: 'Mobile-First Tourist UX',
    chapterNumber: 4,
    icon: 'Smartphone',
    summary: 'Optimized for slow hotel WiFi, sleepy fingers on beach sun loungers, and single-handed navigation.',
    sections: [
      {
        heading: 'WiFi Optimization & Asset Speed',
        paragraphs: [
          'Hotel WiFi in Marsa Alam is notoriously slow. The mobile catalog is designed with absolute minimalism: clean SVG icons, lightweight layout, highly-compressed WebP/JPG product photos, and zero bloated trackers.',
          'State is managed client-side without heavy database handshakes, ensuring instant page transitions and immediate search filtering even on a weak 3G beach signal.'
        ]
      },
      {
        heading: 'Physical Usability & Sticky CTAs',
        paragraphs: [
          'Thumb-Zone Optimization: All category pills and the primary "Add to WhatsApp List" CTAs are placed strictly in the bottom half of the mobile viewport. A persistent sticky cart banner sits at the bottom, summarizing their current list and allowing one-click export to a WhatsApp pre-filled chat.'
        ]
      }
    ]
  },
  {
    id: 'trust-system',
    title: 'Trust Architecture',
    chapterNumber: 5,
    icon: 'Heart',
    summary: 'The systematic scientific reassurance required to conquer European tourist skepticism and local bazaar fatigue.',
    sections: [
      {
        heading: 'The "Expert Verified" Shield',
        paragraphs: [
          'European tourists trust premium boutique guidelines immensely, while severely distrusting typical souvenir bazaars. We place portraits and quotes from real licensing local botanists and beauty advisors (e.g., "Dr. Refaat, Head of Marsa Alam Botanical Association") next to natural cosmetics to establish unmatched organic authority.'
        ],
        croHighlight: 'Anti-Fake Reassurance: "Every oil sold at D. Turtle is double-sealed, batch-tested, and sold with an official botanical source certificate. Certified by the Egyptian Organic Quality Board."'
      },
      {
        heading: 'Proximity Reassurance & Location Integration',
        paragraphs: [
          'The app features a Google Maps locator card with hotel distance calculations: "Only 10 minutes from Port Ghalib, 15 minutes from Abu Dabbab." It reassures the tourist that the store is real, physically accessible, and closely connected to their resort compound.'
        ]
      }
    ]
  },
  {
    id: 'whatsapp-system',
    title: 'WhatsApp Conversion System',
    chapterNumber: 6,
    icon: 'MessageSquare',
    summary: 'How to convert hotel room window shoppers into local in-store visits and boutique pickup reservations with pre-filled multilingual templates.',
    sections: [
      {
        heading: 'Seamless Checkout-Free Sales Flow',
        paragraphs: [
          'Rather than building a standard payment gateway that triggers fraudulent-activity cards block on European bank apps, D. Turtle uses a "WhatsApp Cart Builder".',
          'The customer adds items they are interested in. When they click "Send to Advisor on WhatsApp", the system automatically formats a perfectly localized and pre-filled message.'
        ],
        copyExample: {
          scenario: 'Pre-filled WhatsApp Message Generated (German Customer)',
          headline: 'Hallo Dr. Turtle! Ich bin im Resort [insert-hotel]...',
          body: 'Ich möchte gerne folgende Produkte anfragen/reservieren:\n- 1x D. Turtle Red Sea Shield Sun Cream (€16.50)\n- 1x Pharaoh\'s Comfort Kit (€14.00)\nGesamtbetrag: €30.50 (EGP 1,570)\n\nBitte teilen Sie mir mit, ob diese Produkte vorrätig sind und wann ich zur Abholung vorbeikommen kann.',
          cta: 'Send Message with One Click'
        }
      },
      {
        heading: 'Quick-Reply Strategy for Staff',
        paragraphs: [
          'Provide the local boutique staff with keyboard shortcuts on WhatsApp Web in German, Italian, and Polish for things like: "Your reserved items are beautifully wrapped and ready for pickup at our boutique. We are just a 1-minute walk away!", "Here is a picture of the sealed expiration date", "We accept Euros cash, EGP, or Revolut transfer."'
        ]
      }
    ]
  },
  {
    id: 'categories',
    title: 'High-Converting Product Categories',
    chapterNumber: 7,
    icon: 'Compass',
    summary: 'Curated retail categories aligned strictly with the real physical and emotional needs of an active vacationer.',
    sections: [
      {
        heading: 'Categorization Strategy',
        paragraphs: [
          'Red Sea Sun & Wave: Sunblocks, lip balms, hair salt protectors. Perfect category for snorkelers and deep-sea divers who need intense hydration but want reef-safe environmental safety.',
          'Pharaoh\'s Comfort: Natural herbal infusions and botanical support for hot climates, mosquito repellents, digestive comfort teas, and hydrating skin recovery.'
        ]
      },
      {
        heading: 'Beauty Souvenirs & Egyptian Treasures',
        paragraphs: [
          'This is a high-margin upsell category. Tourists desperately want authentic souvenirs (like pure therapeutic Black Seed oil, Nile Delta cold-pressed Jasmine essence, and desert Jojoba) but are terrified of cheap bazaar scams where they dilute oils with mineral cooking fats. Brand them as botanical-grade souvenirs.'
        ]
      }
    ]
  },
  {
    id: 'tourist-psychology',
    title: 'Tourist Retail Psychology',
    chapterNumber: 8,
    icon: 'Sparkles',
    summary: 'Decoding the vacation mind: why tourists buy on impulse, why they hesitate, and how to trigger trust.',
    sections: [
      {
        heading: 'The Mind of a Vacationer',
        paragraphs: [
          '1. Vacation Loneliness & Free Time: Tourists in hotel resorts have immense idle time at night. They lie in bed scrolling on mobile, with high disposable income and strong desires to take the sensory experience of Egypt back home.',
          '2. The Defense Shield: They are on high alert for standard Egyptian market haggling and aggressive shopkeepers. When they discover D. Turtle has fixed prices, clean seals, and beautiful translation, their defense drops immediately.'
        ],
        croHighlight: 'CRO Secret: "Price Transparency is the ultimate luxury in a tourist market. Fixed prices displayed on cards evoke instant safety and eliminate the anxiety of having to haggle."'
      }
    ]
  },
  {
    id: 'visual-design',
    title: 'Visual Design System',
    chapterNumber: 9,
    icon: 'Feather',
    summary: 'A warm Mediterranean, high-contrast, premium aesthetic that feels deeply authentic, elegant, and relaxing.',
    sections: [
      {
        heading: 'The "Mediterranean Oasis" Visual Mood',
        paragraphs: [
          'Typography Pairing: Display headings use Space Grotesk / Outfit for modern premium legibility. Standard body copy, skincare warnings, and price metrics use JetBrains Mono or Inter to look highly meticulous, structured, and certified.',
          'Design Patterns: Rounded corner cards with soft beach-sand amber borders. High negative space to keep the layout calm, reducing cognitive overload for older travelers.'
        ]
      },
      {
        heading: 'Photography Direction',
        paragraphs: [
          'Use real high-definition pictures of the actual boutique interior, the physical cosmetic distillation jars, the amber botanical bottles, and the beautiful crystal-blue Marsa Alam seawater in the background. Highly authentic. No aggressive studio mockups; natural beach light only.'
        ]
      }
    ]
  },
  {
    id: 'seo-discovery',
    title: 'SEO & Local Discovery',
    chapterNumber: 10,
    icon: 'Globe',
    summary: 'Dominating local tourist search intent in Port Ghalib and Marsa Alam resorts before they even set foot in your store.',
    sections: [
      {
        heading: 'Red Sea Local Keyword Capture',
        paragraphs: [
          'Tourists facing stomach discomfort or sunburn search Google in their native languages. We optimize for multilingual queries such as: "best after sun Marsa Alam", "stomach wellness Egypt boutique near me", "where to buy real black seed oil Port Ghalib", "Deutscher wellness Marsa Alam".',
          'Publish highly localized micro-blogs about hotel survival guides (e.g., "Slowing stomach discomfort in Port Ghalib: The 3 natural herbal teas that actually soothe your tummy").'
        ]
      },
      {
        heading: 'Google Maps & Hotel Domination',
        paragraphs: [
          'Claim Google Maps profiles in English, German, and Italian. Run localized, precise radius campaigns targeting tourists inside resort geo-fences (like Three Corners, Concorde Moreen, and Jaz Grand Amara) using targeted search phrases.'
        ]
      }
    ]
  },
  {
    id: 'qr-instore',
    title: 'QR Code & In-Store Strategy',
    chapterNumber: 11,
    icon: 'QrCode',
    summary: 'The bridge between physical touch and digital consideration. How to capture customers who walk out without buying.',
    sections: [
      {
        heading: 'The "Think & Compare" Shelf Bridge',
        paragraphs: [
          'Every cosmetic shelf and botanical oil station holds an elegant wooden stand with a visible QR code. Below the QR code, written in five languages: "Scan to read test results, translations, and wellness advisor recommendations comfortably from your beach bed tonight."',
          'If a customer is hesitant about purchasing an expensive bottle of pure Jasmine oil, the advisor hand-delivers them a beautifully printed D. Turtle business card with a personalized QR link to the product.'
        ],
        croHighlight: 'CRO Action: "Place QR cardboard signs at all checkout lines with the text: Too busy to buy now? Add your favorite items to your WhatsApp list and reserve them for a quick, 1-minute walk-in pickup whenever you are free!"'
      }
    ]
  },
  {
    id: 'cro-optimization',
    title: 'Conversion Rate Optimization (CRO)',
    chapterNumber: 12,
    icon: 'TrendingUp',
    summary: 'Tactical CRO upgrades, pre-packaged bundles, and dynamic localized proof points to maximize average order value.',
    sections: [
      {
        heading: 'CRO Optimization Framework',
        paragraphs: [
          'Pre-Packaged Bundles: Build combinations that make immediate logical sense. "The Ultimate Diving Skin Protection Pack" (Reef-Safe SPF 50+ & Aloe Recovery Gel) offered at an immediate €4 discount compared to separate purchases.',
          'Dynamic Trust Points: Below each add-to-list CTA, include: "No payment details required. Perfect, relaxed pay-in-store experience nearby."'
        ]
      }
    ]
  },
  {
    id: 'tech-stack',
    title: 'Recommended Tech Stack',
    chapterNumber: 13,
    icon: 'Cpu',
    summary: 'Super lightweight, lightning-fast architecture configured specifically for rural Egyptian cellular tower connectivity.',
    sections: [
      {
        heading: 'Platform Recommendation',
        paragraphs: [
          'Core Storefront: Next.js or extremely lightweight Headless Shopify configured with heavy edge caching to ensure sub-500ms load times on weak H+/3G hotel cellular connections.',
          'Language Strategy: Weglot or deep native local static translation folders rather than heavy dynamic translators, which block render threads during parsing.'
        ]
      },
      {
        heading: 'CRM & WhatsApp Automation',
        paragraphs: [
          'Integrate with WhatsApp CRM software like Sirena, ManyChat, or WATI. This allows incoming multiple foreign languages to be auto-translated for the local Egyptian boutique staff, ensuring they can reply to a German or Polish hotel request instantly with high precision.'
        ]
      }
    ]
  },
  {
    id: 'launch-plan',
    title: '30-Day Launch Plan',
    chapterNumber: 14,
    icon: 'Rocket',
    summary: 'A practical, structured step-by-step program to generate your first 500 tourist orders in Marsa Alam.',
    sections: [
      {
        heading: 'Phase 1: Setup & In-Store Bridge (Days 1 - 10)',
        paragraphs: [
          'Generate high-definition QRs for all major product shelves. Place beautifully framed wooden signs at the cosmetic counters. Train boutique staff to give every hesitant client a printed card with the digital showroom address.'
        ]
      },
      {
        heading: 'Phase 2: Local Resort Partnerships (Days 11 - 20)',
        paragraphs: [
          'Partner with Marsa Alam local receptionists and diving centers. Offer hotels a custom flyer for their check-in booklets titled "Marsa Alam Health Guide: Restoring Sunburns & Stomach Comfort in 3 Hours", providing a direct QR link to D. Turtle and an in-store voucher for quick walk-in pickup.'
        ]
      },
      {
        heading: 'Phase 3: Geo-Fenced Local Marketing (Days 21 - 30)',
        paragraphs: [
          'Launch Google Search and Meta Ads restricted to a 10km radius around Port Ghalib and Marsa Abu Dabbab, targeting keywords related to "wellness boutique", "sunburn soothe", "pharmacy near me", "cosmetics Marsa Alam" in German, Italian, Polish, Czech, and English. Drive traffic to the physical store location with direction links.',
          'Track customer responses on WhatsApp, optimizing standard response text bundles based on real tourist objections.'
        ]
      }
    ]
  }
];
