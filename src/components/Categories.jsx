import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/categorySlice'

const Categories = ({ setCategory }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className=' flex justify-around items-center   container m-auto outline outline-[1px] outline-slate-100 bg-white  py-3 mb-'>
                 <button onClick={refresh} className='text-wrap  py-2 px-3  cursor-pointer capitalize  focus:bg-orange-300 rounded focus:text-white'>All Products</button>
                {categories && categories.map((category, id) => (
                  
                    <div key={id} className=' flex items-center'>
                        
                        <button onClick={() => handleCategoryClick(category)} className='text-wrap  py-2 px-3  cursor-pointer capitalize  focus:bg-orange-300 rounded focus:text-white'>{category}</button>
                    </div>
                ))}

        </div>
    );
};

export default Categories