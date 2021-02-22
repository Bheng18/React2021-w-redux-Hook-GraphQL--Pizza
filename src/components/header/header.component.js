import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from '../../assets/olympicAward.svg';
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import Cart from "../cart/cart.component";
// import './header.style.scss';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
       <OptionContainer>
           <OptionLink to='/shop'>
              SHOP
           </OptionLink>
           <OptionLink to='/contact'>
              CONTACT
           </OptionLink>
           {
              currentUser ? (
              <OptionLink as='div' onClick={() => auth.signOut()} >SIGN OUT</OptionLink>
              ) : (
               <OptionLink to='/signIn'>
                  SIGN IN
               </OptionLink>
              )
           }
           <CartIcon />
       </OptionContainer>
       { hidden ? null : <Cart /> }
    </HeaderContainer>
);

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
