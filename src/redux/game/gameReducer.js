import { gameTypes } from "./gameActions";

const initialState = { game: {} };

const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case gameTypes.FETCH_GAME_SUCCESS:
      return { ...state, game: {...state.game, ...payload} };

    default:
      return state;
  }
};

export default gamesReducer;
