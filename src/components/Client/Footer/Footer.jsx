import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../features/data/dataSlice';
import { Button } from '../Button/Button';

export const Footer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.actionReducer)
    const { cart } = useSelector(state => state.dataReducer)

    const handleNavigateToCart = () => {
        navigate('/cart')
    }
    const handleNavigateToHome = () => {
        dispatch(clearCart())
        navigate('/')
    }

    return (
        <footer className="footer">
            <div className='button-wrapper'>
                <Button onClick={()=> navigate('/error')}>Error</Button>
                <Button onClick={()=> navigate('/success')}>Success</Button>
            </div>
        </footer>
    )
}