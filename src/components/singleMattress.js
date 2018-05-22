import React from 'react';

const SingleMattress = (props) => {
  return (
    <div className="singleWrapper">
      <div className="singleTitle">{props.name}</div>
      <img src={props.image} className="singleImage" />
      <div className="singlePrice">{props.price[0]} - {props.price[props.price.length -1]}</div>
      <button className="singleButton">Buy Now</button>
    </div>
    )
}

export default SingleMattress;