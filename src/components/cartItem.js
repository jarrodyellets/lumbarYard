import React from 'react';

const CartItem = (props) => {
  let quantity = props.quantity;
  let price = (Number((props.price).replace(/[^\d.]/g, ''))) * props.quantity;
  let stringPrice = '$' + price.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  let newQuantity = props.quantity;
  return (
    <div className="cartItemWrapper">
      <div className="cartItemItem">
        <img src={props.image} className="cartItemImage" />
        <div className="cartItemDescription">
          <div className="cartItemName">{props.name} Mattress</div>
          <div className="cartItemSize"><span className="size">Size: </span>{props.size}</div>
        </div>
      </div>
      <div className="cartItemUnitPrice">{props.price}</div>
      <form className="cartItemQuantity">
        <input className="cartItemInput" type="number"  
                                         min="0" 
                                         value={props.quantity} 
                                         onChange={(e) => props.handleChangeQuantity(e, props.item, quantity)} />
      </form>
      <div className="cartItemPrice">{stringPrice}</div>
    </div>
    )
}

export default CartItem;