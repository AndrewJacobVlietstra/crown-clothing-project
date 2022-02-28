import React from "react";
import "./CollectionPage.styles.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useNavigate } from "react-router-dom";

const CollectionPage = ({ collection }) => {
  const { items } = collection;
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  return (
    <div className="collection-page">
      <h2 className="collection-title">
        <span
          className={currentPath === "/shop/hats" ? "selected" : ""}
          onClick={() => navigate("/shop/hats")}
        >
          hats
        </span>
        <span
          className={currentPath === "/shop/jackets" ? "selected" : ""}
          onClick={() => navigate("/shop/jackets")}
        >
          jackets
        </span>
        <span
          className={currentPath === "/shop/sneakers" ? "selected" : ""}
          onClick={() => navigate("/shop/sneakers")}
        >
          sneakers
        </span>
        <span
          className={currentPath === "/shop/womens" ? "selected" : ""}
          onClick={() => navigate("/shop/womens")}
        >
          womens
        </span>
        <span
          className={currentPath === "/shop/mens" ? "selected" : ""}
          onClick={() => navigate("/shop/mens")}
        >
          mens
        </span>
      </h2>
      <div className="collection-items">
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
