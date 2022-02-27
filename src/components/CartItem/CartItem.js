import React from "react";
import "./CartItem.styles.scss";
import { connect } from "react-redux";
import {
  addItemToCartAction,
  decrementItemQuantityAction,
} from "../../redux/cart/cart.actions";

const CartItem = ({ item, decrementItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x {`$${price}`}</span>
        <span className="item-button-container">
          <button className="item-button" onClick={() => decrementItem(item)}>
            -
          </button>{" "}
          <button className="item-button" onClick={() => addItem(item)}>
            +
          </button>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  decrementItem: (item) => dispatch(decrementItemQuantityAction(item)),
  addItem: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
