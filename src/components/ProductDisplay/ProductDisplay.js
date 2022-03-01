import React from 'react';
import './ProductDisplay.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

const ProductDisplay = ({ item, addItem }) => {
  return (
    <div className='product-display'>
      <div className='column-1'>
        <h1>{item.title}</h1>
        <div className='product-image-container'>
          <img className='product-image' src={item.imageUrl} />
        </div>
        <span className='product-name'>{item.name}</span>
        <span className='product-price'>{item.price}</span>
      </div>
      <div className='column-2'>
        <p className='product-description'>{item.description}</p>
        <CustomButton onClick={() => addItem(item)}>ADD ITEM TO CART</CustomButton>
      </div>
    </div>
  )
}

export default ProductDisplay;