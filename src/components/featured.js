import React from 'react';

const Featured = (props) => {
	return(
		<div className="featuredDiv">
			<div className="featuredLeft">
				<img className="featuredLogo" src="https://www.jarrodyellets.com/images/lumbar/lumbarLogo1.png" />
				<div className="featuredLeftTitle">Druidia Air Mattress</div>
				<div className="featuredLeftDescription">The king of air mattresses!</div>
				<div className="featuredLeftPrice">$999</div>
				<div className="featruedLeftSize">(King Mattress)</div>
				<button className="featuredButton" onClick={()=> {props.handleCurrentMattress(props.mattress[1])}}>Buy Now</button>
			</div>
			<div className="featuredRight">
				<div className="featuredRightDescription">
					<div className="featuredRightReviewTitle">Best air mattress in the galaxy</div>
					<div>"After fighting Planet Spaceball all day, coming home to the Druidia Air Mattress has been a lifesaver.  
					Every morning I awake refreshed and ready to do battle with Dark Helmet."</div>
					<div>-Lone Star-</div>
				</div>
				<img className="featuredRightImg" src={props.mattress[1].image} />
				<img className="featuredWarranty" src="https://www.jarrodyellets.com/images/lumbar/warranty.png" />
			</div>
		</div>
		)
}

export default Featured;