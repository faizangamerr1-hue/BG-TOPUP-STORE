import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onDirectClick?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hello BG TOPUP STORE Support, I need help with my Free Fire diamonds order.');

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779704579571?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Popup Window if open */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                BG
              </div>
              <div>
                <h4 className="text-xs font-black">BG Topup 24/7 Support</h4>
                <p className="text-[10px] text-white/90">Typically replies in under 1 min</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-[#e5ddd5]/30">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-gray-800 space-y-1">
              <p className="font-semibold text-emerald-800">Namaste! 🙏</p>
              <p>Welcome to BG TOPUP STORE Customer Support. How can we assist you with your game top-up today?</p>
              <span className="text-[9px] text-gray-400 block text-right">Online</span>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Quick Message:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setMessage('Hello, my Free Fire diamonds order is pending. UID: ')}
                  className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Order Pending
                </button>
                <button
                  type="button"
                  onClick={() => setMessage('Can I pay directly via Fonepay QR?')}
                  className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Fonepay Help
                </button>
              </div>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className="w-full p-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none shadow-xs"
            />

            <button
              type="button"
              onClick={handleSend}
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#25D366]/30 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat (+977 9704579571)</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Circle Button matching screenshot */}
      <div className="fixed bottom-22 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp Support"
          className="relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-transform cursor-pointer"
        >
          {/* Animated ping halo */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          {/* SVG WhatsApp glyph */}
          <svg
            className="w-7 h-7 fill-white relative z-10"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.528 1.993.81 2.79.81 3.179 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.767-5.77zm3.391 8.212c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.128-.517-1.428-.588-2.34-2.04-2.411-2.134-.07-.095-.579-.771-.579-1.47 0-.7.367-1.045.498-1.189.13-.143.285-.179.38-.179.096 0 .191.002.274.006.09.004.21.033.328.318.122.296.417 1.019.453 1.092.037.073.061.16.012.257-.049.097-.074.158-.146.242-.072.085-.152.189-.217.254-.073.072-.15.15-.064.298.085.148.379.624.814 1.012.56.499 1.032.654 1.18.726.148.073.235.061.323-.037.087-.098.374-.436.474-.585.1-.148.2-.124.333-.075.133.05.845.398.99.471.144.073.24.11.275.17.035.06.035.348-.109.753z" />
          </svg>
        </button>
      </div>
    </>
  );
};
