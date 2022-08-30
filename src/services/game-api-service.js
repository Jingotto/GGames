import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const fetchAllGames = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/games`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGamesById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/games/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGameWithQuery = async (queryString) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${queryString}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

// http://localhost:3000/games

// export const fetchTrendingMovies = async () => {
//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchMovieWithQuery = async (queryString) => {
//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchMovieDetails = async (movieId) => {
//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchMovieCredits = async (movieId) => {
//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchMovieReviews = async (movieId) => {
//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
