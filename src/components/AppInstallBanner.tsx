import React, { useState } from 'react';
import { Smartphone, Download, X } from 'lucide-react';

interface AppInstallBannerProps {
  appName?: string;
  onOpenPlayStore?: () => void;
}

export const AppInstallBanner: React.FC<AppInstallBannerProps> = ({
  appName = 'BG TOPUP App',
  onOpenPlayStore,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleInstall = () => {
    if (onOpenPlayStore) {
      onOpenPlayStore();
    }
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto animate-in slide-in-from-bottom-3 fade-in duration-300">
      <div className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 flex flex-col gap-3">
        {/* Top Header Row with Logo and Close */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {/* Hexagon App Logo */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-black p-[2px] shadow-md shadow-red-500/20 shrink-0">
              <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                <span className="text-white text-base font-black">BG</span>
              </div>
            </div>

            <div>
              {/* App Install Pill */}
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-red-600 mb-0.5">
                <Smartphone className="w-3 h-3" />
                <span>APP INSTALL</span>
              </div>
              <h4 className="text-sm font-extrabold text-gray-900 leading-tight">
                Install {appName}
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Get instant fast access directly from your home screen with a full app experience.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleInstall}
          className="w-full py-2.5 px-4 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-xs shadow-md shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App (Google Play / PWA)</span>
        </button>
      </div>
    </div>
  );
};
