import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  params: { q: 'matrix' },
  headers: {
    'X-RapidAPI-Key': '2a1ac7f37fmsh884d7983739f522p157da4jsnb35d0ace1ca0',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
  },
};

export const getMoviesFromApi = async (title = 'matrix') => {
  options.params = { q: title };
  try {
    const { data } = await axios.request(options);
    console.log('hola', data);
    if (data.d) {
      return data.d;
    } else {
      throw new Error(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
