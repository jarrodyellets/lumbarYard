import React from 'react';

const Footer = (props) => {
	return (
		<div className="footerWrapper">
			<div className="footerAddress">
				<div>129 W 81st St</div>
				<div>New York, NY 10024</div>
			</div>
			<div className="footerPayment">
				<div><i class="fab fa-cc-visa card"></i><i class="fab fa-cc-mastercard card"></i><i class="fab fa-cc-discover card"></i></div>
				<div><i class="fab fa-cc-amex card"></i><i class="fab fa-cc-apple-pay card"></i><i class="fab fa-cc-amazon-pay card"></i></div>
			</div>
		</div>
		)
}

export default Footer;