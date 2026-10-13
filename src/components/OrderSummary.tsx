import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Game, PackageItem, PaymentMethodType } from '../types';

interface OrderSummaryProps {
  game: Game;
  selectedPackage: PackageItem;
  quantity: number;
  playerId: string;
  verifiedName: string;
  server?: string;
  paymentMethod: PaymentMethodType | null;
  onBuyNow: () => void;
  isLoading?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  game,
  selectedPackage,
  quantity,
  playerId,
  verifiedName,
  server = 'Nepal / South Asia (SAC)',
  paymentMethod,
  onBuyNow,
  isLoading = false,
}) => {
  const totalPrice = selectedPackage.priceNpr * quantity;

  const paymentLabels: Record<PaymentMethodType, string> = {
    wallet: 'Wallet',
    fonepay: 'Fonepay QR',
    esewa: 'eSewa',
    khalti: 'Khalti',
    mypay: 'MyPay',
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <h2 className="text-lg font-extrabold text-gray-900 tracking-tight mb-4">
        Order Summary
      </h2>

      {/* Summary Line Items */}
      <div className="space-y-3.5 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">Game Page</span>
          <span className="font-extrabold text-gray-900 tracking-wide uppercase">
            {game.name}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">Selected Item</span>
          <span className="font-extrabold text-gray-900 tracking-wide uppercase">
            {quantity > 1 ? `${quantity}x ` : ''}
            {selectedPackage.name.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">User ID</span>
          {playerId ? (
            <span className="font-mono font-bold text-gray-900 bg-gray-100 px-2.5 py-0.5 rounded-md">
              {playerId}
            </span>
          ) : (
            <span className="bg-[#fef3c7] text-[#92400e] font-semibold px-3 py-0.5 rounded-md border border-[#fde68a]">
              Not set
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">Verified Name</span>
          {verifiedName ? (
            <span className="bg-emerald-50 text-emerald-800 font-bold px-3 py-0.5 rounded-md border border-emerald-200">
              {verifiedName}
            </span>
          ) : (
            <span className="bg-[#ecfdf5] text-[#065f46] font-semibold px-3 py-0.5 rounded-md border border-[#a7f3d0]">
              Not verified
            </span>
          )}
        </div>

        {/* Server Details Row */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">Game Server</span>
          <span className="font-bold text-gray-800 bg-gray-100/90 px-2.5 py-0.5 rounded-md">
            {playerId ? server : 'Pending UID'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-medium">Payment Method</span>
          {paymentMethod ? (
            <span className="font-bold text-gray-900">
              {paymentLabels[paymentMethod]}
            </span>
          ) : (
            <span className="font-semibold text-gray-400">
              Not selected
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-100"></div>

      {/* Total Price Section */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          TOTAL PRICE
        </span>
        <div className="text-right">
          <span className="text-2xl font-black text-gray-900 tracking-tight">
            NPR {totalPrice}
          </span>
        </div>
      </div>

      {/* Big Red Buy Now Button */}
      <button
        type="button"
        onClick={onBuyNow}
        disabled={isLoading}
        className="w-full py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-base tracking-wide shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
      >
        <span>{isLoading ? 'Processing Order...' : 'Buy Now'}</span>
        {!isLoading && <ArrowRight className="w-5 h-5 stroke-[2.5]" />}
      </button>

      {/* Trust check badge matching screenshot */}
      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-600">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>100% Direct Top Up</span>
      </div>
    </div>
  );
};
