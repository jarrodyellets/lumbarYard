import React, {Component} from 'react';

class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {
      section: "address",
      customer: {}
    }
  }

  render(){
    return (
      <div className="checkoutWrapper">
        <div className="checkoutTitle">Checkout</div>
        <div className="checkoutMenu">
          <div className="menuAddress checkoutMenuItem checkoutActive">1. Address</div>
          <div className="menuPayment checkoutMenuItem">2. Payment</div>
          <div className="menuReview checkoutMenuItem">3. Review</div>
        </div>
        <div className="checkoutInnerWrapper">
          <div className="checkoutInfoWrapper">
            <div className="addressWrapper">
              <h3>Delivery Address</h3>
              <label htmlFor="name">Name</label>
              <input className="checkoutName checkoutInput" type="text" name="name" size="35" />
              <label htmlFor="street">Street</label>
              <input className="checkoutName checkoutInput" type="text" name="street" />
              <label htmlFor="city">City</label>
              <input className="checkoutName checkoutInput" type="text" name="city" />
              <label htmlFor="state">State</label>
              <input className="checkoutName checkoutInput" type="text" name="state" />
            </div>
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
            </div>
          </div>
          <div className="checkoutOrder">
            <h3 className="orderTitle">Order Summary</h3>
            <div className="orderInnerWrapper">
              <div className="orderSubTotal">
                <div className="orderSubTotalText">
                  <div className="subtotal">Merchandise ({this.props.quantity} {this.props.quantity == 0 || this.props.cart.length > 1 ? "items" : "item"}):</div>
                  <div>Shipping:</div>
                  <div className="taxes">Taxes (4.5%):</div>
                  <div className="orderTotal">Order Total: </div>
                </div>
                <div className="orderSubTotalPrice">
                  <div className="subtotal">{this.props.subTotal}</div>
                  <div>{this.props.shipping}</div>
                  <div className="taxes">{this.props.taxes}</div>
                  <div className="orderTotal">{this.props.grandTotal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;