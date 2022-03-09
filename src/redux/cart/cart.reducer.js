import CartActionTypes from "./cart.action.types";
import {
  addItemToCartUtility,
  removeItemFromCartUtility,
  decrementItemQuantityUtility,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtility(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCartUtility(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: decrementItemQuantityUtility(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
