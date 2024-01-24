import { dataApi } from '../utils/data';
import { MainContainer } from '../styles/StyleMain';
import { useFavorites } from '../utils/functions';
import Table from './Table';
import Search from './Search';

function Main() {
  // const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // const dataNew: DataItem[] | null = useSelector((state) => state.myReducer.data);

  const { favorites, handleFavorite } = useFavorites();

  const dataNew = dataApi.data;

  return (
    <MainContainer>
      <Search
        data={ dataNew }
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
