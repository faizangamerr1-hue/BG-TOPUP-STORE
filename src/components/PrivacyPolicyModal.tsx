import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-red-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-sm font-black tracking-wide">Privacy Policy - BG TOPUP STORE</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Required by Google Play Console */}
        <div className="p-5 overflow-y-auto space-y-3.5 text-xs text-gray-700 leading-relaxed">
          <p className="font-semibold text-gray-900">
            Last Updated: October 2026 · Official Google Play Store Privacy Policy
          </p>

          <div>
            <h4 className="font-extrabold text-gray-900">1. Information We Collect</h4>
            <p>
              BG TOPUP STORE collects game player user IDs (Player UID / Character ID), order transaction IDs, and contact info (such as email: faizangamerr1@gmail.com and WhatsApp number: 9704579571) solely for fulfilling direct in-game currency top-ups and providing customer support.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-gray-900">2. How We Use Your Information</h4>
            <p>
              Your Player UID is sent securely to game delivery APIs (Garena Free Fire, Krafton PUBG Mobile, Moonton) to credit items directly to your game account. We never ask for or store your game password or Google credentials.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-gray-900">3. Payment & Security</h4>
            <p>
              Payments processed through Nepal banking gateways (Fonepay QR, eSewa, Khalti) are protected with bank-grade encryption. No credit card credentials are stored on our servers.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-gray-900">4. Developer & Support Contact</h4>
            <p>
              Developer: BG Gaming Store Nepal Ltd.<br />
              Email: faizangamerr1@gmail.com<br />
              Helpline: +977 9704579571<br />
              Website: BGTOPUPS.COM
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
