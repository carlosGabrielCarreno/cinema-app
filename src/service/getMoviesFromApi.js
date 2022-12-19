import axios from 'axios';

const options2 = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  params: { q: 'matrix' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
  },
};

/* export const getMoviesFromApi = async (title = 'matrix') => {
  options.params = { q: title };
  try {
    const { data } = await axios.request(options);
    if (data.d) {
      return data.d;
    } else {
      throw new Error(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}; */

const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_APP_API_KEY,
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const getMoviesFromApi = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }`
  );
  console.log('soy response', data);
  return data.results;
};
