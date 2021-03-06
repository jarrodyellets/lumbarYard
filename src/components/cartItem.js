import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      quantity: this.props.quantity
    }

    this.handleQuantity = this.handleQuantity.bind(this);

  }

// Update form with mattress quantity
  componentWillReceiveProps(nextProps){
    this.setState({
      quantity: nextProps.quantity
    })
  }

// Display mattress quantity
  handleQuantity(e){
    this.setState({
      quantity: Number(e.target.value) == 0 ? undefined : Number(e.target.value)
    })
  }

  render(){
    let price = (Number((this.props.price).replace(/[^\d.]/g, ''))) * this.props.quantity;
    let stringPrice = '$' + price.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return(
    <div className="cartItemWrapper" aria-label="cart item">
      <div className="cartItemItem">
        <img src={this.props.image} className="cartItemImage" alt="Item in cart"/>
        <div className="cartItemDescription">
          <div className="cartItemName">{this.props.name} Mattress</div>
          <div className="cartItemSize"><span className="size">Size: </span>{this.props.size}</div>
        </div>
      </div>
      <div className="cartItemUnitPrice">{this.props.price}</div>
      <form className="cartItemQuantity" onSubmit={(e) => this.props.handleUpdateCart(e, this.props.id, this.state.quantity == undefined ? 0 : this.state.quantity)}>
        <input className="cartItemInput" type="number" 
                                         min="0"  
                                         value={this.state.quantity} 
                                         onChange={this.handleQuantity} />
        <button className="quantityButton" type="submit" value="submit">Update</button>
        <div className="quantityRemove" onClick={() => {this.props.handleRemove(this.props.id)}}><i className="fas fa-times-circle quantityX"></i> REMOVE</div>
      </form>
      <div className="cartItemPrice">{stringPrice}</div>
    </div>
      )
  }
}

CartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  handleUpdateCart: PropTypes.func,
  id: PropTypes.string,
  handleRemove: PropTypes.func
}

export default CartItem;