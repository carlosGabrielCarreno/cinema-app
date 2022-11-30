import { getMoviesFromApi } from './service';

export const searchMovies = async (title = '') => {
  try {
    const movies = await getMoviesFromApi(title);
    /* console.log(movies); */
    if (movies) return movies;
    throw new Error(movies);
  } catch (error) {
    return error.message;
  }
};
