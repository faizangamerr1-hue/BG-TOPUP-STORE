import React from 'react';
import { Bell, AlertTriangle, CheckCircle, Info, Sparkles, ChevronRight } from 'lucide-react';
import { ORDER_DELAY_NOTICE } from '../data/mockData';

interface NotificationsTabProps {
  onOpenDelayPoster: () => void;
}

export const NotificationsTab: React.FC<NotificationsTabProps> = ({
  onOpenDelayPoster,
}) => {
  return (
    <div className="space-y-4 pb-24">
      {/* Featured Notification: Order Delay Notice matching Image 1 */}
      <div 
        onClick={onOpenDelayPoster}
        className="bg-gradient-to-br from-rose-50 via-white to-red-50/50 rounded-3xl p-5 border-2 border-red-500/30 shadow-md shadow-red-500/10 cursor-pointer hover:border-red-500 transition-all relative overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/30">
              <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded-full inline-block mb-1">
                Official Announcement
              </span>
              <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                "Order Delay Notice" & System Update
              </h3>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {ORDER_DELAY_NOTICE.body}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 self-center" />
        </div>

        <div className="mt-3 pt-3 border-t border-red-100 flex items-center justify-between text-[11px] font-bold text-red-600">
          <span>Click to read full official notice poster</span>
          <span>Open →</span>
        </div>
      </div>

      {/* Other Live Alerts */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          System Updates & Activity
        </h3>

        <div className="space-y-3 text-xs">
          <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-gray-900 block">
                Free Fire In-Game UID Top-Up Online
              </span>
              <p className="text-gray-600 text-[11px] mt-0.5">
                Automated diamond injection server is operating smoothly. Average delivery time: 45 seconds.
              </p>
              <span className="text-[10px] text-emerald-700 font-semibold mt-1 inline-block">
                Updated 15 mins ago
              </span>
            </div>
          </div>

          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-gray-900 block">
                Fonepay QR Gateway Available
              </span>
              <p className="text-gray-600 text-[11px] mt-0.5">
                All 50+ Nepal banks and wallets can scan and pay without fees.
              </p>
              <span className="text-[10px] text-blue-700 font-semibold mt-1 inline-block">
                Permanent Gateway
              </span>
            </div>
          </div>

          <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-2xl flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-gray-900 block">
                New Package: Level Up Pass & Weekly Lite
              </span>
              <p className="text-gray-600 text-[11px] mt-0.5">
                Enjoy special rates for Free Fire Weekly Lite starting at only NPR 60!
              </p>
              <span className="text-[10px] text-amber-700 font-semibold mt-1 inline-block">
                Special Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
