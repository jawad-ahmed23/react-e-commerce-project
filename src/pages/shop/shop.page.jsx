import React from "react";
import SHOP_DATA from "./shop.data.js.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = SHOP_DATA;
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPreviews }) => (
          <CollectionPreview key={id} {...otherCollectionPreviews} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
