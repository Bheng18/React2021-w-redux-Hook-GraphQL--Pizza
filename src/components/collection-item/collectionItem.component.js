import React from 'react';

import './collectionItem.styles.scss';

const CollectionItem = ({ id, name, image, price }) => (
    <div className='collection-item'>
      <div className='image' style={{
          backgroundImage: `url(${image})`
      }} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

    </div>
);

export default CollectionItem;