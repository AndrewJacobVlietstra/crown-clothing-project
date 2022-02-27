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


// Just remove the item from cartItems array regardless of quantity
export const removeItemFromCartUtility = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // filter the cartItems array and only return the items that arent equal to the one we're trying to remove
  if (existingCartItem.id === cartItemToRemove.id) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  // If somehow the item does not exist just return all the current cartItems
  return [...cartItems];
};


// Decrease quantity of selected item, if quantity is 1 then remove it from cartItems array
export const decrementItemQuantityUtility = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // If the quantity is already 1 and we decrement the item by 1 we dont want it to show in the cart as zero, or worse as negative numbers
  // so we will filter the cartItems array and only return the items that arent equal to the one we're trying to remove
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  // If the item exists but has quantity higher than 1, just reduce the quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  // If somehow the item does not exist just return all the current cartItems
  return [...cartItems];
};
