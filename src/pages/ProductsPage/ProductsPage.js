import React, { useEffect, useState } from 'react';
import './ProductsPage.styles.scss';
import { connect } from 'react-redux';
import { allShopItemsSelector } from '../../redux/shop/shop.selectors';
import { lengthOfShopItemsSelector } from '../../redux/shop/shop.selectors';
import { productIDSelector } from '../../redux/path/path.selectors';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import { useNavigate } from 'react-router-dom';

const ProductsPage = ({ allShopItems, allItemsLength, currentProductID }) => {
  const [itemToDisplay, setItemToDisplay] = useState({}); // track item to display in local state
  const navigate = useNavigate();

  // Any time the productID changes in the path, find the new matching product in the product list
  useEffect(() => {
    if (currentProductID > allItemsLength + 1 || currentProductID <= 0) navigate('/error');
    let matchingProduct = allShopItems.find((item) => item.id === currentProductID);
    setItemToDisplay({...itemToDisplay, ...matchingProduct}); // spread in the previous object, then overwrite it with the new matching object
  }, [currentProductID])

  return (
    <div className='products-page'>
      <div className='product-display'>
        <h1 className='product-display-title'>Product Display</h1>
        <ProductDisplay item={itemToDisplay} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  allShopItems: allShopItemsSelector(state),
  allItemsLength: lengthOfShopItemsSelector(state),
  currentProductID: productIDSelector(state)
});

export default connect(mapStateToProps)(ProductsPage);