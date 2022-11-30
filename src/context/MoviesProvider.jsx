import { useContext, useEffect, useState } from 'react';
import { searchMovies } from '../API';
import { MoviesContext } from './MoviesContext';

const MoviesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      const movies = async () => {
        try {
          setIsLoading(true);
          setIsError(false);
          const movies = await searchMovies('matrix');
          setMovies(movies);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
        }
      };
      movies();
    } else {
      const movies = async () => {
        try {
          setIsLoading(true);
          setIsError(false);
          const movies = await searchMovies(searchTerm);
          setMovies(movies);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
        }
      };
      movies();
    }
  }, [searchTerm]);

  return (
    <MoviesContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        setMovies,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
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
