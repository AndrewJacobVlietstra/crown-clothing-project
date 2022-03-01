import "./ShopPage.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { collectionsSelector } from "../../redux/shop/shop.selectors";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import ProductsPage from "../ProductsPage/ProductsPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const ShopPage = ({ collections }) => {
  const [hats, sneakers, jackets, womens, mens] = collections;
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/hats" element={<CollectionPage collection={hats} />} />
        <Route path="/sneakers" element={<CollectionPage collection={sneakers} />} />
        <Route path="/jackets" element={<CollectionPage collection={jackets} />} />
        <Route path="/womens" element={<CollectionPage collection={womens} />} />
        <Route path="/mens" element={<CollectionPage collection={mens} />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: collectionsSelector(state),
});

export default connect(mapStateToProps)(ShopPage);
