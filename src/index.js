import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TopLinks from './components/topLinks';
import Nav from './components/nav';

import style from '../public/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			responsive: false,
			sticky: false
		}

		this.handleHamburger = this.handleHamburger.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
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

	render(){
		return(
			<div className="wrapper">
				<TopLinks />
				<Nav handleHamburger={this.handleHamburger} 
						 responsive={this.state.responsive}
						 sticky={this.state.sticky}
						 handleScroll={this.handleScroll} />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));