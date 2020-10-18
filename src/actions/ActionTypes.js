import { ADD_TO_BASKET, REMOVE_FORM_BASKET, SET_USER } from "./types";

export const addToBasket = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_BASKET,
    item,
  });
};

export const removeFormBasket = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FORM_BASKET,
    id,
  });
};

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    user,
  });
};
