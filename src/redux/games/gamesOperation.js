import axios from "axios";
import {
  fetchGamesRequest,
  fetchGamesWithQueryRequest,
  fetchGamesSuccess,
  fetchGamesWithQuerySuccess,
  fetchGamesError,
  fetchGamesWithQueryError,
} from "./gamesAction";

const BASE_URL = "http://localhost:3000";

let isLoading = false;

export const getAllGamesThunk = () => async (dispatch) => {
  dispatch(fetchGamesRequest());

  try {
    if (!isLoading) {
      const response = await axios.get(`${BASE_URL}/games`);
      dispatch(fetchGamesSuccess(response.data));
      isLoading = true;
    }
  } catch (error) {
    console.error("error:", error);
    dispatch(fetchGamesError(error));
  }
};

export const getGamesWithQueryThunk = (queryString) => async (dispatch) => {
  dispatch(fetchGamesWithQueryRequest());

  try {
    if (queryString) {
      const response = await axios.get(`${BASE_URL}/games?q=${queryString}`);
      console.log(response)
      // const response = await localInstance.get(endpoints.GET_GAMES(queryString));
      dispatch(fetchGamesWithQuerySuccess(response.data));
    }
  } catch (error) {
    console.error("error:", error);
    dispatch(fetchGamesWithQueryError(error));
  }
};
