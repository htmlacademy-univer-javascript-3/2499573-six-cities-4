import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Settting } from './utils/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <h1>Hello, World!</h1>
    <App placesFound={Settting.placesFound}/>
  </React.StrictMode>
);
