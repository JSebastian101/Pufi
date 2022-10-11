import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/user/userSlice';
import productsSlice from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    products: productsSlice
  },
});
