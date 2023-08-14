import React, { Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import Catalog from '../pages/Catalog/Catalog';
import { useState } from 'react';
import './style.sass'
import { Context } from '../components/context';
const Layout = ({ children }) => {
    const [catalog, setCatalog] = useState(false)
    const handleCatalog = () => {
        setCatalog(prev => !prev)
    }
    return (
        <Context.Provider value={{
            handleCatalog
        }}>
            <Header catalog={catalog} setCatalog={setCatalog} />
            <Catalog catalog={catalog} />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </Context.Provider>
    );
};

export default Layout;