import { useState } from 'react';
import { dataApi } from '../utils/data';
import Price from './Price';
import { SearchContainer } from '../styles/StyleSearch';
import { DataItem, TableProps } from '../types';
import { formatNumber } from '../utils/functions';
import FavoriteBTN from './FavotireBTN';

function Search({ handleFavorite, favorites }: TableProps) {
  // const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // const dataNew: DataItem[] | null = useSelector((state) => state.myReducer.data);

  const dataNew = dataApi.data;
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<DataItem | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const result = dataNew.find((item) => item
      .name.toLowerCase() === searchValue.toLowerCase());
    if (result) {
      setSearchResult(result);
      setErrorMessage('');
    } else {
      setErrorMessage('Nenhum resultado encontrado');
    }
  };

  return (
    <SearchContainer>
      <h2>Procure uma criptomoeda para mais informações</h2>
      <section>
        <input
          className="inputSearch"
          type="search"
          value={ searchValue }
          onChange={ (e) => setSearchValue(e.target.value) }
        />
        <button
          className="btnSearch"
          onClick={ handleSearch }
        >
          Pesquisar
        </button>
      </section>
      {searchResult && (
        <div key={ searchResult.id }>
          <h2>
            {searchResult.name}
            <FavoriteBTN
              handleFavorite={ handleFavorite }
              item={ searchResult }
              favorites={ favorites }
            />
          </h2>
          <h3>
            Valor:
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
            Capitalização de mercado:
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
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </SearchContainer>
  );
}

export default Search;
