import React from "react";
import "./CollectionsOverview.styles.scss";
import { connect } from "react-redux";
import { collectionsSelector } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      <h1 className="collection-overview-title">Category Previews</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  collections: collectionsSelector(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
