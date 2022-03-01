import React from 'react';
import './ProductDisplay.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

const ProductDisplay = ({ item, addItem }) => {
  return (
    <div className='product-display'>
      <div className='column-1'>
        <div className='product-image-container'>
          <img className='product-image' src={item.imageUrl} />
        </div>
      </div>
      <div className='column-2'>
        <span onClick={() => window.history.back()} className='go-back-button'>&#10094; GO BACK</span>
        <h1 className='product-name'>{item.name} <span className='product-price'>{`$${item.price}`}</span></h1>
        <p className='product-description'>{item.description}</p>
        <CustomButton onClick={() => addItem(item)}>ADD ITEM TO CART</CustomButton>
      </div>
    </div>
  )
}

export default ProductDisplay;