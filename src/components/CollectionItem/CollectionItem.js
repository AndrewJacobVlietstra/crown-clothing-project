import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from 'react-redux';
import { addItemToCartAction } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  const navigate = useNavigate();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name" onClick={() => navigate(`/shop/products/${item.id}`)}>{name}</span>
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
