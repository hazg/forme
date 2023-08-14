import React, { useEffect } from 'react';
import './style.sass'
import { useState } from 'react';
import { url } from '../../constans';
import { useAppDispatch } from '../../redux';
import { setNameRedux, userAuthRedux } from '../../redux/toolkitReducer';
import { useSelector } from 'react-redux';
import { Select, Button, Slider } from 'antd';
import { useNavigate } from 'react-router-dom';


const Goods = ({ subcategory }) => {
    const [brandArray, setBrandArray] = useState([])
    const [typeArray, setTypeArray] = useState([])
    const [costArray, setCostArray] = useState([])
    const navigate = useNavigate()


    const [selectBrand, setSelectBrand] = useState([])
    const [selectType, setSelectType] = useState([])
    const [selectCost, setSelectCost] = useState([])


    const dispatch = useAppDispatch()
    const cartItems = useSelector(userAuthRedux)

    const [items, setItems] = useState([])
    const getItems = (subcategory) => {
        fetch(url + 'findProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subcategory: `${subcategory}`,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
                uniqueFilter(data, 'brend', setBrandArray)
                uniqueFilter(data, 'type', setTypeArray)
                uniqueFilter(data, 'cost', setCostArray)
                console.log('cost', costArray)

            })
    }
    const getSelectItems = (subcategory, brend, type, cost) => {
        console.log(subcategory, brend)
        fetch(url + 'findProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subcategory: `${subcategory}`,
                ...(brend.length ? { brend } : { brandArray }),
                ...(type.length ? { type } : { typeArray }),
                ...(cost.length ? {
                    cost: {
                        $gte: cost[0], $lte: cost[1]
                    }
                } : { costArray }),


            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            })
    }
    useEffect(() => {
        getItems(subcategory)
    }, [])
    function uniqueFilter(array, str, setState) {
        const uniqueArr = []
        array.map((it) => {
            if (!uniqueArr.find((item) => item.value == it[str])) {
                uniqueArr.push({
                    value: it[str],
                    label: it[str],
                    count: 0
                })
            }
        })
        setState(uniqueArr);
        console.log('uniq', uniqueArr)

    }
    const handleButton = () => {
        console.log('click')
        getSelectItems(subcategory, selectBrand, selectType, selectCost)
    }
    const handleChange = (value, setState) => {
        setState(value)
    };
    const getMinValue = (array) => {
        const arr = [...array]
        const val = arr.sort((a, b) => a > b ? -1 : 1)[0]?.value
        return val
    }
    const getMaxValue = (array) => {
        const arr = [...array]
        const val = arr.sort((a, b) => a > b ? 1 : -1)[0]?.value
        return val
    }
    return (
        <div className='goods-container'>
            <div className='sider-filters'>
                <div className='sider-filters-brand'>
                    Бренд
                </div>
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                        marginBottom: 10
                    }}
                    placeholder="Выберите бренд"
                    onChange={(e) => {
                        handleChange(e, setSelectBrand)
                    }}
                    options={brandArray}
                />

                <div className='sider-filters-type'>
                    Тип
                </div>
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                        marginBottom: 10

                    }}
                    placeholder="Выберите тип"
                    onChange={(e) => {
                        handleChange(e, setSelectType)
                    }
                    }
                    options={typeArray}
                />
                <div className='sider-filters-cost'>
                    Цена
                </div>
                <Slider range
                    defaultValue={[0, 999999]}
                    max={
                        getMaxValue(costArray)

                    } min={
                        getMinValue(costArray)
                    }
                    onChange={(value) => setSelectCost(value)} />
                <Button onClick={() => { handleButton() }} type="primary">Найти</Button>
            </div>
            <div className='goods'>
                {items.length === 0 ?
                    <h1>Нет товаров</h1>
                    :
                    items.map(item => {
                        return (
                            <div className='goods-cart'>
                                <div onClick={() => {
                                    navigate(`/product/${item._id}`)
                                }} className='goods-cart-container'>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: "center"
                                    }}>
                                        <img className='goods-cart-img' src={item.images[0]} alt="" />
                                    </div>
                                    <div className='goods-cart-title'>
                                        {item.title}
                                    </div>
                                    <div className='goods-cart-cost'>
                                        {item.cost} руб.
                                    </div>

                                    {/* <div className='goods-cart-type'>
                                        {item.type}
                                    </div>
                                    <div className='goods-cart-subtype'>
                                        {item.subtype}
                                    </div> */}
                                </div>
                                <button className='goods-cart-btn' onClick={() => {

                                    dispatch(setNameRedux([...cartItems, item]))
                                }}>
                                    Добавить в корзину
                                </button>
                            </div>
                        )
                    })

                }
                { }
            </div>
        </div>
    );
};

export default Goods;