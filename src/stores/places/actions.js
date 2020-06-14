import { v4 } from "node-uuid";

const LOAD = "PLACES:LOAD";
const LOAD_SUCCESS = "PLACES:LOAD:SUCCESS";
const ADD = "PLACES:ADD";
const DELETE = "PLACES:DELETE";
const UPDATE = "PLACES:UPDATE";

export const load = () => ({
  type: LOAD,
});

export const loadSuccess = (places) => ({
  type: LOAD_SUCCESS,
  payload: places,
});

export const add = (place) => ({
  type: ADD,
  payload: { ...place, id: v4() },
});

export const remove = (place) => ({
  type: DELETE,
  payload: place,
});

export const update = (place) => ({
  type: UPDATE,
  payload: place,
});

export const PlacesActions = {
  load,
  loadSuccess,
  add,
  remove,
  update,
  LOAD,
  LOAD_SUCCESS,
  ADD,
  DELETE,
  UPDATE,
};

export default PlacesActions;
