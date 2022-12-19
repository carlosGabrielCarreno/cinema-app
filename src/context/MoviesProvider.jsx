import { useContext, useEffect, useState } from 'react';
import { searchMovies } from '../API';
import { useCounter, useFetch } from '../hooks';
import { getMoviesFromApi } from '../service';
import { MoviesContext } from './MoviesContext';

const MoviesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { counter, decrement, increment, reset } = useCounter();
  const { data, hasError, isLoading } = useFetch(
    searchTerm.length > 1
      ? import.meta.env.VITE_APP_URL_SEARCH +
          searchTerm +
          '&api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
      : import.meta.env.VITE_APP_URL_API +
          '?api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
  );

  // useEffect(() => {
  //   if (!searchTerm) {
  //     const movies = async () => {
  //       try {
  //         setIsLoading(true);
  //         setIsError(false);
  //         const movies = await searchMovies('matrix');
  //         if (movies.length) {
  //           setMovies(movies);
  //           setIsLoading(false);
  //         } else {
  //           throw new Error('Movies not found');
  //         }
  //       } catch (error) {
  //         setIsLoading(false);
  //         setIsError(true);
  //       }
  //     };
  //     movies();
  //   } else {
  //     const movies = async () => {
  //       try {
  //         setIsLoading(true);
  //         setIsError(false);
  //         const movies = await searchMovies(searchTerm);
  //         console.log(movies);
  //         if (movies.length) {
  //           setMovies(movies);
  //           setIsLoading(false);
  //         } else {
  //           throw new Error('Movies not found');
  //         }
  //       } catch (error) {
  //         setIsLoading(false);
  //         setIsError(true);
  //       }
  //     };
  //     movies();
  //   }
  // }, [searchTerm]);

  return (
    <MoviesContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        data,
        hasError,
        isLoading,
        decrement,
        increment,
        reset,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MoviesContext);
};

export { MoviesContext, MoviesProvider };
