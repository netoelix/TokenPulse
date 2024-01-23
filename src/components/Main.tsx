// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';
// import { fetchData } from '../redux/actions/action';
import { dataApi } from '../utils/data';
import { MainContainer } from '../styles/StyleMain';
import { useFavorites, useSort } from '../utils/functions';
import Table from './Table';
import { DataItem } from '../types';

function Main() {
  // const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // const dataNew: DataItem[] | null = useSelector((state) => state.myReducer.data);

  const {
    handleSort, sortData } = useSort<DataItem>(null, 'asc');
  const { favorites, handleFavorite } = useFavorites();

  const dataNew = dataApi.data;
  const sortedDataNew = sortData(dataNew);

  return (
    <MainContainer>
      <div>
        {dataNew === null ? <p>Carregando</p>
          : (
            <Table
              data={ sortedDataNew }
              handleSort={ handleSort }
              handleFavorite={ handleFavorite }
              favorites={ favorites }
            />
          )}
      </div>
    </MainContainer>
  );
}

export default Main;
