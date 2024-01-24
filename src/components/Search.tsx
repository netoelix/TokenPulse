import { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
// import { dataApi } from '../utils/data';
import { SearchContainer } from '../styles/StyleSearch';
import { DataItem, RootState, TableProps } from '../types';
import { formatNumber } from '../utils/functions';
import FavoriteBTN from './FavotireBTN';
import { fetchData } from '../redux/actions/action';
import Price from './Price';

function Search({ handleFavorite, favorites }: TableProps) {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataNew: DataItem[] | null = useSelector(
    (state: RootState) => state.myReducer.data,
  );

  // const dataNew = dataApi.data;
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<DataItem | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const result = dataNew?.find((item) => item
      .name.toLowerCase() === searchValue.toLowerCase());
    if (result) {
      setSearchResult(result);
      setErrorMessage('');
    } else {
      setErrorMessage('No results found.');
    }
  };

  return (
    <SearchContainer>
      <h1>Look for a specific cryptocurrency.</h1>
      <section>
        <input
          data-testid="input-search"
          className="inputSearch"
          type="search"
          value={ searchValue }
          onChange={ (e) => setSearchValue(e.target.value) }
          placeholder="Find a coin"
        />
        <button
          data-testid="search-btn"
          className="btnSearch"
          onClick={ handleSearch }
        >
          Search
        </button>
      </section>
      {searchResult && (
        <>
          <div key={ searchResult.id } className="criptoSearch">
            <h2>
              {searchResult.name}
              <FavoriteBTN
                handleFavorite={ handleFavorite }
                item={ searchResult }
                favorites={ favorites }
              />
            </h2>
            <h3>
              Value:
              {' '}
              {searchResult.quote.USD.price.toLocaleString('pt-BR', {
                style: 'currency', currency: 'USD' })}
            </h3>
            <h3>
              1h:
              {' '}
              <span
                className={ searchResult.quote.USD.percent_change_1h < 0
                  ? 'negative' : 'positive' }
              >
                {`${(searchResult.quote.USD.percent_change_1h).toFixed(2)}%`}
              </span>
            </h3>
            <h4>
              Market capitalization:
              {' '}
              {formatNumber(searchResult.quote.USD.market_cap)}
            </h4>
            <h4>
              24h:
              {' '}
              <span
                className={ searchResult.quote.USD.percent_change_24h < 0
                  ? 'negative' : 'positive' }
              >
                {`${(searchResult.quote.USD.percent_change_24h).toFixed(2)}%`}
              </span>
            </h4>
          </div>
          <Price data={ searchResult } />
        </>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </SearchContainer>
  );
}

export default Search;
