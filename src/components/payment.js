import React from 'react';

const Payment = (props) => {
  return(
    <div className="paymentWrapper">
      <h3>Payment</h3>
      <label htmlFor="cardType">Card Type</label>
      <select className="checkoutInput">
        <option>Visa</option>
        <option>Mastercard</option>
        <option>Discover</option>
        <option>American Express</option>
        <option>Apple Pay</option>
        <option>Amazon Pay</option>
      </select>
      <label htmlFor="cardNumber">Card Number</label>
      <input className="checkoutName checkoutInput" type="text" name="cardNumber" />
      <label htmlFor="cardName">Card Name</label>
      <input className="checkoutName checkoutInput" type="text" name="cardName" />
      <label htmlFor="experation">Experation Date</label>
      <input className="checkoutName checkoutInput" type="text" name="experation" />
      <label htmlFor="code">Security Code</label>
      <input className="checkoutName checkoutInput" type="text" name="code" />
      <button className="checkoutButton" type="submit" value="submit">Next</button>
    </div>
  )
}

export default Payment;