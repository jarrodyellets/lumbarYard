import React from 'react';

const Address = (props) => {
  return(
    <div className="addressWrapper">
      <h3>Delivery Address</h3>
      <form className="addressForm" onSubmit={() => {props.handleSection("payment")}}>
        <label htmlFor="firstName">First Name</label>
        <input className="checkoutInput" type="text" 
                                                      name="firstName" 
                                                      value={props.customer.name}
                                                      autoComplete="name"
                                                      onChange={(e) => {props.handleCustomer(e, "firstName")}} />
        <label htmlFor="lastName">Last Name</label>
        <input className="checkoutInput" type="text" 
                                                      name="lastName" 
                                                      value={props.customer.name}
                                                      autoComplete="name"
                                                      onChange={(e) => {props.handleCustomer(e, "lastName")}} />
        <label htmlFor="street">Street</label>
        <input className="checkoutInput" type="text" 
                                                      name="street" 
                                                      value={props.customer.street}
                                                      autoComplete="address-level1"
                                                      onChange={(e) => {props.handleCustomer(e, "street")}} />
        <label htmlFor="city">City</label>
        <input className="checkoutInput" type="text" 
                                                      name="city" 
                                                      value={props.customer.city}
                                                      autoComplete="address-level2"
                                                      onChange={(e) => {props.handleCustomer(e, "city")}} />
        <label htmlFor="state">State</label>
        <input className="checkoutInput" type="text" 
                                                      name="state" 
                                                      value={props.customer.state}
                                                      autoComplete="address-level2"
                                                      onChange={(e) => {props.handleCustomer(e, "state")}} />
        <label htmlFor="zip">Zip Code</label>
        <input className="checkoutInput" type="text" 
                                                      name="zip" 
                                                      value={props.customer.zip}
                                                      autoComplete="postal-code"
                                                      onChange={(e) => {props.handleCustomer(e, "zip")}} />
        <button className="checkoutButton" type="submit">Next</button>
      </form>
    </div>
    )
}

export default Address;