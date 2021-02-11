import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/olympicAward.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cartIcon.component";
import Cart from "../cart/cart.component";
import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
       <div className='options'>
           <Link className='option' to='/shop'>
              SHOP
           </Link>
           <Link className='option' to='/contact'>
              CONTACT
           </Link>
           {
              currentUser ? (
              <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
              ) : (
               <Link className='option' to='/signIn'>
                  SIGN IN
               </Link>
              )
           }
           <CartIcon />
       </div>
       { hidden ? null : <Cart /> }
    </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
