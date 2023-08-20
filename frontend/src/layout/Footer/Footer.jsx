import './style.sass'
import { Link } from 'react-router-dom';
import { about, purchaser, service, selections } from './data';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-nav flex-icons'>
                <div className='footer-nav-about'>
                    <div className='nav-header'>
                        О нас
                    </div>
                    <div className='nav-list'>
                        {about.map(item => {
                            return (
                                <Link className='nav-list-item' to={item.path}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='footer-nav-purchaser'>
                    <div className='nav-header'>
                        Покупателям
                    </div>
                    <div className='nav-list'>
                        {purchaser.map(item => {
                            return (
                                <Link className='nav-list-item' to={item.path}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='footer-nav-service'>
                    <div className='nav-header'>
                        Сервис
                    </div>
                    <div className='nav-list'>
                        {service.map(item => {
                            return (
                                <Link className='nav-list-item' to={item.path}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='footer-nav-selections'>
                    <div className='nav-header'>
                        Подборки
                    </div>
                    <div className='nav-list'>
                        {selections.map(item => {
                            return (
                                <Link className='nav-list-item' to={item.path}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='contacts flex-icons'>
                <div className='contacts-tel'>
                    <div className='contacts-tel-num'>
                        <p className='mb-8px'>Контакты</p>
                        <div className='contacts-tel-num-container'>
                            <div className='contacts-tel-num-container-item'>+375 44 888 88 88</div>
                            <div className='contacts-tel-num-container-item'>+375 44 888 88 88</div>
                        </div>
                        <div className='contacts-tel-num-address'>г. Минск Lorem Lorem Lorem</div>
                    </div>
                    <div className='contacts-tel-write'>
                        <div className='mb-8px'>Напиши нам</div>
                        <div className='flex-icons'>
                            <img src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/telegram.svg" alt="" />
                            <img src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/vk.svg" alt="" />
                            <img src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/viber.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='contacts-social'>
                    <div className='mb-8px'>Мы в соц сетях</div>
                    <div className='flex-icons'>
                        <img className='mr-12px' src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/vk.svg" alt="" />
                        <img className='mr-12px' src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/ok.svg" alt="" />
                        <img className='mr-12px' src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/zen.svg" alt="" />
                        <img src="https://santehnika-online.ru/bitrix/templates/react/build/bundles/_assets_/app/templates/default/components/footer/common/contacts/images/telegram.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='footer-docs flex-icons'>
                <div className='footer-docs-links'>
                    <Link className='mr-12px fs-12px' to=''>Документы</Link>
                    <Link className='mr-12px fs-12px' to=''>Публичная оферта для физических лиц</Link>
                    <Link className='mr-12px fs-12px' to=''>Пользовательское соглашение для юридических лиц</Link>
                    <Link className='mr-12px fs-12px' to=''>Политика конфиденциальности</Link>

                </div>
                <div className='fs-12px'>
                    Сантехника Онлайн Ру © Москва 2008-2022 Все права защищены.
                </div>
            </div>
        </div>
    );
};

export default Footer;