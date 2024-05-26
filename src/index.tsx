import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { reviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App reviews={reviews} />
    </Provider>

  </React.StrictMode>,
);