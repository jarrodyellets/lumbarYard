import React from 'react';

const Review = (props) => {
  return(
    <div className="reviewWrapper" aria-label="review payment">
      <h3>Review Payment</h3>
      <div className="reviewGrid">
        <div className="reviewDescription">Name:</div>
        <div className="reviewDetails">{props.customer.firstName} {props.customer.lastName}</div>
        <div className="reviewDescription reviewAddress">Address:</div>
        <div className="reviewDetails reviewAddress">
          <div>{props.customer.street}</div>
          <div>
            <span>{props.customer.city}, </span>
            <span>{props.customer.state} </span>
            <span>{props.customer.zip}</span>
          </div>
        </div>
        <div className="reviewDescription">Card Type:</div>
        <div className="reviewDetails">{props.customer.cardType}</div>
        <div className="reviewDescription">Card Number:</div>
        <div className="reviewDetails">{props.customer.cardNumber}</div>
        <div className="reviewDescription">Name On Card:</div>
        <div className="reviewDetails">{props.customer.cardName}</div>
        <div className="reviewDescription">Expiration Date:</div>
        <div className="reviewDetails">{props.customer.exDate}</div>
        <div className="reviewDescription">Security Code:</div>
        <div className="reviewDetails">{props.customer.code}</div>
      </div>
    </div>
  )
}

export default Review;