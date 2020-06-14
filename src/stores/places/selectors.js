import { createSelector } from "reselect";

const PlacesSelector = (state) => state.places;

const list = createSelector(PlacesSelector, (places) => places.entities);

export const PlacesSelectors = {
  list,
};

export default PlacesSelectors;
