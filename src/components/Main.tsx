import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchData } from '../redux/actions/action';

function Main() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataNew = useSelector((state) => state.myField);

  useEffect(() => {
    console.log(dataNew);
  }, [dataNew]);

  return (
    <main>
      <div>
        {dataNew && dataNew.data.map((item: any) => (
          <div key={ item.id }>
            <p>
              {item.quote && item.quote.USD && item.quote.USD.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
