import React, {Component} from 'react';
import Address from './address';
import Payment from './payment';
import Review from './review';

class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {
      section: "address",
      customer: {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        cardType: "",
        cardNumber: "",
        cardName: "",
        exDate: "",
        code: ""
      }
    }

    this.handleSection = this.handleSection.bind(this);
    this.handleCustomer = this.handleCustomer.bind(this);

  }

  handleSection(section){
    console.log(this.state.customer);
    this.setState({
      section: section
    })
  }

  handleCustomer(e, value){
    let customer = this.state.customer;
    customer[value] = e.target.value;
    this.setState({
      customer: customer
    })
  }

  render(){
    return (
      <div className="checkoutWrapper">
        <div className="checkoutTitle">Checkout</div>
        <div className="checkoutMenu">
          <div className={this.state.section == "address" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"} >1. Address</div>
          <div className={this.state.section == "payment" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"}>2. Payment</div>
          <div className={this.state.section == "review" ? "checkoutMenuItem checkoutActive" : "checkoutMenuItem"}>3. Review</div>
        </div>
        <div className="checkoutInnerWrapper">
          <div className="checkoutInfoWrapper">
            {(this.state.section == "address") && (<Address handleSection={this.handleSection} 
                                                            handleCustomer={this.handleCustomer} 
                                                            customer={this.state.customer} />)}
            {(this.state.section == "payment") && (<Payment handleSection={this.handleSection} 
                                                            handleCustomer={this.handleCustomer}
                                                            customer={this.state.customer} />)}
            {(this.state.section == "review") && (<Review customer={this.state.customer} />)}
          </div>
          <div className="checkoutOrder">
            <h3 className="orderTitle">Order Summary</h3>
            <div className="orderInnerWrapper">
              <div className="orderSubTotal">
                <div className="orderSubTotalText">
                  <div className="subtotal">Merchandise ({this.props.quantity} {this.props.quantity == 0 || this.props.cart.length > 1 ? "items" : "item"}):</div>
                  <div>Shipping:</div>
                  <div className="taxes">Taxes (4.5%):</div>
                  <div className="orderTotal">Order Total: </div>
                </div>
                <div className="orderSubTotalPrice">
                  <div className="subtotal">{this.props.subTotal}</div>
                  <div>{this.props.shipping}</div>
                  <div className="taxes">{this.props.taxes}</div>
                  <div className="orderTotal">{this.props.grandTotal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;