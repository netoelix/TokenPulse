import notFavorite from '../assets/notFavorite.svg';
import favorite from '../assets/Favorite.svg';
import { FavoriteBTNProps } from '../types';

function FavoriteBTN({ handleFavorite, item, favorites }: FavoriteBTNProps) {
  return (
    <button
      data-testid="favorite-btn"
      onClick={ () => handleFavorite(item.id) }
    >
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
