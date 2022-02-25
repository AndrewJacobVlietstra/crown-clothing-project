import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = (props) => {
  const { item } = props;
  // console.log(item);
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
