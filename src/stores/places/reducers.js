import { PlacesActions } from "./actions";
import { on, createReducer } from "../utils";

const initialState = {
  entities: [],
};

const removePlaceReducer = (state, action) => {
  return {
    ...state,
    entities: state.entities.filter((place) => place.id !== action.payload.id),
  };
};

const addPlaceReducer = (state, action) => {
  return { ...state, entities: [...state.entities, action.payload] };
};

const updatePlaceReducer = (state, action) => {
  return {
    ...state,
    entities: state.entities.map((place) =>
      place.id === action.payload.id ? action.payload : place
    ),
  };
};

const loadPlacesReducer = (state, action) => {
  return { ...state, entities: action.payload };
};

const reducer = createReducer(
  initialState,
  on(PlacesActions.LOAD_SUCCESS, loadPlacesReducer),
  on(PlacesActions.ADD, addPlaceReducer),
  on(PlacesActions.DELETE, removePlaceReducer),
  on(PlacesActions.UPDATE, updatePlaceReducer)
);

export const PlacesState = {
  reducer,
};

export default PlacesState;
