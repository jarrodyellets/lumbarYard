import React from 'react';

const Thanks = (props) => {
  return(
    <div className="thanksWrapper" aria-label="thank you">
      <div className="thanksTitle">Purchase Complete</div>
      <div className="thanksInnerWrapper">
        <img className="thanksLogo" src="https://www.jarrodyellets.com/images/lumbar/lumbarLogo1.png" alt="lumbar yard logo" />
        <div className="thanksMessage">Thank you for your purchase!</div>
        <div className="thanksMessage">Your products will be arriving in 3-5 business days.</div>
        <div className="thanksMessage">Please print your receipt for your records</div>
        <div className="thanksReceipt">
          <h3 className="orderTitle">Receipt</h3>
          <div className="orderInnerWrapper">
            <div className="orderSubTotal">
              <div className="orderSubTotalText">
                <div className="merch">Subtotal:</div>
                <div>Shipping:</div>
                <div className="taxes">Taxes (4.5%):</div>
                <div className="orderTotal">Order Total: </div>
              </div>
              <div className="orderSubTotalPrice">
                <div className="merch">{props.subTotal}</div>
                <div>{props.shipping}</div>
                <div className="taxes">{props.taxes}</div>
                <div className="orderTotal">{props.grandTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Thanks;