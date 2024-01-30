import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itemCount } = useSelector(state => state.carts)



  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex flex-col items-center  '>
      <div className='w-full  bg-orange-300 h-20 flex items-center '>
        <div className='flex justify-between mx-auto  container '>
          <div className='font-semibold text-2xl'>PHANTOM </div>
          <div className=' flex justify-between'>


            <NavLink to="/search ">
              <div className='flex items-center justify-between  bg-white rounded-2xl py-1 px-4 '>
                <input type="text"
                  placeholder='Search'
                  className='outline-none ' />
                <FiSearch size={24} className=''
                />
              </div>
            </NavLink>

            <div onClick={() => navigate('/cart')} className='cursor-pointer'>
              <div className='relative'>
                <SlBasket size={24} />
                <span className='bg-white font-bold rounded-full px-1  py-px text-xs -top-1 -right-2  absolute '>{itemCount}</span>
              </div>
            </div>
          </div>
       </div>
      </div>










      <div className='w-full shadow-md'>
        <div className='container w-1/2 h-14  mx-auto flex justify-between items-center  text-lg'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar