import React from "react";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";
import { cartTotalPriceSelector } from "../../redux/cart/cart.selectors";
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ cartItems, totalCartPrice, toggleCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
    return toggleCart();
  }

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
      {cartItems.length ? <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  totalCartPrice: cartTotalPriceSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartDropdownAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
