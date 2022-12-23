import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useCounter } from '../hooks';
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
  const [idMovieDetail, setIdMovieDetail] = useState('');
  const [dataMovieDetail, setDataMovieDetail] = useState();

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
    reset();
    setPath(
      import.meta.env.VITE_APP_TOP_RATED +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
  }, [topRated]);

  useEffect(() => {
    reset();
    setPath(
      import.meta.env.VITE_APP_NOW_PLAYING +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
  }, [nowPlaying]);

  useEffect(() => {
    reset();
    setPath(
      import.meta.env.VITE_APP_UPCOMING +
        'api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&page=' +
        counter
    );
  }, [upcoming]);

  useEffect(() => {
    call();
  }, [path]);

  useEffect(() => {
    const getDetailMovie = async (id) => {
      try {
        setHasError(false);
        setIsLoading(true);
        const { data } = await axios.get(
          import.meta.env.VITE_APP_DETAIL_MOVIE +
            id +
            '?api_key=' +
            import.meta.env.VITE_APP_API_KEY
        );

        setDataMovieDetail(data);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
      }
    };
    if (idMovieDetail.length > 1) {
      getDetailMovie(idMovieDetail);
    }
  }, [idMovieDetail]);

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
        dataMovieDetail,
        setIdMovieDetail,
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
