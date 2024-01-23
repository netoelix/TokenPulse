// useSort.ts
import { useEffect, useState } from 'react';

export function useSort<T extends { name: string, quote: { USD: {
  percent_change_24h: any;
  percent_change_7d: any;
  volume_24h: any;
  market_cap: any;
  percent_change_1h: any; price: number
} } }>(
  initialSortColumn: string | null,
  initialSortDirection: 'asc' | 'desc',
) {
  const [sortColumn, setSortColumn] = useState<string | null>(initialSortColumn);
  const [sortDirection,
    setSortDirection] = useState<'asc' | 'desc'>(initialSortDirection);

  const handleSort = (column: string) => {
    const newSortDirection = sortColumn === column
        && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newSortDirection);
  };

  const sortData = (data: T[]) => {
    return [...data].map((item, index) => ({ ...item, index })).sort((a, b) => {
      if (sortColumn === null) {
        return 0;
      }

      let comparison = 0;
      switch (sortColumn) {
        case '#':
          comparison = a.index - b.index;
          break;
        case 'Moeda':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'Preço':
          comparison = a.quote.USD.price - b.quote.USD.price;
          break;
        case '1h':
          comparison = a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h;
          break;
        case '24h':
          comparison = a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h;
          break;
        case '7d':
          comparison = a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d;
          break;
        case 'Volume em 24h':
          comparison = a.quote.USD.volume_24h - b.quote.USD.volume_24h;
          break;
        case 'Capitalização de mercado':
          comparison = a.quote.USD.market_cap - b.quote.USD.market_cap;
          break;
        default:
          comparison = 0;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };

  return { sortColumn, sortDirection, handleSort, sortData };
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const index = prevFavorites.indexOf(id);
      if (index !== -1) {
        const newFavorites = [...prevFavorites];
        newFavorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        return newFavorites;
      }
      const newFavorites = [...prevFavorites, id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, handleFavorite };
}
