import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products : []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct : (state, action) => {
      state.products.push(action.payload)
    },
    removeProduct : (state, action) => {
      state.products.filter((product) => {
        return product.id !== action.payload
      })
    },
    setInitialProducts : (state, action) => {
      state.products = [...action.payload]
    }
  }
})

export const {setProduct, removeProduct, setInitialProducts} = productsSlice.actions

export const selectProducts = (state) => state.user.products

export default productsSlice.reducer