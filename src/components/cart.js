import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {
  let totalNum = (Number((props.total).replace(/[^\d.]/g, '')))
  let totalWithShipping = totalNum + 150;
  let formattedShipping = '$' + totalWithShipping.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  const items = props.sortedCart.map((item, i) => {
    return (
      <div key={item.name}>
        <CartItem image={item.image}
                  name={item.name}
                  size={item.size}
                  price={item.price}
                  quantity={props.quantity[i]}
                  item={item}
                  index={i}
                  handleChangeQuantity={props.handleChangeQuantity} />
      </div>
      )
  })
  return (
    <div className="cartWrapper">
      <div className="cartTitle">Your Cart</div>
      <div className="cartHeader">
        <div className="cartHeaderItem headerItem">Item</div>
        <div className="cartHeaderPrice headerItem">Item Price</div>
        <div className="cartHeaderQuantity headerItem">Quantity</div>
        <div className="cartHeaderTotal headerItem">Price</div>
      </div>
      <div className="cartDisplay">
        {props.sortedCart.length > 0 ? items : "Your Cart is Empty"}
      </div>
      <div className="cartSubTotal">
        <div className="subTotalText">
          <div className="subtotal">Subtotal ({props.cart.length} {props.cart.length == 0 || props.cart.length > 1 ? "items" : "item"}):</div>
          <div>Shipping:</div>
        </div>
        <div className="subTotalPrice">
          <div className="subtotal">{props.total}</div>
          <div>{totalNum < 1000 && totalNum != 0 ? "$150.00" : "Free"}</div>
        </div>
      </div>
      <div className="cartTotal">
        <div className="totalText">Total: </div>
        <div className="totalPrice">{totalNum < 1000 && totalNum != 0? formattedShipping : props.total}</div>
      </div>
      <div className="cartButtonWrapper">
        <button className="cartButton continueShopping" onClick={() => {props.handlePage("mattresses")}}>Continue Shopping</button>
        {props.sortedCart.length > 0 && (<button className="cartButton checkout">Proceed to Checkout <i className="fas fa-shopping-cart"></i></button>)}
      </div>
    </div>
    )
}

export default Cart;