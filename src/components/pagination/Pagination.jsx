import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import React, { useContext } from 'react';
import './_pagination.scss';
import { MoviesContext } from '../../context/MoviesContext';

export const Pagination = () => {
  const { counter, decrement, increment, totalPagesMovies } =
    useContext(MoviesContext);

  const onNext = () => {
    if (counter <= totalPagesMovies) {
      increment();
    }
  };

  const onPrevious = () => {
    if (counter > 1) {
      decrement();
    }
  };

  return (
    <div className="container-pagination">
      <div className="container-btns">
        <button
          className={`pagination-btn ${counter == 1 ? 'disable' : ''}`}
          onClick={onPrevious}
        >
          <ArrowLeftIcon fontSize="large" />
        </button>
        <span className="value-pagination">{counter}</span>
        <button
          className={`pagination-btn ${
            counter >= totalPagesMovies ? 'disable' : ''
          }`}
          onClick={onNext}
        >
          <ArrowRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};
