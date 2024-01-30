import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    cartsFetch: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const isItemCart = state.cartsFetch.find(item => item.id === action.payload.id)

            if (isItemCart) {
                const tempCart = state.cartsFetch.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQuantity = item.quantity + action.payload.quantity
                        let tempTotalPrice = tempQuantity + item.price
                        return {
                            ...item, quantity: tempQuantity, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })

                state.cartsFetch = tempCart;
                storeInLocalStorage(state.cartsFetch)

            } else {

                state.cartsFetch.push(action.payload)
                storeInLocalStorage(state.cartsFetch)
            }
        },

        removeFromCart: (state, action) => {

            const tempCart = state.cartsFetch.filter(item => item.id !== action.payload)
            state.cartsFetch = tempCart
            storeInLocalStorage(state.cartsFetch)
        },
        clearFromCart: (state) => {

            state.cartsFetch = []
            storeInLocalStorage(state.cartsFetch)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.cartsFetch.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price*cartItem.quantity
            }, 0)
            state.itemCount = state.cartsFetch.length
        }
    }
})


export default cartSlice.reducer

export const { addTocart, removeFromCart, clearFromCart, getCartTotal } = cartSlice.actions