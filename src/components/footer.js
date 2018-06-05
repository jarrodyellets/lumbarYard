import React from 'react';

const Footer = () => {
	return (
		<div className="footerWrapper">
			<div className="footerAddress">
				<div className="addressDiv">
					<div>129 W 81st St</div>
					<div>New York, NY</div>
				</div>
				<div className="footerContact">
					<div>jarrod@jarrodyellets.com</div>
					<div>212-555-2390</div>
				</div>
			</div>
			<div className="author">&copy; Jarrod Yellets | 2018</div>
			<div className="footerRight">
				<div className="footerSocial">
						<div>Follow The Lumbar Yard</div>
						<div>
							<i className="fab fa-facebook socialFoot"></i>
							<i className="fab fa-instagram socialFoot"></i>
							<i className="fab fa-twitter-square socialFoot"></i>
						</div>
					</div>
				<div className="footerPayment">
					<div className="cardDiv"><i className="fab fa-cc-visa card"></i><i className="fab fa-cc-mastercard card"></i><i className="fab fa-cc-discover card"></i></div>
					<div className="cardDiv"><i className="fab fa-cc-amex card"></i><i className="fab fa-cc-apple-pay card"></i><i className="fab fa-cc-amazon-pay card"></i></div>
				</div>
			</div>
		</div>
		)
}

export default Footer;