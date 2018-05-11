import React from 'react';

const Nav = (props) => {
	return (
		<div className={props.sticky ? "nav-bar sticky" : "nav-bar"} id="nav-bar">
			<a href="#home" className="brand"><div className="brandImg"></div></a>
			<div className="linksWrapper">
				<div className="linksDiv" id="linksDiv">
					<a href="javascript:void(0)" className="closeBtn" onClick={props.handleHamburger}><i className="fas fa-times"></i></a>
					<a href="#products" className="links">Products</a>
					<a href="#about" className="links aboutLink">About</a>
					<a href="#contact" className="links contactLink">Contact</a>
				</div>
				<a href="#cart" className="cart">
					<i className="fas fa-shopping-cart"></i>
					<div className="cartQuantity">{props.cart.length}</div>
				</a>
				<a href="javascript:void(0);" 
			   className="hamburger" 
			   onClick={props.handleHamburger}><i className="fas fa-bars"></i></a>
			</div>
		</div>
		)
}

export default Nav;