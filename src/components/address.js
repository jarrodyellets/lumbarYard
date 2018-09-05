import React from 'react';
import PropTypes from 'prop-types';

const Address = (props) => {
  return(
    <div className="addressWrapper" aria-label="address">
      <h3>Delivery Address</h3>
      <form className="addressForm" onSubmit={(e) => {props.handleSection(e, "payment")}}>
        <label htmlFor="firstName">First Name</label>
        <input className="checkoutInput" type="text" 
                                                      name="firstName" 
                                                      required
                                                      value={props.customer.firstName}
                                                      autoComplete="name"
                                                      onChange={(e) => {props.handleCustomer(e, "firstName")}} />
        <label htmlFor="lastName">Last Name</label>
        <input className="checkoutInput" type="text" 
                                                      name="lastName"
                                                      required 
                                                      value={props.customer.lastName}
                                                      autoComplete="name"
                                                      onChange={(e) => {props.handleCustomer(e, "lastName")}} />
        <label htmlFor="street">Street</label>
        <input className="checkoutInput" type="text" 
                                                      name="street" 
                                                      required
                                                      value={props.customer.street}
                                                      autoComplete="address-level1"
                                                      onChange={(e) => {props.handleCustomer(e, "street")}} />
        <label htmlFor="city">City</label>
        <input className="checkoutInput" type="text" 
                                                      name="city" 
                                                      required
                                                      value={props.customer.city}
                                                      autoComplete="address-level2"
                                                      onChange={(e) => {props.handleCustomer(e, "city")}} />
        <label htmlFor="state">State</label>
        <input className="checkoutInput" type="text" 
                                                      name="state"
                                                      required 
                                                      value={props.customer.state}
                                                      autoComplete="address-level2"
                                                      onChange={(e) => {props.handleCustomer(e, "state")}} />
        <label htmlFor="zip">Zip Code</label>
        <input className="checkoutInput" type="text" 
                                                      name="zip" 
                                                      required
                                                      value={props.customer.zip}
                                                      autoComplete="postal-code"
                                                      onChange={(e) => {props.handleCustomer(e, "zip")}} />
        <div className="paymentButtons">
          <button className="checkoutButton" type="submit">Next</button>
        </div>
      </form>
    </div>
    )
}

Address.propTypes = {
  customer: PropTypes.object
}

export default Address;