import { MainConfiguration } from "../configurations";

const empty = { places: { entities: [] } };

export const save = (state) => {
  try {
    localStorage.setItem(MainConfiguration.SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    return empty;
  }
};

export const load = () => {
  let loadedState = localStorage.getItem(MainConfiguration.SAVE_KEY);

  if (loadedState) {
    return JSON.parse(loadedState);
  }

  return empty;
};
