import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, X, Check } from 'lucide-react';
import { Language } from '../types';
import { Review, loadAllReviews, saveAllReviews, computeProductStats } from '../data/reviewsData';

interface ProductRatingProps {
  productId: string;
  activeLang: Language;
  onReviewAdded?: () => void;
  variant?: 'card' | 'detail';
}

const ratingTranslations = {
  leaveReview: {
    en: "Leave a Review",
    de: "Bewertung schreiben",
    it: "Lascia una Recensione",
    pl: "Napisz opinię",
    cs: "Napsat recenzi"
  },
  reviews: {
    en: "reviews",
    de: "Bewertungen",
    it: "recensioni",
    pl: "opinie",
    cs: "recenze"
  },
  review: {
    en: "review",
    de: "Bewertung",
    it: "recensione",
    pl: "opinia",
    cs: "recenze"
  },
  nameLabel: {
    en: "Your Name",
    de: "Ihr Name",
    it: "Il tuo nome",
    pl: "Twoje imię",
    cs: "Vaše jméno"
  },
  namePlaceholder: {
    en: "e.g., Sarah King",
    de: "z.B. Sarah King",
    it: "es. Sarah King",
    pl: "np. Sarah King",
    cs: "např. Sarah King"
  },
  commentLabel: {
    en: "Your Experience",
    de: "Ihre Erfahrung",
    it: "La tua esperienza",
    pl: "Twoja opinia",
    cs: "Vaše zkušenost"
  },
  commentPlaceholder: {
    en: "How did this product help your skin or hair during your vacation?",
    de: "Wie hat dieses Produkt Ihrer Haut oder Ihrem Haar im Urlaub geholfen?",
    it: "In che modo questo prodotto ha aiutato la tua pelle o i tuoi capelli in vacanza?",
    pl: "Jak ten produkt pomógł Twojej skórze lub włosom w czasie wakacji?",
    cs: "Jak tento produkt pomohl vaší pokožce nebo vlasům během dovolené?"
  },
  submitReview: {
    en: "Submit Review",
    de: "Bewertung absenden",
    it: "Invia Recensione",
    pl: "Wyślij opinię",
    cs: "Odeslat recenzi"
  },
  titleLeaveReview: {
    en: "Share Your Luxury Experience",
    de: "Teilen Sie Ihre Luxuserfahrung",
    it: "Condividi la tua Esperienza di Lusso",
    pl: "Podziel się wrażeniami z luksusu",
    cs: "Podělte se o svůj luxusní zážitek"
  },
  ratingsTitle: {
    en: "Guest Reviews",
    de: "Gästebewertungen",
    it: "Recensioni degli Ospiti",
    pl: "Opinie gości",
    cs: "Recenze hostů"
  },
  noReviewsYet: {
    en: "Be the first to review this product",
    de: "Schreiben Sie die erste Bewertung",
    it: "Sii il primo a recensire questo prodotto",
    pl: "Bądź pierwszym, który oceni ten produkt",
    cs: "Buďte první, kdo ohodnotí tento produkt"
  },
  validationName: {
    en: "Please enter your name.",
    de: "Bitte geben Sie Ihren Namen ein.",
    it: "Inserisci il tuo nome.",
    pl: "Wpisz swoje imię.",
    cs: "Zadejte prosím své jméno."
  },
  validationComment: {
    en: "Please write a short comment.",
    de: "Bitte schreiben Sie einen kurzen Kommentar.",
    it: "Scrivi un breve commento.",
    pl: "Napisz krótką opinię.",
    cs: "Napište prosím krátký komentář."
  },
  successMessage: {
    en: "Thank you for sharing! Your review was successfully saved.",
    de: "Danke fürs Teilen! Ihre Bewertung wurde erfolgreich gespeichert.",
    it: "Grazie per aver condiviso! La tua recensione è stata salvata.",
    pl: "Dziękujemy za opinię! Została pomyślnie zapisana.",
    cs: "Děkujeme za sdílení! Vaše recenze byla úspěšně uložena."
  }
};

export const ProductRating: React.FC<ProductRatingProps> = ({
  productId,
  activeLang,
  onReviewAdded,
  variant = 'card'
}) => {
  const [reviewsState, setReviewsState] = useState<Record<string, Review[]>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  // Form State
  const [formRating, setFormRating] = useState<number>(5);
  const [formHoverRating, setFormHoverRating] = useState<number | null>(null);
  const [formName, setFormName] = useState('');
  const [formComment, setFormComment] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Track the actual average & reviews for this specific product to display hovering
  const [averageHoverIndex, setAverageHoverIndex] = useState<number | null>(null);

  // Load reviews from store on mount and on storage updates
  const fetchReviews = () => {
    const loaded = loadAllReviews();
    setReviewsState(loaded);
  };

  useEffect(() => {
    fetchReviews();
    
    // Support synching across other tabs/rerenders
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'dturtle_product_reviews') {
        fetchReviews();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const productReviews = reviewsState[productId] || [];
  const { average, count } = computeProductStats(productReviews);

  const t = (key: keyof typeof ratingTranslations) => {
    return ratingTranslations[key][activeLang] || ratingTranslations[key]['en'];
  };

  const handleOpenReviewWithScore = (score: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormRating(score);
    setIsModalOpen(true);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleOpenReviewModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormRating(5);
    setIsModalOpen(true);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setErrorMsg(t('validationName'));
      return;
    }
    if (!formComment.trim()) {
      setErrorMsg(t('validationComment'));
      return;
    }

    const newReview: Review = {
      id: `${productId}-${Date.now()}`,
      rating: formRating,
      name: formName.trim(),
      text: formComment.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = {
      ...reviewsState,
      [productId]: [newReview, ...productReviews]
    };

    saveAllReviews(updatedReviews);
    setReviewsState(updatedReviews);
    
    // Clear Form & Show Success Message briefly
    setFormName('');
    setFormComment('');
    setErrorMsg('');
    setSuccessMsg(t('successMessage'));

    // Trigger parent callback to let other components react
    if (onReviewAdded) {
      onReviewAdded();
    }

    // Auto close modal after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setSuccessMsg('');
    }, 1800);
  };

  const renderStars = (
    currentRating: number,
    activeHover: number | null,
    setHover: (score: number | null) => void,
    onStarClick: (score: number, e: React.MouseEvent) => void,
    interactive: boolean,
    sizeClass = 'w-3.5 h-3.5'
  ) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((index) => {
          // Determine if filled
          const isFilled = activeHover !== null 
            ? index <= activeHover 
            : index <= Math.round(currentRating);

          return (
            <button
              key={index}
              type="button"
              disabled={!interactive}
              onClick={(e) => onStarClick(index, e)}
              onMouseEnter={() => interactive && setHover(index)}
              onMouseLeave={() => interactive && setHover(null)}
              className={`${interactive ? 'cursor-pointer transition-transform duration-100 hover:scale-120' : 'cursor-default'} focus:outline-none`}
            >
              <Star
                className={`${sizeClass} ${
                  isFilled 
                    ? 'fill-amber-400 text-amber-400' 
                    : 'text-stone-200/90 hover:text-amber-300'
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  };

  // Card Variant: Sleek, compact and exquisite
  if (variant === 'card') {
    return (
      <div className="flex flex-col space-y-1.5 py-0.5 select-none text-left">
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
          {/* 5 click-hoverable stars */}
          {renderStars(
            average,
            hoverRating,
            setHoverRating,
            handleOpenReviewWithScore,
            true,
            'w-3.5 h-3.5'
          )}

          {/* Average representation & Count */}
          <span className="text-[10.5px] font-sans font-bold text-stone-700">
            {average.toFixed(1)}
          </span>
          <span className="text-[10px] sm:text-xxs font-sans text-stone-400 font-light">
            ({count} {count === 1 ? t('review') : t('reviews')})
          </span>
        </div>

        {/* Action Button: Exquisite underlined mini leave-review */}
        <div className="flex">
          <button
            onClick={handleOpenReviewModal}
            className="text-[9.5px] font-sans font-semibold tracking-wide text-stone-400 hover:text-stone-800 transition-colors uppercase flex items-center gap-1 group border-b border-dashed border-stone-250 hover:border-stone-800 pb-0.5"
          >
            <MessageSquare className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
            {t('leaveReview')}
          </button>
        </div>

        {/* Leave Review Modal */}
        {renderModal()}
      </div>
    );
  }

  // Detail Drawer Variant: Shows direct stats with historical review comments and input
  return (
    <div className="space-y-6 select-none border-t border-stone-200/60 pt-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-left space-y-1">
          <h4 className="text-xs font-black text-[#0f291e] tracking-widest uppercase font-sans">
            🌱 {t('ratingsTitle')}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black text-stone-900">
              {average.toFixed(1)}
            </span>
            <div className="flex flex-col items-start leading-none">
              {renderStars(average, null, () => {}, () => {}, false, 'w-4 h-4')}
              <span className="text-[10px] text-stone-400 font-light font-sans mt-0.5">
                {count} {count === 1 ? t('review') : t('reviews')}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleOpenReviewModal}
          className="bg-transparent hover:bg-stone-900 text-stone-800 hover:text-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest rounded-lg border border-stone-300 hover:border-stone-900 transition active:scale-95 flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {t('leaveReview')}
        </button>
      </div>

      {/* Historical Reviews List */}
      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 divide-y divide-stone-100">
        {productReviews.length === 0 ? (
          <p className="text-xs text-stone-400 italic text-left py-4">
            {t('noReviewsYet')}
          </p>
        ) : (
          productReviews.map((rev) => (
            <div key={rev.id} className="pt-4 first:pt-0 text-left space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-stone-800 font-sans">
                  {rev.name}
                </span>
                <span className="text-[9px] font-mono text-stone-400">
                  {rev.date}
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                {renderStars(rev.rating, null, () => {}, () => {}, false, 'w-3 h-3')}
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {rev.text}
              </p>
            </div>
          ))
        )}
      </div>

      {renderModal()}
    </div>
  );

  // Helper to render the elegant luxury Review Form Drawer/Modal
  function renderModal() {
    if (!isModalOpen) return null;
    return (
      <div 
        className="fixed inset-0 bg-stone-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(false);
        }}
      >
        <div 
          className="bg-[#FAF6F0] border border-stone-300 rounded-[2rem] w-full max-w-md p-6 sm:p-8 space-y-6 shadow-2xl relative animate-drawer-slide"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-stone-400 hover:text-stone-900 border border-stone-200/60 bg-white shadow-xs p-1.5 rounded-full transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-left space-y-2 border-b border-stone-200/60 pb-4">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#429e7c] font-sans">
              Guest Diary
            </span>
            <h3 className="text-xl font-serif font-black text-stone-900 tracking-tight">
              {t('titleLeaveReview')}
            </h3>
          </div>

          {successMsg ? (
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-lg">
                <Check className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-emerald-800">{successMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              {/* Star Selection Row */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 font-sans block">
                  Overall Rating
                </label>
                <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-2 rounded-xl">
                  {renderStars(
                    formRating,
                    formHoverRating,
                    setFormHoverRating,
                    (score, e) => {
                      e.preventDefault();
                      setFormRating(score);
                    },
                    true,
                    'w-6 h-6'
                  )}
                  <span className="text-xs font-bold text-stone-700 font-sans ml-2">
                    {formHoverRating || formRating} / 5
                  </span>
                </div>
              </div>

              {/* Your Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 font-sans block">
                  {t('nameLabel')}
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={t('namePlaceholder')}
                  className="w-full bg-white border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 text-xs px-4 py-3 rounded-xl placeholder-stone-400 text-stone-900 font-sans"
                />
              </div>

              {/* Your Comments */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 font-sans block">
                  {t('commentLabel')}
                </label>
                <textarea
                  rows={3}
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
                  placeholder={t('commentPlaceholder')}
                  className="w-full bg-white border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 text-xs px-4 py-3 rounded-xl placeholder-stone-400 text-stone-900 leading-relaxed font-sans"
                />
              </div>

              {errorMsg && (
                <p className="text-xs font-medium text-red-650 tracking-wide font-sans">
                  ⚠️ {errorMsg}
                </p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#0f291e] hover:bg-stone-900 text-white font-extrabold uppercase tracking-[0.25em] text-[10px] py-3.5 px-4 rounded-xl transition duration-300 active:scale-95 shadow-sm"
              >
                {t('submitReview')}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
};
