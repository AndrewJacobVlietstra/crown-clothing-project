import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCartAction,
  decrementItemQuantityAction,
  addItemToCartAction,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, addItem, decreaseItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span className="quantity-button" onClick={() => decreaseItem(item)}>
          &#10094;
        </span>
        <span className="quantity-value">{item.quantity}</span>
        <span className="quantity-button" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">{`$${item.price}`}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCartAction(item)),
  addItem: (item) => dispatch(addItemToCartAction(item)),
  decreaseItem: (item) => dispatch(decrementItemQuantityAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
