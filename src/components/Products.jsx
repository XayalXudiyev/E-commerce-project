import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getCategoryProducts } from "../redux/productSlice";
import Product from "./Product";
import { FiSearch } from "react-icons/fi";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories)

  console.log(categories)

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category.length > 0) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    // axtaris olmaynda hamisi gorunsun
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (searchTerm) => {
    const filtered = products?.filter(product => product?.title?.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div className="container m-auto bg-white  flex flex-col ">


      <div className='flex items-center border rounded-2xl w-1/5   my-3 shadow-lg mx-auto  justify-center h-10 '>

        <input type='text' placeholder='Search Product' onChange={(e) => handleSearch(e.target.value)} className='outline-none' />

        <div className="">
          <FiSearch size={24} className='' />
        </div>
      </div>




      <div className="flex max-h-[623px] overflow-y-auto flex-wrap mx-auto justify-center">
        {filteredProducts && filteredProducts.map((product, index) => (<Product key={index} product={product} />))}
      </div>
    </div>
  );
};

export default Products;
