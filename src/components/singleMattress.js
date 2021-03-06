import React from 'react';
import PropTypes from 'prop-types';

const SingleMattress = (props) => {
  return (
    <div className="singleWrapper" aria-label="single mattress">
      <div className="singleTitle">{props.name}</div>
      <img src={props.image} className="singleImage" alt="current mattress" />
      <div className="singleSize">Twin, Double, Queen, King</div>
      <div className="singlePrice">From: {props.price[0]}</div>
      <button className="singleButton" onClick={props.handleCurrentMattress.bind(props.handleCurrentMattress, props.mattress[props.index])}>Choose Options</button>
    </div>
  );
};

SingleMattress.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.array,
  handleCurrentMattress: PropTypes.func,
  index: PropTypes.number,
  mattress: PropTypes.array
};

export default SingleMattress;