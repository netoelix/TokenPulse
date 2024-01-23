export interface Quote {
  USD: {
    price: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    volume_24h: number;
    market_cap: number;
  };
}

export interface DataItem {
  id: number;
  name: string;
  quote: Quote;
}

export interface ApiResponse {
  data: DataItem[];
}
