import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
     <ShoppingIcon className='shopping-icon' />
     <span className='item-count'>{itemCount}</span>
  </div>
);

//disstructure state
// const mapStateToProps = ({ cart: { cartItems } }) => ({
  //const array1 = [1, 2, 3, 4];
  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // 1 + 2 + 3 + 4
  //console.log(array1.reduce(reducer));
  // expected output: 10
  // itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// })

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);