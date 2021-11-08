const API_KEY = "127b83b1b74691c27504b09a80c8fdfc";
const baseURL = "https://api.themoviedb.org/3";
const imageBaseURL = "https://image.tmdb.org/t/p/original/";
const requests = {
  fetchMovieDetails: `${baseURL}/movie/`,
  fetchMoviesByGenre: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=`,
  fetchGenre: `${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
export { imageBaseURL, API_KEY, baseURL };
