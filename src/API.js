import { getMoviesFromApi } from './service';

export const searchMovies = async (title = '') => {
  try {
    const movies = await getMoviesFromApi(title);
    return movies;
  } catch (error) {
    return error.message;
  }
};
