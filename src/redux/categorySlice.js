import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

export const fetchCategories = createAsyncThunk(
    'category',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        return response.data;
    }
);

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

    },
});

export default categorySlice.reducer;
