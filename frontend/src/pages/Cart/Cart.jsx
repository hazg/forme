import React, { useState } from 'react';
import './style.sass'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { userAuthRedux } from '../../redux/toolkitReducer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
const Cart = () => {
    const [cost, setCost] = useState(0)
    const cartItems = useSelector(userAuthRedux)

    const cartItemsAmount = cartItems.map((item) =>
        Object.assign({}, item, { amount: 1 })
    )
    const count = cartItems.length
    let tmpArray = [];
    useEffect(() => {
        sumCost()
        console.log('cost')

    }, [cartItems])

    function itemCheck(item) {
        if (tmpArray.findIndex(el => el.title === item.title) === -1) {

            tmpArray.push(item);
            return true
        } else {
            const index = tmpArray.findIndex(el => el.title === item.title)
            tmpArray[index].amount += 1
        }
        tmpArray = tmpArray.sort((a, b) => a.title > b.title ? 1 : -1)
        return false;
    }
    function sumCost() {
        let sum = 0
        cartItems.map(item => {
            console.log(item)
            sum += +item.cost
        })
        setCost(cost => sum)
    }
    cartItemsAmount.map(item => itemCheck(item))
    console.log('tmpArray', tmpArray)

    return (
        <div className='cart'>
            <div className="cart-item-list">
                {tmpArray.length ?
                    tmpArray.map(item => {
                        return (<CartItem key={item.title} item={item}></CartItem>)

                    })
                    :
                    <h1>Пусто</h1>}


            </div>
            <div className='cart-total'>
                <div className='flex-sp-btw'>
                    <div className=''>Товаров - {count}</div>
                    <div className=''>{cost}р.</div>
                </div>
                <div className='flex-sp-btw'>
                    <div className=''>Скидка по акции</div>
                    <div className=''>-100р.</div>
                </div>
                <Link to='/ordering' className='cart-total-btn'>Перейти к оформлению</Link>
            </div>
        </div>
    );
};

export default Cart;