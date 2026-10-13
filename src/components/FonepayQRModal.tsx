import React, { useState, useEffect } from 'react';
import { X, Copy, Check, QrCode, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Order } from '../types';

interface FonepayQRModalProps {
  isOpen: boolean;
  order: Order | null;
  onClose: () => void;
  onConfirmPayment: (orderId: string) => void;
}

export const FonepayQRModal: React.FC<FonepayQRModalProps> = ({
  isOpen,
  order,
  onClose,
  onConfirmPayment,
}) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsVerifying(false);
      setIsSuccess(false);
      setTimeLeft(600);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen || !order) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCopyRemarks = () => {
    navigator.clipboard.writeText(order.orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleComplete = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
      onConfirmPayment(order.id);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Modal Header */}
        <div className="bg-red-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-black tracking-wide">Fonepay Live QR</h3>
              <p className="text-[11px] text-white/80">Scan & Pay via any Nepal Mobile Banking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto max-h-[80vh] space-y-4 text-center">
          {isSuccess ? (
            <div className="py-8 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">Payment Confirmed!</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Your order <span className="font-bold text-gray-900">{order.orderNumber}</span> for {order.item.name} has been placed. Top-up will be credited directly to your Player UID!
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-sm"
                >
                  View in Orders
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Timer Bar */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 font-bold bg-rose-50 py-1.5 px-3 rounded-full mx-auto w-fit">
                <Clock className="w-3.5 h-3.5" />
                <span>Expires in: {formattedTime}</span>
              </div>

              {/* Price Display */}
              <div>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                  Amount to Pay
                </span>
                <span className="text-3xl font-black text-gray-900">
                  NPR {order.totalNpr}
                </span>
              </div>

              {/* QR Box */}
              <div className="relative p-4 bg-white border-2 border-red-500/20 rounded-2xl shadow-inner mx-auto max-w-[240px]">
                {/* Simulated high-fidelity Fonepay QR */}
                <div className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden border border-gray-200">
                  {/* SVG QR Code Pattern */}
                  <svg className="w-full h-full text-gray-900" viewBox="0 0 100 100" fill="currentColor">
                    {/* Corner Positioners */}
                    <rect x="5" y="5" width="26" height="26" rx="3" fill="#dc2626" />
                    <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                    <rect x="13" y="13" width="10" height="10" rx="1" fill="#dc2626" />

                    <rect x="69" y="5" width="26" height="26" rx="3" fill="#dc2626" />
                    <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                    <rect x="77" y="13" width="10" height="10" rx="1" fill="#dc2626" />

                    <rect x="5" y="69" width="26" height="26" rx="3" fill="#dc2626" />
                    <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                    <rect x="13" y="77" width="10" height="10" rx="1" fill="#dc2626" />

                    {/* QR Matrix Dots */}
                    <circle cx="42" cy="12" r="2.5" />
                    <circle cx="50" cy="18" r="2.5" />
                    <circle cx="58" cy="12" r="2.5" />
                    <circle cx="42" cy="24" r="2.5" />
                    <circle cx="54" cy="28" r="2.5" />
                    <circle cx="20" cy="42" r="2.5" />
                    <circle cx="28" cy="50" r="2.5" />
                    <circle cx="14" cy="56" r="2.5" />
                    <circle cx="42" cy="42" r="3" fill="#dc2626" />
                    <circle cx="50" cy="42" r="3" fill="#dc2626" />
                    <circle cx="58" cy="42" r="3" fill="#dc2626" />
                    <circle cx="50" cy="50" r="3" fill="#dc2626" />
                    <circle cx="70" cy="44" r="2.5" />
                    <circle cx="82" cy="52" r="2.5" />
                    <circle cx="76" cy="62" r="2.5" />
                    <circle cx="42" cy="72" r="2.5" />
                    <circle cx="52" cy="80" r="2.5" />
                    <circle cx="62" cy="74" r="2.5" />
                    <circle cx="46" cy="90" r="2.5" />
                    <circle cx="74" cy="84" r="2.5" />
                    <circle cx="86" cy="74" r="2.5" />
                    <circle cx="82" cy="90" r="2.5" />
                  </svg>

                  {/* Center Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="px-2 py-0.5 bg-red-600 text-white rounded font-black text-[9px] shadow-sm border border-white">
                      Fonepay
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 font-medium mt-2">
                  Merchant: <span className="font-bold text-gray-800">BG TOPUP STORE NEPAL</span>
                </p>
              </div>

              {/* Remarks Notice (Mandatory!) */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase">
                    Mandatory Remarks:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyRemarks}
                    className="flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-white border border-amber-300 rounded-xl px-3 py-2 flex items-center justify-between">
                  <span className="font-mono text-base font-black text-gray-900 tracking-wider">
                    {order.orderNumber}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                    Remarks
                  </span>
                </div>

                <p className="text-[10px] text-amber-800/90 mt-1.5 leading-snug">
                  * You MUST write <span className="font-bold">{order.orderNumber}</span> in the remarks field while paying in your banking app.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleComplete}
                  disabled={isVerifying}
                  className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-xs shadow-md shadow-red-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  <span>{isVerifying ? 'Verifying Transaction...' : 'I Have Paid (Confirm Payment)'}</span>
                  {!isVerifying && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                </button>

                <p className="text-[10px] text-gray-400 font-medium">
                  Scan opens securely. Auto-delivery takes 1-3 minutes.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
