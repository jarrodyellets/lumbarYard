import React from 'react';

const SingleMattress = (props) => {
  const size = props.size.map((size) => {
    return(
      <div key={props.price} className="singleSize">{size}</div>
      )
  })
  return (
    <div className="singleWrapper">
      <div className="singleTitle">{props.name}</div>
      <img src={props.image} className="singleImage" />
      {size}
      <div className="singlePrice">{props.price[props.price.length -1]} - {props.price[0]}</div>
      <button className="singleButton">Buy Now</button>
    </div>
    )
}

export default SingleMattress;