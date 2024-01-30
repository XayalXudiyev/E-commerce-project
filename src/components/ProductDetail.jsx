// ProductDetail.jsx

import React from 'react'
import { useDispatch } from 'react-redux'
import { getDetailProduct } from '../redux/productSlice'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import DetailComponent from './detail/DetailComponent'

const ProductDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { productDetail } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getDetailProduct(id))
  }, [dispatch, id])



  return (
    <div>
      <DetailComponent productDetail={productDetail} />
    </div>
  )
}

export default ProductDetail
