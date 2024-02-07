import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import CartComponent from './cart/CartComponent'

const Cart = () => {

    const dispatch = useDispatch()
    const { cartsFetch, totalAmount, itemCount } = useSelector(state => state.carts)

    console.log(cartsFetch, totalAmount, itemCount, 'Carts')

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])



    return (
        <div className='font-bold min-h-screen' >
            {
                cartsFetch?.length > 0 ? <div>
                        {
                            cartsFetch?.map((cart, i) => (
                                <CartComponent key={i} cart={cart} />
                            ))
                        }
                       <div className='flex justify-center'    >
                       TOTAL  <span >:  {totalAmount} AZN </span>   
                       </div>
                    </div>
                    :
                    <div className='text-red-800 font-bold text-2xl text-center mt-10'> Empty Card</div>
            }
        </div>
    )
}

export default Cart