import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // Use a array reduce method on all cart items to calculate the total quantity of items in the cart
  // The total amount will be recalculated any time the cartItems change
  (cartItems) =>
    cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    )
);
