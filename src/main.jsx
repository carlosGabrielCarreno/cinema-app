import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { MoviesProvider } from './context/MoviesProvider';
import { MoviesApp } from './MoviesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MoviesProvider>
    <BrowserRouter>
      <MoviesApp />
    </BrowserRouter>
  </MoviesProvider>
  //</React.StrictMode>
);
