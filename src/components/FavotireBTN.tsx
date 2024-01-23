interface FavoriteBTNProps {
  handleFavorite: (id: number) => void;
  item: { id: number };
  favorites: number[];
}

function FavoriteBTN({ handleFavorite, item, favorites }: FavoriteBTNProps) {
  return (
    <button onClick={ () => handleFavorite(item.id) }>
      {favorites.includes(item.id) ? 'Desfavoritar' : 'Favoritar'}
    </button>
  );
}

export default FavoriteBTN;
