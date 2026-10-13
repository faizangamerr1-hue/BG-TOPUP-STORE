import React, { useState, useEffect } from 'react';
import {
  X,
  Star,
  ShieldCheck,
  Download,
  ExternalLink,
  HelpCircle,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  UploadCloud,
  Copy,
  Check,
  FileText,
  Link,
  Sparkles,
  Info
} from 'lucide-react';

interface PlayStoreInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const PlayStoreInstallModal: React.FC<PlayStoreInstallModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacyPolicy,
}) => {
  const [activeTab, setActiveTab] = useState<'install' | 'publish' | 'link'>('install');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installStatus, setInstallStatus] = useState<string>('');
  const [showGuide, setShowGuide] = useState(false);
  const [playStoreUrl, setPlayStoreUrl] = useState<string>(() => {
    return localStorage.getItem('bg_play_store_url') || '';
  });
  const [savedUrlSuccess, setSavedUrlSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  if (!isOpen) return null;

  const currentAppUrl = window.location.origin;
  const pwaBuilderUrl = `https://www.pwabuilder.com/report?url=${encodeURIComponent(currentAppUrl)}`;

  const copyText = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setInstallStatus('Installed successfully to your phone home screen! ✓');
        } else {
          setShowGuide(true);
        }
        setDeferredPrompt(null);
      } catch {
        setShowGuide(true);
      }
    } else {
      setShowGuide(true);
      setInstallStatus('Follow the 2 simple steps below to install directly onto your home screen:');
    }
  };

  const handleSavePlayStoreUrl = () => {
    localStorage.setItem('bg_play_store_url', playStoreUrl);
    setSavedUrlSuccess(true);
    setTimeout(() => setSavedUrlSuccess(false), 2500);
  };

  const appTitle = "BG TOPUP STORE - Gaming Top-Up";
  const shortDescription = "Nepal's #1 Digital Gaming Marketplace. Instant Free Fire Diamonds & PUBG UC.";
  const fullDescription = `BG TOPUP STORE is Nepal's premier digital gaming marketplace.
Get instant automated top-ups for Free Fire Diamonds, PUBG Mobile UC, Mobile Legends, and Roblox Robux directly via Player UID.

⭐ Key Features:
- Instant In-Game Auto Top-Up (under 60 seconds)
- 100% Secure Nepal Gateways: Fonepay QR, eSewa, Khalti, and Wallet Balance
- Real-time Player UID name verification
- 24/7 Helpline on WhatsApp (+977 9704579571)
- 100% Guaranteed refund if UID is invalid

Support Email: faizangamerr1@gmail.com
WhatsApp Helpline: +977 9704579571
Official Store: BGTOPUPS.COM`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-[#f8f9fa] border-b border-gray-200/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Google Play Triangle Logo SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M3.6 2.5C3.3 2.8 3.1 3.3 3.1 3.9V20.1C3.1 20.7 3.3 21.2 3.6 21.5L3.7 21.6L13.5 11.8V11.6L3.7 1.8L3.6 2.5Z" fill="#00C1A6"/>
              <path d="M16.8 15.1L13.5 11.8V11.6L16.8 8.3L16.9 8.4L20.8 10.6C21.9 11.2 21.9 12.2 20.8 12.8L16.9 15L16.8 15.1Z" fill="#FFD400"/>
              <path d="M16.9 15L13.5 11.6L3.6 21.5C4 21.9 4.6 22 5.4 21.5L16.9 15Z" fill="#FF3333"/>
              <path d="M16.9 8.4L5.4 1.9C4.6 1.4 4 1.5 3.6 1.9L13.5 11.8L16.9 8.4Z" fill="#00A2FF"/>
            </svg>
            <span className="text-xs font-bold text-gray-800 tracking-tight">
              Google Play & Android App Center
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('install')}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
              activeTab === 'install'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Install on Phone</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('publish')}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
              activeTab === 'publish'
                ? 'border-red-600 text-red-600 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            <span>Publish to Play Store</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('link')}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
              activeTab === 'link'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Link className="w-4 h-4" />
            <span>Play Store Link</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 space-y-4">
          
          {/* TAB 1: Direct Phone Install */}
          {activeTab === 'install' && (
            <div className="space-y-4 animate-in fade-in">
              {/* App Header Section */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-black p-1 shadow-md shadow-red-600/30 shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-black">BG</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                    BG TOPUP STORE
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    Official Gaming Marketplace App
                  </p>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    Direct Auto In-Game Delivery · Nepal Gateways
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center justify-around py-2.5 border-y border-gray-100 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-extrabold text-sm text-gray-900">4.9</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">1,450+ reviews</span>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <span className="font-extrabold text-sm text-gray-900">50K+</span>
                  <span className="text-[10px] text-gray-400 font-medium block">Gamers</span>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <span className="font-extrabold text-sm text-gray-900">Instant</span>
                  <span className="text-[10px] text-gray-400 font-medium block">Auto Top-Up</span>
                </div>
              </div>

              {/* Explanation Card */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 text-xs text-emerald-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-extrabold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your App Works on Android Right Now!</span>
                </div>
                <p className="text-[11px] leading-relaxed text-emerald-800">
                  You don't have to wait for Google Play Store review! This app is built with <strong>Google WebAPK</strong> technology. It installs directly on Android phones with a custom BG icon, full-screen mode, no browser URL bar, and ultra-fast speed.
                </p>
              </div>

              {/* Install Button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#01875f] hover:bg-[#01704e] active:scale-98 text-white font-extrabold text-sm tracking-wide shadow-md shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install BG TOPUP App Now (Free)</span>
                </button>

                {installStatus && (
                  <p className="text-xs font-bold text-center text-emerald-800 bg-emerald-50 py-2 px-3 rounded-xl">
                    {installStatus}
                  </p>
                )}

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#01875f]" />
                  <span>100% Safe · Virus Free · Instant In-Game Delivery</span>
                </div>
              </div>

              {/* Step-by-Step Installation Guide */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3.5 space-y-3">
                <button
                  type="button"
                  onClick={() => setShowGuide(!showGuide)}
                  className="w-full flex items-center justify-between font-bold text-xs text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-red-600" />
                    <span>How to Install on Any Phone (Easy 2 Steps)</span>
                  </div>
                  {showGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showGuide && (
                  <div className="space-y-3 pt-2 text-xs text-gray-700 border-t border-gray-200/80 animate-in fade-in">
                    <div className="space-y-1">
                      <span className="font-extrabold text-gray-900 flex items-center gap-1">
                        🤖 Android (Chrome / Brave / Samsung Internet):
                      </span>
                      <ol className="list-decimal list-inside pl-1 space-y-1 text-gray-600 text-[11px]">
                        <li>Tap the <strong>three dots (⋮)</strong> at the top right corner of Chrome.</li>
                        <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                        <li>Tap <strong>Install</strong>. The BG TOPUP icon will immediately appear on your phone home screen!</li>
                      </ol>
                    </div>

                    <div className="space-y-1">
                      <span className="font-extrabold text-gray-900 flex items-center gap-1">
                        🍎 iPhone (Safari):
                      </span>
                      <ol className="list-decimal list-inside pl-1 space-y-1 text-gray-600 text-[11px]">
                        <li>Tap the <strong>Share button (⬆)</strong> at the bottom of Safari.</li>
                        <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                        <li>Tap <strong>Add</strong> at the top right.</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>

              {/* Shortcut to Publish Tab */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('publish')}
                  className="text-xs text-red-600 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Are you the store owner? Click here to publish on Google Play Console →</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Publish to Google Play Store */}
          {activeTab === 'publish' && (
            <div className="space-y-4 animate-in fade-in text-xs">
              {/* Why not working on Play store explainer */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-black text-amber-950">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Why is the app not in Google Play Store yet?</span>
                </div>
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  Google Play Store is a private store operated by Google. To appear in Google Play search, Google requires:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-800 font-medium">
                  <li>A <strong>Google Play Developer Account</strong> ($25 one-time registration fee to Google at play.google.com/console).</li>
                  <li>Uploading the signed <strong>Android App Bundle (.aab)</strong> package.</li>
                  <li>Google reviews and approves it (usually takes 1–3 days).</li>
                </ul>
                <p className="text-[11px] text-amber-900 font-semibold">
                  We have prepared all files below so you can package and publish it in 3 minutes!
                </p>
              </div>

              {/* Step 1: 1-Click Generate AAB/APK */}
              <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-2 border-emerald-500/30 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">
                      Step 1: Generate Signed .AAB Bundle (1-Click)
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Use PWABuilder (free tool recommended by Google) to package this app into an Android package.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.open(pwaBuilderUrl, '_blank')}
                  className="w-full py-3 bg-[#01875f] hover:bg-[#01704e] active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Open PWABuilder for BG TOPUP STORE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-gray-400 text-center">
                  Your Web App Manifest, 512px icons, and assetlinks.json are already pre-configured!
                </p>
              </div>

              {/* Step 2: Upload to Google Play Console */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">
                      Step 2: Upload to Google Play Console
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Go to play.google.com/console and create your new app.
                    </p>
                  </div>
                </div>
                <a
                  href="https://play.google.com/console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-gray-900 hover:bg-black text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors block text-center"
                >
                  <span>Open Google Play Console</span>
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
              </div>

              {/* Step 3: Copy-Paste Store Listing Metadata */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Pre-filled Google Play Store Listing Info</span>
                </h4>

                {/* App Title */}
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">App Title (under 30 chars)</span>
                    <button
                      type="button"
                      onClick={() => copyText(appTitle, 'title')}
                      className="text-[10px] font-bold text-red-600 flex items-center gap-1 hover:underline"
                    >
                      {copiedField === 'title' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'title' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] font-bold text-gray-900">{appTitle}</p>
                </div>

                {/* Short Description */}
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Short Description (under 80 chars)</span>
                    <button
                      type="button"
                      onClick={() => copyText(shortDescription, 'short')}
                      className="text-[10px] font-bold text-red-600 flex items-center gap-1 hover:underline"
                    >
                      {copiedField === 'short' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'short' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-700">{shortDescription}</p>
                </div>

                {/* Full Description */}
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Full Description</span>
                    <button
                      type="button"
                      onClick={() => copyText(fullDescription, 'full')}
                      className="text-[10px] font-bold text-red-600 flex items-center gap-1 hover:underline"
                    >
                      {copiedField === 'full' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'full' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-[10px] text-gray-600 whitespace-pre-wrap font-sans max-h-28 overflow-y-auto bg-white p-2 rounded-lg border border-gray-100">
                    {fullDescription}
                  </pre>
                </div>

                {/* Privacy Policy */}
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase block">Privacy Policy URL (Required by Google)</span>
                    <span className="text-[11px] font-bold text-gray-800">{currentAppUrl}/privacy-policy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyText(`${currentAppUrl}/privacy-policy`, 'privacy')}
                      className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-[10px] font-bold flex items-center gap-1"
                    >
                      {copiedField === 'privacy' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'privacy' ? 'Copied' : 'Copy'}</span>
                    </button>
                    {onOpenPrivacyPolicy && (
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3" />
                        <span>View</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Connect Live Play Store Link */}
          {activeTab === 'link' && (
            <div className="space-y-4 animate-in fade-in text-xs">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-black text-blue-950">
                  <Link className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Already published on Google Play Store?</span>
                </div>
                <p className="text-[11px] text-blue-900 leading-relaxed">
                  Paste your official Google Play Store URL below. When saved, any user clicking "Download on Google Play" in your app will be sent straight to your Google Play Store page!
                </p>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-gray-800 block text-xs">
                  Your Google Play Store App Link:
                </label>
                <input
                  type="url"
                  value={playStoreUrl}
                  onChange={(e) => setPlayStoreUrl(e.target.value)}
                  placeholder="https://play.google.com/store/apps/details?id=com.bgtopup.store"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <button
                  type="button"
                  onClick={handleSavePlayStoreUrl}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Google Play Link</span>
                </button>

                {savedUrlSuccess && (
                  <p className="text-xs font-bold text-center text-emerald-700 bg-emerald-50 py-1.5 rounded-lg">
                    Link saved successfully! ✓
                  </p>
                )}

                {playStoreUrl && (
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors block text-center"
                  >
                    <span>Test Opening Your Play Store Page</span>
                    <ExternalLink className="w-3.5 h-3.5 inline" />
                  </a>
                )}
              </div>

              {/* Developer Contact Reminder */}
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-200 space-y-1 text-gray-600">
                <span className="font-extrabold text-gray-900 block text-xs">Store Owner Support</span>
                <p className="text-[11px]">Developer Email: <strong>faizangamerr1@gmail.com</strong></p>
                <p className="text-[11px]">WhatsApp Helpline: <strong>+977 9704579571</strong></p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
