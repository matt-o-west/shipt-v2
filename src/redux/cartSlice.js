import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import store from './store'

const initialState = {
  cart: [],
  amount: 0,
  quantity: 0,
  isLoading: true,
}

const walmartApi = createApi({
  reducerPath: 'walmartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://walmart.p.rapidapi.com/',
  }),
  endpoints: (builder) => ({
    searchProducts: builder.query({
      query: (searchTerm) => ({
        url: `v2/auto-complete?term=${searchTerm.replaceAll(/'\\s', '%20'/)}`,
      }),
    }),
    getReviews: builder.query({
      query: (productId, limit = 20, sort = 'relevancy') => ({
        url: `reviews/v2/list?usItemId=${productId}&limit=${limit}&page=1&sort=${sort}`,
      }),
    }),
  }),
})

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

export const { useSearchProductsQuery, useGetReviewsQuery } = walmartApi

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  actions

export default reducer
