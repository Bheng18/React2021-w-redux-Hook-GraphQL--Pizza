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
                {/* <Logo className='logo' /> */}
                
                <img src={'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-9/142070168_4965469276861771_4467183683439937407_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vnBgImexexEAX_NWZb4&_nc_ht=scontent.fmnl6-2.fna&oh=8598d86047b1ec210267d29b820bb8a8&oe=608C8270'}
                    style={{ width: '60px', borderRadius: '50%' }}
                    alt='Logo'
                />
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
