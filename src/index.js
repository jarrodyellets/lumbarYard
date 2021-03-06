import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TopLinks from './components/topLinks';
import Nav from './components/nav';
import Home from './components/home';
import Mattresses from './components/mattresses';
import MattressDetail from './components/mattressDetail';
import About from './components/about';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Thanks from './components/thanks';
import Footer from './components/footer';

import mattress from './data/mattress';
import '../public/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      responsive: false,
      sticky: false,
      page: "home",
      currentMattress: mattress[4],
      mattressIndex: 3,
      cart: [],
      width: window.screen.availWidth,
      quantity: 0,
      subTotal: "$0.00",
      shipping: "Free",
      taxes: "$0.00",
      grandTotal: "0.00",
      section: "address",
      customer: {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        cardType: "Visa",
        cardNumber: "",
        cardName: "",
        exDate: "",
        code: ""
      }
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
    this.handleCurrentMattress = this.handleCurrentMattress.bind(this);
    this.handleCartAdd = this.handleCartAdd.bind(this);
    this.handleUpdateCart = this.handleUpdateCart.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSection = this.handleSection.bind(this);
    this.handleCustomer = this.handleCustomer.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount(){ 
    window.addEventListener('scroll', this.handleScroll);
  } 

  componentWillMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

// Handle responsive nav
  handleHamburger(){
    const links = document.getElementById("linksDiv");
    links.className += " width";
  }

  handleClose(){
    const links = document.getElementById("linksDiv");
    links.className = "linksDiv"
  }

// Handle sticky nav
  handleScroll(){
    if (window.scrollY > 60){
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 60){
        this.setState({
          sticky: false
        })
    }
  } 

// New page starts at top
  handlePage(page){
    this.setState({
      page: page
    }, () => {
      window.scrollTo(0, 0);
      this.handleClose();
    })
  }

// Handles mattress size
  handleIndex(e){
    this.setState({
      mattressIndex: e.target.value
    })
  }

// Handles currently selected mattress
  handleCurrentMattress(mattress){
    this.setState({
      currentMattress: mattress,
      mattressIndex: 3
    }, () => {
      this.handlePage("mattressDetail")
    })
  }

// Add items to cart
  handleCartAdd(name, price, size, image, id, quantity) {
    let cart = this.state.cart;
    let newQuantity = this.state.quantity + 1;
    let item = {
      name: name,
      price: price,
      size: size,
      image: image,
      id: id,
      quantity: quantity
    }

    if(cart.length == 0){
      cart.push(item);
    } else {
      for (var i = 0; i < cart.length; i++){
        if (item.id == cart[i].id){
          cart[i].quantity = cart[i].quantity + 1;
          break
        } else if (i == cart.length - 1){
          cart.push(item);
          break
        }
      }
    }

    this.setState({
      cart: cart,
      quantity: newQuantity
    }, () => {
      this.handleTotal()
    })
  }

// Resets cart after purchase
  handlePurchase(){
    this.setState({
      cart: [],
      quantity: 0,
      customer: {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        cardType: "Visa",
        cardNumber: "",
        cardName: "",
        exDate: "",
        code: ""
      } 
    })
  }

// Updates cart after change
  handleUpdateCart(e, id, quantity) {
    let cart = this.state.cart;
    let newQuantity = 0;
    e.preventDefault();
    for (var i = 0; i < cart.length; i ++){
      if (id == cart[i].id){
        cart[i].quantity = quantity;
        newQuantity = newQuantity + cart[i].quantity;
      } else {
        newQuantity = newQuantity + cart[i].quantity;
      }
    }

    this.setState({
      cart: cart,
      quantity: newQuantity
    }, () => {
      this.handleTotal()
    })
  }

// Handles bill amount, taxes, and grand total
  handleTotal(){
    let totalPrice = [];
    let subTotal
    for (let i = 0; i < this.state.cart.length; i++){
      let price = (Number((this.state.cart[i].price).replace(/[^\d.]/g, ''))) * this.state.cart[i].quantity;
      totalPrice.push(price);
    }
    this.state.cart.length > 0 ? total = totalPrice.reduce(function(a, b){
      return a + b;
    }) : total = 0.00;
    subTotal = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let totalNum = (Number((subTotal).replace(/[^\d.]/g, '')))
    let shipping = totalNum < 1000 && totalNum != 0 ? 150.00 : 0.00;
    let totalWithShipping = totalNum + shipping;
    let taxes = totalNum * .045
    let formatedTaxes = '$' + taxes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let total = taxes + totalWithShipping
    let grandTotal = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    shipping = totalNum < 1000 && totalNum != 0 ? "$150.00" : "Free";
    this.setState({
      subTotal: subTotal,
      shipping: shipping,
      taxes: formatedTaxes,
      grandTotal: grandTotal
    })
  }

// Removes mattress from cart
  handleRemove(id){
    let cart = this.state.cart;
    let quantity;
    for (let i = 0; i < cart.length; i++){
      if(id == cart[i].id){
        quantity = this.state.quantity - cart[i].quantity;
        cart.splice(i, 1);
      }
    }

    this.setState({
      cart: cart,
      quantity: quantity
    }, () => {
      this.handleTotal()
    })
  }

// Handles current section of checkout
  handleSection(e, section){
    e.preventDefault();
    this.setState({
      section: section
    })
  }

// Handles customer checkout info
  handleCustomer(e, value){
    e.preventDefault();
    let customer = this.state.customer;
    customer[value] = e.target.value;
    this.setState({
      customer: customer
    })
  }

  render(){
    return(
      <div className="wrapper">
        <TopLinks />
        <Nav handleHamburger={this.handleHamburger}
             handleClose={this.handleClose}
             responsive={this.state.responsive}
             sticky={this.state.sticky}
             handleScroll={this.handleScroll}
             quantity={this.state.quantity}
             handlePage={this.handlePage} />
        <div className="contentWrapper">
          {(this.state.page == "home") && (<Home mattress={mattress}
                                                 width={this.state.width}
                                                 handlePage={this.handlePage}
                                                 handleCurrentMattress={this.handleCurrentMattress} />)}
          {(this.state.page == "mattresses") && (<Mattresses mattress={mattress}
                                                             handleCurrentMattress={this.handleCurrentMattress}
                                                             handleIndex={this.handleIndex} />)}
          {(this.state.page == "mattressDetail") && (<MattressDetail currentMattress={this.state.currentMattress}
                                                                     mattressIndex={this.state.mattressIndex}
                                                                     handleCartAdd={this.handleCartAdd}
                                                                     handleIndex={this.handleIndex}
                                                                     handlePage={this.handlePage}
                                                                     mattress={mattress} />)}
          {(this.state.page == "about") && (<About />)}
          {(this.state.page == "contact") && (<Contact />)}
          {(this.state.page == "cart") && (<Cart cart={this.state.cart}
                                                 subTotal={this.state.subTotal}
                                                 shipping={this.state.shipping}
                                                 taxes={this.state.taxes}
                                                 grandTotal={this.state.grandTotal} 
                                                 quantity={this.state.quantity}
                                                 handlePage={this.handlePage}
                                                 handleRemove={this.handleRemove}
                                                 handleUpdateCart={this.handleUpdateCart} />)}
          {(this.state.page == "checkout") && (<Checkout subTotal={this.state.subTotal}
                                                         shipping={this.state.shipping}
                                                         taxes={this.state.taxes}
                                                         quantity={this.state.quantity}
                                                         cart={this.state.cart}
                                                         handlePage={this.handlePage}
                                                         customer={this.state.customer}
                                                         handleCustomer={this.handleCustomer}
                                                         handleSection={this.handleSection}
                                                         section={this.state.section}
                                                         handlePurchase={this.handlePurchase}
                                                         grandTotal={this.state.grandTotal} />)}
          {(this.state.page == "thanks") && (<Thanks customer={this.state.customer}
                                                     subTotal={this.state.subTotal}
                                                     shipping={this.state.shipping}
                                                     taxes={this.state.taxes}
                                                     quantity={this.state.quantity}
                                                     grandTotal={this.state.grandTotal}
                                                     cart={this.state.cart} />)}
        </div>
        <Footer />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
