import React from 'react';

const CartItem = (props) => {
  let price = (Number((props.price).replace(/[^\d.]/g, ''))) * props.quantity;
  let stringPrice = '$' + price.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return (
    <div className="cartItemWrapper">
      <div className="cartItemItem">
        <img src={props.image} className="cartItemImage" />
        <div className="cartItemDescription">
          <div className="cartItemName">{props.name} Mattress</div>
          <div className="cartItemSize">Size: {props.size}</div>
        </div>
      </div>
      <div className="cartItemUnitPrice">{props.price}</div>
      <div className="cartItemQuantity">
        <input className="cartItemInput" type="number" step="1" min="0" value={props.quantity} />
      </div>
      <div className="cartItemPrice">{stringPrice}</div>
    </div>
    )
}

export default CartItem;