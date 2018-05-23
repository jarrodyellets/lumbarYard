import React from 'react';
import {Carousel} from 'react-bootstrap';

const SlideShow = (props) => {
	return (
		<div className="carouselDiv">
			<Carousel interval={5000} controls={true} pauseOnHover={false} >
			  <Carousel.Item>
			    <img className="slideImg slide1" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide2.jpg" />
			    <Carousel.Caption>
			      <h3>feel the good vertibrations</h3>
			      <button className="slideButton" onClick={()=> {props.handlePage("mattresses")}}>Shop all mattresses</button>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img className="slideImg slide2" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide1.jpg" />
			    <Carousel.Caption>
			      <h3>Hal Kitzmiller signature mattress</h3>
			      <button className="slideButton" onClick={()=> {props.handleCurrentMattress(props.mattress[0])}}>Buy now</button>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			<i className="fas fa-angle-down downArrow"></i>
		</div>
		)
}

export default SlideShow;