import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import Search from '../../assets/Search.png';
import Cart from '../../assets/Cart.png'
import './style.sass'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Header = ({ catalog, setCatalog }) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className='header'>
            <div className='header-top'>
                <Link className='header-top-link' to='/'>О компании</Link>
                <Link className='header-top-link' to='/'>Контакты</Link>
                <div>+375 (44) 888 88 88</div>
            </div>
            <div className='header-main'>
                <div className='header-main-logo'>
                    <img className='header-main-logo-image' src={Logo} alt="" />
                </div>
                <div className='header-main-catInp'>

                    <div onClick={() => setCatalog(!catalog)} className='header-main-catalog'>
                        Каталог
                    </div>
                </div>
                <Link to='/cart'>
                    <div className='header-main-cart'>
                        <ShoppingCartOutlined style={{
                            fontSize: 35,
                            color: 'rgba(237, 164, 21, 1)'
                        }} />
                        <div className='header-main-cart-title'>Корзина</div>
                    </div>
                </Link>
            </div>
            <div className='header-bottom'>
                <Link className='header-bottom-link' to=''>Магазины</Link>
                <Link className='header-bottom-link' to=''>Акции</Link>
                <Link className='header-bottom-link' to=''>Распродажа</Link>

            </div>
        </div>
    );
};

export default Header;