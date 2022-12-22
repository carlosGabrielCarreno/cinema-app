import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { useGlobalContext } from '../../context/MoviesProvider';
import { Card } from '../card/Card';
import { ErrorMessage } from '../error/ErrorMessage';
import { Spinner } from '../spinner/Spinner';
import './cards.scss';

export const Cards = () => {
  const { data, hasError, isLoading } = useContext(MoviesContext);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="main">
          {hasError ? (
            <>
              <ErrorMessage />
            </>
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
        </div>
      )}
    </>
  );
};
