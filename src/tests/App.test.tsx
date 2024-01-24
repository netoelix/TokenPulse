import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { vi } from 'vitest';
import App from '../App';
import myReducer from '../redux/reducers/reducer';
import { dataApi } from '../utils/data';

const rootReducer = combineReducers({
  myReducer,
});

const renderWithReduxAndRouter = (component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined) => {
  return render(
    <Provider store={ store }>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>,
  );
};

const store = createStore(rootReducer, applyMiddleware(thunk));

let mockFetchApi;
console.log(mockFetchApi);

const setupFetchMockAndRender = (data: any, component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined) => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => data,
  } as Response;

  const mockFetch = vi.spyOn(global, 'fetch').mockImplementation((url) => {
    switch (url) {
      case 'http://localhost:3000/getAll':
        return Promise.resolve(MOCK_RESPONSE);
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  renderWithReduxAndRouter(component);

  return mockFetch;
};

describe('Teste se a pagina carregando aparece', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(null, <App />);
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a renderização da pagina carregando', async () => {
    const loading = await screen.findByText('Loading');
    expect(loading).toBeInTheDocument();
  });
});

describe('Renderização inicial', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
  });
  afterEach(() => vi.clearAllMocks());

  it('Renderiza o titulo da pagina', () => {
    expect(screen.getByText(/tokenpulse/i)).toBeInTheDocument();
  });
});

describe('Testes da API', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a função getAll', async () => {
    const firstCoin = await screen.findByText('Bitcoin');
    expect(firstCoin).toBeInTheDocument();
    const secondCoin = await screen.findByText('NEAR Protocol');
    expect(secondCoin).toBeInTheDocument();
    const thirdCoin = await screen.findByText('Ethereum');
    expect(thirdCoin).toBeInTheDocument();
  });
});

describe('Testes de renderização', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a renderização dos itens', async () => {
    const favoriteBtn = await screen.findAllByTestId('favorite-btn');
    expect(favoriteBtn).toHaveLength(105);
    const searchBtn = await screen.findByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();
    const inputSearch = await screen.findByTestId('input-search');
    expect(inputSearch).toBeInTheDocument();
    const select = await screen.findByTestId('select');
    expect(select).toBeInTheDocument();
  });
});

describe('Testes de funcionalidade', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
    localStorage.clear();
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a funcionalidade do botão de favoritar', async () => {
    const favoriteBtn = await screen.findAllByTestId('favorite-btn');
    expect(favoriteBtn).toHaveLength(105);
    const firstFavoriteBtn = favoriteBtn[0];
    expect(firstFavoriteBtn).toBeInTheDocument();
    expect(firstFavoriteBtn).toHaveAttribute('src', '/src/assets/notFavorite.svg');
    await userEvent.click(firstFavoriteBtn);
    expect(firstFavoriteBtn).toHaveAttribute('src', '/src/assets/Favorite.svg');
  });

  it('Testa a funcionalidade do botão de pesquisar', async () => {
    const searchBtn = await screen.findByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();
    const inputSearch = await screen.findByTestId('input-search');
    expect(inputSearch).toBeInTheDocument();
    await userEvent.type(inputSearch, 'bitcoin');
    await userEvent.click(searchBtn);
    const bitcoin = await screen.findAllByText('Bitcoin');
    expect(bitcoin).toHaveLength(2);
  });

  it('Testa a funcionalidade do select', async () => {
    const select = await screen.findByTestId('select');
    expect(select).toBeInTheDocument();
    await userEvent.type(select, '1h Change');
    const bitcoin = await screen.findAllByText('Manta Network');
    expect(bitcoin).toHaveLength(2);
    const ethereum = await screen.findAllByText('Stacks');
    expect(ethereum).toHaveLength(2);
    const nearProtocol = await screen.findAllByText('Ronin');
    expect(nearProtocol).toHaveLength(2);
  });
});

describe('Testa o input serach com um dado invalido', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
    localStorage.clear();
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a funcionalidade do botão de pesquisar', async () => {
    const searchBtn = await screen.findByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();
    const inputSearch = await screen.findByTestId('input-search');
    expect(inputSearch).toBeInTheDocument();
    await userEvent.type(inputSearch, 'aaaa');
    await userEvent.click(searchBtn);
    const noCoin = await screen.findByText('No results found.');
    expect(noCoin).toBeInTheDocument();
  });
});

describe('Testes do botão de favoritar', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataApi, <App />);
    localStorage.clear();
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa se o botão de favoritar está funcionando', async () => {
    const favoriteBtn = await screen.findAllByTestId('favorite-btn');
    const favoritePage = await screen.findByText('Favorites');
    expect(favoritePage).toBeInTheDocument();
    expect(favoriteBtn).toHaveLength(105);
    const firstFavoriteBtn = favoriteBtn[0];
    await userEvent.click(firstFavoriteBtn);
    await userEvent.click(favoritePage);
    const coin = await screen.findByText('Manta Network');
    expect(coin).toBeInTheDocument();
    expect(await screen.findByText('Value: US$ 2,44')).toBeInTheDocument();
    expect(await screen.findByText('Saved cryptocurrencies.')).toBeInTheDocument();

    const secondFavoriteBtn = await screen.findByTestId('favorite-btn');
    await userEvent.click(secondFavoriteBtn);
    expect(await screen.findByText('No saved cryptocurrencies found.')).toBeInTheDocument();
  });
});
