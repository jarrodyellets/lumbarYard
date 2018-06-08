import React from 'react';

const Payment = (props) => {
  return(
    <div className="paymentWrapper">
      <h3>Payment</h3>
      <form className="paymentForm" onSubmit={() => {props.handleSection("review")}}>
        <label htmlFor="cardType" >Card Type</label>
        <select className="checkoutInput" value={props.customer.cardType} autoComplete="cc-type" onChange={(e) => {props.handleCustomer(e, "cardType")}} >
          <option value="Visa" >Visa</option>
          <option value="Mastercard" >Mastercard</option>
          <option value="Discover ">Discover</option>
          <option value="Amercian Express" >American Express</option>
          <option value="Apple Pay" >Apple Pay</option>
          <option value="Amazon Pay" >Amazon Pay</option>
        </select>
        <label htmlFor="cardNumber">Card Number</label>
        <input className="checkoutInput" type="text" 
                                                      name="cardNumber"
                                                      value={props.customer.cardNumber}
                                                      autoComplete="cc-number"
                                                      onChange={(e) => {props.handleCustomer(e, "cardNumber")}} />
        <label htmlFor="cardName">Name on Card</label>
        <input className="checkoutInput" type="text" 
                                                      name="cardName" 
                                                      value={props.customer.cardName} 
                                                      autoComplete="cc-name"
                                                      onChange={(e) => {props.handleCustomer(e, "cardName")}} />
        <label htmlFor="experation">Expiration Date</label>
        <input className="checkoutInput" type="text" 
                                                      name="expiration" 
                                                      value={props.customer.exDate}
                                                      autoComplete="cc-exp"
                                                      onChange={(e) => {props.handleCustomer(e, "exDate")}} />
        <label htmlFor="code">Security Code</label>
        <input className="checkoutInput" type="text" 
                                                      name="code" 
                                                      value={props.customer.code}
                                                      autoComplete="cc-csc"
                                                      onChange={(e) => {props.handleCustomer(e, "code")}} />
        <button className="checkoutButton" type="submit">Next</button>
      </form>
    </div>
  )
}

export default Payment;