import React from 'react';

const Thanks = (props) => {
  return(
    <div className="thanksWrapper">
      <div className="thanksTitle">Thank You!</div>
      <div className="thanksInnerWrapper">
        <div className="thanksMessage">Thank you for your purchase {props.customer.firstName}!</div>
        <div className="thanksMessage">Your products will be arriving in 3-5 business days.</div>
        <div className="thanksMessage">Thank you for shopping at The Lumbar Yard!</div>
      </div>
    </div>
    )
}

export default Thanks;