import React from 'react';

const SingleMattress = (props) => {
  return (
    <div className="singleWrapper" aria-label="single mattress">
      <div className="singleTitle">{props.name}</div>
      <img src={props.image} className="singleImage" alt="current mattress" />
      <div className="singleSize">Twin, Double, Queen, King</div>
      <div className="singlePrice">{props.price[0]} - {props.price[props.price.length -1]}</div>
      <button className="singleButton" onClick={props.handleCurrentMattress.bind(props.handleCurrentMatrress, props.mattress[props.index])}>Buy Now</button>
    </div>
    )
}

export default SingleMattress;