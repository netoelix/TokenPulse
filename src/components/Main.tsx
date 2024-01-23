import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchData } from '../redux/actions/action';
import { DataItem } from '../utils/functionsAPI';

function Main() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataNew: DataItem[] | null = useSelector((state) => state.myReducer.data);

  return (
    <main>
      <div>
        {dataNew === null ? <p>Carregando</p>
          : (
            <ol>
              {dataNew.map((item: DataItem, index: number) => (
                Object.keys(item.quote).map((key: string, keyIndex: number) => (
                  <li key={ `${index}-${keyIndex}` }>
                    {item.name}
                    {' '}
                    Price:
                    {item.quote[key as keyof Quote].price}
                    {' '}
                    1h:
                    {' '}
                    {item.quote[key as keyof Quote].percent_change_1h}
                    {' '}
                    24h:
                    {' '}
                    {item.quote[key as keyof Quote].percent_change_24h}
                    {' '}
                    7d:
                    {' '}
                    {item.quote[key as keyof Quote].percent_change_7d}
                    {' '}
                    Volume em 24h:
                    {' '}
                    {item.quote[key as keyof Quote].volume_24h}
                    {' '}
                    Capitalização de mercado:
                    {' '}
                    {item.quote[key as keyof Quote].market_cap}
                  </li>
                ))
              ))}
            </ol>
          )}
      </div>
    </main>
  );
}

export default Main;
