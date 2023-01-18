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
      console.log(
        `Added ${action.payload?.name} with id ${action.payload.id} to cart`
      )

      const item = state.cart.find((item) => item.id === action.payload.id)

      if (item) {
        console.log(item.quantity)
        item.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity += 1
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity -= 1
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload)
      state.cart.splice(index, 1)
    },
  },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
