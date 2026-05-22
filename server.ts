import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Lazy initialize standard Gemini API client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: key || "NO_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // 1. API route: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // 2. API route: D. Turtle Wellness AI Chatbot helper
  app.post("/api/chat", async (req, res) => {
    const { message, language, selectedProductCategory, cartItems } = req.body;
    
    const userLanguage = language || 'en';
    const hasKey = !!process.env.GEMINI_API_KEY;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // A list of static, beautiful, highly accurate fallback replies if Gemini API Key is missing.
    // This protects the application from crashing and provides pristine offline/safe local capabilities.
    if (!hasKey) {
      setTimeout(() => {
        const msgLower = message.toLowerCase();
        let fallbackReply = "";

        if (userLanguage === 'de') {
          if (msgLower.includes('magen') || msgLower.includes('pharao') || msgLower.includes('brennen') || msgLower.includes('unwohl')) {
            fallbackReply = "Hallo! Ich bin Dr. Turtle, Ihr Wellness-Berater in Marsa Alam. Für eine angenehme Magen-Entspannung und Begleitung bei der reichhaltigen Buffet-Anpassung empfehle ich unser 'Pharaoh's Comfort Kit'. Es beruhigt den Magen-Darm-Bereich auf sanfte Pharaonen-Art mit natürlichen Kräutern. Besuchen Sie unseren gemütlichen Store gleich nebenan für eine persönliche Beratung und ein erfrischendes Karkadeh-Getränk!";
          } else if (msgLower.includes('sonne') || msgLower.includes('brand') || msgLower.includes('sonnenbrand')) {
            fallbackReply = "Hallo! Die ägyptische Sonne ist extrem intensiv (oft über 35°C). Wenn Ihre Haut spannt oder brennt, tragen Sie unser 'Red Sea Recovery Gel' mit konzentrierter Aloe Vera und milder ägyptischer Ringelblume auf zur schnellen Beruhigung und Feuchtigkeitspflege. Holen Sie sich Ihr gekühltes Gel direkt bei uns im Store ab – wir sind nur 1 Minute zu Fuß entfernt!";
          } else if (msgLower.includes('mücke') || msgLower.includes('mucke') || msgLower.includes('insekt') || msgLower.includes('stich')) {
            fallbackReply = "Guten Abend! Die Abendbrise an den Resort-Lagunen bringt oft Insekten. Schützen Sie Ihre Haut sanft mit unserem wirksamen, DEET-freien 'Sinai Herbal Bug Shield' mit Sinai-Minze und frischem Zitronengras. Es lindert auch das Jucken von Stichen sofort. Probieren Sie es gerne in unserem Store aus!";
          } else if (msgLower.includes('souvenir') || msgLower.includes('öl') || msgLower.includes('schwarzkümmel')) {
            fallbackReply = "Schön, dass Sie hochwertige ägyptische Geheimnisse kennenlernen möchten! Unser kaltgepresstes Schwarzkümmelöl (Pure Black Seed Oil) wird nach höchsten Qualitätskriterien abgefüllt und ist zu 100% rein. Im Gegensatz zu Straßen-Basaren, wo Öle oft in der Hitze lagern oder gestreckt sind, erhalten Sie bei uns frische, versiegelte Premium-Qualität. Besuchen Sie uns einfach für einen kurzen, entspannten Spaziergang und überzeugen Sie sich selbst!";
          } else {
            fallbackReply = `Guten Tag! Ich bin Dr. Turtle, Ihr Wellness- und Hautpflegeberater in Marsa Alam. Gerne helfe ich Ihnen bei Fragen zur Magenentspannung, Sonnenberuhigung, Naturölen oder dem kurzen Weg zu unserem Boutique-Store ganz in Ihrer Nähe!`;
          }
        } else if (userLanguage === 'it') {
          if (msgLower.includes('stomaco') || msgLower.includes('faraone') || msgLower.includes('diarrea') || msgLower.includes('pancia')) {
            fallbackReply = "Ciao! Sono il Dr. Turtle, il tuo consulente di benessere a Marsa Alam. Per favorire il benessere e la digestione con i cibi del resort e il clima caldo, ti consiglio il nostro 'Pharaoh's Comfort Kit' a base di estratti botanici locali lenitivi. Fai una passeggiata rilassante di 1 minuto fino alla nostra boutique per ritirarlo!";
          } else if (msgLower.includes('sole') || msgLower.includes('scottatura') || msgLower.includes('bruciore')) {
            fallbackReply = "Ciao! Il sole egiziano può essere molto intenso. Per rinfrescare e lenire la pelle arrossata, ti consiglio il nostro 'Red Sea Recovery Gel' con Aloe Vera e biologica Calendula. Passa a trovarci a solo un minuto dall'hotel per provarlo fresco dal nostro frigo boutique!";
          } else {
            fallbackReply = "Ciao! Sono il Dr. Turtle, il tuo partner per una vacanza all'insegna del benessere a Marsa Alam. Posso darti eccezionali consigli su scottature solari, idratazione della pelle, oli cosmetici pregiati (come Cumino Nero o Jojoba) e accoglierti nella nostra boutique vicinissima per il ritiro. Chiedimi pure!";
          }
        } else if (userLanguage === 'cs') {
          if (msgLower.includes('žaludek') || msgLower.includes('farao') || msgLower.includes('průjem') || msgLower.includes('křeč')) {
            fallbackReply = "Dobrý den! Jsem Dr. Turtle, váš wellness poradce v Marsa Alamu. Pro skvělý komfort trávení a klidné zažívání při ochutnávání místních jídel doporučuji náš přírodní 'Pharaoh's Comfort Kit'. Stavte se u nás v butiku, který je vzdálený jen minutu chůze od hotelové zóny.";
          } else {
            fallbackReply = "Dobrý den! Jsem Dr. Turtle, váš průvodce pro péči a pohodu v Marsa Alamu. Rád vám doporučím zklidňující péči po slunění, ochranu proti komárům či výběr stoprocentně čistých egyptských kosmetických olejů přímo u nás v obchodě.";
          }
        } else if (userLanguage === 'pl') {
          if (msgLower.includes('żołądek') || msgLower.includes('faraon') || msgLower.includes('brzuch') || msgLower.includes('trawien')) {
            fallbackReply = "Dzień dobry! Jestem Dr. Turtle, Twój doradca ds. pielęgnacji i wellness w Marsa Alam. W celu wsparcia naturalnej harmonii żołądka podczas urlopu oraz łatwiejszej adaptacji do lokalnej kuchni polecam nasz naturalny zestaw ziołowy 'Pharaoh's Comfort Kit'. Zapraszamy na krótki, 1-minutowy spacer do naszego przytulnego butiku po odbiór!";
          } else {
            fallbackReply = "Dzień dobry! Jestem Dr. Turtle, Twój przyjaciel od skin-care i dobrego samopoczucia w Marsa Alam. Służę radą przy pielęgnacji posłonecznej, ochronie przed owadami i wyborze luksusowych czystych olejków z gwarancją jakości u nas w butiku. Jesteśmy tuż obok hotelu!";
          }
        } else {
          // English Default
          if (msgLower.includes('stomach') || msgLower.includes('pharaoh') || msgLower.includes('digest') || msgLower.includes('bloat')) {
            fallbackReply = "Hello! I am Dr. Turtle, your dedicated wellness and botanical advisor in Marsa Alam. For 'Pharaoh's' natural digest transition and resort culinary harmony, I highly recommend our customized herbal 'Pharaoh's Comfort Kit'. Stop by our warm boutique just a 1-minute walk away to explore it!";
          } else if (msgLower.includes('sun') || msgLower.includes('burn') || msgLower.includes('peel')) {
            fallbackReply = "Hello! The Red Sea UV index is extremely high (often 35°C+). If your skin is sun-stressed, apply our 'Red Sea Recovery Gel' with Organic Calendula and soothing Mountain Aloe. Grab your cold bottle directly from our boutique fridge—it's only a minute away!";
          } else if (msgLower.includes('mosquito') || msgLower.includes('bug') || msgLower.includes('bite') || msgLower.includes('gnat')) {
            fallbackReply = "Hi! Evening breeze around Marsa Alam resort lagoons brings insects. Protect your skin naturally with our DEET-free 'Sinai Herbal Bug Shield' (wild mint & lemongrass, completely kid-safe). It also stops the itch immediately! Walk on over to test a sample on your skin today.";
          } else if (msgLower.includes('oil') || msgLower.includes('black seed') || msgLower.includes('souvenir') || msgLower.includes('jojoba')) {
            fallbackReply = "Welcome! Egyptian cosmetic oils are world-famous, but street bazaars often store them in raw heat or dilute them with cheap liquid paraffin. At Dr. Turtle, we sell 100% pure, certified Cold-Pressed Black Seed Oil and Sinai Jojoba Gold in sealed glass jars. Take a premium short walk to our nearby boutique to see the purity for yourself.";
          } else {
            fallbackReply = "Hello! I am Dr. Turtle, your beauty and botanical wellness guide in Marsa Alam. Be sure to check our beautiful physical boutique, just 1 minute away from the resort zone, to explore our premium collections. Let me know how you're feeling!";
          }
        }

        res.json({ text: fallbackReply, note: "Local Advisor Advice (Safe & Instant)" });
      }, 800);
      return;
    }

    try {
      const client = getGeminiClient();
      
      const systemPrompt = `
You are Dr. Turtle, the trusted, knowledgeable, and highly empathetic expert wellness, beauty, and botanical advisor at "Dr. Turtle Beauty & Wellness Boutique" located in Marsa Alam, Red Sea, EGYPT.
Your goal is to provide warm, expert, European tourist-friendly skincare, vacation sun-care, botanical oil, and stomach digestive comfort tips.

CRITICAL POSITIONING & LICENSING COMPLIANCE:
- You are representing an upscale, certified beauty, self-care, and vacation essentials boutique.
- NEVER describe yourself as a "pharmacist", "doctor", or "pharmacy". You are a "beauty & wellness advisor" or "botanical skincare expert".
- NEVER prescribe medicine, drugs, or make pharmaceutical claims. Strictly suggest natural, botanical, topical, or herbal care solutions (e.g. digestive herbal blends for hotel buffet adaptation, soothing organic after-sun gels, cold-pressed black seed cosmetic oils).
- If they ask about stomach distress, guide them to comfortable digestion and culinary adaptation tips (Pharaoh's Comfort Kit, drinking bottled/sealed water inside resorts). 
- If they ask about sun care, emphasize Red Sea sun intensity (35°C+), keeping gels in mini-fridges for extra cooling protection, and using reef-safe skin shields.
- If they ask about Egyptian souvenirs, recommend certified pure Cold-Pressed Black Seed Oil or Jojoba Gold in sealed glass. Contrast your temperature-controlled boutique storage with street market stalls that leave oils out to oxidize in direct heat.
- Inform them that they can easily reserve their favorite items via WhatsApp for a quick, hassle-free pickup at our physical boutique, which is just a short, 1-minute walk from the main resort areas. We also love welcoming them in-store to sample our natural aromas and enjoy personalized advice. Keep consultations focused on natural ingredients, self-care, and guest protection.

ALWAYS RESPOND in the user's language of choice (Language code: ${userLanguage}, which is ${userLanguage === 'de' ? 'German' : userLanguage === 'it' ? 'Italian' : userLanguage === 'pl' ? 'Polish' : userLanguage === 'cs' ? 'Czech' : 'English'}). Write with natural human fluency, comforting warmth, and simplicity.

Current query from user: "${message}"
`;

      const response = await client.models.generateContent({
        model: "gemini-2.5",
        contents: systemPrompt,
        config: {
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error in Server:", err);
      res.status(500).json({ error: "Wellness advisor was temporarily paged. Please use our safe offline support which is fully active." });
    }
  });

  // 3. Mount Vite or static server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from compiled dist folder in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`D. Turtle custom express server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
