import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useCounter, useFetch } from '../hooks';
import { MoviesContext } from './MoviesContext';

const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
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

  const call = async () => {
    try {
      setHasError(false);
      setIsLoading(true);
      const { data } = await axios.get(path);
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    call();
  }, []);

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
    /* if (topRated === true) { */
    reset();
    setPath(
      import.meta.env.VITE_APP_TOP_RATED +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
    /* } */
  }, [topRated]);

  useEffect(() => {
    /* if (nowPlaying) { */
    reset();
    setPath(
      import.meta.env.VITE_APP_NOW_PLAYING +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
    /* } */
  }, [nowPlaying]);

  useEffect(() => {
    /* if (upcoming) { */
    reset();
    setPath(
      import.meta.env.VITE_APP_UPCOMING +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
    /* } */
  }, [upcoming]);

  useEffect(() => {
    call();
  }, [path]);

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
