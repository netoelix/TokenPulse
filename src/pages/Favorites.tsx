import { dataApi } from '../utils/data';
import { useFavorites } from '../utils/functions';
import Table from '../components/Table';
import { FavoriteContainer } from '../styles/StyleFavorites';

function Favorites() {
  const { favorites, handleFavorite } = useFavorites();
  const dataNew = dataApi.data;
  const favoritesData = dataNew.filter((item) => favorites.includes(item.id));

  return (
    <FavoriteContainer>
      <h1>Saved cryptocurrencies.</h1>
      <div>
        {favoritesData.length === 0 ? <p>No saved cryptocurrencies found.</p>
          : (
            <Table
              data={ favoritesData }
              handleFavorite={ handleFavorite }
              favorites={ favorites }
            />
          )}
      </div>
    </FavoriteContainer>
  );
}

export default Favorites;
