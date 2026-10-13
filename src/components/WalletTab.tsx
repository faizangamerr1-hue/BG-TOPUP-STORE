import React, { useState } from 'react';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, Shield, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface WalletTabProps {
  user: UserProfile;
  onUpdateBalance: (newBalance: number) => void;
  onOpenAuth: () => void;
}

export const WalletTab: React.FC<WalletTabProps> = ({
  user,
  onUpdateBalance,
  onOpenAuth,
}) => {
  const [depositAmount, setDepositAmount] = useState<number>(500);
  const [selectedMethod, setSelectedMethod] = useState<'fonepay' | 'esewa' | 'khalti'>('fonepay');
  const [isDepositing, setIsDepositing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const quickAmounts = [100, 250, 500, 1000, 2000];

  const handleDeposit = () => {
    if (!user.isLoggedIn) {
      onOpenAuth();
      return;
    }

    if (depositAmount <= 0) return;

    setIsDepositing(true);
    setTimeout(() => {
      setIsDepositing(false);
      onUpdateBalance(user.walletBalanceNpr + depositAmount);
      setSuccessMsg(`Successfully added NPR ${depositAmount} to your wallet!`);
      setTimeout(() => setSuccessMsg(''), 4000);
    }, 900);
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Wallet Balance Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-rose-600 to-red-900 p-6 text-white shadow-xl shadow-red-600/25">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                BG TopUp Wallet
              </span>
              <p className="text-xs text-white/90 font-medium">
                {user.isLoggedIn ? user.name : 'Guest Account'}
              </p>
            </div>
          </div>

          {!user.isLoggedIn && (
            <button
              onClick={onOpenAuth}
              className="px-3 py-1 bg-white text-red-600 rounded-full text-xs font-bold shadow-xs hover:bg-gray-100"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Big Balance */}
        <div className="my-3">
          <span className="text-xs text-white/70 block uppercase font-medium">
            Available Balance
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-lg font-bold text-white/80">NPR</span>
            <span className="text-4xl font-black tracking-tight text-white">
              {user.isLoggedIn ? user.walletBalanceNpr : 0}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-white/80 flex items-center gap-1.5 mt-2">
          <Shield className="w-3.5 h-3.5" />
          <span>Instant checkout for diamonds without re-scanning QR every time</span>
        </p>
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-2xl flex items-center gap-2 text-xs font-bold animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Add Funds Form */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4">
        <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
          <Plus className="w-4 h-4 text-red-600" />
          <span>Add Funds to Wallet</span>
        </h3>

        {/* Quick Amount Pills */}
        <div className="grid grid-cols-5 gap-2">
          {quickAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setDepositAmount(amt)}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                depositAmount === amt
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              +{amt}
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div>
          <label className="text-xs font-bold text-gray-700 mb-1 block">
            Deposit Amount (NPR)
          </label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
            min={10}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
          />
        </div>

        {/* Deposit Gateway Selection */}
        <div>
          <label className="text-xs font-bold text-gray-700 mb-2 block">
            Select Deposit Method
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setSelectedMethod('fonepay')}
              className={`p-3 rounded-2xl border text-center transition-all ${
                selectedMethod === 'fonepay'
                  ? 'border-2 border-red-600 bg-red-50/30 font-bold text-red-600'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold'
              } text-xs`}
            >
              Fonepay QR
            </button>
            <button
              type="button"
              onClick={() => setSelectedMethod('esewa')}
              className={`p-3 rounded-2xl border text-center transition-all ${
                selectedMethod === 'esewa'
                  ? 'border-2 border-emerald-600 bg-emerald-50/30 font-bold text-emerald-700'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold'
              } text-xs`}
            >
              eSewa
            </button>
            <button
              type="button"
              onClick={() => setSelectedMethod('khalti')}
              className={`p-3 rounded-2xl border text-center transition-all ${
                selectedMethod === 'khalti'
                  ? 'border-2 border-purple-600 bg-purple-50/30 font-bold text-purple-700'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold'
              } text-xs`}
            >
              Khalti
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDeposit}
          disabled={isDepositing}
          className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-2xl shadow-md shadow-red-600/25 transition-all cursor-pointer disabled:opacity-50"
        >
          {isDepositing
            ? 'Processing Top-Up...'
            : `Add NPR ${depositAmount} to Wallet`}
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Recent Wallet Transactions
        </h3>

        <div className="divide-y divide-gray-100 text-xs">
          <div className="py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ArrowDownLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-gray-900">Initial Balance Credit</span>
                <p className="text-[10px] text-gray-400">Welcome Bonus</p>
              </div>
            </div>
            <span className="font-extrabold text-emerald-600">+NPR 500</span>
          </div>
        </div>
      </div>
    </div>
  );
};
