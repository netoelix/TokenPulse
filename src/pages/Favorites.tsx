import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
// import { dataApi } from '../utils/data';
import { useFavorites } from '../utils/functions';
import Table from '../components/Table';
import { FavoriteContainer } from '../styles/StyleFavorites';
import { fetchData } from '../redux/actions/action';
import { DataItem, RootState } from '../types';

function Favorites() {
  const { favorites, handleFavorite } = useFavorites();

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataNew: DataItem[] | null = useSelector(
    (state: RootState) => state.myReducer.data,
  );

  // const dataNew = dataApi.data;
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
