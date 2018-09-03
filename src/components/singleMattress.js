import React from 'react';
import PropTypes from 'prop-types';

const SingleMattress = (props) => {
  return (
    <div className="singleWrapper" aria-label="single mattress">
      <div className="singleTitle">{props.name}</div>
      <img src={props.image} className="singleImage" alt="current mattress" />
      <div className="singleSize">Twin, Double, Queen, King</div>
      <div className="singlePrice">{props.price[0]} - {props.price[props.price.length -1]}</div>
      <button className="singleButton" onClick={props.handleCurrentMattress.bind(props.handleCurrentMattress, props.mattress[props.index])}>Buy Now</button>
    </div>
    )
}

SingleMattress.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  handleCurrentMattress: PropTypes.func,
  index: PropTypes.number,
  mattress: PropTypes.object
}

export default SingleMattress;