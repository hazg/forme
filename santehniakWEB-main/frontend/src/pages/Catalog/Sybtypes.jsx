import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./style.sass"
import { Context } from '../../components/context';
const Sybtypes = ({ data, title }) => {
    const { handleCatalog } = useContext(Context)
    return (
        <>
            <div className='select-title'>{title}</div>
            <div className='catalog-container'>
                {data.map(item => {
                    console.log('item', item)
                    return (
                        <Link to={item.data} onClick={handleCatalog}>
                            <div key={item.title} className="catalog-item">
                                <div className="flex-start">
                                    <img className="catalog-item-image" src={item.image} alt="" />
                                </div>
                                <div className="flex-start">{item.title}</div>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </>
    );
};

export default Sybtypes;