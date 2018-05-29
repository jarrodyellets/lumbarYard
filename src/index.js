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
			width: screen.width,
			sticky: false,
			page: "home",
			currentMattress: mattress[4],
			mattressIndex: 3,
			cart: [],
			sortedCart: [],
			quantity: []
		}

		this.handleHamburger = this.handleHamburger.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handlePage = this.handlePage.bind(this);
		this.handleIndex = this.handleIndex.bind(this);
		this.handleCurrentMattress = this.handleCurrentMattress.bind(this);
		this.handleCartAdd = this.handleCartAdd.bind(this);
		this.handleCartQuantity = this.handleCartQuantity.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillMount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleHamburger(){
		this.setState((state) => ({
			responsive: !state.responsive
		}), () => {
			const links = document.getElementById("linksDiv");
			this.state.responsive ? links.className += " width" : links.className = "linksDiv";
		});
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

	handleCartAdd(name, price, size, image, id) {
		let item = {
			name: name,
			price: price,
			size: size,
			image: image,
			id: id
		}
		console.log("hi");
		this.setState(prevState => ({
			cart: [...prevState.cart, item]
		}), () => {
			console.log("here");
			this.handleCartQuantity()
		})
	}

	handleCartQuantity(){
		let cart = this.state.cart
		let prev;
		let mattresses = [];
		let quantity = [];
		cart.sort((a, b) => {
			if(a.id < b.id){
				return -1;
			} else if(a.id > b.id){
				return 1
			}
			return 0
		});
		for (var i = 0; i < cart.length; i++){
			if (JSON.stringify(cart[i]) !== prev){
				mattresses.push(cart[i]);
				quantity.push(1);
			} else {
				quantity[quantity.length - 1]++
			}
			prev = JSON.stringify(cart[i]);
		}
		this.setState({
			sortedCart: mattresses,
			quantity: quantity
		})
	}

	render(){
		return(
			<div className="wrapper">
				<TopLinks />
				<Nav handleHamburger={this.handleHamburger}
						 responsive={this.state.responsive}
						 sticky={this.state.sticky}
						 handleScroll={this.handleScroll}
						 cart={this.state.cart}
						 handlePage={this.handlePage} />
				<div className="contentWrapper">
					{this.state.page == "home" ? <Home mattress={mattress}
						 																 width={this.state.width}
																						 handlePage={this.handlePage}
																						 handleCurrentMattress={this.handleCurrentMattress} /> : null}
					{this.state.page == "mattresses" ? <Mattresses mattress={mattress}
																												 handleCurrentMattress={this.handleCurrentMattress}
																												 handleIndex={this.handleIndex} /> : null}
					{this.state.page == "mattressDetail" ? <MattressDetail currentMattress={this.state.currentMattress}
																																 mattressIndex={this.state.mattressIndex}
																																 handleCartAdd={this.handleCartAdd}
																																 handleIndex={this.handleIndex}
																																 mattress={mattress} /> : null}
					{this.state.page == "about" ? <About /> : null}
					{this.state.page == "contact" ? <Contact /> : null}
					{this.state.page == "cart" ? <Cart cart={this.state.sortedCart} quantity={this.state.quantity} /> : null}
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
