import React from 'react';
import Cart from './cart';

const Checkout = (props) => {
  return (
    <div className="checkoutWrapper">
      <div className="checkoutTitle">Checkout</div>
      <div className="checkoutInnerWrapper">
        <div className="checkoutInfoWrapper">
          <div className="addressWrapper">
            <h3>Delivery Address</h3>
            <label htmlFor="name">Name</label>
            <input className="checkoutName checkoutInput" type="text" value="Elaine Benes" name="name" size="35" />
            <label htmlFor="street">Street</label>
            <input className="checkoutName checkoutInput" value="16 West 75th Street" name="street" />
            <label htmlFor="city">City</label>
            <input className="checkoutName checkoutInput" value="New York" name="city" />
            <label htmlFor="state">State</label>
            <input className="checkoutName checkoutInput" value="NY" name="state" />
          </div>
          <div className="paymentWrapper">
            <h3>Payment</h3>
            <label htmlFor="cardType">Card Type</label>
            <select className="checkoutInput" value="Visa">
              <option>Visa</option>
              <option>Mastercard</option>
              <option>Discover</option>
              <option>American Express</option>
              <option>Apple Pay</option>
              <option>Amazon Pay</option>
            </select>
            <label htmlFor="cardNumber">Card Number</label>
            <input className="checkoutName checkoutInput" value="0000 0000 0000 0000" name="cardNumber" />
            <label htmlFor="cardName">Card Name</label>
            <input className="checkoutName checkoutInput" value="Elaine Benes" name="cardName" />
            <label htmlFor="experation">Experation Date</label>
            <input className="checkoutName checkoutInput" value="03/2020" name="experation" />
            <label htmlFor="code">Security Code</label>
            <input className="checkoutName checkoutInput" value="213" name="code" />
          </div>
        </div>
        <div className="checkoutOrder">
          <div className="orderTitle">Order Summary</div>
          <div className="orderInnerWrapper">
            <div className="orderSubTotal">
              <div className="orderSubTotalText">
                <div className="subtotal">Merchandise ({props.quantity} {props.quantity == 0 || props.cart.length > 1 ? "items" : "item"}):</div>
                <div>Shipping:</div>
                <div className="taxes">Taxes (4.5%):</div>
                <div className="orderTotal">Order Total: </div>
              </div>
              <div className="orderSubTotalPrice">
                <div className="subtotal">{props.subTotal}</div>
                <div>{props.shipping}</div>
                <div className="taxes">{props.taxes}</div>
                <div className="orderTotal">{props.grandTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Checkout;