import React, { useState } from 'react';
import { Package, Search, ExternalLink, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Order } from '../types';

interface OrdersTabProps {
  orders: Order[];
  onOpenNotice: () => void;
  onOpenWhatsApp: () => void;
}

export const OrdersTab: React.FC<OrdersTabProps> = ({
  orders,
  onOpenNotice,
  onOpenWhatsApp,
}) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'processing'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((o) => {
    const matchesFilter = filter === 'all' || o.status === filter;
    const matchesQuery =
      o.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.playerId.includes(searchQuery) ||
      o.item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="space-y-4 pb-24">
      {/* Tab Header */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-red-600 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-900 tracking-tight">
                My Orders
              </h2>
              <p className="text-xs text-gray-500">
                Track top-ups & digital vouchers
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenNotice}
            className="text-[11px] font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full transition-colors"
          >
            Delay Notice
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Order ID (e.g. UG-882941) or UID"
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              filter === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All ({orders.length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              filter === 'completed'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('processing')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              filter === 'processing'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Processing
          </button>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center space-y-2">
          <Package className="w-10 h-10 text-gray-300 mx-auto" />
          <h3 className="text-sm font-bold text-gray-800">No Orders Found</h3>
          <p className="text-xs text-gray-400">
            {searchQuery ? 'Try a different search term.' : 'You have not placed any orders yet.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredOrders.map((ord) => (
            <div
              key={ord.id}
              className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-extrabold text-gray-900">
                      {ord.orderNumber}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {ord.createdAt}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-gray-900 mt-1">
                    {ord.gameName} · {ord.item.name}
                  </h4>
                </div>

                {/* Status Badge */}
                {ord.status === 'completed' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Completed</span>
                  </span>
                ) : ord.status === 'delayed' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    <span>Delayed</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-blue-600 animate-spin" />
                    <span>Processing</span>
                  </span>
                )}
              </div>

              {/* Order Info Rows */}
              <div className="bg-gray-50 rounded-2xl p-3 text-xs space-y-1.5 text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Player UID:</span>
                  <span className="font-mono font-bold text-gray-800">{ord.playerId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Verified Name:</span>
                  <span className="font-semibold text-emerald-700">{ord.verifiedPlayerName || 'Verified'}</span>
                </div>
                {ord.server && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Game Server:</span>
                    <span className="font-semibold text-gray-800">{ord.server}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment:</span>
                  <span className="font-semibold text-gray-800 uppercase">{ord.paymentMethod}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-gray-200 font-bold text-gray-900">
                  <span>Total Amount:</span>
                  <span className="text-red-600 font-extrabold">NPR {ord.totalNpr}</span>
                </div>
              </div>

              {/* Need help footer */}
              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 text-[11px]"
                >
                  <span>Need help with order?</span>
                </button>

                <span className="text-[11px] text-gray-400">
                  Delivery: Instant Auto In-Game
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
