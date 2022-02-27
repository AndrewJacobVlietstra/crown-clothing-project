import React from "react";
import "./CartItem.styles.scss";
import { connect } from "react-redux";
import {
  addItemToCartAction,
  removeItemFromCartAction,
} from "../../redux/cart/cart.actions";

const CartItem = ({ item, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {`$${price}`}{" "}
          <button className="item-button" onClick={() => removeItem(item)}>
            -1
          </button>{" "}
          <button className="item-button" onClick={() => addItem(item)}>
            +1
          </button>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCartAction(item)),
  addItem: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
