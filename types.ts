
export interface Coin {
  symbol: string;
  price: number;
  change24h: number;
}

export interface MiningPlan {
  id: string;
  name: string;
  hashRate: string;
  price: number;
  duration: string;
  dailyProfit: string;
  recommended: boolean;
}

export interface Transaction {
  id: string;
  user: string;
  amount: string;
  type: 'WITHDRAW' | 'DEPOSIT';
  time: string;
}
