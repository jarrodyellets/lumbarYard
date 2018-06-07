import React from 'react';

const Address = (props) => {
  return(
    <div className="addressWrapper">
      <h3>Delivery Address</h3>
      <form className="addressForm">
        <label htmlFor="name">Name</label>
        <input className="checkoutName checkoutInput" type="text" name="name" size="35" />
        <label htmlFor="street">Street</label>
        <input className="checkoutName checkoutInput" type="text" name="street" />
        <label htmlFor="city">City</label>
        <input className="checkoutName checkoutInput" type="text" name="city" />
        <label htmlFor="state">State</label>
        <input className="checkoutName checkoutInput" type="text" name="state" />
        <label htmlFor="zip">Zip Code</label>
        <input className="checkoutName checkoutInput" type="text" name="zip" />
        <button className="checkoutButton" type="submit" value="submit">Next</button>
      </form>
    </div>
    )
}

export default Address;