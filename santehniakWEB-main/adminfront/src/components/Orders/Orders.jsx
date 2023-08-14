import React, { useEffect, useState } from 'react';
import { url } from '../url'
import { Link } from 'react-router-dom'

import './style.css'
const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch(url + 'getOrders')
            .then(res => res.json())
            .then(data => setOrders(data.reverse()))
        setInterval(() => {
            fetch(url + 'getOrders')
                .then(res => res.json())
                .then(data => setOrders(data.reverse()))
            console.log('interval')
        }, 300000)
    }, [])
    function DateConverter(date) {
        const today = new Date(date);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const now = today.toLocaleString('ds-DE', options);
        return now
    }
    return (
        <>
            <Link to='/addProduct'>ДОБАВИТЬ ТОВАР</Link>

            {orders.map(it => {
                return (
                    <div key={Math.random()} className='order'>
                        <div className='order-field'>{it.items?.map(el => {
                            return (
                                <div key={Math.random()}>
                                    <div className='order-field'>Название товара:  {el.title}  </div>
                                    <div className='order-field'>  Цена:   {el.cost}</div>
                                </div>


                            )
                        })}</div>
                        <div className='order-field'>Дата:  {DateConverter(it.date)}</div>

                        <div className='order-field'>Общая цена:  {it.cost}</div>
                        <div className='order-field'>лицо:  {it.radio} </div>
                        <div className='order-field'>телефон: {it.telephone}</div>
                        <div className='order-field'>имя: {it.name}</div>
                        <div className='order-field'>почта:  {it.email}</div>
                        <div className='order-field'>Доставка:  {it.radioDelivery}</div>
                        <div className='order-field'>Адрес:  {it.adress}</div>
                        <div className='order-field'>Дом:  {it.house} </div>
                        <div className='order-field'>Квартира:  {it.apartaments} </div>
                        <div className='order-field'>Подъезд:  {it.entrance} </div>
                        <div className='order-field'>Сообщение:  {it.message} </div>
                        <div className='order-field'>Подъем на этаж:  {it.isLifting} </div>
                        <div className='order-field'>Другое имя:  {it.isAnyName}</div>


                    </div>
                )
            })}
        </>

    );
};

export default Orders;