import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  params: { q: 'matrix' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
  },
};

export const getMoviesFromApi = async (title = 'matrix') => {
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
};
