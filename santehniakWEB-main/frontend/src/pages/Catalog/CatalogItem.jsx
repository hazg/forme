import React, { useEffect, useState } from 'react';
import Sybtypes from './Sybtypes';

const CatalogItem = ({ data, setData, isType, setIsType }) => {
    const [title, setTitle] = useState()

    if (isType) {
        return (
            <Sybtypes title={title} data={data} />
        )
    } else {
        return (
            <>
                <div className='catalog-container'>
                    {data.map(item => {
                        return (
                            <div onClick={() => {
                                setTitle(item.title)
                                setData(item.data)
                                setIsType(true)
                            }} key={item.title} className="catalog-item">
                                <div className="flex-start">
                                    <img className="catalog-item-image" src={item.image} alt="" />
                                </div>
                                <div className="flex-start">{item.title}</div>
                            </div>
                        )
                    })}

                </div>
            </>
        );
    }
};

export default CatalogItem;