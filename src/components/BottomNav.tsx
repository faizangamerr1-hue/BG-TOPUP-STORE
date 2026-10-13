import React from 'react';
import { Home, Package, Wallet, Bell, User } from 'lucide-react';

export type NavTab = 'home' | 'orders' | 'wallet' | 'notifications' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  orderCount?: number;
  unreadNotifications?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  orderCount = 0,
  unreadNotifications = true,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-lg border-t border-neutral-800 shadow-2xl">
      <div className="max-w-xl mx-auto px-4 h-18 flex items-center justify-between relative">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => onSelectTab('home')}
          className="flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer"
        >
          <Home
            className={`w-5 h-5 transition-transform ${
              activeTab === 'home'
                ? 'text-red-600 scale-110'
                : 'text-neutral-400 hover:text-white'
            }`}
          />
          <span
            className={`text-[10px] font-bold mt-1 tracking-tight ${
              activeTab === 'home' ? 'text-red-600' : 'text-neutral-400'
            }`}
          >
            Home
          </span>
        </button>

        {/* Tab 2: Orders */}
        <button
          type="button"
          onClick={() => onSelectTab('orders')}
          className="flex flex-col items-center justify-center flex-1 py-1 transition-colors relative cursor-pointer"
        >
          <div className="relative">
            <Package
              className={`w-5 h-5 transition-transform ${
                activeTab === 'orders'
                  ? 'text-red-600 scale-110'
                  : 'text-neutral-400 hover:text-white'
              }`}
            />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-600 text-white rounded-full text-[9px] font-black flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </div>
          <span
            className={`text-[10px] font-bold mt-1 tracking-tight ${
              activeTab === 'orders' ? 'text-red-600' : 'text-neutral-400'
            }`}
          >
            Orders
          </span>
        </button>

        {/* Tab 3: Raised Central Wallet Button */}
        <div className="flex flex-col items-center justify-center flex-1 relative -top-3.5">
          <button
            type="button"
            onClick={() => onSelectTab('wallet')}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all transform active:scale-95 cursor-pointer ${
              activeTab === 'wallet'
                ? 'bg-gradient-to-tr from-red-600 to-rose-500 ring-4 ring-red-500/30 shadow-red-600/60'
                : 'bg-gradient-to-tr from-red-600 to-red-700 shadow-red-600/40 hover:scale-105'
            }`}
          >
            <Wallet className="w-6 h-6 stroke-[2.2]" />
            {/* Glowing ring animation */}
            <span className="absolute -inset-1 rounded-full bg-red-600/30 blur-xs -z-10"></span>
          </button>
          <span
            className={`text-[10px] font-extrabold mt-1 tracking-tight ${
              activeTab === 'wallet' ? 'text-red-500' : 'text-neutral-300'
            }`}
          >
            Wallet
          </span>
        </div>

        {/* Tab 4: Notifications */}
        <button
          type="button"
          onClick={() => onSelectTab('notifications')}
          className="flex flex-col items-center justify-center flex-1 py-1 transition-colors relative cursor-pointer"
        >
          <div className="relative">
            <Bell
              className={`w-5 h-5 transition-transform ${
                activeTab === 'notifications'
                  ? 'text-red-600 scale-110'
                  : 'text-neutral-400 hover:text-white'
              }`}
            />
            {unreadNotifications && (
              <span className="absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-[#121212]"></span>
            )}
          </div>
          <span
            className={`text-[10px] font-bold mt-1 tracking-tight ${
              activeTab === 'notifications' ? 'text-red-600' : 'text-neutral-400'
            }`}
          >
            Notifications
          </span>
        </button>

        {/* Tab 5: Profile */}
        <button
          type="button"
          onClick={() => onSelectTab('profile')}
          className="flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer"
        >
          <User
            className={`w-5 h-5 transition-transform ${
              activeTab === 'profile'
                ? 'text-red-600 scale-110'
                : 'text-neutral-400 hover:text-white'
            }`}
          />
          <span
            className={`text-[10px] font-bold mt-1 tracking-tight ${
              activeTab === 'profile' ? 'text-red-600' : 'text-neutral-400'
            }`}
          >
            Profile
          </span>
        </button>
      </div>
    </div>
  );
};
