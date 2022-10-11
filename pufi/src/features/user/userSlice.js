import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : [],
  favourites: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addProduct : (state, action) => {
      state.cart.push(action.payload)
    },
    removeProduct : (state, action) => {
      state.cart = state.cart.filter((product) => {
        return product.id !== Number(action.payload)
      })
    },
    addFavourite : (state, action) => {
      state.favourites.push(action.payload)
    },
    removeFavourite : (state, action) => {
      state.favourites.filter((productId) => {
        return productId !== action.payload
      })
    }
  }
})

export const {addProduct, removeProduct, addFavourite, removeFavourite} = userSlice.actions

export const selectCart = (state) => state.user.cart
export const selectFavourite = (state) => state.user.favourites

export default userSlice.reducer