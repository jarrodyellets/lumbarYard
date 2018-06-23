import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {
  const items = props.cart.map((item, i) => {
    return (
      <div key={item.name}>
        <CartItem image={item.image}
                  name={item.name}
                  size={item.size}
                  price={item.price}
                  id={item.id}
                  quantity={item.quantity}
                  item={item}
                  index={i}
                  handleRemove={props.handleRemove}
                  handleUpdateCart={props.handleUpdateCart} />
      </div>
      )
  })
  return (
    <div className="cartWrapper" aria-label="cart">
      <div className="cartTitle">Your Cart</div>
      <div className="cartHeader">
        <div className="cartHeaderItem headerItem">Item</div>
        <div className="cartHeaderPrice headerItem">Item Price</div>
        <div className="cartHeaderQuantity headerItem">Quantity</div>
        <div className="cartHeaderTotal headerItem">Price</div>
      </div>
      <div className="cartDisplay">
        {props.cart.length > 0 ? items : "Your Cart is Empty"}
      </div>
      <div className="cartSubTotal">
        <div className="subTotalText">
          <div className="subtotal">Subtotal ({props.quantity} {props.quantity == 0 || props.quantity > 1 ? "items" : "item"}):</div>
          <div>Shipping:</div>
          <div className="taxes">Taxes (4.5%):</div>
        </div>
        <div className="subTotalPrice">
          <div className="subtotal">{props.subTotal}</div>
          <div>{props.shipping}</div>
          <div className="taxes">{props.taxes}</div>
        </div>
      </div>
      <div className="cartTotal">
        <div className="totalText">
          <div>Total: </div>
        </div>
        <div className="totalPrice">
          <div>{props.grandTotal}</div>
        </div>
      </div>
      <div className="cartButtonWrapper">
        <button className="cartButton continueShopping" onClick={() => {props.handlePage("mattresses")}}>Continue Shopping</button>
        {props.cart.length > 0 && (<button className="cartButton checkout" onClick={() => {props.handlePage("checkout")}}>Checkout <i className="fas fa-shopping-cart"></i></button>)}
      </div>
    </div>
    )
}

export default Cart;
