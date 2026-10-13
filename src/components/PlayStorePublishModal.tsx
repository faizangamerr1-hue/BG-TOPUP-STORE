import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ArrowRight, UploadCloud, Smartphone, ShieldCheck, FileText } from 'lucide-react';

interface PlayStorePublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const PlayStorePublishModal: React.FC<PlayStorePublishModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacyPolicy,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentAppUrl = window.location.origin;
  const pwaBuilderUrl = `https://www.pwabuilder.com/report?url=${encodeURIComponent(currentAppUrl)}`;

  const copyText = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const appTitle = "BG TOPUP STORE - Gaming Top-Up";
  const shortDescription = "Nepal's #1 Digital Gaming Marketplace. Instant Free Fire Diamonds & PUBG UC.";
  const fullDescription = `BG TOPUP STORE is Nepal's premier digital gaming currency marketplace.
Get instant automated top-ups for Free Fire Diamonds, PUBG Mobile UC, Mobile Legends, and Roblox Robux directly via Player UID.

Key Features:
- Instant In-Game Auto Top-Up (under 60 seconds)
- 100% Secure Nepal Gateways: Fonepay QR, eSewa, Khalti, and Wallet Balance
- 24/7 Helpline on WhatsApp (+977 9704579571)
- Guaranteed refunds if UID is invalid

Support Email: faizangamerr1@gmail.com
Official Store: BGTOPUPS.COM`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <UploadCloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-black tracking-wide">Publish to Google Play Store</h3>
              <p className="text-[11px] text-white/80">Generate Android APK / AAB & Play Console setup</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-xs text-gray-700">
          
          {/* Quick Action 1: 1-Click APK / AAB Generator */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-2 border-emerald-500/30 rounded-2xl p-4 space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">
                    Step 1: Generate Signed Google Play Bundle (.aab / .apk)
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    PWABuilder will automatically convert your PWA into an Android Play Store package.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.open(pwaBuilderUrl, '_blank')}
              className="w-full py-3 bg-[#01875f] hover:bg-[#01704e] active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Generate .AAB & .APK on PWABuilder (1-Click)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-gray-400 text-center">
              Your Web App Manifest and assetlinks.json are pre-configured and ready!
            </p>
          </div>

          {/* Quick Action 2: Ready-to-Copy Google Play Console Metadata */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide flex items-center gap-1.5">
              <span>Step 2: Copy Details for Google Play Console</span>
            </h4>

            {/* Field: App Title */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10px] text-gray-500 uppercase">App Name</span>
                <button
                  type="button"
                  onClick={() => copyText(appTitle, 'title')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  {copiedField === 'title' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'title' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="font-mono text-gray-900 font-semibold">{appTitle}</p>
            </div>

            {/* Field: Short Description */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10px] text-gray-500 uppercase">Short Description (80 chars)</span>
                <button
                  type="button"
                  onClick={() => copyText(shortDescription, 'short')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  {copiedField === 'short' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'short' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-gray-900 font-medium">{shortDescription}</p>
            </div>

            {/* Field: Full Description */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10px] text-gray-500 uppercase">Full Description</span>
                <button
                  type="button"
                  onClick={() => copyText(fullDescription, 'full')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  {copiedField === 'full' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'full' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="text-[11px] text-gray-700 whitespace-pre-wrap font-sans bg-white p-2 rounded-lg border border-gray-200 max-h-24 overflow-y-auto">
                {fullDescription}
              </pre>
            </div>

            {/* Field: Package Name */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10px] text-gray-500 uppercase">Package Name</span>
                <button
                  type="button"
                  onClick={() => copyText("com.bgtopups.store", 'pkg')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  {copiedField === 'pkg' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'pkg' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="font-mono text-gray-900 font-bold">com.bgtopups.store</p>
            </div>

            {/* Field: Privacy Policy Button */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 block">Privacy Policy</span>
                <span className="text-[10px] text-gray-500">Required by Google Play review</span>
              </div>
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 font-bold rounded-lg text-xs hover:bg-red-100"
              >
                View & Copy Policy
              </button>
            </div>
          </div>

          {/* Step 3: Google Play Console Link */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => window.open('https://play.google.com/console', '_blank')}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open Google Play Console (play.google.com/console)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
