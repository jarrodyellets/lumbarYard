import React from 'react';
import {Carousel} from 'react-bootstrap';

const SlideShow = (props) => {
	return (
		<Carousel interval={5000} controls={true} pauseOnHover={false} >
		  <Carousel.Item>
		    <img className="slideImg slide1" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide2.jpg" />
		    <Carousel.Caption>
		      <h3>feel the good vertibrations</h3>
		      <button className="slideButton">Shop all mattresses</button>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img className="slideImg slide2" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide1.jpg" />
		    <Carousel.Caption>
		      <h3>Hal Kitzmiller signature mattress</h3>
		      <button className="slideButton">Buy now</button>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
		)
}

export default SlideShow;