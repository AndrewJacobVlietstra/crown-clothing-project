import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const cartDropdownHiddenSelector = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector], // These are dependencies, the function below will be run only when cartItems changes

  // Use a array reduce method on all cart items to calculate the total quantity of items in the cart
  // The total amount will be recalculated any time the cartItems change
  (cartItems) =>
    cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    )
);

export const cartTotalPriceSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((prevTotal, currentItem) => {
    return prevTotal + (currentItem.quantity * currentItem.price)
  }, 0)
);