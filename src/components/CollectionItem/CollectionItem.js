import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from 'react-redux';
import { addItemToCartAction } from "../../redux/cart/cart.actions";

const CollectionItem = ({addItem, item}) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCartAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
