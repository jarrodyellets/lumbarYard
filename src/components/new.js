import React from 'react';

const New = (props) => {
	return(
		<div className="newWrapper">
			<img src="https://www.jarrodyellets.com/images/lumbar/new.png" className="newNew" />
			<div className="newContent">
				<img src="https://www.jarrodyellets.com/images/lumbar/lumbarLogo1.png" />
				<div className="newTitleUpper">NexGen</div>
				<div className="newTitleLower">Memory Foam</div>
				<div className="newDescription">{props.mattress[3].description}</div>
				<div className="newDetailsDiv">
					<div className="newPriceDiv">
						<div className="newPrice">$2,199</div>
						<div className="newSize">(King Matress)</div>
						<button className="featuredButton">Buy Now</button>
					</div>
					<div className="newReview">
						<div className="newBold">The future is here</div>
						<div>"I've been to the future, and they have nothing on the NexGen Memory Foam mattress. 
						After being cramped in the DeLorean all day, nothing beats stretching
						out on the NexGen Memory Foam mattress!"</div>
						<div>-Marty McFly-</div>
					</div>
				</div>
				<img src={props.mattress[3].image} className="newImg" />
				<img src="https://www.jarrodyellets.com/images/lumbar/iphoneLumbar.png" className="newIphone" />
			</div>
		</div>
		)
}

export default New;