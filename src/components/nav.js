import React from 'react';

const Nav = (props) => {
	return (
		<div className={props.sticky ? "navbar sticky" : "navbar"} id="navbar">
			<a href="#home" className="brand"><img src="https://www.jarrodyellets.com/images/lumbarLogo.png" /></a>
			<div className="linksDiv" id="linksDiv">
				<a href="javascript:void(0)" className="closeBtn" onClick={props.handleHamburger}><i className="fas fa-times"></i></a>
				<a href="#products" className="links">Products</a>
				<a href="#about" className="links aboutLink">About</a>
				<a href="#contact" className="links contactLink">Contact</a>
				<a href="#cart" className="links">Cart</a>
			</div>
			<a href="javascript:void(0);" 
			   className="hamburger" 
			   onClick={props.handleHamburger}><i className="fas fa-bars"></i></a>
		</div>
		)
}

export default Nav;