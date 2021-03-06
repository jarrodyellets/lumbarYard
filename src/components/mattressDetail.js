import React from 'react';

const MattressDetail = (props) => {
  return (
    <div className="detailWrapper" aria-label="mattress detail">
      <div className="detailLeft">
        <div className="detailTitle">{props.currentMattress.name} Mattress</div>
        <div className="detailDetail">{props.currentMattress.description}</div>
        <div className="detailPrice">{props.currentMattress.price[props.mattressIndex]}</div>
        <div className="detailSelectDiv">
          <div className="detailSelectText">Mattress Size</div>
          <select className="mattressSelect" onChange={props.handleIndex} value={props.mattressIndex}>
            <option value="3">King</option>
            <option value="2">Queen</option>
            <option value="1">Double</option>
            <option value="0">Twin</option>
          </select>
        </div>
        <button className="singleButton" 
                onClick={() => {props.handleCartAdd(props.currentMattress.name, 
                                                    props.currentMattress.price[props.mattressIndex], 
                                                    props.currentMattress.size[props.mattressIndex], 
                                                    props.currentMattress.image,
                                                    props.currentMattress.name + props.currentMattress.size[props.mattressIndex],
                                                    1); props.handlePage("cart")}}>Add To Cart</button>
      </div>
      <div className="detailRight">
        <img src={props.currentMattress.image} className="detailImage" alt="current mattress" />
      </div>
    </div>
    )
}

export default MattressDetail;
