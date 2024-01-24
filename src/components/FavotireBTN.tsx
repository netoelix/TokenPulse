import notFavorite from '../assets/notFavorite.svg';
import favorite from '../assets/Favorite.svg';

interface FavoriteBTNProps {
  handleFavorite: (id: number) => void;
  item: { id: number };
  favorites: number[];
}

function FavoriteBTN({ handleFavorite, item, favorites }: FavoriteBTNProps) {
  return (
    <button onClick={ () => handleFavorite(item.id) }>
      {favorites.includes(item.id)
        ? (
          <img src={ favorite } alt="red heart" />
        ) : (
          <img src={ notFavorite } alt="white heart" />
        )}
    </button>
  );
}

export default FavoriteBTN;
