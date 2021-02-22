import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import WithSpinner from "../../components/withSpinner/withSpinner.component";
import { fetchCollectionsStart, updateCollections } from "../../redux/shop/shop.actions";
import { selectCollectionIsFetching, selectCollectionIsLoaded } from "../../redux/shop/shop.selectors";
import CollectionsPage from "../collections/collections.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component{

    componentDidMount() {
      const { fetchCollectionsStart } = this.props;
      fetchCollectionsStart();
    }

    render(){
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} />
               <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectCollectionIsFetching,
    isCollectionsLoaded: selectCollectionIsLoaded
});

const mapDispatchToProps = dispatch => ({
//    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap)) 
fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);