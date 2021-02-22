import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../../components/collection-item/collectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collections.styles.scss';

   const CollectionsPage = ({ collection }) => {
   const { title, items } = collection;

   return (
      <div className='collection-page'>
         <h2 className='title'>{title}</h2>
         <div className='items'>
         {
            items.map(item => (
               <CollectionItem key={item.id} item={item} />
            ))
         }
         </div>
      </div>
   );
}
const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionsPage);