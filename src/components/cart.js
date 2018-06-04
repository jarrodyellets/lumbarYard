import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {
  let totalNum = (Number((props.total).replace(/[^\d.]/g, '')))
  let shipping = totalNum < 1000 && totalNum != 0 ? 150.00 : 0.00;
  let totalWithShipping = totalNum + shipping;
  let taxes = totalNum * .045
  let formatedTaxes = '$' + taxes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  let total = taxes + totalWithShipping
  let formattedShipping = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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
    <div className="cartWrapper">
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
          <div className="subtotal">Subtotal ({props.quantity} {props.quantity == 0 || props.cart.length > 1 ? "items" : "item"}):</div>
          <div>Shipping:</div>
          <div className="taxes">Taxes (4.5%):</div>
        </div>
        <div className="subTotalPrice">
          <div className="subtotal">{props.total}</div>
          <div>{totalNum < 1000 && totalNum != 0 ? "$150.00" : "Free"}</div>
          <div className="taxes">{formatedTaxes}</div>
        </div>
      </div>
      <div className="cartTotal">
        <div className="totalText">
          <div>Total: </div>
        </div>
        <div className="totalPrice">
          <div>{formattedShipping}</div>
        </div>
      </div>
      <div className="cartButtonWrapper">
        <button className="cartButton continueShopping" onClick={() => {props.handlePage("mattresses")}}>Continue Shopping</button>
        {props.cart.length > 0 && (<button className="cartButton checkout">Checkout <i className="fas fa-shopping-cart"></i></button>)}
      </div>
    </div>
    )
}

export default Cart;