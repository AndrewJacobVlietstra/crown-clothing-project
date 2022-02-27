import React from "react";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";
import { cartTotalPriceSelector } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ cartItems, totalCartPrice }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      {totalCartPrice ? (
        <span className="total">{`Total: $${totalCartPrice}`}</span>
      ) : null}
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <p className="empty-message">Your cart is currently empty!</p>
      )}
      {cartItems.length ? <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  totalCartPrice: cartTotalPriceSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);
