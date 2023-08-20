import React, { useEffect, useState } from 'react';
import './style.sass'
import { useSelector } from 'react-redux';
import { userAuthRedux } from '../../redux/toolkitReducer';
import { Radio, Input, Checkbox } from 'antd';
import { url } from '../../constans'
const { TextArea } = Input;

const Ordering = () => {
    const [cost, setCost] = useState(0)
    const cartItems = useSelector(userAuthRedux)
    const [items, setItems] = useState(cartItems)
    console.log(cartItems)
    const [radio, setRadio] = useState('Физическое лицо');
    const [telephone, setTelephone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [radioDelivery, setRadioDelivery] = useState('')
    const [adress, setAdress] = useState('')
    const [house, setHouse] = useState('')
    const [apartaments, setApartaments] = useState('')
    const [entrance, setEntrance] = useState('')
    const [message, setMessage] = useState('')
    const [isLifting, setIsLifting] = useState(false)
    const [isAnyName, setIsAnyName] = useState(false)

    const cartItemsAmount = cartItems.map((item) =>
        Object.assign({}, item, { amount: 1 })
    )
    const count = cartItems.length
    function sumCost() {
        let sum = 0
        cartItems.forEach(item => {
            console.log(item)
            sum += +item.cost
        })
        setCost(cost => sum)
    }
    useEffect(() => {
        setItems(cartItems)
        sumCost()
        console.log('cost')

    }, [cartItems])

    const onChangeInput = (e, setState) => {
        setState(e.target.value)
    }
    function setOrder(items, cost, radio, telephone, name, email, radioDelivery, adress, house, apartaments, entrance, message, isLifting, isAnyName) {
        console.log(items, 'items')
        fetch(url + 'sendOrder', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                items,
                cost,
                radio,
                telephone,
                name,
                email,
                radioDelivery,
                adress,
                house,
                apartaments,
                entrance,
                message,
                isLifting,
                isAnyName
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='order-container'>
            <div className='order'>
                <div className='order-cart'>
                    <div className='order-cart-title'>Контактные данные</div>
                    <div className='order-cart-radio'>
                        <Radio.Group onChange={(e) => {
                            onChangeInput(e, setRadio)
                        }} value={radio}>
                            <Radio value='Физическое лицо'>Физическое лицо</Radio>
                            <Radio value='Юридическое лицо'>Юридическое лицо</Radio>
                        </Radio.Group>
                    </div>
                    <Input className='ordering-input' placeholder="Телефон" value={telephone} onChange={(e) => {
                        onChangeInput(e, setTelephone)
                    }} />
                    <Input className='ordering-input' placeholder="Имя и фамилия" value={name} onChange={(e) => {
                        onChangeInput(e, setName)
                    }} />
                    <Input className='ordering-input' placeholder="Электронная почта" value={email} onChange={(e) => {
                        onChangeInput(e, setEmail)
                    }} />
                </div>
                <div className='order-cart'>
                    <div className='order-cart-title'>Способ получения</div>
                    <Radio.Group onChange={(e) => {
                        onChangeInput(e, setRadioDelivery)
                    }} value={radioDelivery}>
                        <Radio value='Доставка'>Доставка</Radio>
                        <Radio value='Самовывоз'>Самовывоз</Radio>
                    </Radio.Group>
                </div>
                <div className='order-cart'>
                    <div className='order-cart-title'>
                        Адрес доставки
                    </div>
                    <form>
                        <Input className='ordering-input' placeholder="Адрес" value={adress} onChange={(e) => {
                            onChangeInput(e, setAdress)
                        }} />
                        <div className='cart-mini-container'>
                            <Input className='ordering-input ordering-input-mini' placeholder="Дом" value={house} onChange={(e) => {
                                onChangeInput(e, setHouse)
                            }} />
                            <Input className='ordering-input ordering-input-mini' placeholder="Квартира" value={apartaments} onChange={(e) => {
                                onChangeInput(e, setApartaments)
                            }} />
                            <Input className='ordering-input ordering-input-mini' placeholder="Подъезд" value={entrance} onChange={(e) => {
                                onChangeInput(e, setEntrance)
                            }} />
                        </div>
                        <TextArea
                            placeholder="Комментарий к доставке"
                            value={message}
                            onChange={(e) => {
                                onChangeInput(e, setMessage)
                            }}
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </form>
                </div>
                <div className='order-cart'>
                    <div className='order-cart-title'>
                        Условия доставки
                    </div>
                    <div className='order-cart-cost-container'>
                        <div className=''>
                            Стоимость доставки
                        </div>
                        <div className='order-cart-cost'>
                            999p.
                        </div>
                    </div>
                    <div className='flex-column'>
                        <Checkbox onChange={() => {
                            setIsLifting(prev => !prev)
                        }}>Потребуется подъем на этаж</Checkbox>
                        <Checkbox onChange={() => {
                            setIsAnyName(prev => !prev)
                        }}>Заказ на другое имя</Checkbox>
                    </div>

                </div>
                <div className='order-cart' >
                    <div className="order-cart-title">
                        Способ оплаты
                    </div>
                    <div>
                        <Radio value={true} checked>При получении</Radio>
                        <div>
                            Наличными или картой
                        </div>
                    </div>
                </div>
            </div>
            <div className='total'>
                <div className='total-cart'>
                    <div className='flex-betw'>
                        <div>
                            Ваш заказ
                        </div>
                        <div>
                            {count} товаров
                        </div>
                    </div>
                    <div className="flex-betw">
                        <div>
                            Скидка по акции
                        </div>
                        <div>
                            -XXXр.
                        </div>
                    </div>
                    <div className="flex-betw">
                        <div>
                            Стоимость товаров
                        </div>
                        <div>
                            {cost}BYN
                        </div>
                    </div>
                    <div className="flex-betw">
                        <div>
                            Доставка
                        </div>
                        <div>
                            XXXр.
                        </div>
                    </div>
                    <button onClick={() => {
                        console.log('click')
                        setOrder(items, cost, radio, telephone, name, email, radioDelivery, adress, house, apartaments, entrance, message, isLifting, isAnyName)

                    }} className='cart-total-btn'>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};

export default Ordering;