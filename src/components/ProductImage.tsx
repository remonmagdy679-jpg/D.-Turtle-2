import React from 'react';

interface ProductImageProps {
  productId: string;
  src: string;
  alt: string;
  className?: string;
  thumbnail?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  productId,
  src,
  alt,
  className = '',
  thumbnail = false,
}) => {
  if (productId === 'olivysoap') {
    if (thumbnail) {
      return (
        <div
          className={`relative bg-[#dfd3bd] border border-[#cfc0a6] rounded-xl flex flex-col items-center justify-center overflow-hidden shrink-0 select-none ${className}`}
          style={{ fontFamily: 'sans-serif' }}
        >
          {/* Green Border */}
          <div className="absolute inset-0.5 border border-emerald-900/30 rounded-lg flex flex-col items-center justify-center p-0.5">
            {/* Tiny Emblem Logo */}
            <div className="w-4 h-4 rounded-full border border-emerald-900/50 flex items-center justify-center text-[7px] font-extrabold text-emerald-900 leading-none bg-emerald-50">
              🌙
            </div>
            <span className="text-[6px] font-extrabold text-emerald-950 uppercase tracking-tighter mt-0.5 scale-90">
              Olivy
            </span>
          </div>
        </div>
      );
    }

    // Full sized / aspect-video presentation
    return (
      <div
        className={`relative bg-[#eae1ce] overflow-hidden flex flex-col items-center justify-center select-none ${className}`}
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {/* Subtle Paper Texture/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#dfd5be] via-transparent to-[#f2ebd9] opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

        {/* Outer Elegant Frame */}
        <div className="absolute inset-4 border-[3px] border-double border-emerald-950/60 rounded-xl flex flex-col items-center justify-between p-4 bg-[#eae1ce]/50">
          
          {/* Top Branding label */}
          <div className="text-center w-full mt-1">
            <h4 className="text-sm md:text-base font-bold text-emerald-950/90 tracking-wide uppercase select-none">
              Olivy Hand Made Soap
            </h4>
            <div className="h-[1px] w-24 bg-emerald-905/30 mx-auto mt-1" />
          </div>

          {/* Central Logo Crest (The traditional crescent & text) */}
          <div className="flex flex-col items-center justify-center my-3 relative">
            {/* Rounded Classic Badge */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-emerald-900/80 bg-[#eae1ce] flex flex-col items-center justify-center p-1 relative shadow-inner">
              {/* Green Inner Crescent Frame Ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-emerald-805/40" />
              
              {/* Crescent Seal Motif */}
              <span className="text-emerald-900 text-xs md:text-sm font-bold leading-none select-none">
                نابلسي
              </span>
              <span className="text-emerald-900 text-[10px] md:text-xs font-bold leading-none select-none">
                شاهين
              </span>
              
              {/* Year */}
              <span className="text-emerald-900/75 text-[9px] md:text-[10px] font-mono mt-1 select-none">
                ١٩٢٨
              </span>
            </div>
            
            {/* Year Subtitle in English */}
            <span className="text-[9px] font-sans font-bold text-emerald-900/75 uppercase tracking-[0.2em] mt-2">
              [Since 1928]
            </span>
          </div>

          {/* Bottom Labels (Traditional warnings and notes) */}
          <div className="text-center space-y-0.5 mb-1 w-full max-w-xs">
            <p className="text-[8px] md:text-[9.5px] font-sans font-semibold text-emerald-950/80 leading-tight">
              تصدير الخليج - أفريقيا
            </p>
            <p className="text-[7.5px] md:text-[8.5px] font-sans font-medium text-emerald-950/60 leading-tight uppercase tracking-wider">
              100% Pure Saponified Olive Oil
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[7px] md:text-[8px] font-sans font-bold text-red-800/80 mt-1">
              <span>★</span>
              <span>احذروا التقليد السيئ الضار</span>
              <span>★</span>
            </div>
          </div>

          {/* Warm Vintage Vignette Overlay */}
          <div className="absolute inset-0 rounded-lg pointer-events-none shadow-[inset_0_0_40px_rgba(139,115,85,0.15)]" />

          {/* Subtle Watermark Overlay on Custom Illustration */}
          <div className="absolute bottom-2 right-2 w-[20%] max-w-[60px] min-w-[32px] pointer-events-none select-none z-10" style={{ opacity: 0.35 }}>
            <img
              src="https://i.ibb.co/fG4HBzW1/IMG-20260522-144715-832.jpg"
              alt="Watermark"
              className="w-full h-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    );
  }

  // Custom vector drawings are handled, other products fall back to their image URLs

  // Fallback to regular standard product image URL with Dynamic Watermark
  return (
    <div className={`relative overflow-hidden w-full h-full ${className.includes('h-12') || className.includes('w-12') ? 'inline-block' : ''}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className={className}
      />
      {!thumbnail && (
        <div className="absolute bottom-2 right-2 w-[20%] max-w-[60px] min-w-[32px] pointer-events-none select-none z-10" style={{ opacity: 0.35 }}>
          <img
            src="https://i.ibb.co/fG4HBzW1/IMG-20260522-144715-832.jpg"
            alt="Watermark"
            className="w-full h-auto object-contain transition-all duration-300"
            style={{ filter: 'brightness(0) invert(1)' }}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};

