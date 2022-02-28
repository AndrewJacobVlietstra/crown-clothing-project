import React from "react";
import './ShopPage.styles.scss';

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import { collectionsSelector } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = state => ({
  collections: collectionsSelector(state)
});
export default connect(mapStateToProps)(ShopPage);
