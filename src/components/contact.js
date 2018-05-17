import React from 'react';

const Contact = (props) => {
	return (
		<div className="contactWrapper">
			<div className="contactLeft">
				<h1 className="contactTitle">Contact Us</h1>
				<div className="contactText">We are here to answer any questions you may have about our products and services.
				Reach out to us and we'll respond as soon as we can.</div>
				<div className="contactFormWrapper">
					<form className="contactForm" method="POST" action="https://formspress.io/jarrod@jarrodyellets.com">
						<div className="contactFormUpper">
							<div className="contactLabel">
								<label for="name">Name</label>
								<input type="text" className="contactInput" name="name" id="name" required />
							</div>
							<div className="contactLabel">
								<label for="email">Email</label>
								<input type="email" className="contactInput" name="email" id="email" required />
							</div>
						</div>
						<label for="message">Message</label>
						<textarea className="contactTextArea" name="text" id="text" required />
						<button type="submit" className="contactButton">Submit</button>
					</form>
				</div>
			</div>
			<div className="contactRight">

			</div>
		</div>
		)
}

export default Contact;