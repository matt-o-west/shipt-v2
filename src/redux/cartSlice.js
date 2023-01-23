import { createSlice } from '@reduxjs/toolkit'
//import store from './store'

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
      //console.log(item)
      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
        //console.log(store.getState())
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

const { actions, reducer } = cartSlice

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  actions

export default reducer
