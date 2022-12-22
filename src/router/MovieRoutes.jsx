import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App, DetailMoviePage } from '../pages';

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail/:id" element={<DetailMoviePage />} />
    </Routes>
  );
};
