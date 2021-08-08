import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./slider.css"

import FeaturedPoems from './SliderItems/FeaturedPoems';
import NewFilms from './SliderItems/NewFilms';
import Icy from './SliderItems/Icy';

const Slider = () => {

  const sliderStyle = {
    height: 300,
    width: "auto"
  }

  return (
    <div className="carousel-outer">
      <Carousel infiniteLoop autoPlay="true" interval="8000" swipeable="true" showThumbs={false} showArrows={false}>
          <div style={sliderStyle}> 
            <FeaturedPoems />
          </div>
          <div style={sliderStyle}> 
            <NewFilms />
          </div>
          <div style={sliderStyle}> 
            <Icy />
          </div>
      </Carousel>
    </div>
  )
}

export default Slider;