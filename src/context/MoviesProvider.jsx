import { useContext, useEffect, useState } from 'react';
import { useCounter, useFetch } from '../hooks';
import { MoviesContext } from './MoviesContext';

const MoviesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { counter, decrement, increment, reset } = useCounter();
  const [topRated, setTopRated] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(false);
  const [upcoming, setUpcoming] = useState(false);
  const [path, setPath] = useState(
    import.meta.env.VITE_APP_URL_API +
      'api_key=' +
      import.meta.env.VITE_APP_API_KEY +
      '&page=' +
      counter
  );

  useEffect(() => {
    if (searchTerm.length > 1) {
      reset();
      setPath(
        import.meta.env.VITE_APP_URL_SEARCH +
          searchTerm +
          '&api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    if (topRated === true) {
      reset();
      setPath(
        import.meta.env.VITE_APP_TOP_RATED +
          'api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
      );
    }
  }, [topRated]);

  useEffect(() => {
    if (nowPlaying) {
      reset();
      setPath(
        import.meta.env.VITE_APP_NOW_PLAYING +
          'api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
      );
    }
  }, [nowPlaying]);

  useEffect(() => {
    if (upcoming) {
      reset();
      setPath(
        import.meta.env.VITE_APP_UPCOMING +
          'api_key=' +
          import.meta.env.VITE_APP_API_KEY +
          '&page=' +
          counter
      );
    }
  }, [upcoming]);

  console.log(path);
  const { data, hasError, isLoading } = useFetch(path);

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
        topRated,
        setTopRated,
        nowPlaying,
        setNowPlaying,
        upcoming,
        setUpcoming,
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
