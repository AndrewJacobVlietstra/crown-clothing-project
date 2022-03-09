import React from "react";
import "./CollectionPage.styles.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { currentPathSelector } from "../../redux/path/path.selectors";

const CollectionPage = ({ collection, currentPath }) => {
  const { items } = collection;
  const navigate = useNavigate();
  return (
    <div className="collection-page">
      <h2 className="collection-title">
        <span
          className={currentPath.includes("/hats") ? "selected" : ""}
          onClick={() => navigate("/shop/hats")}
        >
          hats
        </span>
        <span
          className={currentPath.includes("/jackets") ? "selected" : ""}
          onClick={() => navigate("/shop/jackets")}
        >
          jackets
        </span>
        <span
          className={currentPath.includes("sneakers") ? "selected" : ""}
          onClick={() => navigate("/shop/sneakers")}
        >
          sneakers
        </span>
        <span
          className={currentPath.includes("/womens") ? "selected" : ""}
          onClick={() => navigate("/shop/womens")}
        >
          womens
        </span>
        <span
          className={currentPath.includes("/mens") ? "selected" : ""}
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

const mapStateToProps = state => ({
  currentPath: currentPathSelector(state)
});

export default connect(mapStateToProps)(CollectionPage);
