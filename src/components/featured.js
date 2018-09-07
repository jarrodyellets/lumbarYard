import React from 'react';
import PropTypes from 'prop-types';

const Featured = (props) => {
  return(
    <div className="featuredDiv" aria-label="featured">
      <div className="featuredLeft">
        <img className="featuredLogo" src="https://www.jarrodyellets.com/images/lumbar/lumbarLogo1.png" alt="Lumbar Yard logo"/>
        <div className="featuredLeftTitle">Druidia Air Mattress</div>
        <div className="featuredLeftDescription">The king of air mattresses!</div>
        <div className="featuredLeftPrice">$999</div>
        <div className="featruedLeftSize">(King Mattress)</div>
        <button className="featuredButton" onClick={()=> {props.handleCurrentMattress(props.mattress[1])}}>Buy Now</button>
      </div>
      <div className="featuredRight">
        <div className="featuredRightDescription">
          <div className="featuredRightReviewTitle">Best air mattress in the galaxy</div>
          <div>&quot;After fighting Planet Spaceball all day, coming home to the Druidia Air Mattress has been a lifesaver.  
          Every morning I awake refreshed and ready to do battle with Dark Helmet.&quot;</div>
          <div>-Lone Star-</div>
        </div>
        <img className="featuredRightImg" src="https://www.jarrodyellets.com/images/lumbar/mat1war.png" alt="NexGen Memory foam mattress" />
      </div>
    </div>
  )
}

Featured.propTypes = {
  handleCurrentMattress: PropTypes.func,
  mattress: PropTypes.array
}

export default Featured;