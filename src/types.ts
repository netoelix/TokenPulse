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

export interface RootState {
  myReducer: {
    data: DataItem[];
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

export interface FavoriteBTNProps {
  handleFavorite: (id: number) => void;
  item: { id: number };
  favorites: number[];
}

export interface PriceProps {
  data: any;
}

export interface TableProps {
  data: any[];
  handleFavorite: (id: number) => void;
  favorites: number[];
}
