import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  SEARCH_RATING,
  EDIT_INPUT_HANDLER,
  EDIT_HANDLER,
  SAVE_EDIT,
  PATH_HANDLER,
  PATH_BACK
} from "./actionTypes";

export const addMovie = payload => {
  return { type: ADD_MOVIE, payload };
};

export const editMovie = payload => {
  return { type: EDIT_MOVIE, payload };
};

export const deleteMovie = payload => {
  return { type: DELETE_MOVIE, payload };
};

export const searchMovie = payload => {
  return { type: SEARCH_MOVIE, payload };
};
export const searchRating = payload => {
  return { type: SEARCH_RATING, payload };
};
export const editinputHandler = payload => {
  return { type: EDIT_INPUT_HANDLER, payload };
};

export const editHandler = index => {
  return { type: EDIT_HANDLER, index };
};

export const saveEdit = () => {
  return { type: SAVE_EDIT };
};
export const pathHandler = index => {
  return {
    type: PATH_HANDLER,
    index
  };
};

export const pathBack = () => {
  return {
    type: PATH_BACK
  };
};
