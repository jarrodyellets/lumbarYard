import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {
  const items = props.cart.map((item) => {
    return (
      <div key={item.name}>
        <CartItem image={item.image}
                  name={item.name}
                  size={item.size}
                  price={item.price} />
      </div>
      )
  })
  return (
    <div className="cartWrapper">
      <div className="cartTitle">Your Cart</div>
      <div className="cartHeader">
        <div className="cartHeaderItem">Item</div>
        <div className="cartHeaderPrice">Price</div>
      </div>
      {items}
    </div>
    )
}

export default Cart;