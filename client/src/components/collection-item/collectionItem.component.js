import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../customButton/customButton.component';

import './collectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, image, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{
          backgroundImage: `url(${image})`
      }} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
)};

// const mapStateToProps = (state) => ({
//    item: state
// });

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);