import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./slider.css"

import FeaturedPoems from './SliderItems/FeaturedPoems';
import NewFilms from './SliderItems/NewFilms';
import Icy from './SliderItems/Icy';
import Patreon from "./SliderItems/Patreon";

const Slider = (props) => {
  const [sliderSelect, setSliderSelect] = useState("Home")
  const sliderStyle = {
    height: 300,
    width: "auto",
    paddingTop: "10%"
  }

  useEffect(() => {
    props.onChange(sliderSelect)

  }, [sliderSelect])



  return (
    <div className="carousel-outer">
      <Carousel infiniteLoop autoPlay="true" interval="8000" swipeable="true" showThumbs={false} showArrows={false}>
          <div style={sliderStyle}> 
            <Patreon />
          </div>
          <div style={sliderStyle}> 
            <Icy />
          </div>
      </Carousel>
    </div>
  )
}

export default Slider;