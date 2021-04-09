import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer, SizeContainer, SizeName, MediumStyle, LargeStyle } from './collection-item.styles';

// import './collectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, image, medium, large, mediumPrice, largePrice } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={image} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <SizeContainer>
           <MediumStyle>
              <SizeName>{medium}</SizeName>
              <PriceContainer>{mediumPrice ? <span>&#x20B1;{mediumPrice}</span> : ''}</PriceContainer>
           </MediumStyle>
           <LargeStyle>
              <SizeName>{large}</SizeName>
              <PriceContainer>{largePrice ? <span>&#x20B1;{largePrice}</span> : ''}</PriceContainer>
           </LargeStyle>
        </SizeContainer>
      </CollectionFooterContainer>
      {/* <AddButton onClick={() => addItem(item)} inverted>Add to Cart</AddButton> */}
    </CollectionItemContainer>
)};

// const mapStateToProps = (state) => ({
//    item: state
// });

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);