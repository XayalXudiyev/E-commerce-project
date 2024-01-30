

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getCategoryProducts } from "../redux/productSlice";
import Product from "./Product";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (category.length > 0) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, category]);

  return (
    <div className=" container   m-auto bg-white  ">
      {/* <h1 className="text-center bg-black text-white font-bold text-2xl py-3 mb-5  mx-auto  uppercase ">{category.length <= 0 ? <span>All Products</span> : category}</h1> */}
      <div className="flex max-h-[623px] overflow-y-auto flex-wrap mx-auto  justify-center ">
        {products && products.map((product, index) => (<Product key={index} product={product} />))}
      </div>
    </div>
  );
};

export default Products;

