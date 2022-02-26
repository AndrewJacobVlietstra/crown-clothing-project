import React from "react";
import './CartDropdown.styles.scss';
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  const totalCartPrice = cartItems.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity), 0);

  return (
    <div className="cart-dropdown">
      {totalCartPrice ? <span className="total">{`Total $${totalCartPrice}`}</span> : null}
      <div className="cart-items">
        {cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);