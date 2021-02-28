import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from '../../assets/olympicAward.svg';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import Cart from "../cart/cart.component";
// import './header.style.scss';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden, signOut }) => (
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
              <OptionLink as='div' onClick={signOut} >SIGN OUT</OptionLink>
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
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
