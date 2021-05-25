const API_KEY = process.env.API_KEY;
//cac8d346ed40c467f5e2e366e615d061
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchScifi: {
    title: "Sci-Fi",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "Tv shows",
    url: `/movie/top_rated?api_key=${API_KEY}&with_genres=10770`,
  },
};
