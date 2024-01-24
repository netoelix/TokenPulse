import notFavorite from '../assets/notFavorite.svg';
import favorite from '../assets/Favorite.svg';
import { FavoriteBTNProps } from '../types';

function FavoriteBTN({ handleFavorite, item, favorites }: FavoriteBTNProps) {
  return (
    <button
      onClick={ () => handleFavorite(item.id) }
    >
      {favorites.includes(item.id)
        ? (
          <img data-testid="favorite-btn" src={ favorite } alt="red heart" />
        ) : (
          <img data-testid="favorite-btn" src={ notFavorite } alt="white heart" />
        )}
    </button>
  );
}

export default FavoriteBTN;
