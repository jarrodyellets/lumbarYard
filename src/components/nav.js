import React from 'react';

const Nav = (props) => {
	return (
		<div className="navbar" id="navbar">
			<a href="#home" className="brand">The Lumbar Yard</a>
			<div className="linksDiv" id="linksDiv">
				<a href="#products" className="links"><i className="fas fa-bed"></i> Products</a>
				<a href="#about" className="links"><i className="fas fa-newspaper"></i> About</a>
				<a href="#contact" className="links"><i className="fas fa-phone"></i> Contact</a>
				<a href="#cart" className="links"><i className="fas fa-shopping-cart"></i> Cart</a>
			</div>
			<a href="javascript:void(0);" className="hamburger" onClick={props.handleHamburger}><i className="fas fa-bars"></i></a>
		</div>
		)
}

export default Nav;