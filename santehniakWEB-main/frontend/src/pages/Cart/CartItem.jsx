import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux';
import { useSelector } from 'react-redux';
import { setNameRedux, userAuthRedux } from '../../redux/toolkitReducer';

const CartItem = ({ item }) => {
    console.log(item)
    const amount = item.amount
    const cartItems = useSelector(userAuthRedux)
    const dispatch = useAppDispatch()

    const [value, setValue] = useState(amount)

    const increaseCartItems = () => {
        setValue(value => value + 1)
        dispatch(setNameRedux([...cartItems, item]))
    }
    const decreaseCartItems = () => {
        if (value == 0) {
            return
        }

        setValue(value => value - 1)
        const index = cartItems.findIndex(el => el.title === item.title)
        const arr = [...cartItems]
        console.log('cartItems/index', cartItems, index)
        arr.splice(index, 1)
        dispatch(setNameRedux(arr))

    }
    return (
        <div className='cart-item-container'>
            <img className='cart-item-container-image' src={item.images[0]} alt="" />
            <div className='cart-item-container-data'>
                <div className="cart-item-container-data-title">
                    {item.title}
                </div>
                <div className="cart-item-container-data-description">
                    {item.cost}
                </div>
            </div>
            <div className='cart-item-container-counter'>
                <button className='p5px fs-24px c-pointer' onClick={decreaseCartItems}>-</button>
                <input className='cart-item-container-counter-input' type="text" value={value} onChange={(e) => {
                    setValue(+e.target.value)
                }} />
                <button className='p5px fs-24px c-pointer' onClick={increaseCartItems}>+</button>
            </div>
        </div>
    );
};

export default CartItem;