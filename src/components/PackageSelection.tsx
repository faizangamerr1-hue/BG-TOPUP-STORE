import React from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { PackageItem } from '../types';

interface PackageSelectionProps {
  packages: PackageItem[];
  selectedPackage: PackageItem;
  onSelectPackage: (item: PackageItem) => void;
  quantity: number;
  onChangeQuantity: (qty: number) => void;
}

export const PackageSelection: React.FC<PackageSelectionProps> = ({
  packages,
  selectedPackage,
  onSelectPackage,
  quantity,
  onChangeQuantity,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      {/* Header with Step 2 Badge */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="w-8 h-8 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-red-600/30">
          2
        </div>
        <div>
          <h2 className="text-base font-extrabold text-gray-900 tracking-tight leading-tight uppercase">
            PACKAGE SELECTION
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Select package quantity
          </p>
        </div>
      </div>

      {/* Package Items Grid */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {packages.map((pkg) => {
          const isSelected = selectedPackage.id === pkg.id;

          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => onSelectPackage(pkg)}
              className={`relative rounded-2xl p-3 flex flex-col items-center justify-center min-h-[78px] sm:min-h-[84px] text-center transition-all cursor-pointer select-none ${
                isSelected
                  ? 'border-2 border-red-600 bg-white shadow-sm ring-1 ring-red-600/20'
                  : 'border border-gray-200/90 bg-white hover:border-gray-300 hover:bg-gray-50/50 shadow-xs'
              }`}
            >
              {/* Top-Left Red Checkmark Badge when Selected */}
              {isSelected && (
                <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-md bg-red-600 text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              )}

              {/* Package Name */}
              <span
                className={`text-xs sm:text-sm font-bold tracking-tight leading-tight ${
                  isSelected ? 'text-red-600 font-extrabold' : 'text-gray-800'
                }`}
              >
                {pkg.name}
              </span>

              {/* Price badge indicator */}
              <span className="text-[10px] text-gray-400 font-semibold mt-1">
                NPR {pkg.priceNpr}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quantity Selector Section */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-gray-900">Quantity</span>{' '}
          <span className="text-xs text-gray-400 font-normal">
            (Order multiple sets at once)
          </span>
        </div>

        {/* Quantity Stepper Pill */}
        <div className="flex items-center gap-2 bg-gray-100/90 rounded-full px-2 py-1 border border-gray-200">
          <button
            type="button"
            disabled={quantity <= 1}
            onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white shadow-xs transition-colors"
          >
            <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          <span className="w-7 text-center font-bold text-sm text-gray-900 select-none">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => onChangeQuantity(quantity + 1)}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
