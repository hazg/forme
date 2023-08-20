import React from 'react';
import Arrow from '../../../assets/leftArrow.png'
const NextSliderArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
            className='next-slider-arrow'
            onClick={onClick}
        >
            <img src={Arrow} alt="" />
        </div>
    );
};

export default NextSliderArrow;