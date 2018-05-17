import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TopLinks from './components/topLinks';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
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
			cart: [1, 2, 3]
		}

		this.handleHamburger = this.handleHamburger.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handlePage = this.handlePage.bind(this);
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
					{this.state.page == "home" ? <Home mattress={mattress} /> : null}
					{this.state.page == "about" ? <About /> : null}
					{this.state.page == "contact" ? <Contact /> : null}
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));