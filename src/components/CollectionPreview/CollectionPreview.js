import React from "react";
import "./CollectionPreview.styles.scss";
import { Link } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ items, title, routeName }) => {
  return (
    <div className="collection-preview">
      <div className="link-container">
        <Link to={`/shop/${routeName}`} className="title">{title}</Link>
      </div>
      <div className="preview">
        {items
          .filter((item, index) => index <= 3)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
