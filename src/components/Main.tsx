import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchData } from '../redux/actions/action';
import { DataItem } from '../utils/functionsAPI';
import { dataApi } from '../utils/data';

function Main() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  // const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // const dataNew: DataItem[] | null = useSelector((state) => state.myReducer.data);
  const dataNew = dataApi.data;

  const handleSort = (column: string) => {
    const newSortDirection = sortColumn === column
    && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newSortDirection);
  };

  const sortedDataNew = [...dataNew].sort((a, b) => {
    if (sortColumn === null) {
      return 0;
    }

    let comparison = 0;
    switch (sortColumn) {
      case '#':
        comparison = a.id - b.id;
        break;
      case 'Moeda':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'Preço':
        comparison = a.quote.USD.price - b.quote.USD.price;
        break;
      case '1h':
        comparison = a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h;
        break;
      case '24h':
        comparison = a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h;
        break;
      case '7d':
        comparison = a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d;
        break;
      case 'Volume em 24h':
        comparison = a.quote.USD.volume_24h - b.quote.USD.volume_24h;
        break;
      case 'Capitalização de mercado':
        comparison = a.quote.USD.market_cap - b.quote.USD.market_cap;
        break;
      default:
        comparison = 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <main>
      <div>
        {dataNew === null ? <p>Carregando</p>
          : (
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
                {sortedDataNew.map((item: DataItem | any, index: number) => (
                  <tr key={ index }>
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
          )}
      </div>
    </main>
  );
}

export default Main;
