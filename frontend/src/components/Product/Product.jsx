import React, { useEffect, useState } from 'react';
import './style.sass'
import { url } from '../../constans'
import { Image } from 'antd';
import { useAppDispatch } from '../../redux';
import { setNameRedux, userAuthRedux } from '../../redux/toolkitReducer';
import { useSelector } from 'react-redux';

const Product = () => {
    const cartItems = useSelector(userAuthRedux)

    const dispatch = useAppDispatch()
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        let str = window.location.href
        const newUrl = "http://localhost:3000/product/"
        str = str.slice(newUrl.length)
        fetch(url + `getOneProducts?id=${str}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [])
    return (
        <div className='product'>
            <div className='product-images'>
                {product.images?.map(it => {
                    return (
                        <Image key={it}
                            width={200}
                            src={it}
                        />
                    )
                })}

            </div>
            <div className="product-main">
                <div className="product-main-title">
                    {product.title}
                </div>
                <div className="product-main-cost">
                    {product.cost} BYN
                </div>
                <div className="product-main-brand">
                    {product.brend}
                </div>
                <div className="product-main-description">
                    {product.description}
                </div>
                <button className='goods-cart-btn' onClick={() => {

                    dispatch(setNameRedux([...cartItems, product]))
                }}>
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default Product;