import { useState } from 'react';
import { dataApi } from '../utils/data';
import { DataItem } from '../utils/functionsAPI';
import Price from './Price';
import { SearchContainer } from '../styles/StyleSearch';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const dataNew = dataApi.data;

  const handleSearch = () => {
    const result = dataNew.filter((item: any) => item
      .name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(result);
    setHasSearched(true);
  };

  return (
    <SearchContainer>
      <input
        type="search"
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
      <button onClick={ handleSearch }>Pesquisar</button>
      <table>
        {filteredData.length === 0 ? ''
          : (
            <thead>
              <tr>
                <th>#</th>
                <th>Moeda</th>
                <th>Preço</th>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>Volume em 24h</th>
                <th>Capitalização de mercado</th>
              </tr>
            </thead>
          )}
        <tbody>
          {filteredData.map((item: DataItem | any, index: number) => (
            <tr key={ index } className="hoverElement">
              <td>{index + 1}</td>
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
      {hasSearched && <Price data={ filteredData } />}
    </SearchContainer>
  );
}

export default Search;
