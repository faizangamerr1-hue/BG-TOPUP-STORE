/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GAMES, INITIAL_REVIEWS, SAMPLE_ORDERS } from './data/mockData';
import { Game, PackageItem, PaymentMethodType, Order, Review, UserProfile } from './types';
import { Header } from './components/Header';
import { CustomerDetails } from './components/CustomerDetails';
import { PackageSelection } from './components/PackageSelection';
import { PaymentMethod } from './components/PaymentMethod';
import { OrderSummary } from './components/OrderSummary';
import { ReviewsSection } from './components/ReviewsSection';
import { TrustAndFooter } from './components/TrustAndFooter';
import { BottomNav, NavTab } from './components/BottomNav';
import { OrderDelayNoticeModal } from './components/OrderDelayNoticeModal';
import { FonepayQRModal } from './components/FonepayQRModal';
import { AuthModal } from './components/AuthModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { OrdersTab } from './components/OrdersTab';
import { WalletTab } from './components/WalletTab';
import { NotificationsTab } from './components/NotificationsTab';
import { ProfileTab } from './components/ProfileTab';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PlayerVerifyModal } from './components/PlayerVerifyModal';
import { AppInstallBanner } from './components/AppInstallBanner';
import { HeroBanner } from './components/HeroBanner';
import { SelectItemsCatalog } from './components/SelectItemsCatalog';
import { PlayStoreInstallModal } from './components/PlayStoreInstallModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  // User State - Pre-seeded with user profile matching faizangamerr1@gmail.com
  const [user, setUser] = useState<UserProfile>({
    id: 'usr-faizan',
    name: 'Faizan Gamer',
    email: 'faizangamerr1@gmail.com',
    walletBalanceNpr: 500,
    isLoggedIn: true,
  });

  // Top-Up Form State
  const [activeGame, setActiveGame] = useState<Game>(GAMES[0]);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(GAMES[0].packages[0]);
  const [playerId, setPlayerId] = useState<string>('');
  const [verifiedName, setVerifiedName] = useState<string>('');
  const [server, setServer] = useState<string>('Nepal / South Asia (SAC)');
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType | null>('fonepay');

  // Data Collections
  const [orders, setOrders] = useState<Order[]>(SAMPLE_ORDERS);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  // Modals
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [isPlayerVerifyOpen, setIsPlayerVerifyOpen] = useState(false);
  const [isPlayStoreModalOpen, setIsPlayStoreModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [activeQrOrder, setActiveQrOrder] = useState<Order | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  // Switch Game handler
  const handleSelectGame = (game: Game) => {
    setActiveGame(game);
    setSelectedPackage(game.packages[0]);
    setPlayerId('');
    setVerifiedName('');
    setServer('Nepal / South Asia (SAC)');
    setQuantity(1);
  };

  // Buy Now Flow
  const handleBuyNow = () => {
    setValidationError('');

    if (!playerId.trim()) {
      setValidationError('Please enter your Player UID in Step 1 to proceed.');
      // Auto-focus or highlight
      const el = document.getElementById('step-customer-details');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const effectivePayment = paymentMethod || 'fonepay';
    const totalNpr = selectedPackage.priceNpr * quantity;
    const orderNumber = `BG-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      gameId: activeGame.id,
      gameName: activeGame.name,
      item: selectedPackage,
      quantity,
      totalNpr,
      playerId,
      verifiedPlayerName: verifiedName || `Player_${playerId.slice(-4) || 'Gamer'}`,
      server: server || 'Nepal / South Asia (SAC)',
      paymentMethod: effectivePayment,
      status: 'processing',
      createdAt: 'Just now',
      remarks: orderNumber,
    };

    if (effectivePayment === 'wallet') {
      if (user.walletBalanceNpr < totalNpr) {
        setValidationError(`Insufficient wallet balance. You have NPR ${user.walletBalanceNpr}, but need NPR ${totalNpr}. Please add funds or use Fonepay QR.`);
        return;
      }

      // Deduct from wallet
      setUser((prev) => ({
        ...prev,
        walletBalanceNpr: prev.walletBalanceNpr - totalNpr,
      }));

      newOrder.status = 'completed';
      setOrders([newOrder, ...orders]);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
      setActiveTab('orders');
    } else {
      // Fonepay QR, eSewa, etc. - trigger live Fonepay QR modal
      setActiveQrOrder(newOrder);
      setOrders([newOrder, ...orders]);
    }
  };

  // Confirm Payment from QR modal
  const handleConfirmQrPayment = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: 'completed' } : o))
    );
  };

  // Add Review
  const handleAddReview = (newRev: Review) => {
    setReviews([newRev, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-900 flex justify-center selection:bg-red-500 selection:text-white">
      {/* App Shell Container - Optimized for mobile view while gorgeous on desktop */}
      <div className="w-full max-w-md min-h-screen bg-[#f8f9fa] shadow-2xl flex flex-col relative border-x border-gray-200/60">
        
        {/* Header */}
        <Header
          user={user}
          games={GAMES}
          activeGame={activeGame}
          onSelectGame={handleSelectGame}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenNotice={() => setIsNoticeOpen(true)}
          onOpenPlayStore={() => setIsPlayStoreModalOpen(true)}
        />

        {/* Validation Error Alert if any */}
        {validationError && (
          <div className="mx-4 mt-3 p-3 bg-red-50 border border-red-200 rounded-2xl text-xs font-bold text-red-700 flex items-center justify-between animate-in fade-in">
            <span>{validationError}</span>
            <button
              onClick={() => setValidationError('')}
              className="text-red-500 hover:text-red-800 text-xs px-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Content Router based on Bottom Nav */}
        <main className="flex-1 px-4 py-4">
          {activeTab === 'home' && (
            <div className="space-y-4">
              {/* Hero Banner matching screenshot */}
              <HeroBanner
                onViewPackages={() => {
                  const el = document.getElementById('step-package-selection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Select Items Catalog with 9 Games & Categories matching screenshot */}
              <SelectItemsCatalog
                games={GAMES}
                activeGame={activeGame}
                onSelectGame={handleSelectGame}
              />

              {/* Step 1: Customer & Account Details */}
              <div id="step-customer-details">
                <CustomerDetails
                  playerId={playerId}
                  onChangePlayerId={(id) => {
                    setPlayerId(id);
                    if (validationError) setValidationError('');
                  }}
                  verifiedName={verifiedName}
                  onSetVerifiedName={setVerifiedName}
                  server={server}
                  onSetServer={setServer}
                  idLabel={activeGame.idLabel}
                  idPlaceholder={activeGame.idPlaceholder}
                  gameName={activeGame.name}
                  onOpenVerifyModal={() => setIsPlayerVerifyOpen(true)}
                />
              </div>

              {/* Step 2: Package Selection */}
              <div id="step-package-selection">
                <PackageSelection
                  packages={activeGame.packages}
                  selectedPackage={selectedPackage}
                  onSelectPackage={setSelectedPackage}
                  quantity={quantity}
                  onChangeQuantity={setQuantity}
                />
              </div>

              {/* Step 3: Payment Method */}
              <PaymentMethod
                selectedMethod={paymentMethod}
                onSelectMethod={setPaymentMethod}
                user={user}
                onOpenAuth={() => setIsAuthOpen(true)}
                totalNpr={selectedPackage.priceNpr * quantity}
              />

              {/* Order Summary & Buy Now */}
              <OrderSummary
                game={activeGame}
                selectedPackage={selectedPackage}
                quantity={quantity}
                playerId={playerId}
                verifiedName={verifiedName}
                server={server}
                paymentMethod={paymentMethod}
                onBuyNow={handleBuyNow}
              />

              {/* Customer Reviews Section */}
              <ReviewsSection
                reviews={reviews}
                onOpenWriteReview={() => setIsWriteReviewOpen(true)}
              />

              {/* Trust Badges, Payment Partners, Official Info & Footer */}
              <TrustAndFooter
                onOpenWhatsApp={() => {
                  window.open('https://wa.me/9779704579571?text=Hello%20BG%20TOPUP%20STORE%20Support', '_blank');
                }}
                onOpenNotice={() => setIsNoticeOpen(true)}
                onOpenPlayStore={() => setIsPlayStoreModalOpen(true)}
                onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
              />
            </div>
          )}

          {activeTab === 'orders' && (
            <OrdersTab
              orders={orders}
              onOpenNotice={() => setIsNoticeOpen(true)}
              onOpenWhatsApp={() => {
                window.open('https://wa.me/9779704579571?text=Hello%20BG%20TOPUP%20STORE%20Support,%20checking%20my%20order', '_blank');
              }}
            />
          )}

          {activeTab === 'wallet' && (
            <WalletTab
              user={user}
              onUpdateBalance={(newBal) =>
                setUser((prev) => ({ ...prev, walletBalanceNpr: newBal }))
              }
              onOpenAuth={() => setIsAuthOpen(true)}
            />
          )}

          {activeTab === 'notifications' && (
            <NotificationsTab
              onOpenDelayPoster={() => setIsNoticeOpen(true)}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileTab
              user={user}
              onOpenAuth={() => setIsAuthOpen(true)}
              onLogout={() =>
                setUser({
                  id: 'guest',
                  name: 'Guest User',
                  email: '',
                  walletBalanceNpr: 0,
                  isLoggedIn: false,
                })
              }
              onOpenNotice={() => setIsNoticeOpen(true)}
              onOpenWhatsApp={() => {
                window.open('https://wa.me/9779704579571?text=Hello%20BG%20TOPUP%20STORE%20Support', '_blank');
              }}
              onOpenPlayStore={() => setIsPlayStoreModalOpen(true)}
              onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
            />
          )}
        </main>

        {/* Floating WhatsApp Chat Button matching screenshot */}
        <WhatsAppFloatingButton />

        {/* Fixed Bottom Navigation matching screenshot */}
        <BottomNav
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          orderCount={orders.length}
          unreadNotifications={true}
        />

        {/* Order Delay Notice Poster Modal matching Image 1 */}
        <OrderDelayNoticeModal
          isOpen={isNoticeOpen}
          onClose={() => setIsNoticeOpen(false)}
        />

        {/* Fonepay QR Live Checkout Modal */}
        <FonepayQRModal
          isOpen={!!activeQrOrder}
          order={activeQrOrder}
          onClose={() => setActiveQrOrder(null)}
          onConfirmPayment={handleConfirmQrPayment}
        />

        {/* Sign In Modal */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onLogin={(profile) => setUser(profile)}
        />

        {/* Write a Review Modal */}
        <WriteReviewModal
          isOpen={isWriteReviewOpen}
          onClose={() => setIsWriteReviewOpen(false)}
          onSubmitReview={handleAddReview}
          defaultAuthor={user.name}
        />

        {/* Player Verify Modal matching user screenshot */}
        <PlayerVerifyModal
          isOpen={isPlayerVerifyOpen}
          onClose={() => setIsPlayerVerifyOpen(false)}
          onConfirm={() => setIsPlayerVerifyOpen(false)}
          playerId={playerId || '8886072772'}
          playerName={verifiedName || 'Shionnyuno'}
          gameName={activeGame.name}
          region={server}
        />

        {/* Floating App Install Banner matching screenshot */}
        <AppInstallBanner
          appName="BG TOPUP App"
          onOpenPlayStore={() => setIsPlayStoreModalOpen(true)}
        />

        {/* Google Play Store Install Modal */}
        <PlayStoreInstallModal
          isOpen={isPlayStoreModalOpen}
          onClose={() => setIsPlayStoreModalOpen(false)}
          onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />
      </div>
    </div>
  );
}
