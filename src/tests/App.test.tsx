// import { ReactNode } from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { vi } from 'vitest';

// const rootReducer = combineReducers({
//   myReducer,
// });

// const renderWithReduxAndRouter = (component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined) => {
//   return render(
//     <Provider store={ store }>
//       <BrowserRouter>
//         {component}
//       </BrowserRouter>
//     </Provider>,
//   );
// };

// const store = createStore(rootReducer, applyMiddleware(thunk));

// let mockFetchApi;
// console.log(mockFetchApi);

// const setupFetchMockAndRender = (data) => {
//   const MOCK_RESPONSE = {
//     ok: true,
//     status: 200,
//     json: async () => data,
//   } as Response;

//   const mockFetch = vi.spyOn(global, 'fetch').mockImplementation((url) => {
//     switch (url) {
//       case 'http://localhost:3033/getAll':
//         return Promise.resolve(MOCK_RESPONSE);
//       default:
//         return Promise.reject(new Error('not found'));
//     }
//   });
//   renderWithReduxAndRouter(component);

//   return mockFetch;
// };
