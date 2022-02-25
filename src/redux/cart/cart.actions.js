import CartActionTypes from "./cart.action.types";

export const toggleCartDropdownAction = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItemToCartAction = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item
});