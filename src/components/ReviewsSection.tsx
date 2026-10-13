import React from 'react';
import { Star, Plus, CheckCircle2 } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onOpenWriteReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onOpenWriteReview,
}) => {
  return (
    <div className="py-2">
      {/* Rating score row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          {/* Star Icons */}
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <span className="text-base font-extrabold text-gray-900">
            4.9 <span className="font-normal text-gray-400">/ 5</span>
          </span>

          <span className="text-xs text-gray-500 font-medium">
            · 1450+ verified costumers reviews
          </span>
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-4">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
          What Our Customers Say
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Real automated feedback from Nepali gamers
        </p>
      </div>

      {/* Write a Review Button */}
      <div className="mb-5">
        <button
          type="button"
          onClick={onOpenWriteReview}
          className="w-full py-2.5 px-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-800 flex items-center justify-center gap-1.5 shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-red-600 stroke-[3]" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Reviews Cards - Horizontal Carousel / Grid */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(Math.floor(rev.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xs font-semibold text-gray-800 leading-relaxed italic">
                {rev.content}
              </p>
            </div>

            {/* Author & Verified Tag */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-900">
                {rev.author}
              </span>

              <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
