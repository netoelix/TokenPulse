import { DataItem } from '../types';
import { dataApi } from '../utils/data';
import { MainContainer } from '../styles/StyleMain';
import { useFavorites, useSort } from '../utils/functions';
import Table from '../components/Table';

function Favorites() {
  const {
    handleSort, sortData } = useSort<DataItem>(null, 'asc');
  const { favorites, handleFavorite } = useFavorites();
  const dataNew = dataApi.data;
  const favoritesData = dataNew.filter((item) => favorites.includes(item.id));
  const sortedFavoritesData = sortData(favoritesData);

  return (
    <MainContainer>
      <div>
        {sortedFavoritesData.length === 0 ? <p>Nenhum favorito encontrado</p>
          : (
            <Table
              data={ sortedFavoritesData }
              handleSort={ handleSort }
              handleFavorite={ handleFavorite }
              favorites={ favorites }
            />
          )}
      </div>
    </MainContainer>
  );
}

export default Favorites;
