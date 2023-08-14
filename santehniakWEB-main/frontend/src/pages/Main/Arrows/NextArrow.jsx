import React from 'react';
import Arrow from '../../../assets/rightArrow.png'
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className='next-arrow'
            onClick={onClick}
        >
            <img src={Arrow} alt="" />
        </div>
    );
};

export default NextArrow;