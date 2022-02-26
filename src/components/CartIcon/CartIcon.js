import React from 'react';
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdownAction } from '../../redux/cart/cart.actions';

const CartIcon = ({ cartItems, toggleCartDropdown }) => {
  // Use a array reduce method on all cart items to calculate the total quantity of items in the cart
  // The total amount will be recalculated any time the cartItems change
  const totalCartItems = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity;
  }, 0);

  console.log(totalCartItems);

  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItems}</span>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdownAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);