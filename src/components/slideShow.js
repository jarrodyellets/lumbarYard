import React from 'react';
import {Carousel} from 'react-bootstrap';
import Scroll from 'react-scroll-to-element';

const SlideShow = (props) => {
  return (
    <div className="carouselDiv" aria-label="slide show">
      <Carousel interval={5000} controls={true} pauseOnHover={false} >
        <Carousel.Item>
          <img className="slideImg slide1" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide2.jpg" />
          <div className="slideWrapper">
            <Carousel.Caption>
                <h3>feel the good vertibrations</h3>
                <button className="slideButton" onClick={()=> {props.handlePage("mattresses")}}>Shop all mattresses</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImg slide2" alt="900x500" src="https://www.jarrodyellets.com/images/lumbar/slide1.jpg" />
          <div className="slideWrapper">
            <Carousel.Caption>
                <h3>Hal Kitzmiller signature mattress</h3>
                <button className="slideButton" onClick={() => {props.handleCurrentMattress(props.mattress[0])}}>Buy now</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      <Scroll type="class" element="featuredDiv" offset={props.width > 850 ? - 50 : 0}>
        <i className="fas fa-angle-down downArrow"></i>
      </Scroll>
    </div>
    )
}

export default SlideShow;
