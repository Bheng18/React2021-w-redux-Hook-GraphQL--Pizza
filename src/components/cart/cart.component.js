import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cartItem/cartItem.component";
import CustomButton from "../customButton/customButton.component";

import './cart.styles.scss';

const Cart = ({ cartItems }) => (
  <div className='cart'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
        )}
      </div>
      
      <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// });

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(Cart);