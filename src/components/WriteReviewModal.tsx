import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { Review } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
  defaultAuthor?: string;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
  defaultAuthor = 'Faizan Gamer',
}) => {
  const [author, setAuthor] = useState(defaultAuthor);
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim() || 'Verified Gamer',
      rating,
      content: `"${content.trim()}"`,
      date: 'Just now',
      verified: true,
      game: 'Free Fire',
    };

    onSubmitReview(newRev);
    setContent('');
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

        <h3 className="text-base font-black text-gray-900 mb-1">
          Write a Review
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Share your experience with UGTOPUPS instant delivery
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star selector */}
          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Your Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-gray-700 ml-2">
                {rating} / 5 Stars
              </span>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Your In-Game / Display Name
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              placeholder="e.g. Faizan Gamer"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Review Comment
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={3}
              placeholder="How fast did your diamonds arrive? (e.g. Received 25 diamonds in 30 seconds!)"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-red-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Review</span>
          </button>
        </form>
      </div>
    </div>
  );
};
