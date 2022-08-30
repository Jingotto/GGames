// import uniqBy from 'lodash/uniqBy'
import { gamesTypes } from "./gamesAction";

const initialState = { games: [], gamesWithQuery: [] };

const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case gamesTypes.FETCH_GAMES_SUCCESS:
      return { ...state, games: [...state.games, ...payload] };

    case gamesTypes.FETCH_GAMES_WITH_QUERY_SUCCESS:
      // const array = [...payload];
      // const unique = uniqBy(array, 'id');
      return { ...state, gamesWithQuery: [...payload] };

    // case gamesTypes.FETCH_GAMES_REQUEST:
    //   return { ...state};
      
    // case gamesTypes.FETCH_GAMES_ERROR:
    //   return { ...state};

    default:
      return state;
  }
};

export default gamesReducer;
