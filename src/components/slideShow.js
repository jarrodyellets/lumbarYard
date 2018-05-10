import React from 'react';
import {Carousel} from 'react-bootstrap';

const SlideShow = (props) => {
	return (
		<Carousel interval={5000} controls={true} pauseOnHover={false} >
		  <Carousel.Item>
		    <img className="slideImg" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide1.jpg" />
		    <Carousel.Caption>
		      <h3>First slide label</h3>
		      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img className="slideImg" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/mat4.png" />
		    <Carousel.Caption>
		      <h3>Second slide label</h3>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
		)
}

export default SlideShow;