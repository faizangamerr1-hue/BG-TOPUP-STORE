import React from 'react';
import { User, Gamepad2, Globe, Check, X } from 'lucide-react';

interface PlayerVerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  playerId: string;
  playerName: string;
  gameName: string;
  region: string;
  avatarUrl?: string;
}

export const PlayerVerifyModal: React.FC<PlayerVerifyModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  playerId,
  playerName,
  gameName = 'Free Fire',
  region = 'BD',
  avatarUrl,
}) => {
  if (!isOpen) return null;

  // Format region short code e.g. "BD", "NP", "IND", "SG"
  const getShortRegion = (reg: string) => {
    if (!reg) return 'BD';
    if (reg.includes('Bangladesh') || reg.includes('BD')) return 'BD';
    if (reg.includes('Nepal') || reg.includes('NP')) return 'NP';
    if (reg.includes('India') || reg.includes('IND')) return 'IND';
    if (reg.includes('Singapore') || reg.includes('SG')) return 'SG';
    return reg.slice(0, 3).toUpperCase();
  };

  const displayRegion = getShortRegion(region);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-[360px] mx-auto select-none">
        
        {/* Golden Chamfered Ribbon Header matching screenshot */}
        <div className="relative z-20 -mb-4 flex justify-center">
          <div className="relative px-7 py-2 bg-[#0d1322] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] [clip-path:polygon(12%_0%,88%_0%,100%_100%,0%_100%)]">
            <span className="text-sm sm:text-base font-black tracking-wide text-[#fef08a] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
              Verify It's You ?
            </span>
            {/* Inner golden glow line */}
            <div className="absolute inset-x-2 bottom-0.5 h-[1px] bg-gradient-to-r from-transparent via-[#fef08a] to-transparent opacity-80"></div>
          </div>
        </div>

        {/* Modal Card Box */}
        <div className="relative bg-gradient-to-b from-[#0b1120] via-[#090d18] to-[#060913] border-2 border-red-700/60 rounded-3xl pt-8 pb-6 px-5 shadow-[0_0_30px_rgba(220,38,38,0.25)] overflow-hidden">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-red-600/15 via-red-900/5 to-transparent pointer-events-none"></div>

          {/* Close corner icon */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Center Avatar with "HOT" badge and verified checkmark */}
          <div className="flex justify-center mb-6 relative">
            <div className="relative">
              {/* Outer Red Ring */}
              <div className="w-22 h-22 rounded-full p-[3px] bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center border-2 border-black">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="Player Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 via-red-600 to-indigo-950 flex flex-col items-center justify-center relative">
                      {/* Character Weapon Silhouette / Art */}
                      <span className="text-2xl font-black text-white drop-shadow-md">
                        FF
                      </span>
                      <span className="text-[8px] font-black tracking-widest text-amber-200 uppercase">
                        PRO
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* "HOT" Ribbon Badge on Top-Left */}
              <div className="absolute -top-1 -left-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/40 shadow-md transform -rotate-12">
                HOT
              </div>

              {/* Verified Green Check Badge on Bottom-Right */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#10b981] border-2 border-[#090d18] flex items-center justify-center text-white shadow-md">
                <Check className="w-3.5 h-3.5 stroke-[3.5]" />
              </div>
            </div>
          </div>

          {/* 2x2 Grid Account Details matching screenshot */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-6">
            {/* Top Left: Player UID */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#131f38] border border-[#2563eb]/50 flex items-center justify-center text-[#60a5fa] shrink-0 shadow-sm">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-gray-400 block leading-tight">
                  Player UID:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono truncate block leading-snug">
                  {playerId || '8886072772'}
                </span>
              </div>
            </div>

            {/* Top Right: Game */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#131f38] border border-[#2563eb]/50 flex items-center justify-center text-[#60a5fa] shrink-0 shadow-sm">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-gray-400 block leading-tight">
                  Game:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate block leading-snug">
                  {gameName || 'Free Fire'}
                </span>
              </div>
            </div>

            {/* Bottom Left: Player Name */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#131f38] border border-[#2563eb]/50 flex items-center justify-center text-[#60a5fa] shrink-0 shadow-sm">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-gray-400 block leading-tight">
                  Player Name:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate block leading-snug">
                  {playerName || 'Shionnyuno'}
                </span>
              </div>
            </div>

            {/* Bottom Right: Region */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#131f38] border border-[#2563eb]/50 flex items-center justify-center text-[#60a5fa] shrink-0 shadow-sm">
                <Globe className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-gray-400 block leading-tight">
                  Region:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider truncate block leading-snug">
                  {displayRegion}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Confirm & Cancel */}
          <div className="space-y-3">
            {/* Hexagonal / Chamfered Red Confirm Button matching screenshot */}
            <button
              type="button"
              onClick={onConfirm}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#9b111e] via-[#c41527] to-[#9b111e] hover:from-[#c41527] hover:to-[#9b111e] active:scale-[0.98] border border-red-400/50 text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_15px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center rounded-xl [clip-path:polygon(6%_0%,94%_0%,100%_50%,94%_100%,6%_100%,0%_50%)] cursor-pointer"
            >
              Confirm
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-200 transition-colors py-1 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
