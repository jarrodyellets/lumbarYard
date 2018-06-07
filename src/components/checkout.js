import React, {Component} from 'react';
import Address from './address';
import Payment from './payment';

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
            {(this.state.section == "address") && (<Address />)}
            {(this.state.section == "payment") && (<Payment />)}
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