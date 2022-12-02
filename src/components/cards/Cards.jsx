import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { useGlobalContext } from '../../context/MoviesProvider';
import { Card } from '../card/Card';
import { ErrorMessage } from '../error/ErrorMessage';
import './cards.scss';

export const Cards = () => {
  const { movies, isError } = useContext(MoviesContext);
  return (
    <div className="main">
      {isError ? (
        <>
          <ErrorMessage />
        </>
      ) : (
        <>
          {movies?.map((movie) => {
            return <Card key={movie.id} title={movie?.l} img={movie?.i} />;
          })}
        </>
      )}
    </div>
  );
};
