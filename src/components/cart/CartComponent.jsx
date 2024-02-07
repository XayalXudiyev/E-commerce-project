import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComponent = ({ cart }) => {

  const dispatch = useDispatch()
 
 const deleteProductFromcart =()=>{
  dispatch(removeFromCart(cart.id))
  window.location.reload();
 }

  return (
    <div className='my-10 flex items-center justify-between container mx-auto'>
      <img className='w-[150px] h-[150px] object-cover my-5 shadow-sm' src={cart?.image} alt="" />
      <div>
        <div className='text-2xl font-bold'>{cart?.title}</div>
        <div className='bg-slate-300 text-red-500'>{cart?.description}</div>
      </div>
      <div className='font-bold'>{cart?.price} AZN ({cart?.quantity})</div>
      <div onClick={deleteProductFromcart} className='bg-red-500 text-white w-[180px] h-12 text-base flex items-center justify-center cursor-pointer rounded-md '><span>Delete Product</span></div>
    </div>
  )
}

export default CartComponent