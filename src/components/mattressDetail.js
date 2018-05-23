import React from 'react';

const MattressDetail = (props) => {
  return (
    <div className="detailWrapper">
      <div className="detailLeft">
        <div className="detailTitle">{props.currentMattress.name}</div>
        <div className="detailDetail">{props.currentMattress.description}</div>
      </div>
      <div className="detailRight">
        <div className="detailPrice">{props.currentMattress.price[props.mattressIndex]}</div>
        <img src={props.currentMattress.image} className="detailImage" />
        <select className="mattressSelect" onChange={props.handleIndex} value={props.mattressIndex}>
          <option value="3">King</option>
          <option value="2">Queen</option>
          <option value="1">Double</option>
          <option value="0">Twin</option>
        </select>
        <button className="detailButton">Add To Cart</button>
      </div>
    </div>
    )
}

export default MattressDetail;