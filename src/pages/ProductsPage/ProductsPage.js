import React, { useEffect, useState } from 'react';
import './ProductsPage.styles.scss';
import { connect } from 'react-redux';
import { allShopItemsSelector } from '../../redux/shop/shop.selectors';
import { lengthOfShopItemsSelector } from '../../redux/shop/shop.selectors';
import { productIDSelector } from '../../redux/path/path.selectors';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import { addItemToCartAction } from '../../redux/cart/cart.actions';
import { useNavigate } from 'react-router-dom';

const ProductsPage = ({ allShopItems, allItemsLength, currentProductID, addItem }) => {
  const [itemToDisplay, setItemToDisplay] = useState({}); // track item to display in local state
  const navigate = useNavigate();

  // Any time the productID changes in the url path run the following code
  useEffect(() => {
    if (currentProductID > allItemsLength + 1 || currentProductID <= 0) navigate('/error'); // if product ID doesnt exist navigate user to error page
    let matchingProduct = allShopItems.find((item) => item.id === currentProductID); // find matching product in array of all shopItems using the ProductID from the url path
    setItemToDisplay({...itemToDisplay, ...matchingProduct}); // return a new object, spread in the previous object, then overwrite it with the new matching object properties
  }, [currentProductID])

  return (
    <div className='products-page'>
      <div className='products-display'>
        <h1 className='products-display-title'>Product Display</h1>
        <ProductDisplay item={itemToDisplay} addItem={addItem} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  allShopItems: allShopItemsSelector(state),
  allItemsLength: lengthOfShopItemsSelector(state),
  currentProductID: productIDSelector(state)
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCartAction(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);