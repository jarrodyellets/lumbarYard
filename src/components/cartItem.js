import React from 'react';

const CartItem = (props) => {
  return (
    <div className="cartItemWrapper">
      <img src={props.image} className="cartItemImage" />
      <div className="cartItemDescription">
        <div className="cartItemName">{props.name}</div>
        <div className="cartItemSize">{props.size}</div>
      </div>
      <div className="cartItemPrice">{props.price}</div>
    </div>
    )
}

export default CartItem;