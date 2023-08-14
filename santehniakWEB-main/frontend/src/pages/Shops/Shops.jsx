import GoogleMapReact from 'google-map-react';
import './style.sass'
import { data } from './data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/index'
import { setNameRedux } from '../../redux/toolkitReducer';
const Shops = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(0)
    const defaultProps = {
        center: {
            lat: 53.9,
            lng: 27.5667
        },
        zoom: 11
    };
   
    return (
        <>
            <div onClick={() => {
                setValue(value => value + 1)
                dispatch(setNameRedux(value + 1))
            }} className='addres-title'>Геолокая магазинов {value}</div>
            <Link to='/stock'>stock</Link>
            <div className='addres' style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
                <div className='addres-list'>
                    {data.map(item => {
                        return (
                            <div className='addres-list-item'>
                                <div className="addres-list-item-addres">
                                    {item.addres}
                                </div>
                                <div className="addres-list-item-time">
                                    {item.time}
                                </div>
                                <div className="addres-list-item-term">
                                    {item.term}
                                </div>
                                <Link className='addres-list-item-button' to={item.path}>
                                    О пункте
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Shops;