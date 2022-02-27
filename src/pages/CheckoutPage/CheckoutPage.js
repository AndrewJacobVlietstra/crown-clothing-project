import React from "react";
import "./CheckoutPage.styles.scss";
import { connect } from "react-redux";
import {
  cartItemsSelector,
  cartTotalPriceSelector,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutPage = ({ cartItems, totalCartPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="product-header">Product</span>
        </div>
        <div className="header-block">
          <span className="description-header">Description</span>
        </div>
        <div className="header-block">
          <span className="quantity-header">Quantity</span>
        </div>
        <div className="header-block">
          <span className="price-header">Price</span>
        </div>
        <div className="header-block">
          <span className="remove-header">Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      {cartItems.length ? null : (
        <p className="empty-message">
          There are currently no items in your cart, head to the Shop to add
          some!
        </p>
      )}
      <div className="total">
        <span>{`TOTAL: $${totalCartPrice}`}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  totalCartPrice: cartTotalPriceSelector(state),
});

export default connect(mapStateToProps)(CheckoutPage);
