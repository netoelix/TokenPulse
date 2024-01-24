import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dataApi } from '../utils/data';
import { MainContainer } from '../styles/StyleMain';
import { useFavorites } from '../utils/functions';
import Table from './Table';
import Search from './Search';
import { fetchData } from '../redux/actions/action';
import { DataItem, RootState } from '../types';

function Main() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataNew: DataItem[] | null = useSelector(
    (state: RootState) => state.myReducer.data,
  );

  const { favorites, handleFavorite } = useFavorites();

  // const dataNew = dataApi.data;

  return (
    <MainContainer>
      <Search
        data={ dataNew !== null ? dataNew : [] }
        handleFavorite={ handleFavorite }
        favorites={ favorites }
      />
      {dataNew === null ? <p>Carregando</p>
        : (
          <Table
            data={ dataNew }
            handleFavorite={ handleFavorite }
            favorites={ favorites }
          />
        )}
    </MainContainer>
  );
}

export default Main;
