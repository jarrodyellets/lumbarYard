import React from 'react';

const New = (props) => {
  return(
    <div className="newWrapper" aria-label="new mattress">
      <img src="https://www.jarrodyellets.com/images/lumbar/new.png" className="newNew" alt="new mattress" />
      <div className="newContent">
        <img src="https://www.jarrodyellets.com/images/lumbar/lumbarLogo1.png" className="featuredLogo" alt="lumbar yard logo" />
        <div className="newTitleUpper newTitle">NextGen</div>
        <div className="newTitleLower newTitle">Memory Foam</div>
        <div className="newDescription">{props.mattress[3].description}</div>
        <div className="newDetailsDiv">
          <div className="newPriceDiv">
            <div className="newPrice">$2,199</div>
            <div className="newSize">(King Mattress)</div>
            <button className="featuredButton" onClick={()=> {props.handleCurrentMattress(props.mattress[3])}}>Buy Now</button>
          </div>
          <div className="newReview">
            <div className="newBold">The future is here</div>
            <div>"I've been to the future, and they have nothing on the NextGen Memory Foam mattress. 
            After being cramped in the DeLorean all day, nothing beats stretching
            out on the NextGen Memory Foam mattress!"</div>
            <div>-Marty McFly-</div>
          </div> 
        </div>
        <img src="https://www.jarrodyellets.com/images/lumbar/mat3phone.png" className="newImg" alt="nextgen memory foam mattress" />
      </div>
    </div>
    )
}

export default New;