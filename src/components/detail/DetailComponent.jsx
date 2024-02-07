import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTocart } from "../../redux/cartSlice"

const DetailComponent = ({ productDetail }) => {

    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const [addedToCart, setAddedToCart] = useState(false)


    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    const addBasket = () => {
        dispatch(addTocart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price }));
        window.location.reload();
    }


    return (
        <div>
            <div className='flex justify-center mt-10'>
                <div className='w-1/2'>
                    <img src={productDetail?.image} alt="" className='w-[400px] h-[400px] object-cover m-auto' />
                </div>
                <div className='w-1/2 mr-6'>
                    <div className='text-2xl font-bold bg-slate-100 w-fit  p-2 rounded '>{productDetail?.title}</div>
                    <div className=' p-3 '>{productDetail?.description}</div>
                    <div className='text-xl font-bold mt-5 bg-indigo-600 w-fit p-3 rounded-2xl text-yellow-300'>{productDetail?.price} <span className='text-sm'>AZN</span></div>
                    <div className='text-xl font-bold mt-5 text-red-600 uppercase'>{productDetail?.category}</div>
                    <div className='text-xl font-bold mt-5 text-yellow-500'> Rating : {productDetail?.rating?.rate} </div>
                    <div className='text-xl font-bold mt-5 text-green-600'>Count : {productDetail?.rating?.count} </div>

                    <div className="flex items-center gap-5 my-4">
                        <div className="text-3xl cursor-pointer " onClick={decrementQuantity} >  -</div>
                        <input type="text" value={quantity} className="w-48 text-center text-3xl font-bold focus:outline-none" />
                        <div className="text-3xl cursor-pointer" onClick={incrementQuantity}>+</div>
                    </div>
                    <div onClick={addBasket} className="border  w-56 font-bold rounded bg-gray-200 cursor-pointer my-4  h-16 flex justify-center items-center">Add To Cart</div>
                </div>
            </div>
        </div>
    )
}

export default DetailComponent