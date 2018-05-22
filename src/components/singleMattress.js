import React from 'react';

const SingleMattress = (props) => {
  return (
    <div className="singleWrapper">
      <div className="singleTitle">{props.name}</div>
      <div className="singleImageDiv">
        <img src={props.image} className="singleImage" />
      </div>
      <div className="singlePrice">{props.price[props.price.length -1]} - {props.price[0]}</div>
      <button className="singleButton">Buy Now</button>
    </div>
    )
}

export default SingleMattress;