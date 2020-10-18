import {
  ADD_TO_BASKET,
  REMOVE_FORM_BASKET,
  SET_USER,
} from "./../actions/types";

var initialState = {
  basket: [],
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FORM_BASKET:
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Error id");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
