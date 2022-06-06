import { createContext } from "react";

export const ReducerContext = createContext([{}, () => { }]);

export const initState = {
  favList: [],
  firebaseApp: {}
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "addToFavourite": state = handleAdd(state, payload);
      break;
    case "removeFromFavourite": state = handleRemove(state, payload);
      break;
    case "setFavList": state = { ...initState, favList: payload.favList };
      break;
    case "setApp": state = { ...initState, firebaseApp: payload.app };
      break;
    case "reset": state = { ...initState };
      break;
    default: console.error(`Incorrect action type ${type}`);
  }
  return state;
};

const handleAdd = (state, payload) => {
  if (!state.favList.find(student => student.id === payload.id)) {
    state = { ...state, favList: [...state.favList, payload] };
  } else {
    console.log("Student jest już w ulubionych");
  }
  return state;
};

const handleRemove = (state, payload) => {
  const toDelete = state.favList.find(student => student.id === payload.id);
  if (toDelete) {
    state = { ...state, favList: state.favList.filter(el => el.id !== toDelete.id) };
  } else {
    console.log("Studenta nie ma w ulubionych");
  }
  return state;
};