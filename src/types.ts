export interface PackageItem {
  id: string;
  name: string;
  diamonds?: number;
  priceNpr: number;
  originalPriceNpr?: number;
  badge?: string;
  type: 'diamonds' | 'membership' | 'pass';
}

export interface Game {
  id: string;
  name: string;
  publisher: string;
  bannerUrl: string;
  iconUrl: string;
  idLabel: string;
  idPlaceholder: string;
  packages: PackageItem[];
}

export type PaymentMethodType = 'wallet' | 'fonepay' | 'esewa' | 'khalti' | 'mypay';

export interface Order {
  id: string;
  orderNumber: string;
  gameId: string;
  gameName: string;
  item: PackageItem;
  quantity: number;
  totalNpr: number;
  playerId: string;
  verifiedPlayerName: string;
  server?: string;
  paymentMethod: PaymentMethodType;
  status: 'pending' | 'processing' | 'completed' | 'delayed';
  createdAt: string;
  remarks: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
  game?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  walletBalanceNpr: number;
  isLoggedIn: boolean;
}
