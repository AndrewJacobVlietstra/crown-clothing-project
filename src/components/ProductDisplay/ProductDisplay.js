import React from 'react';
import './ProductDisplay.styles.scss';

const ProductDisplay = ({ item }) => {
  return (
    <div className='product-display'>
      <div>
        <h1>{item.title}</h1>
        <div className='product-image-container'>
          <img className='product-image' src={item.imageUrl} />
        </div>
        <span className='product-name'>{item.name}</span>
        <span className='product-price'>{item.price}</span>
      </div>
    </div>
  )
}

export default ProductDisplay;