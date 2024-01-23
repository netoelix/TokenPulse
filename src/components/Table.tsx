import FavoriteBTN from './FavotireBTN';

interface TableProps {
  data: any[];
  handleSort: (column: string) => void;
  handleFavorite: (id: string) => void;
  favorites: string[];
}

function Table({ data, handleSort, handleFavorite, favorites }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={ () => handleSort('#') }>#</th>
          <th onClick={ () => handleSort('Moeda') }>Moeda</th>
          <th onClick={ () => handleSort('Preço') }>Preço</th>
          <th onClick={ () => handleSort('1h') }>1h</th>
          <th onClick={ () => handleSort('24h') }>24h</th>
          <th onClick={ () => handleSort('7d') }>7d</th>
          <th onClick={ () => handleSort('Volume em 24h') }>Volume em 24h</th>
          <th
            onClick={ () => handleSort('Capitalização de mercado') }
          >
            Capitalização de mercado
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr key={ index } className="hoverElement">
            <td>
              <FavoriteBTN
                handleFavorite={ handleFavorite }
                item={ item }
                favorites={ favorites }
              />
              {index + 1}
            </td>
            <td>{item.name}</td>
            <td>
              {item.quote.USD.price.toLocaleString('pt-BR', {
                style: 'currency', currency: 'USD' })}
            </td>
            <td>{`${(item.quote.USD.percent_change_1h * 100).toFixed(2)}%`}</td>
            <td>{`${(item.quote.USD.percent_change_24h * 100).toFixed(2)}%`}</td>
            <td>{`${(item.quote.USD.percent_change_7d * 100).toFixed(2)}%`}</td>
            <td>
              {item.quote.USD.volume_24h.toLocaleString('pt-BR', {
                style: 'currency', currency: 'USD' })}
            </td>
            <td>
              {item.quote.USD.market_cap.toLocaleString('pt-BR', {
                style: 'currency', currency: 'USD' })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
