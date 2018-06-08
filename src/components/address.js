import React from 'react';

const Address = (props) => {
  return(
    <div className="addressWrapper">
      <h3>Delivery Address</h3>
      <form className="addressForm" onSubmit={() => {props.handleSection("payment")}}>
        <label htmlFor="name">Name</label>
        <input className="checkoutName checkoutInput" type="text" 
                                                      name="name" 
                                                      value={props.customer.name}
                                                      onChange={(e) => {props.handleCustomer(e, "name")}} />
        <label htmlFor="street">Street</label>
        <input className="checkoutName checkoutInput" type="text" 
                                                      name="street" 
                                                      value={props.customer.street}
                                                      onChange={(e) => {props.handleCustomer(e, "street")}} />
        <label htmlFor="city">City</label>
        <input className="checkoutName checkoutInput" type="text" 
                                                      name="city" 
                                                      value={props.customer.city}
                                                      onChange={(e) => {props.handleCustomer(e, "city")}} />
        <label htmlFor="state">State</label>
        <input className="checkoutName checkoutInput" type="text" 
                                                      name="state" 
                                                      value={props.customer.state}
                                                      onChange={(e) => {props.handleCustomer(e, "state")}} />
        <label htmlFor="zip">Zip Code</label>
        <input className="checkoutName checkoutInput" type="text" 
                                                      name="zip" 
                                                      value={props.customer.zip}
                                                      onChange={(e) => {props.handleCustomer(e, "zip")}} />
        <button className="checkoutButton" type="submit" value="submit">Next</button>
      </form>
    </div>
    )
}

export default Address;