import React from 'react';
import PropTypes from 'prop-types';
import Address from './address';
import Payment from './payment';
import Review from './review';

const Checkout = (props) => {
  return (
    <div className="checkoutWrapper" aria-label="checkout">
      <div className="checkoutTitle">Checkout</div>
      <div className="checkoutMenu">
        <div className={props.section == "address" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"} >1. Address</div>
        <div className={props.section == "payment" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"}>2. Payment</div>
        <div className={props.section == "review" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"}>3. Review</div>
      </div>
      <div className="checkoutInnerWrapper">
        <div className="checkoutOrder">
          <h3 className="orderTitle">Order Summary</h3>
          <div className="orderInnerWrapper">
            <div className="orderSubTotal">
              <div className="orderSubTotalText">
                <div className="merch">Merchandise ({props.quantity} {props.quantity == 0 || props.quantity > 1 ? "items" : "item"}):</div>
                <div>Shipping:</div>
                <div className="taxes">Taxes (4.5%):</div>
                <div className="orderTotal">Order Total: </div>
              </div>
              <div className="orderSubTotalPrice">
                <div className="merch">{props.subTotal}</div>
                <div>{props.shipping}</div>
                <div className="taxes">{props.taxes}</div>
                <div className="orderTotal">{props.grandTotal}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkoutInfoWrapper">
          {(props.section == "address") && (<Address handleSection={props.handleSection} 
                                                          handleCustomer={props.handleCustomer} 
                                                          customer={props.customer} />)}
          {(props.section == "payment") && (<Payment handleSection={props.handleSection} 
                                                          handleCustomer={props.handleCustomer}
                                                          customer={props.customer} />)}
          {(props.section == "review") && (<Review customer={props.customer} />)}
        </div>
      </div>
      <div className="paymentButtons">
        {(props.section == "review") && (<button className="checkoutButton" onClick={(e) => {props.handleSection(e, "payment")}}>Back</button>)}
        {(props.section == "review") && (<button className="purchaseButton checkoutButton" 
                                                 onClick={(e) => {props.handlePage("thanks"); 
                                                                props.handlePurchase(); 
                                                                props.handleSection(e, "address")}}>Complete Purchase</button>)}
      </div>
    </div>
  )
}

Checkout.propTypes = {
  section: PropTypes.string,
  quantity: PropTypes.number,
  cart: PropTypes.array,
  subTotal: PropTypes.string,
  shipping: PropTypes.string,
  taxes: PropTypes.string,
  grandTotal: PropTypes.string,
  handleSection: PropTypes.func,
  handleCustomer: PropTypes.func,
  customer: PropTypes.object,
  handlePage: PropTypes.func,
  handlePurchase: PropTypes.func
}

export default Checkout;