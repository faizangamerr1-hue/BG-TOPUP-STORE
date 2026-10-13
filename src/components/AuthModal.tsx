import React, { useState } from 'react';
import { X, User, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (profile: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [name, setName] = useState('Faizan Gamer');
  const [email, setEmail] = useState('faizangamerr1@gmail.com');
  const [password, setPassword] = useState('••••••••');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: 'usr-1',
      name: name || 'Faizan Gamer',
      email: email || 'faizangamerr1@gmail.com',
      walletBalanceNpr: 500,
      isLoggedIn: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-black p-0.5 mx-auto mb-3 shadow-md shadow-red-600/30">
            <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
              <span className="text-white font-black text-sm">BG</span>
            </div>
          </div>
          <h3 className="text-lg font-black text-gray-900">Sign In to BG TOPUP STORE</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Access your wallet, save Player IDs & track orders
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-red-600/30 transition-all cursor-pointer mt-2"
          >
            Sign In / Continue
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <button
            type="button"
            onClick={() => {
              onLogin({
                id: 'usr-1',
                name: 'Faizan Gamer',
                email: 'faizangamerr1@gmail.com',
                walletBalanceNpr: 500,
                isLoggedIn: true,
              });
              onClose();
            }}
            className="text-xs text-red-600 font-bold hover:underline"
          >
            ⚡ Quick Demo Login (Faizan Gamer)
          </button>
        </div>
      </div>
    </div>
  );
};
