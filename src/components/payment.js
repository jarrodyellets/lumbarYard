import React from 'react';

const Payment = (props) => {
  return(
    <div className="paymentWrapper">
      <h3>Payment</h3>
      <form className="paymentForm" onSubmit={() => {props.handleSection("review")}}>
        <label htmlFor="cardType" >Card Type</label>
        <select className="checkoutInput" value={props.customer.cardType} autoComplete="cc-type" onChange={(e) => {props.handleCustomer(e, "cardType")}} >
          <option value="visa" >Visa</option>
          <option value="mastercard" >Mastercard</option>
          <option value="discover ">Discover</option>
          <option value="amercianExpress" >American Express</option>
          <option value="applePay" >Apple Pay</option>
          <option value="amazonPay" >Amazon Pay</option>
        </select>
        <label htmlFor="cardNumber">Card Number</label>
        <input className="checkoutInput" type="text" 
                                                      name="cardNumber"
                                                      value={props.customer.cardNumber}
                                                      autoComplete="cc-number"
                                                      onChange={(e) => {props.handleCustomer(e, "cardNumber")}} />
        <label htmlFor="cardName">Card Name</label>
        <input className="checkoutInput" type="text" 
                                                      name="cardName" 
                                                      value={props.customer.cardName} 
                                                      autoComplete="cc-name"
                                                      onChange={(e) => {props.handleCustomer(e, "cardName")}} />
        <label htmlFor="experation">Experation Date</label>
        <input className="checkoutInput" type="text" 
                                                      name="experation" 
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