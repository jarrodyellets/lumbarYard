import React from 'react';

const Contact = () => {
  return (
    <div className="contactWrapper" aria-label="contact">
      <h1 className="contactTitle">Contact Us</h1>
      <div className="innerContactWrapper">
        <div className="contactLeft">
          <div className="contactText">We are here to answer any questions you may have about our products or services.
          Reach out to us and we&#39;ll respond as soon as we can.</div>
          <div className="contactFormWrapper">
            <form className="contactForm" method="POST" action="https://formspress.io/jarrod@jarrodyellets.com">
              <div className="contactFormUpper">
                <div className="contactLabel">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="contactInput input" name="name" id="name" size="35" required />
                </div>
                <div className="contactLabel">
                  <label htmlFor="email">Email:</label>
                  <input className="input" type="email" name="email" id="email" size="35" required />
                </div>
              </div>
              <label htmlFor="message">Message:</label>
              <textarea className="contactTextArea input" name="text" id="text" rows="10" cols="60" required />
              <button type="submit" className="contactButton">Submit</button>
            </form>
          </div>
        </div>
        <div className="contactRight">
          <div className="contactContact">
            <div className="contactBold">Email:</div>
            <div>jarrod@jarrodyellets.com</div>
          </div>
          <div className="contactContact">
            <div className="contactBold">Telephone:</div>
            <div>212-555-2390</div>
          </div>
          <div className="contactContact">
            <div className="contactBold">Address:</div>
            <div>129 W 81st St</div>
            <div>New York, NY</div>
          </div>
          <div className="contactIcons">
            <i className="fab fa-facebook socialTop"></i>
            <i className="fab fa-instagram socialTop"></i>
            <i className="fab fa-twitter-square socialTop"></i>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact;