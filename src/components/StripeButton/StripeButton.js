import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KbQgCA76oB8Xw2g0gJMoYoe5bQ2mSpRIF6Fafvz1Xc3cHkGmWnZ373YMXAECSCfsbE8pTVu86wzWE78XoRdXcUH00BTXuj1ac';

  const onToken = token => {
    console.log(token);
    clearCart();
    setTimeout(() => {
      alert(`Payment of $${price} was Successful`);
    }, 1000);
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}.`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeButton;