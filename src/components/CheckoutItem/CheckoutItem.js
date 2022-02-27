import React from 'react';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ item }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'> <span>&#10094;</span> {item.quantity} <span>&#10095;</span> </span>
      <span className='price'>{`$${item.price}`}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;