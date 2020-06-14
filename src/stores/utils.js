export function createReducer(initialState, ...ons) {
  const map = new Map();
  for (let on of ons) {
    const type = on.type;
    if (map.has(type)) {
      const existingReducer = map.get(type);
      const newReducer = (state, action) =>
        on.reducer(existingReducer(state, action), action);
      map.set(type, newReducer);
    } else {
      map.set(type, on.reducer);
    }
  }

  return function (state = initialState, action) {
    const reducer = map.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}

export function on(...args) {
  const [type, reducer] = args;
  return { reducer, type };
}
