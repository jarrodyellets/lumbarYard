import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';

import style from '../public/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			responsive: false
		}

		this.handleHamburger = this.handleHamburger.bind(this);
	}

	handleHamburger(){
		this.setState((state) => ({
			responsive: !state.responsive
		}), () => {
			const links = document.getElementById("linksDiv");
			this.state.responsive ? links.className += " width" : links.className = "linksDiv";
		});
	}

	render(){
		return(
			<div className="wrapper">
				<Nav handleHamburger={this.handleHamburger} responsive={this.state.responsive} />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));