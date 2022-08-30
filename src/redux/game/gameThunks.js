import axios from "axios";
import {
  fetchGameRequest,
  fetchGameSuccess,
  fetchGameError,
} from "./gameActions";

const BASE_URL = "http://localhost:3000";

export const getGameById = (id) => async (dispatch) => {
  dispatch(fetchGameRequest());

  try {
    const response = await axios.get(`${BASE_URL}/games/${id}`);
    dispatch(fetchGameSuccess(response.data));
  } catch (error) {
    console.error("error:", error);
    dispatch(fetchGameError(error));
  }
};

// export const getGameByName = (name) => async (dispatch) => {
//   dispatch(fetchGameRequest());

//   try {
//     const response = await axios.get(`${BASE_URL}/games?name=${name}`);
//     response.data.map((resp) => dispatch(fetchGameSuccess(resp)));
//   } catch (error) {
//     console.error("error:", error);
//     dispatch(fetchGameError(error));
//   }
// };
