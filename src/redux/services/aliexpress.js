//import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aliexpressApi = createApi({
  reducerPath: 'aliexpressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://aliexpress-datahub.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '81c7ff456emsh15dd1877c019034p1c55acjsn3e24de972fd9'
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/item_search?q=$iphone&page=$1`,
    }),
  }),
})

export const { useGetProductsQuery } = aliexpressApi
