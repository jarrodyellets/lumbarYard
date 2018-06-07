import React from 'react';

const Checkout = (props) => {
  return (
    <div className="checkoutWrapper">
      <div className="checkoutInfoWrapper">
        <h3>Delivery Address</h3>
        <label for="name">Name</label>
        <input className="checkoutName checkcoutInput" value="Elaine Benes" name="name" />
        <label for="street">Street</label>
        <input className="checkoutName checkcoutInput" value="16 West 75th Street" name="street" />
        <label for="city">City</label>
        <input className="checkoutName checkcoutInput" value="New York" name="city" />
        <label for="state">State</label>
        <input className="checkoutName checkcoutInput" value="NY" name="state" />
        <label for="cardType">Card Type</label>
        <select value="Visa">
          <option>Visa</option>
          <option>Mastercard</option>
          <option>Discover</option>
          <option>American Express</option>
          <option>Apple Pay</option>
          <option>Amazon Pay</option>
        </select>
        <label for="cardNumber">Card Number</label>
        <input className="checkoutName checkcoutInput" value="0000 0000 0000 0000" name="cardNumber" />
        <label for="cardName">Card Name</label>
        <input className="checkoutName checkcoutInput" value="Elaine Benes" name="cardName" />
        <label for="experation">Experation Date</label>
        <input className="checkoutName checkcoutInput" value="03/2020" name="experation" />
        <label for="code">Security Code</label>
        <input className="checkoutName checkcoutInput" value="213" name="code" />
      </div>
    </div>
    )
}

export default Checkout;