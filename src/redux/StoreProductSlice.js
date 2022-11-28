import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  items: [],
  hidden: true,
  cartItem: 0,
  quantity: 0,
  totalCount: 0,
};

export const storeSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    add: (state, actions) => {
      state.items.push();
    },
    remove: () => {
      state.items.filter(item => action(item.id));
    },
    increment: (state, actions) => {
      state.quantity += 1;
    },
    decrement: () => {
      state.quantity -= 1;
    },
    total: () => {
      state.quantity == action.quantity;
    },
    clearCart: () => {},
  },
});

export const {addStoreProduct} = storeSlice.actions;
export default storeSlice.reducer;
