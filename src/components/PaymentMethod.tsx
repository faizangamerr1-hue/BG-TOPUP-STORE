import React from 'react';
import { Wallet, QrCode, CreditCard, Check } from 'lucide-react';
import { PaymentMethodType, UserProfile } from '../types';

interface PaymentMethodProps {
  selectedMethod: PaymentMethodType | null;
  onSelectMethod: (method: PaymentMethodType) => void;
  user: UserProfile;
  onOpenAuth: () => void;
  totalNpr: number;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  selectedMethod,
  onSelectMethod,
  user,
  onOpenAuth,
  totalNpr,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      {/* Header with Step 3 Badge */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="w-8 h-8 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-red-600/30">
          3
        </div>
        <div>
          <h2 className="text-base font-extrabold text-gray-900 tracking-tight leading-tight uppercase">
            PAYMENT METHOD
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Pay from your wallet or scan a live Fonepay QR
          </p>
        </div>
      </div>

      {/* Methods List */}
      <div className="space-y-3">
        {/* Option 1: Wallet */}
        <div
          onClick={() => {
            if (!user.isLoggedIn) {
              onOpenAuth();
            } else {
              onSelectMethod('wallet');
            }
          }}
          className={`rounded-2xl p-4 border transition-all cursor-pointer flex items-center justify-between ${
            selectedMethod === 'wallet'
              ? 'border-2 border-red-600 bg-red-50/20'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">Wallet</span>
                {user.isLoggedIn && (
                  <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    NPR {user.walletBalanceNpr}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 italic mt-0.5">
                {user.isLoggedIn
                  ? user.walletBalanceNpr >= totalNpr
                    ? 'Instant 1-Click Payment'
                    : 'Insufficient balance (Top up first)'
                  : 'Must Login For This'}
              </p>
            </div>
          </div>

          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              selectedMethod === 'wallet'
                ? 'border-red-600 bg-red-600 text-white'
                : 'border-gray-300 bg-white'
            }`}
          >
            {selectedMethod === 'wallet' && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
        </div>

        {/* Option 2: Fonepay QR (Highlighted in screenshot) */}
        <div
          onClick={() => onSelectMethod('fonepay')}
          className={`rounded-2xl p-4 border transition-all cursor-pointer flex flex-col gap-3 ${
            selectedMethod === 'fonepay'
              ? 'border-2 border-red-600 bg-red-50/20'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-red-600 shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-gray-900">Fonepay QR</span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Mobile banking & Fonepay
                </p>
              </div>
            </div>

            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                selectedMethod === 'fonepay'
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {selectedMethod === 'fonepay' && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
          </div>

          {/* Screenshot exact note */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-xl px-3 py-2 text-xs text-gray-600">
            <span className="font-semibold text-gray-700">QR opens securely on this website.</span> Remarks: your Order ID.
          </div>
        </div>

        {/* Option 3: eSewa */}
        <div
          onClick={() => onSelectMethod('esewa')}
          className={`rounded-2xl p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
            selectedMethod === 'esewa'
              ? 'border-2 border-emerald-600 bg-emerald-50/20'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-sm shrink-0">
              e-
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900">eSewa Mobile Wallet</span>
              <p className="text-xs text-gray-500">
                Scan or direct eSewa checkout
              </p>
            </div>
          </div>

          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              selectedMethod === 'esewa'
                ? 'border-emerald-600 bg-emerald-600 text-white'
                : 'border-gray-300 bg-white'
            }`}
          >
            {selectedMethod === 'esewa' && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
        </div>

        {/* Option 4: Khalti */}
        <div
          onClick={() => onSelectMethod('khalti')}
          className={`rounded-2xl p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
            selectedMethod === 'khalti'
              ? 'border-2 border-purple-600 bg-purple-50/20'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 font-black text-xs shrink-0">
              Khalti
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900">Khalti by IME</span>
              <p className="text-xs text-gray-500">
                Instant digital payment
              </p>
            </div>
          </div>

          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              selectedMethod === 'khalti'
                ? 'border-purple-600 bg-purple-600 text-white'
                : 'border-gray-300 bg-white'
            }`}
          >
            {selectedMethod === 'khalti' && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
        </div>
      </div>
    </div>
  );
};
