import './style.sass'
import { data } from './data';
import { useSelector } from 'react-redux';
import { userAuthRedux } from '../../redux/toolkitReducer';
import { setNameRedux } from '../../redux/toolkitReducer';
import { useDispatch } from 'react-redux';
const Stock = () => {
    const userAuth = useSelector(userAuthRedux)
 const dispatch = useDispatch()
    return (
        <div className='stock'>
            <div className='stock-title'>
                Акции 
            </div>
            <div className='stock-list'>
                {data.map(item => {
                    return (
                        <>
                            <div className='stock-list-item' onClick={() => {
                                dispatch(setNameRedux([...userAuth, '0']))
                            }}>
                                <img className='stock-list-item-image' src={item.image} alt="" />
                                <div className='stock-list-item-time'>{item.time}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Stock;