import React, { useEffect } from 'react';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInsignUp from './pages/signInSignUp/signInSignUp.component';

import { GlobalStyle } from './global.styles';

import { connect } from 'react-redux';

import CheckoutPage from './pages/checkout/checkout.components';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import ContactPage from './pages/contact/contactPage';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
             exact 
             path='/signIn' 
             render={() => currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInsignUp />
              )
             }
          />
        </Switch>
      </div>
    );

}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
