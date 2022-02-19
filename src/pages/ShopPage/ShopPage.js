import React, { Component } from "react";
import './ShopPage.styles.scss';

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "./ShopPageData";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    // console.log(collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
