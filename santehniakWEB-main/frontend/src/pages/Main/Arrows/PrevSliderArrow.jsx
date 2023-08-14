import React from 'react';
import Arrow from '../../../assets/leftArrow.png'
const PrevSliderArrow = (props) => {
    const { className, style, onClick } = props;

    return (

        <div
            className='prev-slider-arrow'
            onClick={onClick}
        >
            <img src={Arrow} alt="" />
        </div>
    );
};

export default PrevSliderArrow;