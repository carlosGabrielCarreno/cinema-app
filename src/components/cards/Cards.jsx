import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { useGlobalContext } from '../../context/MoviesProvider';
import { Card } from '../card/Card';
import './cards.scss';

export const Cards = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="container-cards">
      {movies?.map((movie) => {
        return <Card key={movie.id} title={movie?.l} img={movie?.i} />;
      })}
    </div>
  );
};
