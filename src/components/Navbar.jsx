import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { itemCount } = useSelector(state => state.carts);



  return (
    <div className='flex flex-col items-center'>
      <div className='w-full bg-orange-300 h-20 flex items-center'>
        <div className='flex justify-between mx-auto container'>
          <div className='font-semibold text-2xl'><a href="/"> PHANTOM </a></div>
          <div className='flex justify-between'>



            <NavLink to='cart' className='cursor-pointer'>
              <div className='relative'>
                <SlBasket size={24} />
                <span className='bg-white font-bold rounded-full px-1  py-px text-xs -top-1 -right-2  absolute'>{itemCount}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='w-full shadow-md'>
        <div className='container w-1/2 h-14 mx-auto flex justify-between items-center text-lg'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
