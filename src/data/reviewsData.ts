export interface Review {
  id: string;
  rating: number;
  name: string;
  text: string;
  date: string;
}

export const SEED_REVIEWS: Record<string, Review[]> = {
  olivysoap: [
    { id: 'ol-1', rating: 5, name: 'Emma L.', text: 'So gentle and nourishing! My skin felt soothed immediately after getting out of the salt water.', date: '2026-05-18' },
    { id: 'ol-2', rating: 4, name: 'Dieter S.', text: 'Sehr reichhaltig und mild. Wunderbarer natürlicher Lavendelduft.', date: '2026-05-15' },
    { id: 'ol-3', rating: 5, name: 'Giulia M.', text: 'Assolutamente fantastico. La pelle rimane morbida e profumata per ore.', date: '2026-05-10' },
    { id: 'ol-4', rating: 5, name: 'Agata W.', text: 'Doskonałe naturalne mydło, łagodzi podrażnienia słoneczne.', date: '2026-05-02' }
  ],
  sunscreen: [
    { id: 'sc-1', rating: 5, name: 'Sarah G.', text: 'Genuinely reef-safe and extremely protective under the intense Egyptian sun. Did not burn once.', date: '2026-05-20' },
    { id: 'sc-2', rating: 4, name: 'Maximilian K.', text: 'Zieht gut ein und klebt nicht. Perfekt für das tägliche Schnorcheln im Roten Meer.', date: '2026-05-14' },
    { id: 'sc-3', rating: 5, name: 'Thomas P.', text: 'Hands down the best natural sun protection I have bought. Safe for fish and skin!', date: '2026-05-09' }
  ],
  aftersun: [
    { id: 'as-1', rating: 5, name: 'Elena V.', text: 'Pure cold relief! Instantly soothed my sunburned shoulders after diving.', date: '2026-05-21' },
    { id: 'as-2', rating: 5, name: 'Marc D.', text: 'The cooling sensation of mint and aloe is unbelievable in this heat. Outstanding.', date: '2026-05-17' },
    { id: 'as-3', rating: 5, name: 'Katarzyna B.', text: 'Cudowny spray chłodzący. Ulga po całym dniu na plaży gwarantowana!', date: '2026-05-12' }
  ],
  pharaohrelief: [
    { id: 'pr-1', rating: 5, name: 'John B.', text: 'Helped so much with my muscle fatigue after our Desert Quad excursion. Feels like a spa treatment.', date: '2026-05-19' },
    { id: 'pr-2', rating: 5, name: 'Hans M.', text: 'Exzellente Linderung für müde Glieder. Riecht herrlich intensiv nach Kräutern.', date: '2026-05-11' },
    { id: 'pr-3', rating: 4, name: 'Matteo R.', text: 'Ottimo balsamo rilassante. Ideale dopo lunghe nuotate sulla barriera corallina.', date: '2026-05-05' }
  ],
  blackseed: [
    { id: 'bs-1', rating: 5, name: 'Amina T.', text: 'Incredibly high purity. Black seed oil in Egypt is famous, and this cold-pressed one is elite.', date: '2026-05-22' },
    { id: 'bs-2', rating: 5, name: 'Sophie L.', text: 'Amazing for skin and digestive wellness. A traditional secret in a premium bottle.', date: '2026-05-16' },
    { id: 'bs-3', rating: 5, name: 'Lukáš N.', text: 'Skvělý olej, výborná kvalita. Používám na pleť i vnitřně.', date: '2026-05-07' }
  ],
  jojobagold: [
    { id: 'jg-1', rating: 5, name: 'Clara H.', text: 'Pure gold for dry hair! No greasy feeling, absorbs instantly into skin. Marvelous.', date: '2026-05-19' },
    { id: 'jg-2', rating: 5, name: 'Isabella F.', text: 'Olio stupendo. Lo uso su viso e punte dei capelli dopo la spiaggia. Risultati divini.', date: '2026-05-13' },
    { id: 'jg-3', rating: 5, name: 'Sabine W.', text: 'Unglaubliche Qualität, weiches Hautgefühl. Bringt geschädigte Spitzen sofort wieder zum Glänzen.', date: '2026-05-08' }
  ],
  mosquitoguard: [
    { id: 'mg-1', rating: 4, name: 'Lukas S.', text: 'Very effective during early evening on our hotel patio. Safe for children and smells pleasant!', date: '2026-05-18' },
    { id: 'mg-2', rating: 4, name: 'Renata Z.', text: 'Bardzo dobrze chroni przed komarami nad wodą. Ładny miętowo-olejkowy zapach.', date: '2026-05-15' },
    { id: 'mg-3', rating: 5, name: 'Charlotte A.', text: 'Finally a completely natural mosquito guard that actually works without harsh poison.', date: '2026-05-03' }
  ],
  nefertitioil: [
    { id: 'nf-1', rating: 5, name: 'Chloe M.', text: 'Scent of absolute royalty. My skin and hair were silky and luminous all honeymoon.', date: '2026-05-21' },
    { id: 'nf-2', rating: 5, name: 'Andreas B.', text: 'Wunderschöner magischer Amber-Duft. Hat meiner Frau extrem gut gefallen.', date: '2026-05-16' },
    { id: 'nf-3', rating: 5, name: 'Paola G.', text: 'Olio divino dalle note storiche e mistiche. Texture sublime e idratazione totale.', date: '2026-05-11' }
  ],
  honeyeggshampoo: [
    { id: 'he-1', rating: 5, name: 'Lukas F.', text: 'Amazing! My hair felt like straw after three days in the pool, but this brought back instant hair softness.', date: '2026-05-22' },
    { id: 'he-2', rating: 5, name: 'Carla T.', text: 'Unbelievable restoration for post-sun dry locks. Rich lather and delightful aroma.', date: '2026-05-19' },
    { id: 'he-3', rating: 4, name: 'Paulina S.', text: 'Bardzo fajny szampon. Dobrze myje i odżywia zmęczone chlorowaną wodą pasma.', date: '2026-05-12' }
  ]
};

const STORAGE_KEY = 'dturtle_product_reviews';

export function loadAllReviews(): Record<string, Review[]> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading reviews from localStorage', e);
  }
  
  // If not in storage, seed and save
  saveAllReviews(SEED_REVIEWS);
  return SEED_REVIEWS;
}

export function saveAllReviews(reviews: Record<string, Review[]>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {
    console.error('Error saving reviews to localStorage', e);
  }
}

export function computeProductStats(productReviews: Review[]) {
  if (!productReviews || productReviews.length === 0) {
    return { average: 5.0, count: 0 };
  }
  const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / productReviews.length;
  // Round to 1 decimal place
  const roundedAvg = Math.round(avg * 10) / 10;
  return {
    average: roundedAvg,
    count: productReviews.length
  };
}
