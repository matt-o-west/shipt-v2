import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import store from './store'

const initialState = {
  cart: [],
  amount: 0,
  quantity: 0,
  isLoading: true,
  auth: '81c7ff456emsh15dd1877c019034p1c55acjsn3e24de972fd9',
}

export const walmartApi = createApi({
  reducerPath: 'walmartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://walmart.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'x-rapidapi-key',
        '81c7ff456emsh15dd1877c019034p1c55acjsn3e24de972fd9'
      )
      headers.set('x-rapidapi-host', 'walmart.p.rapidapi.com')
      return headers
    },
  }),
  endpoints: (builder) => ({
    searchProducts: builder.query({
      query: (searchTerm) => ({
        url: `v2/auto-complete`,
        params: {
          limit: 10,
          term: searchTerm,
        },
      }),
    }),
    getAllProducts: builder.query({
      query: (searchTerm) => ({
        url: `v2/search?query=${searchTerm.replace(/\s/g, '%20')}`,
        params: {
          limit: 10,
          term: searchTerm.replace(/\s/g, '%20'),
        },
      }),
    }),
    getReviews: builder.query({
      query: (productId, limit = 20, sort = 'relevancy') => ({
        url: `reviews/v2/list?usItemId=${productId}&limit=${limit}&page=1&sort=${sort}`,
        params: {
          limit: 10,
          term: searchTerm.replace(/\s/g, '%20'),
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `products/v3/get-details?usItemId=${productId}`,
        params: {
          limit: 10,
          term: searchTerm.replace(/\s/g, '%20'),
        },
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

export const {
  useSearchProductsQuery,
  useGetReviewsQuery,
  useGetProductDetailsQuery,
} = walmartApi

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  actions

export default reducer
