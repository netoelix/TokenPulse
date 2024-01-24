import { MainContainer } from '../styles/StyleMain';
import { TableProps } from '../types';
import { formatNumber } from '../utils/functions';
import FavoriteBTN from './FavotireBTN';

function Table({ data, handleFavorite, favorites }: TableProps) {
  return (
    <MainContainer>
      {data.map((item: any) => (
        <div key={ item.id }>
          <h2>
            {item.name}
            <FavoriteBTN
              handleFavorite={ handleFavorite }
              item={ item }
              favorites={ favorites }
            />
          </h2>
          <h3>
            Valor:
            {' '}
            {item.quote.USD.price.toLocaleString('pt-BR', {
              style: 'currency', currency: 'USD' })}
          </h3>
          <h3>
            1h:
            {' '}
            <span
              className={ item.quote.USD.percent_change_1h < 0
                ? 'negative' : 'positive' }
            >
              {`${(item.quote.USD.percent_change_1h).toFixed(2)}%`}
            </span>
          </h3>
          <h4>
            Capitalização de mercado:
            {' '}
            {formatNumber(item.quote.USD.market_cap)}
          </h4>
          <h4>
            24h:
            {' '}
            <span
              className={ item.quote.USD.percent_change_24h < 0
                ? 'negative' : 'positive' }
            >
              {`${(item.quote.USD.percent_change_24h).toFixed(2)}%`}
            </span>
          </h4>
        </div>
      ))}
    </MainContainer>
  );
}

export default Table;
