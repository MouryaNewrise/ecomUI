import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';
export const Store = configureStore({
  reducer: {
    product: ProductReducer,
    toCart: CartReducer,
  },
});

export default Store;
