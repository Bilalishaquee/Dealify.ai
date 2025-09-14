export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user';
  userType?: 'buyer' | 'seller' | 'both'; // For users, specify if they're buyer, seller, or both
  avatar?: string;
  createdAt: string;
}

export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'multi-family';
  status: 'active' | 'pending' | 'sold' | 'off-market';
  images: string[];
  description: string;
  arv: number;
  repairCosts: number;
  roi: number;
  sellerId: string;
  createdAt: string;
}

export interface Deal {
  id: string;
  propertyId: string;
  buyerId: string;
  sellerId: string;
  offerAmount: number;
  status: 'lead' | 'offer' | 'negotiation' | 'contract' | 'closed';
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, firstName: string, lastName: string, userType: 'buyer' | 'seller' | 'both') => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

export interface DashboardStats {
  totalUsers: number;
  activeDeals: number;
  platformRevenue: number;
  aiQueries: number;
  dailyActiveUsers: number;
  propertiesListed: number;
  offersMade: number;
  aiQueriesProcessed: number;
}