export interface Quote {
  USD: {
    price: number;
  };
}

export interface DataItem {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  infinite_supply: null | number;
  last_updated: string;
  date_added: string;
  tags: string[];
  platform: null | string;
  self_reported_circulating_supply: null | number;
  self_reported_market_cap: null | number;
  quote: Quote;
}

export interface ApiResponse {
  data: DataItem[];
}

export async function getAll(): Promise<ApiResponse> {
  const response = await fetch('http://localhost:3000/getAll');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiResponse = await response.json();
  return data;
}
