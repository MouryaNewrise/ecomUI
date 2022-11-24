import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  storeProduct: [],
};

export const storeSlice = createSlice({
  name: 'storeProduct',
  initialState,
  reducers: {
    addStoreProduct: (state, {action}) => {
      state.storeProduct = action;
    },
  },
});

export const {addStoreProduct} = storeSlice.actions;

// export const getAllStoreData = state => state.storeProduct.storeProduct;
export default storeSlice.reducer;
