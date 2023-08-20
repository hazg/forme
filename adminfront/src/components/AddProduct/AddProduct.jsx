import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import { url } from '../url';
const AddProduct = () => {
    const [id, setId] = useState('')

    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [images, setImages] = useState('')
    const [cost, setCost] = useState('')
    const [brend, setBrend] = useState('')
    const [description, setDescription] = useState('')
    function addProduct() {
        fetch(url + 'setProduct', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id,
                category,
                subcategory,
                type,
                title,
                images: images.split(","),
                cost: +cost,
                brend,
                description,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <>
            <Link to='/'>ЗАКАЗЫ</Link>
            <div>
                <Input value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
                <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Категория" />
                <Input value={subcategory} onChange={(e) => setSubcategory(e.target.value)} placeholder="Подкатегория" />
                <Input value={type} onChange={(e) => setType(e.target.value)} placeholder="Тип" />
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" />
                <Input value={images} onChange={(e) => setImages(e.target.value)} placeholder="Картинки" />
                <Input value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Цена" />
                <Input value={brend} onChange={(e) => setBrend(e.target.value)} placeholder="Бренд" />
                <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" />
                <Button onClick={addProduct} type="primary">Отправить</Button>
            </div>
        </>
    );
};

export default AddProduct;