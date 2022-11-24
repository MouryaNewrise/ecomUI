import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import StoreProductSliceReducer from './StoreProductSlice';
import thunkAPIReducer from './ThunkSlice';

export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    storeProduct: StoreProductSliceReducer,
    thunkAPI: thunkAPIReducer,
  },
});

export default Store;

// import {configureStore} from '@reduxjs/toolkit';
// // import {forgotPasswordReducer, userReducer} from './Reducers/UserReducer';
// import {productsReducer} from './reducer/ProductReducer';
// import {StoreProductSlice} from './StoreProductSlice';

// const Store = configureStore({
//   reducer: {
//     // products: productsReducer,
//     storeProduct: StoreProductSlice,
//   },
// });
// export default Store;
