import {configureStore} from '@reduxjs/toolkit';
import actionReducer from './StoreProductSlice';
import ProductReducer from './ProductSlice';
import StoreItemsReducer from './StoreAPISlice';

export const Store = configureStore({
  reducer: {
    action: actionReducer,
    product: ProductReducer,
    items: StoreItemsReducer,
  },
});

export default Store;
