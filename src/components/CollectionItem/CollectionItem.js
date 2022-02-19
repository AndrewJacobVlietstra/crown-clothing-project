import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = (props) => {
  const { item } = props;
  // console.log(item);
  const {id, name, imageUrl, price} = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
