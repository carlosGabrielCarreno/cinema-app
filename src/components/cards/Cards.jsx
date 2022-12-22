import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { useGlobalContext } from '../../context/MoviesProvider';
import { Card } from '../card/Card';
import { ErrorMessage } from '../error/ErrorMessage';
import './cards.scss';

export const Cards = () => {
  const { data, hasError, isLoading } = useContext(MoviesContext);

  return (
    <div className="main">
      {hasError ? (
        <>
          <ErrorMessage />
        </>
      ) : (
        <>
          {isLoading ? (
            <h1>loading</h1>
          ) : (
            <>
              {data?.results.map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    title={movie?.original_title}
                    img={movie?.poster_path}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};
