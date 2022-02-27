import React from 'react';
import './CheckoutPage.styles.scss';
import { connect } from 'react-redux'
import { cartItemsSelector, cartTotalPriceSelector } from "../../redux/cart/cart.selectors";

const CheckoutPage = ({cartItems, totalCartPrice}) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(item => item.name)}
      <div>
        <span>{`TOTAL: $${totalCartPrice}`}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: cartItemsSelector(state),
  totalCartPrice: cartTotalPriceSelector(state)
});

export default connect(mapStateToProps)(CheckoutPage);