import { useEffect, useState } from 'react';

export function formatNumber(num: number) {
  if (num >= 1e9) {
    return `${(num / 1e9).toFixed(2)}B`;
  }
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(2)}M`;
  }
  if (num >= 1e3) {
    return `${(num / 1e3).toFixed(2)}K`;
  }
  return num.toString();
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites.map(Number));
  }, []);

  const handleFavorite = (id: number) => {
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
