import { configureStore } from '@reduxjs/toolkit'
//import { aliexpress } from './services/aliExpressService'
import cartReducer from './cartSlice'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

/*const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'],
}*/

//const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  reducer: cartReducer,
  extraReducers: (builder) => {
    builder.addCase('aliexpress/getProducts/fulfilled', (state, action) => {
      state.products = action.payload
      state.isLoading = false
    })
  },
})

export default store
