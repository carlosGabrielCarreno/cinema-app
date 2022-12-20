import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import { MoviesProvider } from './context/MoviesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MoviesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesProvider>
  //</React.StrictMode>
);
