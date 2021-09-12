import React, {useState, useEffect} from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import imgDeco from '../assets/img/decoration.png'
import imgLine01 from '../assets/img/line01.png'
import imgLine02 from '../assets/img/line02.png'
import Features from "./features"

const data = [
    {
        image: require('../assets/img/house.png'),
        imageStyle: {
            bottom: '0px',
            right: '0px'
        },
        title: 'Cryptocurrency mining with ',
        subtitle: 'photovoltaic system',
        description: 'Earn mining rewards by converting energy from the sun into SolarMineX tokens!'
    },
    {
        image: require('../assets/img/charger.png'),
        imageStyle: {
            bottom: '80px',
            right: '40px',
            maxWidth: '50%'
        },
        title: 'Cryptocurrency mining with ',
        subtitle: 'mobile system',
        description: 'Earn mining rewards by converting energy from the sun into SolarMineX tokens!'
    }
]

const Intro = () => {
    return (
        <div className="section section-intro">
            <img src={imgDeco} className="intro-bg-deco" />
            <img src={imgLine01} className="intro-bg-line01" />
            <img src={imgLine02} className="intro-bg-line02" />

            <div className="intro-content">
                <Carousel fade controls={false} interval={5000} pause={false} indicators={false}>
                    {data.map((item, idx) => (
                        <CarouselItem key={idx} className="content">
                            <div className="content-text">
                                <h2 className="title">{item.title}</h2>
                                <h2 className="subtitle">
                                    {item.subtitle}
                                    <div className="text-line"></div>
                                </h2>
                                <p className="description mb-4">
                                    {item.description}
                                </p>
                                <a href="#">
                                    <div className="btn-shopnow">Buy Now</div>
                                </a>
                            </div>                            
                            <img className="content-image" src={item.image} style={item.imageStyle} />
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>

            <Features />
        </div>
    );
  };
  
  export default Intro;
  