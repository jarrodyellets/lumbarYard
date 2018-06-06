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
import Footer from './components/footer';

import mattress from './data/mattress';
import style from '../public/style.css';

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
			quantity: 0,
			total: "$0.00"
		}

		this.handleScroll = this.handleScroll.bind(this);
		this.handlePage = this.handlePage.bind(this);
		this.handleIndex = this.handleIndex.bind(this);
		this.handleCurrentMattress = this.handleCurrentMattress.bind(this);
		this.handleCartAdd = this.handleCartAdd.bind(this);
		this.handleUpdateCart = this.handleUpdateCart.bind(this);
		this.handleTotal = this.handleTotal.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillMount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleHamburger(){
		const links = document.getElementById("linksDiv");
		links.className += " width";
	}

	handleClose(){
		const links = document.getElementById("linksDiv");
		links.className = "linksDiv"
	}

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

	handlePage(page){
		this.setState({
			page: page
		}, () => {
			window.scrollTo(0, 0);
			this.handleClose();
		})
	}

	handleIndex(e){
		this.setState({
			mattressIndex: e.target.value
		})
	}

	handleCurrentMattress(mattress){
		this.setState({
			currentMattress: mattress
		}, () => {
			this.handlePage("mattressDetail")
		})
	}

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

	handleTotal(){
		let totalPrice = [];
		let total
		for (let i = 0; i < this.state.cart.length; i++){
			let price = (Number((this.state.cart[i].price).replace(/[^\d.]/g, ''))) * this.state.cart[i].quantity;
			totalPrice.push(price);
		}
		this.state.cart.length > 0 ? total = totalPrice.reduce(function(a, b){
			return a + b;
		}) : total = 0.00;
		total = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		this.setState({
			total: total
		})
	}

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
																						 total={this.state.total} 
																						 quantity={this.state.quantity}
																						 handlePage={this.handlePage}
																						 handleRemove={this.handleRemove}
																						 handleUpdateCart={this.handleUpdateCart} />)}
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
