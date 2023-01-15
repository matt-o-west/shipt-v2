import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  amount: 0,
  quantity: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity--
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
