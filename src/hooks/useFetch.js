import { useEffect, useState } from 'react';
import { getFetch } from '../service';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: undefined,
    isLoading: true,
    hasError: undefined,
    page: 0,
  });

  useEffect(() => {
    /* console.log('useEffect'); */
    getFetch({ url, state, setState });
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
