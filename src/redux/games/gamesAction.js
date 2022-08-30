export const gamesTypes = {
  FETCH_GAMES_REQUEST: "FETCH_GAMES_REQUEST",
  FETCH_GAMES_SUCCESS: "FETCH_GAMES_SUCCESS",
  FETCH_GAMES_ERROR: "FETCH_GAMES_ERROR",
  FETCH_GAMES_WITH_QUERY_REQUEST: "FETCH_GAMES_REQUEST",
  FETCH_GAMES_WITH_QUERY_SUCCESS: "FETCH_GAMES_WITH_QUERY_SUCCESS",
  FETCH_GAMES_WITH_QUERY_ERROR: "FETCH_GAMES_ERROR",
};

export const fetchGamesRequest = () => ({
  type: gamesTypes.FETCH_GAMES_REQUEST,
});

export const fetchGamesSuccess = (games) => ({
  type: gamesTypes.FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesError = (error) => ({
  type: gamesTypes.FETCH_GAMES_ERROR,
  payload: {
    error,
  },
});



export const fetchGamesWithQueryRequest = () => ({
  type: gamesTypes.FETCH_GAMES_WITH_QUERY_REQUEST,
});

export const fetchGamesWithQuerySuccess = (games) => ({
  type: gamesTypes.FETCH_GAMES_WITH_QUERY_SUCCESS,
  payload: games,
});

export const fetchGamesWithQueryError = (error) => ({
  type: gamesTypes.FETCH_GAMES_WITH_QUERY_ERROR,
  payload: {
    error,
  },
});