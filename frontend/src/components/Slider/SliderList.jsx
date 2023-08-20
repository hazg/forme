import React from 'react';
import Slider from "react-slick";
import './style.sass'
import NextSliderArrow from '../../pages/Main/Arrows/NextSliderArrow';
import PrevSliderArrow from '../../pages/Main/Arrows/PrevSliderArrow';
const SliderList = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextSliderArrow />,
        prevArrow: <PrevSliderArrow />,
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <img className='slider-image' src="https://azur.ru/data/regions/towns/bigbalka.jpg" alt="" />
                </div>
                <div>
                    <img className='slider-image' src="https://azur.ru/data/regions/towns/bigbalka.jpg" alt="" />

                </div>
                <div>
                    <img className='slider-image' src="https://azur.ru/data/regions/towns/bigbalka.jpg" alt="" />

                </div>
                <div>
                    <img className='slider-image' src="https://azur.ru/data/regions/towns/bigbalka.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderList;