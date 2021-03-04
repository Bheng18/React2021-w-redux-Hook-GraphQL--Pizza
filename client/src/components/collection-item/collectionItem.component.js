import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from './collection-item.styles';

// import './collectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, image, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={image} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>PHP{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>Add to Cart</AddButton>
    </CollectionItemContainer>
)};

// const mapStateToProps = (state) => ({
//    item: state
// });

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);