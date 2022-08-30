import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import gamesReducer from "./games/gamesReducer";
import gameReducer from "./game/gameReducer";
// import gamesWithQueryReducer from "./searchResult/searchResultReducer";

const rootReducer = combineReducers({
  gamesReducer,
  gameReducer,
  // gamesWithQueryReducer,
});

const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
