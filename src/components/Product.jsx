import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();
  
  let truncatedTitle = product?.title;
 
  if (truncatedTitle.length > 15) {
    truncatedTitle = truncatedTitle.slice(0, 25) + '...';
  }

  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='outline-[0.1px] outline-slate-50 outline w-1/4 cursor-pointer text-center '>
      <img src={product?.image} alt="" className='w-44 h-44 m-auto my-5 hover:scale-125 duration-500' />
      <div className='text-center '>
        <p>{truncatedTitle}</p>
      </div>
      <div className='my-5'>{product?.price} <span className='text-sm'>$</span></div>
    </div>
  );
};

export default Product;
