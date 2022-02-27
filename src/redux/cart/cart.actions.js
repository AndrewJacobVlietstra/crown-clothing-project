import CartActionTypes from "./cart.action.types";

export const toggleCartDropdownAction = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItemToCartAction = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item
});

export const removeItemFromCartAction = (item) => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item
});