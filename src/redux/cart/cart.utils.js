export const addItemToCartUtility = (cartItems, cartItemToAdd) => {
  // Try and find if the item being added already exists in the cart, if not, the find method returns undefined, skipping the if statement below
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If the cart item being added already exists we simply return a new array by mapping through all cart items
  // find the cart item where it matches the one being added and return it as a new object with all its current values spread in
  // and then update the quantity property to be incremented by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If the item doesnt already exist in our cart then we want to add it in but now with a quantity property to track quantity of that item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
