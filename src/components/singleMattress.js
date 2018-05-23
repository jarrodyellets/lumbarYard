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
      <div className="singlePrice">{props.price[0]} - {props.price[props.price.length -1]}</div>
      <button className="singleButton" onClick={props.handleCurrentMattress.bind(props.handleCurrentMatrress, props.mattress[props.index])}>Buy Now</button>
    </div>
    )
}

export default SingleMattress;