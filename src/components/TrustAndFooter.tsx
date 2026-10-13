import React from 'react';
import {
  Zap,
  ShieldCheck,
  Headphones,
  Award,
  Lock,
  Mail,
  Phone,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface TrustAndFooterProps {
  onOpenWhatsApp: () => void;
  onOpenNotice: () => void;
  onOpenPlayStore?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const TrustAndFooter: React.FC<TrustAndFooterProps> = ({
  onOpenWhatsApp,
  onOpenNotice,
  onOpenPlayStore,
  onOpenPrivacyPolicy,
}) => {
  return (
    <div className="space-y-6 pt-4 pb-20">
      {/* PAY SECURELY WITH Section matching Image 6 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 bg-red-600 rounded-full"></div>
          <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
            PAY SECURELY WITH
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs grid grid-cols-2 gap-4">
          {/* eSewa */}
          <div className="h-16 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-center p-3 hover:bg-gray-100/50 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#60bb46] text-white font-black text-xl flex items-center justify-center shadow-xs">
                e-
              </div>
              <span className="font-bold text-xs text-gray-800">eSewa</span>
            </div>
          </div>

          {/* Khalti */}
          <div className="h-16 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-center p-3 hover:bg-gray-100/50 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-base font-black text-[#5c2d91] tracking-tight">
                khalti
              </span>
              <span className="text-[9px] font-bold text-red-600 tracking-wider">
                by IME
              </span>
            </div>
          </div>

          {/* MyPay */}
          <div className="h-16 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-center p-3 hover:bg-gray-100/50 transition-colors">
            <div className="flex items-center gap-1 font-black italic text-[#ff6600] text-lg">
              <span>My</span>
              <span className="text-gray-900">Pay</span>
            </div>
          </div>

          {/* Mobile Banking / Fonepay */}
          <div className="h-16 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-center p-3 hover:bg-gray-100/50 transition-colors">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <span className="text-[10px] font-black">QR</span>
              </div>
              <span className="text-[9px] font-bold text-gray-600 uppercase mt-0.5">
                Mobile Banking
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Value Cards matching Images 4 & 6 */}
      <div className="space-y-3">
        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
            <Zap className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-gray-900">Instant Delivery</h4>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Get your digital items and reloads instantly after payment confirmation.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
            <Lock className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-gray-900">Secure Payment</h4>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              100% secure transactions via reliable Nepal gateways.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
            <Headphones className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-gray-900">24/7 Support</h4>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Our dedicated support team is always ready to help you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
            <Award className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-gray-900">Trusted by Thousands</h4>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Serving gamers across Nepal with instant top-ups.
            </p>
          </div>
        </div>
      </div>

      {/* Official Brand Section */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs text-left">
        <div className="flex items-center gap-3 mb-3">
          {/* Logo badge */}
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-black p-[2px] flex items-center justify-center shadow-md shadow-red-500/20">
            <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
              <span className="text-white text-base font-black">BG</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h4 className="text-lg font-black text-gray-900 tracking-tight">
              BG TOP UP
            </h4>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-wider">
              OFFICIAL
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed font-medium">
          Nepal's #1 Digital Gaming Marketplace. Direct In-Game Top-Up & Gift Cards. Fast, secure, and reliable service always.
        </p>

        {/* Social Icons matching screenshot */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            title="BG TOPUP STORE on Facebook"
          >
            <span className="font-bold text-sm">f</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            title="YouTube"
          >
            <span className="font-black text-xs">▶</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            title="@MYBGGAMINGSTORE on TikTok"
          >
            <span className="font-black text-sm">♪</span>
          </a>

          {/* View Official Notice Button */}
          <button
            type="button"
            onClick={onOpenNotice}
            className="ml-auto text-xs font-bold text-red-600 hover:text-red-700 underline"
          >
            Order Delay Notice
          </button>
        </div>

        {/* Google Play Store App Download Banner */}
        {onOpenPlayStore && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onOpenPlayStore}
              className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 2.5C3.3 2.8 3.1 3.3 3.1 3.9V20.1C3.1 20.7 3.3 21.2 3.6 21.5L3.7 21.6L13.5 11.8V11.6L3.7 1.8L3.6 2.5Z" fill="#00C1A6"/>
                <path d="M16.8 15.1L13.5 11.8V11.6L16.8 8.3L16.9 8.4L20.8 10.6C21.9 11.2 21.9 12.2 20.8 12.8L16.9 15L16.8 15.1Z" fill="#FFD400"/>
                <path d="M16.9 15L13.5 11.6L3.6 21.5C4 21.9 4.6 22 5.4 21.5L16.9 15Z" fill="#FF3333"/>
                <path d="M16.9 8.4L5.4 1.9C4.6 1.4 4 1.5 3.6 1.9L13.5 11.8L16.9 8.4Z" fill="#00A2FF"/>
              </svg>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-gray-400 block leading-none">GET IT ON</span>
                <span className="text-xs font-bold text-white tracking-tight leading-none">Google Play</span>
              </div>
            </button>
            <span className="text-[11px] font-semibold text-gray-500">
              Android APK & Web App
            </span>
          </div>
        )}
      </div>

      {/* Get in Touch Card */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block">
              Get in Touch
            </span>
            <a
              href="mailto:faizangamerr1@gmail.com"
              className="text-sm font-extrabold text-gray-900 hover:underline"
            >
              faizangamerr1@gmail.com
            </a>
            <p className="text-xs text-gray-400 mt-0.5">
              WhatsApp: +977 9704579571 (24/7 Support)
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenWhatsApp}
          className="px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors shrink-0"
        >
          WhatsApp
        </button>
      </div>

      {/* Official Footnote */}
      <div className="text-center text-[11px] text-gray-400 font-medium space-y-1.5">
        <p>© 2026 BG TOPUP STORE · All Rights Reserved.</p>
        <p>Nepal's Premier Instant Game Currency Top-Up Store</p>
        {onOpenPrivacyPolicy && (
          <div className="pt-1">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="text-gray-500 hover:text-red-600 underline font-semibold transition-colors"
            >
              Privacy Policy (Google Play Standard)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
