import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onViewPackages: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onViewPackages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      badge: 'BEST VALUE',
      title: 'INSTANT GAME TOP UP & PASSES',
      desc: 'Fast and reliable gaming top-ups with instant delivery via Zone ID or User ID.',
      bgGradient: 'from-[#2b080f] via-[#1a0815] to-[#0d0714]',
      artTag: 'MOBILE LEGENDS · FREE FIRE',
    },
    {
      badge: 'HOT SALE',
      title: 'PUBG UC & ROYALE PASS A10',
      desc: 'Direct Nepal Fonepay & Wallet delivery with 100% guarantee in 60 seconds.',
      bgGradient: 'from-[#1a1308] via-[#170a14] to-[#070b14]',
      artTag: 'PUBG MOBILE · UC PACKS',
    },
    {
      badge: 'EXCLUSIVE',
      title: 'FREE FIRE DIAMONDS & MEMBERSHIPS',
      desc: 'Weekly & Monthly passes credited directly to your Player UID with instant auto delivery.',
      bgGradient: 'from-[#300a10] via-[#1e0712] to-[#0c0512]',
      artTag: 'FREE FIRE MAX',
    },
  ];

  const slide = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl mb-5 shadow-xl border border-red-950/40 select-none">
      {/* Background Graphic matching screenshot */}
      <div className={`relative p-5 sm:p-6 bg-gradient-to-br ${slide.bgGradient} text-white min-h-[220px] flex flex-col justify-between overflow-hidden`}>
        {/* Ambient Dark Gaming Artwork glow */}
        <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-30 bg-radial from-red-600/30 via-purple-900/20 to-transparent pointer-events-none"></div>
        
        {/* Subtle Watermark Art */}
        <div className="absolute -right-4 -bottom-4 text-7xl font-black text-white/[0.04] uppercase font-mono select-none pointer-events-none">
          TOPUP
        </div>

        {/* Top Header Row with Logo Badge, Tag & Controls */}
        <div className="flex items-center justify-between z-10 mb-2">
          <div className="flex items-center gap-2.5">
            {/* Hexagon App Logo */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-black p-[2px] shadow-md shadow-red-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-[9px] flex items-center justify-center">
                <span className="text-white text-xs font-black">BG</span>
              </div>
            </div>

            {/* "BEST VALUE" Pill Badge */}
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
              {slide.badge}
            </span>
          </div>

          {/* Pause / Play button */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>

        {/* Banner Content */}
        <div className="z-10 my-2 space-y-1.5 max-w-[85%]">
          <h2 className="text-lg sm:text-xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-md">
            {slide.title}
          </h2>
          <p className="text-xs text-gray-300 font-medium leading-relaxed line-clamp-2">
            {slide.desc}
          </p>
        </div>

        {/* Action Button & Slider Controls Row */}
        <div className="flex items-center justify-between z-10 pt-2 mt-auto">
          {/* VIEW PACKAGES Button matching screenshot */}
          <button
            type="button"
            onClick={onViewPackages}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/40 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span>VIEW PACKAGES</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Indicator & Navigation Controls */}
          <div className="flex items-center gap-3">
            {/* Dots / Elongated Active Indicator */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-5 bg-red-600'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Prev & Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
