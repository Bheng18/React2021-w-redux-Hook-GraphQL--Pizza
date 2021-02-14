import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../components/preview-collections/preview-collection.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
   
export default connect(mapStateToProps)(ShopPage);