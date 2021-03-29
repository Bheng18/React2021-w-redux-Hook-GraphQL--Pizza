import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripeButton.style.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IL8bfL0BUD8EfQe4YMUiG56pnevso2GjLUtOs1NlU13GGXl1yjVhJoLH25WdRn5pDZFm02evTHrFAJ1hKS8nLdy00TCwe4fxS';

const onToken = token => {
  axios({
    url: 'payment',
    method: 'POST',
    data: {
      amount: priceForStripe,
      token
    }
  }).then(response => {
    alert('Payment successful');
  }).catch(error => {
     console.log('Payment error: ', JSON.parse(error));
     alert('There was an issue with your payment. Please make sure you use the provided credit card');
  })
}

  return (
    <StripeCheckout
      label='Pay Now'
      name='Family Pizza House'
      billingAddress
      shippingAddress
      image={'https://hplussport.com/wp-content/uploads/2016/12/In-the-Kitchen-with-H-book-cover.png'}
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Not'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;