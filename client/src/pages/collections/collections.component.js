import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles';

// import './collections.styles.scss';

   const CollectionsPage = ({ collection }) => {
   const { title, items } = collection;
   return (
      <CollectionPageContainer className='collection-page'>
         <CollectionTitle className='title'>{title.toUpperCase()}</CollectionTitle>
         <CollectionItemsContainer className='items'>
         {
            items.map((item, keyid) => (
               <CollectionItem key={keyid} item={item} />
            ))
         }
         </CollectionItemsContainer>
      </CollectionPageContainer>
   );
}
const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionsPage);