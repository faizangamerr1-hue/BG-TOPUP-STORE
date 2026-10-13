import React from 'react';
import { User, Bell, ChevronDown } from 'lucide-react';
import { Game, UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  games: Game[];
  activeGame: Game;
  onSelectGame: (game: Game) => void;
  onOpenAuth: () => void;
  onOpenNotice: () => void;
  onOpenPlayStore?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  games,
  activeGame,
  onSelectGame,
  onOpenAuth,
  onOpenNotice,
  onOpenPlayStore,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Announcement Bar matching Image 1 */}
      <div 
        onClick={onOpenNotice}
        className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-xs py-1.5 px-3 flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity"
      >
        <div className="flex items-center gap-1.5 truncate">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-semibold tracking-wide uppercase text-[11px]">Notice:</span>
          <span className="truncate">"Order Delay Notice & Updates" - Please Read Carefully</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium shrink-0 pl-2 underline decoration-white/60">
          <span>View Notice</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          {/* Exact BG Hexagon Badge Icon */}
          <div className="relative group cursor-pointer flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-red-950 p-[2px] shadow-md shadow-red-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Circuit lines subtle */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:6px_6px]"></div>
                
                {/* BG Logo Mark */}
                <div className="relative flex items-center justify-center font-black leading-none">
                  <span className="text-white text-lg font-black tracking-tighter drop-shadow-[0_2px_4px_rgba(239,68,68,0.8)]">BG</span>
                </div>
                <span className="text-[6px] tracking-wider text-red-400 font-bold uppercase mt-[-1px]">STORE</span>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-red-600/20 rounded-2xl blur-xs -z-10"></div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-extrabold text-gray-900 tracking-tight leading-tight">
                BG TOPUP STORE
              </h1>
            </div>
            <p className="text-[11px] font-medium text-gray-500 leading-none">
              Gaming Top-Up & Digital Services
            </p>
          </div>
        </div>

        {/* Right Actions: Google Play Store Button & Sign In */}
        <div className="flex items-center gap-2">
          {onOpenPlayStore && (
            <button
              type="button"
              onClick={onOpenPlayStore}
              title="Google Play Store & Android App"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#01875f] text-xs font-bold transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 2.5C3.3 2.8 3.1 3.3 3.1 3.9V20.1C3.1 20.7 3.3 21.2 3.6 21.5L3.7 21.6L13.5 11.8V11.6L3.7 1.8L3.6 2.5Z" fill="#00C1A6"/>
                <path d="M16.8 15.1L13.5 11.8V11.6L16.8 8.3L16.9 8.4L20.8 10.6C21.9 11.2 21.9 12.2 20.8 12.8L16.9 15L16.8 15.1Z" fill="#FFD400"/>
                <path d="M16.9 15L13.5 11.6L3.6 21.5C4 21.9 4.6 22 5.4 21.5L16.9 15Z" fill="#FF3333"/>
                <path d="M16.9 8.4L5.4 1.9C4.6 1.4 4 1.5 3.6 1.9L13.5 11.8L16.9 8.4Z" fill="#00A2FF"/>
              </svg>
              <span className="hidden xs:inline">Play App</span>
            </button>
          )}

          {user.isLoggedIn ? (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-semibold text-gray-800 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                {user.name.charAt(0)}
              </div>
              <span className="truncate max-w-[70px]">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold text-xs tracking-wide shadow-md shadow-red-600/25 transition-all"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
