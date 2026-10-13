import React from 'react';
import { X, Mail, Globe, Phone, FileText } from 'lucide-react';
import { ORDER_DELAY_NOTICE } from '../data/mockData';

interface OrderDelayNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDelayNoticeModal: React.FC<OrderDelayNoticeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Exact Poster Header matching Image 1 */}
          <div className="p-6 bg-gradient-to-b from-rose-50/50 via-white to-white relative overflow-hidden">
            {/* Top row: Logo + Notification & Updates Title + Document Icon */}
            <div className="flex items-center justify-between gap-3">
              {/* BG Gaming Logo */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-black p-1 shadow-lg flex flex-col items-center justify-center border-2 border-red-600/40">
                  <span className="text-white font-black text-xl tracking-tighter leading-none">BG</span>
                  <span className="text-[7px] text-red-400 font-extrabold uppercase mt-0.5">BG Gaming</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#d61c38] tracking-tight">
                    "Notification & Updates"
                  </h3>
                  <p className="text-xs font-semibold text-gray-700">
                    Please Read Carefully...
                  </p>
                </div>
              </div>

              {/* Document Icon on Top Right */}
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 items-center justify-center text-gray-500 shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            {/* Circuit-font "Order Delay" Banner */}
            <div className="my-8 text-center relative py-2">
              <div className="inline-block relative">
                <h2 className="text-3xl sm:text-4xl font-black tracking-widest text-[#930f25] font-mono uppercase drop-shadow-sm px-6 py-2 border-y-2 border-[#930f25]/30">
                  "Order Delay"
                </h2>
                {/* Circuit tech corner ticks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#930f25]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#930f25]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#930f25]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#930f25]"></div>
              </div>
            </div>

            {/* Notice Body */}
            <div className="relative z-10 space-y-3 pt-2 pb-6 px-1">
              <h4 className="text-sm font-black text-gray-900 tracking-wider uppercase font-mono">
                {ORDER_DELAY_NOTICE.noticeHeading}
              </h4>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">
                We understand how you feel when you wait for your order, and we're truly sorry for keeping you waiting. Your trust means everything to us, and we never want to disappoint you. ❤️🙏
              </p>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">
                Please be patient with us a little longer. We're working hard to complete every pending order as soon as possible. Your order matters to us, and we won't forget you. 💙
              </p>
            </div>

            {/* Envelope with "1" notification icon in bottom right */}
            <div className="flex justify-end pt-1">
              <div className="relative inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-300 text-amber-950 shadow-md">
                <Mail className="w-8 h-8 text-amber-900" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-xs">
                  1
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Official Contact Strip matching Image 1 */}
          <div className="bg-[#5c0e18] text-white py-3 px-4 text-[11px] font-bold">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center items-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="flex items-center justify-center gap-1.5 py-1">
                <span className="w-4 h-4 rounded-full bg-white text-[#5c0e18] flex items-center justify-center text-[10px] font-black">f</span>
                <span className="truncate">BG TOPUP STORE</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-1">
                <span className="text-sm">♪</span>
                <span className="truncate">MYBGGAMINGSTORE</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-1">
                <Phone className="w-3 h-3" />
                <span>9704579571</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-1">
                <Globe className="w-3 h-3" />
                <span>BGTOPUPS.COM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Dismiss Button */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            Status: System active & processing
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
