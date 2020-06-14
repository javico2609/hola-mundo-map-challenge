import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { PlacesState } from "./places";
import { LocalDB } from "../services";

export const rootReducer = combineReducers({
  places: PlacesState.reducer,
});

const rootStore = createStore(
  rootReducer,
  LocalDB.load(),
  composeWithDevTools(applyMiddleware(logger))
);

// :TODO use middleware
rootStore.subscribe((_) => {
  LocalDB.save(rootStore.getState());
});

export default rootStore;
