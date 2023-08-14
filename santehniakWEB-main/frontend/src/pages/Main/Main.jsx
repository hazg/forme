import React, { createRef, useState } from 'react';
import './style.sass'
import SliderList from '../../components/Slider';
import { Link } from 'react-router-dom';
import { category } from './category';
import Slider from 'react-slick';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow';
import { data } from './clientSelect/data';
import Arrow from '../../assets/rightArrow.png'

const Main = () => {
    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <SliderList />
            <div className='discount'>
                <Link className='discount-all'>Все акции</Link>
                <div className='discount-container'>
                    <div className='discount-item'>
                        <img src="https://static.santehnika-online.ru/static/q8th6JO_CVQWPNaQrn3KQ8FDwxmvAw75FVWZSUPAxlw/rs:fit:940:380:0/g:no/aHR0cHM6Ly9zYW50ZWhuaWthLW9ubGluZS5ydS91cGxvYWQvaWJsb2NrLzI0OC8yNDgyNjI3ZTJkYjdiM2M3ZDQzYzg2NTYwZWY0YzA1MS5qcGc.jpg" alt="" />
                    </div>
                    <div className='discount-item'>
                        <img src="https://static.santehnika-online.ru/static/q8th6JO_CVQWPNaQrn3KQ8FDwxmvAw75FVWZSUPAxlw/rs:fit:940:380:0/g:no/aHR0cHM6Ly9zYW50ZWhuaWthLW9ubGluZS5ydS91cGxvYWQvaWJsb2NrLzI0OC8yNDgyNjI3ZTJkYjdiM2M3ZDQzYzg2NTYwZWY0YzA1MS5qcGc.jpg" alt="" />
                    </div>
                    <div className='discount-item'>
                        <img src="https://static.santehnika-online.ru/static/q8th6JO_CVQWPNaQrn3KQ8FDwxmvAw75FVWZSUPAxlw/rs:fit:940:380:0/g:no/aHR0cHM6Ly9zYW50ZWhuaWthLW9ubGluZS5ydS91cGxvYWQvaWJsb2NrLzI0OC8yNDgyNjI3ZTJkYjdiM2M3ZDQzYzg2NTYwZWY0YzA1MS5qcGc.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {category.map(item => {
                    return (

                        <div className='category' style={{ width: '100%', padding: 16 }}>
                            <div className='category-item'>
                                <Link className='category-item-container' to={item.path}>
                                    <div className='category-item-name'>
                                        {item.name}
                                    </div>
                                    <div className='category-item-image'>
                                        <img src={item.img} alt="" />
                                    </div>

                                </Link>
                            </div>
                        </div>

                    )
                })}
                <div className='all-category category-item' style={{ width: 180 }}>
                    <div className='category-item-name'>
                        Все категории
                    </div>
                    <div className='category-item-image'>

                    </div>
                </div>
            </Slider>
            <div className='banner'>
                <Link to='/main'>
                    <img src="https://static.santehnika-online.ru/static/zohpTM_Bqxza6n11u3TgVzD_cmjduvvwLA0XB7p_lDY/g:no/aHR0cHM6Ly9zYW50ZWhuaWthLW9ubGluZS5ydS91cGxvYWQvcmsvMDUzLzA1MzIxODk0NWU0MmYzZTcwZTZiODRmMDU4MjBmM2RhLmpwZw.jpg" alt="" />
                </Link>
            </div>
            <div class='clientSelect'>
                {data.map(item => {
                    return (
                        <Link to=''>
                            <div className='clientSelect-container'>
                                <div className='clientSelect-container-header'>
                                    <img src={item.logo} alt="" />
                                    <div className='clientSelect-container-header-arrow'>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    );
};

export default Main;