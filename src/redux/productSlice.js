//productSlice

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from "axios";

const initialState = {
  products: [],
  productDetail: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'getproducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const getDetailProduct = createAsyncThunk(
  'getproduct',
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

export const getCategoryProducts = createAsyncThunk(
  'getcategoryproducts',
  async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });


    builder.addCase(getDetailProduct.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetail = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });


    builder.addCase(getCategoryProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

  }
});

export default productSlice.reducer;

