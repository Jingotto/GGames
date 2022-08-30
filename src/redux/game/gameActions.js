export const gameTypes = {
  FETCH_GAME_REQUEST: "FETCH_GAME_REQUEST",
  FETCH_GAME_SUCCESS: "FETCH_GAME_SUCCESS",
  FETCH_GAME_ERROR: "FETCH_GAME_ERROR",
};

export const fetchGameRequest = () => ({
  type: gameTypes.FETCH_GAME_REQUEST,
});

export const fetchGameSuccess = (game) => ({
  type: gameTypes.FETCH_GAME_SUCCESS,
  payload: game,
});

export const fetchGameError = (error) => ({
  type: gameTypes.FETCH_GAME_ERROR,
  payload: {
    error,
  },
});
