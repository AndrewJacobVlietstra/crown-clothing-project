import React from "react";
import './CartDropdown.styles.scss';
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  const totalCartPrice = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + (currentValue.price * currentValue.quantity);
  }, 0);

  return (
    <div className="cart-dropdown">
      {totalCartPrice ? <span className="total">{`Total Cost $${totalCartPrice}`}</span> : null}
      <div className="cart-items">
        {cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);