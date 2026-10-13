import React, { useState } from 'react';
import { Gamepad2, Tv, Ticket, Check, Flame, Clock } from 'lucide-react';
import { Game } from '../types';

interface SelectItemsCatalogProps {
  games: Game[];
  activeGame: Game;
  onSelectGame: (game: Game) => void;
}

export const SelectItemsCatalog: React.FC<SelectItemsCatalogProps> = ({
  games,
  activeGame,
  onSelectGame,
}) => {
  const [activeCategory, setActiveCategory] = useState<'games' | 'subscription' | 'voucher'>('games');

  // SVG Game Icons matching the exact screenshot artwork
  const renderGameIcon = (gameId: string) => {
    switch (gameId) {
      case 'freefire':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Fiery Character Art Simulation */}
            <div className="absolute inset-0 bg-radial from-amber-200/40 to-transparent"></div>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <path d="M50 15 L80 40 L70 85 L30 85 L20 40 Z" fill="#ffe066" />
              <path d="M50 25 L70 45 L60 80 L40 80 L30 45 Z" fill="#e63946" />
              <polygon points="50,30 65,55 50,75 35,55" fill="#f1faee" />
              <circle cx="50" cy="52" r="8" fill="#ffd166" />
            </svg>
            {/* Garena small mark in bottom right */}
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-red-700 border border-white flex items-center justify-center text-[6px] font-black text-white">
              G
            </div>
          </div>
        );

      case 'mobilelegend':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-800 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* MLBB Hero & 5v5 Badge */}
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-300 to-rose-400 flex items-center justify-center text-white font-black text-xs shadow-md border border-white/50">
                ⚔️
              </div>
              {/* 5v5 Badge in bottom right */}
              <div className="absolute bottom-1 right-1 px-1.5 py-0.2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-[8px] font-black rounded-sm border border-black/40 shadow-xs">
                5v5
              </div>
            </div>
          </div>
        );

      case 'pubg':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-600 via-blue-700 to-slate-900 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* PUBG Helmet Icon */}
            <div className="w-full h-full rounded-xl flex flex-col items-center justify-center relative">
              <svg viewBox="0 0 60 60" className="w-10 h-10 drop-shadow-md">
                <path d="M15 32 C15 18 45 18 45 32 L42 42 L18 42 Z" fill="#2d3748" />
                <rect x="20" y="28" width="20" height="6" rx="2" fill="#1a202c" stroke="#e2e8f0" strokeWidth="1.5" />
                <rect x="18" y="38" width="24" height="4" fill="#a0aec0" />
              </svg>
              {/* "PUBG MOBILE" label at bottom */}
              <div className="absolute bottom-1 px-1 bg-black/75 rounded text-[7px] font-black text-white tracking-tighter">
                PUBG
              </div>
            </div>
            {/* "HOT SALE" Ribbon Badge on top right */}
            <div className="absolute -top-1 -right-2 bg-gradient-to-r from-red-600 to-amber-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded shadow-sm transform rotate-6 uppercase">
              HOT SALE
            </div>
          </div>
        );

      case 'roblox':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Iconic Roblox Tilted Cube with Square Hole */}
            <div className="w-10 h-10 bg-white rounded-lg transform -rotate-12 flex items-center justify-center shadow-lg border-2 border-white/60">
              <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            </div>
          </div>
        );

      case 'efootball':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#111] to-[#050505] p-2 flex flex-col items-center justify-center relative overflow-hidden border border-gray-800 shadow-inner">
            {/* eFootball 2026 emblem */}
            <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-0.5">
              <span className="text-cyan-400 text-[10px] font-black italic">e</span>
            </div>
            <span className="text-[7px] font-extrabold text-white tracking-wider leading-none">FOOTBALL</span>
            <span className="text-[7px] font-bold text-cyan-400 tracking-wider">2026</span>
            {/* "Time Offer" Badge top left */}
            <div className="absolute top-1 left-1 bg-red-600 text-white text-[6px] font-black px-1 rounded-sm flex items-center gap-0.5">
              <Clock className="w-2 h-2" />
              <span>TIME</span>
            </div>
          </div>
        );

      case 'clashofclans':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Barbarian Character SVG */}
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-amber-700/60 to-transparent flex flex-col items-center justify-center">
              <span className="text-2xl filter drop-shadow">🧔🏼‍♂️</span>
            </div>
          </div>
        );

      case 'bloodstrike':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-red-950 to-blue-950 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Blood Strike Soldier Art */}
            <div className="w-full h-full rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl filter drop-shadow">🥷</span>
              <span className="text-[6px] font-black text-red-500 tracking-widest uppercase mt-0.5">STRIKE</span>
            </div>
          </div>
        );

      case 'tiktok':
        return (
          <div className="w-full h-full rounded-2xl bg-black p-2 flex items-center justify-center relative overflow-hidden border border-gray-800 shadow-inner">
            {/* TikTok Musical Note */}
            <div className="relative">
              <span className="text-2xl font-black text-[#25f4ee] absolute -top-[1px] -left-[1px]">♪</span>
              <span className="text-2xl font-black text-[#fe2c55] absolute top-[1px] left-[1px]">♪</span>
              <span className="text-2xl font-black text-white relative z-10">♪</span>
            </div>
          </div>
        );

      case 'wherewindsmeet':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-200 via-teal-700 to-indigo-900 p-1 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Mountain / Wind scenery */}
            <div className="w-full h-full rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-xl">🏔️</span>
              <span className="text-[6px] font-black text-white leading-none tracking-tight">WHERE WINDS</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-gray-500" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 mb-5">
      {/* "Select Items" Header with vertical red accent pill */}
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
        <h3 className="text-base font-extrabold text-gray-900 tracking-tight">
          Select Items
        </h3>
      </div>

      {/* Category Tabs matching screenshot */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {/* Tab 1: Games */}
        <button
          type="button"
          onClick={() => setActiveCategory('games')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeCategory === 'games'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>Games</span>
        </button>

        {/* Tab 2: Subscription */}
        <button
          type="button"
          onClick={() => setActiveCategory('subscription')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeCategory === 'subscription'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Tv className="w-4 h-4 text-sky-600" />
          <span>Subscription</span>
        </button>

        {/* Tab 3: Voucher */}
        <button
          type="button"
          onClick={() => setActiveCategory('voucher')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeCategory === 'voucher'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Ticket className="w-4 h-4 text-rose-500" />
          <span>Voucher</span>
        </button>
      </div>

      {/* 3-Column Games Grid matching screenshot */}
      {activeCategory === 'games' && (
        <div className="grid grid-cols-3 gap-3">
          {games.map((g) => {
            const isSelected = activeGame.id === g.id;

            return (
              <div
                key={g.id}
                onClick={() => {
                  onSelectGame(g);
                  // Scroll smoothly to customer details
                  const el = document.getElementById('step-customer-details');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-1.5 cursor-pointer group select-none"
              >
                {/* Square Icon Container */}
                <div
                  className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl p-1 bg-white transition-all transform active:scale-95 shadow-sm ${
                    isSelected
                      ? 'border-2 border-red-600 shadow-md ring-2 ring-red-600/20'
                      : 'border border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  {/* Selected Red Corner Checkmark matching Free Fire in screenshot */}
                  {isSelected && (
                    <div className="absolute top-1 left-1 z-20 w-4 h-4 rounded-md bg-red-600 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}

                  {/* Game Icon SVG / Art */}
                  {renderGameIcon(g.id)}
                </div>

                {/* Game Title matching screenshot font & colors */}
                <span
                  className={`text-[11px] font-black text-center tracking-tight leading-tight line-clamp-1 max-w-[85px] transition-colors ${
                    isSelected ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                  }`}
                >
                  {g.name}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Subscription Grid View */}
      {activeCategory === 'subscription' && (
        <div className="grid grid-cols-2 gap-3 animate-in fade-in">
          {[
            { id: 'sub-netflix', name: 'Netflix Premium', desc: '1 Month Ultra HD', price: 350, icon: '🎬' },
            { id: 'sub-spotify', name: 'Spotify Premium', desc: '3 Months Individual', price: 450, icon: '🎧' },
            { id: 'sub-discord', name: 'Discord Nitro', desc: '1 Month Full Nitro', price: 1250, icon: '💬' },
            { id: 'sub-prime', name: 'Prime Video', desc: '1 Month Account', price: 299, icon: '🍿' },
          ].map((sub) => (
            <div
              key={sub.id}
              onClick={() => {
                const el = document.getElementById('step-customer-details');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl p-3.5 border border-gray-200 hover:border-red-500 shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{sub.icon}</span>
                <div>
                  <h4 className="text-xs font-black text-gray-900 leading-tight">{sub.name}</h4>
                  <p className="text-[10px] text-gray-400">{sub.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-black text-red-600">NPR {sub.price}</span>
                <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">Order</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Voucher Grid View */}
      {activeCategory === 'voucher' && (
        <div className="grid grid-cols-2 gap-3 animate-in fade-in">
          {[
            { id: 'v-gplay', name: 'Google Play Gift Card', desc: 'US $5 Redeem Code', price: 700, icon: '🎮' },
            { id: 'v-steam', name: 'Steam Wallet Card', desc: 'Global $10 USD', price: 1450, icon: '🕹️' },
            { id: 'v-apple', name: 'Apple App Store', desc: '$10 US Gift Card', price: 1450, icon: '🍏' },
            { id: 'v-razer', name: 'Razer Gold PIN', desc: 'Global 10 USD', price: 1420, icon: '🪙' },
          ].map((v) => (
            <div
              key={v.id}
              onClick={() => {
                const el = document.getElementById('step-customer-details');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl p-3.5 border border-gray-200 hover:border-red-500 shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <h4 className="text-xs font-black text-gray-900 leading-tight">{v.name}</h4>
                  <p className="text-[10px] text-gray-400">{v.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-black text-red-600">NPR {v.price}</span>
                <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">Order</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
