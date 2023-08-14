import React from 'react';
import Arrow from '../../../assets/leftArrow.png'

const PrevArrow = (props) => {
    const { style, onClick } = props;
  return (
    <div
            className='prev-arrow'
            onClick={onClick}
        >
            <img src={Arrow} alt="" />
        </div>
  );
};

export default PrevArrow;