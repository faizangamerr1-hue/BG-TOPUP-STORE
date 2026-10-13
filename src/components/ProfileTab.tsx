import React from 'react';
import { User, Mail, Phone, ShieldCheck, HelpCircle, FileText, LogOut, LogIn, ExternalLink } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileTabProps {
  user: UserProfile;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenNotice: () => void;
  onOpenWhatsApp: () => void;
  onOpenPlayStore?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  user,
  onOpenAuth,
  onLogout,
  onOpenNotice,
  onOpenWhatsApp,
  onOpenPlayStore,
  onOpenPrivacyPolicy,
}) => {
  return (
    <div className="space-y-4 pb-24">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center text-xl font-black shadow-md shadow-red-600/30">
            {user.isLoggedIn ? user.name.charAt(0) : <User className="w-8 h-8" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-gray-900">
                {user.isLoggedIn ? user.name : 'Guest User'}
              </h2>
              {user.isLoggedIn && (
                <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                  Member
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              {user.isLoggedIn ? user.email : 'Login to save orders & use Wallet'}
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          {user.isLoggedIn ? (
            <button
              onClick={onLogout}
              className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4 text-red-600" />
              <span>Log Out</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In / Create Account</span>
            </button>
          )}
        </div>
      </div>

      {/* Google Play Store & Android App Center Card */}
      {onOpenPlayStore && (
        <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 rounded-3xl p-5 border border-emerald-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 2.5C3.3 2.8 3.1 3.3 3.1 3.9V20.1C3.1 20.7 3.3 21.2 3.6 21.5L3.7 21.6L13.5 11.8V11.6L3.7 1.8L3.6 2.5Z" fill="#00C1A6"/>
                  <path d="M16.8 15.1L13.5 11.8V11.6L16.8 8.3L16.9 8.4L20.8 10.6C21.9 11.2 21.9 12.2 20.8 12.8L16.9 15L16.8 15.1Z" fill="#FFD400"/>
                  <path d="M16.9 15L13.5 11.6L3.6 21.5C4 21.9 4.6 22 5.4 21.5L16.9 15Z" fill="#FF3333"/>
                  <path d="M16.9 8.4L5.4 1.9C4.6 1.4 4 1.5 3.6 1.9L13.5 11.8L16.9 8.4Z" fill="#00A2FF"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-900 tracking-wide">
                  Google Play & Android App
                </h3>
                <p className="text-[11px] text-gray-500">
                  Install on phone or publish to Play Store
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
              Ready
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenPlayStore}
            className="w-full py-2.5 px-4 bg-[#01875f] hover:bg-[#01704e] active:scale-98 text-white text-xs font-extrabold rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Open Play Store & Install Hub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Support & Contacts */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Official Support & Helpline
        </h3>

        <div className="space-y-2 text-xs">
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-gray-900 block">WhatsApp & Call Support</span>
                <span className="text-gray-500 text-[11px]">+977 9704579571 (24/7)</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </button>

          <a
            href="mailto:faizangamerr1@gmail.com"
            className="w-full p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-gray-900 block">Email Desk</span>
                <span className="text-gray-500 text-[11px]">faizangamerr1@gmail.com</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Policies & Notices */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-2 text-xs">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
          Information & Guarantees
        </h3>

        <button
          type="button"
          onClick={onOpenNotice}
          className="w-full py-2 flex items-center justify-between text-gray-700 hover:text-red-600 text-left border-b border-gray-100"
        >
          <span className="font-semibold">Official Order Delay Notice</span>
          <span className="text-red-600 font-bold">Read →</span>
        </button>

        {onOpenPrivacyPolicy && (
          <button
            type="button"
            onClick={onOpenPrivacyPolicy}
            className="w-full py-2 flex items-center justify-between text-gray-700 hover:text-red-600 text-left border-b border-gray-100"
          >
            <span className="font-semibold">Privacy Policy (Google Play Standard)</span>
            <span className="text-red-600 font-bold">View →</span>
          </button>
        )}

        <div className="py-2 flex items-center justify-between text-gray-700 border-b border-gray-100">
          <span className="font-semibold">100% Refund Policy</span>
          <span className="text-gray-400">Guaranteed if UID failed</span>
        </div>

        <div className="py-2 flex items-center justify-between text-gray-700">
          <span className="font-semibold">Direct Garena Auto Top-Up</span>
          <span className="text-emerald-600 font-bold">Active API</span>
        </div>
      </div>
    </div>
  );
};
